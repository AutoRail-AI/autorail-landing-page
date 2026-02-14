"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Line } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"

/* ─────────────────────────────────────────────────────────────────────────────
   NeuralConstellation — WebGL knowledge graph for Code-Synapse hero.

   Visual narrative: The same chaotic multi-color token cloud from the landing
   page's AntigravityCloud — but here it's been *organized* into a structured
   knowledge graph. Chaos → Structure. Same palette, new topology.

   ~70 icosahedron nodes using the full brand palette (cyan, purple, yellow,
   green, white) connected by ~120 color-matched edges. Animated pulse
   particles travel along edges carrying "knowledge" between nodes.

   Same infrastructure as AntigravityCloud: R3F Canvas, Bloom postprocessing,
   seeded PRNG, mouse parallax, prefers-reduced-motion support.
   Dynamic import with { ssr: false }, NOT exported from barrel.
   ───────────────────────────────────────────────────────────────────────────── */

const VOID_BLACK = "#0A0A0F"
const CLOUD_WHITE = "#FAFAFA"
const ELECTRIC_CYAN = "#00E5FF"
const RAIL_PURPLE = "#6E18B3"
const WARNING_YELLOW = "#FFB800"
const SUCCESS_GREEN = "#00FF88"

/* ── Seeded PRNG — identical output on every render ───────────────────────── */

function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

/* ── Node & Edge data ─────────────────────────────────────────────────────── */

interface NodeData {
  id: number
  position: THREE.Vector3
  size: number
  colorHex: string
  emissiveMultiplier: number
}

interface EdgeData {
  from: THREE.Vector3
  to: THREE.Vector3
  colorHex: string
  opacity: number
}

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2

function generateGraph(nodeCount: number, edgeCount: number) {
  const rng = seededRandom(42)
  const nodes: NodeData[] = []
  const RADIUS = 6

  // Fibonacci sphere distribution for nodes
  for (let i = 0; i < nodeCount; i++) {
    const theta = (2 * Math.PI * i) / GOLDEN_RATIO
    const phi = Math.acos(1 - (2 * (i + 0.5)) / nodeCount)
    const r = RADIUS * (0.6 + rng() * 0.4)

    const x = r * Math.sin(phi) * Math.cos(theta)
    const y = r * Math.sin(phi) * Math.sin(theta)
    const z = r * Math.cos(phi)

    // ── Bicameral clustering (matches AntigravityCloud) ──────────────
    // radialDepth: 0 = inner core, 1 = outer edge
    const radialDepth = (r / RADIUS - 0.6) / 0.4

    const roll = rng()
    let colorHex = CLOUD_WHITE
    let emissiveMultiplier = 1.5

    if (roll < 0.04) {
      // Success Green — rare sparks, white-hot neon
      colorHex = SUCCESS_GREEN
      emissiveMultiplier = 5
    } else if (roll < 0.14) {
      // Warning Yellow — distributed evenly
      colorHex = WARNING_YELLOW
      emissiveMultiplier = 4
    } else if (roll < 0.38) {
      // Electric Cyan — biased toward inner core (Intelligence = Core)
      colorHex = radialDepth < 0.6 ? ELECTRIC_CYAN : CLOUD_WHITE
      emissiveMultiplier = radialDepth < 0.6 ? 5 : 1.5
    } else if (roll < 0.52) {
      // Rail Purple — biased toward outer perimeter (Legacy = Edge)
      colorHex = radialDepth > 0.4 ? RAIL_PURPLE : CLOUD_WHITE
      emissiveMultiplier = radialDepth > 0.4 ? 4 : 1.5
    }

    nodes.push({
      id: i,
      position: new THREE.Vector3(x, y, z),
      size: 0.04 + rng() * 0.06,
      colorHex,
      emissiveMultiplier,
    })
  }

  // Generate edges connecting nearby nodes — color matches the "from" node
  const edges: EdgeData[] = []
  const usedPairs = new Set<string>()

  for (let attempt = 0; edges.length < edgeCount && attempt < edgeCount * 5; attempt++) {
    const a = Math.floor(rng() * nodeCount)
    const b = Math.floor(rng() * nodeCount)
    if (a === b) continue

    const key = a < b ? `${a}-${b}` : `${b}-${a}`
    if (usedPairs.has(key)) continue

    const dist = nodes[a]!.position.distanceTo(nodes[b]!.position)
    if (dist > RADIUS * 1.2) continue

    usedPairs.add(key)
    edges.push({
      from: nodes[a]!.position,
      to: nodes[b]!.position,
      colorHex: nodes[a]!.colorHex,
      opacity: 0.12 + rng() * 0.2,
    })
  }

  return { nodes, edges }
}

/* ── Pulse particle — lerps along a random edge, inherits edge color ──── */

function PulseParticle({
  edges,
  index,
}: {
  edges: EdgeData[]
  index: number
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const matRef = useRef<THREE.MeshBasicMaterial>(null!)
  const state = useRef({
    edgeIdx: index % edges.length,
    t: (index * 0.17) % 1,
    speed: 0.3 + (index * 0.07) % 0.4,
  })

  useFrame((_s, delta) => {
    if (!meshRef.current || !matRef.current) return
    const dt = Math.min(delta, 0.05)
    const s = state.current
    s.t += dt * s.speed

    if (s.t >= 1) {
      s.t = 0
      s.edgeIdx = (s.edgeIdx + 7) % edges.length
      // Update color to match new edge
      const newColor = new THREE.Color(edges[s.edgeIdx]!.colorHex).multiplyScalar(6)
      matRef.current.color.copy(newColor)
    }

    const edge = edges[s.edgeIdx]!
    meshRef.current.position.lerpVectors(edge.from, edge.to, s.t)
  })

  const initialColor = useMemo(
    () => new THREE.Color(edges[index % edges.length]!.colorHex).multiplyScalar(6),
    [edges, index],
  )

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial
        ref={matRef}
        color={initialColor}
        transparent
        opacity={0.9}
        toneMapped={false}
      />
    </mesh>
  )
}

/* ── Inner scene — useFrame for rotation + parallax ──────────────────────── */

function ConstellationScene({
  reducedMotion,
}: {
  reducedMotion: boolean
}) {
  const groupRef = useRef<THREE.Group>(null!)
  const mouse = useRef({ x: 0, y: 0 })
  const autoRotY = useRef(0)
  const breathPhase = useRef(0)

  const { nodes, edges } = useMemo(() => generateGraph(70, 120), [])

  // Window-level mouse tracking
  useEffect(() => {
    if (reducedMotion) return
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [reducedMotion])

  useFrame((_state, delta) => {
    if (!groupRef.current || reducedMotion) return
    const dt = Math.min(delta, 0.05)

    breathPhase.current += dt * 0.15
    groupRef.current.scale.setScalar(
      1 + Math.sin(breathPhase.current) * 0.02,
    )

    autoRotY.current += dt * 0.06
    const targetY = mouse.current.x * 0.15 + autoRotY.current
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

  // Pre-compute node colors (overbright for Bloom)
  const nodeColors = useMemo(
    () =>
      nodes.map((n) =>
        new THREE.Color(n.colorHex).multiplyScalar(n.emissiveMultiplier),
      ),
    [nodes],
  )

  // Pulse particles — 15 particles traveling along edges
  const pulseIndices = useMemo(
    () => (reducedMotion ? [] : Array.from({ length: 15 }, (_, i) => i)),
    [reducedMotion],
  )

  return (
    <group ref={groupRef}>
      {/* Nodes — icosahedron geometry with per-node overbright color */}
      {nodes.map((node, i) => (
        <mesh key={node.id} position={node.position}>
          <icosahedronGeometry args={[node.size, 1]} />
          <meshBasicMaterial
            color={nodeColors[i]}
            transparent
            opacity={0.85}
            toneMapped={false}
          />
        </mesh>
      ))}

      {/* Edges — color-matched lines connecting nodes */}
      {edges.map((edge, i) => (
        <Line
          key={i}
          points={[edge.from, edge.to]}
          color={edge.colorHex}
          transparent
          opacity={edge.opacity}
          lineWidth={1}
        />
      ))}

      {/* Pulse particles — carry color along edges */}
      {pulseIndices.map((i) => (
        <PulseParticle key={i} edges={edges} index={i} />
      ))}
    </group>
  )
}

/* ── Main component ───────────────────────────────────────────────────────── */

interface NeuralConstellationProps {
  className?: string
}

export function NeuralConstellation({ className }: NeuralConstellationProps) {
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
        camera={{ position: [0, 0, 16], fov: 35 }}
      >
        <color attach="background" args={[VOID_BLACK]} />

        <Suspense fallback={null}>
          <ConstellationScene reducedMotion={reducedMotion} />
        </Suspense>

        <EffectComposer multisampling={0}>
          <Bloom
            luminanceThreshold={0.1}
            intensity={1.8}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
