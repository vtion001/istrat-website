/**
 * Home Mission Section
 * Section 4: Our Mission with image
 * Updated: Standardized to 2 font sizes (text-2xl headings, text-base body)
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
                        <h3 className="text-white text-sm font-bold mb-6 sm:mb-8 uppercase tracking-[0.3em]">
                            {mission.label}
                        </h3>

                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]" style={{ fontFamily: 'var(--font-display)' }}>
                            <span className="block text-white">TO HELP BRANDS <span className="text-[#DC7026]">LIVE</span> WITH AUTHENTICITY,</span>
                            <span className="block text-white mt-3 sm:mt-4"><span className="text-white">INFLUENCE</span> WITH INTENTION,</span>
                            <span className="block text-white mt-3 sm:mt-4">AND <span className="text-[#DC7026]">WIN</span></span>
                            <span className="block text-white mt-3 sm:mt-4">THROUGH TRUST AND RELEVANCE.</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
