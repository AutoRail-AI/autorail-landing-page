"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Brain,
  ExternalLink,
  GitBranch,
  Network,
  Puzzle,
  Radar,
  ShieldCheck,
  Terminal,
} from "lucide-react"
import { Container } from "components/ui"
import { calTriggerProps } from "components/providers"
import { CODE_SYNAPSE } from "data/products"
import { SITE_CONFIG } from "lib/constants"
import { staggerContainer, cardItem } from "lib/animations"
import { cn } from "lib/utils"

const FEATURE_ICONS = [Network, Radar, Puzzle, Brain, ShieldCheck, GitBranch]

/* ── Code snippets for visual interest ────────────────────────────────────── */

const HERO_CODE = `// code-synapse enforces your patterns
import { loadContext } from "code-synapse"

const ctx = await loadContext({
  project: "payments-api",
  rules:   "strict",
})

// AI agents now follow YOUR conventions
const result = agent.generate({ context: ctx })`

const BEFORE_CODE = `// Without Code-Synapse — Alien Code
import axios from "axios"

async function getUsers() {
  const res = await axios.get("/api/users")
  return res.data
}
// Wrong HTTP client, no error handling,
// ignores your internal patterns`

const AFTER_CODE = `// With Code-Synapse — Your Patterns
import { api } from "@internal/http-client"

async function getUsers() {
  return api.get<User[]>("/users", {
    retry: 3,
    schema: userSchema,
  })
}
// Correct client, validated, team patterns`

const snap = [0.16, 1, 0.3, 1] as const

export function CodeSynapseProductPage() {
  return (
    <>
      {/* ── Section 1: Hero — Cinematic with code preview ── */}
      <section className="relative overflow-hidden pt-24 pb-20 min-h-[85vh] flex items-center">
        {/* Layered background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 30%, rgba(0,229,255,0.08) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, rgba(0,229,255,0.04) 0%, transparent 50%)",
          }}
        />
        {/* Top gradient line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-electric-cyan/20 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-void-black to-transparent pointer-events-none" />

        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={cardItem} className="flex flex-wrap gap-2 mb-6">
                {CODE_SYNAPSE.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/20"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>
              <motion.p
                variants={cardItem}
                className="text-electric-cyan font-mono text-sm tracking-wider uppercase mb-4"
              >
                {CODE_SYNAPSE.name}
              </motion.p>
              <motion.h1
                variants={cardItem}
                className="text-display-lg tracking-[-0.03em] mb-6"
              >
                <span className="text-electric-cyan">{CODE_SYNAPSE.headline}</span>
              </motion.h1>
              <motion.p
                variants={cardItem}
                className="text-lg text-white/60 mb-10 leading-relaxed max-w-lg"
              >
                {CODE_SYNAPSE.tagline}
              </motion.p>
              <motion.div variants={cardItem} className="flex flex-wrap items-center gap-4">
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
                  Get Early Access
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
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Code preview panel */}
            <motion.div
              initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3, ease: snap }}
              className="relative"
            >
              {/* HUD corner brackets */}
              <div className="absolute -inset-4 pointer-events-none hidden lg:block" aria-hidden>
                <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-electric-cyan/20" />
                <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-electric-cyan/20" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l border-b border-electric-cyan/20" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-electric-cyan/20" />
              </div>

              <div className="rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-[12px] overflow-hidden">
                {/* Terminal header */}
                <div className="px-4 py-3 border-b border-white/5 flex items-center gap-3">
                  <Terminal className="w-4 h-4 text-electric-cyan/60" />
                  <span className="text-xs font-mono text-white/40">code-synapse</span>
                  <div className="ml-auto flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-electric-cyan/30" />
                  </div>
                </div>
                {/* Code content */}
                <div className="p-5 overflow-x-auto">
                  <pre className="font-mono text-xs leading-relaxed">
                    {HERO_CODE.split("\n").map((line, i) => (
                      <SynapseLine key={i} line={line} />
                    ))}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Section 2: The Core Argument — Before / After ── */}
      <section className="py-24 relative overflow-hidden">
        {/* Section divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,229,255,0.03) 0%, transparent 70%)",
          }}
        />
        <Container className="relative max-w-5xl">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-label text-electric-cyan mb-3">The Problem</p>
            <h2 className="text-display-m text-white mb-4">
              AI cannot write good software just by reading old software.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
              Current AI tools read your codebase and generate code that compiles
              — but it doesn&apos;t{" "}
              <span className="text-electric-cyan font-medium">belong</span>.
              Your developers spend more time fixing AI-generated code than they saved.
            </p>
          </motion.div>

          {/* Root cause callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan/60" />
              <p className="text-sm font-mono text-white/50">
                Root cause: AI has no persistent memory. Every context window is a clean slate.
              </p>
            </div>
          </motion.div>

          {/* Before / After code comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="rounded-xl bg-white/[0.03] border border-error/20 backdrop-blur-[12px] overflow-hidden">
                <div className="px-4 py-3 border-b border-white/5 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-error/60" />
                  <span className="text-xs font-mono text-error/60">Without Code-Synapse</span>
                </div>
                <div className="p-5 overflow-x-auto">
                  <pre className="font-mono text-xs leading-relaxed">
                    {BEFORE_CODE.split("\n").map((line, i) => (
                      <BeforeLine key={i} line={line} />
                    ))}
                  </pre>
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="rounded-xl bg-white/[0.03] border border-electric-cyan/20 backdrop-blur-[12px] overflow-hidden">
                <div className="px-4 py-3 border-b border-white/5 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-electric-cyan/60" />
                  <span className="text-xs font-mono text-electric-cyan/60">With Code-Synapse</span>
                </div>
                <div className="p-5 overflow-x-auto">
                  <pre className="font-mono text-xs leading-relaxed">
                    {AFTER_CODE.split("\n").map((line, i) => (
                      <AfterLine key={i} line={line} />
                    ))}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Arrow connector */}
          <div className="flex justify-center mb-16">
            <div className="h-12 w-px bg-gradient-to-b from-electric-cyan/30 to-transparent" />
          </div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-label text-electric-cyan mb-3">The Solution</p>
            <h2 className="text-display-m text-white mb-6">
              True autonomy requires persistent context.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            {/* HUD brackets */}
            <div className="absolute -inset-4 pointer-events-none hidden md:block" aria-hidden>
              <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-electric-cyan/15" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-electric-cyan/15" />
            </div>
            <div className="rounded-xl bg-white/[0.03] border border-electric-cyan/20 backdrop-blur-[12px] p-8 md:p-10">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                {CODE_SYNAPSE.pitch}
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-mono text-white/40">
                <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02]">MCP Protocol</span>
                <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02]">CozoDB</span>
                <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02]">LangGraph</span>
                <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02]">TypeScript</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Section 3: Key Capabilities ── */}
      <section className="py-24 relative overflow-hidden">
        {/* Section divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-label text-electric-cyan mb-3">Capabilities</p>
            <h2 className="text-display-m text-white">
              What Code-Synapse Does
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {CODE_SYNAPSE.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i] ?? Brain
              return (
                <motion.article
                  key={feature.title}
                  variants={cardItem}
                  className={cn(
                    "group relative rounded-xl p-8 overflow-hidden",
                    "bg-white/[0.03] border border-white/10 backdrop-blur-[12px]",
                    "hover:border-electric-cyan/30 transition-all duration-300",
                  )}
                >
                  {/* Scanline on hover */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      className="absolute left-0 right-0 h-px bg-electric-cyan/30"
                      animate={{ top: ["0%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  {/* Step number */}
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="relative">
                    <div className="mb-5 inline-flex p-3 rounded-lg bg-electric-cyan/10 text-electric-cyan group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-shadow duration-300">
                      <Icon className="w-5 h-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-white font-grotesk mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </Container>
      </section>

      {/* ── Section 4: Bottom CTA ── */}
      <section className="py-24 relative">
        {/* Section divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* HUD brackets on CTA card */}
            <div className="absolute -inset-4 pointer-events-none hidden md:block" aria-hidden>
              <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-electric-cyan/10" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-electric-cyan/10" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-electric-cyan/10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-electric-cyan/10" />
            </div>

            <div className="rounded-2xl border border-electric-cyan/20 bg-electric-cyan/[0.03] p-12 md:p-16 text-center relative overflow-hidden">
              {/* Subtle background glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                <h2 className="text-display-m text-white mb-4">
                  Get Early Access.
                </h2>
                <p className="text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
                  Join the waitlist for the enterprise CLI sidecar that teaches AI agents
                  your team&apos;s patterns. No backend required. Open source.
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
                    Get Early Access
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                  <a
                    href={SITE_CONFIG.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-sm",
                      "border border-white/10 text-white/60",
                      "hover:border-white/20 hover:text-white/80",
                      "transition-all duration-300",
                    )}
                  >
                    View on GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}

/* ── Syntax highlighting helpers ──────────────────────────────────────────── */

function SynapseLine({ line }: { line: string }) {
  if (line.startsWith("//")) {
    return <div className="text-white/25">{line}</div>
  }
  const highlighted = line
    .replace(/(import|from|const|await|async)/g, "<kw>$1</kw>")
    .replace(/("code-synapse"|"payments-api"|"strict")/g, "<str>$1</str>")

  if (highlighted.includes("<kw>") || highlighted.includes("<str>")) {
    const parts = highlighted.split(/(<kw>.*?<\/kw>|<str>.*?<\/str>)/g)
    return (
      <div className="text-white/50">
        {parts.map((part, i) => {
          if (part.startsWith("<kw>"))
            return <span key={i} className="text-electric-cyan">{part.replace(/<\/?kw>/g, "")}</span>
          if (part.startsWith("<str>"))
            return <span key={i} className="text-electric-cyan/60">{part.replace(/<\/?str>/g, "")}</span>
          return <span key={i}>{part}</span>
        })}
      </div>
    )
  }
  return <div className="text-white/50">{line}</div>
}

function BeforeLine({ line }: { line: string }) {
  if (line.startsWith("//")) {
    return <div className="text-white/20">{line}</div>
  }
  const highlighted = line
    .replace(/(import|from|const|await|async|function|return)/g, "<kw>$1</kw>")
    .replace(/("axios"|"\/api\/users")/g, "<str>$1</str>")

  if (highlighted.includes("<kw>") || highlighted.includes("<str>")) {
    const parts = highlighted.split(/(<kw>.*?<\/kw>|<str>.*?<\/str>)/g)
    return (
      <div className="text-white/40">
        {parts.map((part, i) => {
          if (part.startsWith("<kw>"))
            return <span key={i} className="text-error/70">{part.replace(/<\/?kw>/g, "")}</span>
          if (part.startsWith("<str>"))
            return <span key={i} className="text-error/50">{part.replace(/<\/?str>/g, "")}</span>
          return <span key={i}>{part}</span>
        })}
      </div>
    )
  }
  return <div className="text-white/40">{line}</div>
}

function AfterLine({ line }: { line: string }) {
  if (line.startsWith("//")) {
    return <div className="text-white/20">{line}</div>
  }
  const highlighted = line
    .replace(/(import|from|const|await|async|function|return)/g, "<kw>$1</kw>")
    .replace(/("@internal\/http-client"|"\/users")/g, "<str>$1</str>")

  if (highlighted.includes("<kw>") || highlighted.includes("<str>")) {
    const parts = highlighted.split(/(<kw>.*?<\/kw>|<str>.*?<\/str>)/g)
    return (
      <div className="text-white/50">
        {parts.map((part, i) => {
          if (part.startsWith("<kw>"))
            return <span key={i} className="text-electric-cyan">{part.replace(/<\/?kw>/g, "")}</span>
          if (part.startsWith("<str>"))
            return <span key={i} className="text-electric-cyan/60">{part.replace(/<\/?str>/g, "")}</span>
          return <span key={i}>{part}</span>
        })}
      </div>
    )
  }
  return <div className="text-white/50">{line}</div>
}
