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
        title: "Strategic Communications & Advisory",
        category: "Strategic Counsel",
        description: "We don't just advise—we architect communication strategies that shape narratives, influence stakeholders, and drive measurable business outcomes for government and private sector leaders.",
        image: "/images/services/marketing.svg",
        height: "h-[500px]",
    },
    {
        title: "Public Relations & Media Influence",
        category: "Media Relations",
        description: "32 years of building credibility through earned media. We secure coverage that matters, manage reputations proactively, and turn media relationships into strategic assets.",
        image: "/images/services/pr.svg",
        height: "h-[550px]",
    },
    {
        title: "Brand Strategy & Positioning",
        category: "Brand Development",
        description: "From identity creation to market positioning—we build brands that command attention, earn trust, and deliver sustainable competitive advantage across all touchpoints.",
        image: "/images/services/design.svg",
        height: "h-[480px]",
    },
    {
        title: "Integrated Marketing Communications",
        category: "Full-Spectrum Marketing",
        description: "Unified campaigns that convert attention into results. We orchestrate paid, owned, and earned channels to deliver cohesive brand experiences that drive growth.",
        image: "/images/services/digital.svg",
        height: "h-[450px]",
    },
    {
        title: "Advocacy & Stakeholder Engagement",
        category: "Government Relations",
        description: "Trusted by government and advocacy organizations to build coalitions, influence policy dialogue, and engage communities for meaningful social impact.",
        image: "/images/services/advocacy.svg",
        height: "h-[520px]",
    },
    {
        title: "Measurement, Analytics & Insights",
        category: "Data Intelligence",
        description: "DataFusion360 and proprietary analytics turn campaign performance into strategic intelligence. Real-time insights that inform decisions and optimize ROI.",
        image: "/images/services/marketing.svg",
        height: "h-[450px]",
    },
    {
        title: "Corporate & Brand Events Management",
        category: "Event Production",
        description: "Award-winning event execution using state-of-the-art AV technology. From concept to completion—we create brand moments that resonate and deliver impact.",
        image: "/images/services/events.svg",
        height: "h-[500px]",
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
    "Strategic Communications & Advisory": {
        summary: "We architect communication strategies that shape narratives and influence outcomes. Our strategic counsel has guided government agencies, Fortune 500 companies, and advocacy organizations through transformation, crisis, and growth.",
        points: ["Executive positioning", "Narrative architecture", "Stakeholder mapping", "Crisis preparedness"],
        metrics: "32 years advising public and private sector leaders"
    },
    "Public Relations & Media Influence": {
        summary: "We build credibility proactively and protect reputation decisively. Our media relationships span national broadcast, digital, and print—earning coverage that shapes perception and drives outcomes.",
        points: ["Media relations strategy", "Press office operations", "Crisis communication", "Reputation management"],
        metrics: "86K+ followers on managed advocacy channels"
    },
    "Brand Strategy & Positioning": {
        summary: "From naming to visual identity to market positioning—we build brands that command attention and deliver sustainable competitive advantage. Our strategic approach ensures every touchpoint reinforces your brand promise.",
        points: ["Brand architecture", "Visual identity systems", "Positioning strategy", "Brand guidelines"],
        metrics: "Award-winning brand campaigns for government and corporate clients"
    },
    "Integrated Marketing Communications": {
        summary: "Unified campaigns that convert attention into results. We orchestrate paid, owned, and earned channels to deliver cohesive brand experiences across digital, broadcast, print, and live events.",
        points: ["Campaign strategy", "Channel orchestration", "Creative execution", "Performance optimization"],
        metrics: "1M+ followers on managed government social media accounts"
    },
    "Advocacy & Stakeholder Engagement": {
        summary: "Trusted by government agencies and advocacy organizations to build coalitions, influence policy dialogue, and engage communities for social impact. We turn stakeholders into advocates.",
        points: ["Government relations", "Coalition building", "Community engagement", "Policy communication"],
        metrics: "Trusted partner for Quezon City government advocacy initiatives"
    },
    "Measurement, Analytics & Insights": {
        summary: "Our proprietary DataFusion360 platform and analytics expertise turn campaign performance into strategic intelligence. Real-time insights that inform decisions, optimize spend, and prove ROI.",
        points: ["Campaign analytics", "Social listening", "Sentiment analysis", "ROI measurement"],
        metrics: "Real-time analytics powering data-driven decisions"
    },
    "Corporate & Brand Events Management": {
        summary: "Award-winning event production using state-of-the-art AV technology. From intimate executive briefings to large-scale public events—we create brand moments that resonate and deliver measurable impact.",
        points: ["Event strategy & design", "AV production", "Logistics management", "Post-event analysis"],
        metrics: "PTAA Travel Tour Expo, SGV Got Talent, 18th Gawad Parangal QC"
    },
}
