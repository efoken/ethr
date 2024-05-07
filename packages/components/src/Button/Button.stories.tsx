import { AnalyticsFilled } from "@ethr/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Deposit",
    prefix: <AnalyticsFilled />,
  },
};

export const IconOnly: Story = {
  args: {
    prefix: <AnalyticsFilled />,
    variant: "secondary",
  },
};
