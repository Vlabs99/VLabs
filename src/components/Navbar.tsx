import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, ArrowUpRight } from 'lucide-react'
import { developer, navLinks } from '../data/content'
import { SocialButtons } from './ui/SocialButtons'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.07] bg-void/90 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)]'
          : 'bg-gradient-to-b from-void/80 to-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#hero" className="group flex shrink-0 items-center gap-3">
          <motion.div
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-violet font-display text-sm font-bold shadow-glow"
            whileHover={{ scale: 1.06, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            V
          </motion.div>
          <div className="hidden leading-tight sm:block">
            <span className="font-display text-base font-bold tracking-wide text-gradient">
              {developer.brand}
            </span>
            <span className="block max-w-[140px] truncate font-mono text-[10px] text-white/35">
              {developer.shortName} Chudasama
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
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
            className="fixed inset-0 top-[60px] z-40 bg-void/95 backdrop-blur-2xl lg:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              className="flex h-full flex-col overflow-y-auto px-5 py-6"
            >
              <ul className="flex flex-col gap-1">
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
                      className="block rounded-xl px-4 py-3.5 font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-neon-cyan"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/30">
                  Connect
                </p>
                <SocialButtons variant="card" />
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary flex w-full justify-center text-sm"
                >
                  Contact Me
                  <ArrowUpRight className="h-4 w-4" />
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
  )
}
