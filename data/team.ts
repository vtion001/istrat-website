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
        name: "Arnold Santos Argaño",
        role: "Chief Executive Officer",
        bio: "A seasoned creative leader with 30 years in marketing and communications, including two decades in PR consultancy for political clients. A multi-hyphenate expert in writing, directing, and production, he also mentors as an acting coach and community theatre organizer.",
        image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1772164025/u41rmed3vpv7buixoiu5.png",
        department: "Executive Leadership",
        linkedin: "https://linkedin.com",
        level: 1,
    },
    {
        name: "Erwyn Claudio",
        role: "Operations Manager",
        bio: "An expert in creative production, he is the go-to person for bringing ideas to life. His mastery comes from years of experience, having served as an Executive Producer at Timeline Production, a Creative Producer at Studio Claudio, and a Game Producer at Solar Sports. His deep understanding of the craft ensures seamless execution from concept to completion.",
        image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1771187179/bvre4bqg9jce22ijg2ov.png",
        department: "Operations",
        linkedin: "https://linkedin.com",
        level: 2,
    },
    {
        name: "Ric B. Lopez",
        role: "Admin Head",
        bio: "An experienced administrator with 17+ years in government and private sectors, specializing in HR management, workplace operations, and policy compliance.",
        image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1771187179/un32ti3jiz9khkyltnqe.png",
        department: "Administration",
        linkedin: "https://linkedin.com",
        level: 2,
    },
    {
        name: "Gabriel R. Dela Paz",
        role: "Creative Director",
        bio: "Multidisciplinary creative specializing in photography, cinematography, editing, drone aerials, 3D visualization, graphic design, and event DJing. Blending technical precision with artistic vision to craft immersive visual and audio experiences across digital and live platforms.",
        image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1772164026/pna8qvkfa1spk592gl6z.png",
        department: "Creative",
        linkedin: "https://linkedin.com",
        level: 2,
    },
    {
        name: "Enrico Testa",
        role: "Senior Multimedia Specialist / Editor",
        bio: "Senior Multimedia Specialist and Editor with extensive experience in video production, post-production, and visual storytelling. Skilled in leading creative projects from concept to final delivery, managing cross-functional collaboration, and producing high-impact multimedia content across digital, broadcast, and social platforms.",
        image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1772164026/h9q9zsc0ehsm11sqh6sv.png",
        department: "Creative",
        linkedin: "https://linkedin.com",
        level: 3,
    },
    {
        name: "Joey Campillo",
        role: "Senior Creative Director",
        bio: "Visionary Senior Creative Director with 10+ years of experience leading high-performing creative teams and delivering award-winning, brand-defining campaigns across digital, print, and experiential platforms. Proven ability to translate business objectives into compelling creative strategies that drive engagement, growth, and market differentiation. Expert in brand development, integrated marketing, and storytelling, with strong executive presence and a track record of mentoring talent, managing multimillion-dollar budgets, and partnering cross-functionally to execute innovative, results-driven solutions.",
        image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1772164025/dumnmrpjs1wfrnnnibi4.png",
        department: "Creative",
        linkedin: "https://linkedin.com",
        level: 3,
    },
    {
        name: "Ela Marie Teodosio",
        role: "Copywriter",
        bio: "A digital strategist and content producer with over a decade of experience in social media, broadcast, and print, known for creating engaging, high-impact content.",
        image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1772569302/caszkwemvve2eushtwpx.png",
        department: "Creative",
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
