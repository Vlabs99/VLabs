import { motion } from 'framer-motion'
import { developer } from '../../data/content'

type ProfileSize = 'hero' | 'about' | 'compact'

const sizeMap: Record<ProfileSize, { outer: string; ring: string; img: string }> = {
  hero: {
    outer: 'h-[228px] w-[228px] sm:h-[272px] sm:w-[272px]',
    ring: 'inset-[-7px] sm:inset-[-9px]',
    img: 'inset-[6px] sm:inset-[7px]',
  },
  about: {
    outer: 'h-[208px] w-[208px] sm:h-[248px] sm:w-[248px]',
    ring: 'inset-[-7px]',
    img: 'inset-[6px]',
  },
  compact: {
    outer: 'h-[88px] w-[88px]',
    ring: 'inset-[-4px]',
    img: 'inset-[3px]',
  },
}

interface ProfileAvatarProps {
  size?: ProfileSize
  className?: string
}

export function ProfileAvatar({ size = 'hero', className = '' }: ProfileAvatarProps) {
  const dims = sizeMap[size]

  return (
    <motion.div
      className={`relative flex flex-col items-center ${className}`}
      whileHover="hover"
      initial="rest"
    >
      <motion.div
        className={`profile-avatar-wrap group relative ${dims.outer}`}
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.03 },
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      >
        {/* Rotating glow ring */}
        <motion.div
          className={`profile-glow-ring absolute rounded-full ${dims.ring}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          aria-hidden
        />

        {/* Hover-intensified outer glow */}
        <motion.div
          className="profile-glow-pulse absolute inset-0 rounded-full"
          variants={{
            rest: { opacity: 0.4, scale: 1 },
            hover: { opacity: 0.85, scale: 1.06 },
          }}
          animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.03, 1] }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
          aria-hidden
        />

        <motion.div
          className="profile-glass-frame absolute inset-0 rounded-full"
          variants={{
            rest: { boxShadow: '0 0 40px rgba(0, 240, 255, 0.12)' },
            hover: { boxShadow: '0 0 56px rgba(0, 240, 255, 0.28), 0 0 80px rgba(139, 92, 246, 0.15)' },
          }}
        />

        {/* Photo — centered on upper face region to avoid harsh crops */}
        <div
          className={`profile-image-ring absolute overflow-hidden rounded-full ${dims.img}`}
        >
          <motion.img
            src={developer.profileImage}
            alt={`${developer.name} — developer portrait`}
            className="profile-photo block h-full w-full min-h-full min-w-full"
            width={400}
            height={400}
            decoding="async"
            loading="eager"
            draggable={false}
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.04 },
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            onError={(e) => {
              const img = e.currentTarget
              const fallback = developer.profileImageFallback
              if (!img.src.includes('profile-placeholder')) {
                img.src = fallback
              }
            }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-void/50 via-void/5 to-neon-cyan/[0.06]" />
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
        </div>

        <span className="absolute bottom-2 right-2 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-void bg-void sm:bottom-3 sm:right-3 sm:h-5 sm:w-5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-neon-cyan sm:h-2.5 sm:w-2.5" />
        </span>
      </motion.div>
    </motion.div>
  )
}
