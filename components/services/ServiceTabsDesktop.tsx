/**
 * Service Tabs Desktop Component
 * Desktop view with pill navigation and scroll-to sections
 */

"use client"

import Image from "next/image"
import type { Service, ServiceDetail } from "@/data"

interface ServiceTabsDesktopProps {
    services: Service[]
    serviceDetails: Record<string, ServiceDetail>
    activeTab: number
    onTabChange: (index: number) => void
}

const slugify = (text: string) => text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

export default function ServiceTabsDesktop({ services, serviceDetails, activeTab, onTabChange }: ServiceTabsDesktopProps) {

    const scrollToSection = (index: number, title: string) => {
        onTabChange(index);
        const id = slugify(title);
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -150;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="hidden lg:block relative w-full">
            {/* Navigation Grid (Sticky) */}
            <div className="sticky top-0 z-30 bg-black/90 backdrop-blur-xl py-8 border-b border-white/5 w-full">
                <div className="max-w-7xl mx-auto px-4">
                    {/* First 3 items grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:max-w-6xl mx-auto mb-4">
                    {services.slice(0, 3).map((service, index) => {
                        const isEven = index % 2 === 0
                        const isActive = activeTab === index

                        const btnClass = isEven
                            ? "bg-[#DC7026] text-white border-[#DC7026] hover:bg-[#DC7026]/90"
                            : "bg-white text-[#DC7026] border-white hover:bg-gray-50";

                        return (
                            <button
                                key={index}
                                onClick={() => scrollToSection(index, service.title)}
                                className={`
                                    relative w-full h-[100px] sm:h-[120px] md:h-[140px] flex flex-col items-center justify-center text-center transition-all duration-300 border-2 shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-2xl overflow-hidden
                                    ${btnClass}
                                    ${isActive ? "scale-105 z-10 ring-4 " + (isEven ? "ring-[#DC7026]/30" : "ring-white/30") : "opacity-90 hover:opacity-100"}
                                `}
                            >
                                {service.navIcon ? (
                                    <img src={service.navIcon} alt={service.title} className="h-12 sm:h-14 md:h-16 w-auto mb-2 object-contain" />
                                ) : service.icon && (
                                    <img src={service.icon} alt={service.title} className="h-12 sm:h-14 md:h-16 w-auto mb-2 object-contain" />
                                )}
                                <span className="font-display font-black uppercase tracking-wide text-xs sm:text-sm md:text-base leading-tight px-3 line-clamp-2" style={{ fontFamily: 'var(--font-display)' }}>
                                    {service.title}
                                </span>
                            </button>
                        )
                    })}
                    </div>

                    {/* Last 2 items grid - centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:max-w-2xl mx-auto lg:justify-center">
                    {services.slice(3).map((service, index) => {
                        const globalIndex = index + 3;
                        const isEven = globalIndex % 2 === 0
                        const isActive = activeTab === globalIndex

                        const isEventManagement = globalIndex === 4;
                        const btnClass = isEventManagement
                            ? "bg-white text-[#DC7026] border-white hover:bg-gray-50"
                            : isEven
                            ? "bg-[#DC7026] text-white border-[#DC7026] hover:bg-[#DC7026]/90"
                            : "bg-white text-[#DC7026] border-white hover:bg-gray-50";

                        return (
                            <button
                                key={globalIndex}
                                onClick={() => scrollToSection(globalIndex, service.title)}
                                className={`
                                    relative w-full h-[100px] sm:h-[120px] md:h-[140px] flex flex-col items-center justify-center text-center transition-all duration-300 border-2 shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-2xl overflow-hidden
                                    ${btnClass}
                                    ${isActive ? "scale-105 z-10 ring-4 " + (isEven ? "ring-[#DC7026]/30" : "ring-white/30") : "opacity-90 hover:opacity-100"}
                                `}
                            >
                                {service.navIcon ? (
                                    <img src={service.navIcon} alt={service.title} className="h-12 sm:h-14 md:h-16 w-auto mb-2 object-contain" />
                                ) : service.icon && (
                                    <img src={service.icon} alt={service.title} className="h-12 sm:h-14 md:h-16 w-auto mb-2 object-contain" />
                                )}
                                <span className="font-display font-black uppercase tracking-wide text-xs sm:text-sm md:text-base leading-tight px-3 line-clamp-2" style={{ fontFamily: 'var(--font-display)' }}>
                                    {service.title}
                                </span>
                            </button>
                        )
                    })}
                    </div>
                </div>
            </div>

            {/* Service Sections (Full Width, Alternating Backgrounds) */}
            <div className="w-full">
                {services.map((service, index) => {
                    const details = serviceDetails[service.title];
                    const isEven = index % 2 === 0;

                    const sectionBg = isEven ? "bg-white" : "bg-black";
                    const textColor = isEven ? "text-black" : "text-white";
                    const bulletColor = isEven ? "bg-black" : "bg-white";

                    const isEventManagement = service.title === "Event Management";
                    const isSideLayout = ["Integrated Marketing Communications", "Brand Building & Management", "Measurement, Analytics & Insights", "Advocacy & Stakeholder Engagement", "Event Management"].includes(service.title);
                    
                    const pillClass = isEventManagement
                        ? "bg-white text-[#DC7026]"
                        : isEven
                        ? "bg-[#DC7026] text-white"
                        : "bg-white text-[#DC7026]";

                    // Side-by-side layout (image left, text right)
                    if (isSideLayout) {
                        return (
                            <section
                                id={slugify(service.title)}
                                key={index}
                                className={`scroll-mt-48 flex flex-col items-center justify-center w-full py-32 px-4 ${sectionBg}`}
                            >
                                <div className="max-w-6xl mx-auto w-full">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                        {/* Left side - Image only */}
                                        <div className="flex justify-start">
                                            {service.icon && (
                                                <img 
                                                    src={service.icon} 
                                                    alt={service.title} 
                                                    className="w-full h-auto max-w-2xl object-contain"
                                                />
                                            )}
                                        </div>

                                        {/* Right side - Bullet Points */}
                                        <div className="space-y-6 md:space-y-8 w-full lg:pt-8">
                                            {details?.points.map((point, i) => (
                                                <div key={i} className="flex items-center justify-start gap-4 group">
                                                    <span className={`
                                                        w-3 h-3 sm:w-4 sm:h-4 rounded-full flex-shrink-0 transition-transform group-hover:scale-125
                                                        ${bulletColor}
                                                    `}></span>
                                                    <p className={`${textColor} font-bold uppercase text-xl md:text-2xl lg:text-3xl tracking-wide leading-tight text-left`} style={{ fontFamily: 'var(--font-display)' }}>
                                                        {point}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                    }

                    // Default stacked layout
                    return (
                        <section
                            id={slugify(service.title)}
                            key={index}
                            className={`scroll-mt-48 flex flex-col items-center justify-center w-full py-32 px-4 ${sectionBg}`}
                        >
                            <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
                                {/* Card / Pill Title */}
                                <div
                                    className={`
                                        relative w-max px-6 sm:px-8 md:px-16 h-[100px] sm:h-[120px] md:h-[140px] text-center mb-12 sm:mb-16 shadow-lg
                                        flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl rounded-2xl overflow-hidden
                                        ${pillClass}
                                    `}
                                >
                                    {service.icon && (
                                        <img src={service.icon} alt={service.title} className="h-14 sm:h-16 md:h-20 w-auto mb-2 object-contain" />
                                    )}
                                    <h2 className="font-display font-black uppercase text-xs sm:text-sm md:text-base lg:text-lg tracking-tight leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                                        {service.title}
                                    </h2>
                                </div>

                                {/* Bullet Points */}
                                <div className="space-y-4 md:space-y-6 w-full max-w-3xl mx-auto">
                                    {details?.points.map((point, i) => (
                                        <div key={i} className="flex items-center justify-start gap-3 group">
                                            <span className={`
                                                w-2.5 h-2.5 sm:w-3 md:w-3 rounded-full flex-shrink-0 transition-transform group-hover:scale-125
                                                ${bulletColor}
                                            `}></span>
                                            <p className={`${textColor} font-bold uppercase text-lg md:text-2xl lg:text-3xl tracking-wide leading-tight text-left`} style={{ fontFamily: 'var(--font-display)' }}>
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}
