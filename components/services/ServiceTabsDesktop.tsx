/**
 * Service Tabs Desktop Component
 * Desktop view with tab navigation and modal cards
 */

"use client"

import Image from "next/image"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal"
import GooeyNav from "@/components/ui/gooey-nav"
import ServiceModalContent from "./ServiceModalContent"
import type { Service, ServiceDetail } from "@/data"

interface ServiceTabsDesktopProps {
    services: Service[]
    serviceDetails: Record<string, ServiceDetail>
    activeTab: number
    onTabChange: (index: number) => void
}

export default function ServiceTabsDesktop({ services, serviceDetails, activeTab, onTabChange }: ServiceTabsDesktopProps) {
    const currentService = services[activeTab]

    return (
        <div className="hidden lg:block">
            {/* SVG Filter for Gooey Effect */}
            <svg style={{ position: 'absolute', width: 0, height: 0, visibility: 'hidden' }}>
                <defs>
                    <filter id="gooey" colorInterpolationFilters="sRGB">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="gooey"
                        />
                        <feBlend in="SourceGraphic" in2="gooey" />
                    </filter>
                </defs>
            </svg>

            {/* Tab Navigation */}
            <div className="mb-16">
                <GooeyNav
                    items={services.map(service => ({ label: service.title, href: '#' }))}
                    initialActiveIndex={activeTab}
                    onItemClick={onTabChange}
                    colors={[1, 2, 3, 4]}
                    animationTime={400}
                    particleCount={20}
                    particleDistances={[80, 15]}
                    particleR={120}
                />
            </div>

            {/* Tab Content */}
            <div className="flex justify-center">
                <Modal>
                    <ModalTrigger className="w-full flex justify-center">
                        <div className={`relative ${currentService.height} w-full max-w-[500px] rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#DC7026]/40 hover:shadow-[0_0_40px_rgba(220,112,38,0.2)]`}>
                            <Image
                                src={currentService.image || "/images/services/marketing.svg"}
                                alt={currentService.title}
                                fill
                                className="object-cover opacity-50 grayscale contrast-110 group-hover:opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-8 text-left bg-gradient-to-t from-black via-black/90 to-transparent">
                                <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#DC7026] mb-3" style={{ fontFamily: 'var(--font-label)' }}>{currentService.category}</p>
                                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>{currentService.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{currentService.description}</p>
                            </div>
                        </div>
                    </ModalTrigger>
                    <ModalBody>
                        <ModalContent>
                            <ServiceModalContent
                                service={currentService}
                                details={serviceDetails[currentService.title]}
                            />
                        </ModalContent>
                        <ModalFooter className="gap-4">
                            <a
                                href="/contact-us"
                                className="px-8 py-3 bg-[#DC7026] text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#DC7026]/90 transition-all"
                            >
                                Discuss Project
                            </a>
                        </ModalFooter>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    )
}
