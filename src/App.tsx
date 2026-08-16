import { useEffect, useState, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LatestUpdate } from './components/LatestUpdate'
import { useIsMobile } from './hooks/useIsMobile'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo(0, 0)
        }
      }, 50)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

// Below-the-fold homepage sections lazy loaded for mobile TTI & bundle optimization
const SystemsTerminal = lazy(() => import('./components/SystemsTerminal').then(m => ({ default: m.SystemsTerminal })))
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })))
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })))
const Academics = lazy(() => import('./components/Academics').then(m => ({ default: m.Academics })))
const GitHubStats = lazy(() => import('./components/GitHubStats').then(m => ({ default: m.GitHubStats })))
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })))
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })))
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })))
const AmbientParticles = lazy(() => import('./components/AmbientParticles').then(m => ({ default: m.AmbientParticles })))
const CustomCursor = lazy(() => import('./components/CustomCursor').then(m => ({ default: m.CustomCursor })))

const VChat = lazy(() => import('./pages/projects/VChat'))
const RouteGuard = lazy(() => import('./pages/projects/RouteGuard'))
const RouteGuardPrivacy = lazy(() => import('./pages/projects/RouteGuardPrivacy'))
const VChatWeb = lazy(() => import('./pages/projects/VChatWeb'))

function App() {
  const isMobile = useIsMobile()
  const [loading, setLoading] = useState(true)
  const [progress] = useState(100)

  useEffect(() => {
    // Application is mounted and ready, remove artificial delay
    setLoading(false)
  }, [])

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden bg-[#030308]"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.02,
            }}
            transition={{
              duration: isMobile ? 0.15 : 0.6,
              ease: 'easeInOut',
            }}
          >
            {/* Background glow */}
            <motion.div
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute h-[420px] w-[420px] rounded-full bg-neon-cyan/10 blur-[120px]"
            />

            <motion.div
              animate={{
                opacity: [0.15, 0.35, 0.15],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute h-[320px] w-[320px] rounded-full bg-neon-violet/10 blur-[100px]"
            />

            {/* Cyber grid */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
                  `,
                  backgroundSize: '70px 70px',
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Logo */}
              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-neon-cyan via-cyan-400 to-neon-violet shadow-[0_0_60px_rgba(0,240,255,0.28)]"
              >
                {/* Shine */}
                <motion.div
                  animate={{
                    x: ['-120%', '120%'],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-y-0 w-1/2 rotate-12 bg-white/20 blur-md"
                />

                <span className="relative z-10 font-display text-5xl font-black tracking-widest text-white">
                  V
                </span>
              </motion.div>

              {/* Brand */}
              <motion.h1
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.7,
                }}
                className="mt-8 font-display text-5xl font-black tracking-[0.28em] text-transparent bg-[linear-gradient(90deg,#00F0FF,#8B5CF6,#00F0FF)] bg-[length:200%_200%] bg-clip-text"
              >
                VLABS
              </motion.h1>

              {/* Status */}
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                }}
                className="mt-4 font-mono text-[11px] uppercase tracking-[0.38em] text-white/45"
              >
                Initializing Intelligent Systems...
              </motion.p>

              {/* Progress bar */}
              <div className="mt-10 w-[240px] overflow-hidden rounded-full border border-white/10 bg-white/[0.03]">
                <motion.div
                  className="h-1.5 rounded-full bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    ease: 'easeOut',
                  }}
                />
              </div>

              {/* Progress number */}
              <motion.p
                className="mt-4 font-mono text-xs text-white/30"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                }}
              >
                {progress}% LOADED
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website */}
      <div className="relative min-h-screen bg-void">
        <Suspense fallback={null}>
          <AmbientParticles />
          <CustomCursor />
        </Suspense>
        <Navbar />

        <Routes>
          <Route path="/" element={
            <main className="relative">
              <LatestUpdate />
              <Hero />
              <Suspense fallback={<div className="py-20 text-center font-mono text-xs text-white/30">LOADING SYSTEMS...</div>}>
                <SystemsTerminal />
                <About />
                <Skills />
                <Academics />
                <GitHubStats />
                <Projects />
                <Contact />
              </Suspense>
            </main>
          } />
          <Route path="/projects/vchat" element={
            <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-void text-neon-cyan font-mono text-sm tracking-widest">LOADING SYSTEMS...</div>}>
              <VChat />
            </Suspense>
          } />
          <Route path="/projects/routeguard" element={
            <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-void text-neon-cyan font-mono text-sm tracking-widest">LOADING SYSTEMS...</div>}>
              <RouteGuard />
            </Suspense>
          } />
          <Route path="/projects/routeguard/privacy" element={
            <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-void text-neon-cyan font-mono text-sm tracking-widest">LOADING SYSTEMS...</div>}>
              <RouteGuardPrivacy />
            </Suspense>
          } />
          <Route path="/routeguard/privacy" element={
            <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-void text-neon-cyan font-mono text-sm tracking-widest">LOADING SYSTEMS...</div>}>
              <RouteGuardPrivacy />
            </Suspense>
          } />
          <Route path="/privacy" element={
            <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-void text-neon-cyan font-mono text-sm tracking-widest">LOADING SYSTEMS...</div>}>
              <RouteGuardPrivacy />
            </Suspense>
          } />
          <Route path="/projects/vchat-web" element={
            <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-void text-neon-cyan font-mono text-sm tracking-widest">LOADING SYSTEMS...</div>}>
              <VChatWeb />
            </Suspense>
          } />
        </Routes>

        <div className="noise-overlay" />
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App