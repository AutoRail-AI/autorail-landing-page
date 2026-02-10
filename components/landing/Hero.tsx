"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button, Container } from "components/ui"
import { GradientText } from "components/shared/GradientText"
import { cn } from "lib/utils"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] overflow-hidden bg-void-black pt-32 pb-16 flex items-center justify-center">
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-electric-cyan/5 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-rail-purple/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <Container className="relative z-10">
                <div className="mx-auto max-w-5xl text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                            <Sparkles className="h-4 w-4 text-electric-cyan" />
                            <span className="text-sm font-medium text-cloud-white/80">
                                Engineering Intelligence Platform
                            </span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6 font-grotesk text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl"
                    >
                        Engineering Intelligence for the{" "}
                        <br className="hidden md:block" />
                        <GradientText variant="brand">Agentic Age</GradientText>
                    </motion.h1>

                    {/* Subhead */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto mb-10 max-w-3xl text-lg text-white/60 md:text-xl"
                    >
                        Stop building with blind AI. From hyper-personalized code generation to
                        autonomous legacy modernization, AutoRail powers the next generation of
                        software engineering.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button
                            size="lg"
                            className="group border border-electric-cyan/50 bg-electric-cyan/10 text-electric-cyan hover:bg-electric-cyan/20 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
                        >
                            Discover Code Synapse
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>

                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-rail-purple to-quantum-violet text-white hover:shadow-[0_0_30px_rgba(110,24,179,0.4)] hover:brightness-110"
                        >
                            Request Necroma Access
                        </Button>
                    </motion.div>
                </div>

                {/* Core Animation Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-20 flex justify-center"
                >
                    <div className="relative h-[2px] w-full max-w-4xl bg-gradient-to-r from-transparent via-white/20 to-transparent">
                        {/* Left Flow (Synapse - Cyan) */}
                        <div className="absolute top-1/2 left-0 h-[100px] w-[50%] -translate-y-1/2 overflow-hidden bg-gradient-to-r from-transparent to-electric-cyan/20 blur-[40px]" />

                        {/* Right Flow (Necroma - Purple) */}
                        <div className="absolute top-1/2 right-0 h-[100px] w-[50%] -translate-y-1/2 overflow-hidden bg-gradient-to-l from-transparent to-rail-purple/20 blur-[40px]" />

                        {/* Center Core */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="relative h-24 w-24 rounded-full border border-white/10 bg-void-black flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                                <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse" />
                                <div className="h-12 w-12 rounded-full bg-white blur-[20px] opacity-20" />
                                <div className="absolute h-3 w-3 bg-white rounded-full shadow-[0_0_20px_white]" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
