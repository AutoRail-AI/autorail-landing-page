"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Container, SectionHeader } from "components/ui"
import { FAQ_ITEMS } from "data/faq"
import { fadeInUp, viewportSettings } from "lib/animations"
import { SECTION_IDS } from "lib/constants"

export function FAQSection() {
  return (
    <section
      id={SECTION_IDS.faq}
      className="relative overflow-hidden bg-void-black py-20 md:py-24"
    >
      <Container size="narrow">
        <SectionHeader title="Frequently Asked Questions" />

        {/* FAQ Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="mt-12"
          role="region"
          aria-label="Frequently asked questions"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="faq-question">{item.question}</AccordionTrigger>
                <AccordionContent className="faq-answer">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  )
}
