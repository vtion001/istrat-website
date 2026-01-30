/**
 * Services Data for iStrat Website
 * Centralized data store for all service offerings
 */

export interface Service {
    title: string
    category?: string
    description: string
    image?: string
    height?: string
    delay?: number
}

export interface ServiceDetail {
    summary: string
    points: string[]
}

// Home page services (compact format)
export const homeServices: Service[] = [
    {
        title: "Integrated Marketing Communications",
        description: "Unified brand identity across channels with cohesive strategy and optimization.",
    },
    {
        title: "Brand Development, Concept, Design and Management",
        description: "End-to-end creative execution from initial concept to market presence.",
    },
    {
        title: "Event Conceptualization, Management, and Staging",
        description: "Award-winning events from intimate gatherings to national campaigns.",
    },
    {
        title: "Audio-Visual Productions and Live-Streaming",
        description: "Broadcast-quality content creation across traditional and digital platforms.",
    },
    {
        title: "Social Media Management and Digital Marketing",
        description: "Data-driven strategies building engaged communities and measurable growth.",
    },
    {
        title: "Media Relations / Public Relations / Advocacy",
        description: "Strategic narrative development fostering trust with stakeholders.",
    },
]

// Products & Services page services (detailed format with images)
export const productsServices: Service[] = [
    {
        title: "Integrated Marketing",
        category: "Communications",
        description: "Unified brand identity across channels with cohesive strategy, content, and performance optimization.",
        image: "https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_500,c_fill,q_auto/istrat/services/marketing",
        height: "h-[520px]",
        delay: 0.1,
    },
    {
        title: "Brand Development",
        category: "Strategy",
        description: "End-to-end creative execution from initial concept to nationwide recognition and market presence.",
        image: "https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_500,c_fill,q_auto/istrat/services/brand",
        height: "h-[480px]",
        delay: 0.2,
    },
    {
        title: "Event Management",
        category: "Production",
        description: "Award-winning events from intimate corporate gatherings to national campaigns.",
        image: "https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_500,c_fill,q_auto/istrat/services/events",
        height: "h-[500px]",
        delay: 0.3,
    },
    {
        title: "Audio-Visual Production",
        category: "Media",
        description: "Broadcast-quality video content creation across traditional and digital platforms.",
        image: "https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_500,c_fill,q_auto/istrat/services/audiovisual",
        height: "h-[460px]",
        delay: 0.4,
    },
    {
        title: "Digital Marketing",
        category: "Social Media",
        description: "Data-driven strategies, community management, and performance analytics to drive digital growth.",
        image: "https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_500,c_fill,q_auto/istrat/services/digital",
        height: "h-[450px]",
        delay: 0.5,
    },
    {
        title: "Advocacy Relations",
        category: "Community",
        description: "Media relations, press office setup, and reputation building for meaningful social influence.",
        image: "https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_500,c_fill,q_auto/istrat/services/advocacy",
        height: "h-[480px]",
        delay: 0.6,
    },
]

// Detailed service information for popup/modal
export const serviceDetails: Record<string, ServiceDetail> = {
    "Integrated Marketing": {
        summary: "Unified brand identity across channels with cohesive strategy, content, and performance optimization.",
        points: ["Cross-channel strategy", "Content optimization", "Performance tracking", "Brand consistency"],
    },
    "Brand Development": {
        summary: "End-to-end creative execution from initial concept to nationwide recognition and market presence.",
        points: ["Brand identity", "Creative direction", "Market positioning", "Visual systems"],
    },
    "Event Management": {
        summary: "Award-winning events from intimate corporate gatherings to national campaigns.",
        points: ["Event design", "Logistics", "Production", "Post-event analytics"],
    },
    "Audio-Visual Production": {
        summary: "Broadcast-quality video content creation across traditional and digital platforms.",
        points: ["Video production", "Live streaming", "Motion graphics", "Post-production"],
    },
    "Digital Marketing": {
        summary: "Data-driven strategies and community building to drive growth across digital landscapes.",
        points: ["Content strategy", "Social management", "Performance ads", "Growth analytics"],
    },
    "Advocacy Relations": {
        summary: "Earning attention through consistent storytelling and strong media relationships for long-term influence.",
        points: ["Press office", "Message discipline", "Stakeholder comms", "Reputation audits"],
    },
}
