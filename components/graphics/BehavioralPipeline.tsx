"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"

/* ─────────────────────────────────────────────────────────────────────────────
   BehavioralPipeline — WebGL particle flow for Necroma hero.

   200-300 small spheres flowing through 3-4 wireframe rectangular gates
   along the Z-axis. Color progression: faint white/purple at entry →
   bright purple through middle → green (success) at exit. Gates slowly
   rotate on Y-axis.

   Same infrastructure as AntigravityCloud: R3F Canvas, Bloom postprocessing,
   seeded PRNG, mouse parallax, prefers-reduced-motion support.
   Dynamic import with { ssr: false }, NOT exported from barrel.
   ───────────────────────────────────────────────────────────────────────────── */

const VOID_BLACK = "#0A0A0F"
const RAIL_PURPLE = "#6E18B3"
const SUCCESS_GREEN = "#00FF88"

/* ── Seeded PRNG ──────────────────────────────────────────────────────────── */

function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

/* ── Particle data ────────────────────────────────────────────────────────── */

interface ParticleData {
  id: number
  offset: THREE.Vector3 // x/y offset within pipeline cross-section
  speed: number
  phase: number // initial z-position phase 0-1
  size: number
}

const PIPELINE_LENGTH = 16
const PIPELINE_START = -PIPELINE_LENGTH / 2
const PIPELINE_END = PIPELINE_LENGTH / 2

function generateParticles(count: number): ParticleData[] {
  const rng = seededRandom(42)
  const particles: ParticleData[] = []

  for (let i = 0; i < count; i++) {
    // Distribute within a rectangular cross-section
    const x = (rng() - 0.5) * 3
    const y = (rng() - 0.5) * 3
    particles.push({
      id: i,
      offset: new THREE.Vector3(x, y, 0),
      speed: 1.2 + rng() * 1.0,
      phase: rng(),
      size: 0.02 + rng() * 0.03,
    })
  }

  return particles
}

/* ── Gate — wireframe rectangular frame ───────────────────────────────────── */

function Gate({
  position,
  reducedMotion,
  index,
}: {
  position: [number, number, number]
  reducedMotion: boolean
  index: number
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const rotSpeed = 0.08 + index * 0.03

  useFrame((_s, delta) => {
    if (!meshRef.current || reducedMotion) return
    const dt = Math.min(delta, 0.05)
    meshRef.current.rotation.y += dt * rotSpeed
  })

  // Progress through pipeline: 0 = start (purple), 1 = end (green)
  const t = (position[2] - PIPELINE_START) / PIPELINE_LENGTH
  const color = useMemo(() => {
    const c = new THREE.Color()
    c.lerpColors(
      new THREE.Color(RAIL_PURPLE),
      new THREE.Color(SUCCESS_GREEN),
      t,
    )
    return c.multiplyScalar(2.5)
  }, [t])

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[4, 4, 0.15]} />
      <meshBasicMaterial
        color={color}
        wireframe
        transparent
        opacity={0.35}
        toneMapped={false}
      />
    </mesh>
  )
}

/* ── Particle system — instanced mesh for performance ─────────────────────── */

function ParticleFlow({
  particles,
  reducedMotion,
}: {
  particles: ParticleData[]
  reducedMotion: boolean
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const phases = useRef(particles.map((p) => p.phase))

  // Pre-compute colors for the gradient
  const purpleColor = useMemo(() => new THREE.Color(RAIL_PURPLE), [])
  const greenColor = useMemo(() => new THREE.Color(SUCCESS_GREEN), [])

  useFrame((_s, delta) => {
    if (!meshRef.current) return
    const dt = reducedMotion ? 0 : Math.min(delta, 0.05)

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]!
      phases.current[i] = ((phases.current[i]! + dt * p.speed * 0.1) % 1)

      const z = PIPELINE_START + phases.current[i]! * PIPELINE_LENGTH
      const progress = phases.current[i]!

      dummy.position.set(p.offset.x, p.offset.y, z)
      // Slight oscillation in x/y
      dummy.position.x += Math.sin(phases.current[i]! * Math.PI * 4 + p.id) * 0.15
      dummy.position.y += Math.cos(phases.current[i]! * Math.PI * 3 + p.id * 0.7) * 0.15
      dummy.scale.setScalar(p.size * (0.8 + progress * 0.4))
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)

      // Color interpolation: purple → green
      const c = new THREE.Color()
      c.lerpColors(purpleColor, greenColor, progress)
      // Brightness increases toward end
      c.multiplyScalar(2 + progress * 3)
      meshRef.current.setColorAt(i, c)
    }

    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true
    }
  })

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, particles.length]}
    >
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial transparent opacity={0.8} toneMapped={false} />
    </instancedMesh>
  )
}

/* ── Inner scene ──────────────────────────────────────────────────────────── */

function PipelineScene({
  reducedMotion,
}: {
  reducedMotion: boolean
}) {
  const groupRef = useRef<THREE.Group>(null!)
  const mouse = useRef({ x: 0, y: 0 })

  const particles = useMemo(() => generateParticles(250), [])

  // Gate positions along the z-axis
  const gatePositions: [number, number, number][] = useMemo(
    () => [
      [0, 0, -5],
      [0, 0, -1.5],
      [0, 0, 2],
      [0, 0, 5.5],
    ],
    [],
  )

  // Mouse parallax
  useEffect(() => {
    if (reducedMotion) return
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [reducedMotion])

  useFrame(() => {
    if (!groupRef.current || reducedMotion) return
    const targetY = mouse.current.x * 0.12
    const targetX = -mouse.current.y * 0.08

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY + 0.3, // slight default angle for 3D depth
      0.02,
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX + 0.15,
      0.02,
    )
  })

  return (
    <group ref={groupRef}>
      {/* Gates */}
      {gatePositions.map((pos, i) => (
        <Gate
          key={i}
          position={pos}
          reducedMotion={reducedMotion}
          index={i}
        />
      ))}

      {/* Particle flow */}
      <ParticleFlow particles={particles} reducedMotion={reducedMotion} />
    </group>
  )
}

/* ── Main component ───────────────────────────────────────────────────────── */

interface BehavioralPipelineProps {
  className?: string
}

export function BehavioralPipeline({ className }: BehavioralPipelineProps) {
  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

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
        camera={{ position: [0, 0, 14], fov: 35 }}
      >
        <color attach="background" args={[VOID_BLACK]} />

        <Suspense fallback={null}>
          <PipelineScene reducedMotion={reducedMotion} />
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
