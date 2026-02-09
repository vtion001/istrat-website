"use client"

import { AnimatePresence, motion } from "framer-motion"

type PopupDetailProps = {
  open: boolean
  onClose: () => void
  title: string
  summary: string
  points: string[]
  ctaLabel?: string
  ctaHref?: string
  images?: string[]
  metrics?: string
}

export default function PopupDetail({
  open,
  onClose,
  title,
  summary,
  points,
  ctaLabel = "Contact Us",
  ctaHref = "/contact-us",
  metrics,
}: PopupDetailProps) {
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
            className="absolute inset-x-4 md:inset-x-24 top-20 md:top-24 border border-white/10 bg-black shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            <div className="relative p-6 md:p-8 max-h-[70vh] overflow-y-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#DC7026]/5 to-[#3C4699]/5 pointer-events-none" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-widest text-[#DC7026] mb-3" style={{ fontFamily: 'var(--font-label)' }}>{title}</h3>
                <p className="text-gray-300 mb-6">{summary}</p>
                <ul className="space-y-3 mb-6">
                  {points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#DC7026]" />
                      <span className="text-gray-400">{p}</span>
                    </li>
                  ))}
                </ul>
                {metrics && (
                  <div className="mb-8 p-4 border-l-2 border-[#DC7026] bg-[#DC7026]/5">
                    <p className="text-[#DC7026] text-xs uppercase tracking-wider font-black mb-1">Proof of Impact</p>
                    <p className="text-gray-300 text-sm font-medium">{metrics}</p>
                  </div>
                )}\n                <div className="flex items-center justify-between gap-3">
                  <button onClick={onClose} className="px-4 py-3 border border-white/20 text-white hover:bg-white/10 transition-colors">Close</button>
                  <a href={ctaHref} className="inline-flex items-center gap-3 px-6 py-4 bg-[#DC7026] text-white hover:bg-[#c5621e] transition-colors">
                    {ctaLabel}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )
      }
    </AnimatePresence >
  )
}
