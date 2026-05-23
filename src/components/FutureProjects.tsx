import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { developer, futureProjects } from '../data/content'
import { SectionHeader } from './SectionHeader'

export function FutureProjects() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="future" ref={ref} className="section-padding relative bg-abyss/50">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-neon-violet/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Roadmap"
          title="What's Next"
          subtitle={`The ${developer.brand} pipeline — extensions of VChat and reusable Firebase patterns I'm actively designing.`}
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {futureProjects.map((project, i) => (
            <motion.article
              key={project.title}
              className="animate-in-view glow-border glass-card group relative overflow-hidden rounded-3xl p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-neon-cyan/5 blur-2xl transition-all duration-500 group-hover:bg-neon-cyan/10" />

              <div className="relative flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all group-hover:border-neon-cyan/25 group-hover:bg-neon-cyan/10">
                  <project.icon className="h-7 w-7 text-neon-violet transition-colors group-hover:text-neon-cyan" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                    <span className="rounded-full border border-neon-magenta/30 bg-neon-magenta/10 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neon-magenta">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/45">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
