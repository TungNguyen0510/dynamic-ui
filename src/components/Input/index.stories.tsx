import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./index";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Input",
    variant: "outline",
    rounded: "md",
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Input",
    variant: "outline",
    rounded: "md",
    disabled: true,
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Input",
    variant: "outline",
    rounded: "md",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password",
    variant: "outline",
    rounded: "md",
  },
};

export const Date: Story = {
  args: {
    type: "date",
    placeholder: "Date",
    variant: "outline",
    rounded: "md",
  },
};
