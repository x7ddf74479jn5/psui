import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "./TextArea";
import { Label } from "../Label";

const meta = {
  title: "TextArea",
  component: TextArea,
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Description",
  },
  render: (args) => (
    <div className="flex flex-col gap-4 w-[400px]">
      <Label htmlFor="Description">{args.children}</Label>
      <TextArea id="Description" />
    </div>
  ),
};
