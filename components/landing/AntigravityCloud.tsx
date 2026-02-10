"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useMemo } from "react"
import { cn } from "lib/utils"

/* ─────────────────────────────────────────────────────────────────────────────
   AntigravityCloud — Organic, breathing cloud of floating code tokens.

   Inspired by Google's "Antigravity" aesthetic: tokens drift in zero-gravity,
   the cluster breathes (expand/contract) and wobbles (ellipsoidal distortion),
   with a slow multi-axis rotation for organic, living motion.

   Brand enforcement (docs/brand/brand.md):
     Palette:    Cloud White tokens at ~20% opacity, Electric Cyan + Rail Purple accents.
     Typography: JetBrains Mono for code tokens.
     Motion:     Fluid, suspended — opposite of mechanical for background elements.

   Performance:
     - Seeded RNG for deterministic SSR/hydration consistency.
     - will-change: transform on animated layers.
     - Respects prefers-reduced-motion.
   ───────────────────────────────────────────────────────────────────────────── */

const TOKENS = [
  "{", "}", "fn", "=>", "0x", "&&",
  "</>", "[]", "return", "await", "::", "||",
  "const", "let", "async", "try", "catch", "if",
  "import", "export", "void", "type", "null", "for",
  "new", "this", "~>", "def",
] as const

const ELECTRIC_CYAN = "#00E5FF"
const RAIL_PURPLE = "#6E18B3"

/* ── Token Data ──────────────────────────────────────────────────────────── */

interface CloudToken {
  id: number
  token: string
  /** Percentage offset from container center */
  x: number
  y: number
  /** Depth-derived base scale (0.4 – 1.2) */
  scale: number
  /** Depth-derived base opacity */
  opacity: number
  color: string
  isAccent: boolean
  /** Individual drift range (px) */
  driftX: number
  driftY: number
  /** Drift animation duration (s) */
  driftDuration: number
  /** Drift animation phase offset (s) */
  driftDelay: number
  /** Static rotation (deg) for organic orientation */
  rotation: number
}

/** Deterministic Lehmer PRNG — identical output on server + client */
function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function generateCloud(count: number): CloudToken[] {
  const rng = seededRandom(42)
  const tokens: CloudToken[] = []

  for (let i = 0; i < count; i++) {
    const theta = rng() * Math.PI * 2
    const phi = Math.acos(2 * rng() - 1)
    const r = 0.15 + rng() * 0.85 // slight hollow core

    // Ellipsoidal spread — wider than tall for a natural, cinematic feel
    const x = r * Math.sin(phi) * Math.cos(theta) * 44
    const y = r * Math.sin(phi) * Math.sin(theta) * 36
    const z = r * Math.cos(phi) // -1 … 1, used only for depth

    // Depth → visual scale + opacity
    const depthNorm = (z + 1) / 2 // 0 = far-back, 1 = nearest
    const scale = 0.45 + depthNorm * 0.75
    const baseOpacity = 0.06 + depthNorm * 0.16

    // Color distribution: ~90 % white, ~5 % Electric Cyan, ~5 % Rail Purple
    const colorRoll = rng()
    let color = "#FFFFFF"
    let isAccent = false
    let opacity = baseOpacity

    if (colorRoll < 0.05) {
      color = ELECTRIC_CYAN
      isAccent = true
      opacity = baseOpacity + 0.18
    } else if (colorRoll < 0.10) {
      color = RAIL_PURPLE
      isAccent = true
      opacity = baseOpacity + 0.14
    }

    tokens.push({
      id: i,
      token: TOKENS[i % TOKENS.length]!,
      x,
      y,
      scale,
      opacity,
      color,
      isAccent,
      driftX: (rng() - 0.5) * 28,
      driftY: (rng() - 0.5) * 28,
      driftDuration: 12 + rng() * 16, // 12 – 28 s
      driftDelay: rng() * -20,        // phase offset
      rotation: (rng() - 0.5) * 30,   // ±15°
    })
  }

  return tokens
}

/* ── Component ───────────────────────────────────────────────────────────── */

interface AntigravityCloudProps {
  count?: number
  className?: string
}

export function AntigravityCloud({
  count = 48,
  className,
}: AntigravityCloudProps) {
  const tokens = useMemo(() => generateCloud(count), [count])
  const reducedMotion = useReducedMotion()

  return (
    <div
      className={cn("relative w-full h-full overflow-visible", className)}
      aria-hidden
    >
      {/* ── Group wrapper: breathing + wobble + slow rotation ── */}
      <motion.div
        className="absolute inset-0"
        animate={
          reducedMotion
            ? {}
            : {
                scaleX: [0.94, 1.07, 0.94],
                scaleY: [1.05, 0.95, 1.05],
                rotate: [0, 360],
              }
        }
        transition={
          reducedMotion
            ? {}
            : {
                scaleX: { duration: 14, repeat: Infinity, ease: "easeInOut" },
                scaleY: { duration: 18, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 200, repeat: Infinity, ease: "linear" },
              }
        }
        style={{ willChange: "transform" }}
      >
        {tokens.map((t) => (
          <motion.span
            key={t.id}
            className="absolute font-mono select-none pointer-events-none whitespace-nowrap"
            style={{
              left: `${50 + t.x}%`,
              top: `${50 + t.y}%`,
              fontSize: `${9 + t.scale * 8}px`,
              color: t.color,
              opacity: t.opacity,
              willChange: "transform",
              ...(t.isAccent
                ? { textShadow: `0 0 10px ${t.color}55, 0 0 24px ${t.color}22` }
                : {}),
            }}
            animate={
              reducedMotion
                ? { rotate: t.rotation, scale: t.scale }
                : {
                    x: [0, t.driftX, -t.driftX * 0.5, 0],
                    y: [0, t.driftY * 0.8, -t.driftY, 0],
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
    </div>
  )
}
