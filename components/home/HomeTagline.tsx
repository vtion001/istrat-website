/**
 * Home Tagline Section
 * Section 2: Main tagline and description
 * Updated: Fixed responsive text sizing
 */

import { homeContent } from "@/data"

export default function HomeTagline() {
    const { tagline } = homeContent

    return (
        <section id="section2" className="flex items-center justify-center relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full py-12 sm:py-16 md:py-20">
            <div className="text-center max-w-4xl sm:max-w-5xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    <span className="block">{tagline.heading}</span>
                    <span className="block mt-2 sm:mt-3">{tagline.subheading}</span>
                </h1>
            </div>
        </section>
    )
}
