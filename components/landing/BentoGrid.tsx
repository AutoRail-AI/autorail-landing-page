"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView, useMotionValue, animate } from "framer-motion"
import { ArrowRight } from "lucide-react"
import posthog from "posthog-js"
import { Container } from "components/ui"
import { SECTION_IDS } from "lib/constants"
import { blurReveal, staggerContainer, cardItem } from "lib/animations"
import { cn } from "lib/utils"

/* ─────────────────────────────────────────────────────────────────────────────
   BentoGrid — Vertically Stacked Architecture Layers

   "Two Layers. One Stack." — unerr (Cyan) on top, Necroma (Purple)
   below, connected by a stats backbone. Each product is a full-width glass
   panel with 2-col internal layout (text + code), mirrored for variety.
   ───────────────────────────────────────────────────────────────────────────── */

const SYNAPSE_CODE = `# unerr runs alongside your IDE
$ unerr start --watch

  ■ MCP server running on stdio
  ■ Knowledge graph: 1,247 nodes
  ■ Watching commits for updates...
  ■ Skill libraries: 3 active

# Agents connect via MCP — zero config
  ✓ Cursor connected
  ✓ Pattern enforcement: ON
  ✓ Drift detection: ARMED`

const NECROMA_CODE = `> necroma scan --target legacy-auth
  ■ Recording DOM events + user flows...
  ■ Generating Playwright test suite...
  ■ 3 vertical slices identified

> necroma migrate --verify
  ✓ Behavioral tests generated
  ✓ Migrated:  COBOL → TypeScript
  ✓ Guardrails: ARMED`

const SYNAPSE_STATS = [
  { value: "90%", label: "Less alien code", color: "cyan" as const, numericValue: 90 },
  { value: "3x", label: "Faster onboarding", color: "cyan" as const, numericValue: 3 },
  { value: "0", label: "Day-2 surprises", color: "white" as const, numericValue: 0 },
]

const NECROMA_STATS = [
  { value: "147", label: "Modules scanned", color: "purple" as const, numericValue: 147 },
  { value: "99.7%", label: "Behavior preserved", color: "purple" as const, numericValue: 99.7 },
]

type StatItem = { value: string; label: string; color: "cyan" | "purple" | "white"; numericValue: number }

const TECH_STACK = ["MCP", "CozoDB", "LangGraph", "TypeScript", "OpenHands"]

/* ── Animated Counter ─────────────────────────────────────────────────────── */

function AnimatedStat({
  stat,
}: {
  stat: StatItem
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const motionVal = useMotionValue(0)
  const [displayed, setDisplayed] = useState("0")

  const suffix = stat.value.includes("%") ? "%" : stat.value.includes("x") ? "x" : ""
  const hasDecimal = stat.numericValue % 1 !== 0

  useEffect(() => {
    if (!isInView) return
    const controls = animate(motionVal, stat.numericValue, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplayed(hasDecimal ? v.toFixed(1) : Math.round(v).toString())
      },
    })
    return controls.stop
  }, [isInView, motionVal, stat.numericValue, hasDecimal])

  return (
    <span ref={ref} className="tabular-nums">
      {displayed}{suffix}
    </span>
  )
}

/* ── Backbone Particles ──────────────────────────────────────────────────── */

function BackboneParticles() {
  const particles = Array.from({ length: 6 })
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px overflow-hidden pointer-events-none">
      {/* Static line */}
      <div className="absolute inset-0 bg-gradient-to-b from-electric-cyan/30 via-white/15 to-rail-purple/30" />
      {/* Flowing particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/80"
          style={{ boxShadow: "0 0 6px rgba(255,255,255,0.4)" }}
          initial={{ top: "-4px", opacity: 0 }}
          animate={{
            top: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export function BentoGrid() {
  return (
    <section id={SECTION_IDS.twoBrains} className="py-16 bg-void-black relative overflow-hidden scroll-mt-20">
      {/* Spatially separated glows — Cyan left, Purple right (larger + more intense) */}
      <div
        className="absolute top-1/3 left-[20%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/3 right-[20%] translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(110,24,179,0.06) 0%, transparent 70%)" }}
      />

      {/* Faint vertical center line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none" />

      <Container className="relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-label text-white/40 mb-3">The Infrastructure</p>
          <div className="flex items-center justify-center gap-6 mb-4">
            {/* Left decorative line */}
            <div className="hidden md:block flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-white/20" />
            <motion.h2
              variants={blurReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-display-m text-white"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.08)" }}
            >
              Two Layers. One Stack.
            </motion.h2>
            {/* Right decorative line */}
            <div className="hidden md:block flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-white/20" />
          </div>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Autonomous engineering needs infrastructure underneath — or it collapses on Day 2.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-0">
          {/* ── unerr Layer ─────────────────────────────────── */}
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <ProductLayer
              product="synapse"
              label="unerr · CLI Sidecar"
              title="The Context Layer"
              description="Persistent memory infrastructure for agents. An AST-backed knowledge graph injected directly into your IDE agent via MCP — teaching it your patterns, conventions, and business intent across every session and every developer."
              code={SYNAPSE_CODE}
              renderLine={SynapseLine}
              href="/unerr"
              ctaText="Explore unerr"
              layout="text-left"
              stats={SYNAPSE_STATS}
            />
          </motion.div>

          {/* ── Backbone Divider ──────────────────────────────────── */}
          <div className="relative py-10">
            <BackboneParticles />
            {/* Center icon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div
                className="w-10 h-10 rounded-full bg-void-black border border-white/20 flex items-center justify-center"
                style={{ boxShadow: "0 0 20px rgba(255,255,255,0.06)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </div>
          </div>

          {/* ── Necroma Layer ──────────────────────────────────────── */}
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <ProductLayer
              product="necroma"
              label="necroma · Web Portal"
              title="The Migration Layer"
              description="Autonomous legacy modernization. Records DOM events and user flows, generates Playwright tests from observed behavior, and forces the AI to write code until the tests pass. Not syntax translation — behavioral reconstruction."
              code={NECROMA_CODE}
              renderLine={NecromaLine}
              href="/necroma"
              ctaText="Explore Necroma"
              layout="text-right"
              stats={NECROMA_STATS}
            />
          </motion.div>

          {/* ── Tech Stack Pills ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-10 flex flex-col items-center gap-4"
          >
            <span className="text-label text-white/40">Built On</span>
            <div className="flex flex-wrap justify-center items-center gap-0">
              {TECH_STACK.map((tech, i) => (
                <div key={tech} className="flex items-center">
                  {i > 0 && (
                    <div className="w-4 h-px border-t border-dashed border-white/10" />
                  )}
                  <span
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-mono text-white/60",
                      "border border-white/10 bg-white/[0.02]",
                      "hover:border-white/25 hover:text-white/80 hover:scale-105 hover:bg-white/[0.04]",
                      "transition-all duration-200 cursor-default",
                    )}
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

/* ── Product Layer Panel ───────────────────────────────────────────────── */

function ProductLayer({
  product,
  label,
  title,
  description,
  code,
  renderLine: RenderLine,
  href,
  ctaText,
  layout,
  stats,
}: {
  product: "synapse" | "necroma"
  label: string
  title: string
  description: string
  code: string
  renderLine: React.ComponentType<{ line: string; lineNumber: number; isLast: boolean }>
  href: string
  ctaText: string
  layout: "text-left" | "text-right"
  stats: StatItem[]
}) {
  const isCyan = product === "synapse"
  const accentBorder = isCyan ? "border-l-electric-cyan/40" : "border-l-rail-purple/40"
  const hoverBorder = isCyan ? "hover:border-electric-cyan/30" : "hover:border-rail-purple/30"
  const dotColor = isCyan ? "bg-electric-cyan" : "bg-rail-purple"
  const labelColor = isCyan ? "text-electric-cyan" : "text-rail-purple"
  const ctaBorder = isCyan ? "border-electric-cyan/30" : "border-rail-purple/30"
  const ctaHover = isCyan ? "hover:glow-cyan hover:bg-electric-cyan/5" : "hover:glow-purple hover:bg-rail-purple/5"

  const breathingClass = isCyan ? "animate-breathing-glow" : ""

  const lines = code.split("\n")

  const textContent = (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-3 mb-4">
        <div className={cn("w-2 h-2 rounded-full", dotColor)} />
        <span className={cn("text-label", labelColor)}>{label}</span>
      </div>
      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-grotesk">
        {title}
      </h3>
      <p className="text-base text-white/70 mb-6 max-w-lg leading-relaxed">
        {description}
      </p>
      <Link
        href={href}
        onClick={() => {
          posthog.capture("product_explored", {
            product: product === "synapse" ? "unerr" : "necroma",
            cta_text: ctaText,
            source: "bento_grid",
          })
        }}
        className={cn(
          "inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm",
          "bg-transparent border", ctaBorder, labelColor,
          ctaHover,
          "transition-all duration-300 group/cta",
        )}
      >
        {ctaText}
        <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  )

  const codeContent = (
    <div className="flex-1 min-w-0">
      <div
        className="rounded-lg bg-[#0e0e14] border border-white/[0.15] overflow-hidden"
        style={{ boxShadow: isCyan
          ? "0 20px 50px -10px rgba(0,229,255,0.12), 0 0 0 1px rgba(255,255,255,0.05)"
          : "0 20px 50px -10px rgba(110,24,179,0.15), 0 0 0 1px rgba(255,255,255,0.05)"
        }}
      >
        {/* Terminal header bar */}
        <div className="flex items-center px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
            <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
            <div className="w-2 h-2 rounded-full bg-[#28C840]" />
          </div>
          <span className="flex-1 text-center text-[10px] font-mono text-white/30 tracking-wider uppercase">
            {isCyan ? "unerr" : "necroma"}
          </span>
          <div className="w-[52px]" /> {/* Spacer to center the title */}
        </div>
        {/* Code body with line numbers */}
        <div className="p-4 overflow-x-auto">
          <pre className="font-mono text-xs leading-relaxed">
            {lines.map((line, i) => (
              <div key={i} className="flex">
                <span className="select-none w-6 text-right mr-3 text-white/15 text-[10px] leading-relaxed shrink-0">
                  {i + 1}
                </span>
                <RenderLine line={line} lineNumber={i} isLast={i === lines.length - 1} />
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  )

  return (
    <div
      className={cn(
        "group relative rounded-xl p-8 overflow-hidden",
        "bg-white/[0.04] border border-white/[0.12] backdrop-blur-[12px]",
        "border-l-2", accentBorder,
        hoverBorder,
        "transition-all duration-300 hover:scale-[1.008]",
        breathingClass,
      )}
      style={
        !isCyan
          ? { animation: "breathing-glow-purple 4s ease-in-out infinite" }
          : undefined
      }
    >
      {/* HUD corner brackets (20px, 1.5 stroke) */}
      <HudBrackets color={isCyan ? "cyan" : "purple"} />

      {/* Scanline for Necroma only (smoother, 4s) */}
      {product === "necroma" && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <motion.div
            className="absolute left-0 right-0 h-px bg-rail-purple/40"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      <div className={cn(
        "relative flex flex-col gap-8",
        layout === "text-left" ? "lg:flex-row" : "lg:flex-row-reverse",
      )}>
        {textContent}
        {codeContent}
      </div>

      {/* Inline stats row — large prominent numbers */}
      <div className="relative flex flex-wrap gap-8 lg:gap-12 mt-6 pt-6 border-t border-white/[0.06]">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span
              className={cn(
                "text-4xl lg:text-5xl font-bold font-grotesk tabular-nums leading-none",
                stat.color === "cyan" && "text-electric-cyan",
                stat.color === "purple" && "text-rail-purple",
                stat.color === "white" && "text-white",
              )}
              style={{
                textShadow: stat.color === "cyan"
                  ? "0 0 30px rgba(0,229,255,0.3)"
                  : stat.color === "purple"
                    ? "0 0 30px rgba(110,24,179,0.3)"
                    : "0 0 30px rgba(255,255,255,0.1)",
              }}
            >
              <AnimatedStat stat={stat} />
            </span>
            <span className="text-xs text-white/50 mt-2 font-mono">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── HUD Corner Brackets (20px, 1.5 stroke weight) ────────────────────── */

function HudBrackets({ color }: { color: "cyan" | "purple" }) {
  const stroke = color === "cyan" ? "rgba(0,229,255,0.3)" : "rgba(110,24,179,0.3)"
  const size = 20
  return (
    <>
      {/* Top-left */}
      <svg className="absolute top-2 left-2 pointer-events-none" width={size} height={size}>
        <path d={`M0 ${size} V0 H${size}`} fill="none" stroke={stroke} strokeWidth="1.5" />
      </svg>
      {/* Top-right */}
      <svg className="absolute top-2 right-2 pointer-events-none" width={size} height={size}>
        <path d={`M${size} ${size} V0 H0`} fill="none" stroke={stroke} strokeWidth="1.5" />
      </svg>
      {/* Bottom-left */}
      <svg className="absolute bottom-2 left-2 pointer-events-none" width={size} height={size}>
        <path d={`M0 0 V${size} H${size}`} fill="none" stroke={stroke} strokeWidth="1.5" />
      </svg>
      {/* Bottom-right */}
      <svg className="absolute bottom-2 right-2 pointer-events-none" width={size} height={size}>
        <path d={`M${size} 0 V${size} H0`} fill="none" stroke={stroke} strokeWidth="1.5" />
      </svg>
    </>
  )
}

/* ── Syntax Highlight Helpers ──────────────────────────────────────────── */

function SynapseLine({ line, lineNumber, isLast }: { line: string; lineNumber: number; isLast: boolean }) {
  const cursor = isLast ? <span className="inline-block w-[7px] h-[14px] bg-electric-cyan/80 ml-0.5 align-middle animate-[cursor-blink_1s_step-end_infinite]" /> : null

  // Comment lines
  if (line.startsWith("#")) {
    return <div className="text-white/40 flex-1">{line}{cursor}</div>
  }

  // Prompt lines ($ prefix) — brighter
  if (line.trimStart().startsWith("$")) {
    return (
      <div className="text-electric-cyan flex-1">
        {line}
        {cursor}
      </div>
    )
  }

  // Check/status lines — brighter
  if (line.includes("\u2713")) {
    return <div className="text-success/90 flex-1">{line}{cursor}</div>
  }
  if (line.includes("\u25A0")) {
    return <div className="text-white/60 flex-1">{line}{cursor}</div>
  }

  // Syntax highlighting
  const highlighted = line
    .replace(/(import|from|const|await|async)/g, '<cyan>$1</cyan>')
    .replace(/("unerr"|"payments-api"|"strict")/g, '<str>$1</str>')

  if (highlighted.includes("<cyan>") || highlighted.includes("<str>")) {
    const parts = highlighted.split(/(<cyan>.*?<\/cyan>|<str>.*?<\/str>)/g)
    return (
      <div className="text-white/70 flex-1">
        {parts.map((part, i) => {
          if (part.startsWith("<cyan>")) {
            return <span key={i} className="text-electric-cyan">{part.replace(/<\/?cyan>/g, "")}</span>
          }
          if (part.startsWith("<str>")) {
            return <span key={i} className="text-electric-cyan/70">{part.replace(/<\/?str>/g, "")}</span>
          }
          return <span key={i}>{part}</span>
        })}
        {cursor}
      </div>
    )
  }

  return <div className="text-white/70 flex-1">{line}{cursor}</div>
}

function NecromaLine({ line, lineNumber, isLast }: { line: string; lineNumber: number; isLast: boolean }) {
  const cursor = isLast ? <span className="inline-block w-[7px] h-[14px] bg-rail-purple/80 ml-0.5 align-middle animate-[cursor-blink_1s_step-end_infinite]" /> : null

  // Prompt lines (> prefix) — brighter
  if (line.startsWith(">")) {
    return <div className="text-rail-purple flex-1 brightness-150">{line}{cursor}</div>
  }
  if (line.includes("\u2713")) {
    return <div className="text-rail-purple/90 flex-1">{line}{cursor}</div>
  }
  if (line.includes("\u25A0")) {
    return <div className="text-white/60 flex-1">{line}{cursor}</div>
  }
  return <div className="text-white/60 flex-1">{line}{cursor}</div>
}
