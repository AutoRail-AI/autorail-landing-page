"use client"

import { motion } from "framer-motion"
import { Container } from "components/ui"
import { WaitlistForm } from "components/shared"
import { blurReveal } from "lib/animations"

const snap = [0.16, 1, 0.3, 1] as const

export function WaitlistSection() {
  return (
    <section id="waitlist" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container className="relative max-w-2xl">
        <motion.div
          variants={blurReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-electric-cyan/50 mb-3">
            Early Access
          </p>
          <h2 className="text-display-m text-white mb-4">
            Join the waitlist.
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Be the first to try autorail. We&apos;ll onboard you personally
            when your seat is ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: snap }}
          className="rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-[12px] p-8"
          style={{
            boxShadow:
              "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          <WaitlistForm showBenefits />
        </motion.div>
      </Container>
    </section>
  )
}
