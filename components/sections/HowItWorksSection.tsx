"use client"

import { ProcessSteps } from "components/graphics"
import { Container, SectionHeader } from "components/ui"
import { SECTION_IDS } from "lib/constants"

export function HowItWorksSection() {
  return (
    <section
      id={SECTION_IDS.howItWorks}
      className="relative overflow-hidden bg-void-black py-20 md:py-24"
    >
      <Container>
        <SectionHeader
          title="How It Works"
          description="AutoRail transforms vibe-coded prototypes into production applications in four steps."
        />

        {/* Process Steps */}
        <div className="mt-16">
          <ProcessSteps />
        </div>

      </Container>
    </section>
  )
}
