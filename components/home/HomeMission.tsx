/**
 * Home Mission Section
 * Section 4: Our Mission with image
 */

import Image from "next/image"
import { homeContent } from "@/data"

export default function HomeMission() {
    const { mission } = homeContent

    return (
        <section id="section4" className="min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
                    {/* Image on Left */}
                    <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[48px] overflow-hidden border border-white/5 shadow-2xl order-2 lg:order-1">
                        <Image
                            src="https://res.cloudinary.com/dbviya1rj/image/upload/v1769735836/wegddz1xfc1kdwbjbm0e.webp"
                            alt="Mission"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>

                    {/* Text on Right */}
                    <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                        <h3 className="text-[#DC7026] text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                            {mission.label}
                        </h3>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                            To help brands <span className="text-[#DC7026]">LIVE</span> with authenticity, <span className="text-[#DC7026]">INFLUENCE</span> with intention, and <span className="text-[#DC7026]">WIN</span> through trust and relevance.
                        </h2>

                        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                            {mission.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
