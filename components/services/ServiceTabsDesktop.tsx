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
            const yOffset = -150; // Offset for sticky nav/header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="hidden lg:block relative w-full">
            {/* Navigation Grid (Sticky) */}
            <div className="sticky top-0 z-30 bg-black/90 backdrop-blur-xl py-8 border-b border-white/5 w-full">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => {
                        const isEven = index % 2 === 0
                        const isActive = activeTab === index

                        // Organic Border Radius Variations
                        const borderRadii = [
                            "48% 52% 30% 70% / 55% 45% 35% 65%",
                            "35% 65% 65% 35% / 45% 55% 30% 70%",
                            "65% 35% 35% 65% / 60% 30% 60% 40%",
                            "40% 60% 55% 45% / 50% 45% 45% 55%",
                            "48% 52% 30% 70% / 55% 45% 35% 65%",
                            "35% 65% 65% 35% / 45% 55% 30% 70%"
                        ];
                        const shapeIndex = index % borderRadii.length;
                        const customRadius = borderRadii[shapeIndex];

                        // Button Colors: Match Pill Colors (0=Orange, 1=White)
                        // Even (0) -> Orange Button
                        // Odd (1) -> White Button
                        const btnClass = isEven
                            ? "bg-[#DC7026] text-white border-[#DC7026] hover:bg-[#DC7026]/90"
                            : "bg-white text-[#DC7026] border-white hover:bg-gray-50";

                        return (
                            <button
                                key={index}
                                onClick={() => scrollToSection(index, service.title)}
                                className={`
                                    relative w-full py-8 md:py-10 flex items-center justify-center text-center transition-all duration-300 border-2 shadow-lg hover:shadow-xl hover:-translate-y-1 min-h-[140px] md:min-h-[160px]
                                    ${btnClass}
                                    ${isActive ? "scale-105 z-10 ring-4 " + (isEven ? "ring-[#DC7026]/30" : "ring-white/30") : "opacity-90 hover:opacity-100"}
                                `}
                                style={{ borderRadius: customRadius }}
                            >
                                <span className="font-display font-black uppercase tracking-wide text-xs md:text-sm leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                                    {service.title}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Service Sections (Full Width, Alternating Backgrounds) */}
            <div className="w-full">
                {services.map((service, index) => {
                    const details = serviceDetails[service.title];
                    const isEven = index % 2 === 0;

                    // Section Colors:
                    // Even (0) -> White Background
                    // Odd (1) -> Black Background
                    const sectionBg = isEven ? "bg-white" : "bg-black";
                    const textColor = isEven ? "text-black" : "text-white";
                    const bulletColor = isEven ? "bg-black" : "bg-white"; // Dot color

                    // Pill/Header Colors: Contrast with Section
                    // Even (0) [White BG] -> Orange Pill
                    // Odd (1) [Black BG] -> White Pill (Requested)
                    const pillClass = isEven
                        ? "bg-[#DC7026] text-white"
                        : "bg-white text-[#DC7026]";

                    const borderRadii = [
                        "48% 52% 30% 70% / 55% 45% 35% 65%",
                        "35% 65% 65% 35% / 45% 55% 30% 70%",
                        "65% 35% 35% 65% / 60% 30% 60% 40%",
                        "40% 60% 55% 45% / 50% 45% 45% 55%",
                        "48% 52% 30% 70% / 55% 45% 35% 65%",
                        "35% 65% 65% 35% / 45% 55% 30% 70%"
                    ];
                    const shapeIndex = index % borderRadii.length;
                    const customRadius = borderRadii[shapeIndex];

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
                                        relative w-full max-w-4xl py-12 px-8 md:px-16 text-center mb-16 shadow-2xl
                                        flex items-center justify-center min-h-[200px] transition-all duration-500 hover:scale-[1.02]
                                        ${pillClass}
                                    `}
                                    style={{ borderRadius: customRadius }}
                                >
                                    <h2 className="font-display font-black uppercase text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                                        {service.title}
                                    </h2>
                                </div>

                                {/* Bullet Points */}
                                <div className="space-y-6 md:space-y-8 w-full max-w-3xl mx-auto">
                                    {details?.points.map((point, i) => (
                                        <div key={i} className="flex items-start justify-start gap-4 group">
                                            <span className={`
                                                mt-2 w-3 h-3 rounded-full flex-shrink-0 transition-transform group-hover:scale-125
                                                ${bulletColor}
                                            `}></span>
                                            <p className={`${textColor} font-bold uppercase text-2xl md:text-4xl tracking-wide leading-snug text-left`} style={{ fontFamily: 'var(--font-display)' }}>
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
