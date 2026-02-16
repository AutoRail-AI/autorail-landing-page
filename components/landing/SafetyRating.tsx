"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { Container } from "components/ui"
import { SECTION_IDS } from "lib/constants"
import { SAFETY_PILLARS } from "data/safety-pillars"
import { blurReveal, zigzagLeft, zigzagRight } from "lib/animations"
import { cn } from "lib/utils"

const SAFETY = {
  eyebrow: "Enterprise Infrastructure",
  headline: "Engineering Rigor for the Agentic Age.",
  subhead:
    "AutoRail keeps the human in the loop as the reviewer and orchestrator. Agents propose. Your team approves.",
}

/* ── Audit Trail Snippet ──────────────────────────────────────────────── */

function AuditTrailSnippet() {
  const rows = [
    { time: "14:32:01", agent: "cursor-agent", action: "modified auth/login.ts" },
    { time: "14:32:03", agent: "kap10", action: "pattern check: PASS" },
    { time: "14:32:04", agent: "cursor-agent", action: "refactored /api/users.ts" },
    { time: "14:32:05", agent: "kap10", action: "drift detected: WARNING" },
    { time: "14:32:07", agent: "cursor-agent", action: "created tests/login.spec.ts" },
  ]

  return (
    <div
      className="rounded-xl overflow-hidden bg-[#0e0e14] border border-white/[0.15] backdrop-blur-[12px]"
      style={{ boxShadow: "0 20px 50px -10px rgba(110,24,179,0.15), 0 0 0 1px rgba(255,255,255,0.05)" }}
    >
      {/* Terminal header bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.08] bg-white/[0.03]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/80" />
        </div>
        <span className="font-mono text-[11px] text-white/40 ml-2">change-ledger</span>
        <div className="ml-auto flex items-center gap-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-success"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-mono text-[9px] text-success/60 uppercase tracking-wider">rec</span>
        </div>
      </div>

      {/* Log rows */}
      <div className="p-4 font-mono text-xs">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "flex gap-3 py-2 px-2 rounded",
              i % 2 === 0 && "bg-white/[0.02]",
            )}
          >
            <span className="text-white/40 w-[62px] shrink-0">[{row.time}]</span>
            <span className="text-rail-purple brightness-125 w-[100px] shrink-0">[{row.agent}]</span>
            <span className="text-white/70">{row.action}</span>
          </motion.div>
        ))}
        {/* Blinking cursor */}
        <div className="flex gap-3 py-2 px-2">
          <motion.span
            className="text-white/60 font-mono"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, times: [0, 0.49, 0.5, 1] }}
          >
            ▊
          </motion.span>
        </div>
      </div>
    </div>
  )
}

/* ── Privacy Snippet ──────────────────────────────────────────────────── */

function PrivacySnippet() {
  return (
    <div
      className="rounded-xl overflow-hidden bg-[#0e0e14] border border-white/[0.15] backdrop-blur-[12px]"
      style={{ boxShadow: "0 20px 50px -10px rgba(110,24,179,0.15), 0 0 0 1px rgba(255,255,255,0.05)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.08] bg-white/[0.03]">
        <div className="w-1.5 h-1.5 rounded-full bg-rail-purple" />
        <span className="font-mono text-[11px] text-white/40">data-flow &middot; local</span>
      </div>

      {/* Network diagram */}
      <div className="p-6">
        <div className="flex items-center justify-between relative">
          {/* Your Code node */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-16 h-16 rounded-lg bg-white/[0.03] border border-white/20 backdrop-blur-[12px] flex items-center justify-center">
              <span className="text-sm font-mono text-white/70">&lt;/&gt;</span>
            </div>
            <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider">Your Code</span>
          </div>

          {/* SVG connections */}
          <svg
            className="absolute inset-0 w-full h-16 top-0"
            viewBox="0 0 400 64"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              {/* Animated dash for first connection */}
              <linearGradient id="line-green" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(0,255,136,0.6)" />
                <stop offset="100%" stopColor="rgba(0,229,255,0.6)" />
              </linearGradient>
            </defs>

            {/* First line: Code -> AutoRail (active, green/cyan) */}
            <motion.line
              x1="80" y1="32" x2="175" y2="32"
              stroke="url(#line-green)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              initial={{ strokeDashoffset: 40 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Traveling dot on first line */}
            <motion.circle
              r="3"
              fill="#00FF88"
              filter="drop-shadow(0 0 4px rgba(0,255,136,0.8))"
              initial={{ cx: 80, cy: 32 }}
              animate={{ cx: [80, 175], cy: 32 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Second line: AutoRail -> Cloud (blocked, red, dashed with gaps) */}
            <line
              x1="225" y1="32" x2="320" y2="32"
              stroke="rgba(255,51,102,0.3)"
              strokeWidth="1.5"
              strokeDasharray="4 8"
            />
            {/* Pulsing X in the middle */}
            <motion.g
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "272px 32px" }}
            >
              <line x1="266" y1="26" x2="278" y2="38" stroke="#FF3366" strokeWidth="2" strokeLinecap="round" />
              <line x1="278" y1="26" x2="266" y2="38" stroke="#FF3366" strokeWidth="2" strokeLinecap="round" />
            </motion.g>
          </svg>

          {/* AutoRail node */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div
              className="w-16 h-16 rounded-lg bg-rail-purple/10 border border-rail-purple/30 backdrop-blur-[12px] flex items-center justify-center"
              style={{ boxShadow: "0 0 20px rgba(110,24,179,0.15)" }}
            >
              <ShieldCheck className="w-6 h-6 text-rail-purple" />
            </div>
            <span className="text-[9px] font-mono text-rail-purple/70 uppercase tracking-wider">AutoRail</span>
          </div>

          {/* Cloud node */}
          <div className="flex flex-col items-center gap-2 z-10 opacity-30">
            <div className="w-16 h-16 rounded-lg bg-white/[0.03] border border-white/10 backdrop-blur-[12px] flex items-center justify-center">
              <span className="text-sm font-mono text-white/40">&#9729;</span>
            </div>
            <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider">Cloud</span>
          </div>
        </div>

        {/* Status line */}
        <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center gap-2">
          <span className="text-success text-xs">&#10003;</span>
          <span className="font-mono text-[11px] text-success/80">Zero data leaves your perimeter</span>
        </div>
      </div>
    </div>
  )
}

/* ── Explainability Snippet ───────────────────────────────────────────── */

function ExplainabilitySnippet() {
  const reasoningSteps = [
    "Session context matches 12 prior patterns in knowledge graph.",
    "Behavioral tests cover 94% of affected endpoints.",
  ]

  return (
    <div
      className="rounded-xl overflow-hidden bg-[#0e0e14] border border-white/[0.15] backdrop-blur-[12px]"
      style={{ boxShadow: "0 20px 50px -10px rgba(0,229,255,0.12), 0 0 0 1px rgba(255,255,255,0.05)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.08] bg-white/[0.03]">
        <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
        <span className="font-mono text-[11px] text-white/40">thought-signature &middot; live</span>
      </div>

      <div className="p-5 space-y-5">
        {/* Agent avatar row */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center shrink-0">
            <span className="text-[10px] font-mono font-bold text-electric-cyan">AI</span>
          </div>
          <div>
            <div className="text-xs font-mono text-white/80">cursor-agent</div>
            <div className="text-[10px] font-mono text-white/35">refactor: auth module</div>
          </div>
        </div>

        {/* Confidence meter */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Confidence</span>
            <span className="text-[11px] font-mono font-bold text-electric-cyan">85%</span>
          </div>
          <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full relative overflow-hidden"
              style={{
                background: "linear-gradient(90deg, rgba(0,229,255,0.4) 0%, rgba(0,229,255,0.7) 100%)",
              }}
            >
              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
          {/* Tick marks */}
          <div className="relative h-3 mt-1">
            {[40, 70, 85].map((mark) => (
              <div
                key={mark}
                className="absolute flex flex-col items-center"
                style={{ left: `${mark}%`, transform: "translateX(-50%)" }}
              >
                <div className="w-px h-1.5 bg-white/15" />
                <span className="text-[8px] font-mono text-white/20 mt-0.5">{mark}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reasoning chain */}
        <div className="space-y-2">
          {reasoningSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.2 }}
              className="flex items-start gap-2"
            >
              <motion.div
                className="w-0.5 self-stretch rounded-full shrink-0 mt-0.5"
                initial={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                whileInView={{ backgroundColor: "rgba(0,229,255,0.5)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.2 }}
              />
              <div className="font-mono text-[11px] text-white/50 leading-relaxed">
                <span className="text-electric-cyan/60 mr-1">&rarr;</span>
                {step}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom status */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-success" />
          <span className="font-mono text-[10px] text-success/80 uppercase tracking-wider">
            Approved &mdash; ready for review
          </span>
        </div>
      </div>
    </div>
  )
}

const SNIPPETS: Array<() => React.JSX.Element> = [AuditTrailSnippet, PrivacySnippet, ExplainabilitySnippet]

/* ── Main Component ───────────────────────────────────────────────────── */

export function SafetyRating() {
  return (
    <section
      id={SECTION_IDS.safetyRating}
      className="py-16 bg-void-black relative overflow-hidden scroll-mt-20"
    >
      {/* ── Section background effects ──────────────────────────────── */}

      {/* Upper radial purple glow */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(110,24,179,0.07) 0%, transparent 70%)" }}
      />
      {/* Lower offset radial purple glow for depth */}
      <div
        className="absolute bottom-32 left-1/3 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(110,24,179,0.04) 0%, transparent 70%)" }}
      />
      {/* Faint horizontal scan lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)",
        }}
      />

      <Container className="relative">
        {/* ── Section Header ─────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <p className="text-label text-rail-purple mb-3">
            {SAFETY.eyebrow}
          </p>

          <div className="flex items-center justify-center gap-4 mb-4">
            {/* Left decorative line */}
            <div className="hidden md:block w-16 h-px bg-gradient-to-r from-transparent to-rail-purple/30" />

            <motion.h2
              variants={blurReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-display-m text-white"
              style={{ textShadow: "0 0 40px rgba(110,24,179,0.25)" }}
            >
              {SAFETY.headline}
            </motion.h2>

            {/* Right decorative line */}
            <div className="hidden md:block w-16 h-px bg-gradient-to-l from-transparent to-rail-purple/30" />
          </div>

          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            {SAFETY.subhead}
          </p>
        </div>

        {/* ── Zig-zag rows ───────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto space-y-0">
          {SAFETY_PILLARS.map((pillar, i) => {
            const isOdd = i % 2 === 0
            const Snippet = SNIPPETS[i]!
            const pillarNumber = String(i + 1).padStart(2, "0")

            return (
              <div key={pillar.id}>
                {/* Gradient separator between rows */}
                {i > 0 && (
                  <div
                    className="h-px"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, rgba(110,24,179,0.2) 50%, transparent 100%)",
                    }}
                  />
                )}

                <motion.div
                  variants={isOdd ? zigzagLeft : zigzagRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={cn(
                    "flex flex-col items-center gap-10 py-12",
                    isOdd ? "lg:flex-row" : "lg:flex-row-reverse",
                  )}
                >
                  {/* UI Snippet — full 50% width with colored glow */}
                  <div className="w-full lg:w-1/2 relative">
                    {/* Glow behind snippet */}
                    <div
                      className="absolute -inset-8 pointer-events-none"
                      style={{
                        background: "radial-gradient(ellipse 400px 300px at 50% 50%, rgba(110,24,179,0.08) 0%, transparent 70%)",
                      }}
                    />
                    <div className="relative">
                      <Snippet />
                    </div>
                  </div>

                  {/* Text content — vertically centered */}
                  <div className="w-full lg:w-1/2 lg:px-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5">
                      {/* Numbered badge */}
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                        <span className="font-mono text-[10px] text-white/30">{pillarNumber}</span>
                      </div>
                      {/* Icon with glow ring */}
                      <div
                        className="inline-flex p-3 rounded-lg bg-rail-purple/10 text-rail-purple"
                        style={{ boxShadow: "0 0 15px rgba(110,24,179,0.15), inset 0 0 15px rgba(110,24,179,0.05)" }}
                      >
                        <pillar.icon className="w-6 h-6" aria-hidden />
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 font-grotesk">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
