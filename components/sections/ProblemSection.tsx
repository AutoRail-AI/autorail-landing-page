"use client"

import { motion } from "framer-motion"
import { Clock, GitBranch, ShieldAlert } from "lucide-react"
import { Container, SectionHeader } from "components/ui"
import { cardItem, fadeInUp, staggerContainer, viewportSettings } from "lib/animations"
import { SECTION_IDS } from "lib/constants"

const painPoints = [
  {
    icon: Clock,
    title: "Remember context from three days ago",
    description: "Stateless agents lose user history between sessions",
  },
  {
    icon: GitBranch,
    title: "Orchestrate 50+ concurrent agent tasks",
    description: "Parallel workflows collapse without proper sequencing",
  },
  {
    icon: ShieldAlert,
    title: "Guarantee failure-safe execution",
    description: "One failed API call shouldn't cascade through your entire system",
  },
]

export function ProblemSection() {
  return (
    <section
      id={SECTION_IDS.problem}
      className="relative overflow-hidden bg-slate-grey py-20 md:py-24"
    >
      <Container>
        <SectionHeader
          title="The Gap Between Prototype and Production"
          description="Tools like Lovable and Bolt generate frontends fast. But when your AI system needs to scale, the cracks appear."
        />

        {/* Pain Points Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={cardItem}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-void-black">
                <point.icon className="size-7 text-electric-cyan" />
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-grotesk)] text-lg font-medium text-cloud-white">
                {point.title}
              </h3>
              <p className="text-sm text-foreground-secondary">
                {point.description}
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
          Vibe-coding gets you started. It doesn&apos;t get you to production.
        </motion.p>
      </Container>
    </section>
  )
}
