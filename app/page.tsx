"use client"

import PartnerCarousel from "@/components/partner-carousel"

import Hero from "@/components/hero"
import BentoGrid from "@/components/bento-grid"
import Footer from "@/components/footer"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"



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
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-xs md:text-sm uppercase tracking-[0.20em] text-[#DC7026] mb-4">Imagine • Live • Soar •</p>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 brand-gradient-text bg-clip-text text-transparent"></h2>
          <div className="relative w-full aspect-video border border-white/10 bg-black overflow-hidden mb-12">
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
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#DC7026]/15 to-[#3C4699]/15" />
          </div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <a href="#highlights" aria-label="Explore Highlights" className="inline-flex items-center gap-3 px-6 py-4 border border-white/20 bg-white/5 text-white hover:bg-[#DC7026] hover:text-white hover:border-[#DC7026] transition-colors">Explore Highlights<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down w-5 h-5"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg></a>
          </motion.div>
        </motion.div>

        <motion.div id="highlights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
          <motion.h3 className="text-3xl md:text-4xl font-semibold tracking-widest mb-6 text-[#DC7026]" style={{ fontFamily: 'var(--font-label)' }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            Highlights
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "QC Anti-Terrorism Campaign",
                video: "https://www.youtube.com/watch?v=zGVRrnbo3-8",
                href: "/our-works",
              },
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
                <motion.div key={h.title} className="group relative border border-white/10 bg-black overflow-hidden"
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
                            title={h.title}
                            src={embed}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity border-none"
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
                    <div className="absolute inset-0 bg-gradient-to-br from-[#DC7026]/0 to-[#3C4699]/0 group-hover:from-[#DC7026]/15 group-hover:to-[#3C4699]/15 transition-all" />
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <p className="text-[#DC7026] text-lg font-semibold">{h.title}</p>
                    <span className="text-xs tracking-widest text-[#E8A351]">VIEW</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-4 py-2 text-xs tracking-widest text-white border border-[#DC7026] bg-[#DC7026]/90">VIEW CASE STUDY</span>
                  </div>
                </motion.div>
              )
              return h.href ? (
                <Link
                  key={h.title}
                  href={h.href}
                  aria-label={`View case study: ${h.title}`}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC7026]/40"
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
              <motion.div style={{ y: ribbonY }} className="h-px w-full bg-gradient-to-r from-[#DC7026]/50 via-[#3C4699]/50 to-transparent" />
            </div>
          </div>

        </motion.div>

        <motion.h3 className="text-3xl md:text-4xl font-semibold tracking-widest mb-6 text-[#DC7026]" style={{ fontFamily: 'var(--font-label)' }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          What We Do
        </motion.h3>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="p-8 border border-white/10 bg-black">
            <p className="text-gray-300 mb-6">We deliver integrated communications that build trust, drive engagement and convert attention into measurable results. From strategy and identity to content, event management and performance marketing, our team orchestrates every touchpoint so your brand speaks with one voice and creates premium experiences that resonate to your desired target audience.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#DC7026]" /><span className="text-white">Unified brand development for reputation, integrity and trust growth resulting for better brand recognition and recall.</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#DC7026]" /><span className="text-white">Data-driven content and strategies that grow reach and conversions.</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#DC7026]" /><span className="text-white">Seamless events management for better brand experiences and moments.</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#DC7026]" /><span className="text-white">PR and crisis comms for reputation management and credibility building.</span></li>
            </ul>
            <div className="relative w-full aspect-video border border-white/10 bg-black overflow-hidden">
              {(() => {
                const embed = WHAT_WE_DO_VIDEO_URL ? toYouTubeEmbed(WHAT_WE_DO_VIDEO_URL) : null
                if (embed) {
                  return (
                    <iframe
                      title="What We Do"
                      src={embed}
                      className="w-full h-full object-cover opacity-90 border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )
                }
                return (
                  <Image
                    src="https://res.cloudinary.com/dbviya1rj/image/upload/v1764932011/vhpnfsvtvp8b77bwz1rg.png"
                    alt="What We Do"
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 768px) 100vw, 75vw"
                    priority
                  />
                )
              })()}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#DC7026]/15 to-[#3C4699]/15" />
            </div>
          </div>
        </motion.div>
        <motion.div className="flex flex-wrap gap-3 mt-6 mb-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {["Best Staging 2024", "Top PR Campaign", "Innovation in AV", "Community Impact Award"].map((a) => (
            <span key={a} className="px-4 py-2 text-xs tracking-widest text-white border border-white/20 bg-white/5">
              {a}
            </span>
          ))}
        </motion.div>
      </section>

      <BentoGrid />

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

      <Footer />
    </main>
  )
}
