"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Check,
  Eye,
  Layers,
  Shield,
  X,
  Zap,
} from "lucide-react"
import { Container } from "components/ui"
import { calTriggerProps } from "components/providers"
import { GlassBrainShowcase } from "components/glass-brain"
import { NECROMA } from "data/products"
import { blurReveal } from "lib/animations"
import { cn } from "lib/utils"

/* ─────────────────────────────────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────────────────────────────────── */

const PIPELINE_STEPS = [
  {
    num: "01",
    title: "Record",
    desc: "DOM events, video capture, and user flows from the live legacy application.",
  },
  {
    num: "02",
    title: "Generate",
    desc: "Playwright test suite automatically created from observed behavior.",
  },
  {
    num: "03",
    title: "Verify",
    desc: "Force the AI to write modern code until every behavioral test passes.",
  },
]

const CAPABILITIES = [
  {
    icon: Eye,
    title: "Dual-Stream Verification",
    desc: "Watches video of actual user behavior and records DOM events to guarantee the new system works exactly like the old one.",
  },
  {
    icon: Shield,
    title: "Automated Guardrails",
    desc: "If a generated slice fails, the infrastructure self-heals — reads the error and fixes the code until the test turns green. No 3am pages.",
  },
  {
    icon: Layers,
    title: "Vertical Slice Delivery",
    desc: "One working feature at a time, not risky \"Big Bang\" rewrites. See your first production-ready slice in days, not quarters.",
  },
]

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

      {/* ══════════════════════════════════════════════════════════════════════
          Section 2: THE GAP — Bold Comparison Panels
          Two statement panels sliding from opposite sides.
          Different from Code-Synapse's code editors — uses bold text, no code.
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
            <p className="text-label text-white/40 mb-3">
              The Infrastructure Gap
            </p>
            <h2 className="text-display-m text-white">
              Everyone else is fighting the wrong war.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* ── Migration Tools (the wrong approach) ── */}
            <motion.div
              initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: snap }}
              className="rounded-xl overflow-hidden border border-white/[0.15]"
              style={{ boxShadow: "0 20px 50px -10px rgba(255,60,60,0.08), 0 0 0 1px rgba(255,255,255,0.05)" }}
            >
              <div className="flex items-center gap-2.5 px-5 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                <div className="p-1 rounded-md bg-red-400/10">
                  <X className="w-3.5 h-3.5 text-red-400/60" />
                </div>
                <span className="text-[11px] font-mono text-white/40 tracking-wide">
                  Migration Tools
                </span>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-white/60 font-grotesk text-lg font-medium mb-3">
                  The Syntax War
                </p>
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  Convert Code A to Code B, line by line.
                  Read source code and guess intent from syntax.
                </p>
                <p className="text-[10px] font-mono text-white/30">
                  Blind — source code doesn&apos;t capture intent.
                </p>
              </div>
            </motion.div>

            {/* ── Migration Infrastructure (our approach) ── */}
            <motion.div
              initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: snap }}
              className="rounded-xl overflow-hidden border border-rail-purple/20"
              style={{ boxShadow: "0 20px 50px -10px rgba(110,24,179,0.15), 0 0 0 1px rgba(110,24,179,0.1)" }}
            >
              <div className="flex items-center gap-2.5 px-5 py-3 bg-rail-purple/[0.04] border-b border-rail-purple/10">
                <div className="p-1 rounded-md bg-rail-purple/10">
                  <Check className="w-3.5 h-3.5 text-rail-purple" />
                </div>
                <span className="text-[11px] font-mono text-rail-purple/50 tracking-wide">
                  Migration Infrastructure
                </span>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-rail-purple font-grotesk text-lg font-medium mb-3">
                  The Behavioral War
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Watch the running application. Record user flows.
                  Preserve actual behavior, not just syntax.
                </p>
                <p className="text-[10px] font-mono text-rail-purple/60">
                  We are not blind. We watch the screen.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 3: HOW IT WORKS — Vertical 3-Step Pipeline
          Different from Code-Synapse's horizontal pipeline.
          Vertical flow: Record → Generate → Verify → 100% Preserved
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[800px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(110,24,179,0.03) 0%, transparent 70%)",
          }}
        />

        <Container className="relative max-w-3xl">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-label text-white/40 mb-3">How It Works</p>
            <h2 className="text-display-m text-white">
              Test-driven reconstruction.
            </h2>
          </motion.div>

          {/* Vertical pipeline */}
          <div className="relative max-w-lg mx-auto">
            {/* Vertical connector line */}
            <div
              className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
              aria-hidden
            >
              <div className="h-full bg-white/[0.04]" />
              <motion.div
                className="absolute top-0 left-0 w-px bg-gradient-to-b from-rail-purple/50 to-success/30"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-14">
              {PIPELINE_STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: snap }}
                  className="flex items-start gap-6 md:gap-8"
                >
                  {/* Step node */}
                  <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-rail-purple/[0.10] border border-rail-purple/25 flex items-center justify-center z-10">
                    <span className="text-rail-purple font-mono text-sm md:text-base font-bold">
                      {step.num}
                    </span>
                  </div>
                  <div className="pt-1 md:pt-3">
                    <h3 className="text-white font-semibold font-grotesk text-lg mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Result badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-14 ml-0 flex items-center gap-4"
            >
              <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-success/[0.12] border border-success/30 flex items-center justify-center z-10">
                <Check className="w-5 h-5 md:w-6 md:h-6 text-success" />
              </div>
              <p className="text-success/90 font-mono text-sm font-medium">
                100% Behavior Preserved
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 4: THE CONTROL PLANE — GlassBrainShowcase
          Existing unique component. Clean header, HUD brackets.
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container className="relative">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-label text-white/40 mb-3">Visibility</p>
            <h2 className="text-display-m text-white mb-4">
              The Migration Control Plane
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto leading-relaxed">
              Full visibility into every autonomous operation — workspace
              changes, AI reasoning, self-heal cycles, and confidence scoring
              in one auditable dashboard.
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

      {/* ══════════════════════════════════════════════════════════════════════
          Section 5: THE RESULT — Capabilities as clean text rows
          No cards. Icon + title + description separated by dividers.
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
              Migration That Actually Works
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
                <div className="shrink-0 mt-1 p-3 rounded-xl bg-rail-purple/[0.10] border border-rail-purple/20 text-rail-purple">
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

      {/* ── Section 6: Bottom CTA ── */}
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
                <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
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
