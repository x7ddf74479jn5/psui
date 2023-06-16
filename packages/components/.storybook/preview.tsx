import "../styles.css";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/blocks";
import type { Preview } from "@storybook/react";
import React from "react";

import { ThemeProvider } from "./theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      isFullscreen: false,
      isToolshown: true,
      storySort: {
        order: ["Getting Started", "Concepts"],
      },
    },
    docs: {
      // ArgsTable は deprecated で、subcomponentsで複数コンポーネントの props を見せる機能は非推奨になった
      // ここでは、一旦v6.5->v7アップデート時に後方互換を保つために独自のpageを設定している
      // 参考: https://github.com/storybookjs/storybook/issues/20782#issuecomment-1482771013
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable />
          <Stories includePrimary={false} />
        </>
      ),
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "ストーリー描画時のテーマを設定します",
      defaultValue: "default",
      toolbar: {
        icon: "paintbrush",
        items: ["Default", "Bubblegum", "Gunmetal"],
      },
    },
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider theme={context.globals.theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
