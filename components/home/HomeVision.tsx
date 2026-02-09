/**
 * Home Vision Section
 * Section 3: The Vision with image
 */

import Image from "next/image"
import { homeContent } from "@/data"

export default function HomeVision() {
    const { vision } = homeContent

    return (
        <section id="section3" className="min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
                    {/* Text on Left */}
                    <div className="space-y-6 sm:space-y-8">
                        <h3 className="text-[#DC7026] text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                            {vision.label}
                        </h3>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                            {vision.heading}
                            <span className="hidden sm:inline"><br /></span>
                            <span className="inline sm:hidden"> </span>
                            <span className="text-[#DC7026]">{vision.highlight}</span>
                        </h2>

                        <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                            <p>{vision.description}</p>
                        </div>
                    </div>

                    {/* Image on Right */}
                    <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[48px] overflow-hidden border border-white/5 shadow-2xl">
                        <Image
                            src="https://res.cloudinary.com/dbviya1rj/image/upload/v1769735836/wegddz1xfc1kdwbjbm0e.webp"
                            alt="Vision"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
