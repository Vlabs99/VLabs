import { useEffect, useRef } from 'react'

export function useScrollReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')

            // Prevent repeated animations
            obs.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -60px 0px',
      },
    )

    const children = el.querySelectorAll('.animate-in-view')

    children.forEach((child, index) => {
      ;(child as HTMLElement).style.transitionDelay = `${index * 80}ms`
      observer.observe(child)
    })

    if (el.classList.contains('animate-in-view')) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [threshold])

  return ref
}