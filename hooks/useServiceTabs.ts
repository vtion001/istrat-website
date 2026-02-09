/**
 * Custom hook for managing service tabs and accordion state
 * Extracted from our-services/page.tsx for better separation of concerns
 */

import { useState } from "react"

export function useServiceTabs(initialTab: number = 0) {
    const [activeTab, setActiveTab] = useState(initialTab)
    const [openAccordion, setOpenAccordion] = useState<number | null>(null)

    const handleTabChange = (index: number) => {
        setActiveTab(index)
    }

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index)
    }

    return {
        activeTab,
        setActiveTab: handleTabChange,
        openAccordion,
        toggleAccordion,
    }
}
