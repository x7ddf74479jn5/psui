"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import * as React from "react";

import { cn } from "../utils";

/**
 * 縦に積み重なったインタラクティブな見出しで、それぞれ関連するコンテンツのセクションが表示されます。
 *
 * [Radix Docs]{@link "https://www.radix-ui.com/docs/primitives/components/accordion"}
 *
 * Item Default Classes: ~ "border-b border-b-line" ~
 *
 * Trigger Default Classes: ~ "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 w-fit" ~
 *
 * Content Default Classes: ~ "overflow-hidden text-sm transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up w-fit" ~
 *
 */
export const Accordion = (
  props: React.ComponentProps<typeof AccordionPrimitive.Root>
) => {
  return <></>;
};

const Root = AccordionPrimitive.Root;
Root.displayName = "Accordion.Root";
Accordion.Root = Root;

/**
 * Default Classes: ~ "border-b border-b-line" ~
 *
 */
const Item = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-b-line", className)}
    {...props}
  />
));
Item.displayName = "Accordion.Item";
Accordion.Item = Item;

/**
 * Default Classes: ~ "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 w-fit" ~
 *
 */
const Trigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex w-fit flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
Trigger.displayName = "Accordion.Trigger";
Accordion.Trigger = Trigger;

/**
 * Default Classes: ~ "overflow-hidden text-sm transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up w-fit" ~
 * Some other content
 */
const Content = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up w-fit overflow-hidden text-sm transition-all",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
Content.displayName = "Accordion.Content";
Accordion.Content = Content;
