/**
 * Services Data for iStrat Website
 * Centralized data store for all service offerings
 */

export interface Service {
    title: string
    category?: string
    description: string
    image?: string
    icon?: string
    height?: string
    delay?: number
}

export interface ServiceDetail {
    summary: string
    points: string[]
    metrics?: string
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
        image: "/images/services/marketing.svg",
        height: "h-[520px]",
        delay: 0.1,
    },
    {
        title: "Brand Development",
        category: "Strategy",
        description: "End-to-end creative execution from initial concept to nationwide recognition and market presence.",
        image: "/images/services/brand.svg",
        height: "h-[480px]",
        delay: 0.2,
    },
    {
        title: "Event Management",
        category: "Production",
        description: "Award-winning events from intimate corporate gatherings to national campaigns.",
        image: "/images/services/events.svg",
        height: "h-[500px]",
        delay: 0.3,
    },
    {
        title: "Audio-Visual Production",
        category: "Media",
        description: "Broadcast-quality video content creation across traditional and digital platforms.",
        image: "/images/services/audiovisual.svg",
        height: "h-[460px]",
        delay: 0.4,
    },
    {
        title: "Digital Marketing",
        category: "Social Media",
        description: "Data-driven strategies, community management, and performance analytics to drive digital growth.",
        image: "/images/services/digital.svg",
        height: "h-[450px]",
        delay: 0.5,
    },
    {
        title: "Advocacy Relations",
        category: "Community",
        description: "Media relations, press office setup, and reputation building for meaningful social influence.",
        image: "/images/services/advocacy.svg",
        height: "h-[480px]",
        delay: 0.6,
    },
]

// Our Services page - Full service catalog
export const ourServices: Service[] = [
    {
        title: "Integrated Marketing Communications",
        category: "Communications",
        description: "Unified brand identity across channels with cohesive strategy, content, and performance optimization.",
        image: "/images/services/marketing.svg",
        icon: "https://res.cloudinary.com/dbviya1rj/image/upload/v1773791858/p8b8gwosgmzn4a7eptrk.png",
        height: "h-[650px]",
    },
    {
        title: "Brand Building & Management",
        category: "Strategy",
        description: "End-to-end brand development from concept to nationwide recognition and market presence.",
        image: "/images/services/brand.svg",
        icon: "https://res.cloudinary.com/dbviya1rj/image/upload/v1773791837/ohygizgrazjzfheabiz5.png",
        height: "h-[650px]",
    },
    {
        title: "Measurement, Analytics & Insights",
        category: "Data Intelligence",
        description: "DataFusion360 and proprietary analytics turn campaign performance into strategic intelligence. Real-time insights that inform decisions and optimize ROI.",
        image: "/images/services/analytics.svg",
        icon: "https://res.cloudinary.com/dbviya1rj/image/upload/v1773791856/lywshtcisr8yqrxqiqjl.png",
        height: "h-[650px]",
    },
    {
        title: "Advocacy & Stakeholder Engagement",
        category: "Government Relations",
        description: "Trusted by government and advocacy organizations to build coalitions, influence policy dialogue, and engage communities for meaningful social impact.",
        image: "/images/services/advocacy.svg",
        icon: "https://res.cloudinary.com/dbviya1rj/image/upload/v1773791858/e1bqmppi7wpgny0pcxua.png",
        height: "h-[650px]",
    },
    {
        title: "Event Management",
        category: "Production",
        description: "Award-winning events from intimate corporate gatherings to national campaigns.",
        image: "/images/services/events.svg",
        icon: "https://res.cloudinary.com/dbviya1rj/image/upload/v1773791846/jytuvjhjmfdinjhwpn1a.png",
        height: "h-[650px]",
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
    "Integrated Marketing Communications": {
        summary: "Unified brand identity across channels with cohesive strategy, content, and performance optimization.",
        points: ["Advertising and Public Relations", "Sales Promotion and Direct Marketing", "Personal Selling and Interactive Media"],
    },
    "Brand Building & Management": {
        summary: "End-to-end brand development from concept to nationwide recognition and market presence.",
        points: ["Brand Strategy and Positioning", "Brand Identity and Experience", "Brand Governance and Measurement"],
    },
    "Measurement, Analytics & Insights": {
        summary: "Our proprietary DataFusion360 platform and analytics expertise turn campaign performance into strategic intelligence. Real-time insights that inform decisions, optimize spend, and prove ROI.",
        points: ["Data Management and Governance", "Analytics, Modelling, and Insight Generation", "Visualization, Analysis and Recommendations"],
        metrics: "Real-time analytics powering data-driven decisions"
    },
    "Advocacy & Stakeholder Engagement": {
        summary: "Trusted by government agencies and advocacy organizations to build coalitions, influence policy dialogue, and engage communities for social impact. We turn stakeholders into advocates.",
        points: ["Stakeholder Identification and Mapping", "Strategic Communication and Engagement Planning", "Relationship Management and Accountability"],
        metrics: "Trusted partner for Quezon City government advocacy initiatives"
    },
    "Event Management": {
        summary: "Award-winning events from intimate corporate gatherings to national campaigns.",
        points: ["Planning, Logistics & Technicals", "Concept development, Design, Program, and Messaging", "Execution, Risk, and Evaluation"],
    },
}
