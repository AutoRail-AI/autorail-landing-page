import { ScrollText, ShieldCheck, Lightbulb } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface SafetyPillar {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const SAFETY_PILLARS: SafetyPillar[] = [
  {
    id: "audit",
    title: "Audit Trails — The Change Ledger",
    description:
      "Every autonomous decision is logged with full provenance. If the system fails, you have the black box — not a shrug and a \"the AI did it.\"",
    icon: ScrollText,
  },
  {
    id: "privacy",
    title: "Privacy-First — Local Processing",
    description:
      "Your proprietary architecture never leaves your perimeter. The infrastructure runs where your code lives. No data exfiltration. No third-party model training on your IP.",
    icon: ShieldCheck,
  },
  {
    id: "explainability",
    title: "Explainability — Thought Signatures",
    description:
      "See exactly why the agent made a decision — complete with confidence scores and logic trails — before a single line of code reaches production. No black-box deployments.",
    icon: Lightbulb,
  },
]
