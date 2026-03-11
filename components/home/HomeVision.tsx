/**
 * Home Vision Section
 * Section 3: The Vision with image
 * Updated: Standardized to 2 font sizes (text-2xl headings, text-base body)
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
                    className="object-contain object-center"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
                    {/* Text on Left */}
                    <div className="space-y-6 sm:space-y-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 sm:mb-8 uppercase" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>
                            {vision.label}
                        </h3>

                        <h2 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]" style={{ fontFamily: 'var(--font-display)' }}>
                            <span className="block text-white">{vision.heading}</span>
                            <span className="block mt-3 sm:mt-4"><span className="text-white">THEY </span><span className="text-[#DC7026]">LEAD.</span></span>
                        </h2>
                    </div>

                    {/* Image placeholder removed */}
                </div>
            </div>
        </section>
    )
}
