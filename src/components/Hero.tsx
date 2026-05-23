import { motion } from 'framer-motion'
import { ArrowDown, Download, Code2 } from 'lucide-react'
import { developer } from '../data/content'
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
        {/* Desktop: Two-column layout | Mobile: Single column */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left column: Bio and content */}
          <div className="flex flex-col">
            {/* Intro label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-4 font-mono text-xs uppercase tracking-widest text-neon-cyan/80"
            >
              {developer.education} • {developer.role}
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-4xl font-black leading-none sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block text-white">{developer.shortName}</span>
              <span className="text-gradient block mt-2">Chudasama</span>
            </motion.h1>

            {/* Brand tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-6 font-display text-lg font-semibold text-white/90"
            >
              {developer.brand} — {developer.brandTagline}
            </motion.p>

            {/* Main tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg max-w-md"
            >
              {developer.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#vchat"
                className="btn-primary inline-flex items-center justify-center"
              >
                <Code2 className="h-5 w-5" />
                Explore VChat
              </a>
              <a
  href="https://github.com/Vlabs99/Vchat/releases/download/v1.0/app-debug.apk"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-secondary inline-flex items-center justify-center"
>
                <Download className="h-5 w-5" />
                Download APK
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="mt-10 flex items-center gap-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-white/40">
                Follow
              </p>
              <SocialButtons variant="icon" />
            </motion.div>
          </div>

          {/* Right column: Profile Image (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="hidden lg:flex justify-center"
          >
            <ProfileAvatar size="lg" />
          </motion.div>
        </div>

        {/* Mobile profile image - shown below content on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex justify-center lg:hidden"
        >
          <ProfileAvatar size="md" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
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

