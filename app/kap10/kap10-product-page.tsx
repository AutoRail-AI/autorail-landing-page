"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import {
  ArrowRight,
  FileText,
  Layout,
  Link,
  Lock,
  Rocket,
  RotateCcw,
  Server,
  Shield,
  ShieldCheck,
  Trash2,
  Video,
  Zap,
} from "lucide-react"
import {
  Container,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "components/ui"
import { WaitlistForm } from "components/shared"
import { KAP10 } from "data/products"
import { blurReveal } from "lib/animations"
import { cn } from "lib/utils"

/* ─────────────────────────────────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────────────────────────────────── */

const PROBLEM_STAGES = [
  {
    title: 'The "File Folder Terror"',
    subtitle: "The Usability Barrier",
    description:
      "You ask the AI for a checkout page. It spits out 500 lines across middleware.ts and api/routes/. You are forced to approve changes to complex directories you don\u2019t actually understand.",
  },
  {
    title: 'The AI "Loop of Death"',
    subtitle: "The Momentum Killer",
    description:
      "You ask the AI to fix the login button. It breaks the cart. You fix the cart\u2014the login breaks again. You spend hours burning tokens just to get back to where you were yesterday.",
  },
  {
    title: "Context Rot",
    subtitle: "The Technical Debt",
    description:
      'The AI ignores your .cursorrules after five messages. It writes "Alien Code" based on generic internet tutorials. Your app becomes a tangled mess too complex for the AI\u2019s own context window.',
  },
  {
    title: "Handoff Extortion",
    subtitle: "The Ultimate Fear",
    description:
      'Your app makes money. You hire a real engineer. They look at the repository and say: "This AI code is unmaintainable trash. I need $50,000 to rewrite it from scratch."',
  },
]

const CAPABILITIES = [
  {
    icon: Layout,
    title: 'The "File-less" Blueprint',
    description:
      'Click "Shopping Cart" on your dashboard and type "Add Apple Pay." We translate it into a precise, multi-file structural prompt.',
    highlight: "You manage features; we manage the files.",
    cures: "Stage 1 (Folder Terror)",
  },
  {
    icon: ShieldCheck,
    title: "The Spaghetti Shield",
    description:
      "Our automated cloud PR reviewer checks every AI change against your app\u2019s permanent architecture. Wrong library? Instantly blocked and rewritten.",
    highlight: "You never see the bad code.",
    cures: "Stage 3 (Context Rot)",
  },
  {
    icon: RotateCcw,
    title: 'The "Rewind" Button',
    description:
      "When the AI hallucinates, one click restores your code to the exact moment it last worked\u2014and permanently blocks the AI from making that mistake again.",
    highlight: "The Death Spiral becomes impossible.",
    cures: "Stage 2 (Loop of Death)",
  },
  {
    icon: Video,
    title: "Invisible Testing",
    description:
      'Click through your app to "record" hidden behavioral tests. If the AI breaks a feature in the background, we force a fix.',
    highlight: "Safety without writing tests.",
    cures: "Stage 2 (Loop of Death)",
  },
  {
    icon: FileText,
    title: 'The "Anti-Extortion" Export',
    description:
      "Generate an enterprise-grade Architecture Report in one click. Hand your hired engineer a perfect map of your codebase.",
    highlight: 'No "$50K rewrite" extortion.',
    cures: "Stage 4 (Handoff Fear)",
  },
]

const PIPELINE_STEPS = [
  {
    icon: Link,
    title: "Connect",
    description:
      "Point kap10 at your GitHub/GitLab repo. Our cloud engine indexes your codebase and builds a living Business Intent Graph — modules, conventions, dependencies, and the reasons behind them.",
    detail: "Takes minutes. Updates on every push.",
  },
  {
    icon: Shield,
    title: "Supervise",
    description:
      "Paste your secure kap10 MCP URL into Cursor's settings (or Claude Code, Windsurf, OpenHands). kap10 now sits on the MCP channel — expanding prompts, locking scope, and reviewing every line.",
    detail: "One URL. Works with any MCP-compatible agent.",
  },
  {
    icon: Rocket,
    title: "Ship",
    description:
      "Merge with confidence. Every AI-generated change has been reviewed by your Tech Lead, tested against hidden behavioral tests, and scoped to prevent collateral damage.",
    detail: "Zero regressions. Zero babysitting.",
  },
]

const TRUST_PILLARS = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "Your code is encrypted in transit (TLS 1.3) and at rest (AES-256). The Business Intent Graph is stored in an isolated, single-tenant partition. We never see raw source code — only the structural metadata needed to supervise your AI.",
  },
  {
    icon: Server,
    title: "SOC 2 Compliance",
    description:
      "AutoRail is pursuing SOC 2 Type II certification. Audit logs, access controls, and data retention policies are enterprise-grade from day one.",
  },
  {
    icon: Trash2,
    title: "Data Deletion Guarantee",
    description:
      "Disconnect your repo, and your data is permanently purged within 24 hours. No backups retained. No model training on your code — ever. Your intellectual property is yours.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Does kap10 slow down my AI?",
    answer:
      "No. kap10 operates on the MCP channel with overhead under 200ms. Your coding flow feels identical; the output is just dramatically better.",
  },
  {
    question: "Can I still prompt my AI directly when I want to?",
    answer:
      "Absolutely. You can bypass it, override suggestions, or turn it off for a session. You\u2019re always in control.",
  },
  {
    question: "My code is proprietary. Is it safe?",
    answer:
      "Yes. We store your data in an isolated single-tenant partition. We never train models on your code. Disconnect, and your data is wiped within 24 hours.",
  },
  {
    question: "Does it work with my IDE?",
    answer:
      "If your agent supports the open Model Context Protocol (MCP)\u2014like Cursor, Claude Code, or Windsurf\u2014kap10 works out of the box. One URL, any agent.",
  },
]

// Machine-precision easing: fast out, smooth settle
const snap = [0.16, 1, 0.3, 1] as const

// Escalating red colors for problem stages
const STAGE_COLORS = [
  { border: "rgba(255,51,102,0.15)", glow: "rgba(255,51,102,0.04)", text: "text-red-400/40" },
  { border: "rgba(255,51,102,0.25)", glow: "rgba(255,51,102,0.06)", text: "text-red-400/50" },
  { border: "rgba(255,51,102,0.40)", glow: "rgba(255,51,102,0.10)", text: "text-red-400/60" },
  { border: "rgba(255,51,102,0.60)", glow: "rgba(255,51,102,0.16)", text: "text-red-400/80" },
]

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


function EarlyAccessSection() {
  return (
    <section id="early-access" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container className="relative max-w-2xl">
        <motion.div
          variants={blurReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-electric-cyan/50 mb-3">
            Early Access
          </p>
          <h2 className="text-display-m text-white mb-4">
            Be the first to try kap10.
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Join the waitlist. We&apos;ll onboard you personally when your seat
            is ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: snap }}
          className="rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-[12px] p-8"
          style={{
            boxShadow:
              "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          <WaitlistForm showBenefits />
        </motion.div>
      </Container>
    </section>
  )
}

export function Kap10ProductPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          Section 1: HERO — "The AI Tech Lead"
         ══════════════════════════════════════════════════════════════════════ */}
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
              {KAP10.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/20"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Product name */}
            <motion.h1
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.05, ease: snap }}
              className="text-display-xl tracking-[-0.03em] leading-[0.95] mb-3 text-electric-cyan font-grotesk"
            >
              {KAP10.name}
            </motion.h1>

            {/* Headline / tagline */}
            <motion.p
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.1, ease: snap }}
              className="text-xl md:text-2xl font-medium text-white/50 mb-6 font-grotesk"
            >
              {KAP10.headline}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: snap }}
              className="font-sans text-xl text-white/80 font-medium max-w-xl mb-3 leading-relaxed"
            >
              {KAP10.tagline}
            </motion.p>

            {/* Explanation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: snap }}
              className="font-sans text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              kap10 is a hosted MCP server that supervises your AI coding
              agent — expanding prompts, reviewing output, and preventing
              regressions before they reach your files.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.35, ease: snap }}
              className="flex flex-col items-center md:items-start gap-4"
            >
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#early-access"
                  className={cn(
                    "inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-sm cursor-pointer",
                    "bg-transparent border border-electric-cyan/30 text-electric-cyan",
                    "hover:glow-cyan hover:bg-electric-cyan/5",
                    "transition-all duration-300 group/btn",
                  )}
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
              {/* Friction-reducing micro-copy */}
              <p className="text-xs text-white/30 font-mono">
                Limited early access — founding members get personal onboarding.
              </p>

              {/* Agent Support Bar */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/20">
                  Works with:
                </span>
                {["Cursor", "Claude Code", "Windsurf", "OpenHands"].map((agent) => (
                  <span
                    key={agent}
                    className="text-sm font-grotesk font-medium text-white/25"
                  >
                    {agent}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 2: METRICS STRIP — Enterprise Credibility
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 relative">
        <Container className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: snap }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { value: "< 200ms", label: "Prompts & Reviews" },
              { value: "4+", label: "Major AI Agents Supported" },
              { value: "24hr", label: "Data Deletion Guarantee" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: snap }}
                className="rounded-xl bg-white/[0.04] border border-white/[0.12] backdrop-blur-[12px] p-6 text-center"
                style={{
                  boxShadow:
                    "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                <p className="text-3xl font-grotesk font-bold text-electric-cyan mb-2">
                  {stat.value}
                </p>
                <p className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 3: THE PROBLEM — 4 Vertically Stacked Stage Cards
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
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-electric-cyan/50 mb-3">
              The Problem
            </p>
            <h2 className="text-display-m text-white mb-4">
              The AI Coding &ldquo;Hostage Situation.&rdquo;
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              AI agents are incredibly fast typists, but fundamentally
              unsupervised. They lack architectural judgment, memory, and
              accountability. The honeymoon phase ends quickly when the cracks
              start to show.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {PROBLEM_STAGES.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: snap }}
                className="relative rounded-xl p-7 bg-white/[0.04] border border-white/[0.12] backdrop-blur-[12px]"
                style={{
                  borderLeftWidth: "2px",
                  borderLeftColor: STAGE_COLORS[i]!.border,
                  boxShadow: `0 8px 30px -8px rgba(0,0,0,0.4), 0 0 40px ${STAGE_COLORS[i]!.glow}`,
                }}
              >
                <div className="flex items-start gap-5">
                  {/* Stage number */}
                  <span className={cn("text-[48px] font-grotesk font-bold leading-none shrink-0", STAGE_COLORS[i]!.text)}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white font-grotesk mb-1">
                      {stage.title}
                    </h3>
                    <p className="text-xs font-mono text-red-400/60 uppercase tracking-wider mb-3 font-bold">
                      {stage.subtitle}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Friction Multiplier banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-3xl mx-auto rounded-lg border border-red-400/15 bg-red-400/[0.03] px-6 py-4"
            style={{ boxShadow: "0 0 30px rgba(255,51,102,0.06)" }}
          >
            <p className="text-white/70 text-sm leading-relaxed">
              <span className="text-white/90 font-bold">
                ...And the friction doesn&apos;t stop there.
              </span>{" "}
              These four stages are just the breaking points. Every single day,
              unsupervised AI agents silently introduce security vulnerabilities,
              ignore dependency guidelines, break UI consistency, hallucinate
              APIs, and bloat your codebase with redundant logic. You are paying
              for speed, but spending all your time babysitting the output.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 3: THE SOLUTION — Asymmetric Bento Grid (6 Capabilities)
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
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-electric-cyan/50 mb-3">
              The Solution
            </p>
            <h2 className="text-display-m text-white mb-4">
              You don&apos;t need a faster agent. You need a manager.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Connect your GitHub repo, and kap10 maps how your app
              works. We intercept your prompts, enforce architectural rules,
              and ruthlessly review the AI&apos;s code before it ever touches
              your files.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CAPABILITIES.map((cap, i) => {
              const isFullWidth = i === 0
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: snap }}
                  className={cn(
                    "group/card relative rounded-xl overflow-hidden",
                    "bg-white/[0.05] border border-white/[0.15] backdrop-blur-[12px]",
                    "hover:border-electric-cyan/25 transition-all duration-300",
                    isFullWidth ? "md:col-span-2 p-8 lg:p-10" : "col-span-1 p-7",
                  )}
                  style={{
                    boxShadow:
                      "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06), 0 0 20px rgba(0,229,255,0.04)",
                  }}
                >
                  {/* Card 01 (File-less Blueprint): text + visual side-by-side */}
                  {i === 0 ? (
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="p-3 rounded-xl bg-electric-cyan/[0.10] border border-electric-cyan/25"
                            style={{ boxShadow: "0 0 24px rgba(0,229,255,0.10)" }}
                          >
                            <cap.icon className="w-6 h-6 text-electric-cyan" />
                          </div>
                          <span className="text-[10px] font-mono text-white/40">01</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white font-grotesk mb-3">
                          {cap.title}
                        </h3>
                        <p className="text-white/60 text-base leading-relaxed max-w-xl mb-1">
                          {cap.description}
                        </p>
                        <p className="text-white/80 text-base leading-relaxed max-w-xl font-medium">
                          {cap.highlight}
                        </p>
                        <div className="mt-5">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-electric-cyan/[0.06] border border-electric-cyan/15 text-[10px] font-mono text-electric-cyan/60">
                            <span className="w-1 h-1 rounded-full bg-electric-cyan/60" />
                            Cures: {cap.cures}
                          </span>
                        </div>
                      </div>
                      {/* Micro-visual: messy file tree → clean feature blocks */}
                      <div className="shrink-0 w-full lg:w-[300px] h-[180px] rounded-lg bg-[#0e0e14] border border-white/[0.15] overflow-hidden relative" style={{ boxShadow: "0 8px 30px -8px rgba(0,229,255,0.10)" }}>
                        <svg viewBox="0 0 300 180" className="w-full h-full" fill="none">
                          {/* Left side: messy file tree */}
                          <text x="20" y="18" fill="rgba(255,255,255,0.4)" fontSize="8" fontWeight="bold" className="font-mono">Before</text>
                          <rect x="12" y="26" width="120" height="140" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                          {[
                            { y: 36, text: "src/", indent: 0, c: "rgba(255,255,255,0.4)" },
                            { y: 48, text: "components/", indent: 1, c: "rgba(255,255,255,0.3)" },
                            { y: 60, text: "CheckoutPage.tsx", indent: 2, c: "rgba(255,51,102,0.6)" },
                            { y: 72, text: "CartWidget.tsx", indent: 2, c: "rgba(255,51,102,0.5)" },
                            { y: 84, text: "api/", indent: 1, c: "rgba(255,255,255,0.3)" },
                            { y: 96, text: "routes.ts", indent: 2, c: "rgba(255,51,102,0.5)" },
                            { y: 108, text: "middleware.ts", indent: 1, c: "rgba(255,51,102,0.6)" },
                            { y: 120, text: "utils/", indent: 1, c: "rgba(255,255,255,0.3)" },
                            { y: 132, text: "stripe.ts", indent: 2, c: "rgba(255,51,102,0.4)" },
                            { y: 144, text: "schema.prisma", indent: 1, c: "rgba(255,51,102,0.5)" },
                          ].map((item, idx) => (
                            <text key={idx} x={20 + item.indent * 8} y={item.y} fill={item.c} fontSize="7" className="font-mono">{item.text}</text>
                          ))}
                          <text x="50" y="162" fill="rgba(255,51,102,0.5)" fontSize="7" fontWeight="bold" className="font-mono">500 lines??</text>

                          {/* Arrow */}
                          <motion.g animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
                            <line x1="140" y1="90" x2="158" y2="90" stroke="rgba(0,229,255,0.5)" strokeWidth="1.5" />
                            <polygon points="158,87 164,90 158,93" fill="rgba(0,229,255,0.5)" />
                          </motion.g>

                          {/* Right side: clean feature blocks */}
                          <text x="172" y="18" fill="rgba(0,229,255,0.6)" fontSize="8" fontWeight="bold" className="font-mono">kap10</text>
                          <rect x="168" y="26" width="120" height="140" rx="4" fill="rgba(0,229,255,0.02)" stroke="rgba(0,229,255,0.12)" strokeWidth="0.5" />
                          {[
                            { y: 38, h: 28, label: "User Login", color: "rgba(0,229,255,0.15)", border: "rgba(0,229,255,0.25)" },
                            { y: 72, h: 28, label: "Shopping Cart", color: "rgba(0,229,255,0.20)", border: "rgba(0,229,255,0.35)" },
                            { y: 106, h: 28, label: "Checkout", color: "rgba(0,229,255,0.12)", border: "rgba(0,229,255,0.20)" },
                            { y: 140, h: 20, label: "Settings", color: "rgba(0,229,255,0.08)", border: "rgba(0,229,255,0.15)" },
                          ].map((block, idx) => (
                            <g key={idx}>
                              <rect x="176" y={block.y} width="104" height={block.h} rx="4" fill={block.color} stroke={block.border} strokeWidth="0.75" />
                              <text x="228" y={block.y + block.h / 2 + 3} textAnchor="middle" fill="rgba(0,229,255,0.8)" fontSize="8" fontWeight="bold" className="font-mono">{block.label}</text>
                            </g>
                          ))}
                        </svg>
                        <div className="absolute bottom-2 right-3">
                          <span className="text-[9px] font-mono text-electric-cyan/40">feature-map · live</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Standard card layout for cards 02–05 */
                    <>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={cn(
                            "rounded-xl bg-electric-cyan/[0.10] border border-electric-cyan/25",
                            isFullWidth ? "p-3" : "p-2.5",
                          )}
                          style={{ boxShadow: "0 0 24px rgba(0,229,255,0.10)" }}
                        >
                          <cap.icon className={cn("text-electric-cyan", isFullWidth ? "w-6 h-6" : "w-5 h-5")} />
                        </div>
                        <span className="text-[10px] font-mono text-white/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3
                        className={cn(
                          "font-bold text-white font-grotesk mb-2",
                          isFullWidth ? "text-2xl mb-3" : "text-lg",
                        )}
                      >
                        {cap.title}
                      </h3>
                      <p
                        className={cn(
                          "text-white/60 leading-relaxed",
                          isFullWidth ? "text-base max-w-xl" : "text-sm",
                        )}
                      >
                        {cap.description}
                      </p>
                      <p
                        className={cn(
                          "text-white/80 leading-relaxed font-medium mt-1",
                          isFullWidth ? "text-base max-w-xl" : "text-sm",
                        )}
                      >
                        {cap.highlight}
                      </p>

                      {/* Micro-visual: PR Review Log (card 02 — Spaghetti Shield) */}
                      {i === 1 && (
                        <div className="mt-5 rounded-lg bg-[#0e0e14] border border-white/[0.12] p-3 overflow-hidden" style={{ boxShadow: "0 4px 20px -4px rgba(0,229,255,0.08)" }}>
                          <div className="flex items-center gap-2 mb-2.5">
                            <div className="flex gap-1">
                              <span className="w-2 h-2 rounded-full bg-red-400/60" />
                              <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
                              <span className="w-2 h-2 rounded-full bg-green-400/60" />
                            </div>
                            <span className="text-[9px] font-mono text-white/40">pr-review.log</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className="text-[10px] font-mono text-red-400/80">
                              <span className="text-red-400 font-bold">BLOCKED</span>{"  "}auth/login.ts:14 — uses deprecated bcrypt v2
                            </p>
                            <p className="text-[10px] font-mono text-red-400/80">
                              <span className="text-red-400 font-bold">BLOCKED</span>{"  "}api/routes.ts:42 — bypasses rate limiter
                            </p>
                            <p className="text-[10px] font-mono text-electric-cyan/80">
                              <span className="text-electric-cyan font-bold">REWRITTEN</span>{"  "}auth/login.ts:14 — upgraded to argon2
                            </p>
                            <p className="text-[10px] font-mono text-success/80">
                              <span className="text-success font-bold">PASS</span>{"  "}2 violations caught, 2 auto-fixed
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Micro-visual: Rewind timeline (card 03 only) */}
                      {i === 2 && (
                        <div className="mt-5 rounded-lg bg-[#0e0e14] border border-white/[0.12] p-3 overflow-hidden" style={{ boxShadow: "0 4px 20px -4px rgba(0,229,255,0.08)" }}>
                          <div className="flex items-center gap-2 mb-2.5">
                            <RotateCcw className="w-3 h-3 text-electric-cyan/60" />
                            <span className="text-[9px] font-mono text-white/40">working-state-timeline</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {[
                              { label: "v1.2", status: "good" },
                              { label: "v1.3", status: "good" },
                              { label: "v1.4", status: "bad" },
                              { label: "v1.5", status: "bad" },
                            ].map((state, idx) => (
                              <div key={idx} className="flex items-center gap-1">
                                {idx > 0 && <div className="w-3 h-px bg-white/10" />}
                                <div
                                  className={cn(
                                    "flex items-center gap-1 px-2 py-1 rounded",
                                    state.status === "good"
                                      ? "bg-success/[0.08] border border-success/20"
                                      : "bg-red-400/[0.06] border border-red-400/15",
                                  )}
                                >
                                  <div className={cn("w-1.5 h-1.5 rounded-full", state.status === "good" ? "bg-success" : "bg-red-400")} />
                                  <span className={cn("text-[9px] font-mono", state.status === "good" ? "text-success/80" : "text-red-400/60")}>{state.label}</span>
                                </div>
                              </div>
                            ))}
                            <div className="ml-auto">
                              <div className="px-2 py-1 rounded bg-electric-cyan/[0.10] border border-electric-cyan/25 text-[9px] font-mono text-electric-cyan/80 cursor-pointer">
                                Restore v1.3
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Micro-visual: Test Recording (card 04 — Invisible Testing) */}
                      {i === 3 && (
                        <div className="mt-5 rounded-lg bg-[#0e0e14] border border-white/[0.12] p-3 overflow-hidden" style={{ boxShadow: "0 4px 20px -4px rgba(0,229,255,0.08)" }}>
                          <div className="flex items-center gap-2 mb-2.5">
                            <div className="flex items-center gap-1.5">
                              <motion.span
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-2 h-2 rounded-full bg-red-500"
                              />
                              <span className="text-[9px] font-mono font-bold text-red-400/80">REC</span>
                            </div>
                            <span className="text-[9px] font-mono text-white/40">test-recording</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            {[
                              { action: "click", target: "Login button", check: true },
                              { action: "type", target: "email input", check: true },
                              { action: "click", target: "Add to Cart", check: true },
                              { action: "navigate", target: "/checkout", check: true },
                            ].map((step, idx) => (
                              <p key={idx} className="text-[10px] font-mono text-white/60">
                                <span className="text-white/40 inline-block w-14">{step.action}</span>
                                {step.target}
                                <span className="text-success ml-2">&#10003;</span>
                              </p>
                            ))}
                            <p className="text-[10px] font-mono text-electric-cyan/60 mt-1 border-t border-white/[0.08] pt-1">
                              4 interactions → hidden test suite generated
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Micro-visual: Architecture Report (card 05 — Anti-Extortion Export) */}
                      {i === 4 && (
                        <div className="mt-5 rounded-lg bg-[#0e0e14] border border-white/[0.12] p-3 overflow-hidden" style={{ boxShadow: "0 4px 20px -4px rgba(0,229,255,0.08)" }}>
                          <div className="flex items-center gap-2 mb-2.5">
                            <div className="flex gap-1">
                              <span className="w-2 h-2 rounded-full bg-red-400/60" />
                              <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
                              <span className="w-2 h-2 rounded-full bg-green-400/60" />
                            </div>
                            <span className="text-[9px] font-mono text-white/40">architecture-report.pdf</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className="text-[10px] font-mono text-white/60">
                              <span className="text-electric-cyan/80">12</span> modules documented
                            </p>
                            <p className="text-[10px] font-mono text-white/60">
                              <span className="text-electric-cyan/80">47</span> architectural decisions logged
                            </p>
                            <p className="text-[10px] font-mono text-white/60">
                              <span className="text-electric-cyan/80">3</span> dependency graphs generated
                            </p>
                            <p className="text-[10px] font-mono text-success/80">
                              Ready for developer handoff
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Cures pill */}
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-electric-cyan/[0.06] border border-electric-cyan/15 text-[10px] font-mono text-electric-cyan/60">
                          <span className="w-1 h-1 rounded-full bg-electric-cyan/60" />
                          Cures: {cap.cures}
                        </span>
                      </div>
                    </>
                  )}
                </motion.div>
              )
            })}
          </div>

        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 4: HOW IT WORKS — 3-Step Horizontal Pipeline
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
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-electric-cyan/50 mb-3">
              Integration
            </p>
            <h2 className="text-display-m text-white mb-4">
              Three steps. Zero install.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              kap10 is a hosted MCP server. Connect your repo, add the
              endpoint to your IDE, and your AI has a Tech Lead.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
            {PIPELINE_STEPS.map((step, i) => (
              <div key={step.title} className="contents">
                {/* Arrow connector between cards (desktop only) */}
                {i > 0 && (
                  <div className="hidden md:flex items-center justify-center shrink-0">
                    <ArrowRight className="w-5 h-5 text-electric-cyan/30" />
                  </div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: snap }}
                  className={cn(
                    "flex-1 group/pipe relative rounded-xl p-7 overflow-hidden",
                    "bg-white/[0.05] border border-white/[0.12] backdrop-blur-[12px]",
                    "hover:border-electric-cyan/25 hover:bg-white/[0.06] transition-all duration-300",
                  )}
                  style={{
                    boxShadow:
                      "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2.5 rounded-xl bg-electric-cyan/[0.10] border border-electric-cyan/25"
                      style={{ boxShadow: "0 0 24px rgba(0,229,255,0.10)" }}
                    >
                      <step.icon className="w-5 h-5 text-electric-cyan" />
                    </div>
                    <span className="text-[10px] font-mono text-white/40">
                      {String(i + 1).padStart(2, "0")} · {step.title.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-grotesk">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-electric-cyan/[0.06] border border-electric-cyan/15 text-[10px] font-mono text-electric-cyan/60">
                    <span className="w-1 h-1 rounded-full bg-electric-cyan/60" />
                    {step.detail}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Result badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-xl mx-auto rounded-lg border border-success/20 bg-success/[0.04] px-6 py-3.5 flex items-center justify-center gap-3"
            style={{ boxShadow: "0 0 30px rgba(0,255,136,0.06)" }}
          >
            <Zap className="w-3.5 h-3.5 text-success shrink-0" />
            <p className="text-white/70 text-sm">
              Your AI just got a promotion — from unsupervised intern to managed junior dev.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 6: TRUST & SECURITY — 3-Column Trust Pillars
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container className="relative max-w-5xl">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-electric-cyan/50 mb-3">
              Trust & Security
            </p>
            <h2 className="text-display-m text-white mb-4">
              Enterprise security, built for solo hackers.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              We supervise your code; we don&apos;t exploit it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {TRUST_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: snap }}
                className={cn(
                  "rounded-xl p-7 bg-white/[0.05] border border-white/[0.12] backdrop-blur-[12px]",
                  "hover:border-electric-cyan/25 transition-all duration-300",
                )}
                style={{
                  boxShadow:
                    "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="p-2.5 rounded-xl bg-electric-cyan/[0.10] border border-electric-cyan/25 w-fit mb-5"
                  style={{ boxShadow: "0 0 24px rgba(0,229,255,0.10)" }}
                >
                  <pillar.icon className="w-5 h-5 text-electric-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white font-grotesk mb-2">
                  {pillar.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trust statement */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center text-white/40 text-sm italic max-w-xl mx-auto"
          >
            &ldquo;We built kap10 for builders who take their code
            seriously. If you wouldn&apos;t trust us with your repo, we
            haven&apos;t earned your business.&rdquo;
          </motion.p>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 6: EARLY ACCESS — Waitlist Email Capture
         ══════════════════════════════════════════════════════════════════════ */}
      <EarlyAccessSection />

      {/* ══════════════════════════════════════════════════════════════════════
          Section 7: FAQ — Accordion
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container className="relative max-w-3xl">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-electric-cyan/50 mb-3">
              FAQ
            </p>
            <h2 className="text-display-m text-white">
              Questions you&apos;re already thinking.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: snap }}
            className="rounded-xl bg-white/[0.04] border border-white/[0.12] backdrop-blur-[12px] px-7 py-2"
            style={{
              boxShadow:
                "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            <Accordion type="single" collapsible>
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-white/[0.08] last:border-b-0"
                >
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 8: BOTTOM CTA
         ══════════════════════════════════════════════════════════════════════ */}
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
                  You supply the vibe. We supply the Tech Lead.
                </h2>
                <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
                  Your coding agent is a brilliant junior developer with no
                  memory and no judgment. Give it a Tech Lead, and never lose a
                  day to the AI Death Spiral again.
                </p>
                <div className="max-w-md mx-auto">
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
