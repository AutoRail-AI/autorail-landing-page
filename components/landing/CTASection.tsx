"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { useState } from "react"
import { Button, Container } from "components/ui"
import { SECTION_IDS, SITE_CONFIG } from "lib/constants"
import { CODE_SYNAPSE, NECROMA } from "data/products"
import { cn } from "lib/utils"

const CTA_HEADING = "Ready to Industrialize?"

export function CTASection() {
  const [email, setEmail] = useState("")

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    window.location.href = `mailto:enterprise@autorail.dev?subject=necroma%20waitlist&body=Email:%20${encodeURIComponent(email.trim())}`
  }

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  return (
    <section
      id={SECTION_IDS.cta}
      className="relative py-24 bg-void-black overflow-hidden scroll-mt-20"
    >
      {/* Crisp radial glow — not full-screen wash */}
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(110,24,179,0.06) 0%, transparent 70%)" }}
      />

      <Container className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-display-m text-white mb-16"
        >
          {CTA_HEADING}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: code-synapse — Cyan accent */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl glass-card p-8 hover:border-electric-cyan/30 transition-colors"
          >
            <h3 className="text-electric-cyan font-grotesk text-xl font-bold mb-2">
              {CODE_SYNAPSE.name}
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Open source. Explore the codebase and star the repo.
            </p>
            <Button
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="w-full"
            >
              View on GitHub
              <ExternalLink className="w-4 h-4 ml-2" aria-hidden />
            </Button>
          </motion.div>

          {/* Right: necroma waitlist — Purple accent */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl glass-card p-8 hover:border-rail-purple/30 transition-colors"
          >
            <h3 className="text-rail-purple font-grotesk text-xl font-bold mb-2">
              {NECROMA.name}
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Secure your legacy systems. Join the waitlist.
            </p>
            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className={cn(
                  "w-full px-4 py-3 rounded-lg font-sans text-sm",
                  "border border-white/10 bg-white/[0.03] text-white placeholder:text-white/30",
                  "focus:outline-none focus:ring-1 focus:ring-rail-purple/50 focus:border-rail-purple/50 transition-all"
                )}
                aria-label="Email for necroma waitlist"
              />
              <button
                type="submit"
                disabled={!email.trim() || !isValidEmail(email.trim())}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium text-sm",
                  "bg-transparent border border-rail-purple text-rail-purple",
                  "hover:bg-rail-purple/10 hover:shadow-[0_0_20px_rgba(110,24,179,0.2)]",
                  "transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                )}
              >
                {NECROMA.cta.primary}
                <ArrowRight className="w-4 h-4" aria-hidden />
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
