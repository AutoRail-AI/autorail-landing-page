/**
 * Centralized product definitions for autorail — Industrial Safety for Vibe Coding.
 */

export const UNERR = {
  id: "unerr",
  name: "unerr",
  tagline:
    "Code as fast as your AI can type. unerr will catch the mistakes.",
  headline: "The Missing Backend for AI Coding Agents.",
  pitch:
    "unerr connects to your repo — GitHub, GitLab, Bitbucket, or even a local directory — and injects your actual architecture, conventions, and blast radius into your AI agent's context window. One command. Zero workflow changes.",
  color: "cyan" as const,
  cli: "unerr",
  badges: ["SaaS", "Hosted MCP Server"],
  cta: {
    primary: "Get Started Free",
    secondary: "Join Waitlist",
  },
  features: [
    {
      title: "Blast Radius Visualization",
      description:
        "Before any change merges, unerr traverses the call graph N hops outward to every API boundary and UI component it reaches.",
    },
    {
      title: "Spaghetti Shield",
      description:
        "Automated PR review: Semgrep rules → knowledge graph impact analysis → line-level review comments for BLOCKER items only.",
    },
    {
      title: "Rewind & Circuit Breaker",
      description:
        "One click restores to last known-good state. Auto-generates anti-pattern rules. Circuit breaker halts hallucination loops.",
    },
    {
      title: "Drift Detection",
      description:
        "When a file changes, unerr computes semantic drift — the function silently becoming something it shouldn't be. Drift Alerts fire automatically.",
    },
    {
      title: "Auto-Generated ADRs",
      description:
        "When a PR merges significant new topology, unerr auto-generates and commits an Architecture Decision Record as a follow-up PR.",
    },
  ],
} as const

export const NECROMA = {
  id: "necroma",
  name: "necroma",
  tagline:
    "Infrastructure for autonomous legacy migration. See your first modernized, production-ready feature in days, not quarters.",
  headline: "The Migration Layer.",
  pitch:
    "Necroma records DOM events, network calls, and user flows from the live legacy application. It generates Playwright tests from observed behavior, then forces the AI to write modern code until every test passes. This isn't magic. It's test-driven reconstruction: the infrastructure generates the acceptance criteria by watching the application work, then holds the AI accountable to those criteria automatically.",
  color: "purple" as const,
  badges: ["Enterprise", "Public Beta"],
  cta: {
    primary: "Request a Migration Pilot",
    secondary: "Request a Migration Pilot",
  },
  features: [
    {
      title: "Dual-Stream Verification",
      description:
        "Doesn't just rewrite code; watches video of actual user behavior to guarantee the new system works exactly like the old one. Records DOM events and generates behavioral test suites automatically.",
    },
    {
      title: "Automated Guardrails",
      description:
        "If a generated slice fails the behavioral test, the infrastructure doesn't crash the pipeline. It hits the brakes, reads the error, and self-heals the code until the test turns green. No 3am pages. The system catches itself.",
    },
    {
      title: "Vertical Slice Delivery",
      description:
        "Instead of risky \"Big Bang\" rewrites, the infra autonomously provisions vertical migration slices — one working feature at a time. See your first modernized, production-ready feature in days, not quarters. Autonomously verified through self-healing test loops.",
    },
  ],
} as const

export const PRODUCTS = [UNERR, NECROMA] as const
