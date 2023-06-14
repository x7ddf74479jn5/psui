import type { Meta, StoryObj } from "@storybook/react";

import { ScrollArea, ScrollBar } from "./ScrollArea";

const meta = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => {
    const TAGS = Array.from({ length: 50 }).map(
      (_, i, a) => `v1.2.0-beta.${a.length - i}`
    );

    return (
      <ScrollArea className="w-[200px] h-[225px] rounded overflow-hidden shadow-[0_2px_10px] shadow-blackA7 bg-white">
        <div className="py-[15px] px-5">
          <div className="text-violet11 text-[15px] leading-[18px] font-medium">
            Tags
          </div>
          {TAGS.map((tag) => (
            <div
              className="text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    );
  },
};
