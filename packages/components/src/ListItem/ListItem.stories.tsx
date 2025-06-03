import { css, html } from "@ethr/core";
import {
  BankOutline,
  CardOutline,
  ChevronRightOutline,
  MoneyOutline,
  PlusOutline,
  SecurityFilled,
  TickFilled,
} from "@ethr/icons";
import { ApplePay, Mastercard, Visa } from "@ethr/payment-methods";
import type { Meta, StoryObj } from "@storybook/react";
import { BaseIcon } from "../BaseIcon";
import { Button } from "../Button";
import { borders, colors } from "../globals.stylex";
import { Radio } from "../Radio";
import { ListItem } from "./ListItem";

const meta = {
  component: ListItem,
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primaryText: "Primary text",
  },
};

const paymentMethodStyles = css.create({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridColumnGap: 34,
    gridRowGap: 48,
  },
  item: {
    alignSelf: "flex-start",
    borderRadius: borders.radius0,
  },
  itemSelected: {
    borderColor: colors.primary70,
  },
  span: {
    color: colors.neutral60,
  },
});

export const PaymentMethod: Story = {
  render: () => (
    <html.div style={paymentMethodStyles.grid}>
      <ListItem
        prefix={
          <BaseIcon size="large">
            <SecurityFilled />
          </BaseIcon>
        }
        primaryText="Debit or credit card"
        secondaryText="Card details added securely"
        suffix={
          <Button size="small" suffix={<PlusOutline />} variant="secondary">
            Add
          </Button>
        }
        style={paymentMethodStyles.item}
      />
      <ListItem
        primaryText="Apple Pay"
        secondaryText="Pay 5 GBP instantly using your Apply Pay wallet. 0.01 GBP fee, so recipeitn gets less"
        style={paymentMethodStyles.item}
      />
      <ListItem
        prefix={
          <BaseIcon size="xlarge">
            <CardOutline />
          </BaseIcon>
        }
        primaryText="Debit Card"
        secondaryText="0.01 GBP fee, so recipient gets less"
        suffix={<ChevronRightOutline size={24} fill={colors.neutral60} />}
        style={paymentMethodStyles.item}
      />
      <ListItem
        prefix={<Visa size="large" theme="light" />}
        primaryText="VISA"
        secondaryText="****3243 | 03/2023"
        suffix={
          <Button size="small" variant="tertiary">
            Change
          </Button>
        }
        style={paymentMethodStyles.item}
      />
      <ListItem
        prefix={<Mastercard size="large" theme="light" />}
        primaryText="Master Card ****4322"
        secondaryText="Expires 03/2023"
        suffix={<Radio checked />}
        variant="border"
        style={paymentMethodStyles.item}
      />
      <ListItem
        primaryText="Singaporean Dollar"
        secondaryText="SGD"
        suffix={<html.span style={paymentMethodStyles.span}>$20</html.span>}
        variant="border"
        style={paymentMethodStyles.item}
      />
      <ListItem
        prefix={
          <BaseIcon size="xlarge">
            <PlusOutline />
          </BaseIcon>
        }
        primaryText="Add recurring payment"
        size="small"
        style={paymentMethodStyles.item}
      />
      <ListItem
        primaryText="Bank Transfer"
        secondaryText="No additonal fee"
        suffix={<TickFilled color={colors.success40} size={24} />}
        variant="border"
        style={paymentMethodStyles.item}
      />
      <ListItem
        prefix={<BankOutline color={colors.primary70} size={24} />}
        primaryText="Add bank account"
        size="small"
        suffix={<PlusOutline color={colors.neutral60} size={24} />}
        variant="dashedBorder"
        style={[paymentMethodStyles.item, paymentMethodStyles.itemSelected]}
      />
      <ListItem
        prefix={<ApplePay size="small" theme="light" />}
        primaryText="Primary text"
        size="small"
        suffix={<ChevronRightOutline color={colors.neutral60} size={24} />}
        style={paymentMethodStyles.item}
      />
      <ListItem
        prefix={<CardOutline color={colors.primary70} size={24} />}
        primaryText="Add credit or debit card"
        size="small"
        suffix={<PlusOutline color={colors.neutral60} size={24} />}
        variant="dashedBorder"
        style={[paymentMethodStyles.item, paymentMethodStyles.itemSelected]}
      />
      <ListItem
        prefix={
          <BaseIcon size="xsmall">
            <MoneyOutline />
          </BaseIcon>
        }
        primaryText="Cash Balance"
        size="small"
        suffix={<html.span style={paymentMethodStyles.span}>$1,000</html.span>}
        style={paymentMethodStyles.item}
      />
    </html.div>
  ),
};
