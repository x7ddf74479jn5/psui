import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

/**
 * ユーザーを表現するためのフォールバックを持つ画像要素です。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/avatar
 *
 * Root Default Classes: ~ "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full" ~
 *
 * Image Default Classes: ~ "aspect-square object-cover h-full w-full" ~
 *
 * Fallback Default Classes: ~ "flex h-full w-full items-center justify-center rounded-full bg-base-content text-base" ~
 */
const meta = {
  title: "Components/Avatar",
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

/**
 * src属性が正しく提供されない場合、フォールバックテキストを表示します。
 */
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
