import type { Meta, StoryObj } from "@storybook/react";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { DropdownMenu } from "./DropdownMenu";
import { Button } from "../Button";

const meta = {
  title: "DropdownMenu",
  component: DropdownMenu,
  // @ts-ignore
  subcomponents: { ...DropdownMenu },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button>開く</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-60">
        <DropdownMenu.Label>アカウント</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <User className="mr-2 h-4 w-4" />
            <span>プロフィール</span>

            <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>支払い</span>

            <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Settings className="mr-2 h-4 w-4" />
            <span>設定</span>

            <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>キーボードショートカット</span>

            <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <Users className="mr-2 h-4 w-4" />
            <span>チーム</span>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>ユーザーを招待する</span>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>メッセージ</span>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>もっと...</span>
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Item>
            <Plus className="mr-2 h-4 w-4" />
            <span>新規チーム</span>

            <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>サポート</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <LogOut className="mr-2 h-4 w-4" />
          <span>ログアウト</span>

          <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};
