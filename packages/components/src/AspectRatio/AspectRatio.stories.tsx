import type { Meta, StoryObj } from "@storybook/react";

import { AspectRatio } from "./AspectRatio";

const meta = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <div className="w-[300px]">
      <AspectRatio ratio={1.7777777777777777}>
        <img
          alt="Photo by Alvaro Pinot"
          className="h-full w-full rounded-md object-cover"
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        />
      </AspectRatio>
    </div>
  ),
};
