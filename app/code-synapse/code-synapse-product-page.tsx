"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Brain,
  Check,
  ExternalLink,
  GitBranch,
  Network,
  Puzzle,
  ShieldCheck,
  Terminal,
  Workflow,
  X,
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
    desc: "Installs in seconds. Watches your repo, indexes on every commit, and runs silently alongside your IDE.",
    tag: "pnpm add -g code-synapse",
  },
  {
    icon: Workflow,
    title: "Knowledge Graph",
    desc: "Builds a living map of your architecture — modules, dependencies, conventions, and the reasons behind them.",
    tag: "CozoDB + AST",
  },
  {
    icon: Network,
    title: "MCP Server",
    desc: "Serves rich, structured context to any AI agent via the Model Context Protocol. One interface, every tool.",
    tag: "MCP v1.0",
  },
  {
    icon: Puzzle,
    title: "Skill Libraries",
    desc: "Encodes your team's patterns as executable rules. Agents use your internal modules — not public packages.",
    tag: "Auto-generated",
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
          Two editor panels with visceral X/Check visual cues + strong glows.
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container className="relative max-w-5xl">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-electric-cyan/50 mb-3">The Problem</p>
            <h2 className="text-display-m text-white">
              Agents can write code. They can&apos;t write{" "}
              <span className="text-electric-cyan italic">your</span> code.
            </h2>
          </motion.div>

          {/* Before / After — two editor panels */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* ── WITHOUT ── */}
            <motion.div
              initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: snap }}
              className="rounded-xl overflow-hidden border border-white/[0.15] relative group/bad"
              style={{ boxShadow: "0 25px 60px -12px rgba(255,51,102,0.12), 0 0 0 1px rgba(255,255,255,0.06)" }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.04] border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
                  <span className="w-[7px] h-[7px] rounded-full bg-[#FEBC2E]" />
                  <span className="w-[7px] h-[7px] rounded-full bg-[#28C840]" />
                </div>
                <span className="text-[13px] font-mono font-semibold text-white/60 tracking-wide ml-1">
                  without context
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-red-400/15 border border-red-400/30 flex items-center justify-center">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                </div>
              </div>
              {/* Code */}
              <div className="px-5 py-6 bg-[#12101a]">
                <pre className="font-mono text-[13px] leading-[1.8] text-white/55">
                  <Line><Kw c="text-white/70">import</Kw> moment <Kw c="text-white/70">from</Kw> <Str c="text-amber-300/70">&apos;moment&apos;</Str></Line>
                  <Line><Kw c="text-white/70">import</Kw> axios <Kw c="text-white/70">from</Kw> <Str c="text-amber-300/70">&apos;axios&apos;</Str></Line>
                  <Line />
                  <Line><Kw c="text-white/70">const</Kw> fmt = (d) =&gt; moment(d).format(<Str c="text-amber-300/70">&apos;MM/DD&apos;</Str>)</Line>
                  <Line><Kw c="text-white/70">const</Kw> res = <Kw c="text-white/70">await</Kw> axios.get(<Str c="text-amber-300/70">&apos;/api/users&apos;</Str>)</Line>
                </pre>
              </div>
              {/* Verdict */}
              <div className="px-4 py-3 bg-red-400/[0.06] border-t border-red-400/15 flex items-center gap-2.5">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-red-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[12px] font-mono text-red-400/80">
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
              className="rounded-xl overflow-hidden border border-electric-cyan/25 relative group/good"
              style={{ boxShadow: "0 25px 60px -12px rgba(0,229,255,0.18), 0 0 0 1px rgba(0,229,255,0.12)" }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-electric-cyan/[0.06] border-b border-electric-cyan/15">
                <div className="flex items-center gap-1.5">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
                  <span className="w-[7px] h-[7px] rounded-full bg-[#FEBC2E]" />
                  <span className="w-[7px] h-[7px] rounded-full bg-[#28C840]" />
                </div>
                <span className="text-[13px] font-mono font-semibold text-electric-cyan/80 tracking-wide ml-1">
                  with code-synapse
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <div
                    className="w-5 h-5 rounded-full bg-success/15 border border-success/30 flex items-center justify-center"
                    style={{ boxShadow: "0 0 8px rgba(0,255,136,0.2)" }}
                  >
                    <Check className="w-3 h-3 text-success" />
                  </div>
                </div>
              </div>
              {/* Code */}
              <div className="px-5 py-6 bg-[#0a1214]">
                <pre className="font-mono text-[13px] leading-[1.8] text-white/70">
                  <Line><Kw c="text-[#00FFFF]">import</Kw> {"{ formatDate }"} <Kw c="text-[#00FFFF]">from</Kw> <Str c="text-[#00FFFF]/80">&apos;@/lib/dates&apos;</Str></Line>
                  <Line><Kw c="text-[#00FFFF]">import</Kw> {"{ api }"} <Kw c="text-[#00FFFF]">from</Kw> <Str c="text-[#00FFFF]/80">&apos;@/lib/http-client&apos;</Str></Line>
                  <Line />
                  <Line><Kw c="text-[#00FFFF]">const</Kw> date = formatDate(<Kw c="text-[#00FFFF]">new</Kw> Date())</Line>
                  <Line><Kw c="text-[#00FFFF]">const</Kw> users = <Kw c="text-[#00FFFF]">await</Kw> api.get<Kw c="text-[#00FFFF]/70">&lt;User[]&gt;</Kw>(<Str c="text-[#00FFFF]/80">&apos;/users&apos;</Str>)</Line>
                </pre>
              </div>
              {/* Verdict */}
              <div className="px-4 py-3 bg-electric-cyan/[0.06] border-t border-electric-cyan/15 flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                <span className="text-[12px] font-mono text-electric-cyan/90">
                  Your modules. Your types. Your conventions. Code that belongs.
                </span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 3: HOW IT WORKS — Glass Card Pipeline with Animated SVG
          Four glass cards connected by a glowing animated SVG connector.
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)",
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
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-electric-cyan/50 mb-3">How It Works</p>
            <h2 className="text-display-m text-white mb-4">
              Four components. Zero config.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              A lightweight CLI sidecar that indexes your codebase, builds a knowledge graph, and serves context to any AI agent via MCP.
            </p>
          </motion.div>

          {/* Pipeline — 2x2 Grid with Z-Flow */}
          <div className="relative max-w-4xl mx-auto">

            {/* ── Z-Flow SVG connector (desktop only) ── */}
            <div className="absolute inset-0 hidden md:block pointer-events-none z-0" aria-hidden>
              <svg className="w-full h-full" viewBox="0 0 800 420" preserveAspectRatio="xMidYMid meet" fill="none">
                {/* Z-flow path: top-left → top-right → bottom-left → bottom-right */}
                {/* Segment 1: horizontal across top */}
                <line x1="200" y1="100" x2="600" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
                <motion.line
                  x1="200" y1="100" x2="600" y2="100"
                  stroke="rgba(0,229,255,0.2)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                />
                {/* Segment 2: diagonal from top-right to bottom-left */}
                <line x1="600" y1="100" x2="200" y2="320" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
                <motion.line
                  x1="600" y1="100" x2="200" y2="320"
                  stroke="rgba(0,229,255,0.15)"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                />
                {/* Segment 3: horizontal across bottom */}
                <line x1="200" y1="320" x2="600" y2="320" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
                <motion.line
                  x1="200" y1="320" x2="600" y2="320"
                  stroke="rgba(0,229,255,0.2)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.9, ease: "easeOut" }}
                />
                {/* Node dots at card centers */}
                {[
                  [200, 100],
                  [600, 100],
                  [200, 320],
                  [600, 320],
                ].map(([cx, cy], idx) => (
                  <motion.g
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.7, duration: 0.3 }}
                  >
                    <circle cx={cx} cy={cy} r="8" fill="rgba(0,229,255,0.08)" stroke="rgba(0,229,255,0.4)" strokeWidth="1.5" />
                    <circle cx={cx} cy={cy} r="3" fill="rgba(0,229,255,0.9)" />
                  </motion.g>
                ))}
                {/* Looping pulse along full Z-path */}
                <motion.circle
                  r="4"
                  fill="#00E5FF"
                  filter="url(#pulseGlow)"
                  animate={{
                    cx: [200, 600, 200, 600],
                    cy: [100, 100, 320, 320],
                    opacity: [0, 1, 1, 1, 1, 0],
                  }}
                  transition={{ duration: 4, delay: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                />
                {/* Step number labels on the path */}
                {[
                  [200, 100, "01"],
                  [600, 100, "02"],
                  [200, 320, "03"],
                  [600, 320, "04"],
                ].map(([cx, cy, label], idx) => (
                  <motion.text
                    key={idx}
                    x={Number(cx)}
                    y={Number(cy) + 4}
                    textAnchor="middle"
                    fill="rgba(0,229,255,0.6)"
                    fontSize="8"
                    fontWeight="bold"
                    className="font-mono"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.7 }}
                  >
                    {label as string}
                  </motion.text>
                ))}
                <defs>
                  <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>

            {/* ── 2x2 Card Grid ── */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-[1]"
            >
              {PIPELINE.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={cardItem}
                  className={cn(
                    "group/pipe relative rounded-xl p-7 transition-all duration-300",
                    "bg-white/[0.04] border border-white/[0.12] backdrop-blur-[12px]",
                    "hover:border-electric-cyan/25 hover:bg-white/[0.06]",
                  )}
                  style={{
                    boxShadow: "0 8px 30px -8px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute -inset-px rounded-xl opacity-0 group-hover/pipe:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: "0 0 40px rgba(0,229,255,0.08), inset 0 0 40px rgba(0,229,255,0.03)",
                    }}
                  />

                  <div className="flex items-start gap-5">
                    {/* Large step number */}
                    <div className="shrink-0 relative">
                      <span className="text-[48px] font-grotesk font-bold leading-none text-electric-cyan/[0.08]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-electric-cyan/[0.10] border border-electric-cyan/25 flex items-center justify-center transition-all duration-300 group-hover/pipe:border-electric-cyan/40 group-hover/pipe:bg-electric-cyan/[0.15]"
                        style={{ boxShadow: "0 0 24px rgba(0,229,255,0.10)" }}
                      >
                        <step.icon className="w-5 h-5 text-electric-cyan" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold font-grotesk text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-3">
                        {step.desc}
                      </p>
                      {/* Tech tag */}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-electric-cyan/[0.06] border border-electric-cyan/15 text-[10px] font-mono text-electric-cyan/60">
                        <div className="w-1 h-1 rounded-full bg-electric-cyan/60" />
                        {step.tag}
                      </span>
                    </div>
                  </div>
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
            className="mt-14 max-w-xl mx-auto rounded-lg border border-electric-cyan/20 bg-electric-cyan/[0.04] px-6 py-3.5 flex items-center justify-center gap-3"
            style={{ boxShadow: "0 0 30px rgba(0,229,255,0.06)" }}
          >
            <Zap className="w-3.5 h-3.5 text-electric-cyan shrink-0" />
            <p className="text-white/70 text-sm">
              Zero upkeep — auto-updates on every commit.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 4: THE RESULT — Asymmetric Bento Grid with Micro-Visuals
          Hero card (full-width) + two side-by-side cards below.
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,229,255,0.03) 0%, transparent 70%)" }}
        />

        <Container className="relative max-w-5xl">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-electric-cyan/50 mb-3">The Result</p>
            <h2 className="text-display-m text-white">
              Code That Actually Belongs
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-5">
            {/* ── Hero card: Business Intent (full width) ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: snap }}
              className="group/card relative rounded-xl p-8 lg:p-10 overflow-hidden bg-white/[0.05] border border-white/[0.15] backdrop-blur-[12px] hover:border-electric-cyan/25 transition-all duration-300"
              style={{ boxShadow: "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06), 0 0 30px rgba(0,229,255,0.04)" }}
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="p-3 rounded-xl bg-electric-cyan/[0.10] border border-electric-cyan/25"
                      style={{ boxShadow: "0 0 24px rgba(0,229,255,0.10)" }}
                    >
                      <Brain className="w-6 h-6 text-electric-cyan" />
                    </div>
                    <span className="text-[10px] font-mono text-white/40">01</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-grotesk">
                    {CAPABILITIES[0]!.title}
                  </h3>
                  <p className="text-white/70 text-base leading-relaxed max-w-xl">
                    {CAPABILITIES[0]!.desc}
                  </p>
                </div>
                {/* Micro-visual: Knowledge graph mini diagram */}
                <div className="shrink-0 w-full lg:w-[280px] h-[160px] rounded-lg bg-[#0e0e14] border border-white/[0.15] overflow-hidden relative" style={{ boxShadow: "0 8px 30px -8px rgba(0,229,255,0.10)" }}>
                  <svg viewBox="0 0 280 160" className="w-full h-full" fill="none">
                    {/* Edges */}
                    <line x1="140" y1="30" x2="60" y2="80" stroke="rgba(0,229,255,0.35)" strokeWidth="1.5">
                      <animate attributeName="stroke-opacity" values="0.35;0.6;0.35" dur="3s" repeatCount="indefinite" />
                    </line>
                    <line x1="140" y1="30" x2="220" y2="80" stroke="rgba(0,229,255,0.35)" strokeWidth="1.5">
                      <animate attributeName="stroke-opacity" values="0.35;0.6;0.35" dur="3s" begin="0.5s" repeatCount="indefinite" />
                    </line>
                    <line x1="60" y1="80" x2="100" y2="130" stroke="rgba(0,229,255,0.35)" strokeWidth="1.5">
                      <animate attributeName="stroke-opacity" values="0.35;0.6;0.35" dur="3s" begin="1s" repeatCount="indefinite" />
                    </line>
                    <line x1="220" y1="80" x2="180" y2="130" stroke="rgba(0,229,255,0.35)" strokeWidth="1.5">
                      <animate attributeName="stroke-opacity" values="0.35;0.6;0.35" dur="3s" begin="1.5s" repeatCount="indefinite" />
                    </line>
                    {/* Traveling dots */}
                    <circle r="0" fill="rgba(0,229,255,1)">
                      <animate attributeName="cx" values="140;60" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="30;80" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="r" values="0;2.5;2.5;0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle r="0" fill="rgba(0,229,255,1)">
                      <animate attributeName="cx" values="140;220" dur="2s" begin="0.5s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="30;80" dur="2s" begin="0.5s" repeatCount="indefinite" />
                      <animate attributeName="r" values="0;2.5;2.5;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                    {/* Nodes */}
                    <circle cx="140" cy="30" r="10" fill="rgba(0,229,255,0.15)" stroke="rgba(0,229,255,0.6)" strokeWidth="1.5" />
                    <text x="140" y="34" textAnchor="middle" fill="rgba(0,229,255,1)" fontSize="9" fontWeight="bold" className="font-mono">app</text>
                    <circle cx="60" cy="80" r="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
                    <text x="60" y="84" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8" className="font-mono">auth</text>
                    <circle cx="220" cy="80" r="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
                    <text x="220" y="84" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8" className="font-mono">api</text>
                    <circle cx="100" cy="130" r="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
                    <text x="100" y="134" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8" className="font-mono">db</text>
                    <circle cx="180" cy="130" r="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
                    <text x="180" y="134" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8" className="font-mono">cache</text>
                  </svg>
                  {/* Label */}
                  <div className="absolute bottom-2 right-3">
                    <span className="text-[9px] font-mono text-electric-cyan/40">knowledge-graph · live</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Two side-by-side cards ── */}
            <div className="grid md:grid-cols-2 gap-5">
              {/* Pattern Enforcement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: snap }}
                className="group/card relative rounded-xl p-7 overflow-hidden bg-white/[0.05] border border-white/[0.15] backdrop-blur-[12px] hover:border-electric-cyan/25 transition-all duration-300"
                style={{ boxShadow: "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06), 0 0 20px rgba(0,229,255,0.04)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2.5 rounded-xl bg-electric-cyan/[0.10] border border-electric-cyan/25"
                    style={{ boxShadow: "0 0 24px rgba(0,229,255,0.10)" }}
                  >
                    <ShieldCheck className="w-5 h-5 text-electric-cyan" />
                  </div>
                  <span className="text-[10px] font-mono text-white/40">02</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-grotesk">
                  {CAPABILITIES[1]!.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  {CAPABILITIES[1]!.desc}
                </p>
                {/* Micro-visual: module enforcement */}
                <div className="rounded-lg bg-[#0e0e14] border border-white/[0.12] p-3 font-mono text-[11px]">
                  <div className="flex items-center gap-2 text-red-400/70 line-through decoration-red-400/50">
                    <X className="w-3 h-3 text-red-400/70 shrink-0" />
                    <span>import moment from &apos;moment&apos;</span>
                  </div>
                  <div className="flex items-center gap-2 text-electric-cyan/80 mt-1.5">
                    <Check className="w-3 h-3 text-success shrink-0" />
                    <span>import {"{ formatDate }"} from &apos;@/lib/dates&apos;</span>
                  </div>
                </div>
              </motion.div>

              {/* Drift Prevention */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: snap }}
                className="group/card relative rounded-xl p-7 overflow-hidden bg-white/[0.05] border border-white/[0.15] backdrop-blur-[12px] hover:border-electric-cyan/25 transition-all duration-300"
                style={{ boxShadow: "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06), 0 0 20px rgba(0,229,255,0.04)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2.5 rounded-xl bg-electric-cyan/[0.10] border border-electric-cyan/25"
                    style={{ boxShadow: "0 0 24px rgba(0,229,255,0.10)" }}
                  >
                    <GitBranch className="w-5 h-5 text-electric-cyan" />
                  </div>
                  <span className="text-[10px] font-mono text-white/40">03</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-grotesk">
                  {CAPABILITIES[2]!.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  {CAPABILITIES[2]!.desc}
                </p>
                {/* Micro-visual: drift detection line graph */}
                <div className="rounded-lg bg-[#0e0e14] border border-white/[0.12] p-3 overflow-hidden">
                  <svg viewBox="0 0 240 70" className="w-full" fill="none">
                    {/* Grid lines */}
                    <line x1="0" y1="25" x2="240" y2="25" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    <line x1="0" y1="45" x2="240" y2="45" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    {/* Standard path — steady green (The Standard) */}
                    <motion.path
                      d="M0,35 C40,35 80,35 120,35 S200,35 240,35"
                      stroke="rgba(0,255,136,0.7)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    {/* Green glow on standard line */}
                    <motion.path
                      d="M0,35 C40,35 80,35 120,35 S200,35 240,35"
                      stroke="rgba(0,255,136,0.15)"
                      strokeWidth="8"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    {/* Drift path — diverging red */}
                    <motion.path
                      d="M120,35 C145,33 165,26 185,16 S215,8 240,10"
                      stroke="rgba(255,51,102,0.7)"
                      strokeWidth="2"
                      strokeDasharray="4 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    />
                    {/* Shield icon at branch point */}
                    <motion.g
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2, duration: 0.4, ease: "backOut" }}
                    >
                      <circle cx="120" cy="35" r="10" fill="rgba(0,255,136,0.12)" stroke="rgba(0,255,136,0.5)" strokeWidth="1.5" />
                      {/* Shield path */}
                      <path
                        d="M120,28 L114,31 L114,36 C114,39 117,42 120,43 C123,42 126,39 126,36 L126,31 Z"
                        fill="rgba(0,255,136,0.3)"
                        stroke="rgba(0,255,136,0.8)"
                        strokeWidth="1"
                      />
                    </motion.g>
                    {/* Flagged drift point */}
                    <motion.circle
                      cx="185" cy="16" r="5"
                      fill="none" stroke="rgba(255,51,102,0.8)" strokeWidth="1.5"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.5, duration: 0.3 }}
                    />
                    <motion.circle
                      cx="185" cy="16" r="2" fill="rgba(255,51,102,1)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: [0, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.5 }}
                    />
                    {/* X mark at drift point */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.7 }}
                    >
                      <line x1="182" y1="13" x2="188" y2="19" stroke="rgba(255,51,102,0.9)" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="188" y1="13" x2="182" y2="19" stroke="rgba(255,51,102,0.9)" strokeWidth="1.5" strokeLinecap="round" />
                    </motion.g>
                    {/* Labels */}
                    <text x="4" y="62" fill="rgba(0,255,136,0.7)" fontSize="8" fontWeight="bold" className="font-mono">standard</text>
                    <text x="190" y="14" fill="rgba(255,51,102,0.8)" fontSize="8" fontWeight="bold" className="font-mono">drift</text>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 5: Bottom CTA with deep background glow ── */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Deep ambient glow behind CTA */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 600px 400px at 50% 70%, rgba(0,229,255,0.06) 0%, transparent 70%)" }}
        />

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
              <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-electric-cyan/15" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-electric-cyan/15" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-electric-cyan/15" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-electric-cyan/15" />
            </div>

            <div
              className="rounded-2xl border border-electric-cyan/20 bg-electric-cyan/[0.03] p-12 md:p-16 text-center relative overflow-hidden"
              style={{ boxShadow: "0 30px 80px -20px rgba(0,229,255,0.12), 0 0 0 1px rgba(0,229,255,0.06)" }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                <h2 className="text-display-m text-white mb-4">
                  Add the Context Layer.
                </h2>
                <p className="text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
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
