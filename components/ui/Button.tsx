"use client"

import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { cn } from "lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center rounded-lg",
    "font-medium font-[family-name:var(--font-grotesk)]",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-void-black",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-transparent border border-electric-cyan text-electric-cyan",
          "hover:bg-electric-cyan/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]",
          "active:scale-[0.98]",
        ],
        secondary: [
          "bg-transparent text-rail-purple",
          "border border-rail-purple",
          "hover:bg-rail-purple/10 hover:shadow-[0_0_20px_rgba(110,24,179,0.2)]",
          "active:scale-[0.98]",
        ],
        ghost: [
          "bg-transparent text-cloud-white/80",
          "hover:text-cloud-white hover:bg-white/[0.03]",
        ],
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-8 text-base",
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
