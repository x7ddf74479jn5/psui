import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox.Root className="h-8 w-8">
        <Checkbox.Indicator>X</Checkbox.Indicator>
      </Checkbox.Root>
      <label>Default</label>
    </div>
  ),
};
