"use client";
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "../utils";

/**
 * キーボードフォーカスを受けたり、マウスがその要素に重なったときに、その要素に関連する情報を表示するポップアップです。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/tooltip
 *
 * Arrow Default Classes: ~ "fill-overlay-2" ~
 *
 * Content Default Classes: ~ "z-50 overflow-hidden rounded-md bg-overlay-2 px-3 py-1.5 text-sm text-overlay-content shadow-theme-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1   " ~
 *
 */
export const Tooltip = ({ ...props }) => <TooltipPrimitive.Root {...props} />;
Tooltip.displayName = "Tooltip";

const Root = TooltipPrimitive.Root;
Root.displayName = "Tooltip.Root";
Tooltip.Root = Root;

const Provider = TooltipPrimitive.Provider;
Provider.displayName = "Tooltip.Provider";
Tooltip.Provider = Provider;

const Trigger = TooltipPrimitive.Trigger;
Trigger.displayName = "Tooltip.Trigger";
Tooltip.Trigger = Trigger;

const Portal = TooltipPrimitive.Portal;
Portal.displayName = "Tooltip.Portal";
Tooltip.Portal = Portal;

/**
 * Default Classes: ~ "fill-overlay-2" ~
 *
 */
const Arrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>((props, forwardedRef) => {
  return (
    <TooltipPrimitive.Arrow
      {...props}
      ref={forwardedRef}
      className={cn("fill-overlay-2", props.className)}
    />
  );
});
Arrow.displayName = "Tooltip.Arrow";
Tooltip.Arrow = Arrow;

/**
 * Default Classes: ~ "z-50 overflow-hidden rounded-md bg-overlay-2 px-3 py-1.5 text-sm text-overlay-content shadow-theme-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1   " ~
 *
 */
const Content = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md bg-overlay-2 px-3 py-1.5 text-sm text-overlay-content shadow-theme-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1   ",
      className
    )}
    {...props}
  />
));
Content.displayName = "Tooltip.Content";
Tooltip.Content = Content;
