import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";
import { Label } from "../Label";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Email" },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Input id="email" />
      <Label htmlFor="email">{args.children}</Label>
    </div>
  ),
};
