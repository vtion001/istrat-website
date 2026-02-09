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
        isOpen={isOpen && selectedVideo === HERO_VIDEO.key}
        onClose={closeVideo}
      />

      {/* Portfolio Grid Section */}
      <section className="min-h-screen py-20 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Our Work
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              32 years of strategic communications that shape narratives and drive results
            </p>
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
