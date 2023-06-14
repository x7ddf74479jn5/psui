import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "./Separator";

const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <div className="w-full max-w-[300px] mx-[15px] bg-primary grid place-content-center p-4">
      <div className="text-white text-[15px] leading-5 font-medium">PSUI</div>
      <div className="text-white text-[15px] leading-5">
        UIコンポーネントライブラリ
      </div>
      <Separator className="my-[15px]" />
      <div className="flex h-5 items-center">
        <div className="text-white text-[15px] leading-5">Blog</div>
        <Separator className="mx-[15px]" decorative orientation="vertical" />
        <div className="text-white text-[15px] leading-5">Docs</div>
        <Separator className="mx-[15px]" decorative orientation="vertical" />
        <div className="text-white text-[15px] leading-5">Source</div>
      </div>
    </div>
  ),
};
