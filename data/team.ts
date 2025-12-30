/**
 * Team Data for iStrat Website
 * Centralized data store for leadership and team member information
 */

export interface TeamMember {
    name: string
    role: string
    bio: string
    image?: string
}

export const team: TeamMember[] = [
    {
        name: "Arnold Santos Argano",
        role: "Chief Executive Officer",
        bio: "Creative powerhouse and leader across writing, directing, events, social media strategy, and management with three decades of experience.",
    },
    {
        name: "Erwyn Claudio",
        role: "PR Consultant",
        bio: "Award-winning communications specialist with Anvil and IABC Quill Awards for global automotive brands.",
    },
    {
        name: "Ric Lopez",
        role: "Operations Head",
        bio: "20 years in creative execution producing radio and TV commercials for private and government institutions, including international advertising projects.",
    },
    {
        name: "Eugenio S. Aguilar",
        role: "Social Media Strategy Consultant",
        bio: "Storyteller and strategist crafting viral digital content, consultant and digital strategist for Lahi.PH.",
    },
    {
        name: "Ferdie Aboga",
        role: "Content and Creative Consultant",
        bio: "Media leader with broadcast journalism expertise, previously at CNN Philippines and ABS-CBN overseeing news operations.",
    },
    {
        name: "Ela Marie Teodosio",
        role: "Admin Head",
        bio: "17+ years in administration and HR in government and private sectors, ensuring efficient operations and compliance.",
    },
    {
        name: "Lou Bognot",
        role: "Accounts and Media Consultant",
        bio: "30 years in brand building and retail marketing, strategic thinker and CRM advocate driving impactful marketing strategies.",
    },
]

// Generate avatar URL for team member
export const getTeamMemberAvatar = (name: string): string => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=111111&color=DC7026&size=256&bold=true`
}
