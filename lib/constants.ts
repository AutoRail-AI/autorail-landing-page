/**
 * Site-wide constants for AutoRail landing page
 */

export const SITE_CONFIG = {
  name: "AutoRail",
  tagline: "Infrastructure on Autopilot for AI Agents",
  description:
    "AutoRail automatically provisions stateful memory, workflow orchestration, and production guardrails for AI agents. Bridge the gap from prototype to production.",
  url: "https://autorail.dev",
  twitterHandle: "@autorail_ai",
  twitterUrl: "https://x.com/autorail_ai",
  githubUrl: "https://github.com/autorail",
} as const

export const CTA_TEXT = {
  primary: "Bookmark for Launch",
  primaryWithDate: "Bookmark for Launch — Coming Soon",
  secondary: "See How It Works",
} as const

export const SECTION_IDS = {
  hero: "hero",
  problem: "problem",
  solution: "solution",
  capabilities: "capabilities",
  howItWorks: "how-it-works",
  useCases: "use-cases",
  cta: "cta",
  faq: "faq",
} as const
