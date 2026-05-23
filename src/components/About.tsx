import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Zap, Layers, Radio } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { developer, expertiseAreas } from '../data/content'
import { TechBadge } from './ui/TechBadge'
import { ProfileAvatar } from './ui/ProfileAvatar'
import { SectionHeader } from './SectionHeader'

const approachIcons = [Zap, Layers, Radio]

export function About() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-neon-violet/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="About Me"
          title="The Engineer Behind VLabs"
          subtitle="Modern, ambitious, and architecture-driven — building advanced Android apps and websites with AI-assisted workflows and production discipline."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Profile column */}
          <div className="animate-in-view flex flex-col items-center lg:col-span-4">
            <div className="glow-border w-full max-w-sm rounded-3xl glass-card p-8 sm:p-10">
              <div className="flex flex-col items-center">
                <ProfileAvatar size="about" />
                <h3 className="mt-8 text-center font-display text-xl font-bold">
                  {developer.name}
                </h3>
                <p className="mt-2 text-center text-sm leading-relaxed text-neon-cyan/80">
                  {developer.role}
                </p>

                <div className="mt-6 flex w-full flex-col gap-3 border-t border-white/[0.06] pt-6">
                  <span className="flex items-center justify-center gap-2 text-sm text-white/45">
                    <GraduationCap className="h-4 w-4 shrink-0 text-neon-violet" />
                    {developer.education}
                  </span>
                  <span className="flex items-center justify-center gap-2 text-sm text-white/45">
                    <MapPin className="h-4 w-4 shrink-0 text-neon-cyan" />
                    {developer.location}
                  </span>
                </div>

                <div className="mt-6 w-full">
                  <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                    Core Focus
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {developer.focusAreas.map((area, i) => (
                      <TechBadge key={area} label={area} variant="accent" delay={i * 0.05} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio column */}
          <div className="space-y-8 lg:col-span-8">
            <div className="animate-in-view glow-border rounded-3xl glass-card p-8 sm:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon-cyan">
                Personal Statement
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

            {/* Approach pillars */}
            <div className="animate-in-view grid gap-4 sm:grid-cols-3">
              {developer.approach.map((item, i) => {
                const Icon = approachIcons[i] ?? Zap
                return (
                  <motion.div
                    key={item.title}
                    className="glass-card rounded-2xl p-5"
                    whileHover={{ y: -4 }}
                  >
                    <Icon className="mb-3 h-5 w-5 text-neon-cyan" />
                    <h4 className="font-display text-sm font-semibold">{item.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-white/45">
                      {item.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            {/* Expertise */}
            <div className="grid gap-4">
              {expertiseAreas.map((area, i) => (
                <div
                  key={area.title}
                  className="animate-in-view glow-border glass-card group flex gap-5 rounded-2xl p-6 sm:p-7"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-neon-cyan/15 bg-neon-cyan/10 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-glow">
                    <area.icon className="h-7 w-7 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/45">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
