import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const smoothX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
  })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10)
      mouseY.set(e.clientY - 10)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[99999] hidden h-5 w-5 rounded-full border border-neon-cyan/60 bg-neon-cyan/10 backdrop-blur-md lg:block"
      />

      {/* Glow */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[99998] hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/10 blur-2xl lg:block"
      />
    </>
  )
}