import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "../Label";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <div className="flex items-center gap-4">
      <Input id="email" />
      <Label.Root htmlFor="email">Email</Label.Root>
    </div>
  ),
};
