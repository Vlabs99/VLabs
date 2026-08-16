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
  AlertTriangle,
  ThumbsUp,
  Radio,
  Lock,
  Eye,
  Compass,
  FileText,
  HelpCircle,
  Lightbulb,
  Clock,
  Filter,
  Cpu,
  Workflow,
  TrendingUp,
  BarChart3,
  RefreshCw,
  Award,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTEGUARD_APK_DOWNLOAD_URL, ROUTEGUARD_GITHUB_URL } from '../../data/content'

const screenshots = [
  { title: "Home Map & Search", image: `${import.meta.env.BASE_URL}screenshots/routeguard-home.png` },
  { title: "New Hazard Report", image: `${import.meta.env.BASE_URL}screenshots/routeguard-report.png` },
  { title: "Report Details & Verification", image: `${import.meta.env.BASE_URL}screenshots/routeguard-details.png` },
  { title: "Notifications Center", image: `${import.meta.env.BASE_URL}screenshots/routeguard-notifications.png` },
  { title: "User Profile & Trust Score", image: `${import.meta.env.BASE_URL}screenshots/routeguard-profile.png` },
  { title: "My Reports History", image: `${import.meta.env.BASE_URL}screenshots/routeguard-my-reports.png` },
];

const metrics = [
  { label: 'Platform', value: 'Android Native', detail: 'Java + Material Design 3', icon: Smartphone },
  { label: 'Backend', value: 'Firebase', detail: 'Firestore + Auth + Storage', icon: Database },
  { label: 'Maps Engine', value: 'OpenStreetMap', detail: 'OsmDroid GIS Rendering', icon: MapPin },
  { label: 'Project Status', value: 'In Development', detail: 'v1.0 Case Study', icon: Shield },
];

const keyFeatures = [
  {
    icon: Radio,
    title: 'Real-Time Community Reporting',
    desc: 'Instant crowdsourced hazard reporting for police checkpoints, roadblocks, accidents, and road damage with immediate Firestore sync.',
  },
  {
    icon: MapPin,
    title: 'Interactive OpenStreetMap Integration',
    desc: 'Smooth vector map rendering via OsmDroid with custom markers, radius filters, and interactive location search.',
  },
  {
    icon: AlertTriangle,
    title: 'Police Checkpoint Alerts',
    desc: 'Live community-reported police checking locations helping drivers stay informed and compliant on their routes.',
  },
  {
    icon: Compass,
    title: 'Roadblock & Traffic Updates',
    desc: 'Categorized alerts for heavy traffic jams, construction zones, water logging, and road closures.',
  },
  {
    icon: Clock,
    title: 'Temporary Reports & Auto Expiry',
    desc: 'Reports automatically expire after a configurable timeframe to prevent outdated warnings from cluttering the map.',
  },
  {
    icon: ThumbsUp,
    title: 'Community Verification & Trust System',
    desc: 'Upvoting, downvoting, and "Still Exists" status confirmations calculate a live credibility trust score for each report.',
  },
  {
    icon: Shield,
    title: 'Duplicate Report Prevention',
    desc: 'Smart geo-fencing algorithms detect existing nearby reports within proximity thresholds to eliminate duplicate submissions.',
  },
  {
    icon: Bell,
    title: 'Travel Mode Notifications',
    desc: 'Android WorkManager background service monitors trip location for 3 hours and delivers high-priority proximity alerts.',
  },
  {
    icon: Eye,
    title: 'Guest Mode for Map Viewing',
    desc: 'Browse live road hazards and map updates instantly without needing to log in or create an account.',
  },
  {
    icon: Filter,
    title: 'Category-Based Filtering',
    desc: 'Filter map markers by specific hazard types (Police, Accident, Traffic, Construction, Damage) for clear navigation.',
  },
  {
    icon: Languages,
    title: '100% Multi-Language Localization',
    desc: 'Full localization across English, Hindi, and Gujarati with instant dynamic language switching via AppCompatDelegate.',
  },
];

const milestones = [
  "Initial Android project architecture (Manager/Helper pattern)",
  "OpenStreetMap (OsmDroid) interactive map rendering",
  "Firestore realtime hazard report snapshot listeners",
  "Travel Mode background trip monitoring via WorkManager",
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

        <div className="space-y-20 max-w-5xl mx-auto">

          {/* Hero Section */}
          <section className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/[0.04] border border-white/10 mb-8 shadow-glow overflow-hidden p-3"
            >
              <img src={`${import.meta.env.BASE_URL}screenshots/routeguard-logo.png`} alt="RouteGuard Logo" className="h-full w-full object-contain" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 mb-4"
            >
              RouteGuard
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="text-lg md:text-xl font-mono text-neon-cyan/90 font-medium mb-8"
            >
              Community-Driven Road Awareness Platform — Software Engineering Case Study
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md mb-10 shadow-[0_0_30px_rgba(0,240,255,0.05)]"
            >
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
                <span className="text-amber-400 font-bold tracking-wide">In Development</span>
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
              RouteGuard is a community-powered platform that helps people stay informed about road conditions in real time. Users can report traffic police checkpoints, roadblocks, accidents, road damage, construction work, and other road events. Reports are verified by the community and automatically expire after a configurable time to keep information accurate and relevant.
            </motion.p>

            {/* Action Buttons Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mt-10 w-full max-w-3xl mx-auto"
            >
              <a
                href={ROUTEGUARD_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="flex-1 w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/40 text-white flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] font-semibold"
              >
                <Github className="w-5 h-5 shrink-0" />
                <span>GitHub Repository</span>
              </a>

              {ROUTEGUARD_APK_DOWNLOAD_URL ? (
                <a
                  href={ROUTEGUARD_APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download RouteGuard APK"
                  className="flex-1 w-full px-6 py-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-void flex items-center justify-center gap-3 transition-all duration-300 font-bold tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 shrink-0" />
                  <span>Download APK</span>
                </a>
              ) : (
                <button
                  disabled
                  className="flex-1 w-full px-6 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white/40 cursor-not-allowed flex items-center justify-center gap-3 font-semibold"
                  title="APK Release Coming Soon"
                >
                  <Lock className="w-5 h-5 shrink-0 text-white/30" />
                  <span>APK Release Coming Soon</span>
                </button>
              )}

              <Link
                to="/projects/routeguard/privacy"
                className="flex-1 w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/40 text-white flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] font-semibold"
              >
                <FileText className="w-5 h-5 shrink-0 text-neon-cyan" />
                <span>Privacy Policy</span>
              </Link>
            </motion.div>
          </section>

          {/* Metric Summary Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, idx) => (
              <div key={idx} className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:border-neon-cyan/50 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-white/[0.04] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-neon-cyan/30 group-hover:bg-neon-cyan/10">
                  <metric.icon className="h-6 w-6 text-neon-cyan group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-white/50 mb-1">{metric.label}</div>
                <div className="text-lg font-display font-bold text-white group-hover:text-neon-cyan transition-colors">{metric.value}</div>
                <div className="text-xs text-white/40 mt-1">{metric.detail}</div>
              </div>
            ))}
          </section>

          {/* Project Vision, Real-world Problem & Solution */}
          <section className="space-y-8">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl font-display font-bold mb-6 text-white flex items-center gap-4">
                <Zap className="h-8 w-8 text-neon-violet" />
                Project Vision
              </h2>
              <div className="prose prose-invert max-w-none text-white/70 text-lg leading-relaxed space-y-4">
                <p>
                  RouteGuard was built to transform community road awareness from isolated reports into an intelligent, decentralized safety intelligence network. The core vision is to combine zero-cost open GIS mapping with crowdsourced verification to give drivers real-time visibility into temporary road hazards without relying on proprietary tracking services.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-display font-bold mb-4 text-white flex items-center gap-3">
                  <HelpCircle className="h-6 w-6 text-neon-cyan" />
                  Real-World Problem
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Traditional navigation platforms excel at static turn-by-turn routing but routinely miss temporary, hyper-local road incidents—such as sudden police checking points, unannounced construction, flash water logging, or fresh accidents. Static map layers lack real-time crowdsourced verification, causing commuters unexpected delays and safety risks.
                </p>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-display font-bold mb-4 text-white flex items-center gap-3">
                  <Lightbulb className="h-6 w-6 text-amber-400" />
                  My Solution
                </h3>
                <p className="text-white/60 leading-relaxed">
                  RouteGuard delivers a native Android solution pairing OsmDroid vector map rendering with Cloud Firestore real-time sync, WorkManager background travel mode monitoring, and automated report expiration logic. Drivers receive instant proximity alerts for verified active hazards while maintaining total data privacy.
                </p>
              </div>
            </div>
          </section>

          {/* System Architecture Overview */}
          <section className="glass-card p-8 md:p-12">
            <h2 className="text-3xl font-display font-bold mb-8 text-white flex items-center gap-4">
              <Layers className="h-8 w-8 text-neon-cyan" />
              System Architecture Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-neon-cyan/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Presentation Layer</h3>
                </div>
                <ul className="text-sm text-white/60 space-y-2 font-mono">
                  <li>• Material Design 3 UI</li>
                  <li>• Custom OsmDroid Overlay</li>
                  <li>• Dynamic Locale Manager</li>
                  <li>• Light / Dark Themes</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-neon-cyan/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-neon-violet/10 border border-neon-violet/20 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-neon-violet" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Business Logic Layer</h3>
                </div>
                <ul className="text-sm text-white/60 space-y-2 font-mono">
                  <li>• TravelModeManager</li>
                  <li>• TrustScoreEngine</li>
                  <li>• WorkManager Service</li>
                  <li>• GeoHaversineFilter</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-neon-cyan/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Database className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Cloud Infrastructure</h3>
                </div>
                <ul className="text-sm text-white/60 space-y-2 font-mono">
                  <li>• Cloud Firestore Sync</li>
                  <li>• Firebase Auth Boundary</li>
                  <li>• Firebase Storage Photos</li>
                  <li>• OsmDroid GIS Tile Server</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Firebase Database Design & OpenStreetMap Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="glass-card p-8">
              <h2 className="text-2xl font-display font-bold mb-6 text-white flex items-center gap-3">
                <Database className="h-6 w-6 text-neon-violet" />
                Firebase Database Schema
              </h2>
              <div className="space-y-4 text-sm font-mono">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-neon-cyan font-bold mb-1">reports/{'{reportId}'}</div>
                  <div className="text-white/60">category, geoPoint, trustScore, createdAt, expiresAt, status, reporterUid, photoUrl</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-neon-violet font-bold mb-1">confirmations/{'{confirmId}'}</div>
                  <div className="text-white/60">reportId, userId, type ("STILL_EXISTS" | "CLEARED"), timestamp</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-emerald-400 font-bold mb-1">users/{'{userId}'}</div>
                  <div className="text-white/60">trustLevel, reportsSubmitted, verifiedVotesCount, reputationScore</div>
                </div>
              </div>
            </section>

            <section className="glass-card p-8">
              <h2 className="text-2xl font-display font-bold mb-6 text-white flex items-center gap-3">
                <MapPin className="h-6 w-6 text-neon-cyan" />
                OpenStreetMap GIS Integration
              </h2>
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>
                  Integrated OsmDroid for zero-cost, hardware-accelerated GIS vector tile rendering. Custom bitmap markers dynamically represent report categories (Police Checking, Heavy Traffic, Construction, Water Logging, Accident).
                </p>
                <p>
                  Features interactive marker tap listeners displaying live report details, time elapsed, distance from current location, community trust rating, and direction guidance. Includes offline tile caching to maintain map usability without active network connectivity.
                </p>
              </div>
            </section>
          </div>

          {/* Community Verification & Trust Score Logic */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-display font-bold mb-6 text-white flex items-center gap-3">
                <Workflow className="h-6 w-6 text-neon-cyan" />
                Community Verification Workflow
              </h2>
              <ol className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-mono font-bold text-xs">1</span>
                  <span><strong>Submission:</strong> User submits a geo-tagged hazard report with optional photo evidence.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-mono font-bold text-xs">2</span>
                  <span><strong>Live Sync:</strong> Firestore broadcasts new marker to all active drivers within the search radius.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-mono font-bold text-xs">3</span>
                  <span><strong>Verification:</strong> Passing commuters tap "Still Exists" or "Cleared" to cast verification votes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-mono font-bold text-xs">4</span>
                  <span><strong>Resolution:</strong> Reports that reach negative trust thresholds or exceed expiration TTL are automatically purged.</span>
                </li>
              </ol>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-2xl font-display font-bold mb-6 text-white flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-amber-400" />
                Trust Score Mathematical Logic
              </h2>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-4 font-mono text-xs text-neon-cyan">
                TrustScore = (Upvotes * 1.5) - (Downvotes * 2.0) + (ReporterLevel * 0.5) - TimeDecay
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Reports accumulate credibility based on positive confirmations weighted against user reputation levels. Negative votes carry higher weight to suppress spam quickly. Time decay reduces trust score exponentially over hours to prevent obsolete reports from lingering.
              </p>
            </div>
          </section>

          {/* Report Lifecycle Timeline */}
          <section className="glass-card p-8 md:p-12">
            <h2 className="text-3xl font-display font-bold mb-10 text-white flex items-center gap-4">
              <RefreshCw className="h-8 w-8 text-neon-magenta" />
              Report Lifecycle (Created → Verified → Expired)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 relative">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-4 font-bold font-mono">
                  01
                </div>
                <h3 className="font-bold text-white mb-2">1. Created</h3>
                <p className="text-xs text-white/50 leading-relaxed">Hazard report created with category, location coordinates, and TTL expiration timer.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 relative">
                <div className="w-12 h-12 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan flex items-center justify-center mx-auto mb-4 font-bold font-mono">
                  02
                </div>
                <h3 className="font-bold text-white mb-2">2. Verified</h3>
                <p className="text-xs text-white/50 leading-relaxed">Community confirmations validate hazard. Travel Mode broadcasts proximity alerts to approaching drivers.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 relative">
                <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto mb-4 font-bold font-mono">
                  03
                </div>
                <h3 className="font-bold text-white mb-2">3. Expired / Cleared</h3>
                <p className="text-xs text-white/50 leading-relaxed">TTL expires or "Cleared" votes threshold reached. Report marker automatically detached from live map.</p>
              </div>
            </div>
          </section>

          {/* Technical Challenges & Performance Optimizations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="glass-card p-8">
              <h2 className="text-2xl font-display font-bold mb-6 text-white flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-neon-cyan" />
                Technical Challenges & Solutions
              </h2>
              <div className="space-y-4 text-sm text-white/60">
                <p>
                  <strong className="text-white">Battery-Efficient Background Tracking:</strong> Running continuous GPS tracking drains battery. Solved using WorkManager 3-hour periodic trip monitoring paired with Haversine distance calculations and a capped 100-item notification cache.
                </p>
                <p>
                  <strong className="text-white">Duplicate Report Suppression:</strong> Multiple drivers reporting the same police check created marker clutter. Solved by pre-checking existing active reports within a 500-meter radius before allowing new submissions.
                </p>
              </div>
            </section>

            <section className="glass-card p-8">
              <h2 className="text-2xl font-display font-bold mb-6 text-white flex items-center gap-3">
                <Zap className="h-6 w-6 text-amber-400" />
                Performance Optimizations
              </h2>
              <div className="space-y-4 text-sm text-white/60">
                <p>
                  <strong className="text-white">Snapshot Listener Lifecycle Management:</strong> Real-time Firestore listeners automatically attach on screen entry and detach on <code>onStop()</code> to prevent memory leaks.
                </p>
                <p>
                  <strong className="text-white">Compressed Media Pipeline:</strong> Photos attached to hazard reports are compressed on-device before uploading to Firebase Storage, keeping data usage minimal for mobile network conditions.
                </p>
              </div>
            </section>
          </div>

          {/* Security Considerations & Scalability Plan */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="glass-card p-8">
              <h2 className="text-2xl font-display font-bold mb-6 text-white flex items-center gap-3">
                <Lock className="h-6 w-6 text-neon-violet" />
                Security Considerations
              </h2>
              <div className="space-y-4 text-sm text-white/60">
                <p>
                  <strong className="text-white">Firestore Security Boundaries:</strong> Strict security rules enforce user authentication on vote creation and prevent unauthorized report modifications or field tampering.
                </p>
                <p>
                  <strong className="text-white">Guest Mode Data Isolation:</strong> Read-only access for guest users ensures anonymous commuters can inspect live maps without writing data to cloud database collections.
                </p>
              </div>
            </section>

            <section className="glass-card p-8">
              <h2 className="text-2xl font-display font-bold mb-6 text-white flex items-center gap-3">
                <Award className="h-6 w-6 text-emerald-400" />
                Scalability Plan
              </h2>
              <div className="space-y-4 text-sm text-white/60">
                <p>
                  <strong className="text-white">Geohash Spatial Partitioning:</strong> Future scaling will index reports using Geohashes to partition Firestore spatial queries by grid cells for global city expansion.
                </p>
                <p>
                  <strong className="text-white">Automated TTL Cloud Functions:</strong> Background Cloud Functions to purge expired reports automatically, reducing client-side filtering load.
                </p>
              </div>
            </section>
          </div>

          {/* App Screenshots Gallery */}
          <section className="glass-card p-8 md:p-12">
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
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <p className="font-display text-sm font-bold text-white group-hover:text-neon-cyan transition-colors">{screen.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Highlights Grid */}
          <section>
            <h2 className="text-3xl font-display font-bold mb-10 text-center text-white">
              Feature Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((feature, idx) => (
                <div key={idx} className="glass-card p-6 flex flex-col items-start text-left group hover:-translate-y-1 hover:border-neon-cyan/50 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] transition-all duration-300 h-full">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/[0.04] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-neon-cyan/30 group-hover:bg-neon-cyan/10">
                    <feature.icon className="h-7 w-7 text-neon-cyan group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white/90 mb-3 group-hover:text-neon-cyan transition-colors">{feature.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
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
                  title: 'Architecture & i18n',
                  icon: Layers,
                  techs: ['Manager Pattern', 'Snapshot Listeners', 'AppCompatDelegate Locales', 'Haversine Geo-Filters']
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

          {/* Development Journey & Milestones */}
          <section className="glass-card p-8 md:p-12">
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

          {/* Future Roadmap & Lessons Learned */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="glass-card p-8">
              <h2 className="text-2xl font-display font-bold mb-6 text-white flex items-center gap-3">
                <Compass className="h-6 w-6 text-neon-cyan" />
                Development Roadmap
              </h2>
              <div className="inline-flex flex-wrap gap-2.5">
                {['AI Dashcam Hazard Recognition', 'Turn-by-Turn Safe Routing', 'Android Auto Companion', 'Weather Alert Overlay'].map((item, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-xs font-medium text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="glass-card p-8">
              <h2 className="text-2xl font-display font-bold mb-6 text-white flex items-center gap-3">
                <Lightbulb className="h-6 w-6 text-amber-400" />
                Lessons Learned
              </h2>
              <div className="space-y-3 text-sm text-white/60">
                <p>• Isolating Firestore listener registration inside Manager helpers makes mobile state lifecycle-safe.</p>
                <p>• Android WorkManager is highly reliable for scheduled proximity alerts when paired with bounded memory caches.</p>
                <p>• Multi-language localization audit early in development ensures seamless 100% string coverage across English, Hindi, and Gujarati.</p>
              </div>
            </section>
          </div>

          {/* Bottom CTA Section */}
          <section className="text-center pt-10 pb-10 border-t border-white/10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50">
              Explore RouteGuard
            </h2>
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 w-full max-w-3xl mx-auto">
              <a
                href={ROUTEGUARD_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="flex-1 w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/40 text-white flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] font-semibold"
              >
                <Github className="w-5 h-5 shrink-0" />
                <span>GitHub Repository</span>
              </a>

              {ROUTEGUARD_APK_DOWNLOAD_URL && (
                <a
                  href={ROUTEGUARD_APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download RouteGuard APK"
                  className="flex-1 w-full px-6 py-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-void flex items-center justify-center gap-3 transition-all duration-300 font-bold tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 shrink-0" />
                  <span>Download APK</span>
                </a>
              )}

              <Link
                to="/projects/routeguard/privacy"
                className="flex-1 w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/40 text-white flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] font-semibold"
              >
                <FileText className="w-5 h-5 shrink-0 text-neon-cyan" />
                <span>Privacy Policy</span>
              </Link>
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
