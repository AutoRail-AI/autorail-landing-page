"use client"

import { motion } from "framer-motion"
import { Container } from "components/ui"
import { GradientText } from "components/shared/GradientText"

export function Mission() {
    return (
        <section className="py-24 bg-void-black relative overflow-hidden">
            <div className="absolute inset-0 bg-rail-purple/5 blur-[100px] pointer-events-none" />

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-relaxed font-grotesk">
                        We are transitioning from infrastructure to <GradientText variant="brand">intelligence</GradientText>.
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-electric-cyan to-rail-purple mx-auto my-8 rounded-full opacity-50" />
                    <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                        autorail is the nervous system for the next generation of software engineering—where code is not just written, but understood, evolved, and resurrected.
                    </p>
                </motion.div>
            </Container>
        </section>
    )
}
