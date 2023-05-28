import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "../utils";

/**
 * リンクの後ろにあるコンテンツをプレビューするためのものです。
 *
 * [Radix Docs]{@link "https://www.radix-ui.com/docs/primitives/components/hover-card"}
 *
 * HoverCardContent Default Classes: ~ "z-50 w-64 rounded-md border border-line bg-white p-4 shadow-theme-md outline-none animate-in zoom-in-90  " ~
 */
const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

/**
 * Default Classes: ~ "z-50 w-64 rounded-md border border-line bg-white p-4 shadow-theme-md outline-none animate-in zoom-in-90  " ~
 *
 */
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border border-line bg-white p-4 shadow-theme-md outline-none animate-in zoom-in-90  ",
      className
    )}
    {...props}
  />
));
HoverCardContent.displayName = "HoverCard.Content";

export { HoverCard, HoverCardTrigger, HoverCardContent };
