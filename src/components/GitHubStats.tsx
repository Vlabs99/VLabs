import { motion } from 'framer-motion'
import { Github, GitBranch, Star, Activity } from 'lucide-react'

const stats = [
  {
    icon: Github,
    label: 'Repositories',
    value: '12+',
  },
  {
    icon: GitBranch,
    label: 'Active Projects',
    value: '5',
  },
  {
    icon: Star,
    label: 'Production Builds',
    value: '20+',
  },
  {
    icon: Activity,
    label: 'Realtime Systems',
    value: 'Online',
  },
]

export function GitHubStats() {
  return (
    <section className="section-divider section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
            Engineering Metrics
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Live Development Ecosystem
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/55">
            Building intelligent applications, realtime infrastructure,
            automation systems, and scalable digital products through modern
            engineering workflows.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="hover-light group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.03] p-7 backdrop-blur-2xl"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,240,255,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neon-cyan/20 bg-neon-cyan/10">
                    <Icon className="h-6 w-6 text-neon-cyan" />
                  </div>

                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-white/35">
                    {stat.label}
                  </p>

                  <h3 className="mt-3 text-4xl font-black tracking-tight text-white">
                    {stat.value}
                  </h3>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}