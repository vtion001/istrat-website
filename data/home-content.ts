/**
 * Home Page Content Data
 * Centralized content for homepage sections
 */

export interface CoreValue {
    number: string
    title: string
    subtitle: string
    description: string
    svgUrl?: string
}

export const homeContent = {
    tagline: {
        heading: "WE DON'T JUST RUN CAMPAIGNS.",
        subheading: "WE MOVE PEOPLE, SHAPE NARRATIVES, AND DRIVE ACTION.",
        description: "iStrat is a strategy-led communications firm defined to help brands live their values, influence conversations, and achieve meaningful impact. We work with organisations that care about how they show  up—and the influence they leave behind.",
        cta: {
            text: "We work with brands, leaders, and institutions that don't just want visibility—",
            highlight: "They want impact."
        }
    },

    vision: {
        label: "THE VISION",
        heading: "TO SHAPE A WORLD WHERE BRANDS DON'T JUST SPEAK—",
        highlight: "THEY LEAD.",
        description: "We envision communication that builds confidence, earns credibility, and creates meaningful connections that last—shaping culture, trust, and real-world impact through strategic influence."
    },

    mission: {
        label: "OUR MISSION",
        heading: "TO HELP BRANDS LIVE WITH AUTHENTICITY, INFLUENCE WITH INTENTION, AND WIN THROUGH TRUST AND RELEVANCE.",
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
        description: "Every message we build is grounded in clarity, purpose, and credibility.",
        svgUrl: "https://res.cloudinary.com/dbviya1rj/image/upload/v1770925072/zyrrsqimiygkquy4hsnu.svg"
    },
    {
        number: "02",
        title: "INFLUENCE WITH INTENT",
        subtitle: "We don't chase attention—we earn it.",
        description: "Through strategic storytelling, earned media, and disciplined execution, we shape conversations that matter.",
        svgUrl: "https://res.cloudinary.com/dbviya1rj/image/upload/v1770925071/m4aklmmln97nwkcgfxei.svg"
    },
    {
        number: "03",
        title: "WIN WITH MEANING",
        subtitle: "Success isn't just visibility—it's impact.",
        description: "We measure our work by the trust we build, the narratives we shift, and the outcomes we deliver.",
        svgUrl: "https://res.cloudinary.com/dbviya1rj/image/upload/v1770925072/vm0ig522jg33k44smbik.svg"
    }
]
