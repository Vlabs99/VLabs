import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Download,
  GraduationCap,
  Building,
  MapPin,
  Calendar,
  ChevronDown,
  FileText,
} from 'lucide-react'

import { useScrollReveal } from '../hooks/useScrollReveal'
import { academicsData } from '../data/content'
import { SectionHeader } from './SectionHeader'

export function Academics() {
  const ref = useScrollReveal<HTMLElement>()
  const [activeDegree, setActiveDegree] = useState<string>(academicsData[0].id)
  const [expandedSemester, setExpandedSemester] = useState<string | null>(null)

  const activeData = academicsData.find((d) => d.id === activeDegree)

  const handleSemesterClick = (semesterName: string) => {
    if (expandedSemester === semesterName) {
      setExpandedSemester(null)
    } else {
      setExpandedSemester(semesterName)
    }
  }

  return (
    <section
      id="academics"
      ref={ref}
      className="section-divider section-padding relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <motion.div
        className="absolute right-0 top-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-neon-violet/10 blur-[120px]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-80 w-80 translate-y-1/2 rounded-full bg-neon-cyan/10 blur-[100px]"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          label="Education & Resources"
          title="Academic Resource Library"
          subtitle="Study materials, notes, practicals, assignments, and academic resources from my BCA and MCA journey."
          align="center"
        />

        {/* Degree Tabs */}
        <div className="mb-12 flex justify-center">
          <div className="flex gap-2 rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md">
            {academicsData.map((degree) => (
              <button
                key={degree.id}
                onClick={() => {
                  setActiveDegree(degree.id)
                  setExpandedSemester(null)
                }}
                className={`relative px-6 py-2.5 text-sm font-medium transition-colors ${
                  activeDegree === degree.id ? 'text-white' : 'text-white/50 hover:text-white/80'
                }`}
              >
                {activeDegree === degree.id && (
                  <motion.div
                    layoutId="activeDegree"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-violet/20 border border-white/10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{degree.degree}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeData && (
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Education Details Card */}
              <div className="glow-border glass-card rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-cyan to-neon-violet" />
                <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                        <GraduationCap className="h-6 w-6 text-neon-cyan" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white">
                          {activeData.degree}
                        </h3>
                        <p className="text-neon-cyan/80 text-sm">{activeData.university}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm text-white/60">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-neon-violet" />
                        {activeData.institution}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-neon-cyan" />
                        {activeData.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-neon-violet" />
                        {activeData.duration}
                      </div>
                      {activeData.currentSemester && (
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-neon-cyan" />
                          Current Semester: {activeData.currentSemester}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resource Semesters Grid */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6 pl-2">
                  Semester Resources
                </h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {activeData.semesters.map((semester, index) => {
                    const isExpanded = expandedSemester === semester.semester
                    
                    return (
                      <motion.div
                        key={semester.semester}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                          isExpanded 
                            ? 'bg-white/[0.04] border-neon-cyan/30 shadow-[0_0_30px_rgba(0,240,255,0.1)]' 
                            : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10'
                        }`}
                      >
                        <button
                          onClick={() => handleSemesterClick(semester.semester)}
                          className="flex w-full items-center justify-between p-6 text-left"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                              isExpanded ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-white/5 text-white/60'
                            }`}>
                              <BookOpen className="h-5 w-5" />
                            </div>
                            <div>
                              <h5 className={`font-semibold transition-colors ${isExpanded ? 'text-white' : 'text-white/80'}`}>
                                {semester.semester}
                              </h5>
                              <p className="text-xs text-white/40 mt-1">
                                {semester.subjects.length} Subjects
                              </p>
                            </div>
                          </div>
                          
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              isExpanded ? 'bg-white/10 text-white' : 'bg-transparent text-white/40'
                            }`}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                              <div className="px-6 pb-6 pt-2 space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {semester.subjects.map((subject) => {
                                    const Wrapper = subject.url ? 'a' : 'div'
                                    return (
                                      <Wrapper 
                                        key={subject.name}
                                        {...(subject.url ? { href: subject.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/20 p-3"
                                      >
                                        <FileText className="h-4 w-4 text-neon-violet/70 shrink-0" />
                                        <span className="text-sm text-white/70 truncate" title={subject.name}>
                                          {subject.name}
                                        </span>
                                      </Wrapper>
                                    )
                                  })}
                                </div>

                                {semester.zipUrl && (
                                  <a
                                    href={semester.zipUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary mt-4 flex w-full justify-center items-center gap-2 text-sm py-3"
                                  >
                                    <Download className="h-4 w-4" />
                                    Complete Semester Material
                                  </a>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
