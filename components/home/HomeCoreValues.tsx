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
                                    <div className="h-full pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 flex flex-col items-center relative text-center">
                                        {/* Content Wrapper */}
                                        <div className="relative w-full h-full flex flex-col items-center">

                                            {/* SVG Container: Absolute Center & Massive */}
                                            {value.svgUrl ? (
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60vh] sm:h-[70vh] md:h-[800px] lg:h-[900px] pointer-events-none z-0">
                                                    <Image
                                                        src={value.svgUrl}
                                                        alt={value.title}
                                                        fill
                                                        className="object-contain object-center"
                                                        priority={index === 0}
                                                    />
                                                </div>
                                            ) : (
                                                <h2 className={`text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] ${textColor} mb-auto mt-auto`} style={{ fontFamily: 'var(--font-display)' }}>
                                                    {value.title}
                                                </h2>
                                            )}

                                            {/* Text Container: Pinned to Bottom */}
                                            <div className="space-y-4 max-w-4xl mx-auto relative z-20 mt-auto">
                                                {/* Subtitle: Styled like info@istratmc.com */}
                                                <p
                                                    className={`${index === 1 ? 'text-black' : 'text-white'} text-base md:text-lg font-bold uppercase leading-relaxed`}
                                                    style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}
                                                >
                                                    {value.subtitle}
                                                </p>

                                                {/* Description: Styled like info@istratmc.com */}
                                                <p
                                                    className={`${index === 1 ? 'text-black' : 'text-white'} text-base md:text-lg font-bold uppercase leading-relaxed`}
                                                    style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}
                                                >
                                                    {value.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Large Background Text Watermark */}
                                    <div
                                        className={`absolute -bottom-8 sm:-bottom-12 md:-bottom-16 -right-4 sm:-right-8 md:-right-12 text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[280px] font-bold ${watermarkOpacity} leading-none pointer-events-none select-none uppercase opacity-50`}
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
        </section >
    )
}
