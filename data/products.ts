/**
 * Centralized product definitions for autorail — Industrial Safety for Vibe Coding.
 */

export const CODE_SYNAPSE = {
  id: "code-synapse",
  name: "code-synapse",
  tagline:
    "Stop babysitting your AI. Turn your favorite \"Typist\" into a Senior Developer.",
  headline: "The AI Tech Lead.",
  pitch:
    "Code-Synapse is a fully hosted SaaS that sits invisibly between you and your AI coding agent. Connect your GitHub repo, and our cloud engine builds a living Business Intent Graph of your app. It acts as your Virtual CTO — intercepting your vague prompts, enforcing your rules, and ruthlessly reviewing the AI's code before it ever touches your files.",
  color: "cyan" as const,
  cli: "code-synapse",
  badges: ["SaaS", "Hosted MCP Server"],
  cta: {
    primary: "Join Waitlist",
    secondary: "Book a Demo",
  },
  features: [
    {
      title: "File-less Blueprint",
      description:
        "Click a feature block, type what you want, and Code-Synapse generates precise multi-file prompts for the AI. You manage features; we manage the files.",
    },
    {
      title: "Spaghetti Shield",
      description:
        "Automated cloud PR reviewer. Checks every AI change against your app's permanent architecture. Wrong library? Instantly blocked and rewritten.",
    },
    {
      title: "Rewind Button",
      description:
        "One click restores your code to the exact moment it last worked — and permanently blocks the AI from making that mistake again.",
    },
    {
      title: "Invisible Testing",
      description:
        "Click through your app to record hidden behavioral tests. If the AI breaks a feature, we force a fix. Safety without writing tests.",
    },
    {
      title: "Anti-Extortion Export",
      description:
        "Generate an enterprise-grade Architecture Report in one click. Hand your hired engineer a perfect map of your codebase.",
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
