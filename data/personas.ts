import { User, Users, Cpu, Briefcase } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Persona {
  icon: LucideIcon
  title: string
  benefit: string
  description: string
}

export const PERSONAS: Persona[] = [
  {
    icon: User,
    title: "Indie Hackers & Solo Makers",
    benefit: "Ship revenue-ready MVPs without backend expertise",
    description:
      "I vibe-coded a SaaS dashboard in a weekend, but users complain about losing their data between sessions. autorail provisions persistent state and session management automatically.",
  },
  {
    icon: Users,
    title: "Startup Product Teams",
    benefit: "Scale from prototype to 1,000+ users without eng hires",
    description:
      "Our Bolt.new prototype works great for demos, but collapses under 50 concurrent users. autorail handles workflow orchestration, rate limiting, and auto-scaling.",
  },
  {
    icon: Cpu,
    title: "AI Engineers & Agent Builders",
    benefit: "Reliable agentic workflows that handle 50+ tasks",
    description:
      "My multi-agent system works in testing but gets stuck or forgets context in production. autorail provides agent-specific memory, orchestration, and guardrails.",
  },
  {
    icon: Briefcase,
    title: "Development Agencies",
    benefit: "Ship client apps faster with guaranteed reliability",
    description:
      "Clients want rapid prototypes that actually work in production, not toys. autorail enables white-label vibe-coding services with production delivery.",
  },
]
