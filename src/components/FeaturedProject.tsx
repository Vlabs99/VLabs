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
      <section id="vchat" ref={ref} className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/[0.04] via-transparent to-neon-violet/[0.04]" />
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neon-cyan/5 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            label="Featured Project"
            title={vchatProject.name}
            subtitle={vchatProject.summary}
          />

          {/* Project header bar */}
          <div className="animate-in-view glow-border mb-12 flex flex-col gap-6 rounded-3xl glass-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
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

          {/* Stats */}
          <div className="mb-16 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {vchatProject.stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                detail={stat.detail}
                delay={i * 0.08}
              />
            ))}
          </div>

          {/* Tech badges */}
          <div className="animate-in-view mb-16">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {vchatProject.techBadges.map((badge, i) => (
                <TechBadge key={badge} label={badge} variant="accent" delay={i * 0.04} />
              ))}
            </div>
          </div>

          {/* Phone mockup + overview */}
          <div className="mb-20 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-in-view perspective-3d mx-auto w-full max-w-sm lg:mx-0">
              <motion.div
                className="preserve-3d relative"
                whileHover={{ rotateY: -6, rotateX: 4 }}
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
              <div className="glass-card rounded-2xl p-7">
                <h4 className="font-display text-lg font-semibold">What makes VChat different</h4>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  Most student projects stop at a basic chat screen. VChat implements the full
                  messaging lifecycle — friends, groups, replies, forwards, pins, typing state,
                  and a manager/helper architecture that keeps Firestore logic out of the UI layer.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  Every screen is built to handle delete and reopen without duplicate listeners or
                  stale adapters — the kind of stabilization work production apps require.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-7">
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
          <div className="mb-20">
            <h3 className="animate-in-view mb-8 font-display text-2xl font-bold">
              <span className="text-gradient">Core Features</span>
            </h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {vchatFeatures.map((feature, i) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  highlight={feature.highlight}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h3 className="animate-in-view mb-3 font-display text-2xl font-bold">
              <span className="text-gradient">Architecture Highlights</span>
            </h3>
            <p className="animate-in-view mb-10 max-w-2xl text-sm text-white/45">
              Firebase-backed layers designed for maintainability — managers own business logic,
              helpers own utilities, and listeners stay lifecycle-safe.
            </p>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {vchatArchitecture.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="animate-in-view glow-border glass-card relative overflow-hidden rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
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
      </section>
    )
  }
