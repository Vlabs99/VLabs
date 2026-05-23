import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { developer, techStack, vchatProject } from '../data/content'
import { TechBadge } from './ui/TechBadge'
import { SectionHeader } from './SectionHeader'

const stackIcons: Record<string, string> = {
  Java: '☕',
  'Android Studio': '🤖',
  'Firebase Firestore': '🔥',
  'Firebase Auth': '🔐',
  'Firebase Storage': '☁️',
  'Material Design 3': '🎨',
  Gradle: '⚙️',
  Git: '📦',
}

export function TechStack() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="stack" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-neon-violet/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Tech Stack"
          title="Tools & Platforms"
          subtitle={`Production technologies behind ${developer.brand} projects — centered on the VChat Firebase + Android stack.`}
          align="center"
        />

        <div className="animate-in-view mb-14 flex flex-wrap justify-center gap-2">
          {vchatProject.techBadges.map((badge, i) => (
            <TechBadge key={badge} label={badge} variant="accent" delay={i * 0.04} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="animate-in-view glow-border glass-card group flex flex-col items-center rounded-2xl p-6 text-center sm:p-7"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -8 }}
            >
              <span className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-125">
                {stackIcons[tech.name] ?? '⚡'}
              </span>
              <h4 className="text-sm font-semibold text-white/90">{tech.name}</h4>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-neon-cyan/60">
                {tech.category}
              </span>
              <span className="mt-3 rounded-md bg-white/[0.03] px-2 py-1 font-mono text-[9px] text-white/30">
                {tech.usedIn}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
