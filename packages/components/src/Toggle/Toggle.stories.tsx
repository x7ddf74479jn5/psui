import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { Toggle, toggleVariantsConfig } from "./Toggle";
import { getKeys } from "../utils";

const meta = {
  title: "Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "default",
      table: {
        defaultValue: {
          summary: '"default"',
        },
      },
      control: {},
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
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // args: {
  //   variant: "default",
  //   size: "default",
  // },
  render: (args) => {
    const defaultVariants = toggleVariantsConfig.defaultVariants;

    return (
      <Toggle {...defaultVariants} {...args}>
        Click Me
      </Toggle>
    );
  },
};

export const Variants: Story = {
  render: (args) => {
    const variants = getKeys(toggleVariantsConfig.variants.variant);

    return (
      <div className="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <Toggle
            size="default"
            {...args}
            onClick={action("clicked")}
            variant={variant}
          >
            {variant.toUpperCase()}
          </Toggle>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    const sizes = getKeys(toggleVariantsConfig.variants.size);

    return (
      <div className="flex flex-wrap gap-4">
        {sizes.map((size) => (
          <Toggle
            variant="default"
            {...args}
            size={size}
            onClick={action("clicked")}
          >
            {size.toUpperCase()}
          </Toggle>
        ))}
      </div>
    );
  },
};
