import { motion } from 'framer-motion'
import { ArrowDown, Download, GraduationCap, Code2, Sparkles } from 'lucide-react'
import { developer, heroStats, APK_DOWNLOAD_URL } from '../data/content'
import { TechBadge } from './ui/TechBadge'
import { SocialButtons } from './ui/SocialButtons'
import { ProfileAvatar } from './ui/ProfileAvatar'
import { Scene3D } from './Scene3D'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <Scene3D />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-4 py-2 backdrop-blur-md"
            >
              <GraduationCap className="h-4 w-4 text-neon-cyan" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neon-cyan/90">
                {developer.education}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="font-mono text-sm text-white/40"
            >
              {developer.role}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-3 font-display text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block text-white">{developer.shortName}</span>
              <span className="text-gradient mt-1 block">Chudasama</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-4 flex items-center justify-center gap-3 lg:justify-start"
            >
              <Sparkles className="h-4 w-4 text-neon-violet" />
              <span className="font-display text-xl font-bold text-gradient sm:text-2xl">
                {developer.brand}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg lg:mx-0"
            >
              {developer.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {developer.focusAreas.map((area, i) => (
                <TechBadge key={area} label={area} variant="outline" delay={0.7 + i * 0.05} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a href="#vchat" className="btn-primary">
                <Code2 className="h-5 w-5" />
                View VChat Project
              </a>
              <a href={APK_DOWNLOAD_URL} download className="btn-secondary">
                <Download className="h-5 w-5" />
                Download VChat APK
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="mt-8 flex flex-col items-center gap-3 lg:items-start"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                Connect
              </p>
              <SocialButtons variant="icon" />
            </motion.div>
          </div>

          {/* Profile + stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 flex flex-col items-center lg:order-2"
          >
            <ProfileAvatar size="hero" />

            <div className="glow-border mt-10 w-full max-w-md glass-card rounded-2xl p-6 sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
                <div className="text-left">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-cyan">
                    {developer.brand}
                  </p>
                  <p className="mt-1 font-display text-base font-bold">{developer.name}</p>
                </div>
                <p className="text-right text-xs text-white/40">{developer.location}</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-2 py-3.5 text-center transition-colors hover:border-neon-cyan/20"
                  >
                    <div className="font-display text-lg font-bold text-neon-cyan sm:text-xl">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="mt-1 text-[9px] leading-snug text-white/40 sm:text-[10px]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-center text-xs leading-relaxed text-white/35">
                Android · Web · AI-assisted engineering
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/30 transition-colors hover:text-neon-cyan"
        aria-label="Scroll to about"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  )
}
