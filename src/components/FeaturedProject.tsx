import { motion } from 'framer-motion'
import { Smartphone, ArrowRight, Download } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { vchatProject, APK_DOWNLOAD_URL } from '../data/content'
import { SectionHeader } from './SectionHeader'
import { TechBadge } from './ui/TechBadge'

export function FeaturedProject() {
  const ref = useScrollReveal<HTMLElement>()
  const navigate = useNavigate()

  return (
    <section
      id="vchat"
      ref={ref}
      className="section-divider section-padding relative overflow-hidden border-y border-white/[0.04]"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/[0.05] via-transparent to-neon-violet/[0.05]" />

      {/* Cyber grid */}
      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Ambient glow center */}
      <motion.div
        animate={{
          opacity: [0.25, 0.5, 0.25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-1/2 top-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-neon-cyan/5 blur-[160px]"
      />

      {/* Secondary violet glow */}
      <motion.div
        animate={{
          opacity: [0.18, 0.4, 0.18],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-neon-violet/5 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Featured Project"
          title={vchatProject.name}
          subtitle={vchatProject.summary}
        />

        {/* Project header bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          onClick={() => navigate('/projects/vchat')}
          className="animate-in-view glow-border relative mb-12 overflow-hidden rounded-[32px] border border-white/[0.06] bg-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8 cursor-pointer group"
        >
          {/* Ambient glow */}
          <motion.div
            animate={{
              opacity: [0.2, 0.45, 0.2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.12),transparent_35%)]"
          />

          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
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
            <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
              <Link
                to="/projects/vchat"
                className="btn-primary text-sm"
              >
                View Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                <Download className="mr-1.5 h-4 w-4" />
                Download APK
              </a>
            </div>
          </div>
        </motion.div>

        {/* Tech badges */}
        <div className="animate-in-view relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-white/[0.02] p-6 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
          {/* Ambient tech glow */}
          <motion.div
            animate={{
              opacity: [0.18, 0.4, 0.18],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.12),transparent_35%)]"
          />

          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
            Tech Stack
          </p>
          <div className="relative z-10 flex flex-wrap gap-3">
            {vchatProject.techBadges.map((badge, i) => (
              <TechBadge key={badge} label={badge} variant="accent" delay={i * 0.04} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
