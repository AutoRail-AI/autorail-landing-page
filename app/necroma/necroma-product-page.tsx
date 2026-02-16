"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Camera,
  Check,
  Cpu,
  Eye,
  Layers,
  Shield,
  ShieldCheck,
  X,
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
            <motion.h1
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.05, ease: snap }}
              className="text-display-xl tracking-[-0.03em] leading-[0.95] mb-3 text-rail-purple font-grotesk"
            >
              {NECROMA.name}
            </motion.h1>

            {/* Headline / tagline */}
            <motion.p
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.1, ease: snap }}
              className="text-xl md:text-2xl font-medium text-white/50 mb-6 font-grotesk"
            >
              {NECROMA.headline}
            </motion.p>

            {/* Tagline — snippet-extractable definition woven into brand voice (§2.5) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: snap }}
              className="font-sans text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              necroma is an autonomous legacy migration tool that records live
              application behavior, generates Playwright tests, then forces AI
              to rewrite until every test passes. See your first modernized,
              production-ready feature in days, not quarters.
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
          Section 2: THE GAP — Terminal-style Glass & Glow Comparison
          FIX: Right panel uses bright white + neon accents for legibility.
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
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-rail-purple/50 mb-3">
              The Infrastructure Gap
            </p>
            <h2 className="text-display-m text-white">
              Everyone else is fighting the wrong war.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* ── The Old Way (syntax translation) ── */}
            <motion.div
              initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: snap }}
              className="rounded-xl overflow-hidden border border-white/[0.15]"
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
                  syntax-migration.log
                </span>
                <div className="ml-auto">
                  <div className="w-5 h-5 rounded-full bg-red-400/15 border border-red-400/30 flex items-center justify-center">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                </div>
              </div>
              {/* Code */}
              <div className="px-5 py-6 bg-[#12101a]">
                <pre className="font-mono text-[13px] leading-[1.8] text-white/55">
                  <span className="text-white/30 italic">{"// AST node transform"}</span>{"\n"}
                  <span className="text-white/70">function</span>{" migrate(node) {\n"}
                  {"  "}<span className="text-white/70">if</span>{" (node.type === "}<span className="text-amber-300/70">&apos;jQuery&apos;</span>{") {\n"}
                  {"    "}<span className="text-white/70">return</span>{" rewriteToReact(node.source)\n"}
                  {"  }\n"}
                  {"}"}
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
                  Blind — source code doesn&apos;t capture intent.
                </span>
              </div>
            </motion.div>

            {/* ── The Necroma Way (behavior recording) ── */}
            <motion.div
              initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: snap }}
              className="rounded-xl overflow-hidden border border-rail-purple/25"
              style={{ boxShadow: "0 25px 60px -12px rgba(110,24,179,0.18), 0 0 0 1px rgba(110,24,179,0.12)" }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-rail-purple/[0.06] border-b border-rail-purple/15">
                <div className="flex items-center gap-1.5">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
                  <span className="w-[7px] h-[7px] rounded-full bg-[#FEBC2E]" />
                  <span className="w-[7px] h-[7px] rounded-full bg-[#28C840]" />
                </div>
                <span className="text-[13px] font-mono font-semibold text-rail-purple/80 tracking-wide ml-1">
                  behavior-capture.session
                </span>
                <div className="ml-auto">
                  <div
                    className="w-5 h-5 rounded-full bg-success/15 border border-success/30 flex items-center justify-center"
                    style={{ boxShadow: "0 0 8px rgba(0,255,136,0.2)" }}
                  >
                    <Check className="w-3 h-3 text-success" />
                  </div>
                </div>
              </div>
              {/* Code — BRIGHT text: white base, cyan for paths, green for success */}
              <div className="px-5 py-6 bg-[#0e0a14]">
                <pre className="font-mono text-[13px] leading-[1.8] text-white/90">
                  <span className="text-red-400">&#9654; REC</span>{" "}<span className="text-white/50">00:00:12</span>{"\n"}
                  <span className="text-white/50">[click]</span>{"  "}<span className="text-electric-cyan">#submit-btn</span>{" → "}<span className="text-white/70">POST /api/order</span>{"\n"}
                  <span className="text-white/50">[input]</span>{"  "}<span className="text-electric-cyan">#email-field</span>{" → "}<span className="text-amber-300">&quot;user@test.com&quot;</span>{"\n"}
                  <span className="text-white/50">[nav]</span>{"    "}<span className="text-electric-cyan">/checkout</span>{" → "}<span className="text-electric-cyan">/confirmation</span>{"\n"}
                  <span className="text-white/50">[assert]</span>{" "}<span className="text-electric-cyan">.success-msg</span>{" "}<span className="text-success font-bold">visible</span>
                </pre>
              </div>
              {/* Verdict */}
              <div className="px-4 py-3 bg-rail-purple/[0.06] border-t border-rail-purple/15 flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-success" />
                <span className="text-[12px] font-mono text-white/80">
                  We watch the screen. We preserve behavior, not syntax.
                </span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 3: HOW IT WORKS — Bento Pipeline Grid
          FIX: Explicit CSS Grid with col-span. No stagger container wrapper.
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(110,24,179,0.04) 0%, transparent 70%)",
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
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-rail-purple/50 mb-3">How It Works</p>
            <h2 className="text-display-m text-white mb-4">
              Test-driven reconstruction.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Record real user behavior, generate tests from it, then force the AI to write modern code until every test passes.
            </p>
          </motion.div>

          {/* Pipeline — horizontal on desktop, vertical on mobile */}
          <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
            {/* ── 01 Record ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: snap }}
              className={cn(
                "flex-1 group/pipe relative rounded-xl p-7 overflow-hidden",
                "bg-white/[0.05] border border-white/[0.12] backdrop-blur-[12px]",
                "hover:border-rail-purple/25 hover:bg-white/[0.06] transition-all duration-300",
              )}
              style={{ boxShadow: "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2.5 rounded-xl bg-rail-purple/[0.10] border border-rail-purple/25"
                  style={{ boxShadow: "0 0 24px rgba(110,24,179,0.10)" }}
                >
                  <Camera className="w-5 h-5 text-rail-purple" />
                </div>
                <span className="text-[10px] font-mono text-white/40">01 · RECORD</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-grotesk">
                Record Real Behavior
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Capture DOM events, video sessions, and user flows from the live legacy app. No source code reading — just watching what actually happens.
              </p>
              {/* Micro-visual: recording timeline */}
              <div className="rounded-lg bg-[#0e0a14] border border-white/[0.12] overflow-hidden relative" style={{ boxShadow: "0 8px 30px -8px rgba(110,24,179,0.10)" }}>
                <svg viewBox="0 0 280 130" className="w-full" fill="none">
                  <line x1="20" y1="25" x2="260" y2="25" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <line x1="20" y1="55" x2="260" y2="55" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <line x1="20" y1="85" x2="260" y2="85" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <motion.circle
                    cx="32" cy="12" r="4"
                    fill="rgba(255,51,102,0.9)"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <text x="42" y="16" fill="rgba(255,255,255,0.6)" fontSize="9" fontWeight="bold" className="font-mono">REC 00:00:12</text>
                  {[
                    { x: 40, y: 25, label: "click", color: "rgba(110,24,179,0.9)" },
                    { x: 90, y: 55, label: "input", color: "rgba(110,24,179,0.7)" },
                    { x: 140, y: 25, label: "click", color: "rgba(110,24,179,0.9)" },
                    { x: 180, y: 85, label: "nav", color: "rgba(110,24,179,0.6)" },
                    { x: 230, y: 55, label: "assert", color: "rgba(0,255,136,0.8)" },
                  ].map((evt, idx) => (
                    <g key={idx}>
                      <circle cx={evt.x} cy={evt.y} r="6" fill={evt.color.replace(/[\d.]+\)$/, "0.15)")} stroke={evt.color} strokeWidth="1.5" />
                      <circle cx={evt.x} cy={evt.y} r="2" fill={evt.color} />
                      <text x={evt.x} y={evt.y + 18} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" className="font-mono">{evt.label}</text>
                    </g>
                  ))}
                  <path
                    d="M40,25 L90,55 L140,25 L180,85 L230,55"
                    stroke="rgba(110,24,179,0.3)"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rail-purple/[0.06] border border-rail-purple/15 text-[10px] font-mono text-rail-purple/60">
                  <span className="w-1 h-1 rounded-full bg-rail-purple/60" />
                  Playwright + DOM Events
                </span>
              </div>
            </motion.div>

            {/* Arrow connector (desktop only) */}
            <div className="hidden md:flex items-center justify-center shrink-0">
              <ArrowRight className="w-5 h-5 text-rail-purple/30" />
            </div>

            {/* ── 02 Generate ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: snap }}
              className={cn(
                "flex-1 group/pipe relative rounded-xl p-7 overflow-hidden",
                "bg-white/[0.05] border border-white/[0.12] backdrop-blur-[12px]",
                "hover:border-rail-purple/25 hover:bg-white/[0.06] transition-all duration-300",
              )}
              style={{ boxShadow: "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2.5 rounded-xl bg-rail-purple/[0.10] border border-rail-purple/25"
                  style={{ boxShadow: "0 0 24px rgba(110,24,179,0.10)" }}
                >
                  <Cpu className="w-5 h-5 text-rail-purple" />
                </div>
                <span className="text-[10px] font-mono text-white/40">02 · GENERATE</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-grotesk">
                Generate Test Suite
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Playwright test suite auto-created from observed behavior. Every user flow becomes an executable assertion.
              </p>
              <div className="rounded-lg bg-[#0e0a14] border border-white/[0.12] p-3 font-mono text-[11px]">
                <div className="text-white/40 mb-1">// auto-generated</div>
                <div className="text-white/80">test(<span className="text-amber-300">&apos;checkout flow&apos;</span>, {"{"}</div>
                <div className="text-white/60 pl-2">page.click(<span className="text-amber-300">&apos;#submit&apos;</span>)</div>
                <div className="text-white/60 pl-2">expect(res).toBe(<span className="text-success">200</span>)</div>
                <div className="text-white/80">{"}"})</div>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rail-purple/[0.06] border border-rail-purple/15 text-[10px] font-mono text-rail-purple/60">
                  <span className="w-1 h-1 rounded-full bg-rail-purple/60" />
                  AI Codegen
                </span>
              </div>
            </motion.div>

            {/* Arrow connector (desktop only) */}
            <div className="hidden md:flex items-center justify-center shrink-0">
              <ArrowRight className="w-5 h-5 text-rail-purple/30" />
            </div>

            {/* ── 03 Verify ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: snap }}
              className={cn(
                "flex-1 group/pipe relative rounded-xl p-7 overflow-hidden",
                "bg-white/[0.05] border border-white/[0.12] backdrop-blur-[12px]",
                "hover:border-rail-purple/25 hover:bg-white/[0.06] transition-all duration-300",
              )}
              style={{ boxShadow: "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2.5 rounded-xl bg-rail-purple/[0.10] border border-rail-purple/25"
                  style={{ boxShadow: "0 0 24px rgba(110,24,179,0.10)" }}
                >
                  <ShieldCheck className="w-5 h-5 text-rail-purple" />
                </div>
                <span className="text-[10px] font-mono text-white/40">03 · VERIFY</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-grotesk">
                Verify Until Green
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Force the AI to write modern code until every behavioral test passes. Self-heal loop catches regressions automatically.
              </p>
              <div className="rounded-lg bg-[#0e0a14] border border-white/[0.12] p-3 font-mono text-[11px] space-y-1.5">
                <div className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-success shrink-0" />
                  <span className="text-success/80">checkout flow</span>
                  <span className="text-white/30 ml-auto">142ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-success shrink-0" />
                  <span className="text-success/80">auth redirect</span>
                  <span className="text-white/30 ml-auto">89ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-success shrink-0" />
                  <span className="text-success/80">email validation</span>
                  <span className="text-white/30 ml-auto">56ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-success shrink-0" />
                  <span className="text-success/80">nav persistence</span>
                  <span className="text-white/30 ml-auto">201ms</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rail-purple/[0.06] border border-rail-purple/15 text-[10px] font-mono text-rail-purple/60">
                  <span className="w-1 h-1 rounded-full bg-rail-purple/60" />
                  Self-Heal Loop
                </span>
              </div>
            </motion.div>
          </div>

          {/* Result banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-xl mx-auto rounded-lg border border-success/20 bg-success/[0.04] px-6 py-3.5 flex items-center justify-center gap-3"
            style={{ boxShadow: "0 0 30px rgba(0,255,136,0.06)" }}
          >
            <Check className="w-3.5 h-3.5 text-success shrink-0" />
            <p className="text-white/70 text-sm font-mono">
              100% Behavior Preserved
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 4: THE CONTROL PLANE — Contained Presentation
          FIX: Removed 3D transforms and floating annotations.
          Dashboard in a single presentation card. Clean and contained.
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container className="relative">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-rail-purple/50 mb-3">Visibility</p>
            <h2 className="text-display-m text-white mb-4">
              The Migration Control Plane
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto leading-relaxed">
              Full visibility into every autonomous operation — workspace
              changes, AI reasoning, self-heal cycles, and confidence scoring
              in one auditable dashboard.
            </p>
          </motion.div>

          {/* Presentation card — contains the dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: snap }}
            className="relative rounded-2xl border border-rail-purple/20 bg-white/[0.02] p-3 md:p-4 overflow-hidden"
            style={{ boxShadow: "0 30px 80px -20px rgba(110,24,179,0.12), 0 0 0 1px rgba(110,24,179,0.06)" }}
          >
            {/* HUD brackets inside the card */}
            <div
              className="absolute inset-3 md:inset-4 pointer-events-none hidden md:block"
              aria-hidden
            >
              <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-rail-purple/15" />
              <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-rail-purple/15" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l border-b border-rail-purple/15" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-rail-purple/15" />
            </div>

            <GlassBrainShowcase />
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 5: THE RESULT — Asymmetric Bento Grid
          FIX: Explicit CSS Grid with col-span. Every card has glass container.
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(110,24,179,0.03) 0%, transparent 70%)" }}
        />

        <Container className="relative max-w-5xl">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-rail-purple/50 mb-3">The Result</p>
            <h2 className="text-display-m text-white">
              Migration That Actually Works
            </h2>
          </motion.div>

          {/* Bento Grid — explicit grid with col-span */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* ── Dual-Stream Verification (full width) ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: snap }}
              className="col-span-1 md:col-span-2 rounded-xl p-8 lg:p-10 bg-white/[0.05] border border-white/[0.15] backdrop-blur-[12px] hover:border-rail-purple/25 transition-all duration-300"
              style={{ boxShadow: "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)" }}
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="p-3 rounded-xl bg-rail-purple/[0.10] border border-rail-purple/25"
                      style={{ boxShadow: "0 0 24px rgba(110,24,179,0.10)" }}
                    >
                      <Eye className="w-6 h-6 text-rail-purple" />
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
                {/* Micro-visual: dual browser comparison */}
                <div className="shrink-0 w-full lg:w-[280px] h-[160px] rounded-lg bg-[#0e0a14] border border-white/[0.15] overflow-hidden relative" style={{ boxShadow: "0 8px 30px -8px rgba(110,24,179,0.10)" }}>
                  <svg viewBox="0 0 280 160" className="w-full h-full" fill="none">
                    {/* Left frame: Legacy */}
                    <rect x="15" y="20" width="110" height="90" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    <rect x="15" y="20" width="110" height="16" rx="6" fill="rgba(255,255,255,0.04)" />
                    <circle cx="28" cy="28" r="3" fill="rgba(255,51,102,0.7)" />
                    <text x="40" y="31" fill="rgba(255,255,255,0.5)" fontSize="7" className="font-mono">Legacy</text>
                    <rect x="22" y="44" width="60" height="3" rx="1" fill="rgba(255,255,255,0.08)" />
                    <rect x="22" y="52" width="90" height="3" rx="1" fill="rgba(255,255,255,0.06)" />
                    <rect x="22" y="60" width="75" height="3" rx="1" fill="rgba(255,255,255,0.08)" />
                    <rect x="22" y="68" width="50" height="3" rx="1" fill="rgba(255,255,255,0.06)" />
                    <rect x="22" y="80" width="80" height="12" rx="3" fill="rgba(255,51,102,0.06)" stroke="rgba(255,51,102,0.2)" strokeWidth="0.5" />
                    <text x="36" y="89" fill="rgba(255,51,102,0.6)" fontSize="6" className="font-mono">Submit</text>
                    {/* Right frame: Modern */}
                    <rect x="155" y="20" width="110" height="90" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(110,24,179,0.25)" strokeWidth="1" />
                    <rect x="155" y="20" width="110" height="16" rx="6" fill="rgba(110,24,179,0.06)" />
                    <circle cx="168" cy="28" r="3" fill="rgba(0,255,136,0.7)" />
                    <text x="180" y="31" fill="rgba(255,255,255,0.5)" fontSize="7" className="font-mono">Modern</text>
                    <rect x="162" y="44" width="60" height="3" rx="1" fill="rgba(255,255,255,0.08)" />
                    <rect x="162" y="52" width="90" height="3" rx="1" fill="rgba(255,255,255,0.06)" />
                    <rect x="162" y="60" width="75" height="3" rx="1" fill="rgba(255,255,255,0.08)" />
                    <rect x="162" y="68" width="50" height="3" rx="1" fill="rgba(255,255,255,0.06)" />
                    <rect x="162" y="80" width="80" height="12" rx="3" fill="rgba(110,24,179,0.08)" stroke="rgba(110,24,179,0.25)" strokeWidth="0.5" />
                    <text x="176" y="89" fill="rgba(110,24,179,0.7)" fontSize="6" className="font-mono">Submit</text>
                    {/* Sync arrows */}
                    <motion.g animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
                      <line x1="130" y1="55" x2="150" y2="55" stroke="rgba(0,255,136,0.5)" strokeWidth="1" markerEnd="url(#arrowG)" />
                      <line x1="150" y1="65" x2="130" y2="65" stroke="rgba(0,255,136,0.5)" strokeWidth="1" markerEnd="url(#arrowG)" />
                    </motion.g>
                    <defs>
                      <marker id="arrowG" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                        <path d="M0,0 L6,2 L0,4" fill="rgba(0,255,136,0.5)" />
                      </marker>
                    </defs>
                    <rect x="80" y="125" width="120" height="20" rx="10" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.2)" strokeWidth="0.5" />
                    <text x="140" y="139" textAnchor="middle" fill="rgba(0,255,136,0.8)" fontSize="8" fontWeight="bold" className="font-mono">behavior-match: 100%</text>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* ── Automated Guardrails (half width) ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: snap }}
              className="col-span-1 rounded-xl p-7 pb-6 h-full bg-white/[0.05] border border-white/[0.15] backdrop-blur-[12px] hover:border-rail-purple/25 transition-all duration-300"
              style={{ boxShadow: "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2.5 rounded-xl bg-rail-purple/[0.10] border border-rail-purple/25"
                  style={{ boxShadow: "0 0 24px rgba(110,24,179,0.10)" }}
                >
                  <Shield className="w-5 h-5 text-rail-purple" />
                </div>
                <span className="text-[10px] font-mono text-white/40">02</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-grotesk">
                {CAPABILITIES[1]!.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                {CAPABILITIES[1]!.desc}
              </p>
              {/* Micro-visual: self-heal loop */}
              <div className="rounded-lg bg-[#0e0a14] border border-white/[0.12] p-3 overflow-hidden">
                <svg viewBox="0 0 240 80" className="w-full" fill="none">
                  {[
                    { x: 30, y: 40, label: "Error", color: "rgba(255,51,102,0.8)" },
                    { x: 90, y: 15, label: "Analyze", color: "rgba(110,24,179,0.7)" },
                    { x: 150, y: 40, label: "Fix", color: "rgba(110,24,179,0.7)" },
                    { x: 90, y: 65, label: "Test", color: "rgba(0,255,136,0.7)" },
                  ].map((node, idx) => (
                    <g key={idx}>
                      <circle cx={node.x} cy={node.y} r="12" fill={node.color.replace(/[\d.]+\)$/, "0.1)")} stroke={node.color} strokeWidth="1" />
                      <text x={node.x} y={node.y + 3} textAnchor="middle" fill={node.color} fontSize="6" fontWeight="bold" className="font-mono">{node.label}</text>
                    </g>
                  ))}
                  <path d="M42,32 Q60,10 78,18" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" markerEnd="url(#aw)" />
                  <path d="M102,18 Q120,10 138,32" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" markerEnd="url(#aw)" />
                  <path d="M138,50 Q120,70 102,62" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" markerEnd="url(#aw)" />
                  <path d="M78,62 Q60,70 42,50" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" markerEnd="url(#aw)" />
                  <path d="M162,40 L210,40" stroke="rgba(0,255,136,0.5)" strokeWidth="1.5" markerEnd="url(#ap)" />
                  <rect x="210" y="30" width="26" height="20" rx="4" fill="rgba(0,255,136,0.08)" stroke="rgba(0,255,136,0.3)" strokeWidth="0.5" />
                  <text x="223" y="44" textAnchor="middle" fill="rgba(0,255,136,0.9)" fontSize="7" fontWeight="bold" className="font-mono">Pass</text>
                  <motion.circle
                    r="3" fill="rgba(110,24,179,1)"
                    animate={{ cx: [30, 90, 150, 90, 30], cy: [40, 15, 40, 65, 40] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <defs>
                    <marker id="aw" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                      <path d="M0,0 L6,2 L0,4" fill="rgba(255,255,255,0.2)" />
                    </marker>
                    <marker id="ap" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                      <path d="M0,0 L6,2 L0,4" fill="rgba(0,255,136,0.5)" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </motion.div>

            {/* ── Vertical Slice Delivery (half width) ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: snap }}
              className="col-span-1 rounded-xl p-7 pb-6 h-full bg-white/[0.05] border border-white/[0.15] backdrop-blur-[12px] hover:border-rail-purple/25 transition-all duration-300"
              style={{ boxShadow: "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2.5 rounded-xl bg-rail-purple/[0.10] border border-rail-purple/25"
                  style={{ boxShadow: "0 0 24px rgba(110,24,179,0.10)" }}
                >
                  <Layers className="w-5 h-5 text-rail-purple" />
                </div>
                <span className="text-[10px] font-mono text-white/40">03</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-grotesk">
                {CAPABILITIES[2]!.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                {CAPABILITIES[2]!.desc}
              </p>
              {/* Micro-visual: migration progress bars */}
              <div className="rounded-lg bg-[#0e0a14] border border-white/[0.12] p-3 space-y-2.5">
                {[
                  { name: "Auth Module", pct: 100, color: "bg-success" },
                  { name: "Dashboard", pct: 75, color: "bg-rail-purple" },
                  { name: "Reports", pct: 40, color: "bg-rail-purple" },
                  { name: "Settings", pct: 10, color: "bg-rail-purple" },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-white/50">{item.name}</span>
                      <span className="text-[10px] font-mono text-white/30">{item.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        className={cn("h-full rounded-full", item.color)}
                        style={{ opacity: item.pct === 100 ? 0.9 : 0.7 }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Section 6: Bottom CTA ── */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Deep ambient glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 600px 400px at 50% 70%, rgba(110,24,179,0.06) 0%, transparent 70%)" }}
        />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="rounded-2xl border border-rail-purple/20 bg-rail-purple/[0.03] p-12 md:p-16 text-center relative overflow-hidden"
              style={{ boxShadow: "0 30px 80px -20px rgba(110,24,179,0.12), 0 0 0 1px rgba(110,24,179,0.06)" }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(110,24,179,0.08) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                <h2 className="text-display-m text-white mb-4">
                  Add the Migration Layer.
                </h2>
                <p className="text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
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
