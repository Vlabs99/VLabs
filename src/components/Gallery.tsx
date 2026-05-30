import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { developer, vchatGallery } from '../data/content'
import { SectionHeader } from './SectionHeader'

export function Gallery() {
  const ref = useScrollReveal<HTMLElement>()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section
      id="gallery"
      ref={ref}
      className="section-padding relative overflow-hidden border-y border-white/[0.04]"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-violet/[0.04] via-transparent to-neon-cyan/[0.04]" />

      {/* Cyber grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Ambient glows */}
      <motion.div
        animate={{
          opacity: [0.18, 0.4, 0.18],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neon-cyan/5 blur-[160px]"
      />

      <motion.div
        animate={{
          opacity: [0.16, 0.35, 0.16],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-neon-violet/5 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Gallery"
          title="Product Showcase"
          subtitle={`Realtime interfaces, messaging flows, modern UI systems, and production-style screens engineered inside ${developer.brand}.`}
          align="center"
        />

        {/* Showcase grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vchatGallery.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/[0.06] bg-white/[0.03] shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            >
              {/* Card ambient glow */}
              <motion.div
                animate={{
                  opacity: [0.12, 0.28, 0.12],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.10),transparent_40%)]"
              />

              {/* Image wrapper */}
              <div className="relative z-10 p-4">
                <div className="relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-black/40">
                  {/* Shine effect */}
                  <motion.div
                    animate={{
                      x: ['-120%', '120%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="pointer-events-none absolute inset-y-0 z-20 w-1/3 rotate-12 bg-white/10 blur-xl"
                  />

                  <img
                    src={item.image}
                    alt={item.title}
                    className="mx-auto max-h-[720px] w-auto object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/95 via-black/55 to-transparent p-5 pt-20">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-white/55">
                          {item.description}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedImage(item.image)}
                        className="rounded-xl border border-white/10 bg-black/40 p-3 text-white/70 backdrop-blur transition-all duration-300 hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-[0_0_25px_rgba(0,240,255,0.18)]"
                        aria-label={`Expand ${item.title}`}
                      >
                        <Maximize2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-auto bg-black/92 p-4 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Background glow */}
            <motion.div
              animate={{
                opacity: [0.18, 0.35, 0.18],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute h-[600px] w-[600px] rounded-full bg-neon-cyan/10 blur-[180px]"
            />

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-[110] rounded-full border border-white/10 bg-black/40 p-3 text-white transition-all duration-300 hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-[0_0_25px_rgba(0,240,255,0.18)]"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.img
              src={selectedImage}
              alt="Expanded screenshot"
              className="relative z-10 max-h-[95vh] max-w-full rounded-[28px] border border-white/[0.08] shadow-[0_30px_100px_rgba(0,0,0,0.6)] object-contain"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              transition={{
                type: 'spring',
                damping: 18,
                stiffness: 120,
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}