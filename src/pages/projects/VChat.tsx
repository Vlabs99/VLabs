import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, MessageSquare, Shield, Smartphone, Server, Zap, GitBranch, Image as ImageIcon, X, Globe, Github, Download, Users, UserPlus, Smile, Reply, Bell, MonitorSmartphone, Database, Monitor, Layers, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const LIVE_DEMO_URL = "https://v-chat-web.vercel.app/chat";
const GITHUB_URL = "https://github.com/Vlabs99/VChat-Web";
const APK_URL = "https://github.com/Vlabs99/Vchat/releases/download/v1.0/app-debug.apk";

const screenshots = [
  { title: "Splash Screen", image: `${import.meta.env.BASE_URL}screenshots/vchat-splash.webp` },
  { title: "Chat Sessions", image: `${import.meta.env.BASE_URL}screenshots/vchat-chat-list.webp` },
  { title: "Private Chat", image: `${import.meta.env.BASE_URL}screenshots/vchat-private-chat.webp` },
  { title: "Group Settings", image: `${import.meta.env.BASE_URL}screenshots/vchat-group-setting.webp` },
  { title: "Group Chat", image: `${import.meta.env.BASE_URL}screenshots/vchat-group-chat.webp` },
  { title: "User Profile", image: `${import.meta.env.BASE_URL}screenshots/vchat-preview.webp` },
  { title: "User Search", image: `${import.meta.env.BASE_URL}screenshots/vchat-user-search.webp` },
];

const milestones = [
  "Initial project setup",
  "Realtime messaging implementation",
  "Friend request system",
  "Group chat support",
  "Typing indicators",
  "Message reactions",
  "Reply and forward messages",
  "Firestore rules stabilization",
  "Architecture refactoring",
  "Current version release"
];

export default function VChat() {
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
              <MessageSquare className="h-10 w-10 text-neon-cyan" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 mb-6"
            >
              VChat Messenger
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md mb-10 shadow-[0_0_30px_rgba(0,240,255,0.05)]"
            >
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-green-500/10 border border-green-500/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-400 font-bold tracking-wide">Production Ready</span>
              </div>
              
              <div className="w-full sm:w-px h-px sm:h-8 bg-white/10"></div>
              
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                 <span className="text-white/50 font-mono text-sm uppercase tracking-wider">Version:</span>
                 <span className="text-white font-bold tracking-wide">v1.0</span>
              </div>
              
              <div className="w-full sm:w-px h-px sm:h-8 bg-white/10"></div>
              
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                 <span className="text-white/50 font-mono text-sm uppercase tracking-wider">Platform:</span>
                 <span className="text-white font-bold tracking-wide">Android + Web</span>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto text-xl text-white/60 leading-relaxed mb-6"
            >
              A modern real-time messaging platform inspired by WhatsApp, built with React, TypeScript, Firebase and Android Native.
            </motion.p>

            {/* Project Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row items-stretch justify-center gap-4 mt-12 w-full max-w-4xl mx-auto"
            >
              <a 
                href={LIVE_DEMO_URL} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Live Demo"
                className="flex-1 w-full px-6 py-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-void flex items-center justify-center gap-3 transition-all duration-300 font-bold tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:-translate-y-1"
              >
                <Globe className="w-5 h-5 shrink-0" />
                <span>Live Demo</span>
              </a>
              <a 
                href={GITHUB_URL} 
                target="_blank" 
                rel="noreferrer"
                aria-label="GitHub Repository"
                className="flex-1 w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/40 text-white flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] font-semibold"
              >
                <Github className="w-5 h-5 shrink-0" />
                <span>GitHub Repository</span>
              </a>
              <a 
                href={APK_URL} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Download APK"
                className="flex-1 w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/40 text-white flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] font-semibold"
              >
                <Download className="w-5 h-5 shrink-0" />
                <span>Download APK</span>
              </a>
            </motion.div>
          </section>

          {/* Overview */}
          <section className="glass-card p-8 md:p-14">
            <h2 className="text-3xl font-display font-bold mb-6 text-white flex items-center gap-4">
              <Zap className="h-8 w-8 text-neon-violet" />
              Project Overview
            </h2>
            <div className="prose prose-invert max-w-none text-white/60 text-lg leading-relaxed space-y-6">
              <p>
                VChat was conceived as a comprehensive solution to bridge the gap between simple chat applications and robust enterprise messaging platforms. It leverages the full potential of Android's native ecosystem to deliver a buttery-smooth user interface while handling complex real-time data synchronization in the background.
              </p>
              <p>
                The core philosophy behind VChat is to provide an intuitive, instantly familiar chat experience that scales elegantly, ensuring messages are delivered securely and instantaneously regardless of network conditions.
              </p>
            </div>
          </section>

          {/* Project Statistics */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: '25+ Features', icon: Zap },
              { label: 'Real-time Firebase', icon: Server },
              { label: 'Android + Web', icon: Smartphone },
              { label: 'Production Ready', icon: Shield }
            ].map((stat, idx) => (
              <div key={idx} className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:border-neon-cyan/50 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-white/[0.04] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-neon-cyan/30 group-hover:bg-neon-cyan/10">
                  <stat.icon className="h-6 w-6 text-neon-cyan group-hover:text-white transition-colors" />
                </div>
                <div className="text-lg font-display font-bold text-white/90 group-hover:text-neon-cyan transition-colors">{stat.label}</div>
              </div>
            ))}
          </section>

          {/* App Screenshots */}
          <section className="glass-card p-8 md:p-14">
            <h2 className="text-3xl font-display font-bold mb-10 text-white flex items-center gap-4">
              <ImageIcon className="h-8 w-8 text-neon-cyan" />
              App Screenshots
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {screenshots.map((screen, idx) => (
                  <div 
                    key={idx} 
                    className="group relative aspect-[9/19] rounded-2xl overflow-hidden bg-abyss border border-white/10 cursor-pointer hover:border-neon-cyan/50 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_40px_rgba(0,240,255,0.15)]"
                    onClick={() => setSelectedImage(screen.image)}
                  >
                    <img 
                      src={screen.image}
                      alt={screen.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent opacity-80" />
                  </div>
              ))}
            </div>
          </section>

          {/* Development Journey */}
          <section className="glass-card p-8 md:p-14">
            <h2 className="text-3xl font-display font-bold mb-10 text-white flex items-center gap-4">
              <GitBranch className="h-8 w-8 text-neon-magenta" />
              Development Journey
            </h2>
            <div className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative pl-8 sm:pl-10 group">
                  <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-white/20 border border-white/30 group-hover:bg-neon-cyan group-hover:border-neon-cyan group-hover:shadow-[0_0_15px_rgba(0,240,255,0.8)] group-hover:scale-150 transition-all duration-300" />
                  <p className="text-lg text-white/70 font-medium group-hover:text-neon-cyan transition-colors">{milestone}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-3xl font-display font-bold mb-10 text-center text-white">
              Feature Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: MessageSquare, title: 'Real-time Messaging', desc: 'Instant one-to-one messaging powered by Firebase.' },
                { icon: Users, title: 'Group Chats', desc: 'Create and manage groups with admin controls.' },
                { icon: UserPlus, title: 'Friend System', desc: 'Send requests, manage friends, block and unblock users.' },
                { icon: Smile, title: 'Message Reactions', desc: 'React to messages with emojis.' },
                { icon: Reply, title: 'Reply & Forward', desc: 'Reply to specific messages and forward conversations.' },
                { icon: Bell, title: 'Notifications', desc: 'Receive real-time in-app notifications.' },
                { icon: MonitorSmartphone, title: 'Responsive Web', desc: 'Android-like experience across Desktop, Tablet and Mobile.' },
                { icon: Database, title: 'Firebase Backend', desc: 'Authentication, Firestore and Storage integration.' }
              ].map((feature, idx) => (
                <div key={idx} className="glass-card p-6 flex flex-col items-center justify-start text-center group hover:-translate-y-1 hover:border-neon-cyan/50 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] transition-all duration-300 h-full">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-white/[0.04] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-neon-cyan/30 group-hover:bg-neon-cyan/10">
                    <feature.icon className="h-8 w-8 text-neon-cyan group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white/90 mb-3 group-hover:text-neon-cyan transition-colors">{feature.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="relative overflow-hidden text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 opacity-[0.02] pointer-events-none">
              <Server className="w-[30rem] h-[30rem]" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-10 text-white relative z-10 flex items-center justify-center gap-4">
              <Server className="h-8 w-8 text-neon-cyan" />
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 text-left">
              {[
                { 
                  title: 'Frontend', 
                  icon: Monitor, 
                  techs: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
                },
                { 
                  title: 'Backend', 
                  icon: Database, 
                  techs: ['Firebase Authentication', 'Cloud Firestore', 'Firebase Storage']
                },
                { 
                  title: 'Android', 
                  icon: Smartphone, 
                  techs: ['Java', 'Android SDK', 'XML']
                },
                { 
                  title: 'Architecture', 
                  icon: Layers, 
                  techs: ['MVVM', 'Repository Pattern', 'Component Based UI']
                }
              ].map((category, idx) => (
                <div key={idx} className="glass-card p-6 flex flex-col h-full group hover:border-neon-cyan/40 hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white/[0.04] flex items-center justify-center border border-white/5 group-hover:border-neon-cyan/30 group-hover:bg-neon-cyan/10 transition-colors duration-300">
                      <category.icon className="w-6 h-6 text-neon-cyan group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white/90 group-hover:text-neon-cyan transition-colors">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.techs.map((tech, techIdx) => (
                      <span key={techIdx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-neon-cyan/50 hover:bg-neon-cyan/10 text-white/80 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:text-white cursor-default">
                        <Code2 className="w-3.5 h-3.5 text-neon-cyan/70" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture & Challenges */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="glass-card p-8 md:p-10">
              <h2 className="text-2xl font-display font-bold mb-6 text-white flex items-center gap-3">
                <Shield className="h-6 w-6 text-neon-cyan" />
                Architecture
              </h2>
              <p className="text-white/60 leading-relaxed">
                The application follows an MVVM (Model-View-ViewModel) architectural pattern to ensure clean separation of concerns. Firestore acts as the primary real-time database, utilizing offline persistence to maintain functionality during network drops. Background services handle FCM push notifications, ensuring users never miss a message even when the app is closed.
              </p>
            </section>
            
            <section className="glass-card p-8 md:p-10">
              <h2 className="text-2xl font-display font-bold mb-6 text-white flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-neon-magenta" />
                Challenges & Solutions
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                <strong className="text-white/90">Challenge:</strong> Efficiently handling real-time typing indicators in large group chats without exceeding Firestore write limits.
              </p>
              <p className="text-white/60 leading-relaxed">
                <strong className="text-white/90">Solution:</strong> Implemented a debounced state management system that batches typing status updates and leverages Firebase Realtime Database for ephemeral state, significantly reducing Firestore operational costs and bandwidth overhead.
              </p>
            </section>
          </div>

          {/* Future Roadmap */}
          <section className="glass-card p-8 md:p-14 text-center">
            <h2 className="text-3xl font-display font-bold mb-6 text-white">
              Future Roadmap
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
              Development on VChat is ongoing. Future iterations will focus on enhanced privacy features, broader media support, and cross-platform compatibility.
            </p>
            <div className="inline-flex flex-wrap justify-center gap-4">
              {['End-to-End Encryption', 'Voice & Video Calls', 'Desktop Client (Electron)', 'Stickers & GIFs'].map((item, idx) => (
                <span key={idx} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/70">
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pt-10 pb-10 border-t border-white/10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50">
              Experience VChat
            </h2>
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 w-full max-w-4xl mx-auto">
              <a 
                href={LIVE_DEMO_URL} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Live Demo"
                className="flex-1 w-full px-6 py-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-void flex items-center justify-center gap-3 transition-all duration-300 font-bold tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:-translate-y-1"
              >
                <Globe className="w-5 h-5 shrink-0" />
                <span>Live Demo</span>
              </a>
              <a 
                href={GITHUB_URL} 
                target="_blank" 
                rel="noreferrer"
                aria-label="GitHub Repository"
                className="flex-1 w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/40 text-white flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] font-semibold"
              >
                <Github className="w-5 h-5 shrink-0" />
                <span>GitHub Repository</span>
              </a>
              <a 
                href={APK_URL} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Download APK"
                className="flex-1 w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/40 text-white flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] font-semibold"
              >
                <Download className="w-5 h-5 shrink-0" />
                <span>Download APK</span>
              </a>
            </div>
          </section>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-8 bg-void/90 backdrop-blur-xl"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={selectedImage}
              alt="Expanded screenshot"
              className="max-w-full max-h-[90vh] rounded-2xl border border-white/10 shadow-[0_0_100px_rgba(0,240,255,0.15)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
