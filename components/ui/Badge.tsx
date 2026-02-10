import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, ReactNode } from "react"
import { cn } from "lib/utils"

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center rounded-md",
    "font-medium font-[family-name:var(--font-grotesk)]",
    "uppercase tracking-widest text-[10px]",
  ],
  {
    variants: {
      variant: {
        default: "bg-rail-purple/20 text-rail-purple border border-rail-purple/50",
        outline: "bg-transparent border border-white/10 text-muted-foreground",
        cyan: "bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/50",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px] rounded",
        md: "px-3 py-1 text-xs rounded-md",
        lg: "px-4 py-1.5 text-sm rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  children: ReactNode
}

export function Badge({ className, variant, size, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size, className }))} {...props}>
      {children}
    </span>
  )
}
