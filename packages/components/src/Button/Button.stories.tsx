import type { Meta, StoryObj } from "@storybook/react";

import { Button, buttonVariantsConfig } from "./Button";
import { getKeys } from "../utils";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: (args) => {
    const variants = getKeys(buttonVariantsConfig.variants.variant);

    return (
      <div className="flex gap-4">
        {variants.map((variant) => (
          <Button {...args} variant={variant}>
            {variant.toUpperCase()}
          </Button>
        ))}
      </div>
    );
  },
};
export const Sizes: Story = {
  render: (args) => {
    const sizes = getKeys(buttonVariantsConfig.variants.size);

    return (
      <div className="flex gap-4">
        {sizes.map((size) => (
          <Button {...args} size={size}>
            {size.toUpperCase()}
          </Button>
        ))}
      </div>
    );
  },
};
