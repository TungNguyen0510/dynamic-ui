import { cn } from "@/utils";
import { PolymorphicComponentPropsWithRef } from "@/utils/types";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const textStyles = cva(["w-full"], {
  variants: {
    color: {
      default: "text-black",
      primary: "text-primary-500",
      secondary: "text-secondary-500",
      success: "text-green-500",
      warning: "text-yellow-500",
      danger: "text-red-500",
      info: "text-info-500",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
    },
    weight: {
      thin: "font-thin",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    transform: {
      none: "none",
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
    },
    decoration: {
      none: "none",
      underline: "underline",
      italic: "italic",
      "line-through": "line-through",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
    weight: "normal",
    align: "left",
  },
});

type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof textStyles>
>;

type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactElement | null;

export const Text = forwardRef(
  <C extends React.ElementType = "span">(
    {
      as,
      color,
      align,
      size,
      weight,
      transform,
      decoration,
      className,
      ...props
    }: TextProps<C>,
    ref: React.Ref<React.ElementType<C>>
  ) => {
    const Component = as || "span";

    return (
      <Component
        ref={ref}
        className={cn(
          textStyles({
            color,
            align,
            size,
            weight,
            transform,
            decoration,
          }),
          className
        )}
        {...props}
      />
    );
  }
) as TextComponent;
