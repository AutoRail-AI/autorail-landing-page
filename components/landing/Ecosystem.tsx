"use client"

import { motion } from "framer-motion"
import { Container } from "components/ui"
import { SECTION_IDS } from "lib/constants"

const TECH_STACK = ["Model Context Protocol", "CozoDB", "LangGraph", "OpenHands", "Gemini 2.0"]

export function Ecosystem() {
  return (
    <section
      id={SECTION_IDS.ecosystem}
      className="py-20 bg-void-black border-t border-white/5 scroll-mt-20"
    >
            <Container>
                <div className="text-center mb-10">
                    <span className="text-sm font-mono text-white/40 uppercase tracking-widest">Built on the Agentic Stack</span>
                </div>

                <div className="relative overflow-hidden">
                    {/* Gradients to fade edges */}
                    <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-void-black to-transparent z-10" />
                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-void-black to-transparent z-10" />

                    <motion.div
                        className="flex gap-12 md:gap-24 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20
                        }}
                    >
                        {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                            <span key={i} className="text-xl md:text-2xl font-bold text-white/30 hover:text-white/60 transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
