"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { VideoData } from "@/data"

interface VideoWithKey extends VideoData {
    key: string
}

interface WorkListProps {
    videos: VideoWithKey[]
    onVideoClick: (key: string) => void
}

export default function WorkList({ videos, onVideoClick }: WorkListProps) {
    return (
        <div className="flex flex-col gap-24 sm:gap-32 lg:gap-40">
            {videos.map((video, index) => {
                const isEven = index % 2 === 0

                return (
                    <motion.div
                        key={video.key}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center"
                    >
                        {/* Text Content */}
                        <div className={`space-y-6 sm:space-y-8 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                            <h3
                                className="text-white text-base md:text-lg font-bold mb-6 sm:mb-8 uppercase tracking-widest"
                                style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}
                            >
                                FEATURED PROJECT
                            </h3>
                            <h2
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {video.title}
                            </h2>
                            <p
                                className="text-white text-lg md:text-xl leading-relaxed max-w-xl uppercase"
                                style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}
                            >
                                {video.desc}
                            </p>

                            <button
                                onClick={() => onVideoClick(video.key)}
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Watch Video
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-4 h-4"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                            </button>
                        </div>

                        {/* Image/Video Card */}
                        <div
                            className={`relative aspect-[4/5] lg:aspect-[3/4] rounded-[48px] overflow-hidden border border-white/5 shadow-2xl cursor-pointer group ${isEven ? "lg:order-2" : "lg:order-1"}`}
                            onClick={() => onVideoClick(video.key)}
                        >
                            <Image
                                src={video.poster || "/placeholder.jpg"}
                                alt={video.title || "Project thumbnail"}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-75 group-hover:scale-100">
                                <div className="w-20 h-20 rounded-full bg-[#DC7026]/90 flex items-center justify-center text-[#06241f] backdrop-blur-md shadow-[0_0_30px_rgba(220,112,38,0.5)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-8 h-8 fill-current ml-1"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}
