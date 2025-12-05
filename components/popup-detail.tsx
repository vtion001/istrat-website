"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

type PopupDetailProps = {
  open: boolean
  onClose: () => void
  title: string
  summary: string
  points: string[]
  ctaLabel?: string
  ctaHref?: string
  images?: string[]
}

export default function PopupDetail({ open, onClose, title, summary, points, ctaLabel = "Contact Us", ctaHref = "/connect-with-us", images = [] }: PopupDetailProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="absolute inset-x-4 md:inset-x-24 top-20 md:top-24 border border-white/10 bg-white/5 backdrop-blur-xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            <div className="relative p-6 md:p-8 max-h-[70vh] overflow-y-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c59f43]/0 to-[#0d71a3]/0" />
              <motion.div
                className="absolute -inset-px rounded-none pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                style={{ boxShadow: "0 0 40px rgba(197,159,67,0.25)" }}
              />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight brand-gradient-text bg-clip-text text-transparent mb-3">{title}</h3>
                <p className="text-[#a0a0a0] mb-6">{summary}</p>
                <ul className="space-y-3 mb-6">
                  {points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#c59f43]" />
                      <span className="text-white">{p}</span>
                    </li>
                  ))}
                </ul>
                {images.length > 0 && (
                  <div className="flex justify-center mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full md:w-3/4 border border-white/10 bg-white/5"
                    >
                      <img
                        src={images[0]}
                        alt={`${title} featured image`}
                        className="w-full h-auto opacity-90 object-contain"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#c59f43]/0 to-[#0d71a3]/0 pointer-events-none" />
                    </motion.div>
                  </div>
                )}
                <div className="flex items-center justify-between gap-3">
                  <button onClick={onClose} className="px-4 py-3 border border-white/10 bg-white/10 text-white hover:bg_WHITE/20 transition-colors">Close</button>
                  <a href={ctaHref} className="inline-flex items-center gap-3 px-6 py-4 border border-white/10 bg-[#c59f43]/30 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-[#c59f43] transition-colors">
                    {ctaLabel}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
