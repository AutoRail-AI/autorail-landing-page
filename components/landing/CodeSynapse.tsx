"use client"

import { motion } from "framer-motion"
import { Brain, Check, Copy, ExternalLink } from "lucide-react"
import { useState } from "react"
import { Button, Container } from "components/ui"
import { SECTION_IDS, SITE_CONFIG } from "lib/constants"
import { CODE_SYNAPSE } from "data/products"
import { staggerContainer, cardItem } from "lib/animations"
import { cn } from "lib/utils"

export function CodeSynapse() {
  const [copied, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText(`npm install ${CODE_SYNAPSE.npmPackage}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id={SECTION_IDS.codeSynapse}
      className="py-24 bg-void-black relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-electric-cyan/5 blur-[120px] pointer-events-none" />

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-sm font-mono tracking-wider text-electric-cyan uppercase mb-2">
            {CODE_SYNAPSE.name}
          </p>
          <motion.p variants={cardItem} className="text-electric-cyan/90 text-lg mb-4">
            {CODE_SYNAPSE.tagline}
          </motion.p>
          <motion.h2
            variants={cardItem}
            className="text-3xl md:text-4xl font-bold text-white mb-6 font-grotesk"
          >
            {CODE_SYNAPSE.headline}
          </motion.h2>
          <motion.p
            variants={cardItem}
            className="text-white/70 text-lg mb-10 max-w-2xl"
          >
            {CODE_SYNAPSE.pitch}
          </motion.p>

          {/* Badges */}
          <motion.div variants={cardItem} className="flex flex-wrap gap-2 mb-10">
            {CODE_SYNAPSE.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full text-xs font-medium bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/20"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {CODE_SYNAPSE.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={cardItem}
                className="p-6 rounded-2xl border border-electric-cyan/10 bg-white/[0.02] hover:border-electric-cyan/20 transition-colors"
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

          {/* Visual: knowledge graph placeholder */}
          <motion.div
            variants={cardItem}
            className="flex justify-center py-12 mb-10"
          >
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-electric-cyan/20 rounded-full blur-[60px]" />
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-xl border border-electric-cyan/30 bg-electric-cyan/5 flex items-center justify-center backdrop-blur-sm"
                  >
                    <Brain className="w-6 h-6 text-electric-cyan" aria-hidden />
                  </div>
                ))}
              </div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <line
                  x1="25%"
                  y1="25%"
                  x2="75%"
                  y2="75%"
                  stroke="#00E5FF"
                  strokeWidth="1"
                />
                <line
                  x1="75%"
                  y1="25%"
                  x2="25%"
                  y2="75%"
                  stroke="#00E5FF"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </motion.div>

          {/* Terminal + CTAs */}
          <motion.div variants={cardItem} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={copyCommand}
              className={cn(
                "flex items-center justify-between gap-4 px-4 py-3 rounded-xl font-mono text-sm",
                "border border-electric-cyan/30 bg-void-black/80 text-electric-cyan",
                "hover:border-electric-cyan/50 transition-colors"
              )}
            >
              <code>npm install {CODE_SYNAPSE.npmPackage}</code>
              {copied ? (
                <Check className="w-4 h-4 text-electric-cyan shrink-0" aria-hidden />
              ) : (
                <Copy
                  className="w-4 h-4 text-electric-cyan/60 shrink-0"
                  aria-label="Copy command"
                />
              )}
            </button>
            <Button
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              className="border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan/10 hover:border-electric-cyan/50"
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
