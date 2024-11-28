import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva(
  [
    "w-full",
    "border",
    "border-gray-200",
    "p-2",
    "rounded-md",
    "transition-all",
    "duration-100",
    "outline-none",
    "focus:outline-primary-500",
    "focus:border-transparent",
    "placeholder:text-gray-400",
    "placeholder:text-sm",
  ],
  {
    variants: {
      variant: {
        outline: "border-2",
        ghost: "transition-colors duration-300",
        solid: "",
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
        primary: "bg-primary-500 text-white hover:bg-primary-600",
        secondary: "bg-secondary-500 text-white hover:bg-secondary-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600",
        info: "bg-blue-500 text-white hover:bg-blue-600",
      },
    },
    defaultVariants: {
      variant: "outline",
      rounded: "md",
    },
  }
);
type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, rounded, color, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        autoComplete="off"
        className={cn(inputStyles({ variant, rounded, color }), className)}
      />
    );
  }
);
