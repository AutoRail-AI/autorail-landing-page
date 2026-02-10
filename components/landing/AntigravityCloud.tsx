"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion"
import { useEffect, useMemo } from "react"
import { cn } from "lib/utils"

/* ─────────────────────────────────────────────────────────────────────────────
   AntigravityCloud — Production-grade floating code-token neural cloud.

   A zero-gravity field of short syntax characters that conveys "autonomous
   intelligence operating on code." Tokens drift on unique non-linear paths
   with depth-of-field blur, multi-layer glow effects, and mouse-reactive
   3D parallax.

   Physics:
     "Drift & Breathe" — no rigid rotation. The container slowly expands and
     contracts (scale 0.95 ↔ 1.05, ~10s). Each token follows its own unique
     6-point Lissajous-inspired path so nothing moves in lockstep.

   Depth-of-Field:
     Back tokens (depth < 0.5): blur(2px), opacity ~0.15–0.25
     Front tokens (depth > 0.5): sharp, opacity ~0.35–0.55
     Accent tokens get +0.3 opacity boost and multi-layer glow.

   Mouse Parallax:
     Window-level mousemove tilts the cloud ±4° via CSS perspective(1200px).
     Sprung interpolation (stiffness 40, damping 25) for smooth follow.

   Color System (brand.md §6.1 Confidence Glows):
     Cloud White  (#FAFAFA)  — 75% of tokens, neutral substrate
     Yellow       (#FFB800)  — 8%, caution/in-progress confidence
     Electric Cyan(#00E5FF)  — 10%, intelligence spark (70–85% confidence)
     Rail Purple  (#6E18B3)  — 5%, deep context
     Success Green(#00FF88)  — 2%, high confidence sparks

   Performance:
     - Seeded PRNG for deterministic SSR/hydration (seed=42).
     - All style values rounded to 4dp to prevent hydration mismatch.
     - Colors in rgb() format to match browser normalization.
     - will-change:transform on animated layers.
     - Painter's algorithm (depth sort) for correct visual layering.
     - Respects prefers-reduced-motion.
   ───────────────────────────────────────────────────────────────────────────── */

/* ── Token pools ──────────────────────────────────────────────────────────── */

const SINGLE_TOKENS = [
  "=", "+", "|", "?", "!", ";", "&", "<", ">", "~",
  "^", "#", "%", "*", "/", ":", ".", "{", "}", "(",
  ")", "[", "]", "@", "\\", ",", "-", "_",
] as const

const MULTI_TOKENS = [
  "fn", "if", "do", "or", "=>", "::", "&&", "||",
  "0x", "int", "sys", "let",
] as const

/* ── Brand colors (rgb() format to match browser normalization) ───────────── */

const CLOUD_WHITE = "rgb(250,250,250)"
const WARNING_YELLOW = "rgb(255,184,0)"
const ELECTRIC_CYAN = "rgb(0,229,255)"
const RAIL_PURPLE = "rgb(110,24,179)"
const SUCCESS_GREEN = "rgb(0,255,136)"

/* Multi-layer text-shadow glow specs (brand.md §7.3 Terminal Glow) */
const YELLOW_GLOW = "0 0 5px rgba(255,184,0,0.5), 0 0 16px rgba(255,184,0,0.2), 0 0 32px rgba(255,184,0,0.08)"
const CYAN_GLOW = "0 0 6px rgba(0,229,255,0.6), 0 0 20px rgba(0,229,255,0.25), 0 0 40px rgba(0,229,255,0.1)"
const PURPLE_GLOW = "0 0 6px rgba(110,24,179,0.5), 0 0 18px rgba(129,52,206,0.2), 0 0 36px rgba(110,24,179,0.08)"
const GREEN_GLOW = "0 0 6px rgba(0,255,136,0.6), 0 0 18px rgba(0,255,136,0.2), 0 0 34px rgba(0,255,136,0.08)"

/** Round to 4 decimal places — matches browser CSS value normalization */
function round4(n: number): number {
  return Math.round(n * 10000) / 10000
}

/* ── Token data ───────────────────────────────────────────────────────────── */

interface CloudToken {
  id: number
  token: string
  x: number
  y: number
  depth: number
  scale: number
  opacity: number
  color: string
  glow: string
  dofBlur: number
  fontSize: number
  rotation: number
  /** Precomputed 6-point x drift keyframes (px) */
  xPath: number[]
  /** Precomputed 6-point y drift keyframes (px) */
  yPath: number[]
  driftDuration: number
  driftDelay: number
}

/** Deterministic Lehmer PRNG — identical output on server + client */
function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function pickToken(rng: () => number): string {
  // 75% single-char, 25% multi-char
  if (rng() < 0.75) {
    return SINGLE_TOKENS[Math.floor(rng() * SINGLE_TOKENS.length)]!
  }
  return MULTI_TOKENS[Math.floor(rng() * MULTI_TOKENS.length)]!
}

function generateCloud(count: number): CloudToken[] {
  const rng = seededRandom(42)
  const tokens: CloudToken[] = []

  for (let i = 0; i < count; i++) {
    const theta = rng() * Math.PI * 2
    const phi = Math.acos(2 * rng() - 1)
    const r = 0.2 + rng() * 0.8

    const x = round4(r * Math.sin(phi) * Math.cos(theta) * 42)
    const y = round4(r * Math.sin(phi) * Math.sin(theta) * 34)
    const z = r * Math.cos(phi)

    // Depth: 0 = far back, 1 = nearest
    const depth = round4((z + 1) / 2)

    // Enhanced DoF — dramatic front/back separation
    const scale = round4(0.4 + depth * 0.7)                // 0.4 → 1.1
    const dofBlur = round4(Math.max(0, (1 - depth) * 2.5 - 0.3)) // ~2.2px → 0
    const baseOpacity = round4(0.1 + depth * 0.4)           // 0.1 → 0.5
    const fontSize = Math.round(9 + depth * 7)              // 9px → 16px

    // Color distribution: 75% white, 8% yellow, 10% cyan, 5% purple, 2% green
    const colorRoll = rng()
    let color = CLOUD_WHITE
    let glow = ""
    let opacity = baseOpacity

    if (colorRoll < 0.02) {
      // Success Green — high confidence spark (rare)
      color = SUCCESS_GREEN
      glow = GREEN_GLOW
      opacity = round4(Math.min(baseOpacity + 0.32, 0.82))
    } else if (colorRoll < 0.10) {
      // Warning Yellow — in-progress confidence
      color = WARNING_YELLOW
      glow = YELLOW_GLOW
      opacity = round4(Math.min(baseOpacity + 0.28, 0.78))
    } else if (colorRoll < 0.20) {
      // Electric Cyan — intelligence spark
      color = ELECTRIC_CYAN
      glow = CYAN_GLOW
      opacity = round4(Math.min(baseOpacity + 0.35, 0.85))
    } else if (colorRoll < 0.25) {
      // Rail Purple — deep context
      color = RAIL_PURPLE
      glow = PURPLE_GLOW
      opacity = round4(Math.min(baseOpacity + 0.28, 0.78))
    }

    // 6-point organic drift path — unique per token, no lockstep
    const range = 14 + rng() * 14
    const xPath = [
      0,
      round4((rng() - 0.5) * range),
      round4((rng() - 0.5) * range * 0.7),
      round4((rng() - 0.5) * range),
      round4((rng() - 0.5) * range * 0.5),
      0,
    ]
    const yPath = [
      0,
      round4((rng() - 0.5) * range * 0.8),
      round4((rng() - 0.5) * range),
      round4((rng() - 0.5) * range * 0.6),
      round4((rng() - 0.5) * range * 0.9),
      0,
    ]

    tokens.push({
      id: i,
      token: pickToken(rng),
      x, y, depth, scale, opacity, color, glow, dofBlur, fontSize,
      rotation: round4((rng() - 0.5) * 20),
      xPath,
      yPath,
      driftDuration: round4(18 + rng() * 22), // 18–40s
      driftDelay: round4(rng() * -30),
    })
  }

  // Painter's algorithm — far tokens render first
  tokens.sort((a, b) => a.depth - b.depth)
  return tokens
}

/* ── Component ───────────────────────────────────────────────────────────── */

interface AntigravityCloudProps {
  count?: number
  className?: string
}

export function AntigravityCloud({
  count = 60,
  className,
}: AntigravityCloudProps) {
  const tokens = useMemo(() => generateCloud(count), [count])
  const reducedMotion = useReducedMotion()

  /* ── Mouse Parallax ──────────────────────────────────────────────────── */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springCfg = { stiffness: 40, damping: 25 }
  const rotateX = useSpring(
    useTransform(mouseY, [-1, 1], [4, -4]),
    springCfg,
  )
  const rotateY = useSpring(
    useTransform(mouseX, [-1, 1], [-4, 4]),
    springCfg,
  )

  useEffect(() => {
    if (reducedMotion) return
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1)
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [mouseX, mouseY, reducedMotion])

  /* ── Render ──────────────────────────────────────────────────────────── */
  return (
    <div
      className={cn("relative w-full h-full overflow-visible", className)}
      aria-hidden
    >
      {/* Perspective container for 3D parallax */}
      <div className="absolute inset-0" style={{ perspective: 1200 }}>
        {/* Parallax tilt layer — follows mouse */}
        <motion.div
          className="absolute inset-0"
          style={{
            rotateX: reducedMotion ? 0 : rotateX,
            rotateY: reducedMotion ? 0 : rotateY,
            willChange: "transform",
          }}
        >
          {/* Breathing layer — slow expand/contract, no rotation */}
          <motion.div
            className="absolute inset-0"
            animate={
              reducedMotion
                ? {}
                : { scale: [0.95, 1.05, 0.95] }
            }
            transition={
              reducedMotion
                ? {}
                : { scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } }
            }
            style={{ willChange: "transform" }}
          >
            {tokens.map((t) => (
              <motion.span
                key={t.id}
                className="absolute font-mono select-none pointer-events-none whitespace-nowrap"
                style={{
                  left: `${round4(50 + t.x)}%`,
                  top: `${round4(50 + t.y)}%`,
                  fontSize: t.fontSize,
                  fontWeight: 400,
                  lineHeight: 1,
                  color: t.color,
                  opacity: t.opacity,
                  willChange: "transform",
                  filter: t.dofBlur > 0.1 ? `blur(${t.dofBlur}px)` : undefined,
                  ...(t.glow ? { textShadow: t.glow } : {}),
                }}
                animate={
                  reducedMotion
                    ? { rotate: t.rotation, scale: t.scale }
                    : {
                        x: t.xPath,
                        y: t.yPath,
                        rotate: t.rotation,
                        scale: t.scale,
                      }
                }
                transition={
                  reducedMotion
                    ? {}
                    : {
                        x: {
                          duration: t.driftDuration,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: t.driftDelay,
                        },
                        y: {
                          duration: t.driftDuration * 1.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: t.driftDelay,
                        },
                      }
                }
              >
                {t.token}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
