import { memo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Download, Globe, Lock } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { portfolioProjects, PortfolioProject } from '../data/content'
import { SectionHeader } from './SectionHeader'
import { TechBadge } from './ui/TechBadge'

export const Projects = memo(function Projects() {
  const ref = useScrollReveal<HTMLElement>()
  const navigate = useNavigate()

  return (
    <section
      id="projects"
      ref={ref}
      className="section-divider section-padding relative overflow-hidden border-y border-white/[0.04]"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/[0.05] via-transparent to-neon-violet/[0.05]" />

      {/* Cyber grid */}
      <div className="absolute inset-0 opacity-[0.035]">
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

      {/* Ambient background glows */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.08, 1],
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
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-neon-violet/5 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Flagship Software Systems"
          title="PROJECTS"
          subtitle="Explore VLabs' production-ready mobile applications, real-time messaging platforms, and web systems."
        />

        {/* 3 Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {portfolioProjects.map((project: PortfolioProject, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              onClick={() => navigate(project.detailPath)}
              className="glow-border group relative flex flex-col overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-300 cursor-pointer sm:p-7 h-full"
            >
              {/* Subtle card glow overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.1),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Header Image / Banner (Fixed aspect ratio 16:10) */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-void/60">
                <img
                  src={project.banner}
                  alt={`${project.name} Banner`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />

                {/* Status Badge */}
                <div className="absolute right-3 top-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-neon-cyan/40 bg-void/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-neon-cyan backdrop-blur-md shadow-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                    </span>
                    {project.status}
                  </span>
                </div>

                {/* Project Logo Overlay */}
                {project.logo && (
                  <div className="absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-void/80 p-2 shadow-lg backdrop-blur-md">
                    <img
                      src={project.logo}
                      alt={`${project.name} Logo`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="relative z-10 mt-6 flex flex-1 flex-col">
                <h3 className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-neon-cyan transition-colors">
                  {project.name}
                </h3>
                {project.tagline && (
                  <p className="mt-1 font-mono text-xs text-neon-cyan/80 font-medium tracking-wide">
                    {project.tagline}
                  </p>
                )}

                {/* Description (3-4 lines fixed clamp) */}
                <p className="mt-3 text-sm leading-relaxed text-white/60 line-clamp-4 flex-1">
                  {project.summary}
                </p>

                {/* Technology Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techBadges.slice(0, 5).map((badge, i) => (
                    <TechBadge key={badge} label={badge} variant="accent" delay={i * 0.03} />
                  ))}
                  {project.techBadges.length > 5 && (
                    <span className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 font-mono text-[10px] text-white/40">
                      +{project.techBadges.length - 5}
                    </span>
                  )}
                </div>

                {/* Action Buttons Section */}
                <div className="mt-8 space-y-3 pt-4 border-t border-white/10">
                  {/* Primary "View Details" button */}
                  <Link
                    to={project.detailPath}
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(project.detailPath)
                    }}
                    className="btn-primary w-full text-center justify-center text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {/* Secondary Small Action Buttons */}
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {/* GitHub Link */}
                    {project.githubDisabled ? (
                      <button
                        disabled
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 font-mono text-[11px] font-medium text-white/40 cursor-not-allowed opacity-60"
                        title={project.githubDisabledText || 'Coming Soon'}
                      >
                        <Github className="h-3.5 w-3.5 text-white/40" />
                        <span>GitHub ({project.githubDisabledText || 'Coming Soon'})</span>
                      </button>
                    ) : project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex-1 justify-center text-xs py-2 px-3 gap-1.5"
                        title="View GitHub Repository"
                      >
                        <Github className="h-3.5 w-3.5 text-white/80" />
                        <span>GitHub</span>
                      </a>
                    ) : null}

                    {/* VChat Android APK Link */}
                    {project.apkUrl && !project.apkDisabled && (
                      <a
                        href={project.apkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex-1 justify-center text-xs py-2 px-3 gap-1.5"
                        title="Download APK Release"
                      >
                        <Download className="h-3.5 w-3.5 text-neon-cyan" />
                        <span>APK</span>
                      </a>
                    )}

                    {/* RouteGuard Disabled APK Button */}
                    {project.apkDisabled && (
                      <button
                        disabled
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 font-mono text-[11px] font-medium text-white/40 cursor-not-allowed opacity-60"
                        title={project.apkDisabledText || 'Release coming soon'}
                      >
                        <Lock className="h-3.5 w-3.5 text-white/40" />
                        <span>APK Release Coming Soon</span>
                      </button>
                    )}

                    {/* VChat Web Live Demo Link */}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex-1 justify-center text-xs py-2 px-3 gap-1.5 text-neon-cyan border-neon-cyan/30 hover:bg-neon-cyan/10"
                        title="Open Live Web Demo"
                      >
                        <Globe className="h-3.5 w-3.5 text-neon-cyan" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})
