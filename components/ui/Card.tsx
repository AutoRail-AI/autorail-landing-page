import type { ComponentProps, ReactNode } from "react"
import { cn } from "lib/utils"

export interface CardProps extends ComponentProps<"div"> {
  children: ReactNode
  hover?: boolean
  gradient?: boolean
}

export function Card({ className, children, hover = true, gradient = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-void-black border-hud",
        "transition-all duration-200",
        hover && "hover:border-electric-cyan/30 hover:glow-purple",
        gradient && "bg-grid-pattern",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface CardHeaderProps extends ComponentProps<"div"> {
  children: ReactNode
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
      {children}
    </div>
  )
}

export interface CardContentProps extends ComponentProps<"div"> {
  children: ReactNode
}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
}

export interface CardTitleProps extends ComponentProps<"h3"> {
  children: ReactNode
}

export function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-xl font-medium font-[family-name:var(--font-grotesk)] text-cloud-white",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

export interface CardDescriptionProps extends ComponentProps<"p"> {
  children: ReactNode
}

export function CardDescription({ className, children, ...props }: CardDescriptionProps) {
  return (
    <p className={cn("text-sm text-foreground-secondary leading-relaxed", className)} {...props}>
      {children}
    </p>
  )
}
