import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./Label";
import { Checkbox } from "../Checkbox";
import { CheckIcon } from "lucide-react";

const meta = {
  title: "Label",
  component: Label,
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "LABEL",
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <Label htmlFor="terms">{args.children}</Label>
    </div>
  ),
};