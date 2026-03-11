/**
 * Home Mission Section
 * Section 4: Our Mission with full-screen background
 * Updated: Replaced image card with full-section background image
 */

import Image from "next/image"
import { homeContent } from "@/data"

export default function HomeMission() {
    const { mission } = homeContent

    return (
        <section id="section4" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image - Shown in full (16:9) without any cropping */}
            <div className="absolute inset-0 z-0 bg-black">
                <Image
                    src="https://res.cloudinary.com/dbviya1rj/image/upload/v1773199892/knnjd0bwftdiglc4c6xy.png"
                    alt="Mission Background"
                    fill
                    className="object-contain object-center"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 w-full">
                <div className="max-w-4xl ml-auto text-right">
                    <div className="space-y-6 sm:space-y-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 sm:mb-8 uppercase" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>
                            {mission.label}
                        </h3>

                        <h2 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]" style={{ fontFamily: 'var(--font-display)' }}>
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
