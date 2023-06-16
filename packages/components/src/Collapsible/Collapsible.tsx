import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

/**
 * パネルの拡大・縮小を行うインタラクティブなコンポーネントです。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/collapsible
 *
 */
export const Collapsible = () => {
  return <></>;
};

const Root = CollapsiblePrimitive.Root;
Root.displayName = "Collapsible.Root";
Collapsible.Root = Root;

const Trigger = CollapsiblePrimitive.Trigger;
Trigger.displayName = "Collapsible.Trigger";
Collapsible.Trigger = Trigger;

const Content = CollapsiblePrimitive.Content;
Content.displayName = "Collapsible.Content";
Collapsible.Content = Content;
