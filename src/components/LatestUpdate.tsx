import { motion } from 'framer-motion'
import { ArrowRight, Bell } from 'lucide-react'
import { Link } from 'react-router-dom'
import { latestUpdate } from '../data/latestUpdate'

export function LatestUpdate() {
  if (!latestUpdate) return null

  return (
    <div className="absolute top-28 left-0 right-0 z-[60] mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="flex justify-center">
        <Link 
          to={latestUpdate.link} 
          className="group pointer-events-auto w-full max-w-[90%] sm:max-w-md lg:max-w-lg block"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 backdrop-blur-xl transition-all duration-300 hover:border-neon-cyan/40 hover:bg-white/[0.05] shadow-[0_5px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(0,240,255,0.15)]"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-violet/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.05] border border-white/10 group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/30 transition-colors">
                  <Bell className="h-4 w-4 text-neon-cyan group-hover:animate-pulse" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="rounded bg-neon-cyan/10 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-neon-cyan border border-neon-cyan/20">
                      Latest Update
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-white/40 font-mono">{latestUpdate.date}</span>
                  </div>
                  <h3 className="font-semibold text-white/90 text-xs sm:text-sm leading-tight group-hover:text-neon-cyan transition-colors">
                    {latestUpdate.title}
                  </h3>
                </div>
              </div>
              <div className="shrink-0 pl-3 border-l border-white/10">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 group-hover:bg-neon-cyan group-hover:text-void transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
