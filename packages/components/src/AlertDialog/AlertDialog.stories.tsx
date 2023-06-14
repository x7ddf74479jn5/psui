import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { AlertDialog } from "./AlertDialog";

/**
 * 重要な内容でユーザーを中断させ、応答を期待するモーダルダイアログです。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/alert-dialog
 *
 * Portal Default Classes: ~ "fixed inset-0 z-50 flex items-end justify-center sm:items-center" ~
 *
 * Overlay Default Classes: ~ "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in" ~
 *
 * Content Default Classes: ~ "fixed z-50 grid w-full max-w-lg text-overlay-content scale-100 bg-overlay gap-4 p-6 opacity-100 animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-md rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full" ~
 *
 * Header Default Classes: ~ "flex flex-col space-y-2 text-center sm:text-left" ~
 *
 * Footer Default Classes: ~ "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2" ~
 *
 * Title Default Classes: ~ "text-lg font-semibold text-overlay-content-2" ~
 *
 * Description Default Classes: ~ "text-sm text-overlay-content" ~
 *
 * Action Default Classes: ~ "inline-flex h-10 items-center justify-center rounded-md bg-danger text-danger-content py-2 px-4 text-sm font-semibold transition-colors hover:bg-danger-focus focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" ~
 *
 * Cancel Default Classes: ~ "inline-flex h-10 items-center justify-center rounded-md border border-slate-200 py-2 px-4 text-sm font-semibold text-overlay-content transition-colors hover:bg-overlay-3 focus:outline-none focus:ring-1 focus:ring-line-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  sm:mt-0" ~
 */
const meta = {
  title: "Components/AlertDialog",
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
          <div className="flex-end mt-2 flex gap-6">
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
