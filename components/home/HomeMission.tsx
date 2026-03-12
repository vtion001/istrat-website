/**
 * Home Mission Section
 * Section 4: Our Mission with full-screen background
 * Updated: Fixed responsive text sizing
 */

import Image from "next/image"
import { homeContent } from "@/data"

export default function HomeMission() {
    const { mission } = homeContent

    return (
        <section id="section4" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-black">
                <Image
                    src="https://res.cloudinary.com/dbviya1rj/image/upload/v1773199892/knnjd0bwftdiglc4c6xy.png"
                    alt="Mission Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 w-full">
                <div className="max-w-4xl ml-auto text-right">
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>
                            {mission.label}
                        </h3>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                            <span className="block text-white">TO HELP BRANDS <span className="text-[#DC7026]">LIVE</span> WITH AUTHENTICITY,</span>
                            <span className="block text-white mt-2 sm:mt-3">INFLUENCE WITH INTENTION,</span>
                            <span className="block text-white mt-2 sm:mt-3">AND <span className="text-[#DC7026]">WIN</span></span>
                            <span className="block text-white mt-2 sm:mt-3">THROUGH TRUST AND RELEVANCE.</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
