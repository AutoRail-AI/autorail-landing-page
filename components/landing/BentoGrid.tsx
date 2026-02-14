"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "components/ui"
import { SECTION_IDS } from "lib/constants"
import { staggerContainer, cardItem } from "lib/animations"
import { cn } from "lib/utils"

/* BentoGrid uses SECTION_IDS.twoBrains as its anchor for nav scroll-to */

/* ─────────────────────────────────────────────────────────────────────────────
   BentoGrid — Asymmetrical glass-card feature grid.

   "Two Layers. One Stack." layout: Code Synapse (Cyan, Context Layer) and
   Necroma (Purple, Migration Layer) presented side-by-side with strict color
   separation. No cyan-to-purple blending anywhere.

   Industrial Glass material:
     Background:  rgba(255, 255, 255, 0.03)
     Border:      1px solid rgba(255, 255, 255, 0.1)
     Blur:        12px
     Hover:       Border lights up strictly Cyan OR Purple, never a mix.
   ───────────────────────────────────────────────────────────────────────────── */

const SYNAPSE_CODE = `# code-synapse runs alongside your IDE
$ code-synapse start --watch

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

export function BentoGrid() {
  return (
    <section id={SECTION_IDS.twoBrains} className="py-24 bg-void-black relative overflow-hidden scroll-mt-20">
      {/* Spatially separated glows — Cyan left, Purple right */}
      <div
        className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 right-[20%] translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(110,24,179,0.05) 0%, transparent 70%)" }}
      />

      <Container className="relative">
        <div className="text-center mb-16">
          <p className="text-label text-white/40 mb-3">The Infrastructure</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-m text-white mb-4"
          >
            Two Layers. One Stack.
          </motion.h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Autonomous engineering needs infrastructure underneath — or it collapses on Day 2.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {/* ── Card A: Code Synapse (Cyan) — spans 2 columns ── */}
          <motion.div
            variants={cardItem}
            className={cn(
              "lg:col-span-2 rounded-xl p-8 group",
              "bg-white/[0.03] border border-white/10 backdrop-blur-[12px]",
              "hover:border-electric-cyan/30 transition-all duration-300",
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-electric-cyan" />
              <span className="text-label text-electric-cyan">code-synapse · CLI Sidecar</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-grotesk">
              The Context Layer
            </h3>
            <p className="text-gray-300 mb-6 max-w-lg">
              Persistent memory infrastructure for agents. An AST-backed knowledge graph
              injected directly into your IDE agent via MCP — teaching it your patterns,
              conventions, and business intent across every session and every developer.
            </p>
            {/* Code snippet with brand-colored syntax */}
            <div className="rounded-lg bg-void-black border border-white/10 p-4 overflow-x-auto mb-6">
              <pre className="font-mono text-xs leading-relaxed">
                {SYNAPSE_CODE.split("\n").map((line, i) => (
                  <SynapseLine key={i} line={line} />
                ))}
              </pre>
            </div>
            <Link
              href="/code-synapse"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm",
                "bg-transparent border border-electric-cyan/30 text-electric-cyan",
                "hover:glow-cyan hover:bg-electric-cyan/5",
                "transition-all duration-300 group",
              )}
            >
              Explore Code-Synapse
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* ── Card C: Stats / Metrics ── */}
          <motion.div
            variants={cardItem}
            className={cn(
              "rounded-xl p-8",
              "bg-white/[0.03] border border-white/10 backdrop-blur-[12px]",
              "hover:border-white/20 transition-all duration-300",
              "flex flex-col justify-between",
            )}
          >
            <div>
              <span className="text-label text-white/40 mb-6 block">By the Numbers</span>
              <div className="space-y-6">
                <Stat value="90%" label="Less alien code" color="cyan" />
                <Stat value="3x" label="Faster onboarding" color="cyan" />
                <Stat value="0" label="Day-2 surprises" color="white" />
              </div>
            </div>
            {/* Rigid circuit line separator */}
            <div className="mt-8 h-px bg-white/10" />
            <div className="mt-4 space-y-4">
              <Stat value="147" label="Modules scanned" color="purple" />
              <Stat value="99.7%" label="Behavior preserved" color="purple" />
            </div>
          </motion.div>

          {/* ── Card D: Tech Stack ── */}
          <motion.div
            variants={cardItem}
            className={cn(
              "rounded-xl p-8",
              "bg-white/[0.03] border border-white/10 backdrop-blur-[12px]",
              "hover:border-white/20 transition-all duration-300",
            )}
          >
            <span className="text-label text-white/40 mb-4 block">Built On</span>
            <div className="flex flex-wrap gap-2">
              {["MCP", "CozoDB", "LangGraph", "TypeScript", "OpenHands"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-white/60 border border-white/10 bg-white/[0.02]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Card B: Necroma (Purple) — spans 2 columns ── */}
          <motion.div
            variants={cardItem}
            className={cn(
              "lg:col-span-2 rounded-xl p-8 group relative overflow-hidden",
              "bg-white/[0.03] border border-white/10 backdrop-blur-[12px]",
              "hover:border-rail-purple/30 transition-all duration-300",
            )}
          >
            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.div
                className="absolute left-0 right-0 h-px bg-rail-purple/40"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-rail-purple" />
                <span className="text-label text-rail-purple">necroma · Web Portal</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-grotesk">
                The Migration Layer
              </h3>
              <p className="text-gray-300 mb-6 max-w-lg">
                Autonomous legacy reclamation. Records DOM events and user flows,
                generates Playwright tests from observed behavior, and forces the AI to write
                code until the tests pass. Not syntax translation — behavioral reconstruction.
              </p>
              {/* Terminal output with purple-accented scanning */}
              <div className="rounded-lg bg-void-black border border-white/10 p-4 overflow-x-auto mb-6">
                <pre className="font-mono text-xs leading-relaxed">
                  {NECROMA_CODE.split("\n").map((line, i) => (
                    <NecromaLine key={i} line={line} />
                  ))}
                </pre>
              </div>
              <Link
                href="/necroma"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm",
                  "bg-transparent border border-rail-purple/30 text-rail-purple",
                  "hover:glow-purple hover:bg-rail-purple/5",
                  "transition-all duration-300 group",
                )}
              >
                Explore Necroma
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

/* ── Helpers ─────────────────────────────────────────────────────────────── */

function Stat({ value, label, color }: { value: string; label: string; color: "cyan" | "purple" | "white" }) {
  const colorClass = {
    cyan: "text-electric-cyan",
    purple: "text-rail-purple",
    white: "text-white",
  }[color]

  return (
    <div>
      <span className={cn("text-2xl font-bold font-mono", colorClass)}>{value}</span>
      <span className="block text-xs text-gray-300 mt-1">{label}</span>
    </div>
  )
}

function SynapseLine({ line }: { line: string }) {
  // Cyan-accented syntax highlighting
  if (line.startsWith("//")) {
    return <div className="text-white/30">{line}</div>
  }
  // Highlight keywords in cyan
  const highlighted = line
    .replace(/(import|from|const|await|async)/g, '<cyan>$1</cyan>')
    .replace(/("code-synapse"|"payments-api"|"strict")/g, '<str>$1</str>')

  if (highlighted.includes("<cyan>") || highlighted.includes("<str>")) {
    const parts = highlighted.split(/(<cyan>.*?<\/cyan>|<str>.*?<\/str>)/g)
    return (
      <div className="text-white/60">
        {parts.map((part, i) => {
          if (part.startsWith("<cyan>")) {
            return <span key={i} className="text-electric-cyan">{part.replace(/<\/?cyan>/g, "")}</span>
          }
          if (part.startsWith("<str>")) {
            return <span key={i} className="text-electric-cyan/60">{part.replace(/<\/?str>/g, "")}</span>
          }
          return <span key={i}>{part}</span>
        })}
      </div>
    )
  }

  return <div className="text-white/60">{line}</div>
}

function NecromaLine({ line }: { line: string }) {
  // Purple-accented terminal highlighting
  if (line.startsWith(">")) {
    return <div className="text-rail-purple">{line}</div>
  }
  if (line.includes("✓")) {
    return <div className="text-rail-purple/80">{line}</div>
  }
  if (line.includes("■")) {
    return <div className="text-white/40">{line}</div>
  }
  return <div className="text-white/40">{line}</div>
}
