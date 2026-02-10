"use client"

import { motion } from "framer-motion"
import {
  Brain,
  FileCode,
  MessageSquare,
  FolderTree,
  Terminal,
  Circle,
  Clock,
} from "lucide-react"
import { useCallback, useState } from "react"
import { BreathingGlow } from "./breathing-glow"
import { BootSequence } from "./boot-sequence"
import { cn } from "lib/utils"

const MOCK_STATS = {
  loc: 1247,
  testsPassed: 12,
  testsTotal: 12,
  toolsUsed: 8,
  selfHeals: 2,
  status: "Self-healing...",
  timer: "02:34",
}

const MOCK_TREE = [
  { name: "src", type: "folder", children: true },
  { name: "app", type: "folder", children: true },
  { name: "components", type: "folder", children: true },
  { name: "package.json", type: "file" },
  { name: "tsconfig.json", type: "file" },
]

const MOCK_LOG = [
  { time: "14:32:01", label: "THINK", text: "Analyzing DataGrid component...", color: "text-muted-foreground" },
  { time: "14:32:02", label: "TOOL", text: "read_file components/DataGrid.tsx", color: "text-electric-cyan" },
  { time: "14:32:03", label: "WRITE", text: "Normalized column types in DataGrid.tsx", color: "text-foreground" },
  { time: "14:32:05", label: "TEST", text: "Running unit tests...", color: "text-warning" },
  { time: "14:32:07", label: "PASS", text: "All 12 tests passed", color: "text-success" },
  { time: "14:32:08", label: "HEAL", text: "Self-heal cycle complete", color: "text-quantum-violet" },
]

const MOCK_CHAT = [
  { role: "ai" as const, text: "Detected type inconsistency in DataGrid. Applying normalization fix." },
  { role: "user" as const, text: "Ensure we don't break the filter API." },
  { role: "ai" as const, text: "Fix applied. Filter API unchanged; only internal column typing updated. Tests passing." },
]

export function GlassBrainShowcase() {
  const [booted, setBooted] = useState(false)
  const [confidence] = useState(0.72)
  const onBootComplete = useCallback(() => setBooted(true), [])

  return (
    <div className="relative min-h-[640px] rounded-2xl overflow-hidden">
      <BootSequence onComplete={onBootComplete} className="rounded-2xl" />

      {booted && (
        <BreathingGlow confidence={confidence} className="block h-full p-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-[1fr_2fr_1fr] gap-3 h-full min-h-[600px]"
          >
            {/* Header bar */}
            <div className="col-span-3 glass-panel rounded-lg px-4 py-3 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative"
                >
                  <Circle className="w-2.5 h-2.5 fill-quantum-violet text-quantum-violet" />
                </motion.div>
                <span className="text-sm font-mono text-white/90">
                  {MOCK_STATS.status}
                </span>
              </div>
              <div className="flex items-center gap-6 font-mono text-xs text-white/70">
                <span>LOC {MOCK_STATS.loc}</span>
                <span className="text-warning">
                  Tests {MOCK_STATS.testsPassed}/{MOCK_STATS.testsTotal}
                </span>
                <span className="text-electric-cyan">Tools {MOCK_STATS.toolsUsed}</span>
                <span className="text-quantum-violet">Heals {MOCK_STATS.selfHeals}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {MOCK_STATS.timer}
                </span>
              </div>
            </div>

            {/* Left: Workspace tree */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="glass-panel rounded-lg flex flex-col overflow-hidden"
            >
              <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2">
                <FolderTree className="w-4 h-4 text-rail-purple" />
                <span className="text-xs font-grotesk font-medium text-white/90">
                  Workspace
                </span>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                {MOCK_TREE.map((item, i) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 py-1.5 px-2 rounded text-xs text-white/70 hover:bg-white/5 cursor-default"
                  >
                    {item.type === "folder" ? (
                      <FolderTree className="w-3.5 h-3.5 text-white/50" />
                    ) : (
                      <FileCode className="w-3.5 h-3.5 text-electric-cyan/80" />
                    )}
                    {item.name}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Center: Editor + Console */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex flex-col gap-3 min-h-0"
            >
              <div className="glass-panel rounded-lg flex-1 flex flex-col min-h-0 overflow-hidden">
                <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-electric-cyan" />
                  <span className="text-xs font-mono text-white/80">
                    DataGrid.tsx
                  </span>
                </div>
                <div className="flex-1 overflow-auto custom-scrollbar p-4 font-mono text-xs leading-relaxed">
                  <pre className="text-white/80">
                    <code>
                      <span className="text-quantum-violet">const</span>{" "}
                      <span className="text-electric-cyan">columns</span>{" "}
                      <span className="text-white/60">=</span>{" "}
                      <span className="text-success">&quot;normalized&quot;</span>
                      {"\n"}
                      <span className="text-muted-foreground/50">// Filter API unchanged</span>
                    </code>
                  </pre>
                </div>
              </div>
              <div className="glass-panel rounded-lg flex-1 min-h-[140px] flex flex-col overflow-hidden">
                <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-electric-cyan" />
                  <span className="text-xs font-grotesk font-medium text-white/90">
                    Build Console
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-3 font-mono text-[11px] space-y-1.5">
                  {MOCK_LOG.map((line, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-white/40 shrink-0">{line.time}</span>
                      <span className={cn("shrink-0 w-10", line.color)}>
                        {line.label}
                      </span>
                      <span className="text-white/70 truncate">{line.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Chat */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="glass-panel rounded-lg flex flex-col overflow-hidden"
            >
              <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-rail-purple" />
                <span className="text-xs font-grotesk font-medium text-white/90">
                  AI thoughts
                </span>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-3">
                {MOCK_CHAT.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex gap-2",
                      msg.role === "user" && "justify-end"
                    )}
                  >
                    {msg.role === "ai" && (
                      <div className="shrink-0 w-6 h-6 rounded-full bg-electric-cyan/20 flex items-center justify-center">
                        <Brain className="w-3 h-3 text-electric-cyan" />
                      </div>
                    )}
                    <p
                      className={cn(
                        "text-xs rounded-lg px-3 py-2 max-w-[85%]",
                        msg.role === "ai"
                          ? "bg-white/5 text-white/80 border border-white/5"
                          : "bg-rail-purple/20 text-white/90 border border-rail-purple/30"
                      )}
                    >
                      {msg.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </BreathingGlow>
      )}
    </div>
  )
}
