import { Cardano } from "@ethr/cryptocurrencies";
import type { Meta, StoryObj } from "@storybook/react";
import { Scorecard } from "./Scorecard";

const meta = {
  component: Scorecard,
} satisfies Meta<typeof Scorecard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: "$198,298",
    label: "Label",
    percentage: 9.3,
    percentageLabel: "Since last week",
    visual: <Cardano />,
  },
};
