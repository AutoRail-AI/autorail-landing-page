import { BrainCog, Layers, ShieldX } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Collapse {
  id: string
  title: string
  description: string
  solvedBy: string
  productId: "code-synapse" | "knowledge-graph" | "necroma"
  icon: LucideIcon
}

export const COLLAPSES: Collapse[] = [
  {
    id: "amnesia",
    title: "The Amnesia Collapse",
    description:
      "Agents forget your architectural decisions. They re-introduce patterns you banned years ago.",
    solvedBy: "code-synapse",
    productId: "code-synapse",
    icon: BrainCog,
  },
  {
    id: "context",
    title: "The Context Collapse",
    description:
      "As your codebase grows, rules files break. The AI starts hallucinating because it can't see the full system architecture.",
    solvedBy: "knowledge graph",
    productId: "knowledge-graph",
    icon: Layers,
  },
  {
    id: "verification",
    title: "The Verification Collapse",
    description:
      "Agents write code that passes syntax checks but breaks business logic. You merge bugs faster than ever.",
    solvedBy: "necroma",
    productId: "necroma",
    icon: ShieldX,
  },
]
