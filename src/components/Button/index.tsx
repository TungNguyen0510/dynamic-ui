import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        xs: "px-2 py-1 text-xs",
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        xl: "px-8 py-4 text-xl",
        "2xl": "px-10 py-5 text-2xl",
        "3xl": "px-12 py-6 text-3xl",
        "4xl": "px-14 py-7 text-4xl",
        "5xl": "px-16 py-8 text-5xl",
        "6xl": "px-20 py-9 text-6xl",
        "7xl": "px-24 py-10 text-7xl",
        "8xl": "px-28 py-12 text-8xl",
        "9xl": "px-32 py-14 text-9xl",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        xs: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
      },
      color: {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600",
        info: "bg-blue-500 text-white hover:bg-blue-600",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "primary",
        className: "bg-primary-500 hover:bg-primary-600",
      },
      {
        variant: "outline",
        color: "primary",
        className:
          "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "ghost",
        color: "primary",
        className: "text-primary-600 bg-transparent hover:bg-primary-100",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      rounded: "md",
      color: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, rounded, color, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          buttonStyles({ variant, size, rounded, color, className })
        )}
      />
    );
  }
);
