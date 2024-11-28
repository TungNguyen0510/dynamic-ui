import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./index";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h1",
    children: "Text text",
    color: "default",
    size: "md",
    weight: "normal",
    align: "left",
    transform: "none",
    decoration: "none",
  },
};

export const Primary: Story = {
  args: {
    as: "h1",
    children: "Text text",
    color: "primary",
    size: "md",
    weight: "normal",
    align: "left",
  },
};
