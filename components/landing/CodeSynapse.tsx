"use client"

import { motion } from "framer-motion"
import { Brain, ExternalLink } from "lucide-react"
import { Button, Container } from "components/ui"
import { SECTION_IDS, SITE_CONFIG } from "lib/constants"
import { CODE_SYNAPSE } from "data/products"
import { staggerContainer, cardItem } from "lib/animations"

export function CodeSynapse() {
  return (
    <section
      id={SECTION_IDS.codeSynapse}
      className="py-24 bg-void-black relative overflow-hidden scroll-mt-20"
    >
      {/* Crisp radial glow — not full-screen wash */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)" }}
      />

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-label text-electric-cyan mb-2">
            {CODE_SYNAPSE.name}
          </p>
          <motion.p variants={cardItem} className="text-electric-cyan/90 text-lg mb-4">
            {CODE_SYNAPSE.tagline}
          </motion.p>
          <motion.h2
            variants={cardItem}
            className="text-display-m text-white mb-6"
          >
            {CODE_SYNAPSE.headline}
          </motion.h2>
          <motion.p
            variants={cardItem}
            className="text-gray-300 text-lg mb-10 max-w-2xl"
          >
            {CODE_SYNAPSE.pitch}
          </motion.p>

          {/* Badges */}
          <motion.div variants={cardItem} className="flex flex-wrap gap-2 mb-10">
            {CODE_SYNAPSE.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/20"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {CODE_SYNAPSE.features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={cardItem}
                className="p-6 rounded-xl glass-card hover:border-electric-cyan/30 transition-all"
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

          {/* Visual: knowledge graph */}
          <motion.div
            variants={cardItem}
            className="flex justify-center py-12 mb-10"
          >
            <div className="relative w-48 h-48">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)" }}
              />
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-xl border border-electric-cyan/30 bg-white/[0.03] flex items-center justify-center"
                  >
                    <Brain className="w-6 h-6 text-electric-cyan" aria-hidden />
                  </div>
                ))}
              </div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <line x1="25%" y1="25%" x2="75%" y2="75%" stroke="#00E5FF" strokeWidth="1" />
                <line x1="75%" y1="25%" x2="25%" y2="75%" stroke="#00E5FF" strokeWidth="1" />
              </svg>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={cardItem}>
            <Button
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
            >
              {CODE_SYNAPSE.cta.secondary}
              <ExternalLink className="w-4 h-4 ml-2" aria-hidden />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
