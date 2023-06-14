import type { Meta, StoryObj } from "@storybook/react";

import { Menubar } from "./Menubar";

/**
 * デスクトップアプリケーションで一般的な視覚的に永続的なメニューで、一貫したコマンドのセットに素早くアクセスできるようにします。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/menubar
 *
 * Root Default Classes: ~ "flex h-10 items-center space-x-1 rounded-md border border-line bg-overlay " ~
 *
 * Trigger Default Classes: ~ "flex cursor-default select-none items-center rounded-[0.2rem] py-1.5 px-3 text-sm font-medium outline-none  hover:bg-primary hover:text-primary-content focus:bg-primary focus:text-primary-content data-[state=open]:bg-slate-10" ~
 *
 * SubTrigger Default Classes: ~ "flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-primary focus:text-primary-content data-[state=open]:bg-primary  data-[state=open]:text-primary-content" ~
 *
 * SubContent Default Classes: ~ "z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay p-1 shadow-md animate-in slide-in-from-left-1 " ~
 *
 * Content Default Classes: ~ "z-50 min-w-[12rem] overflow-hidden rounded-md border border-line bg-overlay text-overlay-content shadow-md animate-in slide-in-from-top-1 " ~
 *
 * Item Default Classes: ~ "relative cursor-default bg-overlay select-none rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-primary focus:text-primary-content data-[disabled]:pointer-events-none data-[disabled]:opacity-50 m-1" ~
 *
 * CheckboxItem Default Classes: ~ "relative flex flex-1 cursor-default justify-between select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 " ~
 *
 * RadioItem Default Classes: ~ "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-base-3 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 " ~
 *
 * Label Default Classes: ~ "px-2 py-1.5 text-sm font-semibold text-overlay-content " ~
 *
 * Separator Default Classes: ~ "-mx-1 my-1 h-px bg-base-2 " ~
 *
 * Shortcut Default Classes: ~ "ml-auto text-xs tracking-widest text-base-content-2" ~
 */
const meta = {
  title: "Components/Menubar",
  component: Menubar,
  tags: ["autodocs"],
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger>ファイル</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            <p>
              新規タブ <Menubar.Shortcut>⌘T</Menubar.Shortcut>
            </p>
          </Menubar.Item>
          <Menubar.Item>
            <p>
              新規ウィンドウ <Menubar.Shortcut>⌘N</Menubar.Shortcut>
            </p>
          </Menubar.Item>
          <Menubar.Item disabled>新規匿名ウィンドウ</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Sub>
            <Menubar.SubTrigger>共有</Menubar.SubTrigger>
            <Menubar.SubContent>
              <Menubar.Item>Emailリンク</Menubar.Item>

              <Menubar.Item>メッセージ</Menubar.Item>

              <Menubar.Item>ノート</Menubar.Item>
            </Menubar.SubContent>
          </Menubar.Sub>
          <Menubar.Separator />
          <Menubar.Item>
            <p>
              印刷... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
            </p>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>編集</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            <p>
              元に戻す <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
            </p>
          </Menubar.Item>
          <Menubar.Item>
            <p>
              やり直す <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
            </p>
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Sub>
            <Menubar.SubTrigger>検索</Menubar.SubTrigger>
            <Menubar.SubContent>
              <Menubar.Item>ウェブで検索する</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>検索...</Menubar.Item>

              <Menubar.Item>次を探す</Menubar.Item>

              <Menubar.Item>前を探す</Menubar.Item>
            </Menubar.SubContent>
          </Menubar.Sub>
          <Menubar.Separator />
          <Menubar.Item>切り取り</Menubar.Item>

          <Menubar.Item>コピー</Menubar.Item>

          <Menubar.Item>貼り付け</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>表示</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.CheckboxItem>
            ブックマークバーを常に表示する
          </Menubar.CheckboxItem>
          <Menubar.CheckboxItem checked>
            <p>常に完全なURLを表示する</p>
          </Menubar.CheckboxItem>
          <Menubar.Separator />
          <Menubar.Item inset>
            <p>
              更新 <Menubar.Shortcut>⌘R</Menubar.Shortcut>
            </p>
          </Menubar.Item>
          <Menubar.Item disabled inset>
            <p>
              強制的に更新 <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
            </p>
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item inset>フルスクリーンにする</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item inset>サイドバーを隠す</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>プロファイル</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.RadioGroup value="benoit">
            <Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>

            <Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>

            <Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
          </Menubar.RadioGroup>
          <Menubar.Separator />
          <Menubar.Item inset>編集...</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item inset>プロファイル追加...</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>
  ),
};
