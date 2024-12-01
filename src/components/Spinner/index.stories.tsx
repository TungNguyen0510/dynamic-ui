import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./index";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg", "xl"],
    },
    labelColor: {
      control: {
        type: "select",
      },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
    },
    labelSize: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg", "xl"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    color: "default",
  },
};

export const WithLabel: Story = {
  args: {
    ...Default.args,
    labelColor: "default",
    labelSize: "md",
    label: "Loading...",
  },
};
