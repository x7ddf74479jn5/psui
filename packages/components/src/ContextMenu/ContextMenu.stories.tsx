import type { Meta, StoryObj } from "@storybook/react";

import { ContextMenu } from "./ContextMenu";
import { useState } from "react";

const meta = {
  title: "ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [person, setPerson] = useState("pedro");

    return (
      <ContextMenu.Root>
        <ContextMenu.Trigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-slate-200 text-sm dark:border-slate-700">
          右クリック可能
        </ContextMenu.Trigger>
        <ContextMenu.Content className="w-64">
          <ContextMenu.Item inset>
            戻る
            <ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item inset disabled>
            進む
            <ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item inset>
            更新
            <ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger inset>他のツール</ContextMenu.SubTrigger>
            <ContextMenu.SubContent className="w-48">
              <ContextMenu.Item>
                ページを別名で保存する
                <ContextMenu.Shortcut>⇧⌘S</ContextMenu.Shortcut>
              </ContextMenu.Item>
              <ContextMenu.Item>ショートカットを作成する</ContextMenu.Item>
              <ContextMenu.Item>ウィンドウに名前を付ける</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item>開発者ツール</ContextMenu.Item>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
          <ContextMenu.Separator />
          <ContextMenu.CheckboxItem checked>
            ブックマークバーを表示
            <ContextMenu.Shortcut>⌘⇧B</ContextMenu.Shortcut>
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem>完全なURLを表示</ContextMenu.CheckboxItem>
          <ContextMenu.Separator />
          <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
            <ContextMenu.Label inset>人物</ContextMenu.Label>
            <ContextMenu.Separator />
            <ContextMenu.RadioItem value="Edith Boehm">
              Edith Boehm
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="Ralph Stoltenberg">
              Ralph Stoltenberg
            </ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Content>
      </ContextMenu.Root>
    );
  },
};
