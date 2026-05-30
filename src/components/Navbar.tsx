import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, ArrowUpRight } from 'lucide-react'
import { navLinks } from '../data/content'
import { SocialButtons } from './ui/SocialButtons'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const [showNavbar, setShowNavbar] = useState(true)

  useEffect(() => {
  let lastScrollY = window.scrollY

  const onScroll = () => {
    const currentScroll = window.scrollY

    // Hide on scroll down, show on scroll up
    if (currentScroll <= 80) {
      setShowNavbar(true)
    } else if (currentScroll > lastScrollY) {
      setShowNavbar(false)
    } else {
      setShowNavbar(true)
    }

    lastScrollY = currentScroll

    // Background blur
    setScrolled(currentScroll > 32)

    // Active section detection
    const scrollPosition = currentScroll + 140

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href)

      if (!section) return

      const top = (section as HTMLElement).offsetTop
      const height = (section as HTMLElement).offsetHeight

      if (
        scrollPosition >= top &&
        scrollPosition < top + height
      ) {
        setActiveSection(link.href)
      }
    })
  }

  window.addEventListener('scroll', onScroll, { passive: true })

  return () => {
  window.removeEventListener('scroll', onScroll)
}
}, [])

useEffect(() => {
  document.body.style.overflow = open ? 'hidden' : ''

  return () => {
    document.body.style.overflow = ''
  }
}, [open])

return (
  <>
    {/* Scroll progress indicator */}
    <motion.div
      className="fixed left-0 top-0 z-[999] h-[2px] origin-left bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.8)]"
      style={{
        scaleX:
          typeof window !== 'undefined'
            ? window.scrollY /
              (document.body.scrollHeight - window.innerHeight || 1)
            : 0,
        width: '100%',
      }}
    />

    <motion.header
  initial={{ y: -100, opacity: 0 }}
  animate={{
    y: showNavbar ? 0 : -110,
    opacity: showNavbar ? 1 : 0,
  }}
  transition={{
    duration: 0.35,
    ease: [0.16, 1, 0.3, 1],
  }}
  className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-500 ${
    scrolled
      ? 'border-b border-white/[0.07] bg-void/90 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)]'
      : 'bg-[#050816]'
  }`}
>     
      <nav className="relative mx-auto mt-3 flex max-w-6xl items-center justify-between gap-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] before:opacity-80 sm:px-6 lg:px-8">
  <a href="#hero" className="group flex shrink-0 items-center gap-3">
    <motion.div
      className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neon-cyan/90 to-neon-violet/90 font-display text-sm font-black text-white shadow-[0_0_30px_rgba(0,240,255,0.28)]"
      whileHover={{
        scale: 1.08,
        rotate: 4,
      }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
  {/* Ambient glow */}
  <motion.div
    animate={{
      opacity: [0.35, 0.7, 0.35],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="absolute inset-0 bg-white/20 blur-xl"
  />

  {/* Floating highlight */}
  <motion.div
    animate={{
      x: ['-120%', '120%'],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    }}
    className="absolute inset-y-0 w-1/2 rotate-12 bg-white/20 blur-md"
  />

  <span className="relative z-10 tracking-widest">
    V
  </span>
</motion.div>
          <div className="hidden leading-tight sm:block">
  <span className="font-display text-base font-bold tracking-[0.18em] text-gradient">
    VLABS
  </span>

  <span className="block max-w-[220px] font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
    AI Systems • Applications • Engineering
  </span>
</div>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
  {navLinks.map((link) => (
    <li key={link.href}>
      <a
        href={link.href}
        className={`nav-link rounded-xl px-4 py-2 transition-all duration-300 hover:bg-white/5 hover:text-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.12)] ${
          activeSection === link.href
            ? 'bg-white/5 text-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.18)]'
            : ''
        }`}
      >
        {link.label}
      </a>
    </li>
  ))}
</ul>

        <div className="hidden items-center gap-3 lg:flex">
  <SocialButtons variant="icon" />

  <a href="#contact" className="nav-cta hidden xl:inline-flex">
    Contact
    <ArrowUpRight className="h-3.5 w-3.5" />
  </a>

  <a
    href="/VLabs/resume/Vishwarajsinh-Chudasama-Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white/75 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-[0_0_35px_rgba(0,240,255,0.12)]"
  >
    Resume
  </a>

  <a
    href="https://github.com/Vlabs99/Vchat/releases/download/v1.0/app-debug.apk"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-secondary py-2.5 text-sm"
  >
    <Download className="h-4 w-4" />
    <span className="hidden sm:inline">VChat APK</span>
  </a>
</div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white/80 backdrop-blur-md transition-colors hover:border-neon-cyan/30 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-x-0 bottom-0 top-[88px] z-[999] bg-black lg:hidden"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        className="flex h-[calc(100dvh-88px)] flex-col overflow-y-auto bg-black px-5 py-6 pb-10"
      >
        {/* Navigation */}
        <ul className="flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-4 font-medium transition-all duration-300 ${
                  activeSection === link.href
                    ? 'bg-black text-neon-cyan border border-neon-cyan/20'
                    : 'bg-black text-white/75 hover:text-neon-cyan'
                }`}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Connect */}
        <div className="mt-8">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/30">
            Connect
          </p>

          <div className="bg-black">
            <SocialButtons variant="card" />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary flex w-full justify-center text-sm"
          >
            Contact Me
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="/VLabs/resume/Vishwarajsinh-Chudasama-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex w-full justify-center rounded-xl border border-white/10 bg-black px-6 py-3 text-sm font-medium text-white/75 transition-all duration-300 hover:border-neon-cyan/40 hover:text-neon-cyan"
          >
            Resume
          </a>

          <a
            href="https://github.com/Vlabs99/Vchat/releases/download/v1.0/app-debug.apk"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-secondary flex w-full justify-center text-sm"
          >
            <Download className="h-4 w-4" />
            Download VChat APK
          </a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.header>
  </>
)
}
