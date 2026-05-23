import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { developer, skills } from '../data/content'
import { SectionHeader } from './SectionHeader'

export function Skills() {
  const ref = useScrollReveal<HTMLElement>()
  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <section id="skills" ref={ref} className="section-padding relative bg-abyss/60">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Skills"
          title="Technical Stack"
          subtitle={`Hands-on skills behind ${developer.brand} — shaped by building VChat and production-style Android architecture, not course exercises alone.`}
          align="center"
        />

        <div className="animate-in-view mb-14 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-neon-violet/25 bg-neon-violet/10 px-5 py-2 font-mono text-xs text-neon-violet"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="animate-in-view glow-border glass-card rounded-2xl p-6 sm:p-7"
              style={{ transitionDelay: `${i * 80}ms` }}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                  <span className="font-medium text-white/90">{skill.name}</span>
                  {skill.note && (
                    <p className="mt-1 text-xs text-white/35">{skill.note}</p>
                  )}
                </div>
                <span className="shrink-0 font-mono text-sm font-medium text-neon-cyan">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-wider text-white/30">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
