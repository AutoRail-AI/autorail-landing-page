"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"

/* ─────────────────────────────────────────────────────────────────────────────
   AntigravityCloud — WebGL neural cloud with post-processing Bloom.

   Renders ~80 code tokens on a Fibonacci sphere via React Three Fiber.
   Accent tokens (cyan, yellow, purple, green) emit overbright color that
   triggers Bloom post-processing for an HDR glow effect.

   Features:
     - Fibonacci sphere distribution for even token placement
     - Window-level mouse-reactive 3D parallax with slow auto-rotation
     - Sine-wave "breathing" scale oscillation (0.94 ↔ 1.06)
     - Float (drei) for organic group drift (4 clusters)
     - Fog-based depth fade into void-black
     - Bloom post-processing (luminanceThreshold 0.1, intensity 1.5)
     - Seeded PRNG (Lehmer, seed=42) for deterministic layout
     - Respects prefers-reduced-motion

   Color System (brand.md §6.1 Confidence Glows):
     Cloud White   (#FAFAFA)  — 72%, neutral substrate, ×1
     Electric Cyan (#00E5FF)  — 10%, intelligence spark, emissive ×3
     Warning Yellow(#FFB800)  — 8%, caution glow, emissive ×2.5
     Rail Purple   (#6E18B3)  — 7%, deep context, emissive ×2.5
     Success Green (#00FF88)  — 3%, high confidence, emissive ×3

   Bicameral Rule: Cyan & Purple never blend in gradients — they remain
   separate accent populations.
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

  for (let i = 0; i < count; i++) {
    // Fibonacci sphere — evenly distributed points on sphere surface
    const theta = (2 * Math.PI * i) / GOLDEN_RATIO
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count)

    // Randomize radius for organic depth variation (9.6–14.4 units)
    const r = 9.6 + rng() * 4.8
    const x = r * Math.sin(phi) * Math.cos(theta)
    const y = r * Math.sin(phi) * Math.sin(theta)
    const z = r * Math.cos(phi)

    // Pick token (75% single-char, 25% multi-char)
    const token =
      rng() < 0.75
        ? SINGLE_TOKENS[Math.floor(rng() * SINGLE_TOKENS.length)]!
        : MULTI_TOKENS[Math.floor(rng() * MULTI_TOKENS.length)]!

    // Color distribution: 72% white, 10% cyan, 8% yellow, 7% purple, 3% green
    const roll = rng()
    let colorHex = CLOUD_WHITE
    let emissiveMultiplier = 1
    let opacity = 0.3 + rng() * 0.2 // 0.3–0.5 for white tokens

    if (roll < 0.03) {
      colorHex = SUCCESS_GREEN
      emissiveMultiplier = 3
      opacity = 0.9
    } else if (roll < 0.11) {
      colorHex = WARNING_YELLOW
      emissiveMultiplier = 2.5
      opacity = 0.85
    } else if (roll < 0.21) {
      colorHex = ELECTRIC_CYAN
      emissiveMultiplier = 3
      opacity = 0.9
    } else if (roll < 0.28) {
      colorHex = RAIL_PURPLE
      emissiveMultiplier = 2.5
      opacity = 0.8
    }

    // Overbright color triggers Bloom on accent tokens (multiplier > 1)
    const color = new THREE.Color(colorHex).multiplyScalar(emissiveMultiplier)

    tokens.push({
      id: i,
      token,
      position: [x, y, z],
      color,
      opacity,
      fontSize: 0.07 + rng() * 0.07, // 0.07–0.14
      rotation: (rng() - 0.5) * 0.5,
      group: i % 4, // 4 Float clusters
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
    if (!groupRef.current) return

    if (reducedMotion) return

    const t = state.clock.elapsedTime

    // Breathing: sine-wave scale (0.94 ↔ 1.06)
    groupRef.current.scale.setScalar(1 + Math.sin(t * 0.4) * 0.06)

    // Auto-rotation (slow) + mouse parallax (gentle tilt)
    const targetY = mouse.current.x * 0.3 + t * 0.02
    const targetX = -mouse.current.y * 0.2

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      0.03,
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      0.03,
    )
  })

  // Split tokens into 4 Float groups for organic drift
  const groups = useMemo(() => {
    const g: TokenData[][] = [[], [], [], []]
    tokens.forEach((t) => g[t.group]!.push(t))
    return g
  }, [tokens])

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
            speed={1.5 + gi * 0.3}
            rotationIntensity={0.3 + gi * 0.1}
            floatIntensity={0.8 + gi * 0.15}
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
  // Without this, Strict Mode destroys the WebGL context mid-setup, causing a
  // blank canvas. The one-frame delay lets the final mount proceed cleanly.
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
        <fog attach="fog" args={[VOID_BLACK, 6, 38]} />

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
