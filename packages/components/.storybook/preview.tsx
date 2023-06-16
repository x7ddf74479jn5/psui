import "../styles.css";

import React from "react";
import type { Preview } from "@storybook/react";
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
