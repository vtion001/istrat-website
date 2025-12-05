"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const socialMedia = [
  { name: "General Eleazar", stat: "1M Followers" },
  { name: "Aksyon QC", stat: "86K Followers" },
  { name: "Matatag", stat: "866 Followers" },
]

const audioVisual = [
  "BANAUE International Composition Competition",
  "State of the Women Address",
  "New Greenland Urban Farming in Quezon City",
  "BUHAY AT PAG-ASA",
  "MNL GSC Pride Fiesta MAERSK",
]

const events = [
  "PTAA Travel Tour Expo",
  "ISSUP Philippines 3rd National Conference",
  "SGV Got Talent",
  "18th Gawad Parangal Quezon City",
  "Pista sa QC",
]

const externalServices = [
  {
    title: "Integrated Marketing Campaigns",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Brand-Development-and-Strategy.png",
  },
  {
    title: "Market Research",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Information-Technology.png",
  },
  {
    title: "Graphic Design and Animation",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Market-Research.png",
  },
  {
    title: "Brand Development and Strategy",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Public-Relations.png",
  },
  {
    title: "Advocacy and Social Marketing",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Crisis-Management.png",
  },
  {
    title: "Crisis Management",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Graphic-Design-and-Animation.png",
  },
  {
    title: "Public Relations",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Video-and-Stage-Production.png",
  },
  {
    title: "Video and Stage Production",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Advocacy-and-Social-Marketing.png",
  },
  {
    title: "Information Technology",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Integrated-Marketing-Campaigns.png",
  },
]

export default function OurWorksPage() {
  const HERO_VIDEO = "https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4"
  const VIDEOS: Record<string, { src: string; poster?: string; title?: string }> = {
    "General Eleazar": { src: HERO_VIDEO, poster: "https://www.istratmc.com/wp-content/uploads/2022/05/Public-Relations.png", title: "General Eleazar" },
    "Aksyon QC": { src: HERO_VIDEO, poster: "https://www.istratmc.com/wp-content/uploads/2022/05/Integrated-Marketing-Campaigns.png", title: "Aksyon QC" },
    "Matatag": { src: HERO_VIDEO, poster: "https://www.istratmc.com/wp-content/uploads/2022/05/Graphic-Design-and-Animation.png", title: "Matatag" },
    "BANAUE International Composition Competition": { src: HERO_VIDEO, poster: "https://www.istratmc.com/wp-content/uploads/2022/05/Integrated-Marketing-Campaigns.png", title: "BANAUE Competition" },
    "State of the Women Address": { src: HERO_VIDEO, poster: "https://www.istratmc.com/wp-content/uploads/2022/05/Brand-Development-and-Strategy.png", title: "State of the Women Address" },
    "New Greenland Urban Farming in Quezon City": { src: HERO_VIDEO, poster: "https://www.istratmc.com/wp-content/uploads/2022/05/Information-Technology.png", title: "New Greenland Urban Farming" },
    "BUHAY AT PAG-ASA": { src: HERO_VIDEO, poster: "https://www.istratmc.com/wp-content/uploads/2022/05/Advocacy-and-Social-Marketing.png", title: "BUHAY AT PAG-ASA" },
    "MNL GSC Pride Fiesta MAERSK": { src: HERO_VIDEO, poster: "https://www.istratmc.com/wp-content/uploads/2022/05/Video-and-Stage-Production.png", title: "MAERSK Pride Fiesta" },
    "PTAA Travel Tour Expo": { src: HERO_VIDEO, poster: "https://www.istratmc.com/wp-content/uploads/2022/05/Video-and-Stage-Production.png", title: "PTAA Travel Tour Expo" },
    "ISSUP Philippines 3rd National Conference": { src: HERO_VIDEO, poster: "https://www.istratmc.com/wp-content/uploads/2022/05/Brand-Development-and-Strategy.png", title: "ISSUP Philippines 3rd National Conference" },
    "SGV Got Talent": { src: HERO_VIDEO, poster: "https://www.istratmc.com/wp-content/uploads/2022/05/Brand-Development-and-Strategy.png", title: "SGV Got Talent" },
    "18th Gawad Parangal Quezon City": { src: HERO_VIDEO, poster: "https://www.istratmc.com/wp-content/uploads/2022/05/Public-Relations.png", title: "18th Gawad Parangal Quezon City" },
    "Pista sa QC": { src: HERO_VIDEO, poster: "https://www.istratmc.com/wp-content/uploads/2022/05/Integrated-Marketing-Campaigns.png", title: "Pista sa QC" },
  }

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
    <main className="w-full overflow-x-hidden bg-[#0a0a0a]">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 text-white">Our Works</h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] max-w-3xl mb-12">
            A selection of social, audiovisual, and event projects showcasing our craft and impact.
          </p>
        </motion.div>

        <motion.h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Our Services
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {externalServices.map((s) => (
            <button key={s.title} className="group relative p-0 border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-[#0d71a3]/30 text-left" onClick={() => openVideo(s.title)} aria-label={`Open video for ${s.title}`}>
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
                <p className="mt-2 text-xs uppercase tracking-widest text-[#a0a0a0]">Tap to view reel</p>
              </div>
            </button>
          ))}
        </motion.div>

        <motion.h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Social Media Management
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {socialMedia.map((item) => (
            <button key={item.name} className="group p-0 border border-white/10 bg-white/5 backdrop-blur-xl text-left hover:border-[#0d71a3]/30 overflow-hidden" onClick={() => openVideo(item.name)} aria-label={`Open video for ${item.name}`}>
              <div className="relative w-full h-40">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#c59f43]/0 to-[#0d71a3]/0 group-hover:from-[#c59f43]/10 group-hover:to-[#0d71a3]/10 transition-all" />
              </div>
              <div className="p-8">
                <p className="text-white text-xl font-semibold mb-2">{item.name}</p>
                <p className="text-[#c59f43] uppercase tracking-widest text-sm">{item.stat}</p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[#a0a0a0]">Tap to view reel</p>
              </div>
            </button>
          ))}
        </motion.div>

        <motion.h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Audio Visual Productions
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {audioVisual.map((name) => (
            <button key={name} className="group p-0 border border-white/10 bg-white/5 backdrop-blur-xl text-left hover:border-[#0d71a3]/30 overflow-hidden" onClick={() => openVideo(name)} aria-label={`Open video for ${name}`}> 
              <div className="relative w-full h-40">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#c59f43]/0 to-[#0d71a3]/0 group-hover:from-[#c59f43]/10 group-hover:to-[#0d71a3]/10 transition-all" />
              </div>
              <div className="p-6">
                <p className="text-white">{name}</p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[#a0a0a0]">Tap to view reel</p>
              </div>
            </button>
          ))}
        </motion.div>

        <motion.h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Event Management and Staging
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {events.map((name) => (
            <button key={name} className="group p-0 border border-white/10 bg-white/5 backdrop-blur-xl text-left hover:border-[#0d71a3]/30 overflow-hidden" onClick={() => openVideo(name)} aria-label={`Open video for ${name}`}> 
              <div className="relative w-full h-40">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#c59f43]/0 to-[#0d71a3]/0 group-hover:from-[#c59f43]/10 group-hover:to-[#0d71a3]/10 transition-all" />
              </div>
              <div className="p-6">
                <p className="text-white">{name}</p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[#a0a0a0]">Tap to view reel</p>
              </div>
            </button>
          ))}
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm" aria-modal="true" role="dialog" onClick={closeVideo}>
              <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.3 }} className="absolute inset-x-4 md:inset-x-24 top-20 md:top-28 border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:p-6" onClick={(e) => e.stopPropagation()}>
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
