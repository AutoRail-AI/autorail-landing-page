import { GitBranch, Cpu, Zap, Activity } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ProcessStep {
  number: number
  title: string
  description: string
  detail: string
  icon: LucideIcon
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Connect Your Codebase",
    description:
      "Import your scaffold from Bolt.new, Lovable, Replit, or paste a GitHub URL. AutoRail supports any vibe-coded output—from AI agents to SaaS dashboards to e-commerce tools.",
    detail: "We support Git repositories, local directories, and direct integrations with popular development tools.",
    icon: GitBranch,
  },
  {
    number: 2,
    title: "AutoRail Analyzes",
    description:
      "We scan your code for infrastructure needs: Does it manage user sessions? Call external APIs? Handle async tasks? Process payments? AutoRail identifies gaps in memory, orchestration, and reliability.",
    detail: "Our analysis engine understands app lifecycles, data flows, and dependency relationships.",
    icon: Cpu,
  },
  {
    number: 3,
    title: "Infrastructure Provisions Automatically",
    description:
      "One click deploys tailored primitives—Redis for state, Temporal for workflows, Sentry for observability. All cloud-agnostic and optimized for your specific app requirements.",
    detail: "Infrastructure is provisioned in isolated, secure environments with production-grade defaults.",
    icon: Zap,
  },
  {
    number: 4,
    title: "Monitor & Scale",
    description:
      "Built-in evaluation loops catch issues before users see them. AutoRail auto-tunes for traffic spikes and adapts when you update your code. Edit your app? Infrastructure adjusts in seconds.",
    detail: "Real-time dashboards, alerting, and automated remediation ensure production stability.",
    icon: Activity,
  },
]
