/**
 * Site-wide constants for autorail landing page
 */

export const SITE_CONFIG = {
  name: "autorail",
  tagline: "Autonomous Engineering Infrastructure.",
  description:
    "The infrastructure layer for autonomous engineering. kap10 provides persistent context via AST-backed knowledge graphs. necroma provides behavioral verification for autonomous legacy reclamation.",
  url: "https://autorail.dev",
  twitterHandle: "@autorail_ai",
  twitterUrl: "https://x.com/autorail_ai",
  linkedinUrl: "https://linkedin.com/company/autorail_ai",
  contactEmail: "jaswanth@autorail.dev",
  footerTagline: "Autonomous Engineering Infrastructure",
} as const

export const CTA_TEXT = {
  primary: "Join Waitlist",
  secondary: "Contact Us",
} as const

export const SECTION_IDS = {
  hero: "hero",
  day2Problem: "day2-problem",
  twoBrains: "two-brains",
  kap10: "kap10",
  necroma: "necroma",
  safetyRating: "safety-rating",
  ecosystem: "ecosystem",
  cta: "cta",
} as const
