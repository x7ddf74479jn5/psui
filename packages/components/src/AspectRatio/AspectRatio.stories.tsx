import type { Meta, StoryObj } from "@storybook/react";

import { AspectRatio } from "./AspectRatio";

const meta = {
  title: "AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <img
        alt="Photo by Alvaro Pinot"
        className="rounded-md object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
      />
    ),
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio ratio={1.7777777777777777}>{args.children}</AspectRatio>
    </div>
  ),
};