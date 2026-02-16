"use client"

import { motion } from "framer-motion"
import { ArrowRight, Brain, Check, Copy, Sparkles } from "lucide-react"
import { useState } from "react"
import { Container } from "components/ui"
import { calTriggerProps } from "components/providers"
import { cn } from "lib/utils"

export function ProductSplit() {
    const [copied, setCopied] = useState(false)

    const copyCommand = () => {
        navigator.clipboard.writeText("npm install kap10")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section className="py-24 bg-void-black relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Card: kap10 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative rounded-3xl border border-electric-cyan/20 bg-void-black/50 overflow-hidden"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-electric-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative p-8 md:p-12 h-full flex flex-col">
                            {/* Badge */}
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/20">
                                    Public Beta
                                </span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/60 border border-white/10">
                                    Open Source
                                </span>
                            </div>

                            {/* Header */}
                            <div className="mb-6">
                                <h3 className="text-electric-cyan font-mono text-sm tracking-wider uppercase mb-2">The Cognitive Engine</h3>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Code That Belongs</h2>
                                <p className="text-white/70 leading-relaxed">
                                    A living knowledge graph that turns your codebase into a structured memory for AI agents.
                                    Eliminate "Alien Code" with hyper-personalized generation that respects your team's patterns.
                                </p>
                            </div>

                            {/* Visual - Abstract Graph Node */}
                            <div className="flex-grow flex items-center justify-center py-12">
                                <div className="relative w-48 h-48">
                                    <div className="absolute inset-0 bg-electric-cyan/20 rounded-full blur-[60px]" />
                                    <div className="relative z-10 grid grid-cols-2 gap-4 animate-pulse-glow">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="w-16 h-16 rounded-xl border border-electric-cyan/30 bg-electric-cyan/5 flex items-center justify-center backdrop-blur-sm">
                                                <Brain className="w-6 h-6 text-electric-cyan" />
                                            </div>
                                        ))}
                                    </div>
                                    {/* Connecting lines simulated */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                                        <line x1="25%" y1="25%" x2="75%" y2="75%" stroke="#00E5FF" strokeWidth="1" />
                                        <line x1="75%" y1="25%" x2="25%" y2="75%" stroke="#00E5FF" strokeWidth="1" />
                                    </svg>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {["MCP-Native (Cursor, Claude, Windsurf)", "Living Knowledge Graph & Business Intent", "Persistent Team Memory"].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                        <Check className="w-4 h-4 text-electric-cyan" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Action */}
                            <div className="mt-auto">
                                <button
                                    onClick={copyCommand}
                                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-electric-cyan/50 transition-colors group/cmd"
                                >
                                    <code className="text-electric-cyan font-mono text-sm">npm install kap10</code>
                                    {copied ? (
                                        <Check className="w-4 h-4 text-electric-cyan" />
                                    ) : (
                                        <Copy className="w-4 h-4 text-white/40 group-hover/cmd:text-electric-cyan transition-colors" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Card: necroma */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative rounded-3xl border border-rail-purple/20 bg-void-black/50 overflow-hidden"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-rail-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative p-8 md:p-12 h-full flex flex-col">
                            {/* Badge */}
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-rail-purple/10 text-rail-purple border border-rail-purple/20">
                                    Enterprise
                                </span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/60 border border-white/10">
                                    Invite Only
                                </span>
                            </div>

                            {/* Header */}
                            <div className="mb-6">
                                <h3 className="text-rail-purple font-mono text-sm tracking-wider uppercase mb-2">The Autonomous Workforce</h3>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Reincarnate Your Software</h2>
                                <p className="text-white/70 leading-relaxed">
                                    The "legacy code necromancer." An autonomous agentic platform that transmutes legacy systems
                                    into modern, test-verified applications. Preserves behavior, not just syntax.
                                </p>
                            </div>

                            {/* Visual - Glass Brain Cards */}
                            <div className="flex-grow flex items-center justify-center py-12 relative">
                                <div className="absolute inset-0 bg-rail-purple/20 rounded-full blur-[80px]" />
                                <div className="relative z-10 flex flex-col gap-4 w-full max-w-[240px]">
                                    {["Plan: Analyze Monolith", "Work: Extract Auth Module", "Verify: 100% Test Coverage"].map((step, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ x: -20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                            className="p-3 rounded-lg border border-rail-purple/30 bg-rail-purple/10 backdrop-blur-md flex items-center gap-3"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-rail-purple animate-pulse" />
                                            <span className="text-xs font-mono text-white/90">{step}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {["Glass Brain Cognition Dashboard", "Vertical Slice Architecture Migration", "Self-Healing Verification Loops"].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                        <Sparkles className="w-4 h-4 text-rail-purple" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Action */}
                            <div className="mt-auto">
                                <button
                                    {...calTriggerProps}
                                    className={cn(
                                        "w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-sm cursor-pointer",
                                        "bg-transparent border border-rail-purple text-rail-purple",
                                        "hover:bg-rail-purple/10 hover:shadow-[0_0_20px_rgba(110,24,179,0.2)]",
                                        "transition-all group/btn"
                                    )}
                                >
                                    Get Early Access
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
