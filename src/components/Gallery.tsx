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
    <section id="gallery" ref={ref} className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Gallery"
          title="VChat in Action"
          subtitle={`Real screenshots from ${developer.brand} showcasing realtime messaging, groups, profiles, and Firebase-powered communication.`}
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vchatGallery.map((item, i) => (
            <motion.div
              key={item.title}
              className="animate-in-view glow-border group relative overflow-hidden rounded-2xl"
              style={{ transitionDelay: `${i * 80}ms` }}
              whileHover={{ y: -6 }}
            >
              <div className="glass-card relative overflow-hidden bg-black p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mx-auto max-h-[700px] w-auto rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-16">
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/60">
                      {item.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedImage(item.image)}
                    className="rounded-lg border border-white/10 bg-black/40 p-2 text-white/70 backdrop-blur transition hover:text-neon-cyan"
                    aria-label={`Expand ${item.title}`}
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-auto bg-black/90 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-[110] rounded-full border border-white/10 bg-black/40 p-3 text-white transition hover:text-neon-cyan"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.img
              src={selectedImage}
              alt="Expanded screenshot"
              className="max-h-[95vh] max-w-full rounded-2xl object-contain"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}