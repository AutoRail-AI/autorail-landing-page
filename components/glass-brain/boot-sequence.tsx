"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "lib/utils"

interface BootSequenceProps {
  onComplete: () => void
  className?: string
}

const DURATION_MS = 3400
const REDUCED_MOTION_MS = 100

export function BootSequence({ onComplete, className }: BootSequenceProps) {
  const [phase, setPhase] = useState(0)
  const [visible, setVisible] = useState(true)
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const step = reducedMotion ? REDUCED_MOTION_MS : 500

  useEffect(() => {
    if (reducedMotion) {
      const t = setTimeout(onComplete, REDUCED_MOTION_MS)
      return () => clearTimeout(t)
    }

    const t1 = setTimeout(() => setPhase(1), step)
    const t2 = setTimeout(() => setPhase(2), 1200)
    const t3 = setTimeout(() => setPhase(3), 2200)
    const t4 = setTimeout(() => setPhase(4), 2800)
    const t5 = setTimeout(() => {
      setVisible(false)
      setTimeout(onComplete, 500)
    }, DURATION_MS)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [onComplete, reducedMotion, step])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "absolute inset-0 z-50 flex flex-col items-center justify-center rounded-2xl bg-void-black/95",
            className
          )}
          aria-hidden="true"
        >
          {/* Pulsing dot */}
          <motion.div
            animate={
              phase >= 0
                ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }
                : {}
            }
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mb-8"
          >
            <div className="h-2 w-2 rounded-full bg-electric-cyan" />
            {phase >= 1 && (
              <motion.div
                initial={{ scale: 1, opacity: 0.4 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-electric-cyan"
              />
            )}
          </motion.div>

          {/* Radial lines (phase 1+) */}
          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute flex items-center justify-center"
              style={{ width: 120, height: 120 }}
            >
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute h-px w-[120px] bg-electric-cyan/40"
                  style={{
                    transform: `rotate(${deg}deg)`,
                  }}
                />
              ))}
            </motion.div>
          )}

          {/* Neural Link Established (phase 2+) */}
          {phase >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-electric-cyan font-mono text-sm tracking-[0.3em] uppercase mt-48"
            >
              Neural Link Established
            </motion.p>
          )}

          {/* Materializing panes (phase 3+) */}
          {phase >= 3 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-[10px] text-white/40 font-mono"
            >
              Materializing panes...
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
