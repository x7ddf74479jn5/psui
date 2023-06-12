import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "../utils";

/**
 * ユーザーが指定された範囲から値を選択する入力です。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/slider
 *
 * Default Classes: ~ "relative flex w-full touch-none select-none items-center" ~
 *
 */
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-200 ">
      <SliderPrimitive.Range className="absolute h-full bg-slate-900  " />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-slate-900 bg-base transition-colors focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 " />
  </SliderPrimitive.Root>
));
Slider.displayName = "Slider";

export { Slider };
