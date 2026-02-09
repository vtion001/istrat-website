/**
 * Custom hook for managing video modal state
 * Extracted from our-work/page.tsx for better separation of concerns
 */

import { useState } from "react"

export function useVideoModal() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

    const openVideo = (key: string) => {
        setSelectedVideo(key)
    }

    const closeVideo = () => {
        setSelectedVideo(null)
    }

    return {
        selectedVideo,
        openVideo,
        closeVideo,
        isOpen: selectedVideo !== null,
    }
}
