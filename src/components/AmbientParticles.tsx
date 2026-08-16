import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'

const seedParticles = Array.from({ length: 18 }).map(() => ({
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  duration: Math.random() * 12 + 12,
  delay: Math.random() * 8,
}))

export const AmbientParticles = memo(function AmbientParticles() {
  const isMobile = useIsMobile()
  const particles = useMemo(() => isMobile ? [] : seedParticles, [isMobile])

  if (isMobile) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: [0, 0.18, 0],
            y: [-20, -120],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
          }}
          className="absolute bottom-[-40px] rounded-full bg-neon-cyan blur-[1px]"
        />
      ))}
    </div>
  )
})