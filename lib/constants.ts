/**
 * Site-wide constants for autorail landing page
 */

export const SITE_CONFIG = {
  name: "autorail",
  tagline: "Automated Code Review & Governance for AI Coding Tools",
  description:
    "autorail makes AI-powered development safe for production. unerr is a hosted MCP server that injects your actual architecture into your AI agent's context window — works with Cursor, Claude Code, Copilot, Windsurf, and Devin. necroma automates legacy migration with behavioral verification.",
  url: "https://autorail.dev",
  twitterHandle: "@autorail_ai",
  twitterUrl: "https://x.com/autorail_ai",
  linkedinUrl: "https://linkedin.com/company/autorail_ai",
  contactEmail: "jaswanth@autorail.dev",
  footerTagline: "Governance Infrastructure for AI-Powered Development",
} as const

/**
 * Domain configuration for multi-domain hosting
 */
export const DOMAINS = {
  autorail: "autorail.dev",
  unerr: "unerr.dev",
} as const

export const UNERR_SITE_CONFIG = {
  name: "unerr",
  tagline: "The Missing Backend for AI Coding Agents",
  description:
    "unerr is a hosted MCP server that injects your actual architecture, conventions, and blast radius into your AI agent's context window. Works with Cursor, Claude Code, Copilot, Windsurf, and Devin.",
  url: "https://unerr.dev",
  twitterHandle: "@autorail_ai",
  twitterUrl: "https://x.com/autorail_ai",
  linkedinUrl: "https://linkedin.com/company/autorail_ai",
  contactEmail: "jaswanth@autorail.dev",
  footerTagline: "The Missing Backend for AI Coding Agents — by autorail",
} as const

export const CTA_TEXT = {
  primary: "Join Waitlist",
  secondary: "Contact Us",
} as const

export const SECTION_IDS = {
  hero: "hero",
  day2Problem: "day2-problem",
  twoBrains: "two-brains",
  unerr: "unerr",
  necroma: "necroma",
  safetyRating: "safety-rating",
  ecosystem: "ecosystem",
  cta: "cta",
} as const
