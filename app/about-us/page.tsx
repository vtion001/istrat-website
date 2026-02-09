"use client"

import OrganizationalChart from "@/components/organizational-chart"

// Data imports
import { team } from "@/data"

export default function AboutUsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-black text-white selection:bg-[#DC7026]/30">
      {/* Section 1: Power Statement / Hero Tagline */}
      <section id="section1" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-32 w-full">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="block text-white">
                Meet the minds behind the work.
              </span>
              <span className="block text-white mt-3 sm:mt-4">
                Built by <span className="text-[#DC7026]">Strategists.</span> Led by <span className="text-[#DC7026]">Experience.</span>
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Section 2: Leadership/Team - Organizational Chart */}
      <section id="section2" className="min-h-screen bg-black py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-display)' }}>Who We Are</h2>
            <p className="text-gray-400 text-lg md:text-xl">The team that drives strategic influence</p>
          </div>

          {/* Organizational Chart */}
          <OrganizationalChart team={team} />

          {/* Closing Statement */}
          <div className="mt-20 sm:mt-24 md:mt-32 text-center">
            <p className="text-gray-500 text-sm tracking-[0.3em] font-light uppercase">32 Years of Strategic Influence</p>
          </div>
        </div>
      </section>
    </main>
  )
}
