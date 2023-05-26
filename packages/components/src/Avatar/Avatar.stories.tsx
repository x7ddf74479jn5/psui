import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const meta = {
  title: "Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    alt: "Colm Tuite",
    fallback: "CT",
  },
  render: (args) => (
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image alt="Colm Tuite" className="AvatarImage" src={args.src} />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        <p>{args.fallback}</p>
      </Avatar.Fallback>
    </Avatar.Root>
  ),
};

export const Fallback: Story = {
  args: { src: "", alt: "", fallback: "CT" },
  render: (args) => (
    <Avatar.Root className="AvatarRoot">
      <Avatar.Fallback className="AvatarFallback">
        {args.fallback}
      </Avatar.Fallback>
    </Avatar.Root>
  ),
};
