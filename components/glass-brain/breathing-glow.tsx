"use client"

import { motion } from "framer-motion"
import { cn } from "lib/utils"

interface BreathingGlowProps {
  /** 0–1; drives glow intensity (20px at 0, 60px at 1) */
  confidence?: number
  children: React.ReactNode
  className?: string
}

export function BreathingGlow({
  confidence = 0.6,
  children,
  className,
}: BreathingGlowProps) {
  const intensity = 20 + confidence * 40
  const alpha = 0.05 + confidence * 0.1
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  return (
    <motion.div
      className={cn("relative rounded-2xl", className)}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              boxShadow: [
                `inset 0 0 ${intensity}px rgba(129, 52, 206, ${alpha * 0.5})`,
                `inset 0 0 ${intensity * 1.5}px rgba(129, 52, 206, ${alpha})`,
                `inset 0 0 ${intensity}px rgba(129, 52, 206, ${alpha * 0.5})`,
              ],
            }
      }
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  )
}
