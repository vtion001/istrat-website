/**
 * Service Accordion Mobile Component
 * Mobile view with accordion-style service cards
 */

"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal"
import ServiceModalContent from "./ServiceModalContent"
import type { Service, ServiceDetail } from "@/data"

interface ServiceAccordionMobileProps {
    services: Service[]
    serviceDetails: Record<string, ServiceDetail>
    openAccordion: number | null
    onToggle: (index: number) => void
}

export default function ServiceAccordionMobile({ services, serviceDetails, openAccordion, onToggle }: ServiceAccordionMobileProps) {
    return (
        <div className="lg:hidden space-y-4">
            {services.map((service, index) => (
                <div
                    key={service.title}
                    className="border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
                >
                    {/* Accordion Header */}
                    <button
                        onClick={() => onToggle(index)}
                        className={`w-full h-[140px] flex flex-col items-center justify-center text-center transition-all duration-300 border-2 rounded-2xl
                            ${(() => {
                                const isEven = index % 2 === 0;
                                const isEventManagement = service.title === 'Event Management';
                                if (isEventManagement) return 'bg-white text-[#DC7026] border-white hover:bg-gray-50';
                                return isEven ? 'bg-[#DC7026] text-white border-[#DC7026] hover:bg-[#DC7026]/90' : 'bg-white text-[#DC7026] border-white hover:bg-gray-50';
                            })()}
                            ${openAccordion === index ? 'ring-4 ' + ((index % 2 === 0) ? 'ring-[#DC7026]/30' : 'ring-white/30') : 'opacity-90 hover:opacity-100'}
                        `}
                    >
                        {service.icon && (
                            <img src={service.icon} alt={service.title} className="h-16 sm:h-20 md:h-24 lg:h-25 w-auto mb-2 sm:mb-3 object-contain" />
                        )}
                        <span className="font-display font-black uppercase tracking-wide text-xs sm:text-sm md:text-base leading-tight sm:leading-snug px-2" style={{ fontFamily: 'var(--font-display)' }}>
                            {service.title}
                        </span>
                        <ChevronRight
                            size={20}
                            className={`text-[#DC7026] transition-transform duration-300 flex-shrink-0 mt-2 ${openAccordion === index ? 'rotate-90' : ''}`}
                        />
                    </button>

                    {/* Accordion Content */}
                    <div
                        className={`transition-all duration-300 overflow-hidden ${openAccordion === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <Modal>
                            <ModalTrigger className="w-full">
                                <div className={`relative ${service.height} w-full cursor-pointer`}>
                                    <Image
                                        src={service.image || "/images/services/marketing.svg"}
                                        alt={service.title}
                                        fill
                                        className="object-cover opacity-50 grayscale contrast-110"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-6 text-left bg-gradient-to-t from-black via-black/90 to-transparent">
                                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            </ModalTrigger>
                            <ModalBody>
                                <ModalContent>
                                    <ServiceModalContent
                                        service={service}
                                        details={serviceDetails[service.title]}
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
            ))}
        </div>
    )
}
