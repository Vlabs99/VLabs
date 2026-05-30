import { motion } from 'framer-motion'

const particles = Array.from({ length: 18 })

export function AmbientParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((_, index) => {
        const size = Math.random() * 4 + 2
        const left = Math.random() * 100
        const duration = Math.random() * 12 + 12
        const delay = Math.random() * 8

        return (
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
              duration,
              repeat: Infinity,
              delay,
              ease: 'linear',
            }}
            style={{
              left: `${left}%`,
              width: size,
              height: size,
            }}
            className="absolute bottom-[-40px] rounded-full bg-neon-cyan blur-[1px]"
          />
        )
      })}
    </div>
  )
}