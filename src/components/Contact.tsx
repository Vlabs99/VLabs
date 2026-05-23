import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Download, GraduationCap, MessageSquare } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { developer, APK_DOWNLOAD_URL } from '../data/content'
import { SectionHeader } from './SectionHeader'
import { SocialButtons } from './ui/SocialButtons'
import { ProfileAvatar } from './ui/ProfileAvatar'

export function Contact() {
  const ref = useScrollReveal<HTMLElement>()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <motion.div
        className="absolute left-1/2 top-0 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-neon-cyan/8 blur-[100px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Contact"
          title="Let's Build Together"
          subtitle="Reach out for Android collaborations, VChat demos, internships, or conversations about realtime Firebase architecture."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Profile + social cards */}
          <div className="space-y-6 lg:col-span-5">
            <motion.div
              className="animate-in-view glow-border glass-card overflow-hidden rounded-3xl"
              whileHover={{ boxShadow: '0 0 60px rgba(0, 240, 255, 0.08)' }}
            >
              <div className="relative bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-violet/10 px-8 pb-8 pt-10">
                <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-widest text-neon-cyan/50">
                  {developer.brand}
                </div>
                <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                  <ProfileAvatar size="compact" />
                  <div className="text-center sm:text-left">
                    <h3 className="font-display text-xl font-bold">{developer.name}</h3>
                    <p className="mt-1 text-sm text-neon-cyan/80">{developer.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-white/50">
                  Passionate about advanced production-style applications across Android,
                  AI, and realtime communication.
                </p>
              </div>

              <div className="space-y-3 border-t border-white/[0.06] px-6 py-5">
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <GraduationCap className="h-4 w-4 text-neon-violet" />
                  {developer.education}
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <MapPin className="h-4 w-4 text-neon-cyan" />
                  {developer.location} · Open to remote
                </div>
              </div>
            </motion.div>

            <div className="animate-in-view">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
                Connect — click to open
              </p>
              <SocialButtons variant="card" />
            </div>

            <motion.a
              href={APK_DOWNLOAD_URL}
              download
              className="animate-in-view btn-primary flex w-full text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-4 w-4" />
              Download VChat APK
            </motion.a>
          </div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="animate-in-view glow-border glass-card relative rounded-3xl p-8 sm:p-10 lg:col-span-7"
            whileHover={{ boxShadow: '0 0 50px rgba(139, 92, 246, 0.06)' }}
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-violet/15">
                <MessageSquare className="h-5 w-5 text-neon-violet" />
              </div>
              <div>
                <p className="font-display font-semibold">Send a Message</p>
                <p className="font-mono text-[10px] text-white/35">
                  Or email directly at {developer.email}
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="label-field">
                  Name
                </label>
                <input id="name" name="name" type="text" required placeholder="Your name" className="input-field" />
              </div>
              <div>
                <label htmlFor="email" className="label-field">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="input-field"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="subject" className="label-field">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Collaboration · Internship · VChat"
                className="input-field"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="label-field">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="input-field resize-none"
              />
            </div>
            <motion.button
              type="submit"
              className="btn-primary mt-8 w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? (
                'Message Sent ✓'
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
