import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  highlight?: string
  delay?: number
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  highlight,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      className="group glow-border glass-card relative overflow-hidden rounded-2xl p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-neon-cyan/5 blur-2xl transition-all duration-500 group-hover:bg-neon-cyan/10" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neon-cyan/20 bg-neon-cyan/10 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5 text-neon-cyan" />
        </div>
        {highlight && (
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-white/40">
            {highlight}
          </span>
        )}
      </div>

      <h4 className="relative mt-4 font-display text-base font-semibold text-white/95">
        {title}
      </h4>
      <p className="relative mt-2 text-sm leading-relaxed text-white/45">{description}</p>
    </motion.div>
  )
}
