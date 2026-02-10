import { cn } from "lib/utils"
import type { ReactNode } from "react"

interface GradientTextProps {
    children: ReactNode
    className?: string
    variant?: "brand" | "synapse" | "necroma"
}

export function GradientText({ children, className, variant = "brand" }: GradientTextProps) {
    const variants = {
        brand: "text-rail-purple",
        synapse: "text-electric-cyan",
        necroma: "text-rail-purple",
    }

    return (
        <span className={cn(variants[variant], className)}>
            {children}
        </span>
    )
}
