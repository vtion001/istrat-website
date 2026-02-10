/**
 * Home Tagline Section
 * Section 2: Main tagline and description
 * Updated: Standardized to 2 font sizes (text-2xl headings, text-base body)
 */

import { homeContent } from "@/data"

export default function HomeTagline() {
    const { tagline } = homeContent

    return (
        <section id="section2" className="min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-32 md:py-48 w-full">
                <div className="text-center max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold tracking-tight leading-[1.1] mb-8 sm:mb-12" style={{ fontFamily: 'var(--font-display)' }}>
                        {tagline.heading}
                    </h2>
                    <p className="text-2xl font-medium text-gray-300 leading-[1.3] tracking-tight">
                        {tagline.subheading}
                    </p>
                </div>

                <div className="mt-12 sm:mt-20 md:mt-32 max-w-6xl mx-auto">
                    <p className="text-base text-gray-400 leading-relaxed text-center">
                        {tagline.description}
                    </p>
                </div>

                <div className="mt-12 sm:mt-16 text-center">
                    <p className="text-base text-[#DC7026] font-semibold tracking-wide">
                        {tagline.cta.text}
                        <span className="hidden sm:inline"><br /></span>
                        <span className="inline sm:hidden"> </span>
                        <span className="text-2xl font-bold">{tagline.cta.highlight}</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
