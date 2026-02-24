"use client"

import { motion } from "framer-motion"
import { Container } from "components/ui"
import { SECTION_IDS } from "lib/constants"
import { COLLAPSES } from "data/collapses"
import { blurReveal } from "lib/animations"
import { cn } from "lib/utils"

/* ── Static Content ────────────────────────────────────────────────────── */

const DAY2 = {
  eyebrow: "The Problem",
  headline: "The 'Day 2' Hangover.",
  subhead:
    "Autonomous engineering is happening — agents are shipping real code to real production systems. But there's no infrastructure underneath to catch what breaks:",
}

/* ── Accent Colors ─────────────────────────────────────────────────────── */

const ACCENT = {
  "unerr": { color: "#00E5FF", rgb: "0,229,255", class: "text-electric-cyan", glow: "0 20px 50px -10px rgba(0,229,255,0.15), 0 0 0 1px rgba(255,255,255,0.06)" },
  "knowledge-graph": { color: "#00E5FF", rgb: "0,229,255", class: "text-electric-cyan", glow: "0 20px 50px -10px rgba(0,229,255,0.15), 0 0 0 1px rgba(255,255,255,0.06)" },
  necroma: { color: "#6E18B3", rgb: "110,24,179", class: "text-rail-purple", glow: "0 20px 50px -10px rgba(110,24,179,0.2), 0 0 0 1px rgba(255,255,255,0.06)" },
} as const

function getAccent(productId: string) {
  return ACCENT[productId as keyof typeof ACCENT] ?? ACCENT["unerr"]
}

const SUBTITLES = [
  "every session starts from zero",
  "syntax passes, behavior breaks",
  "dependency graph decaying",
]

/* ────────────────────────────────────────────────────────────────────────
   VISUAL 1 — Amnesia: Session log terminal
   ──────────────────────────────────────────────────────────────────────── */

function AmnesiaVisual() {
  const sessions = [
    { id: "S-001", action: "forgot architectural conventions", file: "auth/login.ts" },
    { id: "S-002", action: "reinvented existing patterns", file: "api/users.ts" },
    { id: "S-003", action: "alien code merged to main", file: "core/payments.ts" },
    { id: "S-004", action: "broke naming conventions", file: "lib/helpers.ts" },
    { id: "S-005", action: "duplicate utility created", file: "utils/format.ts" },
    { id: "S-006", action: "ignored team style guide", file: "hooks/useAuth.ts" },
  ]

  return (
    <div
      className="w-full h-full flex flex-col rounded-xl bg-[#0e0e14] border border-white/[0.15] overflow-hidden"
      style={{ boxShadow: "0 20px 50px -10px rgba(0,229,255,0.15), 0 0 0 1px rgba(255,255,255,0.06)" }}
    >
      {/* Terminal chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.08] bg-white/[0.03] shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[11px] font-mono text-white/40 uppercase tracking-wider">
          session-log · agent-context
        </span>
        <div className="ml-auto flex items-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-error"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[10px] font-mono text-error/80 uppercase tracking-wide">
            memory lost
          </span>
        </div>
      </div>

      {/* Session rows */}
      <div className="flex-1 p-4 lg:p-5 flex flex-col justify-center">
        {sessions.map((s, i) => (
          <motion.div
            key={s.id}
            className={cn(
              "flex items-center gap-4 font-mono text-[13px] py-3 px-4 rounded-lg",
              i % 2 === 0 && "bg-white/[0.02]",
            )}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white/30 w-12 shrink-0 tabular-nums">{s.id}</span>
            <span className="text-[#00FFFF]/60 w-36 shrink-0 truncate">{s.file}</span>
            <span className="text-white/60 flex-1">{s.action}</span>
            <motion.span
              className="text-error shrink-0 text-sm"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.3, duration: 0.3 }}
            >
              ✗
            </motion.span>
          </motion.div>
        ))}
        {/* Cursor */}
        <div className="flex items-center gap-4 font-mono text-[13px] py-3 px-4">
          <span className="text-white/30">{">"}</span>
          <motion.span
            className="inline-block w-2.5 h-5 bg-[#00FFFF]/70 rounded-sm"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, times: [0, 0.49, 0.5, 1] }}
          />
        </div>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────
   VISUAL 2 — Verification Collapse: Test runner
   ──────────────────────────────────────────────────────────────────────── */

function VerificationVisual() {
  const tests = [
    { name: "Syntax validation", pass: true, progress: 100, time: "0.12s" },
    { name: "Type checking", pass: true, progress: 100, time: "0.34s" },
    { name: "Unit tests (142/142)", pass: true, progress: 100, time: "1.21s" },
    { name: "Integration tests (28/28)", pass: true, progress: 100, time: "3.04s" },
    { name: "Behavioral parity", pass: false, progress: 38, time: "—" },
  ]

  return (
    <div
      className="w-full h-full flex flex-col rounded-xl bg-[#0e0e14] border border-white/[0.15] overflow-hidden"
      style={{ boxShadow: "0 20px 50px -10px rgba(110,24,179,0.2), 0 0 0 1px rgba(255,255,255,0.06)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.03] shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-2 text-[11px] font-mono text-white/40 uppercase tracking-wider">
            test-runner v2.1
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-mono text-success">4 passed</span>
          <span className="text-[11px] font-mono text-error">1 failed</span>
        </div>
      </div>

      {/* Tests */}
      <div className="flex-1 p-4 lg:p-5 flex flex-col justify-center space-y-4">
        {tests.map((test, i) => (
          <motion.div
            key={test.name}
            className="space-y-2"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 font-mono text-[13px]">
              {test.pass ? (
                <span className="text-success shrink-0 text-base">✓</span>
              ) : (
                <motion.span
                  className="text-error shrink-0 text-base"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  ✗
                </motion.span>
              )}
              <span className={cn("flex-1", test.pass ? "text-white/65" : "text-error/90 font-semibold")}>
                {test.name}
              </span>
              <span className={cn("text-xs shrink-0 tabular-nums", test.pass ? "text-white/30" : "text-error/50")}>
                {test.time}
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden ml-7">
              <motion.div
                className={cn("h-full rounded-full", test.pass ? "bg-success/50" : "bg-error/60")}
                initial={{ width: 0 }}
                whileInView={{ width: `${test.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.12 + 0.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fail summary */}
      <div className="px-5 py-3.5 border-t border-white/[0.06] bg-error/[0.04] shrink-0">
        <div className="flex items-center gap-2 font-mono text-xs">
          <motion.div
            className="w-2 h-2 rounded-full bg-error"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-error/80 font-semibold">FAIL</span>
          <span className="text-white/30">—</span>
          <span className="text-white/50">Behavioral regression detected in checkout flow</span>
        </div>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────
   VISUAL 3 — Context Rot: Dependency graph
   ──────────────────────────────────────────────────────────────────────── */

function ContextRotVisual() {
  const nodes = [
    { id: "app", x: 200, y: 30, label: "app" },
    { id: "auth", x: 65, y: 110, label: "auth" },
    { id: "api", x: 200, y: 110, label: "api" },
    { id: "payments", x: 335, y: 110, label: "payments" },
    { id: "db", x: 65, y: 195, label: "db" },
    { id: "cache", x: 200, y: 195, label: "cache" },
    { id: "broken", x: 335, y: 195, label: "broken", error: true },
  ]

  const edges: Array<{ from: string; to: string; broken?: boolean }> = [
    { from: "app", to: "auth" },
    { from: "app", to: "api" },
    { from: "app", to: "payments" },
    { from: "auth", to: "db" },
    { from: "api", to: "cache" },
    { from: "payments", to: "broken", broken: true },
  ]

  const getNode = (id: string) => nodes.find((n) => n.id === id)!

  return (
    <div
      className="w-full h-full flex flex-col rounded-xl bg-[#0e0e14] border border-white/[0.15] overflow-hidden"
      style={{ boxShadow: "0 20px 50px -10px rgba(0,229,255,0.15), 0 0 0 1px rgba(255,255,255,0.06)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-white/[0.03] shrink-0">
        <div className="w-2 h-2 rounded-full bg-electric-cyan" />
        <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
          dependency-graph · live
        </span>
        <div className="ml-auto flex items-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-warning"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <span className="text-[10px] font-mono text-warning/80 uppercase tracking-wide">
            drift detected
          </span>
        </div>
      </div>

      {/* Graph */}
      <div className="flex-1 flex items-center justify-center p-6">
        <svg viewBox="0 0 400 240" className="w-full max-h-full" fill="none">
          {/* Edges */}
          {edges.map((edge) => {
            const from = getNode(edge.from)
            const to = getNode(edge.to)
            return (
              <g key={`${edge.from}-${edge.to}`}>
                <line
                  x1={from.x} y1={from.y + 15} x2={to.x} y2={to.y - 3}
                  stroke={edge.broken ? "rgba(255,51,102,0.6)" : "rgba(255,255,255,0.15)"}
                  strokeWidth={1.5}
                  strokeDasharray={edge.broken ? "5 7" : "4 5"}
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values={edge.broken ? "0;24" : "0;-18"}
                    dur={edge.broken ? "1.2s" : "2.5s"}
                    repeatCount="indefinite"
                  />
                </line>
                {!edge.broken && (
                  <circle r="0" fill="rgba(0,255,255,0.8)">
                    <animate attributeName="cx" values={`${from.x};${to.x}`} dur="3s" repeatCount="indefinite" />
                    <animate attributeName="cy" values={`${from.y + 15};${to.y - 3}`} dur="3s" repeatCount="indefinite" />
                    <animate attributeName="r" values="0;2.5;2.5;0" dur="3s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            )
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            if (node.error) {
              return (
                <g key={node.id}>
                  <rect x={node.x - 44} y={node.y - 4} width={88} height={32} rx={8}
                    fill="rgba(255,51,102,0.1)" stroke="rgba(255,51,102,0.5)" strokeWidth={1.5}>
                    <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="1.6s" repeatCount="indefinite" />
                  </rect>
                  <text x={node.x} y={node.y + 17} textAnchor="middle" className="font-mono"
                    fill="rgba(255,51,102,0.9)" fontSize={12} fontWeight="bold">
                    <animate attributeName="opacity" values="1;0.5;1" dur="1.6s" repeatCount="indefinite" />
                    {node.label}
                  </text>
                  {/* Danger pulse */}
                  <rect x={node.x - 50} y={node.y - 10} width={100} height={44} rx={12}
                    fill="none" stroke="rgba(255,51,102,0.2)" strokeWidth={1}>
                    <animate attributeName="stroke-opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" />
                  </rect>
                </g>
              )
            }
            return (
              <g key={node.id}>
                <rect x={node.x - 44} y={node.y - 4} width={88} height={32} rx={8}
                  fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth={1} />
                <text x={node.x} y={node.y + 17} textAnchor="middle" className="font-mono"
                  fill="rgba(255,255,255,0.6)" fontSize={12}>
                  {node.label}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}

/* ── Visual registry ───────────────────────────────────────────────────── */

const VISUALS: Array<() => React.JSX.Element> = [AmnesiaVisual, VerificationVisual, ContextRotVisual]

/* ────────────────────────────────────────────────────────────────────────
   PANEL — One problem row (visual + text, alternating zig-zag)
   ──────────────────────────────────────────────────────────────────────── */

function ProblemPanel({
  collapse,
  index,
}: {
  collapse: (typeof COLLAPSES)[number]
  index: number
}) {
  const accent = getAccent(collapse.productId)
  const CollapseIcon = collapse.icon
  const Visual = VISUALS[index]!
  const isEven = index % 2 === 0
  const stepNum = String(index + 1).padStart(2, "0")

  const textSide = (
    <div className="w-full lg:w-1/2 flex flex-col justify-center lg:px-10 py-8 lg:py-0">
      {/* Step + icon */}
      <div className="flex items-center gap-4 mb-6">
        <span
          className="text-5xl font-grotesk font-bold leading-none select-none tabular-nums"
          style={{ color: `rgba(${accent.rgb}, 0.35)` }}
        >
          {stepNum}
        </span>
        <div
          className="p-3 rounded-xl border"
          style={{
            backgroundColor: `rgba(${accent.rgb}, 0.08)`,
            borderColor: `rgba(${accent.rgb}, 0.25)`,
            boxShadow: `0 0 20px rgba(${accent.rgb}, 0.1)`,
          }}
        >
          <CollapseIcon className={cn("w-6 h-6", accent.class)} aria-hidden />
        </div>
      </div>

      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 font-grotesk">
        {collapse.title}
      </h3>

      <p className="text-xs font-mono mb-4" style={{ color: `rgba(${accent.rgb}, 0.6)` }}>
        {SUBTITLES[index]}
      </p>

      <p className="text-white/60 leading-relaxed text-base lg:text-lg mb-6 max-w-lg">
        {collapse.description}
      </p>

      {/* Solved-by */}
      <span
        className="inline-flex items-center self-start gap-2 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
        style={{
          backgroundColor: `rgba(${accent.rgb}, 0.10)`,
          border: `1px solid rgba(${accent.rgb}, 0.35)`,
          color: accent.color,
          boxShadow: `0 0 20px rgba(${accent.rgb}, 0.12)`,
        }}
      >
        Solved by {collapse.solvedBy}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  )

  const visualSide = (
    <div className="w-full lg:w-1/2 relative">
      {/* Glow behind visual */}
      <div
        className="absolute -inset-6 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse 500px 400px at 50% 50%, rgba(${accent.rgb}, 0.08) 0%, transparent 70%)`,
        }}
      />
      <div className="relative h-[380px] lg:h-[500px]">
        <Visual />
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex flex-col gap-6 items-center py-12 lg:py-14",
        isEven ? "lg:flex-row" : "lg:flex-row-reverse",
      )}
    >
      {visualSide}
      {textSide}
    </motion.div>
  )
}

/* ────────────────────────────────────────────────────────────────────────
   MAIN EXPORT
   ──────────────────────────────────────────────────────────────────────── */

export function Day2Problem() {
  return (
    <section
      id={SECTION_IDS.day2Problem}
      className="bg-void-black bg-grid-pattern relative scroll-mt-20 overflow-hidden"
    >
      {/* ── Top divider ────────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div
          className="absolute inset-0 mx-auto max-w-4xl"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.06) 75%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 3s linear infinite",
          }}
        />
      </div>

      {/* ── Background glows ───────────────────────────────────────────── */}
      <div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,229,255,0.04) 0%, transparent 55%)" }}
      />
      <div
        className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(110,24,179,0.03) 0%, transparent 60%)" }}
      />

      {/* ── Noise texture ──────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* ── Section header ─────────────────────────────────────────────── */}
      <div className="relative pt-20 pb-2">
        <Container>
          <div className="text-center">
            <motion.p
              className="text-label text-electric-cyan mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {DAY2.eyebrow}
            </motion.p>
            <motion.h2
              variants={blurReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-display-m text-white mb-6"
            >
              {DAY2.headline}
            </motion.h2>
            <motion.p
              className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {DAY2.subhead}
            </motion.p>
          </div>
        </Container>
      </div>

      {/* ── Problem panels ─────────────────────────────────────────────── */}
      <Container>
        <div className="relative">
          {COLLAPSES.map((collapse, i) => (
            <div key={collapse.id}>
              {/* Separator between panels */}
              {i > 0 && (
                <div
                  className="h-px mx-auto max-w-3xl"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)",
                  }}
                />
              )}
              <ProblemPanel collapse={collapse} index={i} />
            </div>
          ))}
        </div>
      </Container>

      {/* ── Bottom divider ─────────────────────────────────────────────── */}
      <div className="relative pb-14 pt-4 flex flex-col items-center">
        <div className="h-8 w-px bg-gradient-to-b from-white/15 to-transparent" />
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-white/30"
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  )
}
