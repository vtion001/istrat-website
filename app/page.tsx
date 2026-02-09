"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"

const HERO_VIDEO_URL = "https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4"

export default function Home() {
  return (
    <main id="main" className="w-full overflow-x-hidden bg-black text-white">
      {/* Section 1: Hero */}
      <section id="section1" className="min-h-screen">
        <Hero />
      </section>

      {/* Section 2: Tagline */}
      <section id="section2" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-32 md:py-48 w-full">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-8 sm:mb-12" style={{ fontFamily: 'var(--font-display)' }}>
              We don't just run campaigns.
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-300 leading-[1.3] tracking-tight">
              We move people, shape narratives, and drive action.
            </p>
          </div>

          <div className="mt-12 sm:mt-20 md:mt-32 max-w-6xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed text-center">
              iStrat is a strategy-led communications firm defined to help brands live their values, influence conversations, and achieve meaningful impact. We work with organisations that care about how they show  up—and the influence they leave behind.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-base sm:text-lg md:text-xl text-[#DC7026] font-semibold tracking-wide">
              We work with brands, leaders, and institutions that don't just want visibility—
              <span className="hidden sm:inline"><br /></span>
              <span className="inline sm:hidden"> </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold">They want impact.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The Vision */}
      <section id="section3" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Text on Left */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-[#DC7026] text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                THE VISION
              </h3>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                To shape a world where brands don't just speak—
                <span className="hidden sm:inline"><br /></span>
                <span className="inline sm:hidden"> </span>
                <span className="text-[#DC7026]">they matter.</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                <p>
                  We envision communication that builds confidence, earns credibility, and creates meaningful connections that last—shaping culture, trust, and real-world impact through strategic influence.
                </p>
                <p>
                  A future where communication doesn't just inform, but leads change, inspires action, and delivers outcomes that matter.
                </p>
              </div>
            </div>

            {/* Visual on Right */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden group shadow-3xl bg-[#0a0a0a]">
              <video
                src={HERO_VIDEO_URL}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Mission */}
      <section id="section4" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual on Left */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden group shadow-3xl bg-[#0a0a0a] order-2 lg:order-1">
              <video
                src={HERO_VIDEO_URL}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </div>

            {/* Text on Right */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <h3 className="text-[#DC7026] text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                OUR MISSION
              </h3>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                To help brands <span className="text-[#DC7026]">LIVE</span> with authenticity, <span className="text-[#DC7026]">INFLUENCE</span> with intention, and <span className="text-[#DC7026]">WIN</span> through trust and relevance.
              </h2>

              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                We design strategy-driven advocacy and integrated communications that turn ideas into influence, and influence into measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Core Values */}
      <section id="section5" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 w-full">
          <h3 className="text-[#DC7026] text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-12 sm:mb-16">
            OUR CORE VALUES
          </h3>

          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {/* Value 1: Live Authentically */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-3 flex items-center justify-center lg:justify-start">
                <span className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-bold text-[#DC7026]/20 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                  01
                </span>
              </div>
              <div className="lg:col-span-9 space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                  LIVE AUTHENTICALLY
                </h2>
                <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl">
                  We believe real influence starts with truth.
                </p>
                <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
                  Every message we build is grounded in clarity, purpose, and credibility.
                </p>
              </div>
            </div>

            {/* Value 2: Influence with Intent */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-3 flex items-center justify-center lg:justify-start">
                <span className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-bold text-[#DC7026]/20 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                  02
                </span>
              </div>
              <div className="lg:col-span-9 space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                  INFLUENCE WITH INTENT
                </h2>
                <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl">
                  Influence isn't about noise—it's about direction.
                </p>
                <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
                  We shape conversations that inspire action, loyalty, and belief.
                </p>
              </div>
            </div>

            {/* Value 3: Win with Meaning */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-3 flex items-center justify-center lg:justify-start">
                <span className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-bold text-[#DC7026]/20 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                  03
                </span>
              </div>
              <div className="lg:col-span-9 space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                  WIN WITH MEANING
                </h2>
                <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl">
                  Winning is not just being seen—it's about earning trust and building confidence through consistent actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
