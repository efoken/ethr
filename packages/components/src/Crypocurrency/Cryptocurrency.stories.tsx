import {
  Avalanche,
  BinanceUsd,
  Bitcoin,
  Bnb,
  Cardano,
  Chainlink,
  Dai,
  Dogecoin,
  Ether,
  NearProtocol,
  Polkadot,
  Polygon,
  ShibaInu,
  Solana,
  Terra,
  Tether,
  Tron,
  UsdCoin,
  Waves,
  Xrp,
} from "@ethr/cryptocurrencies";
import type { Meta, StoryObj } from "@storybook/react";
import { Cryptocurrency } from "./Cryptocurrency";

const meta = {
  component: Cryptocurrency,
} satisfies Meta<typeof Cryptocurrency>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Bitcoin {...args} />
      <Ether {...args} />
      <Tether {...args} />
      <Bnb {...args} />
      <UsdCoin {...args} />
      <Solana {...args} />
      <Xrp {...args} />
      <Cardano {...args} />
      <Terra {...args} />
      <Avalanche {...args} />
      <Polkadot {...args} />
      <Dogecoin {...args} />
      <BinanceUsd {...args} />
      <Chainlink {...args} />
      <Polygon {...args} />
      <NearProtocol {...args} />
      <Tron {...args} />
      <Waves {...args} />
      <ShibaInu {...args} />
      <Dai {...args} />
    </div>
  ),
};
