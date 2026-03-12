/**
 * Home Core Values Section
 * Section 5: Core values with GSAP horizontal scroll (section-based snapping)
 * Updated: Standardized to 2 font sizes + alternating black/orange backgrounds
 */

"use client"

import Image from "next/image"
import { homeContent, coreValues } from "@/data"
import { useGSAPHorizontalScroll } from "@/hooks/useGSAPHorizontalScroll"

export default function HomeCoreValues() {
    const { coreValuesIntro } = homeContent
    const { containerRef, scrollRef } = useGSAPHorizontalScroll(coreValues.length)

    return (
        <section id="section5" className="relative overflow-hidden">
            {/* Intro Section - Normal Flow - REMOVED per user request */}

            {/* Horizontal Scroll Section */}
            <div ref={containerRef} className="relative h-[100dvh] overflow-hidden">
                <div
                    ref={scrollRef}
                    className="absolute top-0 left-0 h-full flex items-center"
                >
                    {coreValues.map((value, index) => {
                        // Alternating backgrounds: Black → Orange → Black
                        const isOrange = index === 1
                        const bgColor = isOrange ? 'bg-[#DC7026]' : 'bg-black'
                        const textColor = 'text-white'
                        const watermarkOpacity = isOrange ? 'text-white/[0.08]' : 'text-white/[0.03]'

                        return (
                            <div
                                key={index}
                                data-scroll-section
                                className={`flex-shrink-0 w-screen h-full flex flex-col items-center justify-center px-3 sm:px-6 md:px-8 ${bgColor} transition-colors duration-700 overflow-hidden`}
                            >
                                {/* Full-Width Section Container */}
                                <div className="max-w-7xl w-full h-[85dvh] md:h-[80vh] lg:h-[80vh] relative">
                                    {/* Content Card */}
                                    <div className="h-full pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-14 lg:pb-16 px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center relative text-center">
                                        {/* Content Wrapper */}
                                        <div className="relative w-full h-full flex flex-col items-center">

                                            {/* SVG Container: Adjusted for mobile */}
                                            {value.svgUrl ? (
                                                <div className="absolute top-[28%] sm:top-[32%] md:top-[38%] lg:top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[18vh] sm:w-[120%] sm:h-[38vh] md:w-[160%] md:h-[1000px] lg:w-[180%] lg:h-[1200px] pointer-events-none z-0">
                                                    <Image
                                                        src={value.svgUrl}
                                                        alt={value.title}
                                                        fill
                                                        className="object-contain object-center opacity-25 sm:opacity-30 md:opacity-50 lg:opacity-70"
                                                        priority={index === 0}
                                                    />
                                                </div>
                                            ) : (
                                                <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] ${textColor} mb-auto mt-auto`} style={{ fontFamily: 'var(--font-display)' }}>
                                                    {value.title}
                                                </h2>
                                            )}

                                            {/* Text Container: Better mobile spacing */}
                                            <div className="mt-auto mb-[12%] sm:mb-[14%] md:mb-[18%] lg:mb-0 space-y-3 sm:space-y-4 max-w-3xl sm:max-w-4xl mx-auto relative z-20 md:mt-auto">
                                                {/* Subtitle */}
                                                <p
                                                    className={`${index === 1 ? 'text-black' : 'text-white'} text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase leading-tight md:leading-relaxed px-2 sm:px-0`}
                                                    style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}
                                                >
                                                    {value.subtitle}
                                                </p>

                                                {/* Description */}
                                                <p
                                                    className={`${index === 1 ? 'text-black/80' : 'text-white/80'} text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed px-2 sm:px-0`}
                                                    style={{ fontFamily: 'var(--font-ibm-plex)' }}
                                                >
                                                    {value.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Large Background Text Watermark - Positioned to avoid footer/text collision */}
                                    <div
                                        className={`absolute bottom-4 sm:-bottom-6 md:-bottom-12 lg:-bottom-16 right-0 text-[60px] sm:text-[100px] md:text-[120px] lg:text-[160px] xl:text-[200px] 2xl:text-[240px] font-bold ${watermarkOpacity} leading-none pointer-events-none select-none uppercase opacity-50`}
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {value.watermark || value.title.split(' ')[0]}
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
