import { motion } from 'framer-motion'

interface TechBadgeProps {
  label: string
  variant?: 'default' | 'accent' | 'outline'
  delay?: number
}

export function TechBadge({ label, variant = 'default', delay = 0 }: TechBadgeProps) {
  const styles = {
    default: 'border-white/10 bg-white/[0.04] text-white/70',
    accent: 'border-neon-cyan/25 bg-neon-cyan/10 text-neon-cyan',
    outline: 'border-neon-violet/20 bg-transparent text-neon-violet/90',
  }

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className={`inline-flex items-center rounded-lg border px-3 py-1.5 font-mono text-[11px] font-medium tracking-wide ${styles[variant]}`}
    >
      {label}
    </motion.span>
  )
}
