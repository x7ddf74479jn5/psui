import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "./Progress";

const meta = {
  title: "Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    color: {
      type: { name: "string", required: false },
      control: { type: "text" },
      description: "Indicatorの色（Tailwind CSSのクラス名）",
    },
    value: {
      type: { name: "string", required: true },
      control: { type: "range" },
      description: "進捗度",
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "bg-primary",
    value: 50,
  },
  render: ({ color, value }) => <Progress color={color} value={value} />,
};
