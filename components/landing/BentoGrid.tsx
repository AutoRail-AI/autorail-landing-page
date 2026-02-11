"use client"

import { motion } from "framer-motion"
import { Container } from "components/ui"
import { SECTION_IDS } from "lib/constants"
import { staggerContainer, cardItem } from "lib/animations"
import { cn } from "lib/utils"

/* ─────────────────────────────────────────────────────────────────────────────
   BentoGrid — Asymmetrical glass-card feature grid.

   "Two Brains" layout: Code Synapse (Cyan, left) and Necroma (Purple, right)
   presented side-by-side with strict color separation. No cyan-to-purple
   blending anywhere. Connectors use rigid white/10 circuit lines.

   Industrial Glass material:
     Background:  rgba(255, 255, 255, 0.03)
     Border:      1px solid rgba(255, 255, 255, 0.1)
     Blur:        12px
     Hover:       Border lights up strictly Cyan OR Purple, never a mix.
   ───────────────────────────────────────────────────────────────────────────── */

const SYNAPSE_CODE = `// code-synapse enforces your patterns
import { loadContext } from "code-synapse"

const ctx = await loadContext({
  project: "payments-api",
  rules:   "strict",
})

// AI agents now follow YOUR conventions
const result = agent.generate({
  context: ctx,
})`

const NECROMA_CODE = `> necroma scan --target legacy-auth
  ■ Analyzing 147 modules...
  ■ Mapping behavior signatures...
  ■ 3 vertical slices identified

> necroma migrate --slice auth-core
  ✓ Tests generated from behavior
  ✓ Migrated:  COBOL → TypeScript
  ✓ Self-heal: ARMED`

export function BentoGrid() {
  return (
    <section className="py-24 bg-void-black relative overflow-hidden">
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
          <p className="text-label text-white/40 mb-3">Two Products. One Mission.</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-m text-white"
          >
            The Two Brains of AutoRail
          </motion.h2>
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
              <span className="text-label text-electric-cyan">code-synapse</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-grotesk">
              The Institutional Memory Layer
            </h3>
            <p className="text-gray-300 mb-6 max-w-lg">
              Meet Code-Synapse. The intelligent CLI sidecar that teaches IDE agents (Cursor, Claude)
              your team&apos;s specific patterns to stop the generation of &apos;Alien Code&apos;.
            </p>
            {/* Code snippet with brand-colored syntax */}
            <div className="rounded-lg bg-void-black border border-white/10 p-4 overflow-x-auto">
              <pre className="font-mono text-xs leading-relaxed">
                {SYNAPSE_CODE.split("\n").map((line, i) => (
                  <SynapseLine key={i} line={line} />
                ))}
              </pre>
            </div>
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
                <span className="text-label text-rail-purple">necroma</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-grotesk">
                Autonomous Legacy Reclamation
              </h3>
              <p className="text-gray-300 mb-6 max-w-lg">
                Meet Necroma. The autonomous agent portal that watches how your legacy app behaves and
                rebuilds it perfectly in modern tech. It translates user intent, not just broken syntax.
              </p>
              {/* Terminal output with purple-accented scanning */}
              <div className="rounded-lg bg-void-black border border-white/10 p-4 overflow-x-auto">
                <pre className="font-mono text-xs leading-relaxed">
                  {NECROMA_CODE.split("\n").map((line, i) => (
                    <NecromaLine key={i} line={line} />
                  ))}
                </pre>
              </div>
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
