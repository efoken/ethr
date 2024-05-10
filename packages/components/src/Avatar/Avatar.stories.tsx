import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta = {
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {
  args: {
    alt: "Amy",
    src: "https://images.unsplash.com/photo-1614769842925-8193ebda68b5?w=56&h=56&auto=format&fit=crop",
    srcSet:
      "https://images.unsplash.com/photo-1614769842925-8193ebda68b5?w=56&h=56&dpr=2&auto=format&fit=crop 2x, https://images.unsplash.com/photo-1614769842925-8193ebda68b5?w=56&h=56&dpr=3&auto=format&fit=crop 3x",
  },
};

export const Placeholder: Story = {};

export const Alphabet: Story = {
  args: {
    children: "A",
    variant: "alphabet",
  },
};

export const Initials: Story = {
  args: {
    children: "AM",
  },
};
