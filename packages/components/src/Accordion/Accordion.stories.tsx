import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

/**
 * 縦に積み重なったインタラクティブな見出しで、それぞれ関連するコンテンツのセクションが表示されます。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/accordion
 *
 * Item Default Classes: ~ "border-b border-b-line" ~
 *
 * Trigger Default Classes: ~ "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 w-fit" ~
 *
 * Content Default Classes: ~ "overflow-hidden text-sm transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up w-fit" ~
 *
 */
const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      type: { name: "string", required: true },
      options: ["single", "multiple"],
      control: { type: "radio" },
      description: "AccordionItemの開閉方法",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "single",
  },
  render: (args) => (
    // @ts-ignore
    <Accordion.Root
      className="AccordionRoot w-[400px]"
      collapsible={args.type === "single"}
      defaultValue={
        args.type === "single" ? "item-1" : ["item-1", "item-2", "item-3"]
      }
      type={args.type}
    >
      <Accordion.Item className="AccordionItem" value="item-1">
        <Accordion.Trigger>使い方</Accordion.Trigger>
        <Accordion.Content className="Accordion.Content">
          <div className="AccordionContentText w-full">
            <p>type属性（必須）によってAccordionItemの開閉方法が変わります。</p>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="item-2">
        <Accordion.Trigger>SINGLE</Accordion.Trigger>
        <Accordion.Content>
          <p>type=&quot;single&quot;: AccordionItemをひとつずつ開閉します。</p>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="item-3">
        <Accordion.Trigger>MULTIPLE</Accordion.Trigger>
        <Accordion.Content>
          <p>type=&quot;multiple&quot;: AccordionItemを一斉に開閉します。</p>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};
