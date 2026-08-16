import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Globe, Github, Shield, Zap, Layers, Database, Monitor, Image as ImageIcon, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const LIVE_DEMO_URL = "https://v-chat-web.vercel.app/chat"
const GITHUB_URL = "https://github.com/Vlabs99/VChat-Web"

const screenshots = [
  { title: "Chat Sessions", image: `${import.meta.env.BASE_URL}screenshots/vchat-chat-list.webp` },
  { title: "Private Messaging", image: `${import.meta.env.BASE_URL}screenshots/vchat-private-chat.webp` },
  { title: "Group Communication", image: `${import.meta.env.BASE_URL}screenshots/vchat-group-chat.webp` },
  { title: "Group Settings", image: `${import.meta.env.BASE_URL}screenshots/vchat-group-setting.webp` },
  { title: "User Search", image: `${import.meta.env.BASE_URL}screenshots/vchat-user-search.webp` },
]

const webFeatures = [
  {
    icon: Globe,
    title: "Cross-Platform Access",
    description: "Browser-based realtime client accessible from any desktop, tablet, or smartphone without installation."
  },
  {
    icon: Database,
    title: "Unified Firestore Backend",
    description: "Connects to the exact same Firebase Firestore database schema as the VChat Android app for live multi-device messaging."
  },
  {
    icon: Zap,
    title: "Instant Synchronization",
    description: "Real-time message dispatch, presence updates, and active conversation sync using reactive web listeners."
  },
  {
    icon: Shield,
    title: "Firebase Authentication",
    description: "Secure email and credential authentication with session persistence and security rules."
  },
  {
    icon: Layers,
    title: "Modern Web Stack",
    description: "Architected with React, TypeScript, Vite, and Tailwind CSS for instant load times and high performance."
  },
  {
    icon: Monitor,
    title: "Responsive Interface",
    description: "Adaptive layout engineered for wide desktop screens and mobile browser viewports with glassmorphism UI."
  }
]

export default function VChatWeb() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-neon-cyan transition-colors mb-12 group">
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
        
        <div className="space-y-24 max-w-5xl mx-auto">
          {/* Hero Section */}
          <section className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/[0.04] border border-white/10 mb-8 shadow-glow"
            >
              <Globe className="h-10 w-10 text-neon-cyan" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 mb-6"
            >
              VChat Web
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md mb-10 shadow-[0_0_30px_rgba(0,240,255,0.05)]"
            >
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
                </span>
                <span className="text-neon-cyan font-bold tracking-wide">Live Web App</span>
              </div>
              
              <div className="w-full sm:w-px h-px sm:h-8 bg-white/10"></div>
              
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-white/50 font-mono text-sm uppercase tracking-wider">Platform:</span>
                <span className="text-white font-bold tracking-wide">Web Client</span>
              </div>

              <div className="w-full sm:w-px h-px sm:h-8 bg-white/10"></div>
              
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-white/50 font-mono text-sm uppercase tracking-wider">Stack:</span>
                <span className="text-white font-bold tracking-wide">React + TypeScript</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto text-xl text-white/60 leading-relaxed mb-6"
            >
              The web companion client for VChat, providing instant web access to real-time messaging, private chats, group conversations, and shared Firestore data sync across devices.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            >
              <a
                href={LIVE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto px-8 py-4 text-base font-bold flex items-center justify-center gap-3"
              >
                <Globe className="h-5 w-5" />
                <span>Open Live Demo</span>
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto px-8 py-4 text-base font-bold flex items-center justify-center gap-3"
              >
                <Github className="h-5 w-5" />
                <span>GitHub Repository</span>
              </a>
            </motion.div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-10 text-center">
              Web Client Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webFeatures.map((feat, i) => {
                const Icon = feat.icon
                return (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{feat.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </section>

          {/* Screenshots Gallery */}
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-10 text-center">
              Application Interface
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {screenshots.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedImage(item.image)}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] cursor-pointer"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-void/60">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 border-t border-white/10 flex items-center justify-between">
                    <span className="font-semibold text-sm text-white">{item.title}</span>
                    <ImageIcon className="h-4 w-4 text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage}
              alt="Screenshot Preview"
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain border border-white/20 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
