import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "solid",
    size: "md",
    rounded: "xs",
    color: "primary",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
    size: "md",
    rounded: "md",
    color: "primary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
    size: "md",
    rounded: "md",
    color: "primary",
  },
};
