"use client"

import { motion } from "framer-motion"
import { Container } from "components/ui"
import { SECTION_IDS } from "lib/constants"
import { COLLAPSES } from "data/collapses"
import { staggerContainerSlow, cardItem } from "lib/animations"
import { cn } from "lib/utils"

const DAY2 = {
  eyebrow: "The Problem",
  headline: "The 'Day 2' Hangover.",
  subhead:
    "AI agents are incredible at Day 1 creation. They are terrible at Day 2 maintenance. Without guardrails, the gold mine collapses:",
}

export function Day2Problem() {
  return (
    <section
      id={SECTION_IDS.day2Problem}
      className="py-24 bg-void-black relative scroll-mt-20"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container>
        <div className="mb-16 text-center">
          <p className="text-sm font-mono tracking-wider text-electric-cyan uppercase mb-3">
            {DAY2.eyebrow}
          </p>
          <h2 className="text-3xl font-bold font-grotesk text-white md:text-4xl mb-6">
            {DAY2.headline}
          </h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg leading-relaxed">
            {DAY2.subhead}
          </p>
        </div>

        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {COLLAPSES.map((collapse) => (
            <motion.article
              key={collapse.id}
              variants={cardItem}
              className={cn(
                "group relative p-8 rounded-2xl border bg-white/[0.02] transition-colors",
                "hover:bg-white/[0.04]",
                collapse.productId === "code-synapse" &&
                  "border-electric-cyan/20 hover:border-electric-cyan/40",
                collapse.productId === "knowledge-graph" &&
                  "border-electric-cyan/15 hover:border-electric-cyan/30",
                collapse.productId === "necroma" &&
                  "border-rail-purple/20 hover:border-rail-purple/40"
              )}
            >
              {/* Product indicator bar */}
              <div
                className={cn(
                  "absolute top-0 left-0 right-0 h-1 rounded-t-2xl",
                  collapse.productId === "necroma"
                    ? "bg-rail-purple/60"
                    : "bg-electric-cyan/60"
                )}
              />
              <div className="mb-6 inline-flex p-3 rounded-lg bg-slate-grey/50 text-white/80 group-hover:text-white transition-all duration-300">
                <collapse.icon className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-grotesk">
                {collapse.title}
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                {collapse.description}
              </p>
              <p
                className={cn(
                  "text-sm font-medium",
                  collapse.productId === "necroma"
                    ? "text-rail-purple"
                    : "text-electric-cyan"
                )}
              >
                Solved by {collapse.solvedBy}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Connector hint */}
        <div className="mt-16 flex justify-center">
          <div className="h-8 w-px bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </Container>
    </section>
  )
}
