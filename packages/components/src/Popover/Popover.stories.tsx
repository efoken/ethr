import { Dai } from "@ethr/cryptocurrencies";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Popover } from "./Popover";

const meta = {
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    anchor: <Button>Open popover</Button>,
    children: <Dai />,
    open: true,
  },
};
