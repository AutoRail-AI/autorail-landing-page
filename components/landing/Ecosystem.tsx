"use client"

import { motion } from "framer-motion"
import { Container } from "components/ui"
import { SECTION_IDS } from "lib/constants"
import { cn } from "lib/utils"

const TECH_STACK = [
  "MCP",
  "CozoDB",
  "LangGraph",
  "OpenHands",
  "Playwright",
  "Temporal",
  "Supabase",
  "TypeScript",
  "AST",
]

const TECH_STACK_REVERSED = [...TECH_STACK].reverse()

function TechPill({
  name,
  size = "lg",
}: {
  name: string
  size?: "lg" | "sm"
}) {
  const isLarge = size === "lg"

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xl border cursor-default select-none",
        "bg-white/[0.04] border-white/[0.12]",
        "transition-all duration-500 ease-out",
        "hover:border-white/20 hover:bg-white/[0.05]",
        "hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.06)]",
        isLarge
          ? "px-8 py-4 text-2xl md:text-3xl font-grotesk font-bold text-white/60 hover:text-white"
          : "px-6 py-3 text-lg md:text-xl font-grotesk font-semibold text-white/50 hover:text-white/80",
      )}
    >
      {name}
    </span>
  )
}

function Diamond({ size = "lg" }: { size?: "lg" | "sm" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center select-none flex-shrink-0",
        size === "lg" ? "text-base text-white/[0.12]" : "text-xs text-white/[0.08]",
      )}
    >
      ◆
    </span>
  )
}

function MarqueeRow({
  items,
  direction = "left",
  size = "lg",
  duration = 30,
}: {
  items: string[]
  direction?: "left" | "right"
  size?: "lg" | "sm"
  duration?: number
}) {
  const doubled = [...items, ...items]

  const animateX =
    direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]

  return (
    <div className="relative overflow-hidden">
      {/* Edge fades */}
      <div className="absolute top-0 left-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-void-black via-void-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-void-black via-void-black/80 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-6 md:gap-8 whitespace-nowrap"
        animate={{ x: animateX }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
        }}
      >
        {doubled.map((tech, i) => (
          <div key={i} className="flex items-center gap-6 md:gap-8">
            <TechPill name={tech} size={size} />
            {i < doubled.length - 1 && <Diamond size={size} />}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function Ecosystem() {
  return (
    <section
      id={SECTION_IDS.ecosystem}
      className="relative py-20 bg-void-black bg-grid-pattern scroll-mt-20 overflow-hidden"
    >
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1000px 600px at 50% 50%, rgba(110,24,179,0.04) 0%, transparent 60%)",
        }}
      />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container>
        {/* Label */}
        <div className="text-center mb-16">
          <span className="text-label text-white/40 tracking-[0.2em] uppercase text-xs font-mono">
            Built on the Agentic Stack
          </span>
        </div>

        {/* Decorative line above marquee */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-10" />

        {/* Dual-row marquee */}
        <div className="flex flex-col gap-6">
          {/* Row 1: Primary — scrolls left, larger */}
          <MarqueeRow
            items={TECH_STACK}
            direction="left"
            size="lg"
            duration={30}
          />

          {/* Row 2: Secondary — scrolls right, smaller, faster */}
          <MarqueeRow
            items={TECH_STACK_REVERSED}
            direction="right"
            size="sm"
            duration={25}
          />
        </div>

        {/* Decorative line below marquee */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mt-10" />

        {/* Ambient tagline */}
        <p className="text-center mt-12 text-white/20 text-sm font-mono tracking-wide">
          Powering the next generation of autonomous engineering
        </p>
      </Container>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  )
}
