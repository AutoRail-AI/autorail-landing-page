"use client"

import { motion } from "framer-motion"
import { Database, GitBranch, Shield, Zap } from "lucide-react"
import { FlowDiagram } from "components/graphics"
import { Container, SectionHeader } from "components/ui"
import { cardItem, fadeInUp, staggerContainer, viewportSettings } from "lib/animations"
import { SECTION_IDS } from "lib/constants"

const primitives = [
  {
    icon: Database,
    title: "Stateful memory layers",
    description: "Persistent context that survives sessions, restarts, and scale events",
  },
  {
    icon: GitBranch,
    title: "Workflow orchestration",
    description: "Sequencing, concurrency, retries, and intelligent fallback patterns",
  },
  {
    icon: Shield,
    title: "Guardrails and rate limiters",
    description: "Protection against runaway costs, abuse, and cascade failures",
  },
  {
    icon: Zap,
    title: "Circuit-breaker patterns",
    description: "Graceful degradation when dependencies fail",
  },
]

export function SolutionSection() {
  return (
    <section
      id={SECTION_IDS.solution}
      className="relative overflow-hidden bg-void-black py-20 md:py-24"
    >
      <Container>
        <SectionHeader
          title="AutoRail Bridges the Gap"
          description="We interpret your generated code and automatically provision the backend primitives your product actually needs. No configuration files. No infrastructure wrestling. Just production-ready systems, deployed."
        />

        {/* Flow Diagram */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="mt-16"
        >
          <FlowDiagram />
        </motion.div>

        {/* Primitives Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {primitives.map((primitive) => (
            <motion.div
              key={primitive.title}
              variants={cardItem}
              className="rounded-xl border border-border-default bg-slate-grey/50 p-6 transition-all hover:border-border-hover hover:glow-purple"
            >
              <primitive.icon className="mb-4 size-8 text-rail-purple" />
              <h3 className="mb-2 font-[family-name:var(--font-grotesk)] text-base font-medium text-cloud-white">
                {primitive.title}
              </h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                {primitive.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="mt-16 text-center font-[family-name:var(--font-grotesk)] text-xl font-semibold text-cloud-white md:text-2xl"
        >
          Production-grade from day one.
        </motion.p>
      </Container>
    </section>
  )
}
