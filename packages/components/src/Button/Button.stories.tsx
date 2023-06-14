import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { getKeys } from "../utils";
import { Button, buttonVariantsConfig } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "default",
      table: {
        defaultValue: {
          summary: '"default"',
        },
      },
    },
    size: {
      defaultValue: "default",
      table: {
        defaultValue: {
          summary: '"default"',
        },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const defaultVariants = buttonVariantsConfig.defaultVariants;

    return (
      <Button {...defaultVariants} {...args} onClick={action("clicked")}>
        DEFAULT
      </Button>
    );
  },
};

export const Variants: Story = {
  render: (args) => {
    const variants = getKeys(buttonVariantsConfig.variants.variant);

    return (
      <div className="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <Button
            size="default"
            {...args}
            onClick={action("clicked")}
            variant={variant}
          >
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
          <Button
            variant="default"
            {...args}
            size={size}
            onClick={action("clicked")}
          >
            {size.toUpperCase()}
          </Button>
        ))}
      </div>
    );
  },
};
