import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";

import { cn } from "../utils";

/**
 * チェック済みと未チェックの切り替えができるコントロールです。
 *
 * [Radix Docs]{@link "https://www.radix-ui.com/docs/primitives/components/checkbox"}
 *
 * Root Default Classes: ~ "peer h-4 w-4 shrink-0 rounded-sm border border-line focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-input" ~
 *
 * Indicator Default Classes: ~ "flex items-center justify-center" ~
 *
 */
export const Checkbox = ({
  className,
}: {
  /**
   * コンポーネントに適用するクラス名
   */
  className?: string;
}) => {
  return (
    <Checkbox.Root className={className}>
      <Checkbox.Indicator className={cn("flex items-center justify-center")}>
        <Check className="h-4 w-4" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
};

Checkbox.displayName = "Checkbox";

/**
 * Default Classes: ~ "peer h-4 w-4 shrink-0 rounded-sm border border-line focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-input" ~
 *
 */
const Root = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-line bg-input focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {props.children}
  </CheckboxPrimitive.Root>
));

Root.displayName = "Checkbox.Root";
Checkbox.Root = Root;

/**
 * Default Classes: ~ "flex items-center justify-center" ~
 *
 */
const Indicator = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator>
>(({ children, className, ...props }, ref) => (
  <CheckboxPrimitive.Indicator
    ref={ref}
    className={cn("flex items-center justify-center")}
    {...props}
  >
    {children || <Check className="h-4 w-4" />}
  </CheckboxPrimitive.Indicator>
));

Indicator.displayName = "Checkbox.Indicator";
Checkbox.Indicator = Indicator;
