import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "../utils";

/**
 * タスクの完了状況を示すインジケータを表示し、通常はプログレスバーとして表示される。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/progress
 *
 * Root Default Classes: ~ "relative h-4 w-full overflow-hidden rounded-full bg-input" ~
 *
 * Indicator Default Styles: ~ "transform: `translateX(-${100 - (value || 0)}%)`" ~
 *
 */
export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, color, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-input",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn("h-full w-full flex-1 transition-all", color)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = "Progress";
