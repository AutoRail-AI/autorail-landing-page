/**
 * Centralized product definitions for autorail — Industrial Safety for Vibe Coding.
 */

export const CODE_SYNAPSE = {
  id: "code-synapse",
  name: "code-synapse",
  tagline:
    "Persistent memory infrastructure for agents — so they write code that belongs in your codebase, not code that compiles and violates everything.",
  headline: "The Context Layer.",
  pitch:
    "Code-Synapse is a CLI sidecar that runs alongside your IDE. It builds a living knowledge graph from your AST, commit history, and architectural decisions — then serves it to any agent via an MCP server. Pre-built skill libraries let agents go further: enforcing patterns, preventing drift, and understanding business intent. Zero manual upkeep. It watches your commits and updates the graph in real-time.",
  color: "cyan" as const,
  cli: "code-synapse",
  badges: ["Open Source", "CLI Sidecar"],
  cta: {
    primary: "Connect Your Repo",
    secondary: "View on GitHub",
  },
  features: [
    {
      title: "Universal Knowledge Graph",
      description:
        "Runs as a CLI sidecar alongside any agentic IDE — Cursor, Claude Desktop, Windsurf. Agents connect via an MCP server that exposes your codebase's knowledge graph. No vendor lock-in.",
    },
    {
      title: "Cure Context Rot",
      description:
        "Static rules files get ignored after five messages. Code-Synapse maintains a persistent knowledge graph that auto-updates on every commit. Zero manual maintenance — the sidecar watches your repo.",
    },
    {
      title: "Understands Business Intent",
      description:
        "Goes beyond codebase structure to understand the actual business intent of your software. Why does this module exist? What constraint drove this pattern? What happens if you violate this convention?",
    },
    {
      title: "Hyper-Personalized Generation",
      description:
        "Agents write code that looks like a senior developer on your team wrote it. Pre-built skill libraries teach them your internal patterns, naming conventions, and architectural decisions.",
    },
    {
      title: "Pattern Enforcement",
      description:
        "Skill libraries ensure agents use your internal modules and conventions, not generic public alternatives. The agent knows you have a DateUtils module — it won't import moment.js.",
    },
    {
      title: "Drift Prevention",
      description:
        "Catches architectural drift before it merges to main. Your codebase stays coherent as agents and developers scale. Alien Code gets flagged, not merged.",
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

export const PRODUCTS = [CODE_SYNAPSE, NECROMA] as const
