  import { motion } from 'framer-motion'
  import {
    Download,
    ExternalLink,
    Smartphone,
    Pin,
    Reply,
    MoreHorizontal,
  } from 'lucide-react'
  import { useScrollReveal } from '../hooks/useScrollReveal'
  import {
    vchatProject,
    vchatFeatures,
    vchatArchitecture,
    vchatManagers,
  } from '../data/content'
  import { SectionHeader } from './SectionHeader'
  import { TechBadge } from './ui/TechBadge'
  import { StatCard } from './ui/StatCard'
  import { FeatureCard } from './ui/FeatureCard'

  export function FeaturedProject() {
    const ref = useScrollReveal<HTMLElement>()

    return (
      <section
  id="vchat"
  ref={ref}
  className="section-divider section-padding relative overflow-hidden border-y border-white/[0.04]"
>
        {/* Ambient background */}
<div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/[0.05] via-transparent to-neon-violet/[0.05]" />

{/* Cyber grid */}
<div className="absolute inset-0 opacity-[0.035]">
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

{/* Ambient glow center */}
<motion.div
  animate={{
    opacity: [0.25, 0.5, 0.25],
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="absolute left-1/2 top-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-neon-cyan/5 blur-[160px]"
/>

{/* Secondary violet glow */}
<motion.div
  animate={{
    opacity: [0.18, 0.4, 0.18],
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-neon-violet/5 blur-[150px]"
/>

        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            label="Featured Project"
            title={vchatProject.name}
            subtitle={vchatProject.summary}
          />

          {/* Project header bar */}
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  whileHover={{ y: -4 }}
  className="animate-in-view glow-border relative mb-12 overflow-hidden rounded-[32px] border border-white/[0.06] bg-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8"
>
  {/* Ambient glow */}
  <motion.div
    animate={{
      opacity: [0.2, 0.45, 0.2],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.12),transparent_35%)]"
  />

  <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-violet shadow-glow">
                <Smartphone className="h-7 w-7" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-bold">VChat Messenger</h3>
                  <span className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neon-cyan">
                    {vchatProject.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/40">
                  Inspired by {vchatProject.inspiration} · {vchatProject.version}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
  href="https://github.com/Vlabs99/Vchat/releases/download/v1.0/app-debug.apk"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary text-sm"
>
                <Download className="h-4 w-4" />
                Download APK
              </a>
              <a href="#gallery" className="btn-secondary text-sm">
                <ExternalLink className="h-4 w-4" />
                Screenshots
              </a>
            </div>
          </div>
          </motion.div>

          {/* Stats */}
          <div className="relative mb-20 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {vchatProject.stats.map((stat, i) => (
  <motion.div
    key={stat.label}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.08 }}
    whileHover={{
      y: -6,
      scale: 1.02,
    }}
    className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
  >
    {/* Ambient glow */}
    <motion.div
      animate={{
        opacity: [0.15, 0.35, 0.15],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.10),transparent_45%)]"
    />

    <div className="relative z-10">
      <StatCard
        value={stat.value}
        label={stat.label}
        detail={stat.detail}
        delay={i * 0.08}
      />
    </div>
  </motion.div>
))}
          </div>

          {/* Tech badges */}
          <div className="animate-in-view relative mb-20 overflow-hidden rounded-[32px] border border-white/[0.06] bg-white/[0.02] p-6 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
            
            {/* Ambient tech glow */}
<motion.div
  animate={{
    opacity: [0.18, 0.4, 0.18],
    scale: [1, 1.06, 1],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.12),transparent_35%)]"
/>

            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
              Tech Stack
            </p>
            <div className="relative z-10 flex flex-wrap gap-3">
              {vchatProject.techBadges.map((badge, i) => (
                <TechBadge key={badge} label={badge} variant="accent" delay={i * 0.04} />
              ))}
            </div>
          </div>

          {/* Phone mockup + overview */}
          <div className="mb-20 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-in-view perspective-3d relative mx-auto w-full max-w-sm lg:mx-0">
              {/* Device ambient glow */}
<motion.div
  animate={{
    opacity: [0.2, 0.45, 0.2],
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.16),transparent_65%)] blur-3xl"
/>
              <motion.div
                className="preserve-3d relative"
                whileHover={{
  rotateY: -8,
  rotateX: 6,
  y: -8,
  scale: 1.02,
}}
                transition={{ type: 'spring', stiffness: 180, damping: 20 }}
              >
                <div className="glow-border relative rounded-[2.75rem] border-[3px] border-white/10 bg-gradient-to-b from-surface to-abyss p-3 shadow-glow-lg">
                  <div className="absolute left-1/2 top-5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
                  <div className="overflow-hidden rounded-[2.25rem] bg-abyss">
                    <div className="flex items-center justify-between border-b border-white/5 bg-surface/90 px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet" />
                        <div>
                          <div className="text-sm font-semibold">Dev Team</div>
                          <div className="flex items-center gap-1.5 text-[10px] text-neon-cyan">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-cyan" />
                            typing...
                          </div>
                        </div>
                      </div>
                      <MoreHorizontal className="h-5 w-5 text-white/30" />
                    </div>

                    <div className="flex items-center gap-2 border-b border-neon-cyan/10 bg-neon-cyan/5 px-4 py-2">
                      <Pin className="h-3 w-3 text-neon-cyan" />
                      <span className="text-[10px] text-white/50">Pinned: Ship VChat v2 tonight</span>
                    </div>

                    <div className="space-y-3 p-4">
                      <div className="max-w-[80%] rounded-2xl rounded-bl-md border border-white/5 bg-white/[0.07] px-3.5 py-2.5">
                        <p className="text-xs text-white/75">Firestore listener attached ✓</p>
                        <p className="mt-0.5 text-[9px] text-white/30">10:42 AM</p>
                      </div>
                      <div className="ml-auto max-w-[80%]">
                        <div className="mb-1 flex items-center gap-1 text-[9px] text-neon-violet/80">
                          <Reply className="h-2.5 w-2.5" />
                          Reply to pinned
                        </div>
                        <div className="rounded-2xl rounded-br-md bg-gradient-to-r from-neon-cyan/25 to-neon-violet/25 px-3.5 py-2.5">
                          <p className="text-xs">Group chat + friend system live</p>
                          <p className="mt-0.5 text-[9px] text-white/40">10:43 AM · Read</p>
                        </div>
                      </div>
                      <div className="max-w-[80%] rounded-2xl rounded-bl-md border border-white/5 bg-white/[0.07] px-3.5 py-2.5">
                        <p className="text-xs text-white/75">ChatManager handling reopen lifecycle</p>
                      </div>
                    </div>

                    <div className="border-t border-white/5 p-3">
                      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
                        <span className="text-xs text-white/25">Message...</span>
                        <span className="ml-auto font-mono text-[9px] text-neon-cyan/60">
                          realtime
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="animate-in-view space-y-6">
              <div className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-white/[0.03] p-7 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                <h4 className="relative z-10 font-display text-lg font-semibold">
  What makes VChat different
</h4>

<p className="relative z-10 mt-3 text-sm leading-relaxed text-white/50">
                  Most student projects stop at a basic chat screen. VChat implements the full
                  messaging lifecycle — friends, groups, replies, forwards, pins, typing state,
                  and a manager/helper architecture that keeps Firestore logic out of the UI layer.
                </p>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-white/50">
                  Every screen is built to handle delete and reopen without duplicate listeners or
                  stale adapters — the kind of stabilization work production apps require.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-white/[0.03] p-7 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-violet">
                  Manager / Helper Modules
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {vchatManagers.map((manager) => (
                    <span
                      key={manager}
                      className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-white/55"
                    >
                      {manager}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature grid */}
          <div className="relative mb-24 overflow-hidden rounded-[36px] border border-white/[0.05] bg-white/[0.02] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:p-8 lg:p-10">
  {/* Ambient glow */}
  <motion.div
    animate={{
      opacity: [0.18, 0.4, 0.18],
      scale: [1, 1.04, 1],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.12),transparent_38%)]"
  />

  {/* Section heading */}
  <div className="relative z-10 mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-neon-cyan/70">
        Platform Capabilities
      </p>

      <h3 className="animate-in-view font-display text-3xl font-black tracking-tight">
        <span className="bg-[linear-gradient(90deg,#00F0FF,#8B5CF6,#00F0FF)] bg-[length:200%_200%] bg-clip-text text-transparent">
          Core Features
        </span>
      </h3>
    </div>

    <p className="max-w-md text-sm leading-relaxed text-white/45">
      Modular realtime infrastructure engineered for scalable messaging,
      intelligent interaction flows, and production-style application behavior.
    </p>
  </div>

  {/* Feature cards */}
  <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {vchatFeatures.map((feature, i) => (
      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.06 }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      >
        {/* Card glow */}
        <motion.div
          animate={{
            opacity: [0.12, 0.3, 0.12],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.10),transparent_42%)]"
        />

        <div className="relative z-10">
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            highlight={feature.highlight}
            delay={i * 0.05}
          />
        </div>
      </motion.div>
    ))}
  </div>
</div>

          {/* Architecture */}
                    <div className="relative overflow-hidden rounded-[36px] border border-white/[0.05] bg-white/[0.02] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:p-8 lg:p-10">
  {/* Ambient glow */}
  <motion.div
    animate={{
      opacity: [0.16, 0.38, 0.16],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_38%)]"
  />

  <div className="relative z-10">
    <h3 className="animate-in-view mb-3 font-display text-3xl font-black tracking-tight">
              <span className="text-gradient">Architecture Highlights</span>
            </h3>
            <p className="animate-in-view mb-10 max-w-2xl text-sm text-white/45">
              Firebase-backed layers designed for maintainability — managers own business logic,
              helpers own utilities, and listeners stay lifecycle-safe.
            </p>

            <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {vchatArchitecture.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="animate-in-view relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-white/[0.03] p-6 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                >

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
                  <div className="flex items-center justify-between">
                    <item.icon className="h-6 w-6 text-neon-violet" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-neon-cyan/70">
                      {item.layer}
                    </span>
                  </div>
                  <h4 className="mt-4 font-display text-base font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/45">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>
    )
  }
