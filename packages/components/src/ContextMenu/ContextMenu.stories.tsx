import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { ContextMenu } from "./ContextMenu";

/**
 * 右クリックや長押しをトリガーに、ポインターの位置にあるメニューを表示します。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/context-menu
 *
 * SubTrigger Default Classes: ~ "flex cursor-default select-none items-center rounded-md-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-overlay data-[state=open]:bg-overlay-focus focus:ring-0 focus:ring-offset-0 focus:bg-overlay-focus" ~
 *
 * SubContent Default Classes: ~ "z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay-2 shadow-theme-md animate-in slide-in-from-left-1 " ~
 *
 * Content Default Classes: ~ "z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay text-overlay-content shadow-theme-md animate-in fade-in-80" ~
 *
 * Separator Default Classes: ~ "ml-auto text-xs tracking-widest text-overlay-content-2 text-opacity-70 group-focus:text-primary-content" ~
 *
 * Label Default Classes: ~ "px-2 py-1.5 text-sm font-semibold text-overlay-content " ~
 *
 * Shortcut Default Classes: ~ "ml-auto text-xs tracking-widest text-overlay-content-2 text-opacity-70 group-focus:text-primary-content" ~
 *
 * Item Default Classes: ~ "relative group flex cursor-default select-none items-center rounded-md py-1.5 px-2 text-sm font-medium outline-none focus:bg-primary text-overlay-content focus:text-primary-content data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:ring-0 focus:ring-offset-0 m-1" ~
 *
 * RadioItem Default Classes: ~ "relative flex group cursor-default select-none items-center rounded-md-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-overlay data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:ring-0 focus:ring-offset-0 focus:bg-primary focus:text-primary-content" ~
 *
 * CheckboxItem Default Classes: ~ "relative group flex cursor-default select-none items-center rounded-md-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-overlay data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:ring-0 focus:ring-offset-0 focus:bg-primary focus:text-primary-content" ~
 */
const meta = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  // @ts-ignore
  subcomponents: { ...ContextMenu },
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
