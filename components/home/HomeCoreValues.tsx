/**
 * Home Core Values Section
 * Section 5: Core values with numbered cards
 */

import { homeContent, coreValues } from "@/data"

export default function HomeCoreValues() {
    const { coreValuesIntro } = homeContent

    return (
        <section id="section5" className="min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 w-full">
                <div className="text-center mb-16 sm:mb-20 md:mb-24">
                    <h3 className="text-[#DC7026] text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-8">
                        {coreValuesIntro.label}
                    </h3>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        {coreValuesIntro.heading}
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-300 leading-[1.3] tracking-tight">
                        {coreValuesIntro.subheading}
                    </p>
                </div>

                <div className="space-y-16 sm:space-y-20 md:space-y-24">
                    {coreValues.map((value, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                            <div className="lg:col-span-3 flex items-center justify-center lg:justify-start">
                                <span className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-bold text-[#DC7026]/20 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                                    {value.number}
                                </span>
                            </div>
                            <div className="lg:col-span-9 space-y-4 sm:space-y-6">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                                    {value.title}
                                </h2>
                                <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl">
                                    {value.subtitle}
                                </p>
                                <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
