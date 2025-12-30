"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { VIDEOS, isVideoSrc } from "@/data"

interface SocialMediaCardProps {
    name: string
    stat: string
    className?: string
    index?: number
}

export default function SocialMediaCard({
    name,
    stat,
    className = "",
    index = 0,
}: SocialMediaCardProps) {
    const videoData = VIDEOS[name]
    const isVideo = isVideoSrc(videoData?.src)
    const poster = videoData?.poster || `https://graph.facebook.com/${name.replace(/\s+/g, '')}/picture?type=large`
    const href = videoData?.href || videoData?.src || "#"

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative rounded-[32px] overflow-hidden bg-[#080808] border border-white/5 flex flex-col h-[400px] hover:border-[#DC7026]/30 transition-all duration-300 transform-gpu ${className}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -2 }}
        >
            {/* Stacked Visuals (Bottom Right) */}
            <div className="absolute bottom-0 right-0 w-3/5 h-4/5 pointer-events-none pr-4 pb-4">
                <div className="relative w-full h-full">
                    {/* Background Visual */}
                    <div className="absolute bottom-4 right-4 w-4/5 h-3/5 opacity-20 translate-x-4 translate-y-4 rotate-6 group-hover:rotate-12 transition-transform duration-700">
                        <Image src={poster} alt="" fill className="object-cover rounded-2xl border border-white/10 shadow-2xl grayscale" />
                    </div>
                    {/* Primary Visual */}
                    <div className="absolute bottom-0 right-0 w-4/5 h-3/5 opacity-60 translate-x-0 translate-y-0 rotate-3 group-hover:rotate-6 transition-transform duration-700 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                        {isVideo ? (
                            <video src={videoData?.src} className="object-cover w-full h-full" muted autoPlay loop playsInline />
                        ) : (
                            <Image src={poster} alt={name} fill className="object-cover" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#DC7026]/80 uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                            FOLLOW
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 tracking-tight text-white leading-[1.2]">{name}</h3>
                    <p className="text-[#DC7026] text-[10px] font-extrabold tracking-[0.2em] uppercase">{stat}</p>
                    <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-[200px] line-clamp-2">
                        {videoData?.desc || "Active community engagement and digital strategy."}
                    </p>
                </div>

                <div className="mt-8">
                    <span className="px-6 py-2.5 rounded-full border border-white/15 text-[10px] font-bold text-white uppercase group-hover:bg-[#DC7026] group-hover:text-black group-hover:border-[#DC7026] transition-all duration-300">
                        View Profile
                    </span>
                </div>
            </div>
        </motion.a>
    )
}
