/**
 * Home Core Values Section
 * Section 5: Core values with GSAP horizontal scroll (section-based snapping)
 * Updated: Standardized to 2 font sizes + alternating black/orange backgrounds
 */

"use client"

import { homeContent, coreValues } from "@/data"
import { useGSAPHorizontalScroll } from "@/hooks/useGSAPHorizontalScroll"

export default function HomeCoreValues() {
    const { coreValuesIntro } = homeContent
    const { containerRef, scrollRef } = useGSAPHorizontalScroll(coreValues.length)

    return (
        <section id="section5" className="relative overflow-hidden">
            {/* Intro Section - Normal Flow */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
                <div className="text-center mb-16 sm:mb-20 md:mb-24">
                    <h3 className="text-[#DC7026] text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-8">
                        {coreValuesIntro.label}
                    </h3>
                    <h2 className="text-2xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        {coreValuesIntro.heading}
                    </h2>
                    <p className="text-2xl font-medium text-gray-300 leading-[1.3] tracking-tight">
                        {coreValuesIntro.subheading}
                    </p>
                </div>
            </div>

            {/* Horizontal Scroll Section */}
            <div ref={containerRef} className="relative h-screen overflow-hidden">
                <div
                    ref={scrollRef}
                    className="absolute top-0 left-0 h-full flex items-center"
                >
                    {coreValues.map((value, index) => {
                        // Alternating backgrounds: Black → Orange → Black
                        const isOrange = index === 1
                        const bgColor = isOrange ? 'bg-[#DC7026]' : 'bg-black'
                        const textColor = isOrange ? 'text-white' : 'text-white'
                        const subtitleColor = isOrange ? 'text-white/90' : 'text-gray-300'
                        const descColor = isOrange ? 'text-white/80' : 'text-gray-400'
                        const watermarkOpacity = isOrange ? 'text-white/[0.08]' : 'text-white/[0.03]'

                        return (
                            <div
                                key={index}
                                data-scroll-section
                                className={`flex-shrink-0 w-screen h-full flex items-center justify-center px-4 sm:px-6 md:px-8 ${bgColor} transition-colors duration-700`}
                            >
                                {/* Full-Width Section Container */}
                                <div className="max-w-7xl w-full h-[80vh] relative">
                                    {/* Content Card */}
                                    <div className="h-full p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 flex flex-col justify-center relative">
                                        {/* Content */}
                                        <div className="relative z-10 space-y-8 sm:space-y-10 md:space-y-12 max-w-5xl">
                                            {/* Heading: text-2xl */}
                                            <h2 className={`text-2xl font-bold tracking-tight leading-[1.05] ${textColor}`} style={{ fontFamily: 'var(--font-display)' }}>
                                                {value.title}
                                            </h2>

                                            {/* Subtitle: text-2xl */}
                                            <p className={`text-2xl ${subtitleColor} leading-relaxed font-semibold max-w-4xl`}>
                                                {value.subtitle}
                                            </p>

                                            {/* Description: text-base */}
                                            <p className={`text-base ${descColor} leading-relaxed max-w-3xl`}>
                                                {value.description}
                                            </p>
                                        </div>

                                        {/* Large Background Text Watermark */}
                                        <div
                                            className={`absolute -bottom-8 sm:-bottom-12 md:-bottom-16 -right-4 sm:-right-8 md:-right-12 text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[280px] font-bold ${watermarkOpacity} leading-none pointer-events-none select-none uppercase opacity-50`}
                                            style={{ fontFamily: 'var(--font-display)' }}
                                        >
                                            {value.title.split(' ')[0]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-gray-400 text-sm pointer-events-none z-20">
                    <svg className="w-6 h-6 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="uppercase tracking-wider font-bold text-xs">Scroll to explore</span>
                </div>

                {/* Progress Indicator */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                    {coreValues.map((_, index) => (
                        <div
                            key={index}
                            className="w-2 h-2 rounded-full bg-white/20 transition-all duration-300"
                            data-progress-dot={index}
                        />
                    ))}
                </div>
            </div>

            {/* Add custom animation */}
            <style jsx>{`
        @keyframes bounce-horizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 2s infinite;
        }
      `}</style>
        </section>
    )
}
