import type { Meta, StoryObj } from "@storybook/react";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";

import { Collapsible } from "./Collapsible";
import { useState } from "react";

const meta = {
  title: "Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * パネルの拡大・縮小を行うインタラクティブなコンポーネントです。
 *
 * [Radix Docs]{@link "https://www.radix-ui.com/docs/primitives/components/collapsible"}
 *
 */
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
          <span className="text-2xl mr-6">
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
