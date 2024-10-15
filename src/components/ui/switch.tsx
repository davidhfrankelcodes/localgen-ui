import { forwardRef } from "preact/compat";
import { JSX } from "preact";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = forwardRef<HTMLButtonElement, JSX.IntrinsicElements["button"]>(
  ({ className, checked, defaultChecked, required, ...props }, ref) => (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      )}
      checked={checked as boolean}
      defaultChecked={defaultChecked as boolean}
      required={required as boolean}
      {...props}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitives.Root>
  )
);

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
