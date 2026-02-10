import type { LucideIcon } from "lucide-react"

/**
 * Process steps for "How it works" flows.
 * Legacy infrastructure narrative removed; content to be replaced per new positioning.
 */
export interface ProcessStep {
  number: number
  title: string
  description: string
  detail: string
  icon: LucideIcon
}

export const PROCESS_STEPS: ProcessStep[] = []
