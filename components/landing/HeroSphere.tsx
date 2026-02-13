"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Container } from "components/ui"
import { calTriggerProps } from "components/providers"
import { SECTION_IDS } from "lib/constants"
import { cn } from "lib/utils"

/* ─────────────────────────────────────────────────────────────────────────────
   HeroSphere — Enterprise hero with WebGL Antigravity neural cloud.

   Composition — Cinematic Asymmetry (brand.md §9):
     The headline is SACRED. No tokens may enter the text zone.
     Cloud is a distinct object on the right — a counterweight, not wallpaper.

     1. WebGL Canvas    — Right 65% on desktop, full bleed on mobile, z-0
        └ Safety mask   — Left-edge gradient erasing tokens near the headline
     2. Bottom fade     — Seamless section transition, z-[1]
     3. HUD content     — Left-aligned on desktop, centered on mobile, z-10
   ───────────────────────────────────────────────────────────────────────────── */

// Dynamic import — no SSR for WebGL (Three.js needs browser APIs)
const AntigravityCloud = dynamic(
  () =>
    import("./AntigravityCloud").then((mod) => ({
      default: mod.AntigravityCloud,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-void-black" aria-hidden />
    ),
  },
)

// Machine-precision easing: fast out, smooth settle (brand.md §9.4 — The Snap)
const snap = [0.16, 1, 0.3, 1] as const

export function HeroSphere() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex items-center overflow-hidden bg-void-black"
    >
      {/* ── Layer 1: WebGL Canvas — right-biased, no tokens behind headline ── */}
      <div className="absolute top-0 right-0 w-full h-full md:w-[70%] z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <AntigravityCloud count={4096} />

          {/* Safety fade — gradual dissolve protecting headline readability */}
          <div
            className="absolute inset-y-0 left-0 w-[480px] z-10 pointer-events-none hidden md:block"
            style={{
              background:
                "linear-gradient(to right, #0A0A0F 0%, rgba(10,10,15,0.85) 30%, rgba(10,10,15,0.4) 60%, transparent 100%)",
            }}
          />

          {/* Mobile radial vignette — soft edges when canvas is full-bleed */}
          <div
            className="absolute inset-0 z-10 pointer-events-none md:hidden"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, transparent 20%, #0A0A0F 80%)",
            }}
          />

          {/* Top/bottom edge fade for seamless blending */}
          <div className="absolute top-0 inset-x-0 h-32 z-10 pointer-events-none bg-gradient-to-b from-void-black to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-32 z-10 pointer-events-none bg-gradient-to-t from-void-black to-transparent" />

          {/* Right edge fade — soft bleed off screen */}
          <div
            className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none hidden md:block"
            style={{
              background:
                "linear-gradient(to left, #0A0A0F 0%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* ── Layer 2: Bottom section fade ── */}
      <div className="absolute bottom-0 inset-x-0 h-40 z-[1] bg-gradient-to-t from-void-black to-transparent pointer-events-none" />

      {/* ── Layer 3: Content — left-aligned on desktop, centered on mobile ── */}
      <Container className="relative z-10 py-32 md:py-40">
        <div className="relative flex flex-col items-center text-center md:items-start md:text-left max-w-2xl">

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

          {/* ── Eyebrow — Live status indicator with Success Pulse ── */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: snap }}
            className="mb-10"
          >
            <div
              className={cn(
                "inline-flex items-center gap-3 px-4 py-2 rounded-lg",
                "bg-white/[0.02] backdrop-blur-sm glow-success-pulse",
              )}
            >
              {/* Live dot — Success Green (brand.md §6.1: ≥85% confidence) */}
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full text-warning opacity-60 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full text-warning" />
              </span>
              <span className="text-label ">
                Industrial Safety for AI Development
              </span>
            </div>
          </motion.div>

          {/* ── Headline — Space Grotesk, tight tracking ── */}
          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.06, ease: snap }}
            className="text-display-xl tracking-[-0.03em] mb-6 leading-[0.95]"
          >
            <span className="block text-electric-cyan">Autonomous Engineering</span>
            <span className="block text-rail-purple">
              Infrastructure.
            </span>
          </motion.h1>

          {/* ── Subhead — Inter, high readability ── */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: snap }}
            className="font-sans text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            beyond basic memory and syntax. autorail pairs living code context for human-agent coding with API
            and visual behavior parity to guarantee production readiness.
          </motion.p>

          {/* ── Primary CTA — single, prominent, glow-cyan on hover ── */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.36, ease: snap }}
            className="mb-14"
          >
            <button
              {...calTriggerProps}
              className={cn(
                "inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-sm cursor-pointer",
                "bg-transparent border border-electric-cyan/30 text-electric-cyan",
                "hover:glow-cyan hover:bg-electric-cyan/5",
                "transition-all duration-300 group",
              )}
            >
              Get Early Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* ── Scroll indicator ── */}
          <motion.a
            href={`#${SECTION_IDS.day2Problem}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.4 }}
            className="flex flex-col items-center md:items-start gap-2 text-white/[0.12] hover:text-electric-cyan/40 transition-colors"
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
