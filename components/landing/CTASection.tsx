"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, Copy } from "lucide-react"
import { useState } from "react"
import { Button, Container } from "components/ui"
import { SECTION_IDS } from "lib/constants"
import { CODE_SYNAPSE, NECROMA } from "data/products"
import { GradientMesh } from "components/graphics"
import { cn } from "lib/utils"

const CTA_HEADING = "Ready to Industrialize?"

export function CTASection() {
  const [copied, setCopied] = useState(false)
  const [email, setEmail] = useState("")

  const copyCommand = () => {
    navigator.clipboard.writeText(`npm install ${CODE_SYNAPSE.npmPackage}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
      className="relative py-24 overflow-hidden scroll-mt-20"
    >
      <GradientMesh variant="cta" className="opacity-40" />
      <div className="absolute inset-0 bg-void-black/60" />

      <Container className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-white font-grotesk mb-16"
        >
          {CTA_HEADING}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: code synapse */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-electric-cyan/20 bg-electric-cyan/5 p-8 backdrop-blur-sm"
          >
            <h3 className="text-electric-cyan font-grotesk text-xl font-bold mb-2">
              {CODE_SYNAPSE.name}
            </h3>
            <p className="text-white/70 text-sm mb-6">
              Start in 30 seconds. Install the safety kit.
            </p>
            <button
              type="button"
              onClick={copyCommand}
              className={cn(
                "w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl font-mono text-sm",
                "border border-electric-cyan/30 bg-void-black/80 text-electric-cyan",
                "hover:border-electric-cyan/50 transition-colors"
              )}
            >
              <code>npm install {CODE_SYNAPSE.npmPackage}</code>
              {copied ? (
                <Check className="w-4 h-4 text-electric-cyan shrink-0" aria-hidden />
              ) : (
                <Copy className="w-4 h-4 text-electric-cyan/60 shrink-0" aria-label="Copy command" />
              )}
            </button>
            <Button
              href="https://github.com/AutoRail-AI"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
              className="mt-4 text-electric-cyan hover:bg-electric-cyan/10"
            >
              View on GitHub
            </Button>
          </motion.div>

          {/* Right: necroma waitlist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-rail-purple/20 bg-rail-purple/5 p-8 backdrop-blur-sm"
          >
            <h3 className="text-rail-purple font-grotesk text-xl font-bold mb-2">
              {NECROMA.name}
            </h3>
            <p className="text-white/70 text-sm mb-6">
              Secure your legacy systems. Join the waitlist.
            </p>
            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className={cn(
                  "w-full px-4 py-3 rounded-xl font-sans text-sm",
                  "border border-rail-purple/30 bg-void-black/80 text-white placeholder:text-white/40",
                  "focus:outline-none focus:ring-2 focus:ring-rail-purple/50 focus:border-rail-purple/50"
                )}
                aria-label="Email for necroma waitlist"
              />
              <Button
                type="submit"
                disabled={!email.trim() || !isValidEmail(email.trim())}
                className="w-full bg-gradient-to-r from-rail-purple to-quantum-violet text-white hover:shadow-[0_0_20px_rgba(110,24,179,0.4)] group/btn disabled:opacity-50"
              >
                {NECROMA.cta.primary}
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" aria-hidden />
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
