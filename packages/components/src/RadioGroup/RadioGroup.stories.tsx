import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "./RadioGroup";
import { Label } from "../Label";

/**
 * ラジオボタンと呼ばれるチェック可能なボタンのセットで、一度に複数のボタンをチェックすることはできません。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/radio-group
 *
 * Root Default Classes: ~ "grid gap-2" ~
 *
 * Item Default Classes: ~ " h-4 w-4 rounded-full border border-line text-base-content hover:border-primary focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" ~
 *
 * Indicator Default Classes: ~ "h-2.5 w-2.5 fill-primary" ~
 *
 */
const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  // @ts-ignore
  subcomponents: { ...RadioGroup },
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
          <Label.Root htmlFor="r1">デフォルト</Label.Root>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroup.Item id="r2" value="comfortable">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <Label.Root htmlFor="r2">ワイド</Label.Root>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroup.Item id="r3" value="compact">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <Label.Root htmlFor="r3">コンパクト</Label.Root>
        </div>
      </RadioGroup.Root>
    </form>
  ),
};
