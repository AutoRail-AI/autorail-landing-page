"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"

/* ─────────────────────────────────────────────────────────────────────────────
   CodeSphere — Fibonacci-distributed code tokens on a slow-rotating 3D sphere.
   Production-grade Canvas renderer: 60 fps, zero React re-renders.

   Visual layers (drawn back→front):
     1. Atmosphere haze  — faint radial gradient at sphere core for volume
     2. Back-face tokens — dim, small, low-opacity (depth-of-field)
     3. Front-face tokens — bright, large, crisp
     4. Pulse glow       — smooth cyan/purple bloom on select tokens

   Algorithm:  Golden-angle Fibonacci lattice (uniform spherical distribution).
   Projection: Weak perspective (camera at 3× radius, foreshortening tokens).
   Palette:    Base white/[0.04–0.24], smooth blend to Cyan #00E5FF / Purple
               #6E18B3 on pulse. Glow via canvas shadowBlur.

   Performance: DPR-capped at 2×, ResizeObserver, will-change hint.
   A11y:       Respects prefers-reduced-motion (single static frame).
   ───────────────────────────────────────────────────────────────────────────── */

const TOKENS = [
  "{",  "}",  "fn",     "=>",  "0x",   "&&",
  "</>", "[]", "return", "await", "::", "||",
  "const", "let", "async", "try", "catch", "if",
  "import", "export", "void", "type", "null", "for",
  "new", "this", "~>", "def",
] as const

const CYAN   = { r: 0,   g: 229, b: 255 }
const PURPLE = { r: 110, g: 24,  b: 179 }

/* ── Sphere Point ────────────────────────────────────────────────────────── */

type SphereToken = {
  bx: number
  by: number
  bz: number
  token: string
  /** 0 → cyan pulse, 1 → purple pulse */
  hue: number
  /** Randomised phase offset for independent, organic pulse timing */
  pulsePhase: number
  /** Secondary phase for dual-frequency blend */
  pulsePhase2: number
}

function buildSpherePoints(count: number): SphereToken[] {
  const pts: SphereToken[] = []
  const goldenAngle = Math.PI * (3 - Math.sqrt(5))

  for (let i = 0; i < count; i++) {
    const y = 1 - (2 * i) / (count - 1)
    const ringRadius = Math.sqrt(1 - y * y)
    const theta = goldenAngle * i

    pts.push({
      bx: Math.cos(theta) * ringRadius,
      by: y,
      bz: Math.sin(theta) * ringRadius,
      token: TOKENS[i % TOKENS.length]!,
      hue: i % 3 === 0 ? 0 : 1,
      pulsePhase: Math.random() * Math.PI * 2,
      pulsePhase2: Math.random() * Math.PI * 2,
    })
  }
  return pts
}

/* ── Component ───────────────────────────────────────────────────────────── */

interface CodeSphereProps {
  count?: number
  radius?: number
  className?: string
}

export function CodeSphere({
  count = 80,
  radius = 320,
  className,
}: CodeSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const points = buildSpherePoints(count)
    const dpr = Math.min(window.devicePixelRatio ?? 1, 2)

    const resize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(container)

    if (reducedMotion) {
      drawFrame(ctx, canvas, dpr, points, radius, 0)
      return () => ro.disconnect()
    }

    const tick = (time: number) => {
      drawFrame(ctx, canvas, dpr, points, radius, time)
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [count, radius, reducedMotion])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ willChange: "transform" }}
    >
      <canvas ref={canvasRef} className="w-full h-full" aria-hidden />
    </div>
  )
}

/* ── Render Pipeline ─────────────────────────────────────────────────────── */

function drawFrame(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  dpr: number,
  points: SphereToken[],
  radius: number,
  time: number,
) {
  const w = canvas.width
  const h = canvas.height
  const cx = w / 2
  const cy = h / 2

  ctx.clearRect(0, 0, w, h)

  const t = time * 0.001

  /* ── 1. Atmosphere haze ── */
  // Subtle radial gradient at sphere core — gives the sphere volume and
  // visual weight without drawing attention. Slowly breathes in opacity.
  const breathe = 0.5 + Math.sin(t * 0.4) * 0.15
  const hazeR = radius * dpr * 0.9
  const atmo = ctx.createRadialGradient(cx, cy, 0, cx, cy, hazeR)
  atmo.addColorStop(0, `rgba(0, 229, 255, ${0.025 * breathe})`)
  atmo.addColorStop(0.4, `rgba(110, 24, 179, ${0.015 * breathe})`)
  atmo.addColorStop(1, "rgba(10, 10, 15, 0)")
  ctx.fillStyle = atmo
  ctx.fillRect(0, 0, w, h)

  /* ── 2. Rotation ── */
  const rotY = t * 0.12
  const rotX = t * 0.045
  const cosY = Math.cos(rotY)
  const sinY = Math.sin(rotY)
  const cosX = Math.cos(rotX)
  const sinX = Math.sin(rotX)

  const r = radius * dpr
  const perspD = r * 3 // Weak perspective: camera at 3× radius

  /* ── 3. Project ── */
  const projected: {
    sx: number
    sy: number
    z: number
    scale: number
    token: string
    hue: number
    pulsePhase: number
    pulsePhase2: number
  }[] = []

  for (const p of points) {
    let x = p.bx * cosY - p.bz * sinY
    let z = p.bz * cosY + p.bx * sinY
    const y = p.by * cosX - z * sinX
    z = z * cosX + p.by * sinX

    const wx = x * r
    const wy = y * r
    const wz = z * r
    const scale = perspD / (perspD + wz)

    projected.push({
      sx: cx + wx * scale,
      sy: cy + wy * scale,
      z: wz,
      scale,
      token: p.token,
      hue: p.hue,
      pulsePhase: p.pulsePhase,
      pulsePhase2: p.pulsePhase2,
    })
  }

  projected.sort((a, b) => a.z - b.z) // painter's algorithm

  /* ── 4. Draw tokens ── */
  for (const p of projected) {
    const depthNorm = (p.z + r) / (2 * r)     // 0 = far, 1 = near
    const depthCurve = depthNorm * depthNorm    // quadratic — dramatic separation

    // Base appearance: dim white, increasing with proximity
    const baseAlpha = 0.03 + depthCurve * 0.21
    const fontSize = (8.5 + depthCurve * 8) * dpr * p.scale

    // ── Smooth pulse blending ──
    // Two incommensurate sine waves multiplied → irregular, organic rhythm.
    // Raw product ranges ~ -1 to +1; we remap the top end to [0, 1] for glow.
    const wave1 = Math.sin(t * 1.05 + p.pulsePhase)
    const wave2 = Math.sin(t * 0.63 + p.pulsePhase2)
    const rawPulse = wave1 * wave2

    // Only the top ~30% of the combined wave produces visible glow.
    // This keeps most tokens dim most of the time (enterprise restraint).
    const pulseStrength = Math.max(0, (rawPulse - 0.35) / 0.65)

    // Blend: base white → pulse colour (cyan or purple)
    const pc = p.hue === 0 ? CYAN : PURPLE
    const fillR = Math.round(255 + (pc.r - 255) * pulseStrength)
    const fillG = Math.round(255 + (pc.g - 255) * pulseStrength)
    const fillB = Math.round(255 + (pc.b - 255) * pulseStrength)
    const alpha = baseAlpha + pulseStrength * (0.75 - baseAlpha)

    ctx.save()
    ctx.font = `600 ${fontSize}px "JetBrains Mono", "Fira Code", monospace`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillStyle = `rgba(${fillR},${fillG},${fillB},${alpha})`

    // Glow: proportional to pulse strength. Canvas shadow = cheap bloom.
    if (pulseStrength > 0.05) {
      const glowAlpha = pulseStrength * 0.6
      ctx.shadowColor =
        p.hue === 0
          ? `rgba(${CYAN.r},${CYAN.g},${CYAN.b},${glowAlpha})`
          : `rgba(${PURPLE.r},${PURPLE.g},${PURPLE.b},${glowAlpha})`
      ctx.shadowBlur = pulseStrength * 22 * dpr
    }

    ctx.fillText(p.token, p.sx, p.sy)
    ctx.restore()
  }
}
