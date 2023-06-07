import type { Meta, StoryObj } from "@storybook/react";
import LinkTo from "@storybook/addon-links/react";
import React from "react";

import { NavigationMenu } from "./NavigationMenu";
import { cn } from "../utils";

const meta = {
  title: "NavigationMenu",
  component: NavigationMenu,
  // @ts-ignore
  subcomponents: { ...NavigationMenu },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <div className="w-full">
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="whitespace-nowrap">
              Getting started
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenu.Link asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                      href="https://github.com/x7ddf74479jn5/psui"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium text-white">
                        PSUI
                      </div>
                      <p className="text-sm leading-tight text-white/90">
                        Radix UIとTailwind
                        CSSで構築された美しいデザインのコンポーネント。
                      </p>
                    </a>
                  </NavigationMenu.Link>
                </li>
                <ListItem
                  href="https://github.com/x7ddf74479jn5/psui/blob/main/README.md#introduction"
                  title="Introduction"
                >
                  Radix UIとTailwind
                  CSSを使用して構築された再利用可能なコンポーネントです。
                </ListItem>
                <ListItem
                  href="https://github.com/x7ddf74479jn5/psui/blob/main/README.md#installation"
                  title="Installation"
                >
                  依存関係をインストールし、アプリを構造化する方法。
                </ListItem>
                <ListItem
                  href="https://github.com/x7ddf74479jn5/psui/blob/main/README.md#typography"
                  title="Typography"
                >
                  見出し、段落、リスト...などのスタイル。
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="whitespace-nowrap">
              コンポーネント
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] justify-center">
                {components.map((component) => (
                  <li>
                    <LinkTo
                      key={component.title}
                      kind={component.title}
                      title={component.title}
                      story="Default"
                    >
                      <div
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-overlay-focus focus:bg-overlay-focus"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">
                          {component.title}
                        </div>
                        <p className="text-sm leading-snug text-overlay-content-2 line-clamp-2 ">
                          {component.description}
                        </p>
                      </div>
                    </LinkTo>
                  </li>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="hidden md:block">
            <NavigationMenu.Link className="cursor-pointer" asChild>
              <a href="https://github.com/x7ddf74479jn5/psui/blob/main/README.md#introduction">
                ドキュメント
              </a>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </div>
  ),
};

const components: { title: string; description: string }[] = [
  {
    title: "AlertDialog",
    description:
      "重要な内容でユーザーを中断させ、応答を期待するモーダルダイアログです。",
  },
  {
    title: "HoverCard",
    description: "ウェブサイトをナビゲートするためのリンク集です。",
  },
  {
    title: "Progress",
    description:
      "タスクの完了状況を示すインジケータを表示し、通常はプログレスバーとして表示されます。",
  },
  {
    title: "ScrollArea",
    description: "コンテンツを視覚的または意味的に分離します。",
  },
  {
    title: "Tabs",
    description:
      "タブパネルと呼ばれる、一度に1つずつ表示されるコンテンツのレイヤーセクションのセットです。",
  },
  {
    title: "Tooltip",
    description:
      "要素がキーボードフォーカスを受けたり、マウスがその上に乗ったときに、その要素に関連する情報を表示するポップアップ。",
  },
];

const Link = ({ children }: { children: React.ReactNode }) => (
  <span>{children}</span>
);

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-overlay-focus focus:bg-overlay-focus",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-overlay-content-2 line-clamp-2 ">
            {children}
          </p>
        </a>
      </NavigationMenu.Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
