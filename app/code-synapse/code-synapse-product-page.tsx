"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Brain, Check, Copy, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button, Container } from "components/ui"
import { CODE_SYNAPSE } from "data/products"
import { SITE_CONFIG } from "lib/constants"
import { staggerContainer, cardItem } from "lib/animations"
import { cn } from "lib/utils"

export function CodeSynapseProductPage() {
  const [copied, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText(`npm install ${CODE_SYNAPSE.npmPackage}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 pt-24 pb-16">
        <div className="absolute inset-0 bg-electric-cyan/5 blur-[120px] pointer-events-none" />
        <Container className="relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-electric-cyan transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={cardItem} className="flex flex-wrap gap-2 mb-4">
              {CODE_SYNAPSE.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/20"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
            <motion.p variants={cardItem} className="text-electric-cyan font-mono text-sm tracking-wider uppercase mb-2">
              {CODE_SYNAPSE.name}
            </motion.p>
            <motion.h1 variants={cardItem} className="text-4xl md:text-5xl font-bold text-white font-grotesk mb-4">
              {CODE_SYNAPSE.headline}
            </motion.h1>
            <motion.p variants={cardItem} className="text-xl text-white/70 mb-8">
              {CODE_SYNAPSE.tagline}
            </motion.p>
            <motion.p variants={cardItem} className="text-lg text-white/60 mb-10">
              {CODE_SYNAPSE.pitch}
            </motion.p>
            <motion.div variants={cardItem} className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={copyCommand}
                className={cn(
                  "flex items-center gap-3 px-5 py-3 rounded-xl font-mono text-sm",
                  "border border-electric-cyan/50 bg-electric-cyan/10 text-electric-cyan",
                  "hover:bg-electric-cyan/20 transition-colors"
                )}
              >
                <code>npm install {CODE_SYNAPSE.npmPackage}</code>
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <Button
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan/10"
              >
                {CODE_SYNAPSE.cta.secondary}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-24 border-b border-white/5">
        <Container>
          <h2 className="text-2xl font-bold text-white font-grotesk mb-12">
            Key capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {CODE_SYNAPSE.features.map((feature, i) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 border border-white/10"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-electric-cyan/10 text-electric-cyan">
                  <Brain className="w-6 h-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-white font-grotesk mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container>
          <div className="rounded-2xl border border-electric-cyan/20 bg-electric-cyan/5 p-12 text-center">
            <h2 className="text-2xl font-bold text-white font-grotesk mb-4">
              Start in 30 seconds
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Install the safety kit and connect your IDE. No backend required.
            </p>
            <button
              type="button"
              onClick={copyCommand}
              className={cn(
                "inline-flex items-center gap-3 px-6 py-4 rounded-xl font-mono text-base",
                "border border-electric-cyan/50 bg-void-black/80 text-electric-cyan",
                "hover:bg-electric-cyan/10 transition-colors"
              )}
            >
              <code>npm install {CODE_SYNAPSE.npmPackage}</code>
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </Container>
      </section>
    </>
  )
}
