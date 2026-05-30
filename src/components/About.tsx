import { motion } from 'framer-motion'
import {
  Zap,
  Layers,
  Radio,
  BrainCircuit,
  Cpu,
  Boxes,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { developer, expertiseAreas } from '../data/content'
import { SectionHeader } from './SectionHeader'

const approachIcons = [Zap, Layers, Radio]

const systemStats = [
  {
    label: 'Platforms',
    value: 'Cross Platform',
    icon: Boxes,
  },
  {
    label: 'Focus',
    value: 'AI Systems',
    icon: BrainCircuit,
  },
  {
    label: 'Architecture',
    value: 'Realtime Ready',
    icon: Cpu,
  },
]

export function About() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section
      id="about"
      ref={ref}
      className="section-divider section-padding relative overflow-hidden border-y border-white/[0.04]"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 mesh-bg opacity-40" />

      {/* Cyber grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Ambient glows */}
      <motion.div
        animate={{
          opacity: [0.18, 0.42, 0.18],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -left-32 top-1/2 h-[420px] w-[420px] rounded-full bg-neon-violet/5 blur-[140px]"
      />

      <motion.div
        animate={{
          opacity: [0.16, 0.36, 0.16],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute right-0 top-0 h-[380px] w-[380px] rounded-full bg-neon-cyan/5 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="About VLabs"
          title="Engineering Intelligent Digital Systems"
          subtitle="AI-focused development, scalable applications, modern interfaces, and realtime architectures engineered with production-style workflows."
        />

        <div className="space-y-10">
          {/* Top section */}
          <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[36px] border border-white/[0.06] bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            >
              {/* Ambient glow */}
              <motion.div
                animate={{
                  opacity: [0.14, 0.32, 0.14],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.10),transparent_42%)]"
              />

              <div className="relative z-10 p-4">
                <div className="overflow-hidden rounded-[28px] border border-white/[0.06] bg-black/40">
                  <img
                    src="/VLabs/images/developer-photo.jpeg"
                    alt="Developer portrait"
                    className="mx-auto max-h-[760px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Bio + stats */}
            <div className="space-y-8">
              {/* Bio card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[36px] border border-white/[0.06] bg-white/[0.03] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:p-10"
              >
                {/* Glow */}
                <motion.div
                  animate={{
                    opacity: [0.16, 0.35, 0.16],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_40%)]"
                />

                <div className="relative z-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-cyan">
                    Engineering Profile
                  </p>

                  <div className="mt-6 space-y-5">
                    {developer.bio.map((paragraph, i) => (
                      <p
                        key={i}
                        className={`leading-relaxed ${
                          i === 0
                            ? 'text-lg font-medium text-white/75'
                            : 'text-[15px] text-white/55'
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* System stats */}
              <div className="grid gap-5 sm:grid-cols-3">
                {systemStats.map((item, i) => {
                  const Icon = item.icon

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                      }}
                      className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-white/[0.03] p-6 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
                    >
                      {/* Glow */}
                      <motion.div
                        animate={{
                          opacity: [0.12, 0.28, 0.12],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.10),transparent_42%)]"
                      />

                      <div className="relative z-10">
                        <Icon className="h-6 w-6 text-neon-cyan" />

                        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                          {item.label}
                        </p>

                        <h4 className="mt-2 font-display text-base font-semibold text-white">
                          {item.value}
                        </h4>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Engineering approach */}
          <div className="grid gap-5 sm:grid-cols-3">
            {developer.approach.map((item, i) => {
              const Icon = approachIcons[i] ?? Zap

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="relative overflow-hidden rounded-[30px] border border-white/[0.06] bg-white/[0.03] p-6 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
                >
                  {/* Glow */}
                  <motion.div
                    animate={{
                      opacity: [0.12, 0.3, 0.12],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.10),transparent_42%)]"
                  />

                  <div className="relative z-10">
                    <Icon className="mb-4 h-6 w-6 text-neon-cyan" />

                    <h4 className="font-display text-base font-semibold">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Expertise */}
          <div className="grid gap-5">
            {expertiseAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-white/[0.03] p-7 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
              >
                {/* Glow */}
                <motion.div
                  animate={{
                    opacity: [0.12, 0.28, 0.12],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.10),transparent_42%)]"
                />

                <div className="relative z-10 flex gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-neon-cyan/15 bg-neon-cyan/10 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]">
                    <area.icon className="h-8 w-8 text-neon-cyan" />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      {area.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}