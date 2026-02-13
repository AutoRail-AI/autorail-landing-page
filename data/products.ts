/**
 * Centralized product definitions for autorail — Industrial Safety for Vibe Coding.
 */

export const CODE_SYNAPSE = {
  id: "code-synapse",
  name: "code-synapse",
  tagline: "The CLI sidecar that teaches Cursor and Claude your coding standards.",
  headline: "Memory for Agents.",
  pitch:
    "Code-Synapse is not another rules file that gets ignored after 5 messages. It's a living knowledge graph that persists across every session, every agent, and every developer on your team.",
  color: "cyan" as const,
  npmPackage: "code-synapse",
  badges: ["Open Source", "CLI Sidecar"],
  cta: {
    primary: "Get Early Access",
    secondary: "View on GitHub",
  },
  features: [
    {
      title: "Universal Knowledge Graph",
      description:
        "Works with any agentic IDE. Whether you use Cursor, Claude Desktop, or Windsurf — Code-Synapse runs as a silent sidecar, feeding context via MCP.",
    },
    {
      title: "Cure Context Rot",
      description:
        "Stop relying on static rules files that AI forgets after five messages. Code-Synapse acts as a persistent memory layer that survives across every conversation and tool.",
    },
    {
      title: "Understands Business Intent",
      description:
        "It goes beyond codebase structure to understand the actual business intent of your software. Why does this module exist? What constraint drove this pattern?",
    },
    {
      title: "Hyper-Personalized Generation",
      description:
        "AI finally writes code that looks like a senior developer on your team wrote it. Not generic Stack Overflow code. Your patterns. Your conventions. Your architecture.",
    },
    {
      title: "Pattern Enforcement",
      description:
        "Forces agents to use your internal libraries and conventions, not generic public code.",
    },
    {
      title: "Drift Prevention",
      description:
        'Catches "Alien Code" (inconsistent patterns) before it merges to main. Your codebase stays coherent.',
    },
  ],
} as const

export const NECROMA = {
  id: "necroma",
  name: "necroma",
  tagline: "Autonomous migration with 100% video-verified behavioral parity.",
  headline: "Revive Legacy Systems.",
  pitch:
    "Necroma is a Behavior-to-Code reconstructor. It feeds Code, Video, and DOM Events into a temporal graph to guarantee 100% behavioral parity.",
  color: "purple" as const,
  badges: ["Enterprise", "Public Beta"],
  cta: {
    primary: "Get Early Access",
    secondary: "Get Early Access",
  },
  features: [
    {
      title: "Dual-Stream Verification",
      description:
        "Doesn't just rewrite code; watches video of the user behavior to guarantee the new system works exactly like the old one.",
    },
    {
      title: "The Airbag (Self-Healing)",
      description:
        "If the modernized code crashes, Necroma detects it, diagnoses the root cause, and fixes it automatically. You don't get paged; the system catches itself.",
    },
    {
      title: "Vertical Slice Migration",
      description:
        "Instead of risky \"Big Bang\" migrations, Necroma delivers working features one \"Vertical Slice\" at a time. Working feature delivered in Week 1, autonomously verified through self-healing test loops.",
    },
  ],
} as const

export const PRODUCTS = [CODE_SYNAPSE, NECROMA] as const
