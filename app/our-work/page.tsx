"use client"

import WorkHero from "@/components/work/WorkHero"
import WorkFilterNav from "@/components/work/WorkFilterNav"
import WorkGrid from "@/components/work/WorkGrid"
import { VIDEOS, HERO_VIDEO } from "@/data"
import { useVideoModal } from "@/hooks/useVideoModal"
import { useVideoFilter } from "@/hooks/useVideoFilter"

export default function OurWorksPage() {
  const { selectedVideo, openVideo, closeVideo, isOpen } = useVideoModal()
  const { activeFilter, setActiveFilter, filteredVideos, gridRef } = useVideoFilter(VIDEOS)

  return (
    <main className="w-full overflow-x-hidden bg-black text-white">
      {/* Hero Section */}
      <WorkHero
        heroVideo={HERO_VIDEO}
        isOpen={isOpen && selectedVideo === HERO_VIDEO}
        onClose={closeVideo}
      />

      {/* Portfolio Grid Section */}
      <section className="min-h-screen py-20 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="block text-white">WHERE DATA MEETS INFLUENCE</span>
              <span className="block text-white">— AND <span className="text-[#DC7026]">INFLUENCE</span> WINS</span>
              <span className="block text-white">MARKETS</span>
            </h2>
            <div className="space-y-8">
              <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto uppercase" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>
                OUR WORK COMBINES DISCIPLINED ANALYTICS, STRATEGIC COMMUNICATIONS, AND STAKEHOLDER INFLUENCE TO TURN REPUTATION INTO REVENUE AND AUTHORITY INTO MARKET DOMINANCE.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 text-[#DC7026]">
                <span className="text-2xl">•</span>
                <span className="tracking-widest">SEE HOW WE DELIVER RESULTS</span>
              </div>
            </div>
          </div>

          {/* Filter Navigation */}
          <WorkFilterNav
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Video Grid */}
          <WorkGrid
            videos={filteredVideos}
            gridRef={gridRef}
            onVideoClick={openVideo}
          />
        </div>
      </section>
    </main>
  )
}
