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
      "Every AI decision is logged. If the system fails, you have the black box.",
    icon: ScrollText,
  },
  {
    id: "privacy",
    title: "Privacy-First — Local Processing",
    description:
      "The blueprints of your mine never leave your perimeter.",
    icon: ShieldCheck,
  },
  {
    id: "explainability",
    title: "Explainability — Thought Signatures",
    description:
      "See exactly why the agent made a decision before you approve it.",
    icon: Lightbulb,
  },
]
