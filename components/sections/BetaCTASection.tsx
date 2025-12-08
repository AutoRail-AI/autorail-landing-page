"use client"

import { motion } from "framer-motion"
import { GradientMesh } from "components/graphics"
import { Badge, Button, Container } from "components/ui"
import { fadeInUp, scaleIn, viewportSettings } from "lib/animations"
import { CTA_TEXT, SECTION_IDS } from "lib/constants"

export function BetaCTASection() {
  return (
    <section
      id={SECTION_IDS.cta}
      className="relative overflow-hidden bg-void-black py-20 md:py-24"
    >
      <GradientMesh variant="cta" />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="mx-auto max-w-2xl"
        >
          {/* CTA Card */}
          <div className="relative rounded-2xl border-2 border-quantum-violet/30 bg-slate-grey/50 p-8 text-center backdrop-blur-sm md:p-12 glow-purple-strong">
            {/* Badge */}
            <motion.div variants={scaleIn}>
              <Badge size="lg" className="mb-6">
                Launching Soon
              </Badge>
            </motion.div>

            {/* Headline */}
            <h2 className="font-[family-name:var(--font-grotesk)] text-3xl font-semibold text-cloud-white md:text-4xl">
              Launching Soon
            </h2>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-lg text-lg text-foreground-secondary">
              Join the waitlist to be among the first to ship production-ready apps from vibe-coded prototypes.
            </p>

            <p className="mt-2 text-sm text-foreground-muted">
              Early adopters get priority access and direct input on the roadmap.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Button size="lg" className="w-full sm:w-auto">
                {CTA_TEXT.primaryWithDate}
              </Button>
            </div>

            {/* Trust Statement */}
            <p className="mt-6 text-sm text-foreground-muted">
              No spam. No email required. Just bookmark and check back.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
