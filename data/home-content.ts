/**
 * Home Page Content Data
 * Centralized content for homepage sections
 */

export interface CoreValue {
    number: string
    title: string
    subtitle: string
    description: string
}

export const homeContent = {
    tagline: {
        heading: "We don't just run campaigns.",
        subheading: "We move people, shape narratives, and drive action.",
        description: "iStrat is a strategy-led communications firm defined to help brands live their values, influence conversations, and achieve meaningful impact. We work with organisations that care about how they show  up—and the influence they leave behind.",
        cta: {
            text: "We work with brands, leaders, and institutions that don't just want visibility—",
            highlight: "They want impact."
        }
    },

    vision: {
        label: "THE VISION",
        heading: "To shape a world where brands don't just speak—",
        highlight: "they lead.",
        description: "We envision communication that builds confidence, earns credibility, and creates meaningful connections that last—shaping culture, trust, and real-world impact through strategic influence."
    },

    mission: {
        label: "OUR MISSION",
        heading: "To help brands LIVE with authenticity, INFLUENCE with intention, and WIN through trust and relevance.",
        description: "We design strategy-driven advocacy and integrated communications that turn ideas into influence, and influence into measurable results."
    },

    coreValuesIntro: {
        label: "CORE VALUES",
        heading: "We don't just deliver campaigns.",
        subheading: "We build influence that lasts."
    }
}

export const coreValues: CoreValue[] = [
    {
        number: "01",
        title: "LIVE AUTHENTICALLY",
        subtitle: "We believe real influence starts with truth.",
        description: "Every message we build is grounded in clarity, purpose, and credibility."
    },
    {
        number: "02",
        title: "INFLUENCE WITH INTENT",
        subtitle: "We don't chase attention—we earn it.",
        description: "Through strategic storytelling, earned media, and disciplined execution, we shape conversations that matter."
    },
    {
        number: "03",
        title: "WIN WITH MEANING",
        subtitle: "Success isn't just visibility—it's impact.",
        description: "We measure our work by the trust we build, the narratives we shift, and the outcomes we deliver."
    }
]
