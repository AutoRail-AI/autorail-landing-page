"use client"

import { motion } from "framer-motion"
import { Container } from "components/ui"
import { SECTION_IDS } from "lib/constants"
import { SAFETY_PILLARS } from "data/safety-pillars"
import { staggerContainer, cardItem } from "lib/animations"

const SAFETY = {
  eyebrow: "Enterprise Infrastructure",
  headline: "Engineering Rigor for the Agentic Age.",
  subhead:
    "AutoRail keeps the human in the loop as the reviewer and orchestrator. Agents propose. Your team approves.",
}

export function SafetyRating() {
  return (
    <section
      id={SECTION_IDS.safetyRating}
      className="py-24 bg-void-black relative overflow-hidden scroll-mt-20"
    >
      {/* Crisp radial glow behind heading — not full-screen wash */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(110,24,179,0.06) 0%, transparent 70%)" }}
      />

      <Container className="relative">
        <div className="text-center mb-16">
          <p className="text-label text-rail-purple mb-3">
            {SAFETY.eyebrow}
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-m text-white mb-4"
          >
            {SAFETY.headline}
          </motion.h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            {SAFETY.subhead}
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {SAFETY_PILLARS.map((pillar) => (
            <motion.article
              key={pillar.id}
              variants={cardItem}
              className="glass-card rounded-xl p-8 hover:border-white/20 transition-colors"
            >
              <div className="mb-6 inline-flex p-3 rounded-lg bg-rail-purple/10 text-rail-purple">
                <pillar.icon className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-grotesk">
                {pillar.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
