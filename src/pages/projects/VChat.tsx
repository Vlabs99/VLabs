import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, MessageSquare, Shield, Smartphone, Server, Zap, Github, Download, Activity, GitBranch, Layers, Database, Image as ImageIcon, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const screenshots = [
  { title: "Splash Screen", image: `${import.meta.env.BASE_URL}screenshots/vchat-splash.jpeg` },
  { title: "Chat Sessions", image: `${import.meta.env.BASE_URL}screenshots/vchat-chat-list.jpeg` },
  { title: "Private Chat", image: `${import.meta.env.BASE_URL}screenshots/vchat-private-chat.jpeg` },
  { title: "Group Settings", image: `${import.meta.env.BASE_URL}screenshots/vchat-group-setting.jpeg` },
  { title: "Group Chat", image: `${import.meta.env.BASE_URL}screenshots/vchat-group-chat.jpeg` },
  { title: "User Profile", image: `${import.meta.env.BASE_URL}screenshots/vchat-profile.jpeg` },
  { title: "User Search", image: `${import.meta.env.BASE_URL}screenshots/vchat-user-search.jpeg` },
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
              VChat
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-neon-cyan font-mono mb-8"
            >
              Native Android Messaging Platform
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto text-lg text-white/60 leading-relaxed"
            >
              A feature-rich, real-time Android chat application built with modern Java and Firebase. VChat provides a seamless messaging experience with advanced features like read receipts, typing indicators, and end-to-end media sharing.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 mt-12"
            >
              <a href="#" className="btn-primary">
                <Download className="h-5 w-5" />
                <span>Download APK</span>
              </a>
              <a href="#" className="btn-secondary">
                <Github className="h-5 w-5" />
                <span>Source Code</span>
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
          <section className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Current Status', value: 'Active', icon: Activity },
              { label: 'Version', value: 'v1.0.0', icon: GitBranch },
              { label: 'Platform', value: 'Native Android', icon: Smartphone },
              { label: 'Architecture', value: 'MVVM', icon: Layers },
              { label: 'Core Features', value: '10+', icon: Zap },
              { label: 'Firebase Services', value: '4 Modules', icon: Database }
            ].map((stat, idx) => (
              <div key={idx} className="glass-card p-6 flex flex-col items-center text-center group hover:border-neon-cyan/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/[0.04] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-neon-cyan group-hover:text-neon-violet transition-colors" />
                </div>
                <div className="text-2xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-widest font-mono">{stat.label}</div>
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
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Realtime Messaging', desc: 'Instantaneous message delivery and state synchronization.' },
                { title: 'Group Chats', desc: 'Create and manage group conversations with multiple participants.' },
                { title: 'Friend Requests', desc: 'Robust user discovery and social connection management.' },
                { title: 'Typing Indicator', desc: 'Real-time feedback when conversation partners are typing.' },
                { title: 'Reply Messages', desc: 'Thread-like contextual replies to specific messages.' },
                { title: 'Forward Messages', desc: 'Seamlessly share messages across different chats.' },
                { title: 'Message Reactions', desc: 'Expressive emoji reactions to individual messages.' },
                { title: 'Message Info', desc: 'Detailed read receipts and delivery timestamps.' },
                { title: 'Group Management', desc: 'Admin controls, participant roles, and group settings.' },
                { title: 'Dark Theme', desc: 'Native dark mode support for comfortable night viewing.' }
              ].map((feature, idx) => (
                <div key={idx} className="glass-card p-8 border-white/5 hover:border-neon-cyan/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/[0.04] flex items-center justify-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-neon-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/50 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="glass-card p-8 md:p-14 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 p-12 opacity-[0.03] pointer-events-none">
              <Server className="w-96 h-96" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-10 text-white relative z-10 flex items-center gap-4">
              <Server className="h-8 w-8 text-neon-cyan" />
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
              {['Java', 'XML', 'Firebase Authentication', 'Firestore', 'Firebase Storage', 'Firebase Cloud Messaging'].map((tech, idx) => (
                <div key={idx} className="flex items-center gap-3 p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-neon-violet" />
                  <span className="text-white/80 font-medium">{tech}</span>
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
