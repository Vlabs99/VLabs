import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, Eye, Server, Cpu, Database, Bell, Camera, MapPin, CheckCircle2, UserCheck, HelpCircle, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function RouteGuardPrivacy() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 bg-void text-white">
      <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Link */}
        <Link to="/projects/routeguard" className="inline-flex items-center gap-2 text-white/50 hover:text-neon-cyan transition-colors mb-12 group">
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to RouteGuard Project</span>
        </Link>

        {/* Header Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Shield className="w-48 h-48 text-neon-cyan" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-mono mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>COMMUNITY SAFETY & LEGAL POLICY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            RouteGuard Version 1.0 — Transparent data protection, privacy guidelines, and third-party service disclosures for community road safety.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-white/40 border-t border-white/10 pt-6">
            <div><span className="text-neon-cyan">Effective Date:</span> August 1, 2026</div>
            <div><span className="text-neon-cyan">App Name:</span> RouteGuard</div>
            <div><span className="text-neon-cyan">Developer:</span> VLabs</div>
          </div>
        </motion.div>

        {/* Policy Content Sections */}
        <div className="space-y-10">

          {/* Section 1 */}
          <section className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-4 text-neon-cyan">
              <Eye className="w-6 h-6" />
              <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            </div>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base">
              Welcome to <strong>RouteGuard</strong>, a community-driven road safety and hazard awareness application. RouteGuard helps drivers and commuters stay informed about real-time road conditions, hazards, traffic checkpoints, and community reports before and during travel.
            </p>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base mt-3">
              This Privacy Policy explains how we collect, use, store, and protect your information when you use the RouteGuard mobile application. We are committed to protecting your personal privacy and maintaining transparency regarding our data practices in compliance with Google Play Developer Policies and applicable data protection regulations.
            </p>
          </section>

          {/* Section 2 */}
          <section className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-4 text-neon-cyan">
              <Database className="w-6 h-6" />
              <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            </div>
            <div className="space-y-4 text-white/70 text-sm sm:text-base">
              <div>
                <h3 className="text-white font-semibold mb-1">A. Information You Provide Voluntarily</h3>
                <ul className="list-disc list-inside space-y-1 text-white/60 ml-2">
                  <li><strong className="text-white/80">Account Information:</strong> When you register an account via Firebase Authentication, we collect your email address, display name, and password (encrypted by Firebase).</li>
                  <li><strong className="text-white/80">Hazard Reports:</strong> Category type (e.g., Police Checking, Heavy Traffic, Accident, Road Construction, Water Logging), description, and optional photo attachments.</li>
                  <li><strong className="text-white/80">Comments:</strong> Text comments submitted to report detail threads.</li>
                  <li><strong className="text-white/80">Votes & Confirmations:</strong> Upvotes, downvotes, and status confirmations ("Still Exists" or "Not Found").</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-4">
                <h3 className="text-white font-semibold mb-1">B. Information Collected Automatically</h3>
                <ul className="list-disc list-inside space-y-1 text-white/60 ml-2">
                  <li><strong className="text-white/80">Precise & Approximate Location:</strong> Geographic coordinates (latitude and longitude) to display nearby road hazards on the map, place road reports accurately, calculate distances, and send proximity alerts during travel mode.</li>
                  <li><strong className="text-white/80">Device & Usage Data (Firebase Analytics):</strong> Anonymous technical metrics such as device model, OS version, session duration, app opens, screen views, and engagement data.</li>
                  <li><strong className="text-white/80">Crash Data (Firebase Crashlytics):</strong> Unhandled application crash reports, stack traces, system logs, and device state at the time of a crash to diagnose software bugs.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-4 text-neon-cyan">
              <Cpu className="w-6 h-6" />
              <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/70">
              <li className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                <span>Displaying real-time hazard markers and proximity alerts.</span>
              </li>
              <li className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                <span>Authenticating user sign-in and protecting accounts.</span>
              </li>
              <li className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                <span>Calculating report verification statuses based on community votes.</span>
              </li>
              <li className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                <span>Hosting user-submitted photo evidence for road reports.</span>
              </li>
            </ul>
            <p className="mt-4 text-xs font-mono text-neon-cyan">
              * RouteGuard DOES NOT sell, rent, or trade your personal or location data to third parties or advertisers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-4 text-neon-cyan">
              <MapPin className="w-6 h-6" />
              <h2 className="text-xl font-bold text-white">4. Hardware Permissions Used</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 font-semibold text-white mb-1">
                  <MapPin className="w-4 h-4 text-neon-cyan" />
                  <span>Location</span>
                </div>
                <p className="text-xs text-white/60">Display map position, place report coordinates, and compute proximity alert distances.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 font-semibold text-white mb-1">
                  <Camera className="w-4 h-4 text-neon-cyan" />
                  <span>Camera</span>
                </div>
                <p className="text-xs text-white/60">Optional permission to capture photos as evidence for road hazard reports.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 font-semibold text-white mb-1">
                  <Bell className="w-4 h-4 text-neon-cyan" />
                  <span>Notifications</span>
                </div>
                <p className="text-xs text-white/60">Optional permission to receive nearby travel alerts and report updates.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 font-semibold text-white mb-1">
                  <Server className="w-4 h-4 text-neon-cyan" />
                  <span>Internet</span>
                </div>
                <p className="text-xs text-white/60">Synchronize reports, votes, comments, and images with cloud services.</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-4 text-neon-cyan">
              <Server className="w-6 h-6" />
              <h2 className="text-xl font-bold text-white">5. Third-Party Services & Data Processors</h2>
            </div>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="p-3 rounded-lg bg-white/5 border border-white/5">
                <strong className="text-white">Google Firebase (Google LLC):</strong> Authentication, Cloud Firestore database, Firebase Analytics, and Firebase Crashlytics bug reporting.
              </li>
              <li className="p-3 rounded-lg bg-white/5 border border-white/5">
                <strong className="text-white">Cloudinary (Cloudinary Ltd.):</strong> Secure hosting and delivery of user-uploaded report photos.
              </li>
              <li className="p-3 rounded-lg bg-white/5 border border-white/5">
                <strong className="text-white">OpenStreetMap & Nominatim:</strong> Open-source map tile rendering and reverse geocoding. No personal identifiers are transmitted.
              </li>
            </ul>
          </section>

          {/* Section 6 & 7 */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-3 text-neon-cyan">
                <Lock className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">6. Security</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Data in transit is encrypted via TLS/HTTPS, and data at rest is protected by Google Cloud infrastructure and strict Firestore Security Rules. Passwords are cryptographically hashed by Firebase Authentication.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-3 text-neon-cyan">
                <UserCheck className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">7. User Rights & Deletion</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Users can delete their own reports and comments directly in the app. For full account or data deletion requests, contact us at the support email below.
              </p>
            </div>
          </section>

          {/* Section 8 & 9 & 10 */}
          <section className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-4 text-neon-cyan">
              <HelpCircle className="w-6 h-6" />
              <h2 className="text-xl font-bold text-white">8. Children's Privacy & Policy Updates</h2>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              RouteGuard is intended for drivers and general audiences and does not knowingly collect personal information from children under 13. Updates to this policy will be published with a revised effective date.
            </p>

            <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-white font-semibold text-sm">Have Questions?</div>
                <div className="text-xs text-white/50">Contact VLabs developer support</div>
              </div>
              <a
                href="mailto:vlabs.digital@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/20 transition-colors text-xs font-mono"
              >
                <Mail className="w-4 h-4" />
                <span>vlabs.digital@gmail.com</span>
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
