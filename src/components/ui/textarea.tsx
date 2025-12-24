import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[60px] w-full rounded-xl border border-input/50 bg-background/50 backdrop-blur-sm px-3 py-2 text-base shadow-soft-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/20 dark:focus-visible:ring-ring/50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
