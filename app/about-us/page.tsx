"use client"

import OrganizationalChart from "@/components/organizational-chart"

// Data imports
import { team } from "@/data"

export default function AboutUsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-black text-white selection:bg-[#DC7026]/30">
      {/* Section 1: Power Statement / Hero Tagline */}
      <section id="section1" className="min-h-[50vh] flex items-center md:min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 w-full">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05]" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="block text-white">MEET THE MINDS</span>
              <span className="block text-white">BEHIND THE WORK.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Section 2: Leadership/Team - Organizational Chart */}
      <section id="section2" className="min-h-screen bg-black py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <h3 className="text-white text-base md:text-lg font-bold mb-6 sm:mb-8 uppercase leading-relaxed" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>
              OUR TEAM
            </h3>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-display)' }}>Who We Are</h2>
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto uppercase" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>THE TEAM THAT DRIVES STRATEGIC INFLUENCE</p>
          </div>

          {/* Organizational Chart */}
          <OrganizationalChart team={team} />

          {/* Closing Statement */}
          <div className="mt-20 sm:mt-24 md:mt-32 text-center">
            <p className="text-gray-500 text-[10px] tracking-[0.3em] font-light uppercase">32 Years of Strategic Influence</p>
          </div>
        </div>
      </section>
    </main>
  )
}
