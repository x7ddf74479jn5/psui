"use client";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as React from "react";

import { cn } from "../utils";

/**
 * 重要な内容でユーザーを中断させ、応答を期待するモーダルダイアログです。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/alert-dialog
 *
 * Portal Default Classes: ~ "fixed inset-0 z-50 flex items-end justify-center sm:items-center" ~
 *
 * Overlay Default Classes: ~ "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in" ~
 *
 * Content Default Classes: ~ "fixed z-50 grid w-full max-w-lg text-overlay-content scale-100 bg-overlay gap-4 p-6 opacity-100 animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-md rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full" ~
 *
 * Header Default Classes: ~ "flex flex-col space-y-2 text-center sm:text-left" ~
 *
 * Footer Default Classes: ~ "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2" ~
 *
 * Title Default Classes: ~ "text-lg font-semibold text-overlay-content-2" ~
 *
 * Description Default Classes: ~ "text-sm text-overlay-content" ~
 *
 * Action Default Classes: ~ "inline-flex h-10 items-center justify-center rounded-md bg-danger text-danger-content py-2 px-4 text-sm font-semibold transition-colors hover:bg-danger-focus focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" ~
 *
 * Cancel Default Classes: ~ "inline-flex h-10 items-center justify-center rounded-md border border-slate-200 py-2 px-4 text-sm font-semibold text-overlay-content transition-colors hover:bg-overlay-3 focus:outline-none focus:ring-1 focus:ring-line-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  sm:mt-0" ~
 */
const AlertDialog = () => {
  return <></>;
};

const Root = AlertDialogPrimitive.Root;
Root.displayName = "AlertDialog.Root";
AlertDialog.Root = Root;

const Trigger = AlertDialogPrimitive.Trigger;
Trigger.displayName = "AlertDialog.Trigger";
AlertDialog.Trigger = Trigger;

/**
 * Default Classes: ~ "fixed inset-0 z-50 flex items-end justify-center sm:items-center" ~
 */
const Portal = ({
  children,
  className,
  ...props
}: AlertDialogPrimitive.AlertDialogPortalProps) => (
  <AlertDialogPrimitive.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {children}
    </div>
  </AlertDialogPrimitive.Portal>
);
Portal.displayName = "AlertDialog.Portal";
AlertDialog.Portal = Portal;

/**
 * Default Classes: ~ "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in" ~
 *
 */
const Overlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ children, className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "animate-in fade-in fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity",
      className
    )}
    {...props}
    ref={ref}
  />
));
Overlay.displayName = "AlertDialog.Overlay";
AlertDialog.Overlay = Overlay;

/**
 * Default Classes: ~ "fixed z-50 grid w-full max-w-lg text-overlay-content scale-100 bg-overlay gap-4 p-6 opacity-100 animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-md rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full" ~
 *
 */
const Content = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <AlertDialogPrimitive.Content
    ref={ref}
    className={cn(
      "animate-in fade-in-90 slide-in-from-bottom-10 sm:zoom-in-90 sm:slide-in-from-bottom-0 fixed z-50 grid w-full max-w-lg scale-100 gap-4 rounded-lg bg-overlay p-6 text-overlay-content opacity-100 sm:rounded-md md:w-full",

      className
    )}
    {...props}
  >
    {children}
  </AlertDialogPrimitive.Content>
));
Content.displayName = "AlertDialog.Content";
AlertDialog.Content = Content;

/**
 * Default Classes: ~ "flex flex-col space-y-2 text-center sm:text-left" ~
 *
 */
const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
Header.displayName = "AlertDialog.Header";
AlertDialog.Header = Header;

/**
 * Default Classes: ~ "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2" ~
 *
 */
const Footer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
Footer.displayName = "AlertDialog.Footer";
AlertDialog.Footer = Footer;

/**
 * Default Classes: ~ "text-lg font-semibold text-overlay-content-2" ~
 *
 */
const Title = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-overlay-content-2", className)}
    {...props}
  />
));
Title.displayName = "AlertDialog.Title";
AlertDialog.Title = Title;

/**
 * Default Classes: ~ "text-sm text-overlay-content" ~
 *
 */
const Description = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-overlay-content", className)}
    {...props}
  />
));
Description.displayName = "AlertDialog.Description";
AlertDialog.Description = Description;

/**
 * Default Classes: ~ "inline-flex h-10 items-center justify-center rounded-md bg-danger text-danger-content py-2 px-4 text-sm font-semibold transition-colors hover:bg-danger-focus focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" ~
 *
 */
const Action = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-danger px-4 py-2 text-sm font-semibold text-danger-content transition-colors hover:bg-danger-focus focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Action.displayName = "AlertDialog.Action";
AlertDialog.Action = Action;

/**
 * Default Classes: ~ "inline-flex h-10 items-center justify-center rounded-md border border-slate-200 py-2 px-4 text-sm font-semibold text-overlay-content transition-colors hover:bg-overlay-3 focus:outline-none focus:ring-1 focus:ring-line-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  sm:mt-0" ~
 *
 */
const Cancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      "hover:bg-overlay-3 inline-flex h-10 items-center justify-center rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-overlay-content transition-colors focus:outline-none focus:ring-1 focus:ring-line-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  sm:mt-0",
      className
    )}
    {...props}
  />
));
Cancel.displayName = "AlertDialog.Cancel";
AlertDialog.Cancel = Cancel;

export { AlertDialog };
