import { memo } from 'react'
import { motion } from 'framer-motion'
import { Download, Shield, ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { latestUpdate } from '../data/latestUpdate'

export const LatestUpdate = memo(function LatestUpdate() {
  const navigate = useNavigate()

  if (!latestUpdate) return null

  return (
    <div className="relative z-30 w-full pt-24 px-4 sm:px-6 lg:p-0 lg:absolute lg:top-24 xl:top-28 lg:right-6 xl:right-12 lg:z-[60] lg:w-auto lg:max-w-md xl:max-w-lg pointer-events-none">
      <div className="flex justify-center sm:justify-end lg:justify-end">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onClick={() => navigate(latestUpdate.link)}
          className="group pointer-events-auto relative w-full max-w-[92%] sm:max-w-md lg:max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:border-neon-cyan/40 hover:bg-white/[0.05] shadow-[0_5px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(0,240,255,0.15)] cursor-pointer"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-violet/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 flex flex-col gap-3">
            {/* Header Badge & Title */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/30 transition-colors">
                  <Shield className="h-5 w-5 text-neon-cyan group-hover:animate-pulse" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span className="rounded bg-neon-cyan/10 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-neon-cyan border border-neon-cyan/20">
                      {latestUpdate.badge || 'Latest Update'}
                    </span>
                    {latestUpdate.date && (
                      <span className="text-[9px] sm:text-[10px] text-white/40 font-mono">
                        {latestUpdate.date}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-white text-base sm:text-lg leading-tight">
                    {latestUpdate.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Subtitle & Description */}
            {latestUpdate.subtitle && (
              <p className="font-mono text-xs text-neon-cyan/90 font-medium -mt-1">
                {latestUpdate.subtitle}
              </p>
            )}

            {latestUpdate.description && (
              <p className="text-xs text-white/70 leading-relaxed">
                {latestUpdate.description}
              </p>
            )}

            {/* Actions: Download APK & View Details */}
            <div className="flex items-center gap-2.5 pt-2 border-t border-white/10 mt-1">
              <a
                href={latestUpdate.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-primary py-2 px-3.5 text-xs flex-1 justify-center gap-1.5"
                title="Download RouteGuard APK"
              >
                <Download className="h-3.5 w-3.5 shrink-0" />
                <span>{latestUpdate.primaryButtonText || 'Download APK'}</span>
              </a>

              <Link
                to={latestUpdate.link}
                onClick={(e) => e.stopPropagation()}
                className="btn-secondary py-2 px-3.5 text-xs flex-1 justify-center gap-1.5"
                title="View RouteGuard Case Study"
              >
                <span>View Details</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
})
