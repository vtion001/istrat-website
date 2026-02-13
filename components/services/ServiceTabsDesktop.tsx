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
        <div className="hidden lg:block relative">
            {/* Navigation Grid (Sticky-ish behavior can be added via parent or CSS if needed, currently static at top) */}
            <div className="mb-24 px-4 sticky top-24 z-30 bg-black/80 backdrop-blur-xl py-8 -mx-4 rounded-b-3xl border-b border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                    {services.map((service, index) => {
                        const isEven = index % 2 === 0
                        const isActive = activeTab === index

                        // Organic Border Radius Variations for "Wavy" look
                        const borderRadii = [
                            "55% 45% 30% 70% / 60% 40% 70% 30%",
                            "40% 60% 70% 30% / 50% 50% 20% 80%",
                            "60% 40% 30% 70% / 70% 30% 50% 50%",
                            "45% 55% 60% 40% / 55% 45% 40% 60%"
                        ];
                        const shapeIndex = index % borderRadii.length;
                        const customRadius = borderRadii[shapeIndex];

                        return (
                            <button
                                key={index}
                                onClick={() => scrollToSection(index, service.title)}
                                className={`
                                    relative w-full py-4 px-6 flex items-center justify-center text-center transition-all duration-300 border-2 shadow-lg hover:shadow-xl hover:-translate-y-1
                                    ${isEven
                                        ? "bg-white text-[#DC7026] border-white hover:bg-gray-50"
                                        : "bg-[#DC7026] text-white border-[#DC7026] hover:bg-[#DC7026]/90"
                                    }
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

            {/* Service Sections */}
            <div className="space-y-32 pb-32">
                {services.map((service, index) => {
                    const details = serviceDetails[service.title];
                    const isEven = index % 2 === 0; // Matching the pattern: 0=White, 1=Orange
                    // Actually, photos show:
                    // Strat Comms (0) -> White Pill
                    // PR (1) -> Orange Pill
                    // Matches index % 2 === 0 logic.

                    // Organic Border Radius Variations for "Wavy" look
                    const borderRadii = [
                        "55% 45% 30% 70% / 60% 40% 70% 30%",
                        "40% 60% 70% 30% / 50% 50% 20% 80%",
                        "60% 40% 30% 70% / 70% 30% 50% 50%",
                        "45% 55% 60% 40% / 55% 45% 40% 60%"
                    ];
                    const shapeIndex = index % borderRadii.length;
                    const customRadius = borderRadii[shapeIndex];

                    return (
                        <section
                            id={slugify(service.title)}
                            key={index}
                            className="scroll-mt-48 flex flex-col items-center justify-center max-w-5xl mx-auto px-4"
                        >
                            {/* Card / Pill Title with Organic Shape */}
                            <div
                                className={`
                                    relative w-full max-w-4xl py-12 px-8 md:px-16 text-center mb-16 shadow-2xl
                                    flex items-center justify-center min-h-[200px] transition-all duration-500 hover:scale-[1.02]
                                    ${isEven
                                        ? "bg-white text-[#DC7026]"
                                        : "bg-[#DC7026] text-white"
                                    }
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
                                    <div key={i} className="flex items-center justify-center gap-4 group">
                                        <span className={`
                                            w-3 h-3 rounded-full flex-shrink-0 transition-transform group-hover:scale-125
                                            ${isEven ? "bg-[#DC7026]" : "bg-white"}
                                        `}></span>
                                        <p className="text-white font-bold uppercase text-2xl md:text-4xl tracking-wide leading-snug text-center" style={{ fontFamily: 'var(--font-display)' }}>
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}
