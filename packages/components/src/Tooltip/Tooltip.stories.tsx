import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Tooltip } from "./Tooltip";

const meta = {
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => <Tooltip {...args} />,
  args: {
    anchor: <Button>Open popover</Button>,
    children: "Label",
  },
};
