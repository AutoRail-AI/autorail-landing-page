"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "components/ui"
import { SECTION_IDS } from "lib/constants"
import { NECROMA } from "data/products"
import { staggerContainer, cardItem } from "lib/animations"
import { cn } from "lib/utils"

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
      {/* Crisp radial glow — not full-screen wash */}
      <div
        className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(110,24,179,0.06) 0%, transparent 70%)" }}
      />

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-label text-rail-purple mb-2">
            {NECROMA.name}
          </p>
          <motion.p variants={cardItem} className="text-rail-purple/90 text-lg mb-4">
            {NECROMA.tagline}
          </motion.p>
          <motion.h2
            variants={cardItem}
            className="text-display-m text-white mb-6"
          >
            {NECROMA.headline}
          </motion.h2>
          <motion.p
            variants={cardItem}
            className="text-gray-300 text-lg mb-10 max-w-2xl"
          >
            {NECROMA.pitch}
          </motion.p>

          {/* Badges */}
          <motion.div variants={cardItem} className="flex flex-wrap gap-2 mb-10">
            {NECROMA.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-rail-purple/10 text-rail-purple border border-rail-purple/20"
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
                className="p-6 rounded-xl glass-card hover:border-rail-purple/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2 font-grotesk">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
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
                  className="p-3 rounded-lg border border-rail-purple/30 bg-white/[0.03] flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-rail-purple animate-pulse" />
                  <span className="text-xs font-mono text-gray-300">{step}</span>
                </motion.div>
              ))}
              {/* Circuit connector between steps */}
              <div className="absolute left-[18px] top-[24px] bottom-[24px] w-px bg-white/10" />
            </div>
          </motion.div>

          {/* CTA — transparent+border style */}
          <motion.div variants={cardItem}>
            <a
              href={`#${SECTION_IDS.cta}`}
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm",
                "bg-transparent border border-rail-purple text-rail-purple",
                "hover:bg-rail-purple/10 hover:shadow-[0_0_20px_rgba(110,24,179,0.2)]",
                "transition-all group/btn"
              )}
            >
              {NECROMA.cta.primary}
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
