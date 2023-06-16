import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

/**
 * ユーザーが選択できるオプションのリストを表示し、ボタンでトリガーします。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/select
 *
 * Trigger Default Classes: ~ "flex h-10 w-full items-center justify-between rounded-md border border-line bg-input py-2 px-3 text-sm text-input-content placeholder:text-input-content-2 focus:outline-none focus:ring-2 focus:ring-line focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 " ~
 *
 * Icon Default Classes: ~ "h-4 w-4 opacity-50" ~
 *
 * Content Default Classes: ~ "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay text-overlay-content shadow-md animate-in fade-in-80" ~
 *
 * Label Default Classes: ~ "py-1.5 pr-2 pl-8 text-md font-semibold text-overlay-content-3" ~
 *
 * Item Default Classes: ~ "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm font-medium outline-none focus:bg-primary focus:text-primary-content data-[disabled]:pointer-events-none data-[disabled]:opacity-50" ~
 *
 * Separator Default Classes: ~ "-mx-1 my-1 h-px bg-line" ~
 */
const meta = {
  title: "Components/Select",
  component: Select,
  // @ts-ignore
  subcomponents: { ...Select },
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
