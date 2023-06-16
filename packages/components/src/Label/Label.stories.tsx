import type { Meta, StoryObj } from "@storybook/react";
import { CheckIcon } from "lucide-react";

import { Checkbox } from "../Checkbox";
import { Label } from "./Label";

const meta = {
  title: "Components/Label",
  component: Label,
  // @ts-ignore
  subcomponents: { ...Label },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ラベル",
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <Label.Root htmlFor="terms">{args.children}</Label.Root>
    </div>
  ),
};
