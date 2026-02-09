/**
 * Work Categories Data
 * Category definitions for filtering video portfolio
 */

export interface WorkCategory {
    label: string
    videos: string[]
}

export const workCategories: Record<string, WorkCategory> = {
    all: {
        label: "All Work",
        videos: [
            "Quezon City Government",
            "Quezon City Gawad Parangal 2024",
            "Sen. Guillermo Eleazar Election 2022 TVC",
            "NCRPO Journal",
            "Sama-Sama at Tulong-Tulong",
            "V.Group Crew Guide Animation",
            "My heart beats for Banaue",
            "NEW GREENLAND Urban Farming in Quezon City",
        ],
    },
    government: {
        label: "Government",
        videos: [
            "Quezon City Government",
            "Quezon City Gawad Parangal 2024",
            "Sen. Guillermo Eleazar Election 2022 TVC",
            "NCRPO Journal",
            "Sama-Sama at Tulong-Tulong",
        ],
    },
    corporate: {
        label: "Corporate",
        videos: [
            "V.Group Crew Guide Animation",
            "NEW GREENLAND Urban Farming in Quezon City",
        ],
    },
    advocacy: {
        label: "Advocacy",
        videos: [
            "My heart beats for Banaue",
            "Sama-Sama at Tulong-Tulong",
        ],
    },
}

export const categoryKeys = Object.keys(workCategories) as Array<keyof typeof workCategories>
