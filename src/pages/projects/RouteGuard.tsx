import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Shield,
  Smartphone,
  Server,
  Zap,
  GitBranch,
  Image as ImageIcon,
  X,
  Github,
  Download,
  Bell,
  Database,
  Layers,
  Code2,
  MapPin,
  Languages,
  CheckCircle2,
  AlertTriangle,
  ThumbsUp,
  Radio,
  Lock,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTEGUARD_GITHUB_URL, ROUTEGUARD_APK_DOWNLOAD_URL } from '../../data/content'

const screenshots = [
  { title: "Home Map & Search", image: `${import.meta.env.BASE_URL}screenshots/routeguard-home.jpg` },
  { title: "New Hazard Report", image: `${import.meta.env.BASE_URL}screenshots/routeguard-report.jpg` },
  { title: "Report Details & Verification", image: `${import.meta.env.BASE_URL}screenshots/routeguard-details.jpg` },
  { title: "Notifications Center", image: `${import.meta.env.BASE_URL}screenshots/routeguard-notifications.jpg` },
  { title: "User Profile & Trust Score", image: `${import.meta.env.BASE_URL}screenshots/routeguard-profile.jpg` },
  { title: "My Reports History", image: `${import.meta.env.BASE_URL}screenshots/routeguard-my-reports.jpg` },
];

const milestones = [
  "Initial Android project architecture (Manager/Helper pattern)",
  "OpenStreetMap (OsmDroid) interactive map rendering",
  "Firestore realtime hazard report listeners",
  "Travel Mode background monitoring via WorkManager",
  "Proximity notification engine with capped report cache",
  "Community Trust Score & upvote/downvote engine",
  "Verification status badges & user comments pipeline",
  "100% localization audit across English, Hindi, and Gujarati",
  "AppCompatDelegate locale switcher implementation",
  "Production APK build & zero hardcoded strings verification"
];

export default function RouteGuard() {
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
              <Shield className="h-10 w-10 text-neon-cyan" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 mb-6"
            >
              RouteGuard
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
                 <span className="text-white font-bold tracking-wide">Android (Native Java)</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto text-xl text-white/60 leading-relaxed mb-6"
            >
              An Intelligent Real-Time Road Hazard Reporting & Travel Safety Platform engineered for Android — featuring WorkManager background travel monitoring, community trust verification, and complete 100% localization across English, Hindi, and Gujarati.
            </motion.p>

            {/* Project Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row items-stretch justify-center gap-4 mt-12 w-full max-w-3xl mx-auto"
            >
              <a
                href={ROUTEGUARD_GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                className="flex-1 w-full px-6 py-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-void flex items-center justify-center gap-3 transition-all duration-300 font-bold tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:-translate-y-1"
              >
                <Github className="w-5 h-5 shrink-0" />
                <span>GitHub Repository</span>
              </a>
              {ROUTEGUARD_APK_DOWNLOAD_URL ? (
                <a
                  href={ROUTEGUARD_APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download APK"
                  className="flex-1 w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/40 text-white flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] font-semibold"
                >
                  <Download className="w-5 h-5 shrink-0 text-neon-cyan" />
                  <span>Download APK (Google Drive)</span>
                </a>
              ) : (
                <button
                  disabled
                  className="flex-1 w-full px-6 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white/40 cursor-not-allowed flex items-center justify-center gap-3 font-semibold"
                >
                  <Download className="w-5 h-5 shrink-0 text-white/30" />
                  <span>APK Release Coming Soon</span>
                </button>
              )}
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
                RouteGuard was engineered as a crowd-sourced road safety intelligence application designed to empower drivers with real-time hazard notifications, traffic alerts, and police checking updates. Built natively in Java for Android, it pairs lightweight GIS map rendering via OpenStreetMap (OsmDroid) with high-efficiency Firebase Firestore sync.
              </p>
              <p>
                A core highlight of RouteGuard is its <strong>Travel Mode engine</strong>, which leverages Android WorkManager to monitor user position in the background for 3-hour windows and trigger high-priority push alerts whenever the driver approaches an active hazard. It incorporates a community-driven Trust & Verification Engine that calculates live report reliability, upvotes, downvotes, and status confirmations ("Still Exists" vs "Not Found").
              </p>
              <p>
                RouteGuard is built for regional accessibility with <strong>100% complete localization</strong> in English, Hindi, and Gujarati. Locale switching is seamless, updating the entire UI, dialogs, toasts, bottom sheets, and status badges dynamically using Android's AppCompatDelegate architecture.
              </p>
            </div>
          </section>

          {/* Project Statistics */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'WorkManager Alerts', icon: Bell },
              { label: 'Trust Score Engine', icon: ThumbsUp },
              { label: '3 Languages (En/Hi/Gu)', icon: Languages },
              { label: 'OpenStreetMap GIS', icon: MapPin }
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <p className="font-display text-sm font-bold text-white group-hover:text-neon-cyan transition-colors">{screen.title}</p>
                    </div>
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
                { icon: MapPin, title: 'Real-Time Hazard Mapping', desc: 'Live map display for Police Checking, Heavy Traffic, Construction, Water Logging, and Accidents.' },
                { icon: Bell, title: 'Travel Mode Monitoring', desc: '3-hour background location tracking and proximity notifications powered by WorkManager.' },
                { icon: ThumbsUp, title: 'Trust & Verification Engine', desc: 'Community score calculation, upvotes, downvotes, and status verification.' },
                { icon: Languages, title: '3-Language Localization', desc: '100% full localization in English, Hindi, and Gujarati with instant language switching.' },
                { icon: AlertTriangle, title: 'Smart Duplicate Prevention', desc: 'Distance and time-based duplicate hazard alerts preventing repetitive reporting.' },
                { icon: CheckCircle2, title: 'Confirmation System', desc: 'Users confirm if hazards still exist or have cleared, dynamically updating report status.' },
                { icon: Shield, title: 'User Reputation & Levels', desc: 'Trust level progression, risk behavior assessment, and verified reporter badges.' },
                { icon: Lock, title: 'Firebase Infrastructure', desc: 'Firestore real-time snapshot listeners, Firebase Auth, and Storage photo pipelines.' }
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
                  title: 'Android & Core',
                  icon: Smartphone,
                  techs: ['Java', 'Android SDK', 'Material Design 3', 'XML Layouts']
                },
                {
                  title: 'Backend & Cloud',
                  icon: Database,
                  techs: ['Firebase Auth', 'Cloud Firestore', 'Firebase Storage']
                },
                {
                  title: 'Background & GIS',
                  icon: Radio,
                  techs: ['WorkManager', 'OsmDroid (OpenStreetMap)', 'FusedLocationProvider', 'Geocoding']
                },
                {
                  title: 'Architecture',
                  icon: Layers,
                  techs: ['Manager Pattern', 'Snapshot Listeners', 'AppCompatDelegate Locales', 'Repository Pattern']
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
                RouteGuard utilizes a decoupled Manager/Helper architecture (including <code>TravelModeManager</code>, <code>UserLocationManager</code>, <code>ConfirmationManager</code>, <code>VotingManager</code>, and <code>TrustManager</code>). This keeps Android Activities and Fragments lightweight while centralizing database operations, WorkManager tasks, and notification triggers.
              </p>
            </section>

            <section className="glass-card p-8 md:p-10">
              <h2 className="text-2xl font-display font-bold mb-6 text-white flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-neon-magenta" />
                Challenges & Solutions
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                <strong className="text-white/90">Challenge:</strong> Running background location proximity alerts during Travel Mode without causing excessive battery drain or triggering redundant notifications.
              </p>
              <p className="text-white/60 leading-relaxed">
                <strong className="text-white/90">Solution:</strong> Implemented a WorkManager periodic task paired with a size-bounded report notification cache (capped at 100 entries) and distance calculations using Haversine formulas. This guarantees timely driver alerts while maintaining minimal memory footprint and zero duplicate notifications.
              </p>
            </section>
          </div>

          {/* Future Roadmap */}
          <section className="glass-card p-8 md:p-14 text-center">
            <h2 className="text-3xl font-display font-bold mb-6 text-white">
              Future Roadmap
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
              Development on RouteGuard is active. Future updates will incorporate AI computer vision hazard recognition, smart route planning, and expanded GIS layers.
            </p>
            <div className="inline-flex flex-wrap justify-center gap-4">
              {['AI Dashcam Hazard Recognition', 'Turn-by-Turn Safe Routing', 'Android Auto Companion', 'Weather Alert Overlay'].map((item, idx) => (
                <span key={idx} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/70">
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pt-10 pb-10 border-t border-white/10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50">
              Experience RouteGuard
            </h2>
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 w-full max-w-3xl mx-auto">
              <a
                href={ROUTEGUARD_GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                className="flex-1 w-full px-6 py-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-void flex items-center justify-center gap-3 transition-all duration-300 font-bold tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:-translate-y-1"
              >
                <Github className="w-5 h-5 shrink-0" />
                <span>GitHub Repository</span>
              </a>
              {ROUTEGUARD_APK_DOWNLOAD_URL ? (
                <a
                  href={ROUTEGUARD_APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download APK"
                  className="flex-1 w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/40 text-white flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] font-semibold"
                >
                  <Download className="w-5 h-5 shrink-0 text-neon-cyan" />
                  <span>Download APK (Google Drive)</span>
                </a>
              ) : (
                <button
                  disabled
                  className="flex-1 w-full px-6 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white/40 cursor-not-allowed flex items-center justify-center gap-3 font-semibold"
                >
                  <Download className="w-5 h-5 shrink-0 text-white/30" />
                  <span>APK Release Coming Soon</span>
                </button>
              )}
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
