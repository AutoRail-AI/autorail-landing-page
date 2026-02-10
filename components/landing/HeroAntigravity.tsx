"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, Check, Copy } from "lucide-react"
import { Container } from "components/ui"
import { GradientText } from "components/shared/GradientText"
import { SECTION_IDS } from "lib/constants"
import { cn } from "lib/utils"

const CODE_SYMBOLS = ["{", "}", "</>", "npm", ";;", "()", "=>", "[]", "{}", "."] as const
const STABILIZER_RADIUS = 260
const GRID_SPACING = 44
const LERP_STABILIZE = 0.09
const LERP_CHAOS = 0.02
const PARTICLE_COUNT = 72
const VOID_BLACK = "#0A0A0F"
const CYAN = "#00E5FF"
const PURPLE = "#6E18B3"

type Particle = {
  symbol: string
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
  size: number
  basePhase: number
  gridKey: string | null
  targetX: number
  targetY: number
  colorT: number // 0 = chaos, 1 = stabilized
  hue: number // 0 = cyan, 1 = purple
}

function createParticles(width: number, height: number): Particle[] {
  const particles: Particle[] = []
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const symbol = CODE_SYMBOLS[i % CODE_SYMBOLS.length] ?? "."
    const size = symbol.length > 1 ? 10 : 12 + Math.random() * 4
    particles.push({
      symbol,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.015,
      size,
      basePhase: Math.random() * Math.PI * 2,
      gridKey: null,
      targetX: 0,
      targetY: 0,
      colorT: 0,
      hue: i % 2,
    })
  }
  return particles
}

function gridKey(gx: number, gy: number): string {
  return `${gx},${gy}`
}

function getNearestGridSlot(
  px: number,
  py: number,
  mouseX: number,
  mouseY: number
): { gx: number; gy: number; x: number; y: number } {
  const gx = Math.round((px - mouseX) / GRID_SPACING)
  const gy = Math.round((py - mouseY) / GRID_SPACING)
  const x = mouseX + gx * GRID_SPACING
  const y = mouseY + gy * GRID_SPACING
  return { gx, gy, x, y }
}

const HERO = {
  headline: "Vibe Coding, Industrialized.",
  subhead:
    "Stop AI from writing Alien Code. We provide the Context and Verification layers that make autonomous development safe for the enterprise.",
  primaryCommand: "npm install code-synapse",
  secondaryCta: "Request Necroma Access",
  scrollHint: "See what we stabilize",
}

export function HeroAntigravity() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef<{ x: number; y: number } | null>(null)
  const rafRef = useRef<number>(0)
  const [copied, setCopied] = useState(false)
  const reducedMotion = useReducedMotion()

  const copyCommand = useCallback(() => {
    navigator.clipboard.writeText(HERO.primaryCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  // Initialize particles when we have dimensions
  useEffect(() => {
    const section = sectionRef.current
    const canvas = canvasRef.current
    if (!section || !canvas) return

    const resize = () => {
      const rect = section.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      const w = rect.width
      const h = rect.height
      if (particlesRef.current.length === 0) {
        particlesRef.current = createParticles(w, h)
      } else {
        particlesRef.current.forEach((p) => {
          p.x = Math.min(p.x, w - 20)
          p.y = Math.min(p.y, h - 20)
        })
      }
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(section)
    return () => ro.disconnect()
  }, [])

  // Mouse tracking
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }
    const onLeave = () => {
      mouseRef.current = null
    }
    section.addEventListener("mousemove", onMove, { passive: true })
    section.addEventListener("mouseleave", onLeave)
    return () => {
      section.removeEventListener("mousemove", onMove)
      section.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  // Canvas animation loop
  useEffect(() => {
    if (reducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio ?? 1, 2)
    let width = canvas.width / dpr
    let height = canvas.height / dpr

    const tick = () => {
      width = canvas.width / dpr
      height = canvas.height / dpr
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouse = mouseRef.current
      const particles = particlesRef.current
      const time = Date.now() * 0.001

      if (mouse) {
        // Unique grid assignment: particles in stabilizer radius, sorted by distance to cursor;
        // each gets the nearest unclaimed grid slot (so no two symbols overlap).
        const inRadius = particles
          .map((p) => ({
            p,
            dist: Math.hypot(p.x - mouse.x, p.y - mouse.y),
          }))
          .filter(({ dist }) => dist < STABILIZER_RADIUS)
          .sort((a, b) => a.dist - b.dist)
        const used = new Set<string>()
        inRadius.forEach(({ p }) => {
          const { gx, gy, x, y } = getNearestGridSlot(p.x, p.y, mouse.x, mouse.y)
          const key = gridKey(gx, gy)
          if (!used.has(key)) {
            used.add(key)
            p.targetX = x
            p.targetY = y
            p.gridKey = key
            p.colorT = Math.min(1, p.colorT + 0.08)
            p.hue = (Math.abs(gx) + Math.abs(gy)) % 2
          } else {
            p.gridKey = null
            p.colorT = Math.max(0, p.colorT - 0.05)
          }
        })
        particles.forEach((p) => {
          if (p.gridKey === null) p.colorT = Math.max(0, p.colorT - 0.03)
        })
      } else {
        particles.forEach((p) => {
          p.gridKey = null
          p.colorT = Math.max(0, p.colorT - 0.03)
        })
      }

      particles.forEach((p) => {
        if (p.gridKey !== null && mouse) {
          p.x += (p.targetX - p.x) * LERP_STABILIZE
          p.y += (p.targetY - p.y) * LERP_STABILIZE
          p.rotation += (0 - p.rotation) * 0.05
        } else {
          p.x += p.vx
          p.y += p.vy
          const drift = Math.sin(time + p.basePhase) * 0.15
          p.x += drift
          p.y += Math.cos(time * 0.7 + p.basePhase) * 0.15
          p.rotation += p.rotationSpeed
          if (p.x < -20 || p.x > width + 20) p.vx *= -1
          if (p.y < -20 || p.y > height + 20) p.vy *= -1
          p.x = Math.max(-20, Math.min(width + 20, p.x))
          p.y = Math.max(-20, Math.min(height + 20, p.y))
        }
      })

      // Draw
      particles.forEach((p) => {
        const x = p.x * dpr
        const y = p.y * dpr
        const size = p.size * dpr
        const r = p.rotation

        const chaosAlpha = 0.28
        const cyanR = 0
        const cyanG = 229
        const cyanB = 255
        const purpleR = 110
        const purpleG = 24
        const purpleB = 179
        const t = p.colorT
        const alpha = chaosAlpha + t * (1 - chaosAlpha)
        const hue = p.hue
        const R = Math.round(255 * (1 - t) + (hue === 0 ? cyanR : purpleR) * t)
        const G = Math.round(255 * (1 - t) + (hue === 0 ? cyanG : purpleG) * t)
        const B = Math.round(255 * (1 - t) + (hue === 0 ? cyanB : purpleB) * t)
        const fillStyle = `rgba(${R},${G},${B},${alpha})`

        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(r)
        ctx.font = `${size}px "JetBrains Mono", "Fira Code", monospace`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        if (t > 0.5) {
          ctx.shadowColor = hue === 0 ? CYAN : PURPLE
          ctx.shadowBlur = 12 * t
        }
        ctx.fillStyle = fillStyle
        ctx.fillText(p.symbol, 0, 0)
        ctx.restore()
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [reducedMotion])

  return (
    <section
      ref={sectionRef}
      id={SECTION_IDS.hero}
      className="relative min-h-[90vh] overflow-hidden bg-void-black bg-grid-pattern pt-32 pb-16 flex flex-col items-center justify-center"
    >
      {/* Physics canvas - behind everything */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden
      />

      {/* Radial gradient mask at bottom to blend into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          zIndex: 1,
          background: `radial-gradient(ellipse 180% 100% at 50% 100%, transparent 0%, ${VOID_BLACK} 70%)`,
        }}
      />

      <Container
        className="relative z-10 flex-1 flex flex-col items-center justify-center"
        style={{ zIndex: 10 }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.06,
                delayChildren: 0.1,
              },
            },
          }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Glass headline block */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -36, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.55,
                  ease: [0.22, 0.61, 0.36, 1],
                },
              },
            }}
            className="mb-6 rounded-xl px-6 py-4 md:px-8 md:py-5 bg-white/5 backdrop-blur-xl border-hud"
          >
            <h1 className="text-display-xl text-white">
              {HERO.headline.split(" ").slice(0, -1).join(" ")}{" "}
              <GradientText variant="synapse">
                {HERO.headline.split(" ").slice(-1)[0]?.replace(".", "")}.
              </GradientText>
            </h1>
          </motion.div>

          {/* Subhead - high contrast */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1], delay: 0.2 },
              },
            }}
            className="mx-auto mb-10 max-w-3xl text-lg text-muted-foreground leading-relaxed"
          >
            {HERO.subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.45,
                  ease: [0.22, 0.61, 0.36, 1],
                  delay: 0.35,
                },
              },
            }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <button
              type="button"
              onClick={copyCommand}
              className={cn(
                "group flex items-center gap-3 px-5 py-3 rounded-lg",
                "bg-electric-cyan text-void-black font-semibold",
                "hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]",
                "transition-all duration-300 font-mono text-sm md:text-base"
              )}
            >
              <code>{HERO.primaryCommand}</code>
              {copied ? (
                <Check className="h-4 w-4 text-void-black shrink-0" aria-hidden />
              ) : (
                <Copy
                  className="h-4 w-4 text-void-black/70 group-hover:text-void-black shrink-0"
                  aria-hidden
                />
              )}
            </button>

            <a
              href={`#${SECTION_IDS.necroma}`}
              className={cn(
                "inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg font-medium",
                "bg-transparent border border-white/10 text-white",
                "backdrop-blur-sm",
                "hover:bg-white/5 hover:border-electric-cyan/30",
                "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-void-black"
              )}
            >
              {HERO.secondaryCta}
              <ArrowDown className="h-4 w-4 -rotate-90" aria-hidden />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
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
