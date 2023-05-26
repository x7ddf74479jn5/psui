import type { Meta, StoryObj } from "@storybook/react";

import { AlertDialog } from "./AlertDialog";
import { Button } from "../Button";

const meta = {
  title: "AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button>アカウントを削除する</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            <p>本当に実行しますか?</p>
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            <p>
              この操作は取り消せません。あなたのアカウントとデータをサーバーから永久に削除します。
            </p>
          </AlertDialog.Description>
          <div className="flex flex-end gap-6 mt-2">
            <AlertDialog.Cancel asChild>
              <button className="Button mauve">キャンセルする</button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button className="Button red">消去する</button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
};
