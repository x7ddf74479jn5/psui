import { Cross2Icon, RowSpacingIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Collapsible } from "./Collapsible";

/**
 * パネルの拡大・縮小を行うインタラクティブなコンポーネントです。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/collapsible
 *
 */
const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  // @ts-ignore
  subcomponents: { ...Collapsible },
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Collapsible.Root
        className="CollapsibleRoot"
        open={open}
        onOpenChange={setOpen}
      >
        <div className="flex items-center justify-between">
          <span className="mr-6 text-2xl">
            @x7ddf74479jn5 starred 3 repositories
          </span>
          <Collapsible.Trigger asChild>
            <button className="IconButton">
              {open ? <Cross2Icon /> : <RowSpacingIcon />}
            </button>
          </Collapsible.Trigger>
        </div>

        <div className="Repository">
          <span className="Text">@radix-ui/primitives</span>
        </div>

        <Collapsible.Content>
          <div className="Repository">
            <span className="Text">@radix-ui/colors</span>
          </div>
          <div className="Repository">
            <span className="Text">@stitches/react</span>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    );
  },
};
