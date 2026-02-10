"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { VIDEOS, isVideoSrc, type VideoData } from "@/data"

interface YTPreviewImageProps {
    poster?: string
    title: string
}

function YTPreviewImage({ poster, title }: YTPreviewImageProps) {
    const [src, setSrc] = useState<string | undefined>(poster)

    useEffect(() => {
        setSrc(poster)
    }, [poster])

    return (
        <Image
            src={src || "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"}
            alt={title}
            width={640}
            height={160}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            onError={() => {
                if (src?.includes("maxresdefault")) setSrc(src.replace("maxresdefault", "hqdefault"))
            }}
        />
    )
}

interface VideoCardProps {
    name: string
    className?: string
    video?: VideoData
}

export default function VideoCard({ name, className, video }: VideoCardProps) {
    const [desc, setDesc] = useState<string | undefined>(video?.desc || VIDEOS[name]?.desc)
    const videoData = video || VIDEOS[name]

    useEffect(() => {
        setDesc(videoData?.desc)
    }, [name, videoData?.desc])

    useEffect(() => {
        if (!desc) {
            const href = videoData?.href || videoData?.src
            const isYt = href && (/youtu\.be|youtube\.com/.test(href))
            if (isYt && href) {
                const q = encodeURIComponent(href)
                fetch(`/api/youtube-desc?url=${q}`)
                    .then((r) => r.json())
                    .then((d) => {
                        if (d?.desc) setDesc(d.desc)
                    })
                    .catch(() => { })
            }
        }
    }, [desc, name, videoData?.href, videoData?.src])

    const href = videoData?.href || videoData?.src || "#"
    const title = videoData?.title || name
    const isVideo = isVideoSrc(videoData?.src)
    const poster = videoData?.poster

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative rounded-[32px] overflow-hidden bg-black flex flex-col h-[400px] transition-all duration-300 transform-gpu ${className || ""}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -2 }}
        >
            {/* Stacked Image Visuals (Right Side) */}
            <div className="absolute bottom-0 right-0 w-3/5 h-4/5 pointer-events-none pr-4 pb-4">
                <div className="relative w-full h-full">
                    {/* Background Image (Rotated) */}
                    <div className="absolute bottom-4 right-4 w-4/5 h-3/5 opacity-20 translate-x-4 translate-y-4 rotate-6 group-hover:rotate-12 transition-transform duration-700">
                        {isVideo ? (
                            <video src={videoData?.src} className="object-cover w-full h-full rounded-2xl shadow-2xl grayscale" muted />
                        ) : (
                            <Image src={poster || "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"} alt="" fill className="object-cover rounded-2xl shadow-2xl grayscale" />
                        )}
                    </div>
                    {/* Foreground Image (Rotated) */}
                    <div className="absolute bottom-0 right-0 w-4/5 h-3/5 opacity-60 translate-x-0 translate-y-0 rotate-3 group-hover:rotate-6 transition-transform duration-700 overflow-hidden rounded-2xl shadow-2xl">
                        {isVideo ? (
                            <video
                                src={videoData?.src}
                                className="object-cover w-full h-full"
                                muted
                                autoPlay
                                loop
                                playsInline
                            />
                        ) : (
                            <YTPreviewImage poster={poster} title={title} />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* Play Button Overlay on the Small Thumb */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-75 group-hover:scale-100">
                            <div className="w-10 h-10 rounded-full bg-[#DC7026]/90 flex items-center justify-center text-[#06241f] backdrop-blur-md shadow-[0_0_20px_rgba(220,112,38,0.4)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-4 h-4 fill-current ml-0.5"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                <div className="max-w-[70%]">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#DC7026]/80 uppercase">
                            {isVideo ? "VIDEO" : "YOUTUBE"}
                        </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 tracking-tight text-white leading-[1.2]">{name}</h3>
                    <p className="text-base text-gray-400 leading-relaxed line-clamp-3">
                        {desc || "Event highlight and production excellence."}
                    </p>
                </div>

                <div className="flex items-center gap-3 mt-8">
                    <span className="px-6 py-2.5 rounded-full text-[10px] font-bold text-white uppercase group-hover:bg-[#DC7026] group-hover:text-black transition-all duration-300">
                        View Project
                    </span>
                </div>
            </div>
        </motion.a>
    )
}
