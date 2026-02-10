"use client"

import { motion } from "framer-motion"
import { cn } from "lib/utils"
import { useEffect, useState } from "react"

export interface HeroVisualProps {
  className?: string
}

// Floating orb component with sophisticated animations
function FloatingOrb({
  size,
  color,
  blur,
  duration,
  delay,
  initialX,
  initialY,
  animate,
}: {
  size: number
  color: string
  blur: number
  duration: number
  delay: number
  initialX: string
  initialY: string
  animate: { x: string[]; y: string[] }
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${blur}px)`,
        left: initialX,
        top: initialY,
      }}
      animate={{
        x: animate.x,
        y: animate.y,
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  )
}

// Animated connection line with gradient
function ConnectionLine({
  d,
  delay,
  duration,
}: {
  d: string
  delay: number
  duration: number
}) {
  return (
    <motion.path
      d={d}
      stroke="url(#lineGradient)"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.6 }}
      transition={{
        pathLength: { duration, delay, ease: "easeInOut" },
        opacity: { duration: 0.5, delay },
      }}
    />
  )
}

// Pulsing node component
function PulsingNode({
  cx,
  cy,
  r,
  delay,
  color = "#6E18B3",
}: {
  cx: number
  cy: number
  r: number
  delay: number
  color?: string
}) {
  return (
    <g>
      {/* Outer glow ring */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={r * 2.5}
        fill="none"
        stroke={color}
        strokeWidth="0.5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 0.3, 0],
          scale: [0.8, 1.5, 0.8],
        }}
        transition={{
          duration: 3,
          delay,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      {/* Middle ring */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={r * 1.5}
        fill="none"
        stroke={color}
        strokeWidth="1"
        initial={{ opacity: 0.2 }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          delay: delay + 0.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Core node */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={r}
        fill={color}
        initial={{ opacity: 0.8 }}
        animate={{
          opacity: [0.8, 1, 0.8],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          delay: delay + 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </g>
  )
}

// Data particle flowing along path
function DataParticle({
  pathId,
  delay,
  duration,
  color = "#00E5FF",
}: {
  pathId: string
  delay: number
  duration: number
  color?: string
}) {
  return (
    <motion.circle
      r="2"
      fill={color}
      filter="url(#particleGlow)"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <animateMotion
        dur={`${duration}s`}
        repeatCount="indefinite"
        begin={`${delay}s`}
      >
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </motion.circle>
  )
}

export function HeroVisual({ className }: HeroVisualProps) {
  const [mounted, setMounted] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  if (!mounted) return null

  // Show static version for users who prefer reduced motion
  if (prefersReducedMotion) {
    return (
      <div
        className={cn(
          "absolute inset-0 overflow-hidden pointer-events-none",
          className
        )}
        aria-hidden="true"
      >
        {/* Static gradient background for reduced motion */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 20%, rgba(129, 52, 206, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 30%, rgba(110, 24, 179, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 50% 30% at 50% 80%, rgba(0, 229, 255, 0.05) 0%, transparent 50%)
            `,
          }}
        />
        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 15, 0.4) 100%)",
          }}
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
      aria-hidden="true"
    >
      {/* Layered gradient orbs - creates depth and atmosphere */}
      <div className="absolute inset-0">
        {/* Primary large orb - top left */}
        <FloatingOrb
          size={600}
          color="radial-gradient(circle, rgba(129, 52, 206, 0.15) 0%, rgba(129, 52, 206, 0) 70%)"
          blur={60}
          duration={20}
          delay={0}
          initialX="-10%"
          initialY="-20%"
          animate={{
            x: ["0%", "5%", "-3%", "0%"],
            y: ["0%", "8%", "3%", "0%"],
          }}
        />

        {/* Secondary orb - right side */}
        <FloatingOrb
          size={500}
          color="radial-gradient(circle, rgba(110, 24, 179, 0.12) 0%, rgba(110, 24, 179, 0) 70%)"
          blur={50}
          duration={25}
          delay={2}
          initialX="60%"
          initialY="10%"
          animate={{
            x: ["0%", "-8%", "4%", "0%"],
            y: ["0%", "10%", "-5%", "0%"],
          }}
        />

        {/* Cyan accent orb - bottom */}
        <FloatingOrb
          size={400}
          color="radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, rgba(0, 229, 255, 0) 70%)"
          blur={40}
          duration={18}
          delay={4}
          initialX="30%"
          initialY="60%"
          animate={{
            x: ["0%", "10%", "-5%", "0%"],
            y: ["0%", "-10%", "5%", "0%"],
          }}
        />

        {/* Small accent orb */}
        <FloatingOrb
          size={300}
          color="radial-gradient(circle, rgba(129, 52, 206, 0.1) 0%, rgba(129, 52, 206, 0) 70%)"
          blur={30}
          duration={15}
          delay={1}
          initialX="80%"
          initialY="70%"
          animate={{
            x: ["0%", "-15%", "8%", "0%"],
            y: ["0%", "-8%", "12%", "0%"],
          }}
        />
      </div>

      {/* SVG Network visualization - expanded to cover full area */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Sophisticated gradients */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6E18B3" stopOpacity="0" />
            <stop offset="20%" stopColor="#6E18B3" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#6E18B3" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#6E18B3" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6E18B3" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="lineGradientVertical" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6E18B3" stopOpacity="0" />
            <stop offset="30%" stopColor="#6E18B3" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#6E18B3" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6E18B3" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="1" />
            <stop offset="60%" stopColor="#6E18B3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6E18B3" stopOpacity="0" />
          </radialGradient>

          {/* Glow filters */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="particleGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Animated paths for particles - expanded across full area */}
          <path
            id="flowPath1"
            d="M 0 500 Q 300 350 600 500 Q 900 650 1200 500 Q 1400 400 1600 500"
            fill="none"
          />
          <path
            id="flowPath2"
            d="M 0 300 Q 400 150 800 300 Q 1200 450 1600 300"
            fill="none"
          />
          <path
            id="flowPath3"
            d="M 0 700 Q 400 850 800 650 Q 1200 450 1600 600"
            fill="none"
          />
          <path
            id="flowPath4"
            d="M 0 150 Q 500 250 800 150 Q 1100 50 1600 200"
            fill="none"
          />
          <path
            id="flowPath5"
            d="M 0 850 Q 400 750 800 850 Q 1200 950 1600 800"
            fill="none"
          />
        </defs>

        {/* Subtle grid pattern - expanded */}
        <g opacity="0.03">
          {Array.from({ length: 33 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 50}
              y1="0"
              x2={i * 50}
              y2="1000"
              stroke="#FAFAFA"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 21 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 50}
              x2="1600"
              y2={i * 50}
              stroke="#FAFAFA"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* Flowing connection lines - spread across entire viewport */}
        <g filter="url(#softGlow)">
          {/* Top area flows */}
          <ConnectionLine
            d="M 0 150 Q 400 100 800 180 Q 1200 260 1600 150"
            delay={0}
            duration={2.5}
          />
          <ConnectionLine
            d="M 0 250 Q 300 180 600 250 Q 1000 320 1400 220 Q 1500 200 1600 250"
            delay={0.3}
            duration={2.2}
          />

          {/* Middle area flows */}
          <ConnectionLine
            d="M 0 450 Q 300 380 600 450 Q 900 520 1200 450 Q 1400 400 1600 480"
            delay={0.5}
            duration={2}
          />
          <ConnectionLine
            d="M 0 550 Q 400 620 800 520 Q 1200 420 1600 550"
            delay={0.7}
            duration={2.3}
          />

          {/* Bottom area flows */}
          <ConnectionLine
            d="M 0 750 Q 350 680 700 750 Q 1050 820 1400 720 Q 1500 700 1600 750"
            delay={0.4}
            duration={2.5}
          />
          <ConnectionLine
            d="M 0 850 Q 500 900 1000 830 Q 1300 780 1600 880"
            delay={0.9}
            duration={2.2}
          />

          {/* Curved accent lines crossing areas */}
          <ConnectionLine
            d="M 100 100 Q 400 400 700 300 Q 1000 200 1300 400 Q 1500 500 1600 450"
            delay={0.8}
            duration={3}
          />
          <ConnectionLine
            d="M 100 900 Q 400 600 700 700 Q 1000 800 1300 600 Q 1500 500 1600 550"
            delay={1}
            duration={3}
          />

          {/* Vertical connections - spread across */}
          <motion.line
            x1="200"
            y1="100"
            x2="200"
            y2="900"
            stroke="url(#lineGradientVertical)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
          <motion.line
            x1="500"
            y1="50"
            x2="500"
            y2="950"
            stroke="url(#lineGradientVertical)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
          <motion.line
            x1="800"
            y1="80"
            x2="800"
            y2="920"
            stroke="url(#lineGradientVertical)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 1.4 }}
          />
          <motion.line
            x1="1100"
            y1="50"
            x2="1100"
            y2="950"
            stroke="url(#lineGradientVertical)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 1.5, delay: 1.6 }}
          />
          <motion.line
            x1="1400"
            y1="100"
            x2="1400"
            y2="900"
            stroke="url(#lineGradientVertical)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          />
        </g>

        {/* Pulsing nodes at intersections - spread across viewport */}
        <g filter="url(#strongGlow)">
          {/* Top row */}
          <PulsingNode cx={200} cy={150} r={3} delay={0} color="#6E18B3" />
          <PulsingNode cx={500} cy={180} r={4} delay={0.2} color="#6E18B3" />
          <PulsingNode cx={800} cy={150} r={3} delay={0.4} color="#00E5FF" />
          <PulsingNode cx={1100} cy={200} r={4} delay={0.6} color="#6E18B3" />
          <PulsingNode cx={1400} cy={160} r={3} delay={0.8} color="#6E18B3" />

          {/* Middle row */}
          <PulsingNode cx={150} cy={500} r={3} delay={1} color="#00E5FF" />
          <PulsingNode cx={400} cy={450} r={5} delay={0.3} color="#6E18B3" />
          <PulsingNode cx={700} cy={520} r={4} delay={0.5} color="#6E18B3" />
          <PulsingNode cx={1000} cy={480} r={5} delay={0.7} color="#6E18B3" />
          <PulsingNode cx={1300} cy={530} r={4} delay={0.9} color="#00E5FF" />
          <PulsingNode cx={1550} cy={500} r={3} delay={1.1} color="#6E18B3" />

          {/* Bottom row */}
          <PulsingNode cx={250} cy={800} r={3} delay={1.2} color="#6E18B3" />
          <PulsingNode cx={550} cy={750} r={4} delay={1.4} color="#00E5FF" />
          <PulsingNode cx={850} cy={820} r={3} delay={1.6} color="#6E18B3" />
          <PulsingNode cx={1150} cy={780} r={4} delay={1.8} color="#6E18B3" />
          <PulsingNode cx={1450} cy={850} r={3} delay={2} color="#00E5FF" />
        </g>

        {/* Flowing data particles - across all paths */}
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <DataParticle
              key={`p1-${i}`}
              pathId="flowPath1"
              delay={i * 1.5}
              duration={7}
              color="#00E5FF"
            />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <DataParticle
              key={`p2-${i}`}
              pathId="flowPath2"
              delay={i * 2 + 0.5}
              duration={6}
              color="#6E18B3"
            />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <DataParticle
              key={`p3-${i}`}
              pathId="flowPath3"
              delay={i * 2 + 1}
              duration={6.5}
              color="#6E18B3"
            />
          ))}
          {[0, 1, 2].map((i) => (
            <DataParticle
              key={`p4-${i}`}
              pathId="flowPath4"
              delay={i * 2.5}
              duration={5.5}
              color="#00E5FF"
            />
          ))}
          {[0, 1, 2].map((i) => (
            <DataParticle
              key={`p5-${i}`}
              pathId="flowPath5"
              delay={i * 2.5 + 1}
              duration={6}
              color="#6E18B3"
            />
          ))}
        </g>

        {/* Decorative corner accents - expanded */}
        <g opacity="0.15">
          {/* Top left */}
          <motion.path
            d="M 30 80 L 30 30 L 80 30"
            stroke="#6E18B3"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          {/* Top right */}
          <motion.path
            d="M 1520 30 L 1570 30 L 1570 80"
            stroke="#6E18B3"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          {/* Bottom left */}
          <motion.path
            d="M 30 920 L 30 970 L 80 970"
            stroke="#6E18B3"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
          {/* Bottom right */}
          <motion.path
            d="M 1520 970 L 1570 970 L 1570 920"
            stroke="#6E18B3"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          />
        </g>

        {/* Floating geometric shapes - spread across (triangles and circles only) */}
        <g opacity="0.1">
          <motion.polygon
            points="120,120 150,170 90,170"
            fill="none"
            stroke="#6E18B3"
            strokeWidth="1"
            animate={{
              rotate: [0, 360],
              y: [0, -10, 0],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ transformOrigin: "120px 145px" }}
          />
          <motion.polygon
            points="1480,100 1510,150 1450,150"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="1"
            animate={{
              rotate: [0, -360],
              y: [0, 10, 0],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ transformOrigin: "1480px 125px" }}
          />
          <motion.polygon
            points="100,800 130,850 70,850"
            fill="none"
            stroke="#6E18B3"
            strokeWidth="1"
            animate={{
              rotate: [0, 360],
              y: [0, -8, 0],
            }}
            transition={{
              rotate: { duration: 22, repeat: Infinity, ease: "linear" },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ transformOrigin: "100px 825px" }}
          />
          <motion.polygon
            points="1500,750 1530,800 1470,800"
            fill="none"
            stroke="#6E18B3"
            strokeWidth="1"
            animate={{
              rotate: [0, -360],
              y: [0, 12, 0],
            }}
            transition={{
              rotate: { duration: 28, repeat: Infinity, ease: "linear" },
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ transformOrigin: "1500px 775px" }}
          />
          <motion.circle
            cx="100"
            cy="350"
            r="30"
            fill="none"
            stroke="#6E18B3"
            strokeWidth="1"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="1500"
            cy="450"
            r="35"
            fill="none"
            stroke="#6E18B3"
            strokeWidth="1"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.18, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.circle
            cx="1450"
            cy="200"
            r="25"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="1"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.08, 0.18, 0.08],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.circle
            cx="150"
            cy="700"
            r="28"
            fill="none"
            stroke="#6E18B3"
            strokeWidth="1"
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.1, 0.22, 0.1],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </g>
      </svg>

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Center dimming gradient for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 50% at 50% 35%,
              rgba(10, 10, 15, 0.85) 0%,
              rgba(10, 10, 15, 0.6) 40%,
              rgba(10, 10, 15, 0.2) 70%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Edge vignette effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(10, 10, 15, 0.5) 100%)",
        }}
      />
    </div>
  )
}
