import { Database, GitBranch, Shield, Rocket, Eye, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Capability {
  icon: LucideIcon
  title: string
  description: string
  keywords: string[]
}

export const CAPABILITIES: Capability[] = [
  {
    icon: Database,
    title: "Stateful Memory",
    description:
      "Persistent context across sessions. Users pick up exactly where they left off—whether it's a shopping cart, AI conversation, or CRM workflow.",
    keywords: ["app memory", "context persistence", "stateful apps"],
  },
  {
    icon: GitBranch,
    title: "Workflow Orchestration",
    description:
      "Coordinate complex async operations—from email sequences to payment processing to multi-step AI workflows. Retries, fallbacks, and human-in-the-loop patterns built in.",
    keywords: ["workflow automation", "task orchestration", "async operations"],
  },
  {
    icon: Shield,
    title: "Production Guardrails",
    description:
      "Rate limiting, cost caps, and safety checks protect your app from abuse and runaway costs. Block bad data before it enters your system.",
    keywords: ["rate limiting", "cost control", "input validation"],
  },
  {
    icon: Rocket,
    title: "Deploy Engine",
    description:
      "Zero-config deployment to production. Custom domains, HTTPS, and CI/CD hooks in minutes. Cloud-agnostic—run on AWS, Vercel, or your own infrastructure.",
    keywords: ["zero-config deploy", "app hosting", "CI/CD"],
  },
  {
    icon: Eye,
    title: "Observability",
    description:
      "Know what's happening in your app before users complain. Traces, logs, and metrics for every request. Sentry-level error tracking without the integration hell.",
    keywords: ["app monitoring", "error tracking", "performance metrics"],
  },
  {
    icon: TrendingUp,
    title: "Auto-Scale",
    description:
      "Infrastructure adapts to your traffic. No over-provisioning, no surprise bills. Spin up compute for traffic spikes, scale down during quiet hours.",
    keywords: ["auto-scaling", "elastic infrastructure", "cost optimization"],
  },
]
