"use client"

import Hero from "@/components/hero"
import BentoGrid from "@/components/bento-grid"
import ClientTicker from "@/components/client-ticker"
import Footer from "@/components/footer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import PopupDetail from "@/components/popup-detail"
import Image from "next/image"
import Link from "next/link"

const HERO_VIDEO_URL = "https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4"

const specializations = [
  "Advertising",
  "Event Management and Staging",
  "Creative Production",
  "Public Relations",
  "Digital Marketing",
  "Crisis PR Management",
]

const services = [
  {
    title: "Integrated Marketing Communications",
    description:
      "Unified brand identity across channels with cohesive strategy and optimization.",
  },
  {
    title: "Brand Development, Concept, Design and Production",
    description:
      "Identity definition, visual systems, and end-to-end creative production.",
  },
  {
    title: "Event Management and Staging",
    description:
      "Planning, logistics and technical execution using state-of-the-art AV.",
  },
  {
    title: "Digital Marketing, Social Media Management and Analytics",
    description:
      "Data-driven strategies, content creation, SEO, PPC, email and community.",
  },
  {
    title: "Public Relations/Crisis PR Management and Advocacy",
    description:
      "Rapid assessment, strategic planning, stakeholder engagement and messaging.",
  },
  {
    title: "Applications and IT Systems",
    description:
      "DataFusion360, real-time analytics, InfoBlast and Anti-Drone solutions.",
  },
]

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

export default function Home() {
  const { scrollYProgress } = useScroll()
  const ribbonY = useTransform(scrollYProgress, [0, 1], [0, -30])
  const [detailOpen, setDetailOpen] = useState(false)
  const [detailData, setDetailData] = useState<{ title: string; summary: string; points: string[]; ctaLabel?: string; ctaHref?: string }>({ title: "", summary: "", points: [] })
  function toYouTubeEmbed(u: string) {
    try {
      const url = new URL(u)
      const isWatch = url.hostname.includes("youtube.com") && url.pathname === "/watch"
      const isShort = url.hostname.includes("youtu.be")
      const id = isWatch ? url.searchParams.get("v") : isShort ? url.pathname.slice(1) : null
      if (!id) return null
      const params = new URLSearchParams({ autoplay: "1", mute: "1", loop: "1", controls: "0", rel: "0", playlist: id })
      return `https://www.youtube.com/embed/${id}?${params.toString()}`
    } catch {
      return null
    }
  }
  return (
    <main id="main" className="w-full overflow-x-hidden bg-[#0a0a0a]">
      <Hero />
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#a0a0a0] mb-4">Imagine • Live • Soar</p>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 brand-gradient-text bg-clip-text text-transparent">iStrat COMMS INC</h2>
          <p className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed max-w-3xl mb-12">
            We are a one-stop creative marketing communications and IT agency delivering PR, marketing and advertising campaigns anchored by data-driven strategies to help you build your brand today and succeed tomorrow.
          </p>
          <div className="relative w-full aspect-video border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden mb-12">
            <video
              className="w-full h-full object-cover"
              src={HERO_VIDEO_URL}
              title="iStrat hero video"
              preload="metadata"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c59f43]/10 to-[#0d71a3]/10" />
          </div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <a href="#highlights" aria-label="Explore Highlights" className="inline-flex items-center gap-3 px-6 py-4 border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-white/80 transition-colors">Explore Highlights<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down w-5 h-5"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg></a>
          </motion.div>
        </motion.div>

        <motion.div id="highlights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
          <motion.h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            Highlights
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "ALAB FOR LOVE Pride PH Festival",
                video: "https://www.youtube.com/watch?v=s_DFhmMFmU8",
                href: "/case-study/alab-for-love",
              },
              {
                title: "My heart beats for Banaue",
                video: "https://www.youtube.com/watch?v=hHO25dAiGk4",
                href: "/case-study/banaue",
              },
              {
                title: "GAWAD PARANGAL 2022 HIGHLIGHTS",
                video: "https://www.youtube.com/watch?v=pU09VaTZXRM",
                href: "/case-study/sgv",
              },
            ].map((h, i) => {
              const card = (
                <motion.div key={h.title} className="group relative border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full h-48">
                    {(() => {
                      const embed = h.video ? toYouTubeEmbed(h.video) : null
                      if (embed) {
                        return (
                          <iframe
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            src={embed}
                            title={h.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        )
                      }
                      if (h.video) {
                        return (
                          <video
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            src={h.video}
                            preload="metadata"
                            autoPlay
                            muted
                            loop
                            playsInline
                            onMouseEnter={(e) => { e.currentTarget.muted = false; e.currentTarget.play() }}
                            onMouseLeave={(e) => { e.currentTarget.muted = true; e.currentTarget.play() }}
                          />
                        )
                      }
                      return <div className="w-full h-full bg-gradient-to-br from-[#0a0a0a] to-black" />
                    })()}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c59f43]/0 to-[#0d71a3]/0 group-hover:from-[#c59f43]/15 group-hover:to-[#0d71a3]/15 transition-all" />
                  </div>
                <div className="p-6 flex items-center justify-between">
                  <p className="text-white text-lg font-semibold">{h.title}</p>
                  <span className="text-xs tracking-widest text-[#c59f43]">VIEW</span>
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-4 py-2 text-xs tracking-widest text-white border border-white/20 bg-black/30 backdrop-blur-xl">VIEW CASE STUDY</span>
                </div>
                </motion.div>
              )
              return h.href ? (
                <Link
                  key={h.title}
                  href={h.href}
                  aria-label={`View case study: ${h.title}`}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c59f43]/40"
                >
                  {card}
                </Link>
              ) : (
                card
              )
            })}
          </div>
          <div className="w-full">
            <div className="max-w-7xl mx-auto">
              <motion.div style={{ y: ribbonY }} className="h-px w-full bg-gradient-to-r from-[#c59f43]/50 via-[#0d71a3]/50 to-transparent" />
            </div>
          </div>
          
        </motion.div>

        <motion.h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          What We Do
        </motion.h3>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.button
                key={service.title}
                className="group relative p-8 border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden text-left"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => {
                  const details: Record<string, { summary: string; points: string[] }> = {
                    "Integrated Marketing Communications": {
                      summary: "Unify brand voice across channels to increase recall, trust and conversion.",
                      points: [
                        "Audience-first strategy coordinating paid, owned and earned media.",
                        "Message hierarchy and creative system that scales across touchpoints.",
                        "Measurement framework with clear KPIs and optimization loops.",
                      ],
                    },
                    "Brand Development, Concept, Design and Production": {
                      summary: "Define identity and execute production that looks premium and feels consistent.",
                      points: [
                        "Brand strategy, naming, narrative and visual system.",
                        "Design guidelines applied to print, digital and video.",
                        "End-to-end creative production and quality control.",
                      ],
                    },
                    "Event Management and Staging": {
                      summary: "Deliver seamless events that amplify brand moments with zero operational friction.",
                      points: [
                        "Run-of-show, logistics and vendor orchestration.",
                        "AV integration: stage, lighting, sound and live content ops.",
                        "Risk management and on-site control for flawless execution.",
                      ],
                    },
                    "Digital Marketing, Social Media Management and Analytics": {
                      summary: "Grow reach and conversions with data-driven content, SEO and performance ads.",
                      points: [
                        "Channel strategies for search, social and email.",
                        "Content calendars, creative production and community management.",
                        "Analytics, dashboards and iterative optimization.",
                      ],
                    },
                    "Public Relations/Crisis PR Management and Advocacy": {
                      summary: "Build credibility and protect reputation with proactive PR and decisive crisis comms.",
                      points: [
                        "Stakeholder mapping and narrative development.",
                        "Media relations, spokesperson prep and message training.",
                        "Crisis playbooks: rapid assessment, response and recovery.",
                      ],
                    },
                    "Applications and IT Systems": {
                      summary: "Operational tools that enable faster decisions and safer environments.",
                      points: [
                        "DataFusion360 for real-time analytics and reporting.",
                        "InfoBlast for secure broadcast messaging.",
                        "Anti-Drone solutions for event and facility security.",
                      ],
                    },
                  }
                  const d = details[service.title]
                  setDetailData({ title: service.title, summary: d.summary, points: d.points, ctaLabel: "Discuss how this helps", ctaHref: "/connect-with-us" })
                  setDetailOpen(true)
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c59f43]/0 to-[#b700ff]/0 group-hover:from-[#c59f43]/10 group-hover:to-[#b700ff]/10 transition-all duration-500" />
                <h4 className="text-2xl font-display font-semibold text-white mb-4">{service.title}</h4>
                <p className="text-[#a0a0a0]">{service.description}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>
        <motion.div className="flex flex-wrap gap-3 mt-6 mb-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {["Best Staging 2024", "Top PR Campaign", "Innovation in AV", "Community Impact Award"].map((a) => (
            <span key={a} className="px-4 py-2 text-xs tracking-widest text-white border border-white/10 bg-white/5">
              {a}
            </span>
          ))}
        </motion.div>
      </section>

      <BentoGrid />
      <PopupDetail open={detailOpen} onClose={() => setDetailOpen(false)} title={detailData.title} summary={detailData.summary} points={detailData.points} ctaLabel={detailData.ctaLabel} ctaHref={detailData.ctaHref} />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Clients & Recognition
        </motion.h3>
        <motion.div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {[
            { name: "MAERSK", image: "https://www.istratmc.com/wp-content/uploads/2022/05/Video-and-Stage-Production.png" },
            { name: "SGV", image: "https://www.istratmc.com/wp-content/uploads/2022/05/Brand-Development-and-Strategy.png" },
            { name: "V.Ships", image: "https://www.istratmc.com/wp-content/uploads/2022/05/Integrated-Marketing-Campaigns.png" },
            { name: "eRase", image: "https://www.istratmc.com/wp-content/uploads/2022/05/Graphic-Design-and-Animation.png" },
            { name: "araLabs", image: "https://www.istratmc.com/wp-content/uploads/2022/05/Market-Research.png" },
            { name: "CP Fresh Shop", image: "https://www.istratmc.com/wp-content/uploads/2022/05/Public-Relations.png" },
          ].map((c) => (
            <div key={c.name} className="group flex items-center justify-center p-6 border border-white/10 bg-white/5">
              <div className="relative w-full h-12">
                <Image src={c.image} alt={c.name} fill className="object-contain grayscale opacity-80 transition-all group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 16vw" loading="lazy" />
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div className="flex flex-wrap gap-3 mb-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {["Best Staging 2024", "Top PR Campaign", "Innovation in AV", "Community Impact Award"].map((a) => (
            <span key={a} className="px-4 py-2 text-xs tracking-widest text-white border border-white/10 bg-white/5">
              {a}
            </span>
          ))}
        </motion.div>
      </section>

      

      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div style={{ y: ribbonY }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="h-px w-full bg-gradient-to-r from-[#c59f43]/60 via-[#0d71a3]/60 to-transparent" />
        </div>
      </div>

      <ClientTicker />
      <Footer />
    </main>
  )
}
