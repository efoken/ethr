import { ArrowUpOutline } from "@ethr/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { BaseIcon } from "./BaseIcon";

const meta = {
  component: BaseIcon,
} satisfies Meta<typeof BaseIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <ArrowUpOutline />,
  },
};
