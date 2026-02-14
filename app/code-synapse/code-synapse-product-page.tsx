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
  Radar,
  ShieldCheck,
} from "lucide-react"
import { Container } from "components/ui"
import { calTriggerProps } from "components/providers"
import { CODE_SYNAPSE } from "data/products"
import { SITE_CONFIG } from "lib/constants"
import {
  staggerContainer,
  staggerContainerSlow,
  cardItem,
  blurReveal,
  slideInBlur,
} from "lib/animations"
import { cn } from "lib/utils"

const FEATURE_ICONS = [Network, Radar, Puzzle, Brain, ShieldCheck, GitBranch]

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

      {/* ── Section 2: The Gap + The Mechanism ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,229,255,0.03) 0%, transparent 70%)",
          }}
        />

        <Container className="relative max-w-5xl">
          {/* The Gap */}
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-label text-electric-cyan mb-3">The Gap</p>
            <h2 className="text-display-m text-white mb-4">
              Agents can write code. They can&apos;t write{" "}
              <span className="text-electric-cyan italic">your</span> code.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            {/* HUD brackets */}
            <div className="absolute -inset-x-4 pointer-events-none hidden md:block" aria-hidden>
              <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-electric-cyan/15" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-electric-cyan/15" />
            </div>

            <div className="rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-[12px] p-8 md:p-10">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Current AI tools read your codebase and generate code that
                compiles — but it doesn&apos;t{" "}
                <span className="text-electric-cyan font-medium">belong</span>.
                It uses the wrong patterns, ignores your conventions, and makes
                decisions a senior dev on your team would never make.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Your developers spend more time fixing AI-generated code than
                they saved by using AI.
              </p>
              <p className="text-white/50 leading-relaxed">
                The root cause isn&apos;t the agent — it&apos;s the
                infrastructure. There&apos;s no persistent context layer. Every
                session is a clean slate. Every rule forgotten. Every convention
                reinvented from scratch.
              </p>
            </div>
          </motion.div>

          {/* The Mechanism */}
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-label text-electric-cyan mb-3">The Mechanism</p>
            <h2 className="text-display-m text-white mb-4">
              A CLI sidecar that builds an AST-backed knowledge graph
              and serves it to any agent via MCP.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 pointer-events-none hidden md:block" aria-hidden>
              <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-electric-cyan/15" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-electric-cyan/15" />
            </div>

            <div className="rounded-xl bg-white/[0.03] border border-electric-cyan/20 backdrop-blur-[12px] p-8 md:p-10">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                {CODE_SYNAPSE.pitch}
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-mono text-white/40">
                <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02]">
                  CLI Sidecar
                </span>
                <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02]">
                  MCP Server
                </span>
                <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02]">
                  Skill Libraries
                </span>
                <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02]">
                  AST Knowledge Graph
                </span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Section 3: Key Capabilities ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <Container className="relative">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-label text-electric-cyan mb-3">
              Infrastructure Capabilities
            </p>
            <h2 className="text-display-m text-white">
              What Code-Synapse Does
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerSlow}
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
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn(
                    "group relative rounded-xl p-8 overflow-hidden",
                    "bg-white/[0.03] border border-white/10 backdrop-blur-[12px]",
                    "hover:border-electric-cyan/30 transition-colors duration-300",
                  )}
                >
                  {/* Scanline on hover */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      className="absolute left-0 right-0 h-px bg-electric-cyan/30"
                      animate={{ top: ["0%", "100%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
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
                <p className="text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
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
