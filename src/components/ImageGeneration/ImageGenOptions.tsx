import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InteractiveRangeSlider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { smallDeviceMediaQuery } from "@/config/app";
import { MAX_IMAGES, MIN_IMAGES } from "@/config/imageGeneration";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { generationOptionsAtom } from "@/store/atoms";
import { StyleValue } from "@/types";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { useAtom } from "jotai";
import { GemIcon } from "lucide-react";
import { AspectRatioToggle } from "./AspectRatioToggle";

export const ImageGenOptions = () => {
  const isSmallDevice = useMediaQuery(smallDeviceMediaQuery);
  const [generationOptions, setGenerationOptions] = useAtom(
    generationOptionsAtom
  );

  const onStyleChange = (value: string) => {
    if (value === "natural" || value === "vivid") {
      setGenerationOptions({
        ...generationOptions,
        style: value as StyleValue,
      });
    }
  };

  const onHdQualityToggle = () => {
    setGenerationOptions({
      ...generationOptions,
      hdQuality: !generationOptions.hdQuality,
    });
  };

  const onNumImagesChange = (value: number) => {
    setGenerationOptions({
      ...generationOptions,
      numImages: value,
    });
  };

  return (
    <>
      <div className="space-y-2">
        <AspectRatioToggle
          aspectRatio={generationOptions.aspectRatio}
          setAspectRatio={(newAspectRatio) =>
            setGenerationOptions({
              ...generationOptions,
              aspectRatio: newAspectRatio,
            })
          }
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <ToggleGroup
            type="single"
            value={generationOptions.style}
            onValueChange={onStyleChange}
            className="justify-start"
          >
            <ToggleGroupItem value="natural" aria-label="Natural">
              Natural
            </ToggleGroupItem>
            <ToggleGroupItem value="vivid" aria-label="Vivid">
              Vivid
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="flex items-center space-x-2">
          <TogglePrimitive.Root
            aria-label="Toggle HD Quality"
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md bg-transparent px-3 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
              generationOptions.hdQuality ? "text-primary" : "text-zinc-200"
            )}
            pressed={generationOptions.hdQuality}
            onPressedChange={onHdQualityToggle}
          >
            <GemIcon className={"mr-2 h-4 w-4"} />
            HD Quality
          </TogglePrimitive.Root>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="model" className="mr-2 text-sm font-medium">
          Model:
        </label>
        <Select defaultValue="dall-e-3" disabled>
          <SelectTrigger>
            <SelectValue id="model" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>OpenAI</SelectLabel>
              <SelectItem value="dall-e-3">DALL-E 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className={"" + (!isSmallDevice && " hidden")}>
        <Label htmlFor="num-images">
          Number of Images: {generationOptions.numImages}
        </Label>
        <InteractiveRangeSlider
          min={MIN_IMAGES}
          max={MAX_IMAGES}
          step={1}
          value={generationOptions.numImages}
          setValue={onNumImagesChange}
        />
      </div>
    </>
  );
};
