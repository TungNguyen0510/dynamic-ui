import { cn } from "@/utils";
import { PolymorphicComponentPropsWithRef } from "@/utils/types";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const spinnerStyles = cva(
  [
    "animate-spin",
    "rounded-full",
    "border-2",
    "border-solid",
    "border-current",
    "border-e-transparent",
    "ease-in-out",
  ],
  {
    variants: {
      size: {
        sm: "w-3 h-3 border-2",
        md: "w-4 h-4 border-2",
        lg: "w-8 h-8 border-4",
        xl: "w-10 h-10 border-4",
      },
      color: {
        none: "decoration-current",
        default: "border-slate-500 !border-t-transparent",
        primary: "border-primary-500 !border-t-transparent",
        secondary: "border-secondary-500 !border-t-transparent",
        success: "border-green-500 !border-t-transparent",
        warning: "border-yellow-500 !border-t-transparent",
        danger: "border-red-500 !border-t-transparent",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const labelStyles = cva(["animate-pulse"], {
  variants: {
    labelSize: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    labelColor: {
      default: "text-slate-500",
      primary: "text-primary-500",
      secondary: "text-secondary-500",
      success: "text-green-500",
      warning: "text-yellow-500",
      danger: "text-red-500",
    },
  },
  defaultVariants: {
    labelSize: "md",
  },
});

type SpinnerProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<
    C,
    VariantProps<typeof spinnerStyles> & VariantProps<typeof labelStyles>
  > & {
    label?: string;
  };

type SpinnerComponent = <C extends React.ElementType = "div">(
  props: SpinnerProps<C>
) => React.ReactElement | null;

export const Spinner = forwardRef(
  <C extends React.ElementType = "div">(
    {
      as,
      size = "md",
      color = "none",
      label,
      labelColor = "default",
      labelSize = "md",
      className,
      ...props
    }: SpinnerProps<C>,
    ref: React.Ref<React.ElementType<C>>
  ) => {
    const Component = as || "div";

    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <Component
          ref={ref}
          className={cn(spinnerStyles({ size, color, className }))}
          role="status"
          {...props}
          style={{
            borderTopColor: "currentColor",
          }}
        ></Component>
        <span className="sr-only">Loading...</span>
        {label && (
          <span className={cn(labelStyles({ labelColor, labelSize }))}>
            {label}
          </span>
        )}
      </div>
    );
  }
) as SpinnerComponent;

(Spinner as React.ComponentType).displayName = "DynamicUI.Spinner";

export default Spinner;
