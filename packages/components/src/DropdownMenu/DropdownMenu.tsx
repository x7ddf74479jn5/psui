import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "../utils";

/**
 * ボタンをきっかけに、ユーザーに対してメニュー（アクションや機能のセットなど）を表示する。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu
 *
 * SubTrigger Default Classes: ~ "flex cursor-default select-none items-center rounded-md-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-primary focus:text-primary-content data-[state=open]:bg-overlay-focus" ~
 *
 * SubComponent Default Classes: ~ "z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay text-overlay-content shadow-md animate-in slide-in-from-left-1 " ~
 *
 * Content Default Classes: ~ "z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay text-overlay-content shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 " ~
 *
 * Item Default Classes: ~ "relative flex cursor-default select-none items-center rounded-md-sm py-1.5 px-2 bg-overlay text-sm font-medium outline-none focus:bg-primary focus:text-primary-content data-[disabled]:pointer-events-none data-[disabled]:opacity-50 group" ~
 *
 * CheckboxItem Default Classes: ~ "relative flex cursor-default select-none items-center rounded-md-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 " ~
 *
 * RadioItem Default Classes: ~ "relative flex cursor-default select-none items-center rounded-md-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 " ~
 *
 * Label Default Classes: ~ "px-2 py-1.5 text-sm font-semibold text-overlay-content" ~
 *
 * Separator Default Classes: ~ "-mx-1 my-1 h-px bg-line" ~
 *
 * Shortcut Default Classes: ~ "ml-auto text-xs tracking-widest text-overlay-content-3 group-hover:text-primary-content" ~
 */
export const DropdownMenu = ({
  /**
   * DropdownMenuのサブコンポーネント
   */
  children,
  /**
   * コンポーネントに適用するクラス名
   */
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root> & {
  className?: string;
}) => {
  return <>{children}</>;
};

const Root = DropdownMenuPrimitive.Root;
Root.displayName = "DropdownMenu.Root";
DropdownMenu.Root = Root;

const Trigger = DropdownMenuPrimitive.Trigger;
Trigger.displayName = "DropdownMenu.Trigger";
DropdownMenu.Trigger = Trigger;

const Group = DropdownMenuPrimitive.Group;
Group.displayName = "DropdownMenu.Group";
DropdownMenu.Group = Group;

const Portal = DropdownMenuPrimitive.Portal;
Portal.displayName = "DropdownMenu.Portal";
DropdownMenu.Portal = Portal;

const Sub = DropdownMenuPrimitive.Sub;
Sub.displayName = "DropdownMenu.Sub";
DropdownMenu.Sub = Sub;

const RadioGroup = DropdownMenuPrimitive.RadioGroup;
RadioGroup.displayName = "DropdownMenu.RadioGroup";
DropdownMenu.RadioGroup = RadioGroup;

/**
 * Default Classes: ~ "flex cursor-default select-none items-center rounded-md-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-primary focus:text-primary-content data-[state=open]:bg-overlay-focus" ~
 *
 */
const SubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-md-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-primary focus:text-primary-content data-[state=open]:bg-overlay-focus",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
SubTrigger.displayName = "DropdownMenu.SubTrigger";
DropdownMenu.SubTrigger = SubTrigger;

/**
 * Default Classes: ~ "z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay text-overlay-content shadow-md animate-in slide-in-from-left-1 " ~
 *
 */
const SubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay text-overlay-content shadow-md animate-in slide-in-from-left-1 ",
      className
    )}
    {...props}
  />
));
SubContent.displayName = "DropdownMenu.SubContent";
DropdownMenu.SubContent = SubContent;

/**
 * Default Classes: ~ "z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay text-overlay-content shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 " ~
 *
 */
const Content = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay text-overlay-content shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 ",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
Content.displayName = "DropdownMenu.Content";
DropdownMenu.Content = Content;

/**
 * Default Classes: ~ "relative flex cursor-default select-none items-center rounded-md-sm py-1.5 px-2 bg-overlay text-sm font-medium outline-none focus:bg-primary focus:text-primary-content data-[disabled]:pointer-events-none data-[disabled]:opacity-50 group" ~
 *
 */
const Item = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-md-sm py-1.5 px-2 bg-overlay text-sm font-medium outline-none focus:bg-primary focus:text-primary-content data-[disabled]:pointer-events-none data-[disabled]:opacity-50 group",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
Item.displayName = "DropdownMenu.Item";
DropdownMenu.Item = Item;

/**
 * Default Classes: ~ "relative flex cursor-default select-none items-center rounded-md-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 " ~
 *
 */
const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-md-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
CheckboxItem.displayName = "DropdownMenu.CheckboxItem";
DropdownMenu.CheckboxItem = CheckboxItem;

/**
 * Default Classes: ~ "relative flex cursor-default select-none items-center rounded-md-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 " ~
 *
 */
const RadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-md-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
RadioItem.displayName = "DropdownMenu.RadioItem";
DropdownMenu.RadioItem = RadioItem;

/**
 * Default Classes: ~ "px-2 py-1.5 text-sm font-semibold text-overlay-content" ~
 *
 */
const Label = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-overlay-content",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
Label.displayName = "DropdownMenu.Label";
DropdownMenu.Label = Label;

/**
 * Default Classes: ~ "-mx-1 my-1 h-px bg-line" ~
 *
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-line", className)}
    {...props}
  />
));
Separator.displayName = "DropdownMenu.Separator";
DropdownMenu.Separator = Separator;

/**
 * Default Classes: ~ "ml-auto text-xs tracking-widest text-overlay-content-3 group-hover:text-primary-content" ~
 *
 */
const Shortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-overlay-content-3 group-hover:text-primary-content",
        className
      )}
      {...props}
    />
  );
};
Shortcut.displayName = "DropdownMenu.Shortcut";
DropdownMenu.Shortcut = Shortcut;
