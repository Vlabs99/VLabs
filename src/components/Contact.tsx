import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  MapPin,
  Download,
  GraduationCap,
  MessageSquare,
  Loader2,
} from 'lucide-react'

import { useScrollReveal } from '../hooks/useScrollReveal'
import { developer } from '../data/content'
import { SectionHeader } from './SectionHeader'
import { SocialButtons } from './ui/SocialButtons'
import { ProfileAvatar } from './ui/ProfileAvatar'

export function Contact() {
  const ref = useScrollReveal<HTMLElement>()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  })

  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()

  setSending(true)
  setError(false)

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '62f8c3ca-cc92-40c3-8baf-21ae221dc713',
        name: formData.name,
        email: formData.email,
        subject: formData.title,
        message: formData.message,
      }),
    })

    const data = await response.json()
    console.log(data)
alert(JSON.stringify(data))

    console.log('WEB3FORMS:', data)

    if (data.success) {
      setSubmitted(true)

      setFormData({
        name: '',
        email: '',
        title: '',
        message: '',
      })

      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } else {
      setError(true)
    }
  } catch (err) {
    console.error('FORM ERROR:', err)
    setError(true)
  } finally {
    setSending(false)
  }
}

  return (
    <section
      id="contact"
      ref={ref}
      className="section-divider section-padding relative overflow-hidden"
    >
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
          subtitle="Reach out for AI systems, Android applications, websites, realtime infrastructure, automation tools, or collaboration opportunities."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-6 lg:col-span-5">
            <motion.div
              className="animate-in-view glow-border glass-card overflow-hidden rounded-3xl"
              whileHover={{
                boxShadow: '0 0 60px rgba(0, 240, 255, 0.08)',
              }}
            >
              <div className="relative bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-violet/10 px-8 pb-8 pt-10">
                <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-widest text-neon-cyan/50">
                  {developer.brand}
                </div>

                <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                  <ProfileAvatar size="compact" />

                  <div className="text-center sm:text-left">
                    <h3 className="font-display text-xl font-bold">
                      {developer.name}
                    </h3>

                    <p className="mt-1 text-sm text-neon-cyan/80">
                      {developer.role}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-white/50">
                  Building intelligent digital systems using modern AI workflows,
                  scalable engineering architecture, and production-grade design.
                </p>
              </div>

              <div className="space-y-3 border-t border-white/[0.06] px-6 py-5">
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <GraduationCap className="h-4 w-4 text-neon-violet" />
                  {developer.education}
                </div>

                <div className="flex items-center gap-3 text-sm text-white/50">
                  <MapPin className="h-4 w-4 text-neon-cyan" />
                  {developer.location} · Open to remote work
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
              href="https://github.com/Vlabs99/Vchat/releases/download/v1.0/app-debug.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-in-view btn-primary flex w-full text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-4 w-4" />
              Download VChat APK
            </motion.a>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="animate-in-view glow-border glass-card relative rounded-3xl p-8 sm:p-10 lg:col-span-7"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-violet/15">
                <MessageSquare className="h-5 w-5 text-neon-violet" />
              </div>

              <div>
                <p className="font-display font-semibold">
                  Send a Message
                </p>

                <p className="font-mono text-[10px] text-white/35">
                  Or email directly at {developer.email}
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="input-field"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mt-6">
              <input
                name="title"
                type="text"
                required
                placeholder="Project • Collaboration • Hiring"
                className="input-field"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="mt-6">
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your idea, product, or opportunity..."
                className="input-field resize-none"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-2xl border border-neon-cyan/20 bg-neon-cyan/10 px-5 py-4 text-sm text-neon-cyan"
              >
                Message sent successfully 🚀
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm text-red-400"
              >
                Something went wrong. Please try again.
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={sending}
              className="btn-primary mt-8 w-full sm:w-auto disabled:opacity-60"
            >
              {sending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
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