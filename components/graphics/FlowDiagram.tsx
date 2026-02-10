"use client"

import { motion } from "framer-motion"
import { cn } from "lib/utils"
import { useEffect, useState } from "react"

export interface FlowDiagramProps {
  className?: string
}

export function FlowDiagram({ className }: FlowDiagramProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className={cn(
        "relative w-full max-w-4xl mx-auto",
        className
      )}
    >
      {/* Main SVG Diagram */}
      <svg
        viewBox="0 0 800 280"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6E18B3" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6E18B3" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#6E18B3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6E18B3" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="centerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6E18B3" />
            <stop offset="100%" stopColor="#6E18B3" />
          </linearGradient>

          {/* Glow filters */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Flow paths for particles */}
          <path
            id="leftPath"
            d="M 155 140 L 330 140"
            fill="none"
          />
          <path
            id="rightPath"
            d="M 470 140 L 645 140"
            fill="none"
          />
        </defs>

        {/* === LEFT NODE: Your Code === */}
        <g>
          {/* Outer glow ring */}
          <motion.circle
            cx="100"
            cy="140"
            r="58"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main circle */}
          <motion.circle
            cx="100"
            cy="140"
            r="50"
            fill="#1A1A2E"
            stroke="#00E5FF"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Code icon */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <path
              d="M 88 130 L 78 140 L 88 150"
              stroke="#00E5FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M 112 130 L 122 140 L 112 150"
              stroke="#00E5FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </motion.g>

          {/* Label */}
          <motion.text
            x="100"
            y="215"
            textAnchor="middle"
            className="fill-cloud-white font-[family-name:var(--font-grotesk)]"
            fontSize="14"
            fontWeight="500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Your Code
          </motion.text>
          <motion.text
            x="100"
            y="232"
            textAnchor="middle"
            className="fill-foreground-muted"
            fontSize="11"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Any framework
          </motion.text>
        </g>

        {/* === LEFT CONNECTION LINE === */}
        <g filter="url(#softGlow)">
          <motion.line
            x1="155"
            y1="140"
            x2="330"
            y2="140"
            stroke="url(#cyanGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

        </g>

        {/* Left flow particles */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`left-particle-${i}`}
            r="3"
            fill="#00E5FF"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1.5,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <animateMotion
              dur="1.5s"
              repeatCount="indefinite"
              begin={`${i * 0.5}s`}
            >
              <mpath href="#leftPath" />
            </animateMotion>
          </motion.circle>
        ))}

        {/* === CENTER NODE: autorail === */}
        <g>
          {/* Outer pulse rings */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx="400"
              cy="140"
              r="70"
              fill="none"
              stroke="#6E18B3"
              strokeWidth="1"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.4, 1.8],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 1,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Glow background */}
          <circle
            cx="400"
            cy="140"
            r="65"
            fill="#6E18B3"
            fillOpacity="0.15"
          />

          {/* Main hexagon-like shape */}
          <motion.rect
            x="335"
            y="75"
            width="130"
            height="130"
            rx="20"
            fill="url(#centerGradient)"
            stroke="#6E18B3"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ filter: "url(#glow)" }}
          />

          {/* autorail logo/icon - layered boxes */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Top layer */}
            <path
              d="M 400 110 L 430 125 L 400 140 L 370 125 Z"
              fill="none"
              stroke="#FAFAFA"
              strokeWidth="2"
            />
            {/* Middle layer */}
            <path
              d="M 370 135 L 400 150 L 430 135"
              fill="none"
              stroke="#FAFAFA"
              strokeWidth="2"
              strokeOpacity="0.7"
            />
            {/* Bottom layer */}
            <path
              d="M 370 145 L 400 160 L 430 145"
              fill="none"
              stroke="#FAFAFA"
              strokeWidth="2"
              strokeOpacity="0.5"
            />
          </motion.g>

          {/* Label */}
          <motion.text
            x="400"
            y="225"
            textAnchor="middle"
            className="fill-cloud-white font-[family-name:var(--font-grotesk)]"
            fontSize="16"
            fontWeight="600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            autorail
          </motion.text>
          <motion.text
            x="400"
            y="244"
            textAnchor="middle"
            className="fill-foreground-muted"
            fontSize="11"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Intelligent provisioning
          </motion.text>
        </g>

        {/* === RIGHT CONNECTION LINE === */}
        <g filter="url(#softGlow)">
          <motion.line
            x1="470"
            y1="140"
            x2="645"
            y2="140"
            stroke="url(#purpleGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

        </g>

        {/* Right flow particles */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`right-particle-${i}`}
            r="3"
            fill="#6E18B3"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1.5,
              delay: i * 0.5 + 0.3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <animateMotion
              dur="1.5s"
              repeatCount="indefinite"
              begin={`${i * 0.5 + 0.3}s`}
            >
              <mpath href="#rightPath" />
            </animateMotion>
          </motion.circle>
        ))}

        {/* === RIGHT NODE: Infrastructure === */}
        <g>
          {/* Outer glow ring */}
          <motion.circle
            cx="700"
            cy="140"
            r="58"
            fill="none"
            stroke="#6E18B3"
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Main circle */}
          <motion.circle
            cx="700"
            cy="140"
            r="50"
            fill="#1A1A2E"
            stroke="#6E18B3"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          {/* Server icon */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {/* Server box */}
            <rect
              x="680"
              y="125"
              width="40"
              height="30"
              rx="3"
              fill="none"
              stroke="#6E18B3"
              strokeWidth="2"
            />
            {/* Server lights */}
            <circle cx="690" cy="135" r="2" fill="#6E18B3" />
            <circle cx="698" cy="135" r="2" fill="#6E18B3" />
            <circle cx="706" cy="135" r="2" fill="#00E5FF" />
            {/* Base line */}
            <line
              x1="690"
              y1="155"
              x2="710"
              y2="155"
              stroke="#6E18B3"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Label */}
          <motion.text
            x="700"
            y="215"
            textAnchor="middle"
            className="fill-cloud-white font-[family-name:var(--font-grotesk)]"
            fontSize="14"
            fontWeight="500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Infrastructure
          </motion.text>
          <motion.text
            x="700"
            y="232"
            textAnchor="middle"
            className="fill-foreground-muted"
            fontSize="11"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Production-ready
          </motion.text>
        </g>
      </svg>
    </div>
  )
}
