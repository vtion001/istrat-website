/**
 * Video Data for iStrat Portfolio
 * Centralized data store for all video/media content used across the site
 */

// Helper to build a YouTube thumbnail URL from a YouTube watch URL
export const ytThumb = (url: string): string => {
    try {
        const u = new URL(url)
        if (u.hostname.includes("youtube.com") || u.hostname.includes("youtu.be")) {
            const v = u.searchParams.get("v") || u.pathname.split("/").pop()
            return v ? `https://img.youtube.com/vi/${v}/maxresdefault.jpg` : ""
        }
    } catch { }
    return ""
}

// Check if URL is a direct video file
export const isVideoSrc = (url?: string): boolean => {
    if (!url) return false
    return /\.(mp4|webm)(\?.*)?$/i.test(url)
}

// Convert YouTube watch URL to embed URL
export const toYouTubeEmbed = (u: string): string => {
    try {
        const url = new URL(u)
        if (url.hostname.includes("youtube.com") && url.pathname === "/watch") {
            const id = url.searchParams.get("v")
            return id ? `https://www.youtube.com/embed/${id}` : u
        }
        if (url.hostname === "youtu.be") {
            const id = url.pathname.slice(1)
            return id ? `https://www.youtube.com/embed/${id}` : u
        }
    } catch { }
    return u
}

// Type definitions
export interface VideoData {
    src: string
    href?: string
    poster?: string
    title?: string
    desc?: string
}

// Hero video URL
export const HERO_VIDEO = "https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4"

// Main video registry
export const VIDEOS: Record<string, VideoData> = {
    "General Eleazar": {
        src: "https://www.facebook.com/GeneralEleazar",
        poster: "https://graph.facebook.com/GeneralEleazar/picture?type=large",
        title: "General Eleazar",
        desc: "Strategic social media management and digital PR for General Eleazar across the Philippines.",
    },
    "Aksyon QC": {
        src: "https://www.facebook.com/AksyonQC",
        poster: "https://graph.facebook.com/AksyonQC/picture?type=large",
        title: "Aksyon QC",
        desc: "Community engagement and real-time public service updates for Quezon City residents.",
    },
    "Matatag": {
        src: "https://www.facebook.com/MatatagPage",
        poster: "https://graph.facebook.com/MatatagPage/picture?type=large",
        title: "Matatag",
        desc: "Advocacy campaign management building resilience in local communities.",
    },
    "GAWAD PARANGAL 2022 HIGHLIGHTS": {
        src: "https://www.youtube.com/watch?v=pU09VaTZXRM",
        poster: ytThumb("https://www.youtube.com/watch?v=pU09VaTZXRM"),
        title: "GAWAD PARANGAL 2022 HIGHLIGHTS",
        desc: "Event management for the prestigious Gawad Parangal awards honoring Quezon City's top achievers.",
    },
    "Mr & Ms Quezon City Employee": {
        src: "https://www.youtube.com/watch?v=CvJflQ2gu3g&t=5s",
        poster: ytThumb("https://www.youtube.com/watch?v=CvJflQ2gu3g&t=5s"),
        title: "Mr & Ms Quezon City Employee",
        desc: "Talent and pageant management showcasing the dedicated workforce of the Quezon City Government.",
    },
    "Pista sa QC": {
        src: "https://www.youtube.com/watch?v=ys7EulEQAhU&t=15s",
        poster: ytThumb("https://www.youtube.com/watch?v=ys7EulEQAhU&t=15s"),
        title: "Pista sa QC",
        desc: "Full event coverage and management for Pista sa QC, highlighting local culture and tourism.",
    },
    "ALAB FOR LOVE Pride PH Festival": {
        src: "https://www.youtube.com/watch?v=s_DFhmMFmU8",
        poster: ytThumb("https://www.youtube.com/watch?v=s_DFhmMFmU8"),
        title: "ALAB FOR LOVE Pride PH Festival",
        desc: "Massive Pride PH Festival event management held at the Quezon City Memorial Circle.",
    },
    "QUEZON CITY OFFICIALS INAUGURATION 2022": {
        src: "https://www.youtube.com/watch?v=eQrgT0wrJjY",
        poster: ytThumb("https://www.youtube.com/watch?v=eQrgT0wrJjY"),
        title: "QUEZON CITY OFFICIALS INAUGURATION 2022",
        desc: "Official inauguration ceremony management for newly elected Quezon City officials.",
    },
    "Quezon City Anti-Terrorism Campaign": {
        src: "https://www.youtube.com/watch?v=zGVRrnbo3-8",
        poster: ytThumb("https://www.youtube.com/watch?v=zGVRrnbo3-8"),
        title: "Quezon City Anti-Terrorism Campaign",
        desc: "Public safety awareness video campaign developed for the Quezon City Government.",
    },
    "19TH GAWAD PARANGAL": {
        src: "https://www.youtube.com/watch?v=ZTIDAD_--O8",
        poster: ytThumb("https://www.youtube.com/watch?v=ZTIDAD_--O8"),
        title: "19TH GAWAD PARANGAL",
        desc: "Event staging and technical execution for the 19th Gawad Parangal in QC.",
    },
    "18TH GAWAD PARANGAL": {
        src: "https://www.youtube.com/watch?v=Lx2tYZO5JeM",
        poster: ytThumb("https://www.youtube.com/watch?v=Lx2tYZO5JeM"),
        title: "18TH GAWAD PARANGAL",
        desc: "Technical direction and live streaming for the 18th Gawad Parangal.",
    },
    "SBP MAYOR JOY BELMONTE GRAND RALLY": {
        src: "https://www.youtube.com/watch?v=PuOxa_VdvJk",
        poster: ytThumb("https://www.youtube.com/watch?v=PuOxa_VdvJk"),
        title: "SBP MAYOR JOY BELMONTE GRAND RALLY",
        desc: "Grand election rally event management for Mayor Joy Belmonte in Quezon City.",
    },
    "Mayor Joy Belmonte Campaign": {
        src: "https://www.youtube.com/watch?v=t9ubqUXS-GI",
        poster: ytThumb("https://www.youtube.com/watch?v=t9ubqUXS-GI"),
        title: "Mayor Joy Belmonte Campaign",
        desc: "Comprehensive political campaign strategy and content creation for Mayor Joy Belmonte.",
    },
    "Sen. Guillermo Eleazar Election 2022 TVC": {
        src: "https://www.youtube.com/watch?v=DGQV3hIIMs0",
        poster: ytThumb("https://www.youtube.com/watch?v=DGQV3hIIMs0"),
        title: "Sen. Guillermo Eleazar Election 2022 TVC",
        desc: "Television commercial management for Senator Guillermo Eleazar's national campaign.",
    },
    "QC NEW YEAR'S COUNTDOWN 2022": {
        src: "https://www.youtube.com/watch?v=EdkKgTfsxiQ",
        poster: ytThumb("https://www.youtube.com/watch?v=EdkKgTfsxiQ"),
        title: "QC NEW YEAR'S COUNTDOWN 2022",
        desc: "Virtual New Year's Countdown event management for Quezon City.",
    },
    "NCRPO Journal": {
        src: "https://www.youtube.com/watch?v=h-OALbbQZLg",
        poster: ytThumb("https://www.youtube.com/watch?v=h-OALbbQZLg"),
        title: "NCRPO Journal",
        desc: "Video journalism and documentation for the National Capital Region Police Office.",
    },
    "Quezon City Virtual Countdown to 2021": {
        src: "https://www.youtube.com/watch?v=b9hQQ5w9Uhs",
        poster: ytThumb("https://www.youtube.com/watch?v=b9hQQ5w9Uhs"),
        title: "Quezon City Virtual Countdown to 2021",
        desc: "Pioneering virtual event management for QC's 2021 New Year celebration.",
    },
    "Sama-Sama at Tulong-Tulong": {
        src: "https://www.youtube.com/watch?v=k1zeOtcO7j0",
        poster: ytThumb("https://www.youtube.com/watch?v=k1zeOtcO7j0"),
        title: "Sama-Sama at Tulong-Tulong",
        desc: "Community outreach campaign video highlighting unity and assistance programs.",
    },
    "V.Group Crew Guide Animation": {
        src: "https://www.youtube.com/watch?v=b9hQQ5w9Uhs",
        poster: ytThumb("https://www.youtube.com/watch?v=b9hQQ5w9Uhs"),
        title: "V.Group Crew Guide Animation",
        desc: "Educational animation developed for V.Group's maritime crew training.",
    },
    "My heart beats for Banaue": {
        src: "https://www.youtube.com/watch?v=hHO25dAiGk4&feature=youtu.be",
        poster: ytThumb("https://www.youtube.com/watch?v=hHO25dAiGk4&feature=youtu.be"),
        title: "My heart beats for Banaue",
        desc: "Tourism promotion campaign reviving interest in the Banaue Rice Terraces.",
    },
    "NEW GREENLAND Urban Farming in Quezon City": {
        src: "https://www.youtube.com/watch?v=35vrOJ0S1_Q&feature=youtu.be",
        poster: ytThumb("https://www.youtube.com/watch?v=35vrOJ0S1_Q&feature=youtu.be"),
        title: "NEW GREENLAND Urban Farming in Quezon City",
        desc: "Documentary on the New Greenland Urban Farming initiative in Quezon City.",
    },
}

// Video highlight entries for Products & Services page
export const videoHighlights = [
    {
        title: "V. Group crew guide animation",
        url: "https://youtu.be/EahkpF69mS4",
        thumb: "https://www.istratmc.com/wp-content/uploads/2022/06/img024.png",
    },
    {
        title: "QC New Year's Countdown 2022",
        url: "https://youtu.be/EdkKgTfsxiQ",
        thumb: "https://i.ytimg.com/vi/EdkKgTfsxiQ/maxresdefault.jpg",
    },
    {
        title: "Quezon City Virtual Countdown to 2021",
        url: "https://www.youtube.com/watch?v=b9hQQ5w9Uhs&t=3s",
        thumb: "https://i.ytimg.com/vi/b9hQQ5w9Uhs/maxresdefault.jpg",
    },
]
