import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select.Root>
      <Select.Trigger className="w-[180px]">
        <Select.Value placeholder="食べ物を選んでください" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>フルーツ</Select.Label>

          <Select.Item value="りんご">りんご</Select.Item>

          <Select.Item value="バナナ">バナナ</Select.Item>

          <Select.Item value="ブルーベリー">ブルーベリー</Select.Item>

          <Select.Item value="ぶどう">グレープ</Select.Item>

          <Select.Item value="パイナップル">パイナップル</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>野菜</Select.Label>

          <Select.Item value="なす">なす</Select.Item>

          <Select.Item value="ブロッコリー">ブロッコリー</Select.Item>
          <Select.Item disabled value="にんじん">
            <p>にんじん</p>
          </Select.Item>
          <Select.Item value="ズッキーニ">ズッキーニ</Select.Item>

          <Select.Item value="リーキ">リーキ</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>肉</Select.Label>

          <Select.Item value="牛肉">牛肉</Select.Item>

          <Select.Item value="鶏肉">鶏肉</Select.Item>

          <Select.Item value="羊肉">羊肉</Select.Item>

          <Select.Item value="豚肉">豚肉</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  ),
};
