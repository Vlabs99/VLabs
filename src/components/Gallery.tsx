import { motion } from 'framer-motion'
import { Image, Play, Maximize2 } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { developer } from '../data/content'
import { SectionHeader } from './SectionHeader'

const placeholders = [
  { type: 'screenshot', label: 'Chat List & Friends', aspect: 'aspect-[9/16]' },
  { type: 'screenshot', label: '1:1 Conversation', aspect: 'aspect-[9/16]' },
  { type: 'screenshot', label: 'Group Chat', aspect: 'aspect-[9/16]' },
  { type: 'screenshot', label: 'Reply & Forward UI', aspect: 'aspect-[9/16]' },
  { type: 'video', label: 'VChat Demo Walkthrough', aspect: 'aspect-video' },
  { type: 'screenshot', label: 'Auth & Profile', aspect: 'aspect-[9/16]' },
]

export function Gallery() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="gallery" ref={ref} className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Gallery"
          title="VChat in Action"
          subtitle={`Screenshots and demo media from ${developer.name}'s realtime messenger — replace placeholders with your actual app captures.`}
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.label}
              className={`animate-in-view glow-border group relative overflow-hidden rounded-2xl ${
                item.type === 'video' ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
              whileHover={{ y: -6 }}
            >
              <div
                className={`glass-card flex ${item.aspect} w-full items-center justify-center bg-gradient-to-br from-surface/90 to-abyss`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,240,255,0.07),transparent_65%)]" />

                {item.type === 'video' ? (
                  <div className="relative z-10 flex flex-col items-center gap-4 p-8">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-glow">
                      <Play className="h-10 w-10 fill-neon-cyan text-neon-cyan" />
                    </div>
                    <span className="font-mono text-xs text-white/35">
                      Add demo.mp4 to /public/videos/
                    </span>
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col items-center gap-3 p-6">
                    <Image className="h-11 w-11 text-white/15" />
                    <span className="text-center text-xs text-white/30">
                      /public/screenshots/
                    </span>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between bg-gradient-to-t from-void via-void/80 to-transparent p-4 pt-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-medium text-white/80">{item.label}</span>
                  <button
                    type="button"
                    className="rounded-lg border border-white/10 p-2 text-white/50 hover:text-neon-cyan"
                    aria-label={`Expand ${item.label}`}
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="animate-in-view mt-10 text-center font-mono text-[11px] text-white/30">
          Drop assets into{' '}
          <span className="text-neon-cyan">public/screenshots/</span> and{' '}
          <span className="text-neon-cyan">public/videos/</span>
        </p>
      </div>
    </section>
  )
}
