/**
 * Work Grid Component
 * Video grid with GSAP Flip animations
 */

"use client"

import VideoCard from "@/components/cards/video-card"
import type { Video } from "@/data"

interface WorkGridProps {
    videos: Video[]
    gridRef: React.RefObject<HTMLDivElement>
    onVideoClick: (key: string) => void
}

export default function WorkGrid({ videos, gridRef, onVideoClick }: WorkGridProps) {
    return (
        <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
            {videos.map((video) => (
                <div key={video.key} data-video-card>
                    <VideoCard
                        video={video}
                        onClick={() => onVideoClick(video.key)}
                    />
                </div>
            ))}
        </div>
    )
}
