"use client"

import { motion } from "framer-motion"
import { GradientMesh, HeroVisual } from "components/graphics"
import { Badge, Button, Container } from "components/ui"
import { fadeInUp, scaleIn } from "lib/animations"
import { CTA_TEXT, SECTION_IDS, SITE_CONFIG } from "lib/constants"
import { cn } from "lib/utils"

export function HeroSection() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen overflow-hidden bg-void-black pt-24 md:pt-32"
    >
      {/* Background layers */}
      <GradientMesh variant="hero" />
      <HeroVisual />

      <Container className="relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
          >
            <Badge size="lg" className="mb-8">
              Launching Soon
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={cn(
              "font-[family-name:var(--font-grotesk)] font-bold text-pure-white",
              "text-4xl md:text-5xl lg:text-6xl",
              "leading-tight tracking-tight"
            )}
          >
            Infrastructure Platform for
            <br />
            <span className="text-gradient">Vibe-Coded Applications</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary md:text-xl"
          >
            Frontend generation gives you momentum.
            <br className="hidden sm:block" />
            {SITE_CONFIG.name} gives you the infrastructure to sustain it.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href={`#${SECTION_IDS.cta}`} size="lg">
              {CTA_TEXT.primary}
            </Button>
            <Button href={`#${SECTION_IDS.howItWorks}`} variant="secondary" size="lg">
              {CTA_TEXT.secondary}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
