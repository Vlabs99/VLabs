import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram, ExternalLink } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { socialLinks, type SocialPlatform } from '../../data/content'

const platformConfig: Record<
  SocialPlatform,
  { icon: LucideIcon; accent: string; glow: string }
> = {
  github: {
    icon: Github,
    accent: 'hover:border-white/25 hover:text-white hover:bg-white/10',
    glow: 'group-hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]',
  },
  linkedin: {
    icon: Linkedin,
    accent: 'hover:border-[#0A66C2]/50 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10',
    glow: 'group-hover:shadow-[0_0_28px_rgba(10,102,194,0.25)]',
  },
  email: {
    icon: Mail,
    accent: 'hover:border-neon-cyan/40 hover:text-neon-cyan hover:bg-neon-cyan/10',
    glow: 'group-hover:shadow-glow',
  },
  instagram: {
    icon: Instagram,
    accent: 'hover:border-[#E1306C]/40 hover:text-[#E1306C] hover:bg-[#E1306C]/10',
    glow: 'group-hover:shadow-[0_0_28px_rgba(225,48,108,0.2)]',
  },
}

interface SocialButtonsProps {
  variant?: 'icon' | 'card' | 'footer'
  className?: string
}

export function SocialButtons({ variant = 'card', className = '' }: SocialButtonsProps) {
  if (variant === 'icon') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {socialLinks.map((link, i) => {
          const { icon: Icon, accent, glow } = platformConfig[link.platform]
          return (
            <motion.a
              key={link.platform}
              href={link.href}
              target={link.platform === 'email' ? undefined : '_blank'}
              rel={link.platform === 'email' ? undefined : 'noopener noreferrer'}
              aria-label={link.label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.06 }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`social-icon-btn group ${accent} ${glow}`}
            >
              <Icon className="h-4 w-4" strokeWidth={2} />
            </motion.a>
          )
        })}
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <div className={`flex flex-wrap justify-center gap-3 md:justify-end ${className}`}>
        {socialLinks.map((link) => {
          const { icon: Icon, accent, glow } = platformConfig[link.platform]
          return (
            <a
              key={link.platform}
              href={link.href}
              target={link.platform === 'email' ? undefined : '_blank'}
              rel={link.platform === 'email' ? undefined : 'noopener noreferrer'}
              aria-label={link.label}
              className={`social-icon-btn group h-11 w-11 ${accent} ${glow}`}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
            </a>
          )
        })}
      </div>
    )
  }

  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      {socialLinks.map((link, i) => {
        const { icon: Icon, accent, glow } = platformConfig[link.platform]
        return (
          <motion.a
            key={link.platform}
            href={link.href}
            target={link.platform === 'email' ? undefined : '_blank'}
            rel={link.platform === 'email' ? undefined : 'noopener noreferrer'}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className={`social-card group ${accent} ${glow}`}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:scale-105">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-semibold text-white/90">{link.label}</p>
              <p className="truncate font-mono text-[11px] text-white/40">{link.handle}</p>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-white/20 transition-all group-hover:text-white/50 group-hover:translate-x-0.5" />
          </motion.a>
        )
      })}
    </div>
  )
}
