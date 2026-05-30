import { motion } from 'framer-motion'
import { Cpu, ShieldCheck, Activity } from 'lucide-react'
import { useEffect, useState } from 'react'

import { SectionHeader } from './SectionHeader'
import { useScrollReveal } from '../hooks/useScrollReveal'

const terminalLines = [
  '[VLabs] Initializing intelligent systems...',
  '[Realtime] WebSocket infrastructure connected',
  '[AI Engine] Workflow agents online',
  '[Deploy] Production environment stable',
  '[Security] Runtime validation passed',
  '[Systems] Cross-platform services active',
  '[Status] All systems operational',
]

export function SystemsTerminal() {
  const ref = useScrollReveal<HTMLElement>()

  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [currentTyping, setCurrentTyping] = useState('')

  useEffect(() => {
    let lineIndex = 0
    let charIndex = 0

    let currentLine = ''

    const typeInterval = setInterval(() => {
      if (lineIndex >= terminalLines.length) {
        clearInterval(typeInterval)
        return
      }

      currentLine = terminalLines[lineIndex]

      setCurrentTyping(
        currentLine.slice(0, charIndex + 1)
      )

      charIndex++

      if (charIndex > currentLine.length) {
        setVisibleLines((prev) => [
          ...prev,
          currentLine,
        ])

        setCurrentTyping('')

        lineIndex++
        charIndex = 0
      }
    }, 28)

    return () => clearInterval(typeInterval)
  }, [])

  return (
    <section
      id="systems"
      ref={ref}
      className="section-divider section-padding relative overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 mesh-bg opacity-40" />

      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-neon-cyan/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="Infrastructure"
          title="Systems Runtime"
          subtitle="Operational layer powering intelligent workflows, realtime infrastructure, AI-assisted systems, and modern application engineering."
          align="center"
        />

        {/* Terminal */}
        <div className="terminal-grid animate-in-view relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#050816]/90 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
          {/* Scanline */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
                backgroundSize: '100% 4px',
              }}
            />
          </div>

          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.9)]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-neon-cyan">
                LIVE SYSTEM
              </span>
            </div>
          </div>

          {/* Terminal content */}
          <div className="relative px-6 py-8 sm:px-10 sm:py-10">
            <div className="space-y-4">
              {visibleLines.map((line, index) => (
                <motion.div
                  key={line}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.45,
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 font-mono text-sm text-white/75"
                >
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(0,240,255,0.8)]" />

                  <span>{line}</span>
                </motion.div>
              ))}

              {currentTyping && (
  <div className="flex items-start gap-3 font-mono text-sm text-white/75">
    <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-neon-violet shadow-[0_0_12px_rgba(139,92,246,0.9)]" />

    <span>{currentTyping}</span>
  </div>
)}

              {/* Blinking cursor */}
              <motion.div
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="mt-6 font-mono text-neon-cyan"
              >
                ▋
              </motion.div>
            </div>

                {/* Live status strip */}
<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {[
    {
      label: 'Systems Online',
      value: '12',
    },
    {
      label: 'AI Workflows',
      value: '24/7',
    },
    {
      label: 'Realtime Services',
      value: 'Active',
    },
    {
      label: 'Deployment Status',
      value: 'Stable',
    },
  ].map((item) => (
    <motion.div
      key={item.label}
      whileHover={{
        y: -4,
      }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
        {item.label}
      </p>

      <div className="mt-3 flex items-center gap-3">
        <motion.span
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="h-2.5 w-2.5 rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(0,240,255,0.9)]"
        />

        <span className="font-display text-2xl font-bold text-white">
          {item.value}
        </span>
      </div>
    </motion.div>
  ))}
</div>


            {/* Bottom cards */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-neon-cyan/10">
                  <Cpu className="h-5 w-5 text-neon-cyan" />
                </div>

                <h3 className="font-display text-lg font-semibold">
                  AI Workflows
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  Intelligent automation systems and AI-assisted engineering
                  pipelines designed for modern software products.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-neon-violet/10">
                  <Activity className="h-5 w-5 text-neon-violet" />
                </div>

                <h3 className="font-display text-lg font-semibold">
                  Realtime Systems
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  Scalable communication layers, synchronized application state,
                  and responsive realtime infrastructure.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-neon-magenta/10">
                  <ShieldCheck className="h-5 w-5 text-neon-magenta" />
                </div>

                <h3 className="font-display text-lg font-semibold">
                  Production Architecture
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  Modern frontend systems, deployment-ready interfaces, and
                  scalable engineering-focused application design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}