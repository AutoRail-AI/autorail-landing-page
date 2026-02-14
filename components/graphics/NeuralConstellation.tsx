"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"

/* ─────────────────────────────────────────────────────────────────────────────
   NeuralConstellation — WebGL knowledge graph for Code-Synapse hero.

   Visual narrative — Chaos → Structure:

   The animation starts as a scattered, drifting particle cloud — the same
   visual language as the landing page's AntigravityCloud. Over ~3 seconds,
   particles gravitate to Fibonacci sphere positions, edges draw in between
   newly connected nodes, and pulse particles begin carrying "knowledge"
   along edges. The transformation tells Code-Synapse's story visually:
   unstructured agent output → organized knowledge graph.

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

/* ── Morph timing ────────────────────────────────────────────────────────── */

const MORPH_DELAY = 0.8 // seconds before morph begins
const MORPH_DURATION = 3.2 // seconds for chaos→graph transition
const EDGE_FADE_START = 0.55 // morph progress when edges begin appearing
const EDGE_FADE_END = 0.9 // morph progress when edges fully visible
const PULSE_START = 0.88 // morph progress when pulse particles activate

/* ── Easing — smooth cubic ease-in-out ───────────────────────────────────── */

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

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
  chaosPosition: THREE.Vector3
  graphPosition: THREE.Vector3
  size: number
  color: THREE.Color
}

interface EdgeData {
  fromIdx: number
  toIdx: number
  colorHex: string
  opacity: number
}

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2

function generateGraph(nodeCount: number, edgeCount: number) {
  const rng = seededRandom(42)
  const nodes: NodeData[] = []
  const RADIUS = 6
  const CHAOS_RADIUS = 11 // larger, spread-out cloud for chaos phase

  for (let i = 0; i < nodeCount; i++) {
    // ── Graph position — Fibonacci sphere distribution ──────────────────
    const theta = (2 * Math.PI * i) / GOLDEN_RATIO
    const phi = Math.acos(1 - (2 * (i + 0.5)) / nodeCount)
    const r = RADIUS * (0.6 + rng() * 0.4)

    const gx = r * Math.sin(phi) * Math.cos(theta)
    const gy = r * Math.sin(phi) * Math.sin(theta)
    const gz = r * Math.cos(phi)

    // ── Chaos position — random scatter in larger sphere ────────────────
    const cTheta = rng() * Math.PI * 2
    const cPhi = Math.acos(2 * rng() - 1)
    const cR = CHAOS_RADIUS * (0.3 + rng() * 0.7)
    const cx = cR * Math.sin(cPhi) * Math.cos(cTheta)
    const cy = cR * Math.sin(cPhi) * Math.sin(cTheta)
    const cz = cR * Math.cos(cPhi)

    // ── Bicameral clustering (matches AntigravityCloud) ─────────────────
    const radialDepth = (r / RADIUS - 0.6) / 0.4
    const roll = rng()
    let colorHex = CLOUD_WHITE
    let emissiveMultiplier = 1.5

    if (roll < 0.04) {
      colorHex = SUCCESS_GREEN
      emissiveMultiplier = 5
    } else if (roll < 0.14) {
      colorHex = WARNING_YELLOW
      emissiveMultiplier = 4
    } else if (roll < 0.38) {
      colorHex = radialDepth < 0.6 ? ELECTRIC_CYAN : CLOUD_WHITE
      emissiveMultiplier = radialDepth < 0.6 ? 5 : 1.5
    } else if (roll < 0.52) {
      colorHex = radialDepth > 0.4 ? RAIL_PURPLE : CLOUD_WHITE
      emissiveMultiplier = radialDepth > 0.4 ? 4 : 1.5
    }

    nodes.push({
      id: i,
      chaosPosition: new THREE.Vector3(cx, cy, cz),
      graphPosition: new THREE.Vector3(gx, gy, gz),
      size: 0.04 + rng() * 0.06,
      color: new THREE.Color(colorHex).multiplyScalar(emissiveMultiplier),
    })
  }

  // ── Edges — connect nearby nodes (by graph position) ───────────────────
  const edges: EdgeData[] = []
  const usedPairs = new Set<string>()

  for (
    let attempt = 0;
    edges.length < edgeCount && attempt < edgeCount * 5;
    attempt++
  ) {
    const a = Math.floor(rng() * nodeCount)
    const b = Math.floor(rng() * nodeCount)
    if (a === b) continue

    const key = a < b ? `${a}-${b}` : `${b}-${a}`
    if (usedPairs.has(key)) continue

    const dist = nodes[a]!.graphPosition.distanceTo(nodes[b]!.graphPosition)
    if (dist > RADIUS * 1.2) continue

    usedPairs.add(key)
    edges.push({
      fromIdx: a,
      toIdx: b,
      colorHex: nodes[a]!.color.getHexString(),
      opacity: 0.12 + rng() * 0.2,
    })
  }

  return { nodes, edges }
}

/* ── NodeCloud — animated nodes lerping from chaos to graph positions ────── */

function NodeCloud({
  nodes,
  morphProgress,
  elapsed,
}: {
  nodes: NodeData[]
  morphProgress: React.MutableRefObject<number>
  elapsed: React.MutableRefObject<number>
}) {
  const meshRefs = useRef<(THREE.Mesh | null)[]>([])
  const tmpVec = useMemo(() => new THREE.Vector3(), [])

  useFrame(() => {
    const raw = morphProgress.current
    const t = easeInOutCubic(Math.min(raw, 1))
    const time = elapsed.current

    for (let i = 0; i < nodes.length; i++) {
      const mesh = meshRefs.current[i]
      if (!mesh) continue
      const node = nodes[i]!

      tmpVec.lerpVectors(node.chaosPosition, node.graphPosition, t)

      // Organic drift during chaos phase — fades out as graph forms
      const driftAmt = (1 - t) * 0.4
      tmpVec.x += Math.sin(time * 0.5 + node.id * 1.3) * driftAmt
      tmpVec.y += Math.cos(time * 0.4 + node.id * 0.9) * driftAmt
      tmpVec.z += Math.sin(time * 0.3 + node.id * 1.7) * driftAmt * 0.5

      mesh.position.copy(tmpVec)

      // Subtle scale-up as nodes settle into structure
      const scale = 0.6 + 0.4 * t
      mesh.scale.setScalar(scale)
    }
  })

  return (
    <>
      {nodes.map((node, i) => (
        <mesh
          key={node.id}
          ref={(el) => {
            meshRefs.current[i] = el
          }}
        >
          <icosahedronGeometry args={[node.size, 1]} />
          <meshBasicMaterial
            color={node.color}
            transparent
            opacity={0.85}
            toneMapped={false}
          />
        </mesh>
      ))}
    </>
  )
}

/* ── EdgeNetwork — lineSegments with vertex colors, morph-synced positions ── */

function EdgeNetwork({
  edges,
  nodes,
  morphProgress,
  elapsed,
}: {
  edges: EdgeData[]
  nodes: NodeData[]
  morphProgress: React.MutableRefObject<number>
  elapsed: React.MutableRefObject<number>
}) {
  const matRef = useRef<THREE.LineBasicMaterial>(null!)
  const tmpA = useMemo(() => new THREE.Vector3(), [])
  const tmpB = useMemo(() => new THREE.Vector3(), [])

  const { geometry, posAttr } = useMemo(() => {
    const positions = new Float32Array(edges.length * 6)
    const colors = new Float32Array(edges.length * 6)

    edges.forEach((edge, i) => {
      // Colors: use the "from" node's color converted to linear RGB
      const col = new THREE.Color(`#${edge.colorHex}`)
      const o = i * 6
      colors[o] = col.r
      colors[o + 1] = col.g
      colors[o + 2] = col.b
      colors[o + 3] = col.r
      colors[o + 4] = col.g
      colors[o + 5] = col.b
    })

    const geo = new THREE.BufferGeometry()
    const posAttribute = new THREE.BufferAttribute(positions, 3)
    geo.setAttribute("position", posAttribute)
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    return { geometry: geo, posAttr: posAttribute }
  }, [edges])

  useFrame(() => {
    if (!matRef.current) return
    const raw = morphProgress.current
    const t = easeInOutCubic(Math.min(raw, 1))
    const time = elapsed.current

    // Update edge endpoint positions to follow node morph
    for (let i = 0; i < edges.length; i++) {
      const { fromIdx, toIdx } = edges[i]!
      const nA = nodes[fromIdx]!
      const nB = nodes[toIdx]!

      tmpA.lerpVectors(nA.chaosPosition, nA.graphPosition, t)
      tmpB.lerpVectors(nB.chaosPosition, nB.graphPosition, t)

      // Same drift as NodeCloud — keeps edges attached to nodes
      const driftAmt = (1 - t) * 0.4
      tmpA.x += Math.sin(time * 0.5 + nA.id * 1.3) * driftAmt
      tmpA.y += Math.cos(time * 0.4 + nA.id * 0.9) * driftAmt
      tmpA.z += Math.sin(time * 0.3 + nA.id * 1.7) * driftAmt * 0.5
      tmpB.x += Math.sin(time * 0.5 + nB.id * 1.3) * driftAmt
      tmpB.y += Math.cos(time * 0.4 + nB.id * 0.9) * driftAmt
      tmpB.z += Math.sin(time * 0.3 + nB.id * 1.7) * driftAmt * 0.5

      const o = i * 6
      posAttr.array[o] = tmpA.x
      posAttr.array[o + 1] = tmpA.y
      posAttr.array[o + 2] = tmpA.z
      posAttr.array[o + 3] = tmpB.x
      posAttr.array[o + 4] = tmpB.y
      posAttr.array[o + 5] = tmpB.z
    }
    posAttr.needsUpdate = true

    // Fade edges in as morph progresses
    const alpha = THREE.MathUtils.smoothstep(raw, EDGE_FADE_START, EDGE_FADE_END)
    matRef.current.opacity = alpha * 0.18
  })

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial
        ref={matRef}
        vertexColors
        transparent
        opacity={0}
        toneMapped={false}
      />
    </lineSegments>
  )
}

/* ── PulseParticle — lerps along edges, activates after morph completes ──── */

function PulseParticle({
  edges,
  nodes,
  index,
  morphProgress,
}: {
  edges: EdgeData[]
  nodes: NodeData[]
  index: number
  morphProgress: React.MutableRefObject<number>
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
    const morph = morphProgress.current

    // Hidden until morph threshold
    if (morph < PULSE_START) {
      matRef.current.opacity = 0
      return
    }

    // Fade in
    const fadeIn = THREE.MathUtils.smoothstep(morph, PULSE_START, 1)
    matRef.current.opacity = fadeIn * 0.9

    const dt = Math.min(delta, 0.05)
    const s = state.current
    s.t += dt * s.speed

    if (s.t >= 1) {
      s.t = 0
      s.edgeIdx = (s.edgeIdx + 7) % edges.length
      const edge = edges[s.edgeIdx]!
      const fromNode = nodes[edge.fromIdx]!
      const newColor = fromNode.color.clone().multiplyScalar(1.2)
      matRef.current.color.copy(newColor)
    }

    const edge = edges[s.edgeIdx]!
    const fromNode = nodes[edge.fromIdx]!
    const toNode = nodes[edge.toIdx]!
    meshRef.current.position.lerpVectors(
      fromNode.graphPosition,
      toNode.graphPosition,
      s.t,
    )
  })

  const initialEdge = edges[index % edges.length]!
  const initialColor = useMemo(
    () => nodes[initialEdge.fromIdx]!.color.clone().multiplyScalar(1.2),
    [nodes, initialEdge.fromIdx],
  )

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial
        ref={matRef}
        color={initialColor}
        transparent
        opacity={0}
        toneMapped={false}
      />
    </mesh>
  )
}

/* ── ConstellationScene — orchestrates morph, rotation, parallax ─────────── */

function ConstellationScene({
  reducedMotion,
}: {
  reducedMotion: boolean
}) {
  const groupRef = useRef<THREE.Group>(null!)
  const mouse = useRef({ x: 0, y: 0 })
  const autoRotY = useRef(0)
  const breathPhase = useRef(0)
  const morphProgress = useRef(reducedMotion ? 1 : 0)
  const elapsed = useRef(0)

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
    if (!groupRef.current) return
    const dt = Math.min(delta, 0.05)
    elapsed.current += dt

    // ── Morph progression (delay → animate → hold at 1.0) ──────────────
    if (!reducedMotion && elapsed.current > MORPH_DELAY && morphProgress.current < 1) {
      morphProgress.current = Math.min(
        1,
        morphProgress.current + dt / MORPH_DURATION,
      )
    }

    if (reducedMotion) return

    // Breathing — subtle after morph completes
    breathPhase.current += dt * 0.15
    const breathScale =
      morphProgress.current >= 1
        ? 1 + Math.sin(breathPhase.current) * 0.02
        : 1
    groupRef.current.scale.setScalar(breathScale)

    // Rotation + parallax — starts slow, accelerates as morph completes
    const rotSpeed = 0.02 + morphProgress.current * 0.04
    autoRotY.current += dt * rotSpeed
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

  // Pulse particles — 15 particles, activated after morph
  const pulseIndices = useMemo(
    () => (reducedMotion ? [] : Array.from({ length: 15 }, (_, i) => i)),
    [reducedMotion],
  )

  return (
    <group ref={groupRef}>
      <NodeCloud
        nodes={nodes}
        morphProgress={morphProgress}
        elapsed={elapsed}
      />

      <EdgeNetwork
        edges={edges}
        nodes={nodes}
        morphProgress={morphProgress}
        elapsed={elapsed}
      />

      {pulseIndices.map((i) => (
        <PulseParticle
          key={i}
          edges={edges}
          nodes={nodes}
          index={i}
          morphProgress={morphProgress}
        />
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
