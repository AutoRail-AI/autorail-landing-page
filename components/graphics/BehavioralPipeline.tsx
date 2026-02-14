"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"

/* ─────────────────────────────────────────────────────────────────────────────
   BehavioralPipeline — Cinematic WebGL hero for Necroma.

   Visual narrative — Fragment → Reclaim:

   A 5×5×5 cube structure sits dim and decaying — the legacy system. It
   crumbles: fragments scatter outward through a corridor of verification
   gates, tumbling and glowing purple as they flow. They converge on the
   far side, snapping into a clean multi-color cube with a visible wireframe
   cage + translucent face panels. Three orbital rings sweep in like an
   armillary sphere. A reconstruction pulse fires. Ambient particle motes
   drift throughout for cinematic depth.

   The final cube rotates on its Y-axis, and its wireframe cage + face
   panels rotate with it, making the cube shape unmistakable from any angle.

   R3F Canvas, Bloom, seeded PRNG, mouse parallax, camera breathing,
   prefers-reduced-motion support. Dynamic import { ssr: false }.
   ───────────────────────────────────────────────────────────────────────────── */

/* ── Brand palette ────────────────────────────────────────────────────────── */

const VOID_BLACK = "#0A0A0F"
const RAIL_PURPLE = "#6E18B3"
const SUCCESS_GREEN = "#00FF88"
const ELECTRIC_CYAN = "#00E5FF"
const CLOUD_WHITE = "#E0E0E8"
const DIM_GRAY = "#3A3A42"
const DECAY_WARM = "#5A4040"

/* ── Timing ───────────────────────────────────────────────────────────────── */

const MORPH_DELAY = 1.0
const MORPH_DURATION = 4.0
const GATE_THRESHOLDS = [0.18, 0.33, 0.48, 0.63]

/* ── Geometry ─────────────────────────────────────────────────────────────── */

const GRID = 5
const SPACING = 0.52
const FRAG_SIZE = 0.30 // large enough for face shading + wireframe glow to be visible
const LEGACY_Z = -5.2
const MODERN_Z = 5.2
const SCATTER_MAG = 3.8
const FRAG_COUNT = GRID * GRID * GRID

/* ── Cube dimensions (derived) ────────────────────────────────────────────── */

const CUBE_EXTENT = (GRID - 1) * SPACING * 0.5 + FRAG_SIZE * 0.6

/* ── Math helpers ─────────────────────────────────────────────────────────── */

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

/* ── Fragment data ────────────────────────────────────────────────────────── */

interface FragmentData {
  id: number
  legacyPos: THREE.Vector3
  modernPos: THREE.Vector3 // relative to cube center (0,0,0)
  scatter: THREE.Vector3
  rotAxis: THREE.Vector3
  finalColor: THREE.Color
  size: number
}

/* ── Brand palette (from brand.md §6.1) ───────────────────────────────────── */

/* Final cube palette — overbright for Bloom glow.
   Cubes transition from dim gray → hot purple → these vivid brand colors.
   Multipliers push colors past 1.0 so Bloom creates luminous halos. */
const FINAL_PALETTE: { hex: string; mult: number; weight: number }[] = [
  { hex: SUCCESS_GREEN, mult: 2.2, weight: 0.30 },  // reclaimed / verified
  { hex: ELECTRIC_CYAN, mult: 2.0, weight: 0.30 },  // intelligence / spark
  { hex: RAIL_PURPLE, mult: 2.5, weight: 0.20 },    // deep context / wire
  { hex: CLOUD_WHITE, mult: 1.4, weight: 0.20 },    // structural / neutral
]

function pickFinalColor(rng: () => number): THREE.Color {
  let roll = rng()
  for (const entry of FINAL_PALETTE) {
    roll -= entry.weight
    if (roll <= 0) return new THREE.Color(entry.hex).multiplyScalar(entry.mult)
  }
  return new THREE.Color(CLOUD_WHITE).multiplyScalar(1.4)
}

function generateFragments(): FragmentData[] {
  const rng = seededRandom(42)
  const frags: FragmentData[] = []
  let id = 0
  const half = (GRID - 1) / 2

  for (let ix = 0; ix < GRID; ix++) {
    for (let iy = 0; iy < GRID; iy++) {
      for (let iz = 0; iz < GRID; iz++) {
        const cx = (ix - half) * SPACING
        const cy = (iy - half) * SPACING
        const cz = (iz - half) * SPACING
        const jt = 0.06

        frags.push({
          id: id++,
          legacyPos: new THREE.Vector3(
            cx + (rng() - 0.5) * jt,
            cy + (rng() - 0.5) * jt,
            cz + (rng() - 0.5) * jt + LEGACY_Z,
          ),
          // modernPos is LOCAL to cube center — the cube group sits at MODERN_Z
          modernPos: new THREE.Vector3(cx, cy, cz),
          scatter: new THREE.Vector3(
            (rng() - 0.5) * 2,
            (rng() - 0.5) * 2,
            (rng() - 0.5) * 1.5,
          ),
          rotAxis: new THREE.Vector3(
            rng() - 0.5,
            rng() - 0.5,
            rng() - 0.5,
          ).normalize(),
          finalColor: pickFinalColor(rng),
          size: FRAG_SIZE + (rng() - 0.5) * 0.04,
        })
      }
    }
  }
  return frags
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  AMBIENT PARTICLE FIELD                                                   */
/* ═══════════════════════════════════════════════════════════════════════════ */

const MOTE_COUNT = 300

function AmbientField({
  elapsed,
  reducedMotion,
}: {
  elapsed: React.MutableRefObject<number>
  reducedMotion: boolean
}) {
  const pointsRef = useRef<THREE.Points>(null!)

  const { positions, driftSpeeds } = useMemo(() => {
    const rng = seededRandom(123)
    const pos = new Float32Array(MOTE_COUNT * 3)
    const spd = new Float32Array(MOTE_COUNT * 3)

    for (let i = 0; i < MOTE_COUNT; i++) {
      pos[i * 3] = (rng() - 0.5) * 20
      pos[i * 3 + 1] = (rng() - 0.5) * 14
      pos[i * 3 + 2] = (rng() - 0.5) * 24
      spd[i * 3] = (rng() - 0.5) * 0.15
      spd[i * 3 + 1] = (rng() - 0.5) * 0.1
      spd[i * 3 + 2] = (rng() - 0.5) * 0.08
    }
    return { positions: pos, driftSpeeds: spd }
  }, [])

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.BufferAttribute(positions.slice(), 3))
    return g
  }, [positions])

  useFrame(() => {
    if (!pointsRef.current || reducedMotion) return
    const time = elapsed.current
    const posAttr = pointsRef.current.geometry.getAttribute("position") as THREE.BufferAttribute
    const arr = posAttr.array as Float32Array

    for (let i = 0; i < MOTE_COUNT; i++) {
      const i3 = i * 3
      arr[i3] = positions[i3]! + Math.sin(time * driftSpeeds[i3]! + i) * 1.5
      arr[i3 + 1] = positions[i3 + 1]! + Math.cos(time * driftSpeeds[i3 + 1]! + i * 0.7) * 1.0
      arr[i3 + 2] = positions[i3 + 2]! + Math.sin(time * driftSpeeds[i3 + 2]! + i * 1.3) * 0.8
    }
    posAttr.needsUpdate = true
  })

  return (
    <points ref={pointsRef} geometry={geom}>
      <pointsMaterial
        color={RAIL_PURPLE}
        size={1.2}
        sizeAttenuation
        transparent
        opacity={0.15}
        toneMapped={false}
        depthWrite={false}
      />
    </points>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  VERIFICATION GATE                                                        */
/* ═══════════════════════════════════════════════════════════════════════════ */

function Gate({
  position,
  reducedMotion,
  index,
  morphProgress,
  elapsed,
}: {
  position: [number, number, number]
  reducedMotion: boolean
  index: number
  morphProgress: React.MutableRefObject<number>
  elapsed: React.MutableRefObject<number>
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const matRef = useRef<THREE.MeshBasicMaterial>(null!)
  const rotSpeed = 0.05 + index * 0.02
  const threshold = GATE_THRESHOLDS[index] ?? 0.5

  const pipelineT = (position[2] - LEGACY_Z) / (MODERN_Z - LEGACY_Z)
  const targetColor = useMemo(() => {
    const c = new THREE.Color()
    c.lerpColors(new THREE.Color(RAIL_PURPLE), new THREE.Color(SUCCESS_GREEN), pipelineT)
    return c.multiplyScalar(1.4)
  }, [pipelineT])

  useFrame((_s, delta) => {
    if (!meshRef.current || !matRef.current) return
    const morph = morphProgress.current
    const dt = Math.min(delta, 0.05)
    const time = elapsed.current

    const gp = THREE.MathUtils.smoothstep(morph, threshold, threshold + 0.15)
    const scaleVal = gp > 0.95 ? 1 : gp * (1 + (1 - gp) * 0.15)
    meshRef.current.scale.setScalar(scaleVal)

    const breathe = gp > 0.5 ? Math.sin(time * 1.8 + index * 1.2) * 0.04 : 0
    matRef.current.opacity = gp * 0.28 + breathe

    if (!reducedMotion && gp > 0.1) {
      meshRef.current.rotation.y += dt * rotSpeed * gp
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={0}>
      <boxGeometry args={[4.5, 4.5, 0.12]} />
      <meshBasicMaterial
        ref={matRef}
        color={targetColor}
        wireframe
        transparent
        opacity={0}
        toneMapped={false}
      />
    </mesh>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  PIPELINE BEAM                                                            */
/* ═══════════════════════════════════════════════════════════════════════════ */

function PipelineBeam({
  morphProgress,
}: {
  morphProgress: React.MutableRefObject<number>
}) {
  const matRef = useRef<THREE.LineBasicMaterial>(null!)

  const geom = useMemo(() => {
    const waypoints = [
      new THREE.Vector3(0, 0, LEGACY_Z - 1),
      new THREE.Vector3(0, 0, LEGACY_Z),
      ...GATE_THRESHOLDS.map((_, i) =>
        new THREE.Vector3(0, 0, LEGACY_Z + ((MODERN_Z - LEGACY_Z) * (i + 0.5)) / GATE_THRESHOLDS.length)),
      new THREE.Vector3(0, 0, MODERN_Z),
      new THREE.Vector3(0, 0, MODERN_Z + 1),
    ]
    const segPts: THREE.Vector3[] = []
    for (let i = 0; i < waypoints.length - 1; i++) {
      segPts.push(waypoints[i]!, waypoints[i + 1]!)
    }
    return new THREE.BufferGeometry().setFromPoints(segPts)
  }, [])

  useFrame(() => {
    if (!matRef.current) return
    const alpha = THREE.MathUtils.smoothstep(morphProgress.current, 0.15, 0.45)
    matRef.current.opacity = alpha * 0.12
  })

  return (
    <lineSegments geometry={geom}>
      <lineBasicMaterial ref={matRef} color={RAIL_PURPLE} transparent opacity={0} toneMapped={false} />
    </lineSegments>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  LEGACY STRUCTURE OUTLINE                                                 */
/* ═══════════════════════════════════════════════════════════════════════════ */

function LegacyOutline({
  morphProgress,
}: {
  morphProgress: React.MutableRefObject<number>
}) {
  const matRef = useRef<THREE.LineBasicMaterial>(null!)
  const size = useMemo(() => {
    const s = (GRID - 1) * SPACING + FRAG_SIZE * 2
    return [s, s, s] as const
  }, [])
  const color = useMemo(() => new THREE.Color(DECAY_WARM), [])

  useFrame(() => {
    if (!matRef.current) return
    matRef.current.opacity = Math.max(0, 1 - morphProgress.current * 4) * 0.1
  })

  return (
    <lineSegments position={[0, 0, LEGACY_Z]}>
      <edgesGeometry args={[new THREE.BoxGeometry(...size)]} />
      <lineBasicMaterial ref={matRef} color={color} transparent opacity={0} toneMapped={false} />
    </lineSegments>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  CUBE FRAME — wireframe cage + translucent face panels (co-rotates)       */
/*  This gives the final cube unmistakable shape definition from any angle.  */
/* ═══════════════════════════════════════════════════════════════════════════ */

function CubeFrame({
  morphProgress,
  elapsed,
}: {
  morphProgress: React.MutableRefObject<number>
  elapsed: React.MutableRefObject<number>
}) {
  const edgeMatRef = useRef<THREE.LineBasicMaterial>(null!)
  const faceMats = useRef<(THREE.MeshBasicMaterial | null)[]>([])

  const cubeSize = CUBE_EXTENT * 2
  const edgeColor = useMemo(() => new THREE.Color(CLOUD_WHITE).multiplyScalar(0.9), [])

  // 6 face definitions: position offset + rotation for each face plane
  const faces = useMemo(() => {
    const e = CUBE_EXTENT
    return [
      { pos: [0, 0, e] as const, rot: [0, 0, 0] as const, color: ELECTRIC_CYAN },    // front
      { pos: [0, 0, -e] as const, rot: [0, Math.PI, 0] as const, color: ELECTRIC_CYAN }, // back
      { pos: [e, 0, 0] as const, rot: [0, Math.PI / 2, 0] as const, color: RAIL_PURPLE },  // right
      { pos: [-e, 0, 0] as const, rot: [0, -Math.PI / 2, 0] as const, color: RAIL_PURPLE }, // left
      { pos: [0, e, 0] as const, rot: [-Math.PI / 2, 0, 0] as const, color: SUCCESS_GREEN }, // top
      { pos: [0, -e, 0] as const, rot: [Math.PI / 2, 0, 0] as const, color: SUCCESS_GREEN }, // bottom
    ]
  }, [])

  const faceColors = useMemo(
    () => faces.map((f) => new THREE.Color(f.color).multiplyScalar(0.6)),
    [faces],
  )

  useFrame(() => {
    const morph = morphProgress.current
    const time = elapsed.current

    // Fade in during reconstruction
    const alpha = THREE.MathUtils.smoothstep(morph, 0.8, 0.98)
    if (alpha <= 0) {
      if (edgeMatRef.current) edgeMatRef.current.opacity = 0
      return
    }

    // Wireframe edges — subtle breathing
    if (edgeMatRef.current) {
      const breathe = Math.sin(time * 1.2) * 0.02
      edgeMatRef.current.opacity = alpha * (0.18 + breathe)
    }

    // Face panels — very subtle glass
    for (let i = 0; i < faces.length; i++) {
      const mat = faceMats.current[i]
      if (mat) {
        const faceBreath = Math.sin(time * 0.8 + i * 1.05) * 0.008
        mat.opacity = alpha * (0.035 + faceBreath)
      }
    }
  })

  return (
    <>
      {/* Wireframe cage — 12 edges of the cube */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)]} />
        <lineBasicMaterial
          ref={edgeMatRef}
          color={edgeColor}
          transparent
          opacity={0}
          toneMapped={false}
        />
      </lineSegments>

      {/* 6 face panels — translucent glass with per-face color tint */}
      {faces.map((face, i) => (
        <mesh
          key={i}
          position={face.pos as unknown as [number, number, number]}
          rotation={face.rot as unknown as [number, number, number]}
        >
          <planeGeometry args={[cubeSize, cubeSize]} />
          <meshBasicMaterial
            ref={(el) => { faceMats.current[i] = el }}
            color={faceColors[i]}
            transparent
            opacity={0}
            side={THREE.DoubleSide}
            toneMapped={false}
            depthWrite={false}
          />
        </mesh>
      ))}
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  CORNER ACCENTS — 8 small glowing dots at cube vertices                   */
/* ═══════════════════════════════════════════════════════════════════════════ */

function CornerAccents({
  morphProgress,
  elapsed,
}: {
  morphProgress: React.MutableRefObject<number>
  elapsed: React.MutableRefObject<number>
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const tmpColor = useMemo(() => new THREE.Color(), [])

  const corners = useMemo(() => {
    const e = CUBE_EXTENT
    const palette = [ELECTRIC_CYAN, RAIL_PURPLE, SUCCESS_GREEN, CLOUD_WHITE]
    return [
      [-e, -e, -e], [-e, -e, e], [-e, e, -e], [-e, e, e],
      [e, -e, -e], [e, -e, e], [e, e, -e], [e, e, e],
    ].map((pos, i) => ({
      pos: pos as [number, number, number],
      color: new THREE.Color(palette[i % palette.length]!).multiplyScalar(1.5),
    }))
  }, [])

  useFrame(() => {
    if (!meshRef.current) return
    const morph = morphProgress.current
    const time = elapsed.current
    const alpha = THREE.MathUtils.smoothstep(morph, 0.88, 1.0)

    for (let i = 0; i < 8; i++) {
      const c = corners[i]!
      // Pulsing scale
      const pulse = 1 + Math.sin(time * 2.5 + i * 0.8) * 0.3
      const s = alpha * 0.04 * pulse

      dummy.position.set(c.pos[0], c.pos[1], c.pos[2])
      dummy.scale.setScalar(s)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)

      tmpColor.copy(c.color).multiplyScalar(alpha)
      meshRef.current.setColorAt(i, tmpColor)
    }

    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, 8]}>
      <icosahedronGeometry args={[1, 2]} />
      <meshBasicMaterial transparent toneMapped={false} />
    </instancedMesh>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  ENERGY TRAIL — comet-tail particles streaming behind fragments in flow  */
/* ═══════════════════════════════════════════════════════════════════════════ */

const TRAIL_PER_FRAG = 3 // trail dots per fragment
const TRAIL_COUNT = FRAG_COUNT * TRAIL_PER_FRAG

function EnergyTrail({
  fragments,
  morphProgress,
  elapsed,
}: {
  fragments: FragmentData[]
  morphProgress: React.MutableRefObject<number>
  elapsed: React.MutableRefObject<number>
}) {
  const pointsRef = useRef<THREE.Points>(null!)

  const { positions, colors } = useMemo(() => {
    return {
      positions: new Float32Array(TRAIL_COUNT * 3),
      colors: new Float32Array(TRAIL_COUNT * 3),
    }
  }, [])

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    return g
  }, [positions, colors])

  const tmpColor = useMemo(() => new THREE.Color(), [])
  const cyanRef = useMemo(() => new THREE.Color(ELECTRIC_CYAN), [])

  useFrame(() => {
    if (!pointsRef.current) return
    const raw = morphProgress.current
    const time = elapsed.current
    // Trail visible during flow phase (0.05 → 0.88), bell curve intensity
    const trailAlpha = Math.sin(THREE.MathUtils.clamp(raw, 0, 0.88) / 0.88 * Math.PI)

    const posArr = positions
    const colArr = colors
    const t = easeInOutCubic(Math.min(raw, 1))
    const scatterAmt = Math.sin(raw * Math.PI) * SCATTER_MAG

    for (let i = 0; i < fragments.length; i++) {
      const frag = fragments[i]!

      // Current fragment world position (matches FragmentSystem)
      const fx = frag.legacyPos.x + (frag.modernPos.x - frag.legacyPos.x) * t + frag.scatter.x * scatterAmt
      const fy = frag.legacyPos.y + (frag.modernPos.y - frag.legacyPos.y) * t + frag.scatter.y * scatterAmt
      const fz = frag.legacyPos.z + (frag.modernPos.z + MODERN_Z - frag.legacyPos.z) * t + frag.scatter.z * scatterAmt

      for (let j = 0; j < TRAIL_PER_FRAG; j++) {
        const idx = (i * TRAIL_PER_FRAG + j) * 3
        const lag = (j + 1) * 0.4
        const jitter = Math.sin(time * 3.5 + frag.id * 2.1 + j * 1.7) * 0.12

        posArr[idx] = fx + jitter
        posArr[idx + 1] = fy + Math.cos(time * 2.8 + j * 2.3) * 0.08
        posArr[idx + 2] = fz - lag

        // Overbright purple → cyan gradient along trail length
        const trailT = (j + 1) / TRAIL_PER_FRAG
        tmpColor.setRGB(0.43, 0.09, 0.70)
        tmpColor.lerp(cyanRef, trailT * 0.6)
        tmpColor.multiplyScalar(2.5 * trailAlpha * (1 - trailT * 0.4))

        colArr[idx] = tmpColor.r
        colArr[idx + 1] = tmpColor.g
        colArr[idx + 2] = tmpColor.b
      }
    }

    geom.attributes.position!.needsUpdate = true
    geom.attributes.color!.needsUpdate = true

    const mat = pointsRef.current.material as THREE.PointsMaterial
    mat.opacity = trailAlpha * 0.8
  })

  return (
    <points ref={pointsRef} geometry={geom}>
      <pointsMaterial
        size={1.8}
        sizeAttenuation
        transparent
        opacity={0}
        vertexColors
        toneMapped={false}
        depthWrite={false}
      />
    </points>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  FRAGMENT SYSTEM — solid lit cubes with cinematic color narrative         */
/*                                                                          */
/*  Phase 1 (Legacy):  Dim warm gray, subtle decay wobble                   */
/*  Phase 2 (Flow):    Hot overbright purple, Bloom glow, tumbling          */
/*  Phase 3 (Settle):  Vivid brand colors, gentle breathing pulse           */
/* ═══════════════════════════════════════════════════════════════════════════ */

function FragmentSystem({
  fragments,
  morphProgress,
  elapsed,
  reducedMotion,
  spinAngle,
}: {
  fragments: FragmentData[]
  morphProgress: React.MutableRefObject<number>
  elapsed: React.MutableRefObject<number>
  reducedMotion: boolean
  spinAngle: React.MutableRefObject<number>
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const tmpPos = useMemo(() => new THREE.Vector3(), [])
  const decayColor = useMemo(() => new THREE.Color(DECAY_WARM).multiplyScalar(0.6), [])
  const hotPurple = useMemo(() => new THREE.Color(RAIL_PURPLE).multiplyScalar(2.8), [])
  const tmpColor = useMemo(() => new THREE.Color(), [])

  // Quaternion for spinning fragments around the cube center (Y-axis)
  const spinQuat = useMemo(() => new THREE.Quaternion(), [])
  const spinAxisY = useMemo(() => new THREE.Vector3(0, 1, 0), [])
  const cubeCenter = useMemo(() => new THREE.Vector3(0, 0, MODERN_Z), [])

  useFrame(() => {
    if (!meshRef.current) return
    const raw = morphProgress.current
    const t = easeInOutCubic(Math.min(raw, 1))
    const time = elapsed.current

    const scatterAmt = Math.sin(raw * Math.PI) * SCATTER_MAG
    const tumbleAmt = Math.sin(raw * Math.PI)

    // Color phase blends (3-phase narrative)
    const flowRise = THREE.MathUtils.smoothstep(raw, 0.08, 0.35)   // gray → purple
    const flowPeak = Math.sin(THREE.MathUtils.clamp(raw, 0, 0.8) / 0.8 * Math.PI) // bell curve
    const settleIn = THREE.MathUtils.smoothstep(raw, 0.65, 0.92)   // purple → brand

    // Use same spinAngle as the cube group for perfect sync
    spinQuat.setFromAxisAngle(spinAxisY, spinAngle.current)

    for (let i = 0; i < fragments.length; i++) {
      const frag = fragments[i]!

      // World-space target (modernPos is local, offset by MODERN_Z)
      const modernWorldX = frag.modernPos.x
      const modernWorldY = frag.modernPos.y
      const modernWorldZ = frag.modernPos.z + MODERN_Z

      // Lerp legacy → modern with scatter arc
      tmpPos.set(
        frag.legacyPos.x + (modernWorldX - frag.legacyPos.x) * t + frag.scatter.x * scatterAmt,
        frag.legacyPos.y + (modernWorldY - frag.legacyPos.y) * t + frag.scatter.y * scatterAmt,
        frag.legacyPos.z + (modernWorldZ - frag.legacyPos.z) * t + frag.scatter.z * scatterAmt,
      )

      // Legacy decay wobble — fragments shiver while decaying
      if (!reducedMotion) {
        const wobble = (1 - t) * 0.04
        tmpPos.x += Math.sin(time * 2.8 + frag.id * 1.7) * wobble
        tmpPos.y += Math.cos(time * 2.2 + frag.id * 1.3) * wobble
      }

      // Spin around cube center after morph (synced with CubeFrame)
      if (spinAngle.current > 0.001) {
        tmpPos.sub(cubeCenter)
        tmpPos.applyQuaternion(spinQuat)
        tmpPos.add(cubeCenter)
      }

      dummy.position.copy(tmpPos)

      // Tumble during flow — fragments roll chaotically mid-flight
      dummy.rotation.set(0, 0, 0)
      if (tumbleAmt > 0.01) {
        dummy.rotateOnWorldAxis(frag.rotAxis, tumbleAmt * Math.PI * 0.7 + frag.id * 0.12)
      }

      // Scale: slightly smaller during peak scatter, full size at rest
      const scaleT = 1 - tumbleAmt * 0.1
      dummy.scale.setScalar(frag.size * scaleT)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)

      /* ── 3-PHASE COLOR NARRATIVE ──
         Phase 1: Dim warm gray (legacy decay)
         Phase 2: Overbright hot purple (flowing energy — Bloom catches this)
         Phase 3: Vivid brand color (settled, reclaimed, alive) */

      // Start with dim decay color
      tmpColor.copy(decayColor)

      // Phase 2: lerp to hot purple during flow, with overbright peak
      tmpColor.lerp(hotPurple, flowRise * flowPeak)

      // Phase 3: settle into final brand color
      tmpColor.lerp(frag.finalColor, settleIn)

      // Post-morph breathing — gentle luminance pulse (staggered per-fragment)
      if (raw > 0.9) {
        const breathe = 1 + Math.sin(time * 1.5 + frag.id * 0.35) * 0.1
        tmpColor.multiplyScalar(breathe)
      }

      meshRef.current.setColorAt(i, tmpColor)
    }

    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, FRAG_COUNT]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        toneMapped={false}
        roughness={0.3}
        metalness={0.1}
      />
    </instancedMesh>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  RECONSTRUCTION PULSE                                                     */
/* ═══════════════════════════════════════════════════════════════════════════ */

function ReconstructionPulse({
  morphProgress,
}: {
  morphProgress: React.MutableRefObject<number>
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const matRef = useRef<THREE.MeshBasicMaterial>(null!)
  const triggered = useRef(false)
  const pulseTime = useRef(0)

  useFrame((_s, delta) => {
    if (!meshRef.current || !matRef.current) return

    if (!triggered.current && morphProgress.current > 0.96) {
      triggered.current = true
      pulseTime.current = 0
    }
    if (!triggered.current) return

    pulseTime.current += Math.min(delta, 0.05)
    const pt = pulseTime.current
    const expandT = Math.min(pt / 1.2, 1)
    meshRef.current.scale.setScalar(0.5 + expandT * 5)
    matRef.current.opacity = Math.max(0, (1 - expandT) * 0.2)
  })

  return (
    <mesh ref={meshRef} position={[0, 0, MODERN_Z]} scale={0}>
      <ringGeometry args={[0.95, 1.0, 64]} />
      <meshBasicMaterial
        ref={matRef}
        color={SUCCESS_GREEN}
        transparent
        opacity={0}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  CAMERA BREATHING                                                         */
/* ═══════════════════════════════════════════════════════════════════════════ */

function CameraBreathing({
  reducedMotion,
  elapsed,
}: {
  reducedMotion: boolean
  elapsed: React.MutableRefObject<number>
}) {
  const { camera } = useThree()

  useFrame(() => {
    if (reducedMotion) return
    const time = elapsed.current
    camera.position.z = 14 + Math.sin(time * 0.3) * 0.25
    camera.position.y = Math.sin(time * 0.2 + 0.5) * 0.08
  })

  return null
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  PIPELINE SCENE                                                           */
/* ═══════════════════════════════════════════════════════════════════════════ */

function PipelineScene({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null!)
  const cubeGroupRef = useRef<THREE.Group>(null!)
  const mouse = useRef({ x: 0, y: 0 })
  const morphProgress = useRef(reducedMotion ? 1 : 0)
  const elapsed = useRef(0)
  const spinAngle = useRef(0)

  const fragments = useMemo(() => generateFragments(), [])

  const gatePositions: [number, number, number][] = useMemo(
    () => [[0, 0, -2.8], [0, 0, -0.6], [0, 0, 1.6], [0, 0, 3.8]],
    [],
  )

  useEffect(() => {
    if (reducedMotion) return
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [reducedMotion])

  useFrame((_s, delta) => {
    if (!groupRef.current) return
    const dt = Math.min(delta, 0.05)
    elapsed.current += dt

    if (!reducedMotion && elapsed.current > MORPH_DELAY && morphProgress.current < 1) {
      morphProgress.current = Math.min(1, morphProgress.current + dt / MORPH_DURATION)
    }

    // Gentle Y-axis spin on the cube group after reconstruction
    if (cubeGroupRef.current) {
      const spinBlend = THREE.MathUtils.smoothstep(morphProgress.current, 0.93, 1.0)
      if (!reducedMotion && spinBlend > 0) {
        spinAngle.current += dt * 0.12 * spinBlend
      }
      cubeGroupRef.current.rotation.y = spinAngle.current
    }

    if (reducedMotion) return

    // Mouse parallax
    const targetY = mouse.current.x * 0.08
    const targetX = -mouse.current.y * 0.05
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.02)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.02)
  })

  return (
    <>
      <CameraBreathing reducedMotion={reducedMotion} elapsed={elapsed} />

      {/* 3-point lighting for solid cube fragments */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 8, 10]} intensity={0.9} color="#ffffff" />
      <directionalLight position={[-4, -3, -6]} intensity={0.25} color={RAIL_PURPLE} />
      <directionalLight position={[2, 4, MODERN_Z + 2]} intensity={0.35} color={ELECTRIC_CYAN} />

      <AmbientField elapsed={elapsed} reducedMotion={reducedMotion} />

      <group ref={groupRef}>
        {/* Legacy structure outline */}
        <LegacyOutline morphProgress={morphProgress} />

        {/* Pipeline beam + gates */}
        <PipelineBeam morphProgress={morphProgress} />
        {gatePositions.map((pos, i) => (
          <Gate
            key={i}
            position={pos}
            reducedMotion={reducedMotion}
            index={i}
            morphProgress={morphProgress}
            elapsed={elapsed}
          />
        ))}

        {/* Energy trails — comet-tail particles during flow phase */}
        <EnergyTrail
          fragments={fragments}
          morphProgress={morphProgress}
          elapsed={elapsed}
        />

        {/* Reconstruction pulse (world-space, doesn't rotate) */}
        <ReconstructionPulse morphProgress={morphProgress} />

        {/* Fragments in world-space — spin via quaternion synced to cubeGroup */}
        <FragmentSystem
          fragments={fragments}
          morphProgress={morphProgress}
          elapsed={elapsed}
          reducedMotion={reducedMotion}
          spinAngle={spinAngle}
        />

        {/*
          CUBE GROUP — positioned at MODERN_Z, rotates on Y-axis.
          Wireframe cage, face panels, corner accents rotate together,
          giving the cube unmistakable shape from every angle.
          Fragments above use the same spinAngle for perfect sync.
        */}
        <group ref={cubeGroupRef} position={[0, 0, MODERN_Z]}>
          <CubeFrame morphProgress={morphProgress} elapsed={elapsed} />
          <CornerAccents morphProgress={morphProgress} elapsed={elapsed} />
        </group>
      </group>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  MAIN EXPORT                                                              */
/* ═══════════════════════════════════════════════════════════════════════════ */

export function BehavioralPipeline({ className }: { className?: string }) {
  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) {
    return <div className={className} style={{ width: "100%", height: "100%", background: VOID_BLACK }} />
  }

  return (
    <div className={className} style={{ width: "100%", height: "100%", position: "relative" }}>
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
          <Bloom luminanceThreshold={0.12} intensity={1.2} mipmapBlur />
        </EffectComposer>
      </Canvas>

      {/* CSS vignette for cinematic framing */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(10,10,15,0.4) 100%)",
        }}
      />
    </div>
  )
}
