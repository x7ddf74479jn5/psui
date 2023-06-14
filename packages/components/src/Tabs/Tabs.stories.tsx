import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";
import { Label } from "../Label";
import { Button } from "../Button";
import { Input } from "../Input";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <Tabs.Root className="w-[400px]" defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">アカウント</Tabs.Trigger>
        <Tabs.Trigger value="password">パスワード</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <span className="text-sm text-base-content">
          <p>
            ここでアカウントに変更を加えます。完了したら保存をクリックしてください。
          </p>
        </span>
        <div className="grid gap-2 py-4">
          <div className="space-y-1">
            <Label.Root htmlFor="name">名前</Label.Root>
            <Input defaultValue="Jane Schumm" id="name" />
          </div>
          <div className="space-y-1">
            <Label.Root htmlFor="username">ユーザー名</Label.Root>
            <Input defaultValue="@jane_schumm" id="username" />
          </div>
        </div>
        <div className="flex">
          <Button>保存する</Button>
        </div>
      </Tabs.Content>
      <Tabs.Content value="password">
        <span className="text-sm text-base-content">
          <p>ここでパスワードを変更します。保存後、ログアウトします。</p>
        </span>
        <div className="grid gap-2 py-4">
          <div className="space-y-1">
            <Label.Root htmlFor="current">現在のパスワード</Label.Root>
            <Input id="current" type="password" />
          </div>
          <div className="space-y-1">
            <Label.Root htmlFor="new">新しいパスワード</Label.Root>
            <Input id="new" type="password" />
          </div>
        </div>
        <div className="flex">
          <Button>保存する</Button>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  ),
};
