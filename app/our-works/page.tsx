"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const socialMedia = [
  { name: "Aksyon QC", stat: "129K Followers" },
  { name: "General Eleazar", stat: "1M Followers" },
  { name: "Matatag", stat: "866 Followers" },
]

const audioVisual = [
  "Quezon City Anti-Terrorism Campaign",
  "Senator Guillermo Eleazar Social Media Ad",
  "Sen. Guillermo Eleazar Election 2022 TVC",
  "NCRPO Journal",
  "Sama-Sama at Tulong-Tulong",
  "V. Group crew guide animation",
  "My heart beats for Banaue",
  "NEW GREENLAND Urban Farming in Quezon City",
]

const events = [
  "GAWAD PARANGAL 2022 HIGHLIGHTS",
  "19TH GAWAD PARANGAL",
  "18TH GAWAD PARANGAL",
  "SBP MAYOR JOY BELMONTE GRAND RALLY",
  "Pista sa QC",
  "QUEZON CITY OFFICIALS INAUGURATION 2022",
  "QC NEW YEAR’S COUNTDOWN 2022",
  "Quezon City Virtual Countdown to 2021",
  "ALAB FOR LOVE Pride PH Festival",
  "Mr & Ms Quezon City Employee",
]

const externalServices = [
  {
    title: "Integrated Marketing Campaigns",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Integrated-Marketing-Campaigns.png",
  },
  {
    title: "Market Research",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Market-Research.png",
  },
  {
    title: "Graphic Design and Animation",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Graphic-Design-and-Animation.png",
  },
  {
    title: "Brand Development and Strategy",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Brand-Development-and-Strategy.png",
  },
  {
    title: "Advocacy and Social Marketing",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Advocacy-and-Social-Marketing.png",
  },
  {
    title: "Crisis Management",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Crisis-Management.png",
  },
  {
    title: "Public Relations",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Public-Relations.png",
  },
  {
    title: "Video and Stage Production",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Video-and-Stage-Production.png",
  },
  {
    title: "Information Technology",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Information-Technology.png",
  },
]

const HERO_VIDEO = "https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4"

// Helper to build a YouTube thumbnail URL from a YouTube watch URL
const ytThumb = (url: string) => {
  try {
    const u = new URL(url)
    if (u.hostname.includes("youtube.com") || u.hostname.includes("youtu.be")) {
      const v = u.searchParams.get("v") || u.pathname.split("/").pop()
      return v ? `https://img.youtube.com/vi/${v}/maxresdefault.jpg` : ""
    }
  } catch {}
  return ""
}

const isVideoSrc = (url?: string) => {
  if (!url) return false
  return /\.(mp4|webm)(\?.*)?$/i.test(url)
}

const VIDEOS: Record<string, { src: string; href?: string; poster?: string; title?: string; desc?: string }> = {
  "General Eleazar": {
    src: "https://www.facebook.com/GeneralEleazar",
    poster: "https://graph.facebook.com/GeneralEleazar/picture?type=large",
    title: "General Eleazar",
  },
  "Aksyon QC": {
    src: "https://www.facebook.com/AksyonQC",
    poster: "https://graph.facebook.com/AksyonQC/picture?type=large",
    title: "Aksyon QC",
  },
  "Matatag": {
    src: "https://www.facebook.com/MatatagPage",
    poster: "https://graph.facebook.com/MatatagPage/picture?type=large",
    title: "Matatag",
  },
  "GAWAD PARANGAL 2022 HIGHLIGHTS": {
    src: "https://www.youtube.com/watch?v=pU09VaTZXRM",
    poster: ytThumb("https://www.youtube.com/watch?v=pU09VaTZXRM"),
    title: "GAWAD PARANGAL 2022 HIGHLIGHTS",
  },
  "Mr & Ms Quezon City Employee": {
    src: "https://www.youtube.com/watch?v=CvJflQ2gu3g&t=5s",
    poster: ytThumb("https://www.youtube.com/watch?v=CvJflQ2gu3g&t=5s"),
    title: "Mr & Ms Quezon City Employee",
  },
  "Pista sa QC": {
    src: "https://www.youtube.com/watch?v=ys7EulEQAhU&t=15s",
    poster: ytThumb("https://www.youtube.com/watch?v=ys7EulEQAhU&t=15s"),
    title: "Pista sa QC",
  },
  "ALAB FOR LOVE Pride PH Festival": {
    src: "https://www.youtube.com/watch?v=s_DFhmMFmU8",
    poster: ytThumb("https://www.youtube.com/watch?v=s_DFhmMFmU8"),
    title: "ALAB FOR LOVE Pride PH Festival",
  },
  "QUEZON CITY OFFICIALS INAUGURATION 2022": {
    src: "https://www.youtube.com/watch?v=eQrgT0wrJjY",
    poster: ytThumb("https://www.youtube.com/watch?v=eQrgT0wrJjY"),
    title: "QUEZON CITY OFFICIALS INAUGURATION 2022",
  },
  "Quezon City Anti-Terrorism Campaign": {
    src: "https://www.youtube.com/watch?v=zGVRrnbo3-8",
    poster: ytThumb("https://www.youtube.com/watch?v=zGVRrnbo3-8"),
    title: "Quezon City Anti-Terrorism Campaign",
  },
  "19TH GAWAD PARANGAL": {
    src: "https://www.youtube.com/watch?v=ZTIDAD_--O8",
    poster: ytThumb("https://www.youtube.com/watch?v=ZTIDAD_--O8"),
    title: "19TH GAWAD PARANGAL",
  },
  "18TH GAWAD PARANGAL": {
    src: "https://www.youtube.com/watch?v=Lx2tYZO5JeM",
    poster: ytThumb("https://www.youtube.com/watch?v=Lx2tYZO5JeM"),
    title: "18TH GAWAD PARANGAL",
  },
  "SBP MAYOR JOY BELMONTE GRAND RALLY": {
    src: "https://www.youtube.com/watch?v=PuOxa_VdvJk",
    poster: ytThumb("https://www.youtube.com/watch?v=PuOxa_VdvJk"),
    title: "SBP MAYOR JOY BELMONTE GRAND RALLY",
  },
  "Senator Guillermo Eleazar Social Media Ad": {
    src: "https://www.youtube.com/watch?v=t9ubqUXS-GI",
    poster: ytThumb("https://www.youtube.com/watch?v=t9ubqUXS-GI"),
    title: "Senator Guillermo Eleazar Social Media Ad",
  },
  "Sen. Guillermo Eleazar Election 2022 TVC": {
    src: "https://www.youtube.com/watch?v=DGQV3hIIMs0",
    poster: ytThumb("https://www.youtube.com/watch?v=DGQV3hIIMs0"),
    title: "Sen. Guillermo Eleazar Election 2022 TVC",
  },
  "QC NEW YEAR’S COUNTDOWN 2022": {
    src: "https://www.youtube.com/watch?v=EdkKgTfsxiQ",
    poster: ytThumb("https://www.youtube.com/watch?v=EdkKgTfsxiQ"),
    title: "QC NEW YEAR’S COUNTDOWN 2022",
  },
  "NCRPO Journal": {
    src: "https://www.youtube.com/watch?v=h-OALbbQZLg",
    poster: ytThumb("https://www.youtube.com/watch?v=h-OALbbQZLg"),
    title: "NCRPO Journal", 
  },
  "Quezon City Virtual Countdown to 2021": {
    src: "https://www.youtube.com/watch?v=b9hQQ5w9Uhs",
    poster: ytThumb("https://www.youtube.com/watch?v=b9hQQ5w9Uhs"), 
    title: "Quezon City Virtual Countdown to 2021", 
  },
  "Sama-Sama at Tulong-Tulong": {
    src: "https://www.youtube.com/watch?v=k1zeOtcO7j0",
    poster: ytThumb("https://www.youtube.com/watch?v=k1zeOtcO7j0"), 
    title: "Sama-Sama at Tulong-Tulong", 
  },
  "V. Group crew guide animation": {
    src: "https://www.youtube.com/watch?v=b9hQQ5w9Uhs",
    poster: ytThumb("https://www.youtube.com/watch?v=b9hQQ5w9Uhs"), 
    title: "V. Group crew guide animation", 
  },  
  "My heart beats for Banaue": {
    src: "https://www.youtube.com/watch?v=hHO25dAiGk4&feature=youtu.be",
    poster: ytThumb("https://www.youtube.com/watch?v=hHO25dAiGk4&feature=youtu.be"), 
    title: "My heart beats for Banaue", 
  },  
  "NEW GREENLAND Urban Farming in Quezon City": {
    src: "https://www.youtube.com/watch?v=35vrOJ0S1_Q&feature=youtu.be",
    poster: ytThumb("https://www.youtube.com/watch?v=35vrOJ0S1_Q&feature=youtu.be"), 
    title: "NEW GREENLAND Urban Farming in Quezon City", 
  },  
}

function YTPreviewImage({ poster, title }: { poster?: string; title: string }) {
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

function VideoCard({ name }: { name: string }) {
  const [desc, setDesc] = useState<string | undefined>(VIDEOS[name]?.desc)
  useEffect(() => {
    setDesc(VIDEOS[name]?.desc)
  }, [name])
  useEffect(() => {
    if (!desc) {
      const href = VIDEOS[name]?.href || VIDEOS[name]?.src
      const isYt = href && (/youtu\.be|youtube\.com/.test(href))
      if (isYt && href) {
        const q = encodeURIComponent(href)
        fetch(`/api/youtube-desc?url=${q}`).then((r) => r.json()).then((d) => {
          if (d?.desc) setDesc(d.desc)
        }).catch(() => {})
      }
    }
  }, [desc, name])
  const href = VIDEOS[name]?.href || VIDEOS[name]?.src || "#"
  const title = VIDEOS[name]?.title || name
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-0 border border-white/10 bg-white/5 backdrop-blur-xl text-left hover:border-[#c59f43]/30 overflow-hidden transition-transform transform-gpu focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c59f43] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
      aria-label={`Visit video for ${name}`}
      title={title}
      initial={{ y: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative w-full h-40">
        {isVideoSrc(VIDEOS[name]?.src) ? (
          <video
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            src={VIDEOS[name]?.src}
            poster={VIDEOS[name]?.poster}
            preload="metadata"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <YTPreviewImage poster={VIDEOS[name]?.poster} title={title} />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-[#c59f43]/0 to-[#0d71a3]/0 group-hover:from-[#c59f43]/10 group-hover:to-[#0d71a3]/10 transition-all" />
      </div>
      <div className="p-6">
        <p className="text-white">{name}</p>
        <p className="mt-2 text-sm text-[#a0a0a0]">{desc || "Event highlight"}</p>
      </div>
    </motion.a>
  )
}

export default function OurWorksPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<{ src: string; poster?: string; title?: string } | null>(null)
  function openVideo(key: string) {
    const v = VIDEOS[key] || { src: HERO_VIDEO }
    setCurrentVideo(v)
    setIsOpen(true)
  }
  function closeVideo() {
    setIsOpen(false)
    setCurrentVideo(null)
  }

  return (
    <main className="w-full overflow-x-hidden bg-[#0d1a2b]">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24" aria-labelledby="our-works-heading">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 id="our-works-heading" className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 text-[#c59f43]">Our Works</h1>
          
        </motion.div>

        <motion.h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mb-4 text-[#c59f43]" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Social Media Management
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {socialMedia.map((item) => (
            <motion.a
              key={item.name}
              href={VIDEOS[item.name]?.href || VIDEOS[item.name]?.src || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-0 border border-white/10 bg-white/5 backdrop-blur-xl text-left hover:border-[#c59f43]/30 overflow-hidden transition-transform transform-gpu focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c59f43] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              aria-label={`Visit video for ${item.name}`}
              title={VIDEOS[item.name]?.title || item.name}
              initial={{ y: 0 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative w-full h-40">
                {isVideoSrc(VIDEOS[item.name]?.src) ? (
                  <video
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    src={VIDEOS[item.name]?.src}
                    poster={VIDEOS[item.name]?.poster}
                    preload="metadata"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={VIDEOS[item.name]?.poster || "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"}
                    alt={VIDEOS[item.name]?.title || item.name}
                    width={640}
                    height={160}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c59f43]/0 to-[#0d71a3]/0 group-hover:from-[#c59f43]/10 group-hover:to-[#0d71a3]/10 transition-all" />
              </div>
              <div className="p-8">
                <p className="text-[#c59f43] text-xl font-semibold mb-2">{item.name}</p>
                <p className="text-[#c59f43] uppercase tracking-widest text-sm">{item.stat}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mb-4 text-[#c59f43]" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Audio Visual Productions
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {audioVisual.map((name) => (
            <VideoCard key={name} name={name} />
          ))}
        </motion.div>

        <motion.h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mb-4 text-[#c59f43]" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Event Management
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {events.map((name) => (
            <VideoCard key={name} name={name} />
          ))}
        </motion.div>

        <motion.h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mb-4 text-[#c59f43]" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Our Services
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {externalServices.map((s) => (
            <motion.div
              key={s.title}
              className="group relative p-0 border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden text-left transition-transform transform-gpu"
              initial={{ y: 0 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={s.image}
                alt={s.title}
                width={640}
                height={192}
                className="w-full h-48 object-contain p-4 opacity-90 group-hover:opacity-100 transition-opacity"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-6">
                <p className="text-white text-lg font-semibold">{s.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm" 
              onClick={closeVideo}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.98 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                exit={{ opacity: 0, y: 10, scale: 0.98 }} 
                transition={{ duration: 0.3 }} 
                className="absolute inset-x-4 md:inset-x-24 top-20 md:top-28 border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:p-6" 
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white text-sm md:text-base">{currentVideo?.title || "Video Reel"}</p>
                  <button onClick={closeVideo} className="px-3 py-2 border border-white/10 bg-white/10 text-white hover:bg-white/20 transition-colors" aria-label="Close video">Close</button>
                </div>
                <div className="relative w-full aspect-video">
                  <video
                    className="w-full h-full object-cover"
                    src={currentVideo?.src}
                    poster={currentVideo?.poster}
                    title={currentVideo?.title || "Video Reel"}
                    preload="metadata"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c59f43]/10 to-[#0d71a3]/10" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  )
}
