"use client"

import { motion } from "framer-motion"
import { ArrowDown, Check, Copy, Shield } from "lucide-react"
import { useState } from "react"
import { Button, Container } from "components/ui"
import { GradientText } from "components/shared/GradientText"
import { SECTION_IDS } from "lib/constants"
import { staggerContainer, cardItem } from "lib/animations"
import { cn } from "lib/utils"

const HERO = {
  badge: "Industrial Safety for AI Development",
  headline: "Vibe Coding, Industrialized.",
  subhead:
    "Your team is already using AI agents to move fast. But speed without standards is just a faster path to technical debt. autorail provides the Context and Verification layers that make autonomous development safe for the enterprise.",
  primaryCommand: "npm install code-synapse",
  secondaryCta: "Secure Your Legacy Systems",
  scrollHint: "See what breaks without guardrails",
}

export function Hero() {
  const [copied, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText(HERO.primaryCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-[90vh] overflow-hidden bg-void-black pt-32 pb-16 flex flex-col items-center justify-center"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-electric-cyan/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-rail-purple/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <Container className="relative z-10 flex-1 flex flex-col items-center justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center"
        >
          {/* Badge */}
          <motion.div variants={cardItem} className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <Shield className="h-4 w-4 text-electric-cyan" />
              <span className="text-sm font-medium text-cloud-white/80">
                {HERO.badge}
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={cardItem}
            className="mb-6 font-grotesk text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl"
          >
            {HERO.headline.split(" ").slice(0, -1).join(" ")}{" "}
            <GradientText variant="synapse">
              {HERO.headline.split(" ").slice(-1)[0]?.replace(".", "")}.
            </GradientText>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={cardItem}
            className="mx-auto mb-10 max-w-3xl text-lg text-white/60 md:text-xl leading-relaxed"
          >
            {HERO.subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={cardItem}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <button
              type="button"
              onClick={copyCommand}
              className={cn(
                "group flex items-center gap-3 px-5 py-3 rounded-xl",
                "border border-electric-cyan/50 bg-electric-cyan/10 text-electric-cyan",
                "hover:bg-electric-cyan/20 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]",
                "transition-all duration-300 font-mono text-sm md:text-base"
              )}
            >
              <code>{HERO.primaryCommand}</code>
              {copied ? (
                <Check className="h-4 w-4 text-electric-cyan shrink-0" aria-hidden />
              ) : (
                <Copy className="h-4 w-4 text-electric-cyan/70 group-hover:text-electric-cyan shrink-0" aria-hidden />
              )}
            </button>

            <Button
              href={`#${SECTION_IDS.necroma}`}
              size="lg"
              className="bg-gradient-to-r from-rail-purple to-quantum-violet text-white hover:shadow-[0_0_30px_rgba(110,24,179,0.4)] hover:brightness-110"
            >
              {HERO.secondaryCta}
              <ArrowDown className="ml-2 h-4 w-4 rotate-[-90deg]" aria-hidden />
            </Button>
          </motion.div>
        </motion.div>

        {/* Core Animation Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative h-[2px] w-full max-w-4xl bg-gradient-to-r from-transparent via-white/20 to-transparent">
            <div className="absolute top-1/2 left-0 h-[100px] w-[50%] -translate-y-1/2 overflow-hidden bg-gradient-to-r from-transparent to-electric-cyan/20 blur-[40px]" />
            <div className="absolute top-1/2 right-0 h-[100px] w-[50%] -translate-y-1/2 overflow-hidden bg-gradient-to-l from-transparent to-rail-purple/20 blur-[40px]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative h-24 w-24 rounded-full border border-white/10 bg-void-black flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse" />
                <div className="h-12 w-12 rounded-full bg-white blur-[20px] opacity-20" />
                <div className="absolute h-3 w-3 bg-white rounded-full shadow-[0_0_20px_white]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-16 flex flex-col items-center gap-2 text-white/40 text-sm"
        >
          <span>{HERO.scrollHint}</span>
          <a
            href={`#${SECTION_IDS.day2Problem}`}
            className="flex flex-col items-center gap-1 text-white/50 hover:text-electric-cyan transition-colors"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
