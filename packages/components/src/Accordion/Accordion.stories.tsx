import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

const meta = {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      type: { name: "string", required: true },
      options: ["single", "multiple"],
      control: { type: "radio" },
      description: "Accordion Itemの開閉方法",
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
            <p>
              type属性（必須）によってAccordion Itemの開閉方法が変わります。
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="item-2">
        <Accordion.Trigger>SINGLE</Accordion.Trigger>
        <Accordion.Content>
          <p>type=&quot;single&quot;: Accordion Itemをひとつずつ開閉します。</p>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="item-3">
        <Accordion.Trigger>MULTIPLE</Accordion.Trigger>
        <Accordion.Content>
          <p>type=&quot;multiple&quot;: Accordion Itemを一斉に開閉します。</p>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};
