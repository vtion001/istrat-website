/**
 * Team Data for iStrat Website
 * Centralized data store for leadership and team member information
 */

export interface TeamMember {
    name: string
    role: string
    bio: string
    image?: string
    department?: string
    linkedin?: string
    level?: number // 1 = Top leadership, 2 = C-Suite, 3 = Department heads, etc.
}

export const team: TeamMember[] = [
    {
        name: "Arnold Santos Argano",
        role: "Chief Executive Officer",
        bio: "Creative powerhouse and leader across writing, directing, events, social media strategy, and management with three decades of experience.",
        image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1769735836/wegddz1xfc1kdwbjbm0e.webp",
        department: "Executive Leadership",
        linkedin: "https://linkedin.com",
        level: 1,
    },
    {
        name: "Erwyn Claudio",
        role: "PR Consultant",
        bio: "Award-winning communications specialist with Anvil and IABC Quill Awards for global automotive brands.",
        image: "/images/team/erwyn_claudio_bw.png",
        department: "Public Relations",
        linkedin: "https://linkedin.com",
        level: 2,
    },
    {
        name: "Ric Lopez",
        role: "Operations Head",
        bio: "20 years in creative execution producing radio and TV commercials for private and government institutions, including international advertising projects.",
        image: "/images/team/ric_lopez_bw.png",
        department: "Operations",
        linkedin: "https://linkedin.com",
        level: 2,
    },
    {
        name: "Eugenio S. Aguilar",
        role: "Social Media Strategy Consultant",
        bio: "Storyteller and strategist crafting viral digital content, consultant and digital strategist for Lahi.PH.",
        image: "/images/team/eugenio_aguilar_bw.png",
        department: "Digital Strategy",
        linkedin: "https://linkedin.com",
        level: 2,
    },
    {
        name: "Ferdie Aboga",
        role: "Content and Creative Consultant",
        bio: "Media leader with broadcast journalism expertise, previously at CNN Philippines and ABS-CBN overseeing news operations.",
        image: "/images/team/ferdie_aboga_bw.png",
        department: "Content & Creative",
        linkedin: "https://linkedin.com",
        level: 2,
    },
    {
        name: "Ela Marie Teodosio",
        role: "Admin Head",
        bio: "17+ years in administration and HR in government and private sectors, ensuring efficient operations and compliance.",
        image: "/images/team/ela_teodosio_bw.png",
        department: "Administration",
        linkedin: "https://linkedin.com",
        level: 3,
    },
    {
        name: "Lou Bognot",
        role: "Accounts and Media Consultant",
        bio: "30 years in brand building and retail marketing, strategic thinker and CRM advocate driving impactful marketing strategies.",
        image: "/images/team/lou_bognot_bw.png",
        department: "Accounts & Media",
        linkedin: "https://linkedin.com",
        level: 3,
    },
]

// Generate avatar URL for team member
export const getTeamMemberAvatar = (name: string): string => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=111111&color=DC7026&size=256&bold=true`
}

// Get team members by level
export const getTeamByLevel = (level: number): TeamMember[] => {
    return team.filter(member => member.level === level)
}
