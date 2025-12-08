"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Container, SectionHeader } from "components/ui"
import { CAPABILITIES } from "data/capabilities"
import { cardItem, staggerContainer, viewportSettings } from "lib/animations"
import { SECTION_IDS } from "lib/constants"

export function CapabilitiesSection() {
  return (
    <section
      id={SECTION_IDS.capabilities}
      className="relative overflow-hidden bg-slate-grey py-20 md:py-24"
    >
      <Container>
        <SectionHeader
          title="Built for Production, From Day One"
          description="Six core primitives, automatically provisioned for every vibe-coded app."
        />

        {/* Capabilities Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CAPABILITIES.map((capability) => (
            <motion.div key={capability.title} variants={cardItem}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-slate-grey">
                    <capability.icon className="size-6 text-rail-purple" />
                  </div>
                  <CardTitle>{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{capability.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
