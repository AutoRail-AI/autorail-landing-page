"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button, Container } from "components/ui"
import { SECTION_IDS } from "lib/constants"
import { NECROMA } from "data/products"
import { staggerContainer, cardItem } from "lib/animations"

const NECROMA_STEPS = [
  "Plan: Analyze legacy",
  "Execute: Modernize slice",
  "Verify: Behavior + self-heal",
]

export function Necroma() {
  return (
    <section
      id={SECTION_IDS.necroma}
      className="py-24 bg-void-black relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-rail-purple/5 blur-[120px] pointer-events-none" />

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-sm font-mono tracking-wider text-rail-purple uppercase mb-2">
            {NECROMA.name}
          </p>
          <motion.p variants={cardItem} className="text-rail-purple/90 text-lg mb-4">
            {NECROMA.tagline}
          </motion.p>
          <motion.h2
            variants={cardItem}
            className="text-3xl md:text-4xl font-bold text-white mb-6 font-grotesk"
          >
            {NECROMA.headline}
          </motion.h2>
          <motion.p
            variants={cardItem}
            className="text-white/70 text-lg mb-10 max-w-2xl"
          >
            {NECROMA.pitch}
          </motion.p>

          {/* Badges */}
          <motion.div variants={cardItem} className="flex flex-wrap gap-2 mb-10">
            {NECROMA.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full text-xs font-medium bg-rail-purple/10 text-rail-purple border border-rail-purple/20"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {NECROMA.features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={cardItem}
                className="p-6 rounded-2xl border border-rail-purple/10 bg-white/[0.02] hover:border-rail-purple/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2 font-grotesk">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Visual: Plan → Execute → Verify */}
          <motion.div
            variants={cardItem}
            className="flex justify-center py-12 mb-10"
          >
            <div className="relative flex flex-col gap-4 w-full max-w-[280px]">
              {NECROMA_STEPS.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-3 rounded-lg border border-rail-purple/30 bg-rail-purple/10 backdrop-blur-md flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-rail-purple animate-pulse" />
                  <span className="text-xs font-mono text-white/90">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={cardItem}>
            <Button
              href={`#${SECTION_IDS.cta}`}
              className="w-full sm:w-auto bg-gradient-to-r from-rail-purple to-quantum-violet text-white hover:shadow-[0_0_30px_rgba(110,24,179,0.4)] hover:brightness-110 group/btn"
            >
              {NECROMA.cta.primary}
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" aria-hidden />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
