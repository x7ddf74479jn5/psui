import type { Meta, StoryObj } from "@storybook/react";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./HoverCard";

/**
 * リンクの後ろにあるコンテンツをプレビューするためのものです。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/hover-card
 *
 * HoverCardContent Default Classes: ~ "z-50 w-64 rounded-md border border-line bg-white p-4 shadow-theme-md outline-none animate-in zoom-in-90  " ~
 */
const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  // @ts-ignore
  subcomponents: { HoverCardContent, HoverCardTrigger },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]">
          <img
            className="block h-[45px] w-[45px] rounded-full"
            src="https://picsum.photos/seed/psui/200/300"
            alt="PSUI"
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        sideOffset={5}
      >
        <div className="flex flex-col gap-[7px]">
          <img
            className="block h-[60px] w-[60px] rounded-full"
            src="https://picsum.photos/seed/psui/200/300"
            alt="PSUI"
          />
          <div className="flex flex-col gap-[15px]">
            <div>
              <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                PSUI
              </div>
              <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                @psui
              </div>
            </div>
            <div className="text-mauve12 m-0 text-[15px] leading-[1.5]">
              UI library with Radix UI and Tailwind CSS.
            </div>
            <div className="flex gap-[15px]">
              <div className="flex gap-[5px]">
                <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                  0
                </div>{" "}
                <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                  Following
                </div>
              </div>
              <div className="flex gap-[5px]">
                <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                  2,900
                </div>{" "}
                <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                  Followers
                </div>
              </div>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
