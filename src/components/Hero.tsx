import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowDown, Download, Code2 } from 'lucide-react'
import { developer } from '../data/content'
import { SocialButtons } from './ui/SocialButtons'
import { ProfileAvatar } from './ui/ProfileAvatar'
import { Scene3D } from './Scene3D'
import { AIParticles } from './ui/AIParticles'
import { MagneticButton } from './ui/MagneticButton'

export function Hero() {
  const roles = [
  'AI Systems Engineer',
  'Full Stack Product Builder',
  'Realtime Infrastructure Developer',
  'Cross-Platform Application Engineer',
]

  const [currentRole, setCurrentRole] = useState(0)

const mouseX = useMotionValue(0)
const mouseY = useMotionValue(0)

const smoothMouseX = useSpring(mouseX, {
  damping: 25,
  stiffness: 120,
})

const smoothMouseY = useSpring(mouseY, {
  damping: 25,
  stiffness: 120,
})

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
  mouseX.set(e.clientX)
  mouseY.set(e.clientY)
}

  return (
  <section

  
    id="hero"
    onMouseMove={handleMouseMove}
    className="relative z-0 flex min-h-screen items-center overflow-hidden pt-24 pb-16"
  >
    <AIParticles />

    <motion.div
  animate={{
    y: [0, -40, 0],
    x: [0, 20, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="floating-orb left-[-120px] top-[10%] h-[320px] w-[320px] bg-neon-cyan"
/>

<motion.div
  animate={{
    y: [0, 30, 0],
    x: [0, -25, 0],
  }}
  transition={{
    duration: 14,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="floating-orb bottom-[0%] right-[-120px] h-[360px] w-[360px] bg-neon-violet"
/>


    {/* Ambient radial glows */}
    {/* Floating ambient layer */}
<motion.div
  animate={{
    rotate: [0, 360],
  }}
  transition={{
    duration: 40,
    repeat: Infinity,
    ease: 'linear',
  }}
  className="absolute left-[-10%] top-[-20%] z-0 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.10),transparent_65%)] blur-3xl"
/>

<motion.div
  animate={{
    rotate: [360, 0],
  }}
  transition={{
    duration: 50,
    repeat: Infinity,
    ease: 'linear',
  }}
  className="absolute bottom-[-25%] right-[-10%] z-0 h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12),transparent_70%)] blur-3xl"
/>
    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.12),transparent_32%)]" />

    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.10),transparent_28%)]" />

    {/* Mouse follow glow */}
    <motion.div
      style={{
        x: smoothMouseX,
        y: smoothMouseY,
      }}
      className="pointer-events-none absolute left-[-160px] top-[-160px] z-0 h-[320px] w-[320px] rounded-full bg-neon-cyan/10 blur-3xl"
    />

    {/* Cyber grid background */}
    <div className="absolute inset-0 z-0 opacity-[0.045]">
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

    {/* Animated ambient particles */}
    <motion.div
      animate={{
        y: [0, -30, 0],
        opacity: [0.25, 0.55, 0.25],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute left-[12%] top-[18%] z-0 h-28 w-28 rounded-full bg-neon-cyan/10 blur-3xl"
    />

    <motion.div
      animate={{
        y: [0, 24, 0],
        opacity: [0.2, 0.45, 0.2],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute right-[10%] top-[30%] z-0 h-36 w-36 rounded-full bg-neon-violet/10 blur-3xl"
    />

    <motion.div
      animate={{
        y: [0, -18, 0],
        opacity: [0.15, 0.35, 0.15],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute bottom-[16%] left-[28%] z-0 h-24 w-24 rounded-full bg-neon-cyan/10 blur-3xl"
    />

    {/* 3D Scene */}
    <div className="relative z-0">
      <Scene3D />
    </div>

    {/* Main content */}
    

      <div className="animate-in-view visible relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop: Two-column layout | Mobile: Single column */}
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24 lg:items-center">
          {/* Left column: Bio and content */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-[32px] border border-white/[0.06] bg-white/[0.03] p-6 shadow-[0_10px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8 lg:p-10 lg:pr-8">
  {/* Animated gradient border glow */}
  <motion.div
    animate={{
      opacity: [0.35, 0.7, 0.35],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="pointer-events-none absolute inset-0 rounded-[32px] border border-neon-cyan/20"
  />
            {/* Intro label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-5 flex flex-wrap items-center gap-4"
            >
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neon-cyan/80">
  <span>
    {developer.education} • {roles[currentRole]}
  </span>

  <motion.span
    animate={{ opacity: [1, 0, 1] }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="text-neon-cyan"
  >
    |
  </motion.span>
</p>
  <div className="relative flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-1 backdrop-blur-md">
  {/* Animated pulse */}
  <motion.span
    animate={{
      scale: [1, 1.8, 1],
      opacity: [0.7, 0, 0.7],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: 'easeOut',
    }}
    className="absolute left-[13px] h-2 w-2 rounded-full bg-neon-cyan"
  />

  <span className="relative h-2 w-2 rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(0,240,255,0.9)]" />

  <span className="font-mono text-[10px] uppercase tracking-widest text-neon-cyan">
    Available for Projects
  </span>
</div>
</motion.div>

            {/* Main heading */}
            <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.25, duration: 0.6 }}
  className="relative text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl before:absolute before:-left-10 before:top-1/2 before:h-40 before:w-40 before:-translate-y-1/2 before:rounded-full before:bg-neon-cyan/10 before:blur-3xl before:content-['']"
>
  <span className="block text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.08)]">
    VLabs
  </span>

  <motion.span
    animate={{
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'linear',
    }}
    className="mt-2 block bg-[linear-gradient(90deg,#00F0FF,#8B5CF6,#00F0FF)] bg-[length:200%_200%] bg-clip-text text-transparent"
  >
    Intelligent Engineering
  </motion.span>

  {/* Animated underline */}
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: '180px', opacity: 1 }}
    transition={{
      delay: 0.7,
      duration: 0.8,
      ease: 'easeOut',
    }}
    className="mt-5 h-[3px] rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet shadow-[0_0_20px_rgba(0,240,255,0.45)]"
  />
</motion.h1>

{/* Brand tagline */}
<motion.p
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.35, duration: 0.5 }}
  className="mt-6 font-display text-lg font-semibold text-white/90"
>
  Building AI Systems • Applications • Digital Experiences
</motion.p>

{/* Main tagline */}
<motion.p
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.45, duration: 0.5 }}
  className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
>
  VLabs is an independent engineering portfolio focused on AI-assisted applications, Android development, modern web platforms, Windows software, and scalable realtime systems.

  <span className="mt-4 block text-white/45">
    From intelligent automation tools and interactive digital experiences to production-style messaging infrastructure and cross-platform applications, every project is designed with modern architecture, performance, and creative engineering in mind.
  </span>
</motion.p>

            {/* CTA Buttons */}
            <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.55, duration: 0.5 }}
  className="relative mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
>
  {/* Ambient CTA glow */}
  <motion.div
    animate={{
      opacity: [0.25, 0.5, 0.25],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle,rgba(0,240,255,0.12),transparent_70%)] blur-3xl"
  />

  <MagneticButton
  href="#vchat"
  className="relative z-10 btn-primary inline-flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(0,240,255,0.28)]"
>
  <Code2 className="h-5 w-5" />
  Explore VChat
</MagneticButton>

  <a
    href="https://github.com/Vlabs99/Vchat/releases/download/v1.0/app-debug.apk"
    target="_blank"
    rel="noopener noreferrer"
    className="relative z-10 btn-secondary inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/40 hover:shadow-[0_0_35px_rgba(0,240,255,0.12)]"
  >
    <Download className="h-5 w-5" />
    Download APK
  </a>

  <a
    href="/VLabs/resume/Vishwarajsinh-Chudasama-Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="relative z-10 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 font-medium text-white/75 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-[0_0_35px_rgba(0,240,255,0.12)]"
  >
    Resume
  </a>
</motion.div>

{/* Social Links */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.65, duration: 0.5 }}
  className="mt-10 flex flex-wrap items-center gap-4"
>
  <p className="font-mono text-xs uppercase tracking-widest text-white/40">
    Follow
  </p>

  <SocialButtons variant="icon" />

  <a
    href="/VLabs/resume/Vishwarajsinh-Chudasama-Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.12)]"
  >
    Resume
  </a>
</motion.div></div>

{/* Right column: Profile Image (Desktop only) */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.3, duration: 0.7 }}
  className="relative hidden items-center justify-center lg:flex"
>
  {/* Animated glow background */}
  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.45, 0.7, 0.45],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="absolute h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.22),transparent_68%)] blur-3xl"
  />

  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="relative z-10"
  >
    <ProfileAvatar size="lg" />
  </motion.div>
</motion.div>
</div>

{/* Mobile profile image - shown below content on mobile */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  className="relative mt-12 flex justify-center lg:hidden"
>
  {/* Mobile glow */}
  <motion.div
    animate={{
      scale: [1, 1.05, 1],
      opacity: [0.35, 0.55, 0.35],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="absolute h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.18),transparent_68%)] blur-3xl"
  />

  <motion.div
    animate={{
      y: [0, -6, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="relative z-10"
  >
    <ProfileAvatar size="md" />
  </motion.div>
</motion.div>
</div>

{/* Scroll indicator */}
<motion.a
  href="#about"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/30 transition-all duration-300 hover:text-neon-cyan"
  aria-label="Scroll to about"
>
  <motion.div
    animate={{
      y: [0, 10, 0],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 2.4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="rounded-full border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_25px_rgba(0,240,255,0.08)] backdrop-blur-md"
  >
    <ArrowDown className="h-5 w-5" />

  </motion.div>
</motion.a>

</section>
)
}