/**
 * Work Grid Component
 * Video grid with GSAP Flip animations
 */

"use client"

import VideoCard from "@/components/cards/video-card"
import type { VideoData } from "@/data"

interface VideoWithKey extends VideoData {
    key: string
}

interface WorkGridProps {
    videos: VideoWithKey[]
    gridRef: React.RefObject<HTMLDivElement | null>
    onVideoClick: (key: string) => void
}

export default function WorkGrid({ videos, gridRef, onVideoClick }: WorkGridProps) {
    return (
        <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
            {videos.map((video) => (
                <div 
                    key={video.key} 
                    data-video-card
                    onClick={() => onVideoClick(video.key)}
                    className="cursor-pointer"
                >
                    <VideoCard
                        name={video.key}
                        video={video}
                    />
                </div>
            ))}
        </div>
    )
}
