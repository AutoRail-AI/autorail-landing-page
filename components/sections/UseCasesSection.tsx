"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Container, SectionHeader } from "components/ui"
import { PERSONAS } from "data/personas"
import { cardItem, staggerContainer, viewportSettings } from "lib/animations"
import { SECTION_IDS } from "lib/constants"

export function UseCasesSection() {
  return (
    <section
      id={SECTION_IDS.useCases}
      className="relative overflow-hidden bg-slate-grey py-20 md:py-24"
    >
      <Container>
        <SectionHeader
          title="Built for Builders"
          description="From indie hackers to product teams, AutoRail powers apps that need to scale reliably."
        />

        {/* Persona Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {PERSONAS.map((persona) => (
            <motion.div key={persona.title} variants={cardItem}>
              <Card className="h-full">
                <CardHeader className="items-center text-center">
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-slate-grey">
                    <persona.icon className="size-8 text-quantum-violet" />
                  </div>
                  <CardTitle className="text-xl">{persona.title}</CardTitle>
                  <p className="mt-2 font-[family-name:var(--font-grotesk)] text-sm font-medium text-electric-cyan">
                    {persona.benefit}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>{persona.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  )
}
