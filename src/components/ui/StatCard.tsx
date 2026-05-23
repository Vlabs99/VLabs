import { motion } from 'framer-motion'

interface StatCardProps {
  value: string
  label: string
  detail?: string
  delay?: number
}

export function StatCard({ value, label, detail, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      className="glow-border glass-card group rounded-2xl p-5 sm:p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <div className="font-display text-2xl font-bold tracking-tight text-neon-cyan sm:text-3xl">
        {value}
      </div>
      <div className="mt-1.5 text-sm font-medium text-white/80">{label}</div>
      {detail && (
        <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-white/35">
          {detail}
        </div>
      )}
    </motion.div>
  )
}
