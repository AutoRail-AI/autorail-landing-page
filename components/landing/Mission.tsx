"use client"

import { motion } from "framer-motion"
import { Container } from "components/ui"
import { GradientText } from "components/shared/GradientText"

export function Mission() {
    return (
        <section className="py-24 bg-void-black relative overflow-hidden">
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
                    {/* Rigid white/10 circuit line — no color blending */}
                    <div className="w-24 h-px bg-white/10 mx-auto my-8" />
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        autorail is the nervous system for the next generation of software engineering—where code is not just written, but understood, evolved, and resurrected.
                    </p>
                </motion.div>
            </Container>
        </section>
    )
}
