import { motion } from 'framer-motion'
import { developer, navLinks } from '../data/content'
import { SocialButtons } from './ui/SocialButtons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] bg-gradient-to-b from-abyss to-void pt-16 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          {/* VLabs branding */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.a
              href="#hero"
              className="group flex items-center gap-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-magenta font-display text-lg font-black shadow-glow-lg transition-transform group-hover:scale-105">
                V
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-wide text-gradient">
                  {developer.brand}
                </span>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                  {developer.brandTagline}
                </p>
              </div>
            </motion.a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/40">
              Engineered by{' '}
              <span className="text-white/70">{developer.name}</span> — building
              production-grade Android & realtime systems.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col items-center lg:items-center">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
              Navigate
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-footer-link text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Social */}
          <div className="flex flex-col items-center lg:items-end">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
              Connect
            </p>
            <SocialButtons variant="footer" />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="font-mono text-xs text-white/30">
            © {year} {developer.brand} · {developer.name}
          </p>
          <p className="font-mono text-[10px] text-white/20">
            React · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
