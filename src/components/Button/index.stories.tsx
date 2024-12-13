import type { Meta, StoryObj } from "@storybook/react";
import { Camera, HeadphonesIcon, MusicIcon } from "lucide-react";
import React from "react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "solid",
        "bordered",
        "light",
        "flat",
        "faded",
        "shadow",
        "ghost",
      ],
    },
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
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    disableRipple: {
      control: {
        type: "boolean",
      },
    },
    spinnerPlacement: {
      control: {
        type: "select",
      },
      options: ["start", "end"],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "xs", "md", "lg", "xl", "full"],
    },
    isLoading: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const StateTemplate = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    console.log("Click");
    setIsOpen((prev) => !prev);
  };

  return <Button onClick={handleClick}>{isOpen ? "Close" : "Open"}</Button>;
};

export const Default: Story = {
  args: {
    children: "Button",
    variant: "solid",
    color: "default",
    size: "md",
    radius: "md",
    isLoading: false,
    spinnerPlacement: "start",
    isDisabled: false,
    disableRipple: false,
  },
};

export const WithState: Story = {
  render: StateTemplate,

  args: {
    ...Default.args,
  },
};

export const IsDisabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};

export const IsLoading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const DisabledRipple: Story = {
  args: {
    ...Default.args,
    disableRipple: true,
  },
};

export const DisableAnimation: Story = {
  args: {
    ...Default.args,
    disableAnimation: true,
  },
};

export const WithIcons: Story = {
  args: {
    ...Default.args,
    startContent: <MusicIcon />,
    endContent: <Camera />,
  },
};

export const WithIconOnly: Story = {
  args: {
    ...Default.args,
    isIconOnly: true,
    children: <HeadphonesIcon className="w-5 h-5" />,
  },
};

export const CustomWithClassName: Story = {
  args: {
    ...Default.args,
    className:
      "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg",
  },
};
