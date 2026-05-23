import { motion } from 'framer-motion'

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  size: 2 + (i % 3),
  delay: (i % 8) * 0.5,
  duration: 4 + (i % 5),
}))

export function Scene3D() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="mesh-bg absolute inset-0" />
      <div className="grid-pattern absolute inset-0 opacity-30" />

      {/* Horizon grid */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45%] opacity-20"
        style={{
          background:
            'linear-gradient(to top, rgba(0,240,255,0.08), transparent 60%), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px)',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom center',
        }}
      />

      <motion.div
        className="absolute -left-40 top-[10%] h-[28rem] w-[28rem] rounded-full bg-neon-cyan/10 blur-[140px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-32 top-[20%] h-96 w-96 rounded-full bg-neon-violet/12 blur-[120px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.35, 0.15, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-neon-cyan/40"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Orbital rings — desktop */}
      <div className="perspective-3d absolute right-[2%] top-[12%] hidden xl:block">
        <motion.div
          className="preserve-3d relative h-80 w-80"
          animate={{ rotateY: [0, 360], rotateX: [12, 12] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {[0, 60, 120].map((deg) => (
            <div
              key={deg}
              className="absolute inset-0 rounded-full border border-neon-cyan/15"
              style={{
                transform: `rotateY(${deg}deg) rotateX(70deg)`,
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.08)',
              }}
            />
          ))}
          <motion.div
            className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-neon-cyan/80 via-neon-violet/60 to-neon-magenta/50 shadow-glow-lg"
            animate={{ rotateZ: [0, -360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ transform: 'translateZ(60px)' }}
          />
          <motion.div
            className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-neon-cyan shadow-[0_0_12px_#00f0ff]"
            style={{ transform: 'translateZ(100px) translateY(-20px)' }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Secondary floating cube */}
      <motion.div
        className="absolute left-[8%] top-[35%] hidden h-16 w-16 rounded-xl border border-neon-violet/20 bg-neon-violet/10 backdrop-blur-sm lg:block"
        animate={{ rotateY: [0, 180, 360], y: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  )
}
