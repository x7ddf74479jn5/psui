import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { Input } from "../Input";
import { Dialog } from "./Dialog";

/**
 * 重要な内容でユーザーを中断させ、応答を期待するモーダルダイアログです。
 *
 * [Radix Docs] @see https://www.radix-ui.com/docs/primitives/components/dialog
 *
 * Portal Default Classes: ~ "fixed inset-0 z-50 flex items-start justify-center sm:items-center" ~
 *
 * Overlay Default Classes: ~ "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" ~
 *
 * Content Default Classes: ~ "fixed z-50 grid w-full gap-4 rounded-b-lg bg-overlay p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0" ~
 *
 * Close Default Classes: ~ "absolute top-0 right-0 z-50 flex items-center justify-center w-8 h-8 rounded-full text-overlay-content hover:text-primary focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2" ~
 *
 * Confirm Default Classes: ~ "z-50 w-full flex justify-end" ~
 *
 * Header Default Classes: ~ "flex flex-col space-y-2 text-center sm:text-left" ~
 *
 * Footer Default Classes: ~ "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2" ~
 *
 * Title Default Classes: ~ "text-lg font-semibold text-overlay-content" ~
 *
 * Description Default Classes: ~ "text-sm text-overlay-content-2" ~
 *
 */
const meta = {
  title: "Components/Dialog",
  component: Dialog,
  // @ts-ignore
  subcomponents: { ...Dialog },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
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
