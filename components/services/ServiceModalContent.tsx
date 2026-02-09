/**
 * Service Modal Content Component
 * Reusable modal content for service details
 */

import type { Service, ServiceDetail } from "@/data"

interface ServiceModalContentProps {
    service: Service
    details: ServiceDetail | undefined
}

export default function ServiceModalContent({ service, details }: ServiceModalContentProps) {
    if (!details) return null

    return (
        <>
            <h4 className="text-3xl md:text-4xl text-white font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                {service.title}
            </h4>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {details.summary}
            </p>
            <div className="space-y-4 mb-8">
                {details.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#DC7026] mt-2 shrink-0" />
                        <p className="text-gray-300 text-base leading-relaxed">{point}</p>
                    </div>
                ))}
            </div>
            {details.metrics && (
                <div className="p-6 bg-[#DC7026]/10 border border-[#DC7026]/20 rounded-2xl">
                    <p className="text-[#DC7026] font-bold text-sm uppercase tracking-wider mb-2">Key Metric</p>
                    <p className="text-white text-lg font-medium">{details.metrics}</p>
                </div>
            )}
        </>
    )
}
