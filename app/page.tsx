"use client"

import PartnerCarousel from "@/components/partner-carousel"

import Hero from "@/components/hero"
import BentoGrid from "@/components/bento-grid"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Play, ChevronRight, Check } from "lucide-react"



const HERO_VIDEO_URL = "https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4"
const WHAT_WE_DO_VIDEO_URL = ""
const WHAT_WE_DO_IMAGE_URL = "https://www.istratmc.com/wp-content/uploads/2022/05/Integrated-Marketing-Campaigns.png"

const specializations = [
  "Advertising",
  "Event Management and Staging",
  "Creative Execution",
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
    title: "Brand Development, Concept, Design and Management",
    description:
      "Identity definition, visual systems, and end-to-end creative execution.",
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

function toYouTubeEmbed(u: string) {
  try {
    const url = new URL(u)
    const isWatch = url.hostname.includes("youtube.com") && url.pathname === "/watch"
    const isShort = url.hostname.includes("youtu.be")

    let id: string | null = null
    if (isWatch) {
      id = url.searchParams.get("v")
    } else if (isShort) {
      id = url.pathname.slice(1)
    }

    if (!id) return null
    const params = new URLSearchParams({ autoplay: "1", mute: "1", loop: "1", controls: "0", rel: "0", playlist: id })
    return `https://www.youtube.com/embed/${id}?${params.toString()}`
  } catch {
    return null
  }
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const ribbonY = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <main id="main" className="w-full overflow-x-hidden bg-black text-white">
      <Hero />

      {/* What We Do Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.h3 className="text-3xl md:text-4xl font-semibold tracking-widest mb-6 text-[#DC7026]" style={{ fontFamily: 'var(--font-label)' }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          What We Do
        </motion.h3>
        <motion.div
          className="flex flex-col gap-12 md:gap-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Row: Full-Width Cinematic Video Banner */}
          <div className="relative w-full h-64 md:h-[450px] rounded-[3rem] overflow-hidden group border border-white/10 shadow-3xl bg-[#0a0a0a]">
            <video
              src="https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
          </div>

          {/* Middle Row: Restored Core Narrative */}
          <div>
            <h3 className="text-[#DC7026] text-[10px] font-black uppercase tracking-[0.3em] mb-10 flex items-center gap-6">
              CORE SERVICES <div className="h-[1px] w-32 bg-[#DC7026]/30"></div>
            </h3>
            <p className="text-gray-200 text-2xl md:text-3xl leading-[1.3] font-medium max-w-5xl tracking-tight">
              We deliver integrated communications that build trust, drive engagement and convert attention into measurable results. From strategy and identity to content, event management and performance marketing, our team orchestrates every touchpoint so your brand speaks with one voice and creates premium experiences that resonate to your desired target audience.
            </p>
          </div>

          {/* Bottom Row: Restored Detailed Points */}
          <div className="flex flex-col gap-14">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9]" style={{ fontFamily: 'var(--font-display)' }}>
              {["Behind the Lens,", "Ahead of the Curve"].map((line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                >
                  {line}
                </motion.span>
              ))}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="flex flex-col gap-10">
                <p className="text-gray-400 leading-relaxed max-w-lg text-lg md:text-xl font-medium">
                  Unified brand development for reputation, integrity and trust growth resulting for better brand recognition and recall.
                </p>

                <Link href="/about-us" className="flex flex-col gap-3 w-max group">
                  <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.5em] text-white group-hover:text-[#DC7026] transition-colors">
                    READ MORE <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  <div className="h-[2px] w-20 bg-white/10 group-hover:bg-[#DC7026]/60 group-hover:w-full transition-all duration-500"></div>
                </Link>
              </div>

              <ul className="grid grid-cols-1 gap-8">
                {[
                  "Data-driven content and strategies that grow reach and conversions.",
                  "Seamless events management for better brand experiences and moments.",
                  "PR and crisis comms for reputation management and credibility building."
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="mt-1 w-7 h-7 rounded-full bg-[#DC7026]/10 flex items-center justify-center text-[#DC7026] border border-[#DC7026]/10 transition-colors">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="text-gray-100 font-bold text-lg md:text-xl tracking-tight leading-tight">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex flex-wrap gap-3 mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {["Best Staging 2024", "Top PR Campaign", "Innovation in AV", "Community Impact Award"].map((a) => (
            <span key={a} className="px-4 py-2 text-xs tracking-widest text-[#DC7026] border border-white/5 bg-black rounded-full">
              {a}
            </span>
          ))}
        </motion.div>
      </section>

      <BentoGrid />

      {/* Highlights Section */}
      <motion.div id="highlights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-7xl mx-auto px-6 md:px-8 mb-32">
        <motion.h3 className="text-3xl md:text-4xl font-semibold tracking-widest mb-6 text-[#DC7026]" style={{ fontFamily: 'var(--font-label)' }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Highlights
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 auto-rows-fr">
          {[
            {
              title: "QC Anti-Terrorism Campaign",
              video: "https://www.youtube.com/watch?v=zGVRrnbo3-8",
              href: "/connect-with-us",
              gridClass: "md:col-span-2 md:row-span-2",
              tag: "CAMPAIGN"
            },
            {
              title: "ALAB FOR LOVE Pride PH Festival",
              video: "https://www.youtube.com/watch?v=s_DFhmMFmU8",
              href: "/connect-with-us",
              gridClass: "md:col-span-2 md:row-span-1",
              tag: "EVENT"
            },
            {
              title: "My heart beats for Banaue",
              video: "https://www.youtube.com/watch?v=hHO25dAiGk4",
              href: "/connect-with-us",
              gridClass: "md:col-span-1 md:row-span-1",
              tag: "TOURISM"
            },
            {
              title: "GAWAD PARANGAL 2022 HIGHLIGHTS",
              video: "https://www.youtube.com/watch?v=pU09VaTZXRM",
              href: "/connect-with-us",
              gridClass: "md:col-span-1 md:row-span-1",
              tag: "AWARDS"
            },
          ].map((h, i) => {
            const card = (
              <motion.div key={h.title} className="group relative border border-white/5 bg-black rounded-[32px] overflow-hidden flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full flex-grow overflow-hidden min-h-[160px]">
                  <div className="absolute top-6 left-6 z-20">
                    <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#DC7026]/80 uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                      {h.tag}
                    </span>
                  </div>

                  {(() => {
                    const embed = h.video ? toYouTubeEmbed(h.video) : null
                    if (embed) {
                      return (
                        <iframe
                          title={h.title}
                          src={embed}
                          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity border-none scale-105 group-hover:scale-110 duration-1000"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      )
                    }
                    return <div className="w-full h-full bg-gradient-to-br from-[#0a0a0a] to-black" />
                  })()}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 pointer-events-none z-20">
                    <div className="w-16 h-16 rounded-full bg-[#DC7026]/90 flex items-center justify-center text-[#06241f] backdrop-blur-md shadow-[0_0_30px_rgba(220,112,38,0.4)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-7 h-7 fill-current ml-1"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-semibold mb-6 tracking-tight leading-tight">{h.title}</h3>
                  </div>
                  <button className="self-start px-6 py-2.5 rounded-full border border-white/15 text-[10px] font-extrabold tracking-widest text-white uppercase hover:bg-[#DC7026] hover:text-[#06241f] hover:border-[#DC7026] transition-all duration-300">
                    Explore Case
                  </button>
                </div>
              </motion.div>
            )
            return h.href ? (
              <Link
                key={h.title}
                href={h.href}
                aria-label={`View case study: ${h.title}`}
                className={`${h.gridClass} block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC7026]/40 h-full`}
              >
                {card}
              </Link>
            ) : (
              <div key={h.title} className={h.gridClass}>{card}</div>
            )
          })}
        </div>
        <div className="w-full">
          <div className="max-w-7xl mx-auto">
            <motion.div style={{ y: ribbonY }} className="h-px w-full bg-gradient-to-r from-[#DC7026]/50 via-[#3C4699]/50 to-transparent" />
          </div>
        </div>
      </motion.div>

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.h3 className="text-3xl md:text-4xl font-semibold tracking-widest mb-6 text-[#DC7026]" style={{ fontFamily: 'var(--font-label)' }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Clients Only
        </motion.h3>
        <PartnerCarousel />
      </section>

      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div style={{ y: ribbonY }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="h-px w-full bg-gradient-to-r from-[#DC7026]/60 via-[#3C4699]/60 to-transparent" />
        </div>
      </div>
    </main>
  )
}
