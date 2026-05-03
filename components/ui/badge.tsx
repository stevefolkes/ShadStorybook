import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-[5px] border border-transparent px-2 py-0 text-sm font-semibold whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        grey:   "bg-[#f3f4f6] text-[#71717a]",
        blue:   "bg-[#dbeafe] text-[#2563eb]",
        yellow: "bg-[#fef9c3] text-[#854d0e]",
        purple: "bg-[#f3e8ff] text-[#7e22ce]",
        green:  "bg-[#dcfce7] text-[#0f766e]",
        red:    "bg-[#fee2e2] text-[#b91c1c]",
      },
    },
    defaultVariants: {
      variant: "grey",
    },
  }
)

function Badge({
  className,
  variant = "grey",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
