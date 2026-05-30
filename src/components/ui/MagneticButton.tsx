import { motion } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  target?: string
  rel?: string
}

export function MagneticButton({
  children,
  className = '',
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const element = ref.current

    if (!element) return

    const rect = element.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    element.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0px, 0px)'
    }
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 12,
      }}
      className={`transition-transform duration-200 ${className}`}
    >
      {children}
    </motion.a>
  )
}