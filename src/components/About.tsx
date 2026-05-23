import { motion } from 'framer-motion'
import { Zap, Layers, Radio } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { developer, expertiseAreas } from '../data/content'
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

        <div className="space-y-8">
          {/* Personal image */}
          <div className="animate-in-view glow-border overflow-hidden rounded-3xl glass-card p-4">
            <img
              src="/VLabs/images/developer-photo.jpeg"
              alt="Developer portrait"
              className="mx-auto max-h-[700px] w-full rounded-2xl object-contain bg-black"
            />
          </div>

          {/* Bio */}
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

          {/* Approach cards */}
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

                  <h4 className="font-display text-sm font-semibold">
                    {item.title}
                  </h4>

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
                  <h3 className="font-display text-lg font-semibold">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/45">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}