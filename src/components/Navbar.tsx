// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Menu, X, ArrowUpRight } from 'lucide-react'
// import { navLinks } from '../data/content'
// import { SocialButtons } from './ui/SocialButtons'

// export function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [activeSection, setActiveSection] = useState('#hero')
//   const [showNavbar, setShowNavbar] = useState(true)

//   useEffect(() => {
//     let lastScrollY = window.scrollY

//     const onScroll = () => {
//       const currentScroll = window.scrollY

//       if (currentScroll <= 80) {
//         setShowNavbar(true)
//       } else if (currentScroll > lastScrollY) {
//         setShowNavbar(false)
//       } else {
//         setShowNavbar(true)
//       }

//       lastScrollY = currentScroll

//       setScrolled(currentScroll > 32)

//       const scrollPosition = currentScroll + 140

//       navLinks.forEach((link) => {
//         const section = document.querySelector(link.href)

//         if (!section) return

//         const top = (section as HTMLElement).offsetTop
//         const height = (section as HTMLElement).offsetHeight

//         if (
//           scrollPosition >= top &&
//           scrollPosition < top + height
//         ) {
//           setActiveSection(link.href)
//         }
//       })
//     }

//     window.addEventListener('scroll', onScroll, {
//       passive: true,
//     })

//     return () => {
//       window.removeEventListener('scroll', onScroll)
//     }
//   }, [])

//   useEffect(() => {
//     document.body.style.overflow = open ? 'hidden' : ''

//     return () => {
//       document.body.style.overflow = ''
//     }
//   }, [open])

//   return (
//     <>
//       <motion.div
//         className="fixed left-0 top-0 z-[999] h-[2px] origin-left bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.8)]"
//         style={{
//           scaleX:
//             typeof window !== 'undefined'
//               ? window.scrollY /
//                 (document.body.scrollHeight -
//                   window.innerHeight || 1)
//               : 0,
//           width: '100%',
//         }}
//       />

//       <motion.header
//         initial={{ y: -100, opacity: 0 }}
//         animate={{
//           y: showNavbar ? 0 : -110,
//           opacity: showNavbar ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.35,
//           ease: [0.16, 1, 0.3, 1],
//         }}
//         className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-500 ${
//           scrolled
//             ? 'border-b border-white/[0.07] bg-void/90 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)]'
//             : 'bg-[#050816]'
//         }`}
//       >
//         <nav className="relative mx-auto mt-3 flex max-w-6xl items-center justify-between gap-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] before:opacity-80 sm:px-6 lg:px-8">
//           <a
//             href="#hero"
//             className="group flex shrink-0 items-center gap-3"
//           >
//             <motion.div
//               className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neon-cyan/90 to-neon-violet/90 font-display text-sm font-black text-white shadow-[0_0_30px_rgba(0,240,255,0.28)]"
//               whileHover={{
//                 scale: 1.08,
//                 rotate: 4,
//               }}
//               transition={{
//                 type: 'spring',
//                 stiffness: 400,
//               }}
//             >
//               <motion.div
//                 animate={{
//                   opacity: [0.35, 0.7, 0.35],
//                   scale: [1, 1.15, 1],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: 'easeInOut',
//                 }}
//                 className="absolute inset-0 bg-white/20 blur-xl"
//               />

//               <motion.div
//                 animate={{
//                   x: ['-120%', '120%'],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: 'linear',
//                 }}
//                 className="absolute inset-y-0 w-1/2 rotate-12 bg-white/20 blur-md"
//               />

//               <span className="relative z-10 tracking-widest">
//                 V
//               </span>
//             </motion.div>

//             <div className="hidden leading-tight sm:block">
//               <span className="font-display text-base font-bold tracking-[0.18em] text-gradient">
//                 VLABS
//               </span>

//               <span className="block max-w-[220px] font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
//                 AI Systems • Applications • Engineering
//               </span>
//             </div>
//           </a>

//           <ul className="hidden items-center gap-0.5 xl:flex">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   className={`nav-link rounded-xl px-4 py-2 transition-all duration-300 hover:bg-white/5 hover:text-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.12)] ${
//                     activeSection === link.href
//                       ? 'bg-white/5 text-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.18)]'
//                       : ''
//                   }`}
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//                     <div className="hidden items-center gap-3 lg:flex">
//             <SocialButtons variant="icon" />

//             <a
//               href="#contact"
//               className="nav-cta hidden 2xl:inline-flex"
//             >
//               Contact
//               <ArrowUpRight className="h-3.5 w-3.5" />
//             </a>

            
//           </div>

//           <button
//             type="button"
//             onClick={() => setOpen(!open)}
//             className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white/80 backdrop-blur-md transition-colors hover:border-neon-cyan/30 lg:hidden"
//             aria-label="Toggle menu"
//           >
//             {open ? (
//               <X className="h-5 w-5" />
//             ) : (
//               <Menu className="h-5 w-5" />
//             )}
//           </button>
//         </nav>
//               <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-x-0 bottom-0 top-[88px] z-[999] bg-black lg:hidden"
//           >
//             <motion.div
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -10, opacity: 0 }}
//               className="flex h-[calc(100dvh-88px)] flex-col overflow-y-auto bg-black px-5 py-6 pb-10"
//             >
//               {/* Navigation */}
//               <ul className="flex flex-col gap-2">
//                 {navLinks.map((link, i) => (
//                   <motion.li
//                     key={link.href}
//                     initial={{ opacity: 0, x: -16 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.04 }}
//                   >
//                     <a
//                       href={link.href}
//                       onClick={() => setOpen(false)}
//                       className={`block rounded-xl px-4 py-4 font-medium transition-all duration-300 ${
//                         activeSection === link.href
//                           ? 'bg-black text-neon-cyan border border-neon-cyan/20'
//                           : 'bg-black text-white/75 hover:text-neon-cyan'
//                       }`}
//                     >
//                       {link.label}
//                     </a>
//                   </motion.li>
//                 ))}
//               </ul>

//               {/* Connect */}
//               <div className="mt-8">
//                 <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/30">
//                   Connect
//                 </p>

//                 <div className="bg-black">
//                   <SocialButtons variant="card" />
//                 </div>
//               </div>
//                             {/* Buttons */}
//               <div className="mt-8 flex flex-col gap-3">
//   <a
//     href="#contact"
//     onClick={() => setOpen(false)}
//     className="btn-primary flex w-full justify-center text-sm"
//   >
//     Contact Me
//     <ArrowUpRight className="h-4 w-4" />
//   </a>
// </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   </>
// )
// }


import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  FileText,
  Mail,
  Linkedin,
  Github,
  Instagram,
  MessageCircle,
} from 'lucide-react'

import { SocialButtons } from './ui/SocialButtons'

interface DropdownItem {
  label: string
  href: string
  desc: string
  icon: React.ComponentType<{ className?: string }>
  isExternal?: boolean
}

const desktopCoreLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Academics', href: '#academics' },
  { label: 'VChat', href: '#vchat' },
  { label: 'RouteGuard', href: '#routeguard' },
  { label: 'Feedback / Query', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const [showNavbar, setShowNavbar] = useState(true)
  const [openDropdown, setOpenDropdown] = useState<'downloads' | 'contact' | null>(null)
  const [mobileDownloadsOpen, setMobileDownloadsOpen] = useState(false)
  const [mobileContactOpen, setMobileContactOpen] = useState(false)

  const downloadsItems: DropdownItem[] = [
    {
      label: 'Resume Download',
      href: '/VLabs/resume/Vishwarajsinh-Chudasama-Resume.pdf',
      desc: 'Vishwarajsinh Chudasama Resume (PDF)',
      icon: FileText,
      isExternal: true,
    },
  ]

  const contactDropdownItems: DropdownItem[] = [
    {
      label: 'Email',
      href: 'mailto:raavishvarajsinh9@gmail.com',
      desc: 'raavishvarajsinh9@gmail.com',
      icon: Mail,
      isExternal: false,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/919408280568',
      desc: '+91 94082 80568',
      icon: MessageCircle,
      isExternal: true,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vishwarajsinh-chudasama',
      desc: 'vishvarajsinh-chudasama',
      icon: Linkedin,
      isExternal: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Vlabs99',
      desc: 'Vlabs99',
      icon: Github,
      isExternal: true,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/chudasama_vishwarajsinh_9/',
      desc: 'chudasama_vishwarajsinh_9',
      icon: Instagram,
      isExternal: true,
    },
  ]

  useEffect(() => {
    let lastScrollY = window.scrollY

    const onScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll <= 80) {
        setShowNavbar(true)
      } else if (currentScroll > lastScrollY) {
        setShowNavbar(false)
        setOpenDropdown(null) // Close dropdowns on scroll down
      } else {
        setShowNavbar(true)
      }

      lastScrollY = currentScroll
      setScrolled(currentScroll > 32)

      const scrollPosition = currentScroll + 140

      desktopCoreLinks.forEach((link) => {
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

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

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
      {/* Top progress indicator bar */}
      <motion.div
        className="fixed left-0 top-0 z-[999] h-[2px] origin-left bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.8)]"
        style={{
          scaleX:
            typeof window !== 'undefined'
              ? window.scrollY /
                (document.body.scrollHeight -
                  window.innerHeight || 1)
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
        <nav className="relative mx-auto mt-3 flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-white/[0.05] bg-white/[0.02] px-4 py-3.5 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] before:opacity-80 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className="group flex shrink-0 items-center gap-3"
          >
            <motion.div
              className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neon-cyan/90 to-neon-violet/90 font-display text-sm font-black text-white shadow-[0_0_30px_rgba(0,240,255,0.28)]"
              whileHover={{
                scale: 1.08,
                rotate: 4,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
              }}
            >
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

          {/* Desktop Navbar Links */}
          <ul className="hidden items-center gap-0.5 xl:flex">
            {desktopCoreLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link rounded-xl px-4 py-2 transition-all duration-300 hover:bg-white/5 hover:text-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-void ${
                    activeSection === link.href
                      ? 'bg-white/5 text-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.18)]'
                      : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Downloads Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setOpenDropdown('downloads')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`nav-link flex items-center gap-1 rounded-xl px-4 py-2 transition-all duration-300 hover:bg-white/5 hover:text-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-void ${
                  openDropdown === 'downloads' ? 'bg-white/5 text-neon-cyan' : ''
                }`}
              >
                Downloads
                <motion.div
                  animate={{ rotate: openDropdown === 'downloads' ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openDropdown === 'downloads' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-white/[0.05] bg-[#070b19]/95 p-2 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl z-[9999]"
                  >
                    <div className="flex flex-col gap-1">
                      {downloadsItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-white/80 transition-all duration-300 hover:bg-white/5 hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b19] group"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] transition-colors group-hover:border-neon-cyan/20 group-hover:bg-neon-cyan/10">
                            <item.icon className="h-4 w-4 text-white/60 transition-colors group-hover:text-neon-cyan" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-white group-hover:text-neon-cyan transition-colors truncate">
                              {item.label}
                            </p>
                            <p className="text-[10px] text-white/40 truncate">
                              {item.desc}
                            </p>
                          </div>
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-neon-cyan" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Contact Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setOpenDropdown('contact')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`nav-link flex items-center gap-1 rounded-xl px-4 py-2 transition-all duration-300 hover:bg-white/5 hover:text-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-void ${
                  openDropdown === 'contact' ? 'bg-white/5 text-neon-cyan' : ''
                }`}
              >
                Contact
                <motion.div
                  animate={{ rotate: openDropdown === 'contact' ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openDropdown === 'contact' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-white/[0.05] bg-[#070b19]/95 p-2 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl z-[9999]"
                  >
                    <div className="flex flex-col gap-1">
                      {contactDropdownItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target={item.isExternal ? '_blank' : undefined}
                          rel={item.isExternal ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-white/80 transition-all duration-300 hover:bg-white/5 hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b19] group"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] transition-colors group-hover:border-neon-cyan/20 group-hover:bg-neon-cyan/10">
                            <item.icon className="h-4 w-4 text-white/60 transition-colors group-hover:text-neon-cyan" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-white group-hover:text-neon-cyan transition-colors truncate">
                              {item.label}
                            </p>
                            <p className="text-[10px] text-white/40 truncate">
                              {item.desc}
                            </p>
                          </div>
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-neon-cyan" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Desktop Right SocialButtons placeholder/indicator (kept for responsive spacing block) */}
          <div className="hidden items-center gap-3 xl:flex shrink-0 w-[120px] justify-end" />

          {/* Hamburger button (Toggles mobile menu) */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white/80 backdrop-blur-md transition-colors hover:border-neon-cyan/30 xl:hidden z-[9999] focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-void"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-x-0 bottom-0 top-[88px] z-[999] bg-black xl:hidden"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="flex h-[calc(100dvh-88px)] flex-col overflow-y-auto bg-black px-5 py-6 pb-14"
              >
                {/* Navigation items list */}
                <ul className="flex flex-col gap-2">
                  {/* Core direct scroll sections */}
                  {desktopCoreLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-xl px-4 py-4 font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                          activeSection === link.href
                            ? 'bg-black text-neon-cyan border border-neon-cyan/20'
                            : 'bg-black text-white/75 hover:text-neon-cyan'
                        }`}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}

                  {/* Expandable Downloads Accordion */}
                  <motion.li
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: desktopCoreLinks.length * 0.04 }}
                    className="flex flex-col gap-1"
                  >
                    <button
                      type="button"
                      onClick={() => setMobileDownloadsOpen(!mobileDownloadsOpen)}
                      className="flex w-full items-center justify-between rounded-xl bg-black px-4 py-4 font-medium text-white/75 hover:text-neon-cyan transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      <span>Downloads</span>
                      <motion.div
                        animate={{ rotate: mobileDownloadsOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {mobileDownloadsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden pl-4 pr-2 flex flex-col gap-1"
                        >
                          {downloadsItems.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm text-white/60 hover:text-neon-cyan hover:bg-white/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                            >
                              <item.icon className="h-4 w-4 shrink-0 text-white/40" />
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-white/85 truncate">{item.label}</p>
                                <p className="text-[10px] text-white/35 truncate">{item.desc}</p>
                              </div>
                              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/20" />
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  {/* Expandable Contact Accordion */}
                  <motion.li
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (desktopCoreLinks.length + 1) * 0.04 }}
                    className="flex flex-col gap-1"
                  >
                    <button
                      type="button"
                      onClick={() => setMobileContactOpen(!mobileContactOpen)}
                      className="flex w-full items-center justify-between rounded-xl bg-black px-4 py-4 font-medium text-white/75 hover:text-neon-cyan transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      <span>Contact Info</span>
                      <motion.div
                        animate={{ rotate: mobileContactOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {mobileContactOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden pl-4 pr-2 flex flex-col gap-1"
                        >
                          {contactDropdownItems.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              target={item.isExternal ? '_blank' : undefined}
                              rel={item.isExternal ? 'noopener noreferrer' : undefined}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm text-white/60 hover:text-neon-cyan hover:bg-white/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                            >
                              <item.icon className="h-4 w-4 shrink-0 text-white/40" />
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-white/85 truncate">{item.label}</p>
                                <p className="text-[10px] text-white/35 truncate">{item.desc}</p>
                              </div>
                              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/20" />
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                </ul>

                {/* Staggered Connect section */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (desktopCoreLinks.length + 2) * 0.04 }}
                  className="mt-8 shrink-0"
                >
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/30 px-4">
                    Connect
                  </p>

                  <div className="bg-black">
                    <SocialButtons variant="card" />
                  </div>
                </motion.div>

                {/* Primary CTA Contact Me button */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (desktopCoreLinks.length + 3) * 0.04 }}
                  className="mt-8 flex flex-col gap-3 shrink-0"
                >
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="btn-primary flex w-full justify-center text-sm"
                  >
                    Contact Me
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}