/**
 * Home Tagline Section
 * Section 2: Main tagline and description
 * Updated: Standardized to 2 font sizes (text-2xl headings, text-base body)
 */

import { homeContent } from "@/data"

export default function HomeTagline() {
    const { tagline } = homeContent

    return (
        <section id="section2" className="flex items-center justify-center relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full py-16 md:py-24">
            <div className="text-center max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    <span className="block">{tagline.heading}</span>
                    <span className="block mt-3 sm:mt-4">{tagline.subheading}</span>
                </h1>
            </div>
        </section>
    )
}
