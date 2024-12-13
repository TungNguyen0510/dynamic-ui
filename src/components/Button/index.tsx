import { cn } from "@/utils";
import { PolymorphicComponentPropsWithRef } from "@/utils/types";
import { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import { cva } from "class-variance-authority";
import Spinner from "../Spinner";

const buttonStyles = cva(
  [
    "z-0",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-none",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "font-normal",
    "subpixel-antialiased",
    "overflow-hidden",
    "focus:outline-none",
    "disabled:opacity-50",
    "tap-highlight-transparent",
  ],
  {
    variants: {
      variant: {
        solid: "",
        bordered: "border-2",
        light: "transition-colors duration-300 bg-transparent",
        flat: "",
        faded: "bg-gray-200 bg-opacity-10 border-gray-200 border-2",
        shadow: "shadow-2xl",
        ghost: "border-2 transition-colors duration-100",
      },
      size: {
        sm: "px-3 min-w-16 h-8 gap-2 text-sm",
        md: "px-4 min-w-20 h-10 gap-2 text-base",
        lg: "px-6 min-w-24 h-12 gap-3 text-lg",
        xl: "px-6 min-w-28 h-14 gap-4 text-xl",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        xs: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      color: {
        default: "bg-slate-500 text-white",
        primary: "bg-blue-500 text-white",
        secondary: "bg-secondary-500 text-white",
        success: "bg-green-500 text-white",
        warning: "bg-yellow-500 text-white",
        danger: "bg-red-500 text-white",
      },
      isDisabled: {
        true: "opacity-50 pointer-events-none",
      },
      isIconOnly: {
        true: "px-0 !gap-0",
        false: "",
      },
      isLoading: {
        true: "pointer-events-none",
        false: "",
      },
      disableAnimation: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // Bordered
      {
        variant: "bordered",
        color: "default",
        className:
          "text-slate-500 border-slate-500 bg-transparent hover:bg-white",
      },
      {
        variant: "bordered",
        color: "primary",
        className:
          "text-primary-500 border-primary-500 bg-transparent hover:bg-white",
      },
      {
        variant: "bordered",
        color: "secondary",
        className:
          "text-secondary-500 border-secondary-500 bg-transparent hover:bg-white",
      },
      {
        variant: "bordered",
        color: "success",
        className:
          "text-green-500 border-green-500 bg-transparent hover:bg-white",
      },
      {
        variant: "bordered",
        color: "warning",
        className:
          "text-yellow-500 border-yellow-500 bg-transparent hover:bg-white",
      },
      {
        variant: "bordered",
        color: "danger",
        className: "text-red-500 border-red-500 bg-transparent hover:bg-white",
      },

      // Light
      {
        variant: "light",
        color: "default",
        className: "text-slate-500 bg-transparent hover:bg-slate-100",
      },
      {
        variant: "light",
        color: "primary",
        className: "text-primary-500 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "light",
        color: "secondary",
        className: "text-secondary-500 bg-transparent hover:bg-secondary-100",
      },
      {
        variant: "light",
        color: "success",
        className: "text-green-500 bg-transparent hover:bg-green-100",
      },
      {
        variant: "light",
        color: "warning",
        className: "text-yellow-500 bg-transparent hover:bg-yellow-100",
      },
      {
        variant: "light",
        color: "danger",
        className: "text-red-500 bg-transparent hover:bg-red-100",
      },

      // Flat
      {
        variant: "flat",
        color: "default",
        className:
          "text-slate-700 bg-transparent bg-slate-200 hover:bg-slate-100",
      },
      {
        variant: "flat",
        color: "primary",
        className:
          "text-primary-700 bg-transparent bg-primary-200 hover:bg-primary-100",
      },
      {
        variant: "flat",
        color: "secondary",
        className:
          "text-secondary-700 bg-transparent bg-secondary-200 hover:bg-secondary-100",
      },
      {
        variant: "flat",
        color: "success",
        className:
          "text-green-700 bg-transparent bg-green-200 hover:bg-green-100",
      },
      {
        variant: "flat",
        color: "warning",
        className:
          "text-yellow-700 bg-transparent bg-yellow-200 hover:bg-yellow-100",
      },
      {
        variant: "flat",
        color: "danger",
        className: "text-red-700 bg-transparent bg-red-200 hover:bg-red-100",
      },

      // Faded
      {
        variant: "faded",
        color: "default",
        className: "text-slate-500 bg-slate-200",
      },
      {
        variant: "faded",
        color: "primary",
        className: "text-primary-500 bg-primary-200",
      },
      {
        variant: "faded",
        color: "secondary",
        className: "text-secondary-500 bg-secondary-200",
      },
      {
        variant: "faded",
        color: "success",
        className: "text-green-500 bg-green-200",
      },
      {
        variant: "faded",
        color: "warning",
        className: "text-yellow-500 bg-yellow-200",
      },
      {
        variant: "faded",
        color: "danger",
        className: "text-red-500 bg-red-200",
      },

      // Shadow
      {
        variant: "shadow",
        color: "default",
        className: "shadow-slate-500 shadow-lg",
      },
      {
        variant: "shadow",
        color: "primary",
        className: "shadow-primary-500 shadow-lg",
      },
      {
        variant: "shadow",
        color: "secondary",
        className: "shadow-secondary-500 shadow-lg",
      },
      {
        variant: "shadow",
        color: "success",
        className: "shadow-green-500 shadow-lg",
      },
      {
        variant: "shadow",
        color: "warning",
        className: "shadow-yellow-500 shadow-lg",
      },
      {
        variant: "shadow",
        color: "danger",
        className: "shadow-red-500 shadow-lg",
      },

      // Ghost
      {
        variant: "ghost",
        color: "default",
        className:
          "text-slate-500 border-slate-500 bg-transparent hover:bg-slate-500 hover:text-white",
      },
      {
        variant: "ghost",
        color: "primary",
        className:
          "text-primary-500 border-primary-500 bg-transparent hover:bg-primary-500 hover:text-white",
      },
      {
        variant: "ghost",
        color: "secondary",
        className:
          "text-secondary-500 border-secondary-500 bg-transparent hover:bg-secondary-500 hover:text-white",
      },
      {
        variant: "ghost",
        color: "success",
        className:
          "text-green-500 border-green-500 bg-transparent hover:bg-green-500 hover:text-white",
      },
      {
        variant: "ghost",
        color: "warning",
        className:
          "text-yellow-500 border-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-white",
      },
      {
        variant: "ghost",
        color: "danger",
        className:
          "text-red-500 border-red-500 bg-transparent hover:bg-red-500 hover:text-white",
      },

      // Is Icon Only
      {
        isIconOnly: true,
        size: "sm",
        class: "min-w-8 w-8 h-8",
      },
      {
        isIconOnly: true,
        size: "md",
        class: "min-w-10 w-10 h-10",
      },
      {
        isIconOnly: true,
        size: "lg",
        class: "min-w-12 w-12 h-12",
      },
      {
        isIconOnly: true,
        size: "xl",
        class: "min-w-16 w-16 h-16",
      },

      // Is Loading
      {
        isLoading: true,
        className:
          "opacity-50 cursor-default !transition-none active:scale-100",
      },

      // Disable Animation
      {
        disableAnimation: true,
        className: "!transition-none active:scale-100",
      },
      {
        disableAnimation: false,
        className:
          "transition-transform-colors-opacity motion-reduce:transition-none active:scale-[0.97]",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      radius: "md",
      color: "default",
    },
  }
);

export type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, VariantProps<typeof buttonStyles>> & {
    disableRipple?: boolean;
    isLoading?: boolean;
    spinnerPlacement?: "start" | "end";
    spinner?: React.ReactNode;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
  };

export type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C>
) => React.ReactElement | null;

export const Button = forwardRef(
  // @ts-ignore
  <C extends React.ElementType = "button">(
    {
      as,
      variant = "solid",
      size = "md",
      radius = "md",
      color = "default",
      isDisabled = false,
      disableRipple = false,
      disableAnimation = false,
      isLoading = false,
      isIconOnly = false,
      spinnerPlacement = "start",
      spinner = <Spinner size={size} />,
      startContent,
      endContent,
      className,
      onClick,
      ...props
    }: ButtonProps<C>,
    ref: React.Ref<React.ElementType<C>>
  ) => {
    const Component = as || "button";

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disableRipple && !isLoading && !disableAnimation) {
        createRipple(e, e.currentTarget, variant || "solid");
      }

      if (onClick) {
        onClick(e);
      }
    };
    return (
      <Component
        ref={ref}
        {...props}
        className={cn(
          buttonStyles({
            variant,
            size,
            radius,
            color,
            isDisabled,
            isIconOnly,
            isLoading,
            disableAnimation,
            className,
          })
        )}
        onClick={handleClick}
      >
        {startContent}
        {isLoading && spinnerPlacement === "start" && spinner}
        {isLoading && isIconOnly ? null : props.children}
        {isLoading && spinnerPlacement === "end" && spinner}
        {endContent}
      </Component>
    );
  }
) as ButtonComponent;

(Button as React.ComponentType).displayName = "DynamicUI.Button";

const createRipple = (
  e: React.MouseEvent<HTMLButtonElement>,
  button: HTMLButtonElement,
  variant: string = "solid"
) => {
  button.querySelectorAll(".ripple").forEach((r) => r.remove());

  const ripple = document.createElement("span");
  ripple.className = "ripple";

  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.position = "absolute";
  ripple.style.borderRadius = "50%";
  ripple.style.transform = "scale(0)";
  ripple.style.animation = "ripple-animation 0.6s linear";
  ripple.style.background = ["bordered", "light", "flat", "faded"].includes(
    variant
  )
    ? "currentColor"
    : "rgba(255, 255, 255, 1)";
  ripple.style.opacity = "0.4";
  ripple.style.pointerEvents = "none";
  ripple.style.zIndex = "0";

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  const rippleAnimationName = "ripple-animation";
  if (!document.getElementById(rippleAnimationName)) {
    const style = document.createElement("style");
    style.id = rippleAnimationName;
    style.innerHTML = `
      @keyframes ${rippleAnimationName} {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  button.appendChild(ripple);

  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
};
