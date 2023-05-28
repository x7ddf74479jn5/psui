import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { Input } from "../Input";
import { Dialog } from "./Dialog";

const meta = {
  title: "Dialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <></>,
  },
  render: (args) => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="secondary">
          <p>プロフィールを編集する</p>
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>プロフィール編集</Dialog.Title>
          <Dialog.Description>
            <p>
              ここでプロフィールを変更できます。「保存する」をクリックして完了します。
            </p>
          </Dialog.Description>
          <fieldset>
            <label className="text-overlay-content" htmlFor="name">
              <p>名前</p>
            </label>
            <Input defaultValue="Pedro Duarte" id="name" />
          </fieldset>
          <fieldset>
            <label className="text-overlay-content" htmlFor="username">
              <p>ユーザー名</p>
            </label>
            <Input defaultValue="@peduarte" id="username" />
          </fieldset>
          <Dialog.Close />
          <Dialog.Confirm>保存する</Dialog.Confirm>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};
