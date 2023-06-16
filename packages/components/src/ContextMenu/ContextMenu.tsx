import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import React from "react";

import { cn } from "../utils";

/**
 * 右クリックや長押しをトリガーに、ポインターの位置にあるメニューを表示します。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/context-menu
 *
 * SubTrigger Default Classes: ~ "flex cursor-default select-none items-center rounded-md-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-overlay data-[state=open]:bg-overlay-focus focus:ring-0 focus:ring-offset-0 focus:bg-overlay-focus" ~
 *
 * SubContent Default Classes: ~ "z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay-2 shadow-theme-md animate-in slide-in-from-left-1 " ~
 *
 * Content Default Classes: ~ "z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay text-overlay-content shadow-theme-md animate-in fade-in-80" ~
 *
 * Separator Default Classes: ~ "ml-auto text-xs tracking-widest text-overlay-content-2 text-opacity-70 group-focus:text-primary-content" ~
 *
 * Label Default Classes: ~ "px-2 py-1.5 text-sm font-semibold text-overlay-content " ~
 *
 * Shortcut Default Classes: ~ "ml-auto text-xs tracking-widest text-overlay-content-2 text-opacity-70 group-focus:text-primary-content" ~
 *
 * Item Default Classes: ~ "relative group flex cursor-default select-none items-center rounded-md py-1.5 px-2 text-sm font-medium outline-none focus:bg-primary text-overlay-content focus:text-primary-content data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:ring-0 focus:ring-offset-0 m-1" ~
 *
 * RadioItem Default Classes: ~ "relative flex group cursor-default select-none items-center rounded-md-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-overlay data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:ring-0 focus:ring-offset-0 focus:bg-primary focus:text-primary-content" ~
 *
 * CheckboxItem Default Classes: ~ "relative group flex cursor-default select-none items-center rounded-md-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-overlay data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:ring-0 focus:ring-offset-0 focus:bg-primary focus:text-primary-content" ~
 */
export const ContextMenu = () => {
  return <></>;
};

const Root = ContextMenuPrimitive.Root;
Root.displayName = "ContextMenu.Root";
ContextMenu.Root = Root;

const Trigger = ContextMenuPrimitive.Trigger;
Trigger.displayName = "ContextMenu.Trigger";
ContextMenu.Trigger = Trigger;

const Group = ContextMenuPrimitive.Group;
Group.displayName = "ContextMenu.Group";
ContextMenu.Group = Group;

const Portal = ContextMenuPrimitive.Portal;
Portal.displayName = "ContextMenu.Portal";
ContextMenu.Portal = Portal;

const Sub = ContextMenuPrimitive.Sub;
Sub.displayName = "ContextMenu.Sub";
ContextMenu.Sub = Sub;

const RadioGroup = ContextMenuPrimitive.RadioGroup;
RadioGroup.displayName = "ContextMenu.RadioGroup";
ContextMenu.RadioGroup = RadioGroup;

/**
 * Default Classes: ~ "flex cursor-default select-none items-center rounded-md-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-overlay data-[state=open]:bg-overlay-focus focus:ring-0 focus:ring-offset-0 focus:bg-overlay-focus" ~
 *
 */
const SubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ children, className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "rounded-md-sm flex cursor-default select-none items-center px-2 py-1.5 text-sm font-medium outline-none focus:bg-overlay-focus focus:ring-0 focus:ring-offset-0 data-[state=open]:bg-overlay-focus",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
SubTrigger.displayName = "ContextMenu.SubTrigger";
ContextMenu.SubTrigger = SubTrigger;

/**
 * Default Classes: ~ "z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay-2 shadow-theme-md animate-in slide-in-from-left-1 " ~
 *
 */
const SubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "shadow-theme-md animate-in slide-in-from-left-1 z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay-2 ",
      className
    )}
    {...props}
  />
));
SubContent.displayName = "ContextMenu.SubContent";
ContextMenu.SubContent = SubContent;

/**
 * Default Classes: ~ "z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay text-overlay-content shadow-theme-md animate-in fade-in-80" ~
 *
 */
const Content = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "shadow-theme-md animate-in fade-in-80 z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay text-overlay-content",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
Content.displayName = "ContextMenu.Content";
ContextMenu.Content = Content;

/**
 * Default Classes: ~ "relative group flex cursor-default select-none items-center rounded-md py-1.5 px-2 text-sm font-medium outline-none focus:bg-primary text-overlay-content focus:text-primary-content data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:ring-0 focus:ring-offset-0 m-1" ~
 *
 */
const Item = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "group relative m-1 flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm font-medium text-overlay-content outline-none focus:bg-primary focus:text-primary-content focus:ring-0 focus:ring-offset-0 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
Item.displayName = "ContextMenu.Item";
ContextMenu.Item = Item;

/**
 * Default Classes: ~ "relative group flex cursor-default select-none items-center rounded-md-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-overlay data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:ring-0 focus:ring-offset-0 focus:bg-primary focus:text-primary-content" ~
 *
 */
const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ checked, children, className, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "rounded-md-sm group relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-primary focus:text-primary-content focus:ring-0 focus:ring-offset-0 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));

CheckboxItem.displayName = "ContextMenu.CheckboxItem";
ContextMenu.CheckboxItem = CheckboxItem;

/**
 * Default Classes: ~ "relative flex group cursor-default select-none items-center rounded-md-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-overlay data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:ring-0 focus:ring-offset-0 focus:bg-primary focus:text-primary-content" ~
 *
 */
const RadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ children, className, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "rounded-md-sm group relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-primary focus:text-primary-content focus:ring-0 focus:ring-offset-0 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
RadioItem.displayName = "ContextMenu.RadioItem";
ContextMenu.RadioItem = RadioItem;

/**
 * Default Classes: ~ "px-2 py-1.5 text-sm font-semibold text-overlay-content " ~
 *
 */
const Label = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-overlay-content ",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
Label.displayName = "ContextMenu.Label";
ContextMenu.Label = Label;

/**
 * Default Classes: ~ "-mx-1 my-1 h-px bg-line" ~
 *
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-line", className)}
    {...props}
  />
));
Separator.displayName = "ContextMenu.Separator";
ContextMenu.Separator = Separator;

/**
 * Default Classes: ~ "ml-auto text-xs tracking-widest text-overlay-content-2 text-opacity-70 group-focus:text-primary-content" ~
 *
 */
const Shortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-overlay-content-2 text-opacity-70 group-focus:text-primary-content",
        className
      )}
      {...props}
    />
  );
};
Shortcut.displayName = "ContextMenu.Shortcut";
ContextMenu.Shortcut = Shortcut;
