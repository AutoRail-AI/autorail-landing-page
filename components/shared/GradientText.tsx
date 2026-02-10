import { cn } from "lib/utils"
import type { ReactNode } from "react"

interface GradientTextProps {
    children: ReactNode
    className?: string
    variant?: "brand" | "synapse" | "necroma"
}

export function GradientText({ children, className, variant = "brand" }: GradientTextProps) {
    const variants = {
        brand: "from-rail-purple to-quantum-violet",
        synapse: "from-electric-cyan to-neon-blue",
        necroma: "from-rail-purple to-[#ff00ff]",
    }

    return (
        <span
            className={cn(
                "bg-gradient-to-r bg-clip-text text-transparent",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    )
}
