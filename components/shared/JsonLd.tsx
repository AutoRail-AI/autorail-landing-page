import { SITE_CONFIG } from "lib/constants"

type JsonLdType =
  | "organization"
  | "software-unerr"
  | "software-necroma"
  | "webpage"
  | "faq-unerr"
  | "howto-spaghetti"

interface JsonLdProps {
  type: JsonLdType
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const schemas: Record<JsonLdType, Record<string, any>> = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "autorail",
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/icon-wordmark.svg`,
    email: SITE_CONFIG.contactEmail,
    description:
      "Governance infrastructure for AI-powered development. Automated code review and behavioral verification for AI coding tools.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Jaswanth",
    },
    sameAs: [SITE_CONFIG.twitterUrl, SITE_CONFIG.linkedinUrl],
    knowsAbout: [
      "automated code review",
      "AI code quality",
      "MCP servers",
      "AI coding agent supervision",
      "vibe coding",
      "legacy code migration",
      "code architecture enforcement",
      "AI code governance",
    ],
  },

  "software-unerr": {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "unerr",
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "Automated Code Review Tool",
    operatingSystem: "Cloud (SaaS)",
    description:
      "A hosted MCP server that injects your actual architecture, conventions, and blast radius into your AI agent's context window. Works with Cursor, Claude Code, Copilot, Windsurf, and Devin. Zero workflow changes.",
    featureList: [
      "Prompt compilation — expands vague prompts into structural instructions",
      "Scope locking — restricts AI to relevant directories only",
      "Spaghetti Shield — automated architectural code review",
      "Behavioral testing — click-to-record hidden test suites",
      "Business-aware merging — PR scoring by domain impact",
      "Architecture export — one-click handoff documentation",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description:
        "Early access waitlist — founding members get personal onboarding",
    },
    isAccessibleForFree: true,
  },

  "software-necroma": {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "necroma",
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "Legacy Code Migration Tool",
    operatingSystem: "Cloud (SaaS)",
    description:
      "Autonomous legacy migration engine. Records live application behavior, generates Playwright tests, forces AI to rewrite until every test passes.",
    featureList: [
      "Behavioral recording — captures DOM events, network calls, and user flows",
      "Test generation — creates Playwright tests from observed behavior",
      "AI-driven rewriting — forces modern code until all tests pass",
      "Vertical slice delivery — ship modernized features incrementally",
    ],
  },

  webpage: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "autorail — Automated Code Review & Governance for AI Coding Tools",
    description:
      "autorail makes AI-powered development safe for production. unerr is a hosted MCP server that injects your actual architecture into your AI agent's context window.",
    url: SITE_CONFIG.url,
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "autorail",
      applicationCategory: "DeveloperApplication",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#hero h1", "#hero p"],
    },
  },

  "faq-unerr": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is unerr?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "unerr is a hosted MCP server that injects your actual architecture, conventions, and blast radius into your AI agent's context window. It works with Cursor, Claude Code, Copilot, Windsurf, and Devin — zero workflow changes.",
        },
      },
      {
        "@type": "Question",
        name: "Does unerr slow down my AI coding agent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. unerr operates on the MCP channel with overhead under 200ms. Your coding flow feels identical; the output is dramatically better quality.",
        },
      },
      {
        "@type": "Question",
        name: "Does unerr work with Cursor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. unerr works with any MCP-compatible AI coding agent, including Cursor, Claude Code, Copilot, Windsurf, and Devin. One URL, any agent.",
        },
      },
      {
        "@type": "Question",
        name: "Is my code safe with unerr?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Your code is encrypted in transit (TLS 1.3) and at rest (AES-256). unerr processes only structural metadata, never raw source code. Disconnect your repo, and all data is purged within 24 hours. No model training on your code — ever.",
        },
      },
      {
        "@type": "Question",
        name: "How is unerr different from .cursorrules?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike .cursorrules files which the AI ignores after a few messages, unerr enforces your conventions on the MCP channel — every prompt, every time. It also adds blast radius visualization, automated code review, drift detection, and auto-generated ADRs that .cursorrules cannot provide.",
        },
      },
      {
        "@type": "Question",
        name: "What is vibe coding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vibe coding is a development approach where developers describe features in natural language and AI coding tools like Cursor generate the code. While fast for prototyping, unsupervised vibe coding leads to architectural drift, regressions, and unmaintainable repositories.",
        },
      },
    ],
  },

  "howto-spaghetti": {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to prevent AI-generated spaghetti code",
    description:
      "A step-by-step guide to maintaining code quality when using AI coding agents like Cursor, Claude Code, or Windsurf.",
    step: [
      {
        "@type": "HowToStep",
        name: "Enforce conventions automatically",
        text: "Use MCP-level enforcement instead of .cursorrules files, which AI ignores after a few messages.",
      },
      {
        "@type": "HowToStep",
        name: "Lock file scope",
        text: "Restrict AI to only the directories relevant to the current feature to prevent collateral changes.",
      },
      {
        "@type": "HowToStep",
        name: "Run automated architectural review",
        text: "Review every AI-generated change against your repository's architecture and conventions.",
      },
      {
        "@type": "HowToStep",
        name: "Record behavioral tests",
        text: "Capture click-through tests to detect silent regressions that unit tests miss.",
      },
      {
        "@type": "HowToStep",
        name: "Use MCP-level governance",
        text: "Deploy a governance tool like unerr that sits on the MCP channel and reviews AI output end-to-end.",
      },
    ],
  },
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export function JsonLd({ type }: JsonLdProps) {
  const schema = schemas[type]
  if (!schema) return null

  return (
    <script
      id={`jsonld-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
