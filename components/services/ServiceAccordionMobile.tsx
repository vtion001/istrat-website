/**
 * Service Accordion Mobile Component
 * Mobile view that mirrors the desktop's scrolling sections and alternating backgrounds
 */

"use client"

import type { Service, ServiceDetail } from "@/data"

interface ServiceAccordionMobileProps {
    services: Service[]
    serviceDetails: Record<string, ServiceDetail>
    openAccordion: number | null
    onToggle: (index: number) => void
}

const slugify = (text: string) => text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

export default function ServiceAccordionMobile({ services, serviceDetails, openAccordion, onToggle }: ServiceAccordionMobileProps) {

    const scrollToSection = (index: number, title: string) => {
        onToggle(index);
        const id = slugify(title);
        const element = document.getElementById(id + "-mobile");
        if (element) {
            const yOffset = -220; // Offset for sticky nav/header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="lg:hidden w-full">
            {/* Navigation Grid (Sticky) */}
            <div className="sticky top-20 z-30 bg-black/90 backdrop-blur-xl py-6 border-b border-white/5 w-full">
                <div className="grid grid-cols-2 gap-3 px-4">
                    {services.map((service, index) => {
                        const isEven = index % 2 === 0;
                        const isActive = openAccordion === index;
                        const isEventManagement = service.title === "Event Management";

                        const btnClass = isEventManagement
                            ? "bg-white text-[#DC7026] border-white"
                            : isEven
                            ? "bg-[#DC7026] text-white border-[#DC7026]"
                            : "bg-white text-[#DC7026] border-white";

                        return (
                            <button
                                key={index}
                                onClick={() => scrollToSection(index, service.title)}
                                className={`
                                    relative w-full h-[110px] flex flex-col items-center justify-center text-center transition-all duration-300 border shadow-md rounded-xl
                                    ${btnClass}
                                    ${isActive ? "scale-105 z-10 ring-2 " + (isEven ? "ring-[#DC7026]/30" : "ring-white/30") : "opacity-90"}
                                `}
                            >
                                {service.icon && (
                                    <img src={service.icon} alt={service.title} className="h-10 sm:h-12 w-auto mb-2 object-contain" />
                                )}
                                <span className="font-display font-black uppercase tracking-tight text-[10px] sm:text-xs leading-tight px-1" style={{ fontFamily: 'var(--font-display)' }}>
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

                    const sectionBg = isEven ? "bg-white" : "bg-black";
                    const textColor = isEven ? "text-black" : "text-white";
                    const bulletColor = isEven ? "bg-black" : "bg-white";

                    const isEventManagement = service.title === "Event Management";
                    const pillClass = isEventManagement
                        ? "bg-white text-[#DC7026]"
                        : isEven
                        ? "bg-[#DC7026] text-white"
                        : "bg-white text-[#DC7026]";

                    return (
                        <section
                            id={slugify(service.title) + "-mobile"}
                            key={index}
                            className={`scroll-mt-48 flex flex-col items-center justify-center w-full py-20 px-4 ${sectionBg}`}
                        >
                            <div className="w-full flex flex-col items-center">
                                {/* Card / Pill Title */}
                                <div
                                    className={`
                                        relative w-full max-w-[280px] h-[120px] text-center mb-12 shadow-lg
                                        flex flex-col items-center justify-center transition-all duration-300 rounded-2xl
                                        ${pillClass}
                                    `}
                                >
                                    {service.icon && (
                                        <img src={service.icon} alt={service.title} className="h-14 w-auto mb-2 object-contain" />
                                    )}
                                    <h2 className="font-display font-black uppercase text-xs sm:text-sm tracking-tight leading-snug px-4" style={{ fontFamily: 'var(--font-display)' }}>
                                        {service.title}
                                    </h2>
                                </div>

                                {/* Bullet Points */}
                                <div className="space-y-6 w-full">
                                    {details?.points.map((point, i) => (
                                        <div key={i} className="flex items-start justify-start gap-4">
                                            <span className={`
                                                mt-2 w-2.5 h-2.5 rounded-full flex-shrink-0
                                                ${bulletColor}
                                            `}></span>
                                            <p className={`${textColor} font-black uppercase text-2xl sm:text-3xl tracking-tight leading-tight text-left`} style={{ fontFamily: 'var(--font-display)' }}>
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
