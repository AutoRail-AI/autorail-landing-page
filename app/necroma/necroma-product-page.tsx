"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Check,
  Code,
  Eye,
  Layers,
  Monitor,
  Shield,
  Video,
  X,
  Zap,
} from "lucide-react"
import { Container } from "components/ui"
import { calTriggerProps } from "components/providers"
import { GlassBrainShowcase } from "components/glass-brain"
import { NECROMA } from "data/products"
import {
  staggerContainer,
  cardItem,
  blurReveal,
} from "lib/animations"
import { cn } from "lib/utils"

const FEATURE_ICONS = [Eye, Zap, Layers]

// Machine-precision easing
const snap = [0.16, 1, 0.3, 1] as const

// Dynamic import — no SSR for WebGL
const BehavioralPipeline = dynamic(
  () =>
    import("components/graphics/BehavioralPipeline").then((mod) => ({
      default: mod.BehavioralPipeline,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-void-black" aria-hidden />
    ),
  },
)

export function NecromaProductPage() {
  return (
    <>
      {/* ── Section 1: Hero — WebGL Behavioral Pipeline ── */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-void-black">
        {/* WebGL Canvas — right-biased */}
        <div className="absolute top-0 right-0 w-full h-full md:w-[65%] z-0 overflow-hidden">
          <div className="relative w-full h-full">
            <BehavioralPipeline />

            {/* Safety fade */}
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
              {NECROMA.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-rail-purple/10 text-rail-purple border border-rail-purple/20"
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
              className="text-rail-purple font-mono text-sm tracking-wider uppercase mb-4"
            >
              {NECROMA.name}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.1, ease: snap }}
              className="text-display-xl tracking-[-0.03em] mb-6 leading-[0.95]"
            >
              <span className="text-rail-purple">{NECROMA.headline}</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: snap }}
              className="font-sans text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              {NECROMA.tagline}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.35, ease: snap }}
            >
              <button
                type="button"
                {...calTriggerProps}
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-sm cursor-pointer",
                  "bg-transparent border border-rail-purple/30 text-rail-purple",
                  "hover:bg-rail-purple/10 hover:shadow-[0_0_20px_rgba(110,24,179,0.2)]",
                  "transition-all duration-300 group/btn",
                )}
              >
                {NECROMA.cta.primary}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Section 2: The Infrastructure Gap ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(110,24,179,0.03) 0%, transparent 70%)",
          }}
        />

        <Container className="relative max-w-5xl">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-label text-rail-purple mb-3">
              The Infrastructure Gap
            </p>
            <h2 className="text-display-m text-white">
              Everyone else is fighting the wrong war.
            </h2>
          </motion.div>

          {/* Migration Tools vs Migration Infra */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl bg-white/[0.03] border border-error/20 backdrop-blur-[12px] p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-2 rounded-lg bg-error/10">
                  <X className="w-4 h-4 text-error" />
                </div>
                <div>
                  <span className="text-label text-error">Migration Tools</span>
                  <p className="text-sm text-white/50 mt-0.5">
                    The Syntax War
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Migration tools fight a Syntax War — converting Code A to Code
                B, line by line. They read source code and guess.
              </p>
              <p className="text-white/30 text-sm font-mono">
                They are blind because source code doesn&apos;t capture intent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl bg-white/[0.03] border border-rail-purple/30 backdrop-blur-[12px] p-8 group relative overflow-hidden"
            >
              {/* Scanline on hover */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  className="absolute left-0 right-0 h-px bg-rail-purple/40"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex p-2 rounded-lg bg-rail-purple/10">
                    <Check className="w-4 h-4 text-rail-purple" />
                  </div>
                  <div>
                    <span className="text-label text-rail-purple">
                      Migration Infrastructure
                    </span>
                    <p className="text-sm text-white/50 mt-0.5">
                      The Behavioral War
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Necroma is migration infrastructure — preserving actual user
                  intent and business behavior. It watches the running
                  application.
                </p>
                <p className="text-rail-purple/80 text-sm font-mono">
                  We are not blind. We watch the screen.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Behavior-to-Code Reconstruction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div
              className="absolute -inset-4 pointer-events-none hidden md:block"
              aria-hidden
            >
              <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-rail-purple/15" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-rail-purple/15" />
            </div>

            <div className="rounded-xl bg-white/[0.03] border border-rail-purple/20 backdrop-blur-[12px] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-2 rounded-lg bg-rail-purple/10">
                  <Monitor className="w-5 h-5 text-rail-purple" />
                </div>
                <h3 className="text-xl font-bold text-white font-grotesk">
                  Behavior-to-Code Reconstruction
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4 max-w-2xl">
                {NECROMA.pitch}
              </p>

              {/* Data flow diagram */}
              <div className="flex flex-col items-center gap-0 mt-12">
                {/* Input nodes */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                  {[
                    { icon: Code, label: "Code Source" },
                    { icon: Video, label: "Video Capture" },
                    { icon: Layers, label: "DOM Events" },
                  ].map((input, idx) => (
                    <motion.div
                      key={input.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex flex-col items-center gap-3"
                    >
                      <div className="w-16 h-16 rounded-xl border border-rail-purple/30 bg-white/[0.03] flex items-center justify-center group hover:border-rail-purple/50 hover:shadow-[0_0_20px_rgba(110,24,179,0.15)] transition-all duration-300">
                        <input.icon
                          className="w-6 h-6 text-rail-purple"
                          aria-hidden
                        />
                      </div>
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                        {input.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Converging lines */}
                <div className="relative h-12 w-full max-w-xs flex items-center justify-center">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 300 48"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <line
                      x1="50"
                      y1="0"
                      x2="150"
                      y2="44"
                      stroke="rgba(110,24,179,0.3)"
                      strokeWidth="1"
                    />
                    <line
                      x1="150"
                      y1="0"
                      x2="150"
                      y2="44"
                      stroke="rgba(110,24,179,0.3)"
                      strokeWidth="1"
                    />
                    <line
                      x1="250"
                      y1="0"
                      x2="150"
                      y2="44"
                      stroke="rgba(110,24,179,0.3)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>

                {/* Temporal Graph node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="px-10 py-5 rounded-xl border border-rail-purple/40 bg-rail-purple/[0.06] text-center"
                >
                  <p className="text-sm font-mono text-rail-purple font-medium">
                    Temporal Graph + Playwright Test Suite
                  </p>
                </motion.div>

                {/* Output line */}
                <div className="h-10 w-px bg-gradient-to-b from-rail-purple/30 to-success/30" />

                {/* Result node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="px-10 py-5 rounded-xl border border-success/30 bg-success/[0.06] text-center"
                >
                  <p className="text-sm font-mono text-success font-medium">
                    100% Behavior Preserved
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Section 3: Glass Brain View — The Migration Control Plane ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <Container className="relative">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-label text-rail-purple mb-3">Visibility</p>
            <h2 className="text-display-m text-white mb-4">
              The Migration Control Plane
            </h2>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              Full visibility into every autonomous operation: workspace changes,
              build console, AI reasoning, self-heal cycles, and confidence
              scoring — in one auditable dashboard.
            </p>
          </motion.div>

          <div className="relative">
            <div
              className="absolute -inset-4 pointer-events-none hidden md:block"
              aria-hidden
            >
              <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-rail-purple/10" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-rail-purple/10" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-rail-purple/10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-rail-purple/10" />
            </div>
            <GlassBrainShowcase />
          </div>
        </Container>
      </section>

      {/* ── Section 4: Key Capabilities ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container className="relative">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-label text-rail-purple mb-3">
              Infrastructure Capabilities
            </p>
            <h2 className="text-display-m text-white">
              How the Migration Layer Works
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {NECROMA.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i] ?? Shield
              return (
                <motion.article
                  key={feature.title}
                  variants={cardItem}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn(
                    "group relative rounded-xl p-8 overflow-hidden",
                    "bg-white/[0.03] border border-white/10 backdrop-blur-[12px]",
                    "hover:border-rail-purple/30 transition-colors duration-300",
                  )}
                >
                  {/* Scanline on hover */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      className="absolute left-0 right-0 h-px bg-rail-purple/30"
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
                    <div className="mb-5 inline-flex p-3 rounded-lg bg-rail-purple/10 text-rail-purple group-hover:shadow-[0_0_20px_rgba(110,24,179,0.15)] transition-shadow duration-300">
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
            <div
              className="absolute -inset-4 pointer-events-none hidden md:block"
              aria-hidden
            >
              <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-rail-purple/10" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-rail-purple/10" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-rail-purple/10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-rail-purple/10" />
            </div>

            <div className="rounded-2xl border border-rail-purple/20 bg-rail-purple/[0.03] p-12 md:p-16 text-center relative overflow-hidden">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(110,24,179,0.06) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                <h2 className="text-display-m text-white mb-4">
                  Add the Migration Layer.
                </h2>
                <p className="text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
                  See a production-ready vertical slice from your own legacy
                  codebase. No commitment. No &ldquo;Big Bang.&rdquo; Just proof
                  that autonomous migration works.
                </p>
                <button
                  type="button"
                  {...calTriggerProps}
                  className={cn(
                    "inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-sm cursor-pointer",
                    "border border-rail-purple/30 bg-transparent text-rail-purple",
                    "hover:bg-rail-purple/10 hover:shadow-[0_0_20px_rgba(110,24,179,0.2)]",
                    "transition-all duration-300 group/btn",
                  )}
                >
                  {NECROMA.cta.primary}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
