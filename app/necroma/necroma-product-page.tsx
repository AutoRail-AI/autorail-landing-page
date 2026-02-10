"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { Button, Container } from "components/ui"
import { GlassBrainShowcase } from "components/glass-brain"
import { NECROMA } from "data/products"
import { staggerContainer, cardItem } from "lib/animations"

export function NecromaProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 pt-24 pb-16">
        <div className="absolute inset-0 bg-rail-purple/5 blur-[120px] pointer-events-none" />
        <Container className="relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-rail-purple transition-colors mb-8"
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
              {NECROMA.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-rail-purple/10 text-rail-purple border border-rail-purple/20"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
            <motion.p variants={cardItem} className="text-rail-purple font-mono text-sm tracking-wider uppercase mb-2">
              {NECROMA.name}
            </motion.p>
            <motion.h1 variants={cardItem} className="text-4xl md:text-5xl font-bold text-white font-grotesk mb-4">
              {NECROMA.headline}
            </motion.h1>
            <motion.p variants={cardItem} className="text-xl text-white/70 mb-8">
              {NECROMA.tagline}
            </motion.p>
            <motion.p variants={cardItem} className="text-lg text-white/60 mb-10">
              {NECROMA.pitch}
            </motion.p>
            <motion.div variants={cardItem}>
              <Button
                href="/#cta"
                className="bg-gradient-to-r from-rail-purple to-quantum-violet text-white hover:shadow-[0_0_30px_rgba(110,24,179,0.4)]"
              >
                {NECROMA.cta.primary}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Glass Brain View showcase */}
      <section className="py-24 border-b border-white/5">
        <Container>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white font-grotesk mb-3">
              Build dashboard — live view
            </h2>
            <p className="text-white/60 max-w-2xl">
              The Glass Brain view gives you full visibility into the agent: workspace changes, build console, and AI reasoning — with self-heal cycles and confidence in one place.
            </p>
          </div>
          <GlassBrainShowcase />
        </Container>
      </section>

      {/* Features */}
      <section className="py-24 border-b border-white/5">
        <Container>
          <h2 className="text-2xl font-bold text-white font-grotesk mb-12">
            Key capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {NECROMA.features.map((feature, i) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 border border-white/10"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-rail-purple/10 text-rail-purple">
                  {feature.title.includes("Verification") ? (
                    <Shield className="w-6 h-6" aria-hidden />
                  ) : (
                    <Zap className="w-6 h-6" aria-hidden />
                  )}
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
          <div className="rounded-2xl border border-rail-purple/20 bg-rail-purple/5 p-12 text-center">
            <h2 className="text-2xl font-bold text-white font-grotesk mb-4">
              Secure your legacy systems
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              necroma is invite-only. Join the waitlist for early access to autonomous legacy reclamation with full Glass Brain visibility.
            </p>
            <Button
              href="/#cta"
              className="bg-gradient-to-r from-rail-purple to-quantum-violet text-white hover:shadow-[0_0_30px_rgba(110,24,179,0.4)]"
            >
              {NECROMA.cta.primary}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
