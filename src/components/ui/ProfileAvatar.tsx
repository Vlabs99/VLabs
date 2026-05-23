import { motion } from 'framer-motion'
import { developer } from '../../data/content'

type ProfileSize = 'lg' | 'md' | 'compact' | 'about'

const sizeMap: Record<ProfileSize, { outer: string; ring: string; img: string }> = {
  lg: {
    outer: 'h-80 w-80',
    ring: 'inset-[-6px]',
    img: 'inset-[5px]',
  },
  md: {
    outer: 'h-64 w-64',
    ring: 'inset-[-5px]',
    img: 'inset-[4px]',
  },
  about: {
    outer: 'h-72 w-72',
    ring: 'inset-[-6px]',
    img: 'inset-[5px]',
  },
  compact: {
    outer: 'h-24 w-24 sm:h-28 sm:w-28',
    ring: 'inset-[-3px]',
    img: 'inset-[2px]',
  },
}

interface ProfileAvatarProps {
  size?: ProfileSize
  className?: string
}

export function ProfileAvatar({ size = 'lg', className = '' }: ProfileAvatarProps) {
  const dims = sizeMap[size]

  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <motion.div
        className={`profile-avatar-wrap group relative ${dims.outer}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Subtle rotating gradient ring */}
        <motion.div
          className={`profile-glow-ring absolute rounded-full border border-gradient-to-r from-neon-cyan/40 via-neon-violet/20 to-neon-cyan/40 ${dims.ring}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          aria-hidden
        />

        {/* Minimal glow effect */}
        <motion.div
          className="profile-glow-pulse absolute inset-0 rounded-full"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            boxShadow: [
              'inset 0 0 40px rgba(0, 240, 255, 0.1)',
              'inset 0 0 60px rgba(0, 240, 255, 0.15)',
              'inset 0 0 40px rgba(0, 240, 255, 0.1)',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden
        />

        {/* Outer glow shadow */}
        <div className="profile-glass-frame absolute inset-0 rounded-full shadow-lg" style={{
          boxShadow: '0 0 50px rgba(0, 240, 255, 0.15), 0 0 100px rgba(139, 92, 246, 0.08)',
        }} />

        {/* Photo container */}
        <div
          className={`profile-image-ring absolute overflow-hidden rounded-full border border-white/10 ${dims.img}`}
        >
          <motion.img
            src={developer.profileImage}
            alt={`${developer.name} — developer portrait`}
            className="profile-photo block h-full w-full object-contain bg-black"
            width={400}
            height={400}
            decoding="async"
            loading="eager"
            draggable={false}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onError={(e) => {
              const img = e.currentTarget
              const fallback = developer.profileImageFallback
              if (!img.src.includes('profile-placeholder')) {
                img.src = fallback
              }
            }}
          />
          {/* Subtle gradient overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-void/30" />
        </div>
      </motion.div>
    </motion.div>
  )
}

