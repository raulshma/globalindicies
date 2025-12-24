import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border-2 border-transparent bg-clip-padding text-xs font-bold uppercase tracking-wide focus-visible:ring-1 aria-invalid:ring-1 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none active:translate-y-[2px] active:shadow-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-border shadow-hard-sm hover:shadow-hard hover:-translate-y-[1px] [a]:hover:bg-primary/90",
        outline: "border-border bg-background text-foreground shadow-hard-sm hover:shadow-hard hover:-translate-y-[1px] hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground border-border shadow-hard-sm hover:shadow-hard hover:-translate-y-[1px]",
        ghost: "hover:bg-accent hover:text-accent-foreground border-transparent",
        destructive: "bg-destructive text-white border-border shadow-hard-sm hover:shadow-hard hover:-translate-y-[1px]",
        link: "text-primary underline-offset-4 hover:underline border-none shadow-none active:translate-y-0",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-7 px-2 text-xs",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "size-9",
        "icon-xs": "size-7",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
