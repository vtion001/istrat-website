"use client"

import { motion, AnimatePresence } from "framer-motion"

interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
    video: {
        src: string
        poster?: string
        title?: string
    } | null
}

export default function VideoModal({ isOpen, onClose, video }: VideoModalProps) {
    if (!video) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-x-4 md:inset-x-24 top-20 md:top-28 border border-white/5 bg-black rounded-[32px] p-4 md:p-6 shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-white text-sm md:text-base font-medium">
                                {video.title || "Video Reel"}
                            </p>
                            <button
                                onClick={onClose}
                                className="px-3 py-2 border border-white/20 bg-white/5 text-white hover:bg-[#DC7026] transition-colors rounded-lg"
                                aria-label="Close video"
                            >
                                Close
                            </button>
                        </div>
                        <div className="relative w-full aspect-video">
                            <video
                                className="w-full h-full object-cover rounded-2xl"
                                src={video.src}
                                poster={video.poster}
                                title={video.title || "Video Reel"}
                                preload="metadata"
                                controls
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#DC7026]/10 to-[#3C4699]/10 rounded-2xl" />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
