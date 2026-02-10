"use client"

import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { cn } from "lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "font-medium font-[family-name:var(--font-grotesk)]",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-void-black",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-rail-fade text-pure-white",
          "hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(129,52,206,0.3)]",
          "active:scale-[0.98]",
        ],
        secondary: [
          "bg-transparent text-cloud-white",
          "border border-cloud-white/20",
          "hover:bg-cloud-white/5 hover:border-cloud-white/40",
          "active:scale-[0.98]",
        ],
        ghost: [
          "bg-transparent text-cloud-white/80",
          "hover:text-cloud-white hover:bg-cloud-white/5",
        ],
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-md",
        md: "h-11 px-6 text-base rounded-lg",
        lg: "h-14 px-8 text-lg rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  href?: string
  onClick?: () => void
  target?: string
  rel?: string
}

export function Button({
  className,
  variant,
  size,
  href,
  onClick,
  children,
  target,
  rel,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn(buttonVariants({ variant, size, className }))}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  )
}
