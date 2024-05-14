import {
  Affirm,
  AmazonPay,
  Amex,
  ApplePay,
  Bitpay,
  CareemPay,
  Discover,
  Elo,
  GooglePay,
  Klarna,
  Mastercard,
  PayPal,
  Payoneer,
  ShopPay,
  Skrill,
  Stripe,
  Troy,
  Venmo,
  Visa,
  Wepay,
} from "@ethr/payment-methods";
import type { Meta, StoryObj } from "@storybook/react";
import { PaymentMethod } from "./PaymentMethod";

const meta = {
  component: PaymentMethod,
} satisfies Meta<typeof PaymentMethod>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <GooglePay {...args} />
      <ApplePay {...args} />
      <CareemPay {...args} />
      <PayPal {...args} />
      <AmazonPay {...args} />
      <Visa {...args} />
      <Mastercard {...args} />
      <Bitpay {...args} />
      <Stripe {...args} />
      <Discover {...args} />
      <Klarna {...args} />
      <Payoneer {...args} />
      <Wepay {...args} />
      <Elo {...args} />
      <ShopPay {...args} />
      <Affirm {...args} />
      <Troy {...args} />
      <Amex {...args} />
      <Skrill {...args} />
      <Venmo {...args} />
    </div>
  ),
};
