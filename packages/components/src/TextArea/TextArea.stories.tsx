import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "../Label";
import { TextArea } from "./TextArea";

const meta = {
  title: "Components/TextArea",
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
    <div className="flex w-[400px] flex-col gap-4">
      <Label.Root htmlFor="Description">{args.children}</Label.Root>
      <TextArea id="Description" />
    </div>
  ),
};
