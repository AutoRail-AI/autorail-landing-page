"use client"

import { motion } from "framer-motion"
import { Container } from "components/ui"
import { SECTION_IDS } from "lib/constants"
import { SAFETY_PILLARS } from "data/safety-pillars"
import { staggerContainer, cardItem } from "lib/animations"

const SAFETY = {
  eyebrow: "Enterprise Grade",
  headline: "Engineering Rigor for the Agentic Age.",
}

export function SafetyRating() {
  return (
    <section
      id={SECTION_IDS.safetyRating}
      className="py-24 bg-void-black relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-rail-purple/5 blur-[100px] pointer-events-none" />

      <Container className="relative">
        <div className="text-center mb-16">
          <p className="text-sm font-mono tracking-wider text-rail-purple uppercase mb-3">
            {SAFETY.eyebrow}
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-grotesk"
          >
            {SAFETY.headline}
          </motion.h2>
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
              className="glass-card rounded-2xl p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="mb-6 inline-flex p-3 rounded-lg bg-rail-purple/10 text-rail-purple">
                <pillar.icon className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-grotesk">
                {pillar.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
