"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  Brain,
  Building2,
  Check,
  Copy,
  Database,
  FileText,
  Lock,
  Rocket,
  RotateCcw,
  Server,
  Shield,
  ShieldCheck,
  Trash2,
  Users,
  Zap,
} from "lucide-react"
import posthog from "posthog-js"
import {
  Container,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "components/ui"
import { WaitlistForm } from "components/shared"
import { UNERR } from "data/products"
import { blurReveal } from "lib/animations"
import { cn } from "lib/utils"

/* ─────────────────────────────────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────────────────────────────────── */

const PROBLEM_STAGES = [
  {
    title: "The AI Doesn\u2019t Know Your Codebase",
    subtitle: "The Alien Code Problem",
    description:
      "It generates code that technically compiles but ignores your domain language, violates your naming conventions, and misses the unwritten architectural rules your senior engineers carry in their heads.",
  },
  {
    title: "Nobody Sees the Blast Radius",
    subtitle: "The Silent Breakage",
    description:
      "A function gets quietly renamed. Three downstream services break. The AI had no way to know that function was called in 47 places across your payment flow.",
  },
  {
    title: "Rewinding Is Manual and Painful",
    subtitle: "The Loop of Death",
    description:
      "The AI confidently broke something. Now you\u2019re hunting through git history trying to figure out what changed, why, and what to restore. The AI breaks it again. You burn hours going in circles.",
  },
  {
    title: "Security Becomes an Afterthought",
    subtitle: "The Tuesday Incident",
    description:
      "The AI writes a perfectly functional database query \u2014 inside a request handler loop, spawning N+1 queries per user. Or it logs a response payload containing user PII. The code works. The incident happens on a Tuesday at 2am.",
  },
]

const LAYERS = [
  {
    num: "01",
    title: "Institutional Memory",
    subtitle: "The Brain",
    icon: Brain,
    detail: "Your AI agent finally knows your codebase.",
    description:
      "unerr reads your entire codebase and generates plain-English justifications for every entity: what it does, why it exists, which business domain it belongs to, what patterns it implements. Your AI agent consults this map before writing code.",
    replaces:
      "The tribal knowledge only your senior engineers have. The README that\u2019s six months out of date.",
  },
  {
    num: "02",
    title: "Real-Time Sync",
    subtitle: "The Nervous System",
    icon: Zap,
    detail: "30 seconds. Always current.",
    description:
      "Every push triggers an incremental re-index: only changed files, cascading re-analysis to everything the changed code affects \u2014 within 30 seconds. Your AI agent always has current knowledge. No manual syncing.",
    replaces: "Stale context. Manual re-indexing. Out-of-date documentation.",
  },
  {
    num: "03",
    title: "Prompt Ledger & Rewind",
    subtitle: "The Black Box",
    icon: RotateCcw,
    detail: "Every AI decision, tracked and reversible.",
    description:
      "Every AI change is tracked: the prompt, the files touched, the result. When the AI breaks something: click Rewind to restore, unerr auto-generates an Anti-Pattern Rule so the mistake never repeats, and a Circuit Breaker halts the AI if it makes the same breaking change 4+ times.",
    replaces:
      "Frantically searching git history. The pit of despair when the AI destroys a working function for the fifth time.",
  },
  {
    num: "04",
    title: "Pattern Enforcement",
    subtitle: "The Constitution",
    icon: ShieldCheck,
    detail: "Deterministic rules. Not LLM vibes.",
    description:
      "unerr mines your codebase for recurring patterns and gives each an adherence rate. High-confidence patterns become enforceable rules at three levels: Suggest, Warn, or Block. The engine uses fast structural AST scan \u2192 semantic enrichment via knowledge graph.",
    replaces:
      "Sending your diff to an LLM and hoping it catches something useful.",
  },
]

const CAPABILITIES = [
  {
    icon: Shield,
    title: "Blast Radius Visualization",
    description:
      "Before any change merges, unerr traverses the call graph N hops outward from the changed function to every API boundary and UI component it reaches.",
    highlight:
      "\u201CThis change touches 47 callers. 3 of them are on your payment flow.\u201D",
  },
  {
    icon: ShieldCheck,
    title: "The Spaghetti Shield",
    description:
      "Automated PR review: Semgrep rules \u2192 knowledge graph impact analysis \u2192 line-level review comments for BLOCKER items only. Low-risk PRs get automatic Semantic LGTM.",
    highlight: "Click-to-Commit fixes via GitHub suggestion blocks.",
  },
  {
    icon: RotateCcw,
    title: "Rewind & Circuit Breaker",
    description:
      "One click restores to last known-good state. Auto-generates anti-pattern rules. Shadow preview before commit. Circuit breaker halts hallucination loops.",
    highlight: "4+ same failures in 10 min \u2192 automatic halt.",
  },
  {
    icon: Database,
    title: "Architectural Drift Detection",
    description:
      "When a file changes, unerr computes semantic drift \u2014 the function that was \u201Cvalidates user session\u201D silently becoming \u201Calso transforms response payloads.\u201D",
    highlight: "Drift Alerts \u2192 Git blame \u2192 GitHub issues, automatically.",
  },
  {
    icon: FileText,
    title: "Auto-Generated ADRs & Glossary",
    description:
      "When a PR merges significant new topology, unerr auto-generates and commits an Architecture Decision Record. Also maintains a live Domain Glossary.",
    highlight: "Your ubiquitous language, extracted and searchable.",
  },
]

const GUARDRAIL_TABS = [
  { id: "security", label: "Security & Compliance", icon: Shield },
  { id: "data", label: "Data Safety", icon: Database },
  { id: "reliability", label: "Production Reliability", icon: Zap },
  { id: "architecture", label: "Architecture Integrity", icon: Building2 },
  { id: "multi-agent", label: "Multi-Agent Governance", icon: Users },
] as const

const GUARDRAILS: Record<string, { title: string; description: string }[]> = {
  security: [
    { title: "PII Exfiltration (Telemetry Trap)", description: "Taint analysis from PII-tagged entities to unprotected logging sinks. Catches the AI when it accidentally logs a user\u2019s email alongside a debug payload." },
    { title: "Cloud IAM Privilege Escalation", description: "Detects when new infrastructure code grants wildcard permissions or escalates roles beyond least privilege." },
    { title: "Toxic Supply Chain", description: "Flags new dependency additions with anomalous version patterns or known supply chain risk indicators." },
    { title: "Data Residency Violations", description: "Detects cross-region data flows that would violate GDPR or data sovereignty requirements." },
    { title: "Trade Secret Exfiltration", description: "Monitors for code paths where proprietary business logic is exposed via unsecured APIs or logging." },
  ],
  data: [
    { title: "Destructive Schema Drift", description: "Catches column drops/renames in migration files without a corresponding safe migration script." },
    { title: "Cache Desync Detection", description: "Flags when a data model changes but its cache layer isn\u2019t invalidated." },
    { title: "State Machine Orphaning", description: "Detects when a schema change makes existing state machine transitions unreachable." },
    { title: "Ghost Migration Detection", description: "Finds database migrations committed but never applied to a tracked environment." },
  ],
  reliability: [
    { title: "N+1 Query Detection", description: "AST rule: database call inside a loop body. The most common performance regression in AI-generated data access code." },
    { title: "Connection Pool Exhaustion", description: "Detects infrastructure client instantiation (Prisma, Redis) inside request handler scope." },
    { title: "Idempotency Risk", description: "Flags webhook/trigger handlers that mutate state without an idempotency key or distributed lock." },
    { title: "Rate Limit Blindness", description: "Detects external API calls inside unbounded loops without backoff logic." },
    { title: "Zero-Downtime Migration Violations", description: "Blocks deployments where schema changes don\u2019t follow a safe migration path." },
    { title: "Mock Theater Detection", description: "Identifies test files where the mock-to-assertion ratio means the tests aren\u2019t testing anything real." },
  ],
  architecture: [
    { title: "Bounded Context Bleed", description: "Catches domain entities crossing service boundaries they shouldn\u2019t. Your payment module shouldn\u2019t import your user notification internals." },
    { title: "Trust Boundary Violations", description: "Graph traversal from user-input sources to database/API sinks, validating every path passes through auth/validation." },
    { title: "Business Logic Invariants", description: "Enforces that financial, inventory, and critical mutations are always preceded by required validation." },
    { title: "Resilience Scoring (NFR Drift)", description: "Per-entity score: does this external call include retry/timeout/circuit-breaker patterns?" },
    { title: "Event Blackhole Detection", description: "Identifies domain events published but with no registered consumer." },
    { title: "Zombie Infrastructure", description: "Detects provisioned cloud resources with no active code references." },
  ],
  "multi-agent": [
    { title: "Swarm Deadlock (Agent-on-Agent Collision)", description: "When multiple AI agents work the same codebase simultaneously, detects conflicting edits and deadlock patterns before merge." },
    { title: "Context Bankruptcy", description: "Detects when an agent operates with context so stale its suggestions will conflict with recent changes \u2014 halts before damage." },
    { title: "Idiomatic Drift", description: "Tracks whether AI-generated code drifts from your team\u2019s established framework patterns, even when syntactically valid." },
    { title: "Cognitive Debt Score", description: "Measures the rewind-to-commit ratio per feature area, surfacing where human-AI alignment is breaking down." },
  ],
}

const ROLE_CARDS = [
  {
    icon: Rocket,
    role: "Indie Hacker / Vibe Coder",
    description:
      "You\u2019re building a massive SaaS by yourself with AI. unerr is the Senior Staff Engineer who ensures your app won\u2019t collapse at 10,000 users.",
  },
  {
    icon: Users,
    role: "Startup Tech Lead (10\u201350 eng)",
    description:
      "You\u2019re the only person who knows the codebase rules. unerr encodes those rules so your AI agents respect them \u2014 even when you\u2019re not in the room.",
  },
  {
    icon: Building2,
    role: "Engineering Manager (50\u2013200 eng)",
    description:
      "AI code is flowing into your monorepo from every direction. unerr is your governance layer: auditable, enforceable, non-intrusive.",
  },
  {
    icon: Shield,
    role: "CTO / VP Engineering",
    description:
      "You need proof that AI adoption isn\u2019t silently rotting your architecture or creating security liabilities. unerr gives you that evidence.",
  },
  {
    icon: Server,
    role: "SRE / Platform Engineer",
    description:
      "unerr catches N+1 queries, connection pool exhaustion, missing retry logic, and zero-downtime violations before they page you at 2am.",
  },
  {
    icon: Lock,
    role: "DevSecOps / Security",
    description:
      "unerr detects PII exfiltration, IAM privilege escalation, supply chain anomalies, and data residency violations \u2014 automatically.",
  },
]

const PRICING_TIERS = [
  {
    name: "Launch",
    audience: "Indie devs, small teams",
    price: "Free",
    priceNote: "",
    capabilities: [
      "MCP integration",
      "Knowledge graph",
      "Rewind & circuit breaker",
      "Blast radius analysis",
      "Auto-generated ADRs",
      "PR review (Spaghetti Shield)",
    ],
    cta: "Get Started",
    ctaEvent: "launch",
    emphasized: false,
  },
  {
    name: "Growth",
    audience: "Scaling startups",
    price: "TBD",
    priceNote: "/month",
    capabilities: [
      "Everything in Launch",
      "Trust boundary analysis",
      "Resilience scoring",
      "N+1 detection",
      "API contract breakage",
      "Cognitive debt score",
    ],
    cta: "Join Waitlist",
    ctaEvent: "growth",
    emphasized: true,
  },
  {
    name: "Scale",
    audience: "Enterprise / regulated",
    price: "Contact us",
    priceNote: "",
    capabilities: [
      "Everything in Growth",
      "Full security suite (PII, IAM, supply chain)",
      "Data residency enforcement",
      "Multi-agent governance",
      "Bounded context enforcement",
      "Dedicated support",
    ],
    cta: "Talk to Us",
    ctaEvent: "scale",
    emphasized: false,
  },
]

const TESTIMONIALS = [
  {
    text: "unerr just stopped my Cursor agent from dropping a prod column. I\u2019m never turning this off.",
    handle: "@dev_sarah",
    name: "Sarah K.",
  },
  {
    text: "It caught an N+1 query inside my checkout loop. At 1k concurrent users that would have been 12k unnecessary DB calls per minute.",
    handle: "@alexbuilds",
    name: "Alex M.",
  },
  {
    text: "The blast radius visualization alone is worth it. I had no idea renaming that utility function would touch 47 callers.",
    handle: "@jcodes_",
    name: "Jordan C.",
  },
]

const TRUST_PILLARS = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "Encrypted in transit (TLS 1.3) and at rest (AES-256). We process only the structural metadata needed to build your knowledge graph.",
  },
  {
    icon: Server,
    title: "SOC 2 Path",
    description:
      "Audit logs, strict access controls, and enterprise-grade retention policies. Single-tenant data isolation.",
  },
  {
    icon: Trash2,
    title: "Data Deletion Guarantee",
    description:
      "Disconnect your repo, and your data is permanently purged within 24 hours. No model training on your code \u2014 ever.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Does unerr slow down my AI?",
    answer:
      "No. unerr operates on the MCP channel with guardrail latency under 200ms. Your coding flow feels identical; the output is dramatically better.",
  },
  {
    question: "How is unerr different from CodeRabbit or other PR review bots?",
    answer:
      "PR bots react AFTER the code is written. unerr injects your architecture into the agent\u2019s context BEFORE code is written \u2014 prevention, not reaction. And our enforcement uses deterministic AST matching ($0 token cost, 100% precision), not \u201Csend the diff to an LLM and hope.\u201D",
  },
  {
    question: "Can I still prompt my AI directly?",
    answer:
      "Absolutely. You can bypass unerr, override suggestions, or turn it off for a session. You\u2019re always in control.",
  },
  {
    question: "My code is proprietary. Is it safe?",
    answer:
      "Yes. Single-tenant data isolation. We never train models on your code. Disconnect, and your data is permanently purged within 24 hours.",
  },
  {
    question: "Does it work with my IDE?",
    answer:
      "If your agent supports the Model Context Protocol (MCP) \u2014 Cursor, Claude Code, Windsurf, Copilot, Devin, OpenHands \u2014 unerr works out of the box. One URL, any agent.",
  },
  {
    question: "How long does setup take?",
    answer:
      "60 seconds. Run npx @autorail/unerr, authorize GitHub, and unerr auto-detects your IDE, connects your repo, and surfaces your first architectural insights immediately.",
  },
  {
    question:
      "What about teams with multiple AI agents working simultaneously?",
    answer:
      "unerr\u2019s Multi-Agent Governance detects conflicting edits, stale context, and swarm deadlocks before they merge. It\u2019s the only tool built for fleets of AI agents committing code simultaneously.",
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


/* ─────────────────────────────────────────────────────────────────────────────
   Layers Section — Sticky Visual + Scrolling Steps (replaces Lifecycle)
   ───────────────────────────────────────────────────────────────────────────── */

function LayersSection() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    stepRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActive(i)
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section className="py-24 relative overflow-x-clip">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container className="relative max-w-6xl">
        {/* Header */}
        <motion.div
          variants={blurReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-electric-cyan/50 mb-3">
            How It Works
          </p>
          <h2 className="text-display-m text-white mb-4">
            Four layers of intelligence. One MCP connection.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            unerr connects to your repo &mdash; GitHub, GitLab, Bitbucket, or
            even a local directory &mdash; and builds a living knowledge graph
            of your entire codebase. On top of that graph, four overlapping
            layers of intelligence protect your architecture.
          </p>
        </motion.div>

        {/* ── Desktop: sticky visual + scrolling steps ── */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* LEFT — Sticky visual panel */}
          <div className="sticky top-24 h-[calc(100vh-8rem)] flex items-center">
            <div
              className="w-full rounded-2xl bg-[#0e0e14] border border-white/[0.10] overflow-hidden relative"
              style={{
                boxShadow: "0 24px 80px -16px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px rgba(0,229,255,0.04)",
                minHeight: "420px",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.4, ease: snap }}
                  className="absolute inset-0"
                >
                  <LayerVisual step={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT — Scrolling step list */}
          <div className="flex flex-col py-[40vh]">
            {LAYERS.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => { stepRefs.current[i] = el }}
                className="min-h-[50vh] flex items-center"
              >
                <div
                  className={cn(
                    "w-full rounded-xl border p-5 transition-all duration-500 cursor-default",
                    active === i
                      ? "bg-white/[0.05] border-electric-cyan/20 shadow-[0_0_30px_rgba(0,229,255,0.06)]"
                      : "bg-transparent border-white/[0.06] opacity-40",
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={cn(
                        "p-2 rounded-lg border transition-all duration-500",
                        active === i
                          ? "bg-electric-cyan/[0.10] border-electric-cyan/25"
                          : "bg-white/[0.03] border-white/[0.08]",
                      )}
                    >
                      <step.icon className={cn("w-4 h-4 transition-colors duration-500", active === i ? "text-electric-cyan" : "text-white/30")} />
                    </div>
                    <span className="text-[11px] font-mono text-electric-cyan/40">{step.num}</span>
                  </div>
                  <h3 className="text-base font-bold text-white font-grotesk mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[11px] font-mono text-electric-cyan/50 uppercase tracking-wider mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile: stacked cards ── */}
        <div className="flex flex-col gap-6 lg:hidden">
          {LAYERS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: snap }}
              className="rounded-xl bg-white/[0.03] border border-white/[0.12] overflow-hidden"
              style={{ boxShadow: "0 12px 40px -10px rgba(0,0,0,0.4)" }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4">
                <div className="p-2 rounded-lg bg-electric-cyan/[0.10] border border-electric-cyan/25">
                  <step.icon className="w-4 h-4 text-electric-cyan" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-electric-cyan/40">{step.num}</span>
                    <h3 className="text-base font-bold text-white font-grotesk">{step.title}</h3>
                  </div>
                  <p className="text-[10px] font-mono text-electric-cyan/50 uppercase tracking-wider">{step.subtitle}</p>
                </div>
              </div>
              {/* Visual */}
              <div className="px-4 pb-4">
                <div className="rounded-lg bg-[#0e0e14] border border-white/[0.10] overflow-hidden" style={{ minHeight: "220px" }}>
                  <LayerVisual step={i} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ─── Large-format visuals for each layer ─── */
function LayerVisual({ step }: { step: number }) {
  switch (step) {
    /* ── Layer 01: Blueprint Dashboard ── */
    case 0:
      return (
        <div className="h-full flex flex-col">
          <div className="px-5 py-3 border-b border-white/[0.06] flex items-center gap-2">
            <Brain className="w-3.5 h-3.5 text-electric-cyan/50" />
            <span className="text-[11px] font-mono text-white/30">institutional-memory · knowledge graph</span>
          </div>
          <div className="flex-1 p-5 lg:p-6">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-wider mb-4">Business Swimlane Map</p>
            {/* Swimlanes */}
            <div className="flex flex-col gap-3">
              {[
                { domain: "Checkout", entities: ["PaymentForm", "CartService", "StripeAdapter"], confidence: "94%" },
                { domain: "Auth", entities: ["SessionManager", "OAuthProvider", "TokenStore"], confidence: "91%" },
                { domain: "Notifications", entities: ["EmailQueue", "WebhookDispatcher", "Templates"], confidence: "87%" },
              ].map((lane, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="rounded-lg bg-white/[0.02] border border-white/[0.06] p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-electric-cyan/70 font-bold">{lane.domain}</span>
                    <span className="text-[10px] font-mono text-success/60">{lane.confidence}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {lane.entities.map((entity) => (
                      <span key={entity} className="px-2 py-0.5 rounded bg-electric-cyan/[0.06] border border-electric-cyan/15 text-[9px] font-mono text-electric-cyan/60">
                        {entity}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] font-mono text-white/15 mt-3 text-center"
            >
              Living map \u00B7 updated on every push
            </motion.p>
          </div>
        </div>
      )

    /* ── Layer 02: Sync Pipeline ── */
    case 1:
      return (
        <div className="h-full flex flex-col">
          <div className="px-5 py-3 border-b border-white/[0.06] flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-electric-cyan/50" />
            <span className="text-[11px] font-mono text-white/30">real-time-sync \u00B7 pipeline</span>
          </div>
          <div className="flex-1 p-5 lg:p-6 flex flex-col justify-center">
            <div className="flex flex-col gap-3">
              {[
                { label: "GitHub Webhook", status: "received", color: "text-white/50", bg: "bg-white/[0.02]", border: "border-white/[0.06]" },
                { label: "File Diff Analysis", status: "3 files changed", color: "text-white/50", bg: "bg-white/[0.02]", border: "border-white/[0.06]" },
                { label: "Incremental Re-index", status: "processing", color: "text-electric-cyan", bg: "bg-electric-cyan/[0.03]", border: "border-electric-cyan/[0.10]" },
                { label: "Cascade Analysis", status: "47 entities affected", color: "text-electric-cyan", bg: "bg-electric-cyan/[0.03]", border: "border-electric-cyan/[0.10]" },
                { label: "Graph Updated", status: "complete", color: "text-success", bg: "bg-success/[0.03]", border: "border-success/[0.10]" },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className={cn("flex items-center gap-3 rounded-md px-4 py-2.5 border", step.bg, step.border)}
                >
                  <span className="text-[10px] font-mono text-white/30 w-4">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="text-xs font-mono text-white/50 flex-1">{step.label}</span>
                  <span className={cn("text-[10px] font-mono font-bold", step.color)}>{step.status}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-4 flex justify-center"
            >
              <motion.span
                className="px-4 py-2 rounded-lg bg-electric-cyan/[0.08] border border-electric-cyan/20 text-sm font-mono text-electric-cyan/80 font-bold"
                animate={{ boxShadow: ["0 0 0px rgba(0,229,255,0)", "0 0 16px rgba(0,229,255,0.15)", "0 0 0px rgba(0,229,255,0)"] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                30s
              </motion.span>
            </motion.div>
          </div>
        </div>
      )

    /* ── Layer 03: Rewind + Circuit Breaker ── */
    case 2:
      return (
        <div className="h-full flex flex-col">
          <div className="px-5 py-3 border-b border-white/[0.06] flex items-center gap-2">
            <RotateCcw className="w-3.5 h-3.5 text-electric-cyan/50" />
            <span className="text-[11px] font-mono text-white/30">prompt-ledger \u00B7 rewind</span>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
            {/* Timeline */}
            <div className="p-5 lg:p-6 border-b md:border-b-0 md:border-r border-white/[0.06]">
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-wider mb-4">Version Timeline</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "v1.2", status: "good", time: "2h ago" },
                  { label: "v1.3", status: "good", time: "1h ago", restore: true },
                  { label: "v1.4", status: "bad", time: "45m ago" },
                  { label: "v1.5", status: "bad", time: "30m ago" },
                  { label: "v1.6", status: "bad", time: "20m ago" },
                  { label: "v1.7", status: "bad", time: "now" },
                ].map((state, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className={cn("w-3 h-3 rounded-full shrink-0", state.status === "good" ? "bg-success" : "bg-red-400")} />
                    <span className={cn("text-sm font-mono flex-1", state.status === "good" ? "text-success/60" : "text-red-400/40")}>{state.label}</span>
                    <span className="text-[10px] font-mono text-white/15">{state.time}</span>
                    {state.restore && (
                      <motion.span
                        className="text-[10px] font-mono text-electric-cyan/70 px-2.5 py-1 rounded-md bg-electric-cyan/[0.08] border border-electric-cyan/20"
                        animate={{ boxShadow: ["0 0 0px rgba(0,229,255,0)", "0 0 10px rgba(0,229,255,0.12)", "0 0 0px rgba(0,229,255,0)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Restore
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Circuit Breaker */}
            <div className="p-5 lg:p-6">
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-wider mb-4">Circuit Breaker</p>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-lg bg-red-400/[0.05] border border-red-400/15 p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2.5 h-2.5 rounded-full bg-red-400"
                  />
                  <span className="text-xs font-mono font-bold text-red-400/80">HALTED</span>
                </div>
                <p className="text-[10px] font-mono text-white/40 leading-relaxed">
                  Same failure pattern detected 4x in 10 min.
                  Agent halted. Anti-pattern rule generated.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-3 rounded-lg bg-electric-cyan/[0.03] border border-electric-cyan/10 p-3"
              >
                <p className="text-[10px] font-mono text-electric-cyan/60">
                  <span className="text-electric-cyan/80 font-bold">NEW RULE:</span> Block db.users.findMany() inside forEach loops
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      )

    /* ── Layer 04: Us vs. Them ── */
    case 3:
      return (
        <div className="h-full flex flex-col">
          <div className="px-5 py-3 border-b border-white/[0.06] flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-electric-cyan/50" />
            <span className="text-[11px] font-mono text-white/30">pattern-enforcement \u00B7 comparison</span>
          </div>
          <div className="flex-1 grid grid-cols-2 divide-x divide-white/[0.06]">
            {/* Left: Standard PR Bot */}
            <div className="p-4 lg:p-5">
              <p className="text-[10px] font-mono text-red-400/60 uppercase tracking-wider mb-4 font-bold">Standard PR Bot</p>
              <div className="flex flex-col gap-2">
                {[
                  "1. Agent writes code",
                  "2. Opens PR",
                  "3. Wait 5 min for LLM review",
                  "4. Get 15 subjective comments",
                  "5. Go back to IDE and fix",
                  "6. Re-push. Wait again.",
                ].map((step, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.06 }}
                    className="text-[11px] font-mono text-white/30 leading-relaxed"
                  >
                    {step}
                  </motion.p>
                ))}
              </div>
            </div>
            {/* Right: unerr */}
            <div className="p-4 lg:p-5">
              <p className="text-[10px] font-mono text-electric-cyan/70 uppercase tracking-wider mb-4 font-bold">unerr</p>
              <div className="flex flex-col gap-2">
                {[
                  "1. Agent checks rules via MCP",
                  "2. Writes compliant code",
                  "3. PR merges cleanly",
                ].map((step, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                    className="text-[11px] font-mono text-electric-cyan/80 leading-relaxed"
                  >
                    {step}
                  </motion.p>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-3 pt-3 border-t border-electric-cyan/10"
                >
                  <p className="text-[11px] font-mono text-success/70 font-bold">
                    <Check className="w-3 h-3 inline mr-1" />
                    $0 tokens. &lt;200ms. Done.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      )

    default:
      return null
  }
}


/* ─────────────────────────────────────────────────────────────────────────────
   Terminal CTA — npx copy button
   ───────────────────────────────────────────────────────────────────────────── */

function TerminalCTA() {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText("npx @autorail/unerr").then(() => {
      setCopied(true)
      posthog.capture("terminal_command_copied", { command: "npx @autorail/unerr" })
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-3 px-5 py-3 rounded-full cursor-pointer",
        "bg-[#0e0e14] border border-white/[0.15]",
        "hover:shadow-[0_0_20px_rgba(0,229,255,0.12)] hover:border-electric-cyan/25",
        "transition-all duration-300 group/term",
      )}
    >
      <span className="text-white/40 font-mono text-sm">$</span>
      <span className="text-electric-cyan font-mono font-medium text-sm">
        npx @autorail/unerr
      </span>
      {copied ? (
        <Check className="w-4 h-4 text-success" />
      ) : (
        <Copy className="w-4 h-4 text-white/30 group-hover/term:text-electric-cyan/60 transition-colors" />
      )}
    </button>
  )
}


/* ─────────────────────────────────────────────────────────────────────────────
   "Saved Your Job" Receipt — animated line-by-line reveal
   ───────────────────────────────────────────────────────────────────────────── */

function SavedYourJobReceipt() {
  const reducedMotion = useReducedMotion()
  const lines = [
    { text: "\u26D4 unerr blocked: N+1 Query Pattern Detected", color: "text-red-400" },
    { text: "", color: "" },
    { text: "Your agent was about to call db.users.findMany() inside a forEach loop", color: "text-white/60" },
    { text: "in processCheckoutItems() \u2014 generating 1 query per cart item.", color: "text-white/60" },
    { text: "", color: "" },
    { text: "Blast radius: 12 callers affected. 2 are on the payment flow.", color: "text-white/50" },
    { text: "Est. impact at 1,000 concurrent users: ~12,000 unnecessary DB round trips/min.", color: "text-white/50" },
    { text: "", color: "" },
    { text: "Suggested fix: batch query applied. \u2713 Click to commit.", color: "text-success" },
  ]

  return (
    <div
      className="rounded-xl bg-[#0e0e14] border border-electric-cyan/15 p-6 font-mono text-sm leading-relaxed"
      style={{ boxShadow: "0 0 40px rgba(0,229,255,0.06)" }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <span className="text-[11px] text-white/30">unerr-receipt.log</span>
      </div>
      {lines.map((line, idx) => (
        <motion.p
          key={idx}
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: reducedMotion ? 0 : 0.05 + idx * 0.08 }}
          className={cn("text-xs", line.color)}
        >
          {line.text || "\u00A0"}
        </motion.p>
      ))}
    </div>
  )
}


/* ─────────────────────────────────────────────────────────────────────────────
   Wall of Love — marquee testimonials
   ───────────────────────────────────────────────────────────────────────────── */

function WallOfLove() {
  const reducedMotion = useReducedMotion()
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <div className="relative overflow-hidden mt-12">
      {/* Edge fades */}
      <div className="absolute top-0 left-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-void-black via-void-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-void-black via-void-black/80 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={reducedMotion ? {} : { x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            className="inline-flex flex-col gap-3 w-[340px] shrink-0 rounded-xl bg-white/[0.03] border border-white/10 p-5 hover:border-electric-cyan/15 transition-colors"
          >
            <p className="text-sm text-white/70 whitespace-normal leading-relaxed">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/[0.08] border border-white/10" />
              <div>
                <p className="text-xs font-medium text-white/60">{t.name}</p>
                <p className="text-[10px] font-mono text-white/30">{t.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}


/* ─────────────────────────────────────────────────────────────────────────────
   Early Access Section
   ───────────────────────────────────────────────────────────────────────────── */

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
            Be the first to try unerr.
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


/* ═══════════════════════════════════════════════════════════════════════════════
   Main Page Component
   ═══════════════════════════════════════════════════════════════════════════════ */

export function UnerrProductPage() {
  const [activeGuardrailTab, setActiveGuardrailTab] = useState<string>("security")
  const guardrailTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const guardrailPauseRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Auto-rotate guardrail tabs every 10s, pause 2min on user click
  useEffect(() => {
    function startAutoRotate() {
      if (guardrailTimerRef.current) clearInterval(guardrailTimerRef.current)
      guardrailTimerRef.current = setInterval(() => {
        setActiveGuardrailTab((prev) => {
          const idx = GUARDRAIL_TABS.findIndex((t) => t.id === prev)
          return GUARDRAIL_TABS[(idx + 1) % GUARDRAIL_TABS.length]!.id
        })
      }, 10_000)
    }
    startAutoRotate()
    return () => {
      if (guardrailTimerRef.current) clearInterval(guardrailTimerRef.current)
      if (guardrailPauseRef.current) clearTimeout(guardrailPauseRef.current)
    }
  }, [])

  function handleGuardrailTabClick(tabId: string) {
    setActiveGuardrailTab(tabId)
    posthog.capture("guardrail_tab_clicked", { tab: tabId })
    // Pause auto-rotation for 2 minutes
    if (guardrailTimerRef.current) clearInterval(guardrailTimerRef.current)
    if (guardrailPauseRef.current) clearTimeout(guardrailPauseRef.current)
    guardrailPauseRef.current = setTimeout(() => {
      guardrailTimerRef.current = setInterval(() => {
        setActiveGuardrailTab((prev) => {
          const idx = GUARDRAIL_TABS.findIndex((t) => t.id === prev)
          return GUARDRAIL_TABS[(idx + 1) % GUARDRAIL_TABS.length]!.id
        })
      }, 10_000)
    }, 120_000)
  }

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          Section 1: HERO — "The Missing Backend for AI Code"
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
              {UNERR.badges.map((badge) => (
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
              className="text-display-xl tracking-[-0.03em] leading-[0.95] mb-3 text-electric-cyan font-grotesk"
            >
              {UNERR.name}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.1, ease: snap }}
              className="text-xl md:text-2xl font-medium text-white/50 mb-6 font-grotesk"
            >
              {UNERR.headline}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: snap }}
              className="font-sans text-xl text-white/80 font-medium max-w-xl mb-3 leading-relaxed"
            >
              {UNERR.tagline}
            </motion.p>

            {/* Explanation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: snap }}
              className="font-sans text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              unerr connects to your repo &mdash; GitHub, GitLab, Bitbucket,
              or even a local directory &mdash; and injects your actual
              architecture, conventions, and blast radius into your AI
              agent&apos;s context window. One command. Zero workflow changes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3, ease: snap }}
              className="flex flex-col items-center md:items-start gap-4"
            >
              {/* Terminal CTA */}
              <TerminalCTA />

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#early-access"
                  onClick={() => {
                    posthog.capture("product_page_cta_clicked", {
                      product: "unerr",
                      cta_text: "Join Waitlist",
                      cta_location: "hero",
                    })
                  }}
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

              {/* Micro-copy */}
              <p className="text-xs text-white/30 font-mono">
                Zero to protected in 60 seconds. No credit card required.
              </p>

              {/* Agent Support Bar */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/20">
                  Works with:
                </span>
                {["Cursor", "Claude Code", "Windsurf", "Copilot", "Devin", "OpenHands"].map((agent) => (
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
        <Container className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: snap }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "< 200ms", label: "Guardrail Latency" },
              { value: "$0", label: "LLM Token Cost per Check" },
              { value: "30s", label: "Re-index After Push" },
              { value: "6+", label: "AI Agents Supported" },
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
          Section 3: THE PROBLEM — "The 4 Walls of AI Coding"
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
              AI made you 10x faster at writing the wrong code.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              AI coding tools have made every developer 10x faster. They&apos;ve
              also made it 10x faster to write the wrong code &mdash; and to do
              it at scale before anyone notices. Teams adopting vibe coding hit
              the same four walls:
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
                ...And the friction compounds.
              </span>{" "}
              Every single day, unsupervised AI agents silently introduce
              security vulnerabilities, ignore dependency guidelines, break
              bounded contexts, hallucinate APIs, and bloat your codebase with
              redundant logic. You&apos;re paying for speed, but spending all
              your time babysitting the output.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 4: HOW IT WORKS — 4 Layers (Sticky Scroll)
         ══════════════════════════════════════════════════════════════════════ */}
      <LayersSection />

      {/* ══════════════════════════════════════════════════════════════════════
          Section 5: CAPABILITIES — Bento Grid + Receipt + Wall of Love
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
              Capabilities
            </p>
            <h2 className="text-display-m text-white mb-4">
              The things nobody else catches.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              unerr shifts from post-mortem analytics to a live command center.
              These are the features that make developers say &ldquo;ok this is
              actually insane.&rdquo;
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CAPABILITIES.map((cap, i) => {
              const isHero = i === 0
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
                    isHero ? "md:col-span-2 p-8 lg:p-10" : "col-span-1 p-7",
                  )}
                  style={{
                    boxShadow:
                      "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06), 0 0 20px rgba(0,229,255,0.04)",
                  }}
                >
                  {isHero ? (
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
                      </div>
                      {/* Blast Radius SVG */}
                      <div className="shrink-0 w-full lg:w-[300px] h-[200px] rounded-lg bg-[#0e0e14] border border-white/[0.15] overflow-hidden relative" style={{ boxShadow: "0 8px 30px -8px rgba(0,229,255,0.10)" }}>
                        <svg viewBox="0 0 300 200" className="w-full h-full" fill="none">
                          {/* Center node */}
                          <circle cx="150" cy="100" r="8" fill="rgba(0,229,255,0.3)" stroke="rgba(0,229,255,0.6)" strokeWidth="1.5" />
                          <text x="150" y="122" textAnchor="middle" fill="rgba(0,229,255,0.7)" fontSize="7" className="font-mono">changed fn</text>

                          {/* Radiating nodes - ring 1 */}
                          {[
                            { x: 80, y: 60, label: "CartService" },
                            { x: 220, y: 60, label: "PaymentAPI" },
                            { x: 80, y: 140, label: "OrderQueue" },
                            { x: 220, y: 140, label: "InvoiceGen" },
                          ].map((node, idx) => (
                            <g key={idx}>
                              <line x1="150" y1="100" x2={node.x} y2={node.y} stroke="rgba(0,229,255,0.15)" strokeWidth="0.75" strokeDasharray="3 3" />
                              <circle cx={node.x} cy={node.y} r="5" fill="rgba(0,229,255,0.15)" stroke="rgba(0,229,255,0.3)" strokeWidth="0.75" />
                              <text x={node.x} y={node.y - 10} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" className="font-mono">{node.label}</text>
                            </g>
                          ))}

                          {/* Payment flow nodes (red) */}
                          {[
                            { x: 260, y: 30, label: "StripeHook" },
                            { x: 265, y: 90, label: "RefundSvc" },
                            { x: 260, y: 170, label: "BillingSvc" },
                          ].map((node, idx) => (
                            <g key={`red-${idx}`}>
                              <line x1="220" y1={idx === 0 ? 60 : idx === 1 ? 60 : 140} x2={node.x} y2={node.y} stroke="rgba(255,51,102,0.2)" strokeWidth="0.75" strokeDasharray="3 3" />
                              <circle cx={node.x} cy={node.y} r="5" fill="rgba(255,51,102,0.2)" stroke="rgba(255,51,102,0.4)" strokeWidth="0.75" />
                              <text x={node.x} y={node.y - 10} textAnchor="middle" fill="rgba(255,51,102,0.6)" fontSize="6" className="font-mono">{node.label}</text>
                            </g>
                          ))}

                          {/* Badge */}
                          <rect x="75" y="175" width="150" height="18" rx="4" fill="rgba(255,51,102,0.08)" stroke="rgba(255,51,102,0.2)" strokeWidth="0.5" />
                          <text x="150" y="187" textAnchor="middle" fill="rgba(255,51,102,0.7)" fontSize="7" fontWeight="bold" className="font-mono">47 callers \u00B7 3 on payment flow</text>
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="p-2.5 rounded-xl bg-electric-cyan/[0.10] border border-electric-cyan/25"
                          style={{ boxShadow: "0 0 24px rgba(0,229,255,0.10)" }}
                        >
                          <cap.icon className="w-5 h-5 text-electric-cyan" />
                        </div>
                        <span className="text-[10px] font-mono text-white/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white font-grotesk mb-2">
                        {cap.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {cap.description}
                      </p>
                      <p className="text-white/80 text-sm leading-relaxed font-medium mt-1">
                        {cap.highlight}
                      </p>

                      {/* Spaghetti Shield terminal */}
                      {i === 1 && (
                        <div className="mt-5 rounded-lg bg-[#0e0e14] border border-white/[0.12] p-3 overflow-hidden" style={{ boxShadow: "0 4px 20px -4px rgba(0,229,255,0.08)" }}>
                          <div className="flex items-center gap-2 mb-2.5">
                            <div className="flex gap-1">
                              <span className="w-2 h-2 rounded-full bg-red-400/60" />
                              <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
                              <span className="w-2 h-2 rounded-full bg-green-400/60" />
                            </div>
                            <span className="text-[9px] font-mono text-white/40">spaghetti-shield.log</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className="text-[10px] font-mono text-white/50"><span className="text-white/40 font-bold">SCAN</span>{"  "}4 files, 127 lines changed...</p>
                            <p className="text-[10px] font-mono text-red-400/80"><span className="text-red-400 font-bold">BLOCKED</span>{"  "}api/routes.ts:42 \u2014 N+1 query in loop</p>
                            <p className="text-[10px] font-mono text-electric-cyan/80"><span className="text-electric-cyan font-bold">AUTO-FIX</span>{"  "}batch query applied</p>
                            <p className="text-[10px] font-mono text-success/80"><span className="text-success font-bold">LGTM</span>{"  "}Semantic approval \u2014 low-risk change</p>
                          </div>
                        </div>
                      )}

                      {/* Rewind timeline */}
                      {i === 2 && (
                        <div className="mt-5 rounded-lg bg-[#0e0e14] border border-white/[0.12] p-3 overflow-hidden" style={{ boxShadow: "0 4px 20px -4px rgba(0,229,255,0.08)" }}>
                          <div className="flex items-center gap-2 mb-2.5">
                            <RotateCcw className="w-3 h-3 text-electric-cyan/60" />
                            <span className="text-[9px] font-mono text-white/40">rewind-timeline</span>
                          </div>
                          <div className="flex items-center gap-1 flex-wrap">
                            {[
                              { label: "v1.2", status: "good" },
                              { label: "v1.3", status: "good" },
                              { label: "v1.4", status: "bad" },
                              { label: "v1.5", status: "bad" },
                            ].map((state, idx) => (
                              <div key={idx} className="flex items-center gap-1">
                                {idx > 0 && <div className="w-3 h-px bg-white/10" />}
                                <div className={cn("flex items-center gap-1 px-2 py-1 rounded", state.status === "good" ? "bg-success/[0.08] border border-success/20" : "bg-red-400/[0.06] border border-red-400/15")}>
                                  <div className={cn("w-1.5 h-1.5 rounded-full", state.status === "good" ? "bg-success" : "bg-red-400")} />
                                  <span className={cn("text-[9px] font-mono", state.status === "good" ? "text-success/80" : "text-red-400/60")}>{state.label}</span>
                                </div>
                              </div>
                            ))}
                            <div className="ml-auto">
                              <div className="px-2 py-1 rounded bg-electric-cyan/[0.10] border border-electric-cyan/25 text-[9px] font-mono text-electric-cyan/80">
                                Restore v1.3
                              </div>
                            </div>
                          </div>
                          <p className="text-[9px] font-mono text-red-400/40 mt-2 pt-1.5 border-t border-white/[0.05]">
                            Circuit breaker: agent halted after 4 failures
                          </p>
                        </div>
                      )}

                      {/* Drift Detection terminal */}
                      {i === 3 && (
                        <div className="mt-5 rounded-lg bg-[#0e0e14] border border-white/[0.12] p-3 overflow-hidden" style={{ boxShadow: "0 4px 20px -4px rgba(0,229,255,0.08)" }}>
                          <div className="flex items-center gap-2 mb-2.5">
                            <Database className="w-3 h-3 text-electric-cyan/60" />
                            <span className="text-[9px] font-mono text-white/40">drift-alert</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <p className="text-[10px] font-mono text-white/60"><span className="text-white/40">Entity:</span> validateUserSession()</p>
                            <p className="text-[10px] font-mono text-white/40"><span className="text-white/30">Was:</span> validates user session tokens</p>
                            <p className="text-[10px] font-mono text-red-400/70"><span className="text-red-400/50">Now:</span> also transforms response payloads</p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex-1 h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                                <div className="h-full rounded-full bg-red-400/40" style={{ width: "67%" }} />
                              </div>
                              <span className="text-[9px] font-mono text-red-400/60">0.67 drift</span>
                            </div>
                            <p className="text-[10px] font-mono text-electric-cyan/60 mt-1 pt-1 border-t border-white/[0.05]">Issue #482 created \u2192 @backend-team</p>
                          </div>
                        </div>
                      )}

                      {/* ADR terminal */}
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
                            <p className="text-[10px] font-mono text-white/60"><span className="text-electric-cyan/80">12</span> modules documented</p>
                            <p className="text-[10px] font-mono text-white/60"><span className="text-electric-cyan/80">47</span> architectural decisions logged</p>
                            <p className="text-[10px] font-mono text-white/60"><span className="text-electric-cyan/80">89</span> domain terms in glossary</p>
                            <p className="text-[10px] font-mono text-success/80 mt-1 pt-1 border-t border-white/[0.05]">Committed via PR #312</p>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* "Saved Your Job" Receipt */}
          <div className="mt-16 max-w-3xl mx-auto">
            <SavedYourJobReceipt />
          </div>

          {/* Wall of Love */}
          <WallOfLove />
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 6: ENTERPRISE GUARDRAIL SUITE — Tabbed Categories
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container className="relative max-w-7xl">
          <motion.div
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-electric-cyan/50 mb-3">
              Enterprise
            </p>
            <h2 className="text-display-m text-white mb-4">
              The guardrails your AI agents don&apos;t know they need.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              For organizations where AI coding agents touch regulated,
              high-stakes, or security-sensitive systems. Purpose-built for the
              problems that only become visible at organizational scale.
            </p>
          </motion.div>

          {/* Tab buttons — centered, wrap on mobile */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {GUARDRAIL_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleGuardrailTabClick(tab.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer",
                  activeGuardrailTab === tab.id
                    ? "bg-electric-cyan/[0.10] border border-electric-cyan/25 text-electric-cyan shadow-[0_0_20px_rgba(0,229,255,0.08)]"
                    : "bg-white/[0.03] border border-white/[0.08] text-white/40 hover:text-white/60 hover:border-white/15",
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Guardrail cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(GUARDRAILS[activeGuardrailTab] ?? []).map((guardrail, i) => (
              <motion.div
                key={guardrail.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="rounded-xl bg-white/[0.04] border border-white/[0.12] p-5 hover:border-electric-cyan/15 transition-colors"
              >
                <h4 className="text-sm font-bold text-white font-grotesk mb-2">
                  {guardrail.title}
                </h4>
                <p className="text-xs text-white/50 leading-relaxed">
                  {guardrail.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 7: WHO IT'S FOR — Role Cards
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
              Built For
            </p>
            <h2 className="text-display-m text-white mb-4">
              From solo builders to enterprise teams.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              unerr grows with you &mdash; from your first{" "}
              <span className="font-mono text-electric-cyan/60">npx</span> to
              your thousandth developer.
            </p>
          </motion.div>

          {/* Desktop grid / Mobile horizontal scroll */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ROLE_CARDS.map((card, i) => (
              <motion.div
                key={card.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: snap }}
                className="rounded-xl bg-white/[0.04] border border-white/[0.12] backdrop-blur-[12px] p-6 hover:border-electric-cyan/20 transition-all duration-300"
                style={{ boxShadow: "0 12px 40px -10px rgba(0,0,0,0.4)" }}
              >
                <div className="p-2.5 rounded-xl bg-electric-cyan/[0.10] border border-electric-cyan/25 w-fit mb-4" style={{ boxShadow: "0 0 20px rgba(0,229,255,0.08)" }}>
                  <card.icon className="w-5 h-5 text-electric-cyan" />
                </div>
                <h3 className="text-base font-bold text-white font-grotesk mb-2">
                  {card.role}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide md:hidden pb-4">
            {ROLE_CARDS.map((card) => (
              <div
                key={card.role}
                className="shrink-0 w-[280px] rounded-xl bg-white/[0.04] border border-white/[0.12] backdrop-blur-[12px] p-6"
                style={{ boxShadow: "0 12px 40px -10px rgba(0,0,0,0.4)" }}
              >
                <div className="p-2.5 rounded-xl bg-electric-cyan/[0.10] border border-electric-cyan/25 w-fit mb-4">
                  <card.icon className="w-5 h-5 text-electric-cyan" />
                </div>
                <h3 className="text-base font-bold text-white font-grotesk mb-2">
                  {card.role}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 8: TRUST & SECURITY
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
              Enterprise security, zero-friction setup.
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
            &ldquo;We built unerr for builders who take their code
            seriously. If you wouldn&apos;t trust us with your repo, we
            haven&apos;t earned your business.&rdquo;
          </motion.p>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 9: PRICING — 3-Tier Glass Cards
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
              Pricing
            </p>
            <h2 className="text-display-m text-white mb-4">
              Start free. Scale when you&apos;re ready.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              No credit card for Launch. No commitment. Just instant codebase
              awareness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PRICING_TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: snap }}
                className={cn(
                  "rounded-xl p-7 backdrop-blur-[12px] flex flex-col",
                  tier.emphasized
                    ? "bg-white/[0.06] border border-electric-cyan/25 scale-[1.02] shadow-[0_0_40px_rgba(0,229,255,0.08)]"
                    : "bg-white/[0.04] border border-white/[0.12]",
                )}
                style={{
                  boxShadow: tier.emphasized
                    ? "0 20px 60px -15px rgba(0,0,0,0.5), 0 0 40px rgba(0,229,255,0.08)"
                    : "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                {/* Tier header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white font-grotesk">
                      {tier.name}
                    </h3>
                    {tier.name === "Launch" && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-success/[0.10] border border-success/20 text-success/70">
                        Free
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/40 mb-4">
                    For {tier.audience}
                  </p>
                  <p className="text-3xl font-grotesk font-bold text-electric-cyan">
                    {tier.price}
                    {tier.priceNote && (
                      <span className="text-base text-white/30 font-normal">
                        {tier.priceNote}
                      </span>
                    )}
                  </p>
                </div>

                {/* Capabilities */}
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {tier.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-sm text-white/50"
                    >
                      <Check className="w-3.5 h-3.5 text-electric-cyan/60 shrink-0 mt-0.5" />
                      {cap}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => {
                    posthog.capture("pricing_tier_clicked", { tier: tier.ctaEvent })
                    if (tier.ctaEvent === "scale") {
                      posthog.capture("contact_us_clicked", { source: "pricing" })
                    }
                    const el = document.getElementById("early-access")
                    el?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={cn(
                    "w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm cursor-pointer",
                    "bg-transparent border transition-all duration-300",
                    tier.emphasized
                      ? "border-electric-cyan/40 text-electric-cyan hover:glow-cyan hover:bg-electric-cyan/5"
                      : "border-white/15 text-white/60 hover:border-white/25 hover:text-white/80",
                  )}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 10: EARLY ACCESS — Waitlist
         ══════════════════════════════════════════════════════════════════════ */}
      <EarlyAccessSection />

      {/* ══════════════════════════════════════════════════════════════════════
          Section 11: FAQ — Accordion
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
          Section 12: BOTTOM CTA
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
                  Let your AI write the code. Let unerr protect the
                  architecture.
                </h2>
                <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
                  Stop fixing your AI&apos;s mistakes. unerr catches them before
                  they happen &mdash; institutional memory, predictive
                  guardrails, and autonomous DevSecOps in one MCP connection.
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
