import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";
import { Label } from "../Label";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <div className="flex items-center gap-4">
      <Switch id="airplane-mode" />
      <Label.Root htmlFor="airplane-mode">機内モード</Label.Root>
    </div>
  ),
};
