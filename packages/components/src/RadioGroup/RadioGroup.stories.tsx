import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "./RadioGroup";
import { Label } from "../Label";

const meta = {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <form>
      <RadioGroup.Root defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroup.Item id="r1" value="default">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <Label.Root htmlFor="r1">Default</Label.Root>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroup.Item id="r2" value="comfortable">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <Label.Root htmlFor="r2">Comfortable</Label.Root>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroup.Item id="r3" value="compact">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <Label.Root htmlFor="r3">Compact</Label.Root>
        </div>
      </RadioGroup.Root>
    </form>
  ),
};
