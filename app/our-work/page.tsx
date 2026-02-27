"use client"

import WorkHero from "@/components/work/WorkHero"
import WorkList from "@/components/work/WorkList"
import { VIDEOS, HERO_VIDEO } from "@/data"
import { useVideoModal } from "@/hooks/useVideoModal"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function OurWorksPage() {
  const { selectedVideo, openVideo, closeVideo, isOpen } = useVideoModal()
  const [isExpanded, setIsExpanded] = useState(false)

  // Convert VIDEOS object to array
  const allVideos = Object.entries(VIDEOS).map(([key, data]) => ({
    key,
    ...data
  }))

  return (
    <main className="w-full overflow-x-hidden bg-black text-white">
      {/* Hero Section */}
      <WorkHero
        heroVideo={HERO_VIDEO}
        isOpen={isOpen && selectedVideo === HERO_VIDEO}
        onClose={closeVideo}
      />

      {/* Portfolio List Section */}
      <section className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="block text-white">WHERE DATA MEETS INFLUENCE</span>
              <span className="block text-white">— AND <span className="text-[#DC7026]">INFLUENCE</span> WINS</span>
              <span className="block text-white">MARKETS</span>
            </h2>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto uppercase" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>
                OUR WORK COMBINES DISCIPLINED ANALYTICS, STRATEGIC COMMUNICATIONS, AND STAKEHOLDER INFLUENCE TO TURN REPUTATION INTO REVENUE AND AUTHORITY INTO MARKET DOMINANCE.
              </p>

              {/* Collapsible Trigger */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex flex-col items-center justify-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity mx-auto"
              >
                <span className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto uppercase" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>SEE HOW WE DELIVER RESULTS</span>
                <motion.div
                  animate={{ rotate: isExpanded ? 90 : -2 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4">
                    <path
                      d="M10 25 C 60 20, 120 20, 170 25 M 170 25 L 155 15 M 170 25 L 158 35"
                      stroke="#DC7026"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </button>
            </div>
          </div>

          {/* Collapsible Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <WorkList
                  videos={allVideos}
                  onVideoClick={openVideo}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  )
}
