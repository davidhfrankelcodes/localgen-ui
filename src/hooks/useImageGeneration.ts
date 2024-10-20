import { fetchImage } from "@/lib/api/fetchImage";
import { addImage as saveImageLocally } from "@/lib/idb/imageStore";
import { generatedImagesAtom } from "@/store/atoms";
import { GeneratedImage } from "@/types";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useLoadApiKey } from "./useLoadApiKey";

export function useImageGeneration() {
  const [images, dispatch] = useAtom(generatedImagesAtom);
  const { apiKey } = useLoadApiKey();

  useEffect(() => {
    const pendingImages = images.filter(
      (image) => image.state === "pending" && !image.isProcessing
    );

    pendingImages.forEach((image) => {
      dispatch({
        type: "UPDATE_IMAGE",
        id: image.id,
        data: { isProcessing: true },
      });

      (async () => {
        try {
          const result = await fetchImage(image.usedOptions, apiKey);
          const updatedImage: GeneratedImage = {
            ...image,
            image: result.url, // The generated image URL
            revisedPrompt: result.revisedPrompt, // Revised prompt (if any)
            state: "generated", // Mark as generated
            cost: result.cost, // API cost or usage cost
          };

          dispatch({
            type: "UPDATE_IMAGE",
            id: image.id,
            data: updatedImage,
          });

          await saveImageLocally({ ...updatedImage, locallySaved: true });

          dispatch({
            type: "UPDATE_IMAGE",
            id: image.id,
            data: {
              state: "saved",
              locallySaved: true,
            },
          });
        } catch (error) {
          dispatch({
            type: "UPDATE_IMAGE",
            id: image.id,
            data: {
              state: "error",
              error: (error as Error).message,
            },
          });
        } finally {
          dispatch({
            type: "UPDATE_IMAGE",
            id: image.id,
            data: { isProcessing: false },
          });
        }
      })();
    });
  }, [images, dispatch]);
}
