import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";

import { cn } from "../utils";

/**
 * コントロールに関連するアクセシブルラベルをレンダリングします。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/label
 *
 * Root Default Classes: ~ "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" ~
 *
 */
export const Label = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <Label.Root
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
  >
    {children}
  </Label.Root>
);
Label.displayName = "Label";

/**
 * Default Classes: ~ "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" ~
 *
 */
const Root = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
Root.displayName = "Label.Root";
Label.Root = Root;
