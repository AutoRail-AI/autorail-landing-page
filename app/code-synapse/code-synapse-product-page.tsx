"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Brain,
  ExternalLink,
  GitBranch,
  Network,
  Puzzle,
  ShieldCheck,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react"
import { Container } from "components/ui"
import { calTriggerProps } from "components/providers"
import { CODE_SYNAPSE } from "data/products"
import { SITE_CONFIG } from "lib/constants"
import { staggerContainer, cardItem, blurReveal } from "lib/animations"
import { cn } from "lib/utils"

/* ─────────────────────────────────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────────────────────────────────── */

const PIPELINE = [
  {
    icon: Terminal,
    title: "CLI Sidecar",
    desc: "Runs alongside your IDE",
  },
  {
    icon: Workflow,
    title: "Knowledge Graph",
    desc: "Maps your architecture",
  },
  {
    icon: Network,
    title: "MCP Server",
    desc: "Serves context to agents",
  },
  {
    icon: Puzzle,
    title: "Skill Libraries",
    desc: "Enforces your patterns",
  },
]

const CAPABILITIES = [
  {
    icon: Brain,
    title: "Understands Business Intent",
    desc: "Knows why modules exist, what constraints drove patterns, and what breaks if conventions are violated.",
  },
  {
    icon: ShieldCheck,
    title: "Pattern Enforcement",
    desc: "Agents use your internal modules — not generic public packages. DateUtils over moment.js, every time.",
  },
  {
    icon: GitBranch,
    title: "Drift Prevention",
    desc: "Catches architectural drift before it merges to main. Alien code gets flagged, not shipped.",
  },
]

// Machine-precision easing: fast out, smooth settle
const snap = [0.16, 1, 0.3, 1] as const

// Dynamic import — no SSR for WebGL
const NeuralConstellation = dynamic(
  () =>
    import("components/graphics/NeuralConstellation").then((mod) => ({
      default: mod.NeuralConstellation,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-void-black" aria-hidden />
    ),
  },
)

export function CodeSynapseProductPage() {
  return (
    <>
      {/* ── Section 1: Hero — WebGL Neural Constellation ── */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-void-black">
        {/* WebGL Canvas — right-biased */}
        <div className="absolute top-0 right-0 w-full h-full md:w-[65%] z-0 overflow-hidden">
          <div className="relative w-full h-full">
            <NeuralConstellation />

            {/* Safety fade — protect headline readability */}
            <div
              className="absolute inset-y-0 left-0 w-[480px] z-10 pointer-events-none hidden md:block"
              style={{
                background:
                  "linear-gradient(to right, #0A0A0F 0%, rgba(10,10,15,0.85) 30%, rgba(10,10,15,0.4) 60%, transparent 100%)",
              }}
            />

            {/* Mobile radial vignette */}
            <div
              className="absolute inset-0 z-10 pointer-events-none md:hidden"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, transparent 20%, #0A0A0F 80%)",
              }}
            />

            {/* Edge fades */}
            <div className="absolute top-0 inset-x-0 h-32 z-10 pointer-events-none bg-gradient-to-b from-void-black to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-32 z-10 pointer-events-none bg-gradient-to-t from-void-black to-transparent" />
            <div
              className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none hidden md:block"
              style={{
                background:
                  "linear-gradient(to left, #0A0A0F 0%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* Bottom section fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 z-[1] bg-gradient-to-t from-void-black to-transparent pointer-events-none" />

        {/* Content */}
        <Container className="relative z-10 py-32 md:py-40">
          <div className="relative flex flex-col items-center text-center md:items-start md:text-left max-w-2xl">
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: snap }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {CODE_SYNAPSE.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/20"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Product name */}
            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.05, ease: snap }}
              className="text-electric-cyan font-mono text-sm tracking-wider uppercase mb-4"
            >
              {CODE_SYNAPSE.name}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.1, ease: snap }}
              className="text-display-xl tracking-[-0.03em] mb-6 leading-[0.95]"
            >
              <span className="text-electric-cyan">{CODE_SYNAPSE.headline}</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: snap }}
              className="font-sans text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              {CODE_SYNAPSE.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.35, ease: snap }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                {...calTriggerProps}
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-sm cursor-pointer",
                  "bg-transparent border border-electric-cyan/30 text-electric-cyan",
                  "hover:glow-cyan hover:bg-electric-cyan/5",
                  "transition-all duration-300 group/btn",
                )}
              >
                {CODE_SYNAPSE.cta.primary}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm",
                  "border border-white/10 text-white/60",
                  "hover:border-white/20 hover:text-white/80",
                  "transition-all duration-300",
                )}
              >
                {CODE_SYNAPSE.cta.secondary}
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 2: THE PROBLEM — Before / After Code Comparison
          Two editor panels that slide in from opposite sides.
          Instantly communicates the value without a single paragraph.
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container className="relative max-w-5xl">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-label text-white/40 mb-3">The Problem</p>
            <h2 className="text-display-m text-white">
              Agents can write code. They can&apos;t write{" "}
              <span className="text-electric-cyan italic">your</span> code.
            </h2>
          </motion.div>

          {/* Before / After — two editor panels */}
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* ── WITHOUT ── */}
            <motion.div
              initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: snap }}
              className="rounded-xl overflow-hidden border border-white/[0.15]"
              style={{ boxShadow: "0 20px 50px -10px rgba(255,60,60,0.08), 0 0 0 1px rgba(255,255,255,0.05)" }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.06]">
                <span className="w-[7px] h-[7px] rounded-full bg-red-400/50" />
                <span className="text-[11px] font-mono text-white/40 tracking-wide">
                  agent-output.ts — without context
                </span>
              </div>
              {/* Code */}
              <div className="p-5 bg-[#0e0e14]">
                <pre className="font-mono text-[13px] leading-[1.7] text-white/40">
                  <Line><Kw c="text-white/50">import</Kw> moment <Kw c="text-white/50">from</Kw> <Str c="text-amber-300/50">&apos;moment&apos;</Str></Line>
                  <Line><Kw c="text-white/50">import</Kw> axios <Kw c="text-white/50">from</Kw> <Str c="text-amber-300/50">&apos;axios&apos;</Str></Line>
                  <Line />
                  <Line><Kw c="text-white/50">const</Kw> fmt = (d) =&gt; moment(d).format(<Str c="text-amber-300/50">&apos;MM/DD&apos;</Str>)</Line>
                  <Line><Kw c="text-white/50">const</Kw> res = <Kw c="text-white/50">await</Kw> axios.get(<Str c="text-amber-300/50">&apos;/api/users&apos;</Str>)</Line>
                </pre>
              </div>
              {/* Verdict */}
              <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/[0.06] flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-red-400/80" />
                <span className="text-[10px] font-mono text-white/35">
                  Wrong packages. Wrong patterns. Compiles, but doesn&apos;t belong.
                </span>
              </div>
            </motion.div>

            {/* ── WITH CODE-SYNAPSE ── */}
            <motion.div
              initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: snap }}
              className="rounded-xl overflow-hidden border border-electric-cyan/20"
              style={{ boxShadow: "0 20px 50px -10px rgba(0,229,255,0.15), 0 0 0 1px rgba(0,229,255,0.1)" }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-electric-cyan/[0.04] border-b border-electric-cyan/10">
                <span className="w-[7px] h-[7px] rounded-full bg-electric-cyan" />
                <span className="text-[11px] font-mono text-electric-cyan/50 tracking-wide">
                  agent-output.ts — with code-synapse
                </span>
              </div>
              {/* Code */}
              <div className="p-5 bg-[#0e0e14]">
                <pre className="font-mono text-[13px] leading-[1.7] text-white/60">
                  <Line><Kw c="text-[#00FFFF]/80">import</Kw> {"{ formatDate }"} <Kw c="text-[#00FFFF]/80">from</Kw> <Str c="text-[#00FFFF]/60">&apos;@/lib/dates&apos;</Str></Line>
                  <Line><Kw c="text-[#00FFFF]/80">import</Kw> {"{ api }"} <Kw c="text-[#00FFFF]/80">from</Kw> <Str c="text-[#00FFFF]/60">&apos;@/lib/http-client&apos;</Str></Line>
                  <Line />
                  <Line><Kw c="text-[#00FFFF]/80">const</Kw> date = formatDate(<Kw c="text-[#00FFFF]/80">new</Kw> Date())</Line>
                  <Line><Kw c="text-[#00FFFF]/80">const</Kw> users = <Kw c="text-[#00FFFF]/80">await</Kw> api.get<Kw c="text-[#00FFFF]/50">&lt;User[]&gt;</Kw>(<Str c="text-[#00FFFF]/60">&apos;/users&apos;</Str>)</Line>
                </pre>
              </div>
              {/* Verdict */}
              <div className="px-4 py-2.5 bg-electric-cyan/[0.03] border-t border-electric-cyan/10 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-electric-cyan" />
                <span className="text-[10px] font-mono text-electric-cyan/70">
                  Your modules. Your types. Your conventions. Code that belongs.
                </span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 3: HOW IT WORKS — Animated Architecture Pipeline
          A single horizontal flow with animated connector — NOT cards.
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,229,255,0.03) 0%, transparent 70%)",
          }}
        />

        <Container className="relative max-w-5xl">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-label text-white/40 mb-3">How It Works</p>
            <h2 className="text-display-m text-white">
              Four components. Zero config.
            </h2>
          </motion.div>

          {/* Pipeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Horizontal animated connector (desktop only) */}
            <div
              className="absolute top-[40px] left-[12.5%] right-[12.5%] hidden lg:block"
              aria-hidden
            >
              <div className="h-px bg-white/[0.04] w-full" />
              <motion.div
                className="absolute top-0 left-0 h-px bg-gradient-to-r from-electric-cyan/60 to-electric-cyan/20"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
              />
              {/* Travelling pulse */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-electric-cyan shadow-[0_0_12px_rgba(0,229,255,0.6)]"
                initial={{ left: "-1%", opacity: 0 }}
                whileInView={{
                  left: ["0%", "100%"],
                  opacity: [0, 1, 1, 0],
                }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, delay: 0.6, ease: "linear" }}
              />
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6"
            >
              {PIPELINE.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={cardItem}
                  className="text-center"
                >
                  {/* Icon node */}
                  <div className="mx-auto mb-5 w-20 h-20 rounded-2xl bg-electric-cyan/[0.08] border border-electric-cyan/20 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-electric-cyan" />
                  </div>
                  <span className="block text-[10px] font-mono text-white/30 mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-white font-semibold font-grotesk text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Result banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 max-w-xl mx-auto rounded-lg border border-electric-cyan/20 bg-electric-cyan/[0.04] px-6 py-3.5 flex items-center justify-center gap-3"
          >
            <Zap className="w-3.5 h-3.5 text-electric-cyan shrink-0" />
            <p className="text-white/55 text-sm">
              Zero upkeep — auto-updates on every commit.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 4: THE RESULT — Capabilities as clean text rows
          No cards. Just icon + title + description separated by dividers.
          Visually distinct from everything above.
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container className="relative max-w-3xl">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-label text-white/40 mb-3">The Result</p>
            <h2 className="text-display-m text-white">
              Code That Actually Belongs
            </h2>
          </motion.div>

          <div className="divide-y divide-white/[0.06]">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: snap }}
                className="flex items-start gap-6 py-10 first:pt-0 last:pb-0"
              >
                <div className="shrink-0 mt-1 p-3 rounded-xl bg-electric-cyan/[0.08] border border-electric-cyan/15 text-electric-cyan">
                  <cap.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold font-grotesk text-lg mb-1.5">
                    {cap.title}
                  </h3>
                  <p className="text-white/55 text-[15px] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Section 5: Bottom CTA ── */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* HUD brackets */}
            <div
              className="absolute -inset-4 pointer-events-none hidden md:block"
              aria-hidden
            >
              <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-electric-cyan/10" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-electric-cyan/10" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-electric-cyan/10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-electric-cyan/10" />
            </div>

            <div className="rounded-2xl border border-electric-cyan/20 bg-electric-cyan/[0.03] p-12 md:p-16 text-center relative overflow-hidden">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                <h2 className="text-display-m text-white mb-4">
                  Add the Context Layer.
                </h2>
                <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
                  Your agents are already writing code. Give them the
                  infrastructure to write it right. A CLI sidecar that connects
                  to any agent via MCP — up and running in minutes.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    type="button"
                    {...calTriggerProps}
                    className={cn(
                      "inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-sm cursor-pointer",
                      "border border-electric-cyan/30 bg-transparent text-electric-cyan",
                      "hover:glow-cyan hover:bg-electric-cyan/5",
                      "transition-all duration-300 group/btn",
                    )}
                  >
                    {CODE_SYNAPSE.cta.primary}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}

/* ── Helpers — syntax highlighting primitives ─────────────────────────────── */

function Line({ children }: { children?: React.ReactNode }) {
  if (!children) return <div className="h-3" />
  return <div>{children}</div>
}

function Kw({ children, c }: { children: React.ReactNode; c: string }) {
  return <span className={c}>{children}</span>
}

function Str({ children, c }: { children: React.ReactNode; c: string }) {
  return <span className={c}>{children}</span>
}
