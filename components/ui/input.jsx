import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[52px] w-full rounded-2xl border border-line/10 bg-bg/60 px-5 text-base placeholder:text-muted/80 outline-none transition-colors focus:border-accent focus:ring-4 focus:ring-accent/15",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
