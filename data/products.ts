/**
 * Centralized product definitions for autorail — Industrial Safety for Vibe Coding.
 */

export const CODE_SYNAPSE = {
  id: "code-synapse",
  name: "code-synapse",
  tagline: "The Institutional Memory Layer.",
  headline: "Stop AI From Writing 'Alien Code.'",
  pitch:
    "You wouldn't let a contractor build without blueprints. Don't let AI build without Context.",
  color: "cyan" as const,
  npmPackage: "code-synapse",
  badges: ["Open Source", "MCP-Native"],
  cta: {
    primary: "npm install code-synapse",
    secondary: "View on GitHub",
  },
  features: [
    {
      title: "Pattern Enforcement",
      description:
        "Forces agents (Cursor, Windsurf, Claude) to use your internal libraries and conventions, not generic public code.",
    },
    {
      title: "Self-Reinforcing",
      description:
        "When a senior dev corrects the AI, Synapse learns the rule and distributes it to the whole team instantly.",
    },
    {
      title: "Drift Prevention",
      description:
        'Catches "Alien Code" (inconsistent patterns) before it merges to main.',
    },
  ],
} as const

export const NECROMA = {
  id: "necroma",
  name: "necroma",
  tagline: "Autonomous Legacy Reclamation.",
  headline: "Verify Behavior, Not Just Syntax.",
  pitch:
    "Legacy migration is the most dangerous part of the mine. necroma is the autonomous unit that goes in, verifies the structural integrity, and reinforces it.",
  color: "purple" as const,
  badges: ["Enterprise", "Invite Only"],
  cta: {
    primary: "Get early Access",
    secondary: "Get early Access",
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
        "If the modernized code crashes, necroma detects it, diagnoses the root cause, and fixes it automatically. You don't get paged; the system catches itself.",
    },
    {
      title: "Vertical Slice Safety",
      description:
        "We don't blow up the whole mine. We modernize one safe \"vertical slice\" at a time.",
    },
  ],
} as const

export const PRODUCTS = [CODE_SYNAPSE, NECROMA] as const
