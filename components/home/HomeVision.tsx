/**
 * Home Vision Section
 * Section 3: The Vision with image
 * Updated: Fixed responsive text sizing
 */

import Image from "next/image"
import { homeContent } from "@/data"

export default function HomeVision() {
    const { vision } = homeContent

    return (
        <section id="section3" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-black">
                <Image
                    src="https://res.cloudinary.com/dbviya1rj/image/upload/v1773199890/gxj0tze2uu3cgy0lk0bf.png"
                    alt="Vision Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    {/* Text on Left */}
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>
                            {vision.label}
                        </h3>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                            <span className="block text-white">{vision.heading}</span>
                            <span className="block mt-2 sm:mt-3"><span className="text-white">THEY </span><span className="text-[#DC7026]">LEAD.</span></span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
