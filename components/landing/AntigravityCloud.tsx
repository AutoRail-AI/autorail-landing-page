"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"

/* ─────────────────────────────────────────────────────────────────────────────
   AntigravityCloud — WebGL neural cloud with cinematic depth + neon glow.

   Renders code tokens on a Fibonacci sphere via React Three Fiber.
   Three visual systems create the "expensive" look:

   1. CINEMATIC BOKEH — Exponential opacity curve. Background tokens are
      ghost-like wisps (opacity 0.03), midground is transitional, foreground
      is sharp and bright. The Bloom pass turns faint distant tokens into
      soft luminous blobs — real bokeh circles.

   2. WHITE-HOT NEON — Accent tokens use extreme emissive multipliers (×5–6)
      so RGB channels clip to white at the center. The Bloom pass then bleeds
      the original color outward, creating a "white core + colored halo" —
      exactly how real neon tubes work.

   3. BICAMERAL CLUSTERING — Cyan tokens concentrate in the inner core
      (Intelligence = Center). Purple tokens concentrate at the outer
      perimeter (Legacy = Edge). Creates a visible "core glow" topology.

   Motion: Glacially slow. Enterprise motion is heavy and confident.
     - Auto-rotation: 0.008 rad/s
     - Breathing: ±3% scale at 0.2 Hz
     - Mouse parallax: ±0.15 rad, lerp factor 0.02
     - Float drift: speed 0.6–0.9, near-zero rotation
   ───────────────────────────────────────────────────────────────────────────── */

const FONT_URL = "/fonts/jetbrains-mono-latin-400-normal.woff"

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

/* ── Brand colors ─────────────────────────────────────────────────────────── */

const CLOUD_WHITE = "#FAFAFA"
const ELECTRIC_CYAN = "#00E5FF"
const RAIL_PURPLE = "#6E18B3"
const WARNING_YELLOW = "#FFB800"
const SUCCESS_GREEN = "#00FF88"
const VOID_BLACK = "#0A0A0F"

/* ── Seeded PRNG — identical output on every render ───────────────────────── */

function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

/* ── Token data ───────────────────────────────────────────────────────────── */

interface TokenData {
  id: number
  token: string
  position: [number, number, number]
  color: THREE.Color
  opacity: number
  fontSize: number
  rotation: number
  group: number
}

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2

function generateTokens(count: number): TokenData[] {
  const rng = seededRandom(42)
  const tokens: TokenData[] = []

  const MIN_R = 9.6
  const MAX_R = 14.4
  const R_RANGE = MAX_R - MIN_R

  for (let i = 0; i < count; i++) {
    // Fibonacci sphere — evenly distributed points on sphere surface
    const theta = (2 * Math.PI * i) / GOLDEN_RATIO
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count)

    // Randomize radius for organic depth variation
    const r = MIN_R + rng() * R_RANGE
    const x = r * Math.sin(phi) * Math.cos(theta)
    const y = r * Math.sin(phi) * Math.sin(theta)
    const z = r * Math.cos(phi)

    // Pick token (75% single-char, 25% multi-char)
    const token =
      rng() < 0.75
        ? SINGLE_TOKENS[Math.floor(rng() * SINGLE_TOKENS.length)]!
        : MULTI_TOKENS[Math.floor(rng() * MULTI_TOKENS.length)]!

    // ── Cinematic Bokeh Depth ──────────────────────────────────────────
    // z ranges from -MAX_R to +MAX_R in local sphere space.
    // Camera is at z=20, so positive z = closer to camera = foreground.
    // Normalize: 0 = deepest background, 1 = nearest foreground.
    const depth = (z + MAX_R) / (2 * MAX_R)

    // Exponential opacity — harsh falloff for cinematic depth separation
    let baseOpacity: number
    if (depth < 0.15) {
      // Deep background: ghost-like bokeh wisps
      baseOpacity = 0.02 + rng() * 0.03
    } else if (depth < 0.35) {
      // Far mid-range: faint but present
      baseOpacity = 0.05 + (depth - 0.15) * 0.5 + rng() * 0.05
    } else if (depth < 0.6) {
      // Mid-range: clearly visible
      baseOpacity = 0.15 + (depth - 0.35) * 0.6 + rng() * 0.1
    } else {
      // Foreground: sharp and bright
      baseOpacity = 0.3 + (depth - 0.6) * 0.7 + rng() * 0.15
    }

    // ── Bicameral Color Clustering ─────────────────────────────────────
    // radialDepth: 0 = inner core, 1 = outer edge
    const radialDepth = (r - MIN_R) / R_RANGE

    const roll = rng()
    let colorHex = CLOUD_WHITE
    let emissiveMultiplier = 1
    let opacity = baseOpacity

    if (roll < 0.03) {
      // Success Green — rare sparks, white-hot neon
      colorHex = SUCCESS_GREEN
      emissiveMultiplier = 5
      opacity = Math.min(baseOpacity * 3, 0.95)
    } else if (roll < 0.11) {
      // Warning Yellow — distributed evenly, white-hot neon
      colorHex = WARNING_YELLOW
      emissiveMultiplier = 4
      opacity = Math.min(baseOpacity * 2.5, 0.9)
    } else if (roll < 0.21) {
      // Electric Cyan — biased toward inner core (Intelligence = Core)
      if (radialDepth < 0.6) {
        colorHex = ELECTRIC_CYAN
        emissiveMultiplier = 5
        opacity = Math.min(baseOpacity * 3, 0.95)
      }
    } else if (roll < 0.28) {
      // Rail Purple — biased toward outer perimeter (Legacy = Edge)
      if (radialDepth > 0.4) {
        colorHex = RAIL_PURPLE
        emissiveMultiplier = 4
        opacity = Math.min(baseOpacity * 2.5, 0.9)
      }
    }

    // White-hot neon: extreme multiplier makes RGB clip to white at center,
    // while Bloom bleeds the original color outward as a colored halo.
    const color = new THREE.Color(colorHex).multiplyScalar(emissiveMultiplier)

    tokens.push({
      id: i,
      token,
      position: [x, y, z],
      color,
      opacity,
      fontSize: 0.07 + rng() * 0.07, // 0.07–0.14
      rotation: (rng() - 0.5) * 0.5,
      group: i % 4,
    })
  }

  return tokens
}

/* ── Inner scene — useFrame for breathing + parallax ──────────────────────── */

function TokenCloud({
  tokens,
  reducedMotion,
}: {
  tokens: TokenData[]
  reducedMotion: boolean
}) {
  const groupRef = useRef<THREE.Group>(null!)
  const mouse = useRef({ x: 0, y: 0 })

  // Window-level mouse tracking (works even with HTML content over canvas)
  useEffect(() => {
    if (reducedMotion) return
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [reducedMotion])

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return

    const t = state.clock.elapsedTime

    // Breathing: slow & heavy sine-wave scale (0.97 ↔ 1.03)
    groupRef.current.scale.setScalar(1 + Math.sin(t * 0.2) * 0.03)

    // Auto-rotation: glacially slow + mouse parallax
    const targetY = mouse.current.x * 0.15 + t * 0.008
    const targetX = -mouse.current.y * 0.1

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      0.02,
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      0.02,
    )
  })

  // Split tokens into 4 Float groups for organic drift
  const groups = useMemo(() => {
    const g: TokenData[][] = [[], [], [], []]
    tokens.forEach((t) => g[t.group]!.push(t))
    return g
  }, [tokens])

  // Centered in the canvas — HeroSphere positions the canvas on the right
  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {groups.map((groupTokens, gi) =>
        reducedMotion ? (
          <group key={gi}>
            {groupTokens.map((t) => (
              <TokenMesh key={t.id} data={t} />
            ))}
          </group>
        ) : (
          <Float
            key={gi}
            speed={0.6 + gi * 0.1}
            rotationIntensity={0.08 + gi * 0.03}
            floatIntensity={0.3 + gi * 0.08}
          >
            {groupTokens.map((t) => (
              <TokenMesh key={t.id} data={t} />
            ))}
          </Float>
        ),
      )}
    </group>
  )
}

/* ── Single token mesh ────────────────────────────────────────────────────── */

function TokenMesh({ data: t }: { data: TokenData }) {
  return (
    <Text
      position={t.position}
      fontSize={t.fontSize}
      font={FONT_URL}
      anchorX="center"
      anchorY="middle"
      rotation={[0, 0, t.rotation]}
    >
      {t.token}
      <meshBasicMaterial
        color={t.color}
        transparent
        opacity={t.opacity}
        depthWrite={false}
        toneMapped={false}
      />
    </Text>
  )
}

/* ── Main component ───────────────────────────────────────────────────────── */

interface AntigravityCloudProps {
  count?: number
  className?: string
}

export function AntigravityCloud({
  count = 512,
  className,
}: AntigravityCloudProps) {
  const tokens = useMemo(() => generateTokens(count), [count])

  // Check reduced motion preference (client-only, safe with ssr:false)
  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

  // Delay mount until after React Strict Mode's unmount/remount cycle completes.
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={className}
        style={{ width: "100%", height: "100%", background: VOID_BLACK }}
      />
    )
  }

  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      <Canvas
        dpr={[1, 2]}
        flat
        frameloop="always"
        gl={{ antialias: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 20], fov: 35 }}
      >
        <color attach="background" args={[VOID_BLACK]} />

        {/* Suspense catches font-loading suspension from drei Text */}
        <Suspense fallback={null}>
          <TokenCloud tokens={tokens} reducedMotion={reducedMotion} />
        </Suspense>

        <EffectComposer multisampling={0}>
          <Bloom
            luminanceThreshold={0.1}
            intensity={1.5}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
