import { BrainCog, Layers, ShieldX } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Collapse {
  id: string
  title: string
  description: string
  solvedBy: string
  productId: "kap10" | "knowledge-graph" | "necroma"
  icon: LucideIcon
}

export const COLLAPSES: Collapse[] = [
  {
    id: "amnesia",
    title: "The Amnesia Collapse",
    description:
      "Agents forget your architectural decisions. Every session is a clean slate. Patterns get reinvented. Conventions drift. Your developers spend more time fixing AI-generated code than they saved by using AI.",
    solvedBy: "context layer",
    productId: "kap10",
    icon: BrainCog,
  },
  {
    id: "verification",
    title: "The Verification Collapse",
    description:
      "Agents write code that passes syntax checks but breaks business behavior. Migrations look correct but feel wrong to users. You merge regressions faster than ever before.",
    solvedBy: "migration layer",
    productId: "necroma",
    icon: ShieldX,
  },
  {
    id: "context",
    title: "Context Rot",
    description:
      "As the codebase grows, static rules files break down. Agents can't see the full system architecture. They hallucinate solutions that don't compose with anything around them.",
    solvedBy: "knowledge graph",
    productId: "knowledge-graph",
    icon: Layers,
  },
]
