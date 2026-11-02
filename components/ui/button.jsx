import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default: "bg-accent text-bg hover:bg-accent-hover hover:shadow-glow hover:-translate-y-0.5",
        primary: "bg-fg text-bg hover:bg-accent hover:-translate-y-0.5",
        outline: "border border-line/15 bg-fg/[0.03] text-fg hover:border-accent hover:text-accent hover:-translate-y-0.5",
      },
      size: {
        default: "h-[44px] px-6",
        sm: "h-[40px] px-5 text-sm",
        lg: "h-[54px] px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
