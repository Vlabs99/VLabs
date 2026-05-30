import { motion } from 'framer-motion'
import {
  Github,
  Cpu,
  Activity,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import { developer, navLinks } from '../data/content'
import { SocialButtons } from './ui/SocialButtons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-abyss to-void pt-20 pb-10">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.08),transparent_30%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08),transparent_30%)]" />

      {/* Cyber grid */}
      <div className="absolute inset-0 opacity-[0.03]">
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

      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent" />

      {/* Floating glow */}
      <motion.div
        animate={{
          opacity: [0.18, 0.4, 0.18],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-neon-cyan/5 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer panel */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/[0.06] bg-white/[0.03] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-10">
          {/* Panel glow */}
          <motion.div
            animate={{
              opacity: [0.12, 0.3, 0.12],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.10),transparent_38%)]"
          />

          <div className="relative z-10 grid gap-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {/* Branding */}
            <div>
              <motion.a
                href="#hero"
                className="group inline-flex items-center gap-5"
                whileHover={{ scale: 1.02 }}
              >
                {/* Logo */}
                <motion.div
                  className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neon-cyan/90 to-neon-violet/90 shadow-[0_0_35px_rgba(0,240,255,0.28)]"
                  whileHover={{
                    rotate: 5,
                    scale: 1.05,
                  }}
                >
                  {/* Glow */}
                  <motion.div
                    animate={{
                      opacity: [0.35, 0.7, 0.35],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0 bg-white/20 blur-xl"
                  />

                  <span className="relative z-10 font-display text-xl font-black tracking-widest text-white">
                    V
                  </span>
                </motion.div>

                <div>
                  <span className="font-display text-3xl font-black tracking-[0.16em] text-gradient">
                    VLABS
                  </span>

                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
                    AI Systems • Engineering • Applications
                  </p>
                </div>
              </motion.a>

              <p className="mt-7 max-w-md text-sm leading-relaxed text-white/45">
                VLabs is an independent engineering portfolio focused on AI-assisted applications,
                realtime infrastructure, modern interfaces, cross-platform software, and scalable
                digital systems.
              </p>

              {/* System status */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 rounded-2xl border border-neon-cyan/15 bg-neon-cyan/10 px-4 py-3 backdrop-blur-md">
                  <motion.span
                    animate={{
                      scale: [1, 1.7, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                    className="absolute h-2 w-2 rounded-full bg-neon-cyan"
                  />

                  <span className="relative h-2 w-2 rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(0,240,255,0.8)]" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-neon-cyan">
                    Systems Operational
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
                  <Cpu className="h-4 w-4 text-neon-violet" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                    AI Enhanced Workflow
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                Navigation
              </p>

              <div className="space-y-3">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="group flex items-center justify-between rounded-2xl border border-transparent bg-white/[0.02] px-4 py-3 text-sm text-white/55 transition-all duration-300 hover:border-neon-cyan/15 hover:bg-neon-cyan/[0.04] hover:text-neon-cyan"
                  >
                    {link.label}

                    <ArrowUpRight className="h-4 w-4 opacity-40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                Connect
              </p>

              <div className="space-y-4">
                <div className="rounded-[28px] border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-neon-cyan" />

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Open for Collaborations
                      </p>

                      <p className="mt-1 text-xs leading-relaxed text-white/45">
                        AI systems, applications, modern interfaces, and realtime products.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
                        Engineering Links
                      </p>

                      <p className="mt-2 text-sm text-white/55">
                        Explore repositories, systems, and products.
                      </p>
                    </div>

                    <Github className="h-5 w-5 text-neon-violet" />
                  </div>

                  <div className="mt-5">
                    <SocialButtons variant="footer" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="relative z-10 mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-8 sm:flex-row">
            <div className="flex items-center gap-3">
              <Activity className="h-4 w-4 text-neon-cyan" />

              <p className="font-mono text-xs text-white/35">
                © {year} VLabs · Engineered by {developer.name}
              </p>
            </div>

            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/20">
              React • Tailwind • Framer Motion • AI Assisted Engineering
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}