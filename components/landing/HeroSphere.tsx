"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { AntigravityCloud } from "./AntigravityCloud"
import { Container } from "components/ui"
import { SECTION_IDS } from "lib/constants"
import { cn } from "lib/utils"

/* ─────────────────────────────────────────────────────────────────────────────
   HeroSphere — Deep-tech enterprise hero with Antigravity cloud.

   Brand enforcement (docs/brand/brand.md):
     Palette:    Void Black canvas, Electric Cyan + Rail Purple accents only.
     Typography: Display XL (Space Grotesk 700), Body Large (Inter 400),
                 Code Small (JetBrains Mono 400).
     Glass:      Industrial HUD style — border-hud, rounded-lg (never pill).
     Labels:     text-label utility (10px, uppercase, tracking-widest).
     Motion:     Machine precision — ease-out snap, blur-to-sharp materialise.
     Grid:       bg-grid-pattern at low opacity for spatial mapping.
     Glow:       Cyan for intelligence/active, Purple for deep context.

   Composition (back → front):
     1. bg-grid-pattern    — spatial mapping texture
     2. Ambient glow       — faint radial gradient behind cloud
     3. AntigravityCloud   — organic floating code tokens, top-right, bleeds off edge
     4. Radial vignette    — focus attention toward content area
     5. Bottom fade        — seamless section transition
     6. HUD content        — framed with corner brackets
   ───────────────────────────────────────────────────────────────────────────── */

// Machine-precision easing: fast out, smooth settle (brand.md §9.4 — The Snap)
const snap = [0.16, 1, 0.3, 1] as const

export function HeroSphere() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void-black"
    >
      {/* ── Layer 1: Spatial mapping grid (brand.md §9.3) ── */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none" />

      {/* ── Layer 2: Ambient glow behind cloud ── */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[750px] md:h-[750px] translate-x-[30%] -translate-y-[10%] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.05) 0%, rgba(110,24,179,0.03) 40%, transparent 70%)",
        }}
      />

      {/* ── Layer 3: Antigravity Cloud — top-right, bleeds off viewport edge ── */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[800px] md:h-[800px] lg:w-[900px] lg:h-[900px] translate-x-[30%] -translate-y-[8%] pointer-events-none">
        <AntigravityCloud count={50} />
      </div>

      {/* ── Layer 4: Vignette — shifted left to keep cloud visible ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 80% at 42% 50%, transparent 28%, #0A0A0F 100%)",
        }}
      />

      {/* ── Layer 5: Bottom section fade ── */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-void-black to-transparent pointer-events-none" />

      {/* ── Layer 6: Content ── */}
      <Container className="relative z-10 py-32 md:py-40">
        <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto">

          {/* HUD corner brackets — structural framing (brand.md §9.3) */}
          <div
            className="absolute -inset-x-8 -inset-y-6 pointer-events-none hidden md:block"
            aria-hidden
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-white/[0.06]" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-white/[0.06]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-white/[0.06]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-white/[0.06]" />
          </div>

          {/* ── Eyebrow ── */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: snap }}
            className="mb-10"
          >
            <div
              className={cn(
                "inline-flex items-center gap-3 px-4 py-2 rounded-lg",
                "bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm",
              )}
            >
              {/* Live dot with expanding ring (brand.md §10.5) */}
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-electric-cyan opacity-60 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-electric-cyan" />
              </span>
              <span className="text-label">
                Industrial Safety for AI Development
              </span>
            </div>
          </motion.div>

          {/* ── Headline ── */}
          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.06, ease: snap }}
            className="text-display-xl mb-6 leading-[0.95]"
          >
            <span className="block text-cloud-white">Vibe Coding,</span>
            <span className="block text-electric-cyan">
              Industrialized.
            </span>
          </motion.h1>

          {/* ── Subhead ── */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: snap }}
            className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Speed without standards is just technical debt. AutoRail provides
            the{" "}
            <span className="text-cloud-white font-medium">Context</span> and{" "}
            <span className="text-cloud-white font-medium">Verification</span>{" "}
            layers that make autonomous development safe for the enterprise.
          </motion.p>

          {/* ── Primary CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.36, ease: snap }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-5"
          >
            <a
              href={`#${SECTION_IDS.cta}`}
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm",
                "bg-transparent border border-electric-cyan text-electric-cyan",
                "hover:bg-electric-cyan/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]",
                "transition-all group",
              )}
            >
              Get Early Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* ── Secondary CTA ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: snap }}
            className="mb-14"
          >
            <a
              href={`#${SECTION_IDS.necroma}`}
              className={cn(
                "group inline-flex items-center gap-2",
                "text-sm text-white/40 hover:text-white/70",
                "transition-colors duration-200",
              )}
            >
              Secure Legacy Systems
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* ── Technical credibility strip ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.62, duration: 0.4 }}
            className="flex items-center gap-3 font-mono text-[11px] text-white/[0.18] tracking-wider uppercase mb-14"
          >
            <span>Open Source</span>
            <span className="w-px h-3 bg-white/[0.08]" aria-hidden />
            <span>MCP-Native</span>
            <span className="w-px h-3 bg-white/[0.08]" aria-hidden />
            <span>TypeScript</span>
          </motion.div>

          {/* ── Scroll indicator ── */}
          <motion.a
            href={`#${SECTION_IDS.day2Problem}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.4 }}
            className="flex flex-col items-center gap-2 text-white/[0.12] hover:text-electric-cyan/40 transition-colors"
            aria-label="Scroll to next section"
          >
            <span
              className="w-px h-8 bg-gradient-to-b from-transparent to-current"
              aria-hidden
            />
            <ChevronDown className="w-4 h-4" />
          </motion.a>
        </div>
      </Container>
    </section>
  )
}
