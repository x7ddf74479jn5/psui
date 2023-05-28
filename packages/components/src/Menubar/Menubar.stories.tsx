import type { Meta, StoryObj } from "@storybook/react";

import { Menubar } from "./Menubar";

const meta = {
  title: "Menubar",
  component: Menubar,
  // @ts-ignore
  subcomponents: { ...Menubar },
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
