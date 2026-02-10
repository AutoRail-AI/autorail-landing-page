"use client"

import { motion } from "framer-motion"
import { EyeOff, FileWarning, ShieldAlert } from "lucide-react"
import { Container } from "components/ui"

const FEATURES = [
    {
        icon: FileWarning,
        title: "Context Rot",
        description: "Rules files (.cursorrules) fail as context grows. AI needs a dynamic graph, not a static text file to understand your business intent.",
    },
    {
        icon: EyeOff,
        title: "The Blind Spot",
        description: "Standard agents can't see across microservices or understand why legacy code exists, leading to shallow refactors that break logic.",
    },
    {
        icon: ShieldAlert,
        title: "The Trust Gap",
        description: "Black-box code generation isn't enough for enterprise. You need auditable, self-healing verification loops to trust the output.",
    },
]

export function FeatureGrid() {
    return (
        <section className="py-24 bg-void-black relative">
            {/* Separator Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <Container>
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold font-grotesk text-white md:text-4xl mb-6">
                        Why AI Coding Hits a Wall
                    </h2>
                    <p className="max-w-2xl mx-auto text-white/60 text-lg">
                        Current tools are built for snippets, not systems. Real engineering requires memory, vision, and verification.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FEATURES.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                        >
                            <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-grotesk">{feature.title}</h3>
                            <p className="text-white/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
