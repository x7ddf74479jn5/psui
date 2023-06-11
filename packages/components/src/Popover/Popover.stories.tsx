import type { Meta, StoryObj } from "@storybook/react";
import { Cross2Icon, MixerHorizontalIcon } from "@radix-ui/react-icons";

import { Popover } from "./Popover";
import { Input } from "../Input";

const meta = {
  title: "Popover",
  component: Popover,
  // @ts-ignore
  subcomponents: { ...Popover },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonContent: null,
    children: null,
  },
  render: (_args) => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <MixerHorizontalIcon />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div className="flex flex-col gap-2">
            <p className="Text font-bold mb-2">
              <p>Dimensions</p>
            </p>
            <fieldset className="Fieldset flex items-center justify-between gap-6">
              <label className="text-primary" htmlFor="width">
                <p>Width</p>
              </label>
              <Input
                className="w-32 rounded-md border border-line"
                defaultValue="100%"
                id="width"
              />
            </fieldset>
            <fieldset className="Fieldset flex items-center justify-between gap-6">
              <label className="text-primary" htmlFor="maxWidth">
                <p>Max. width</p>
              </label>
              <Input
                className="w-32 rounded-md border border-line"
                defaultValue="300px"
                id="maxWidth"
              />
            </fieldset>
            <fieldset className="Fieldset flex items-center justify-between gap-6">
              <label className="text-primary" htmlFor="height">
                <p>Height</p>
              </label>
              <Input
                className="w-32 rounded-md border border-line"
                defaultValue="25px"
                id="height"
              />
            </fieldset>
            <fieldset className="Fieldset flex items-center justify-between gap-6">
              <label className="text-primary" htmlFor="maxHeight">
                <p>Max. height</p>
              </label>
              <Input
                className="w-32 rounded-md border border-line"
                defaultValue="none"
                id="maxHeight"
              />
            </fieldset>
          </div>
          <Popover.Close aria-label="Close" className="PopoverClose">
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  ),
};
