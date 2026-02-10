"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { fadeInUp, viewportSettings } from "lib/animations"
import { cn } from "lib/utils"

export interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string | ReactNode
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeInUp}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-label text-electric-cyan">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-cloud-white md:text-4xl lg:text-5xl font-[family-name:var(--font-grotesk)]">
        {title}
      </h2>
      {description && (
        <div className="mt-6 text-lg text-foreground-secondary leading-relaxed">
          {description}
        </div>
      )}
    </motion.div>
  )
}
