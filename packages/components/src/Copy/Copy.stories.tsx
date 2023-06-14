import type { Meta, StoryObj } from "@storybook/react";

import { Copy } from "./Copy";

const meta = {
  title: "Components/Copy",
  component: Copy,
  tags: ["autodocs"],
} satisfies Meta<typeof Copy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    contentToCopy: "コピーした内容",
  },
  render: (args) => (
    <div className="relative h-8 w-8">
      <Copy contentToCopy={args.contentToCopy} />
    </div>
  ),
};
