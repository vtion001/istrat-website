"use client"

import { useEffect, useRef } from "react"
import PartnerCarousel from "@/components/partner-carousel"

import Hero from "@/components/hero"
import BentoGrid from "@/components/bento-grid"
import GSAPPanelScroll from "@/components/gsap-panel-scroll"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Play, ChevronRight, Check } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"



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
  const valuesScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Delay execution to ensure GSAPPanelScroll has initialized first
    const timer = setTimeout(() => {
      const valuesScroll = valuesScrollRef.current
      if (!valuesScroll) return

      const valuesSection = valuesScroll.closest(".section")
      if (!valuesSection) return

      // Register plugin
      gsap.registerPlugin(ScrollTrigger)

      // Kill any existing ScrollTriggers for this section
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === valuesSection) {
          trigger.kill()
        }
      })

      // Simple calculation: we have 3 panels, need to scroll 2 full widths
      const panels = gsap.utils.toArray<HTMLElement>(".min-w-full", valuesScroll)
      if (panels.length === 0) return

      const totalWidth = panels.length * window.innerWidth
      const distance = totalWidth - window.innerWidth

      // Create horizontal scroll animation
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: valuesSection,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          start: "top top",
          end: () => `+=${distance}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      })
    }, 100) // Wait 100ms for GSAPPanelScroll to initialize

    return () => {
      clearTimeout(timer)
      const valuesScroll = valuesScrollRef.current
      if (!valuesScroll) return

      const valuesSection = valuesScroll.closest(".section")
      if (!valuesSection) return

      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === valuesSection) {
          trigger.kill()
        }
      })
    }
  }, [])


  return (
    <main id="main" className="w-full overflow-x-hidden bg-black text-white">
      <GSAPPanelScroll>
        {/* Panel 1: Hero */}
        <div className="section">
          <div className="section-inner">
            <Hero />
          </div>
        </div>

        {/* Panel 2: Tagline */}
        <div className="section">
          <div className="section-inner">
            <section className="max-w-7xl mx-auto px-6 md:px-8 py-32 md:py-48">
              <motion.div
                className="text-center max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-12" style={{ fontFamily: 'var(--font-display)' }}>
                  We don't just run campaigns.
                </h2>
                <p className="text-2xl md:text-4xl lg:text-5xl font-medium text-gray-300 leading-[1.3] tracking-tight">
                  We move people, shape narratives, and drive action.
                </p>
              </motion.div>

              <motion.div
                className="mt-20 md:mt-32 max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed text-center">
                  iStrat is a strategy-led communications firm defined to help brands live their values, influence conversations, and achieve meaningful impact. We work with organisations that care about how they show up—and the influence they leave behind.
                </p>
              </motion.div>

              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-lg md:text-xl text-[#DC7026] font-semibold tracking-wide">
                  We work with brands, leaders, and institutions that don't just want visibility—<br />
                  <span className="text-2xl md:text-3xl font-bold">They want impact.</span>
                </p>
              </motion.div>
            </section>
          </div>
        </div>

        {/* Panel 3: The Vision */}
        <div className="section">
          <div className="section-inner">
            <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Text on Left */}
                <div className="space-y-8">
                  <h3 className="text-[#DC7026] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-6">
                    THE VISION <div className="h-[1px] w-24 bg-[#DC7026]/30"></div>
                  </h3>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                    To shape a world where brands don't just speak—<br />
                    <span className="text-[#DC7026]">they matter.</span>
                  </h2>

                  <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed">
                    <p>
                      We envision communication that builds confidence, earns credibility, and creates meaningful connections that last—shaping culture, trust, and real-world impact through strategic influence.
                    </p>
                    <p>
                      A future where communication doesn't just inform, but leads change, inspires action, and delivers outcomes that matter.
                    </p>
                  </div>
                </div>

                {/* Visual on Right */}
                <div className="relative w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden group border border-white/10 shadow-3xl bg-[#0a0a0a]">
                  <video
                    src="https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                </div>
              </motion.div>
            </section>
          </div>
        </div>

        {/* Panel 4: Our Mission */}
        <div className="section">
          <div className="section-inner">
            <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Visual on Left */}
                <div className="relative w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden group border border-white/10 shadow-3xl bg-[#0a0a0a] order-2 lg:order-1">
                  <video
                    src="https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                </div>

                {/* Text on Right */}
                <div className="space-y-8 order-1 lg:order-2">
                  <h3 className="text-[#DC7026] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-6">
                    OUR MISSION <div className="h-[1px] w-24 bg-[#DC7026]/30"></div>
                  </h3>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                    To help brands <span className="text-[#DC7026]">LIVE</span> with authenticity, <span className="text-[#DC7026]">INFLUENCE</span> with intention, and <span className="text-[#DC7026]">WIN</span> through trust and relevance.
                  </h2>

                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                    We design strategy-driven advocacy and integrated communications that turn ideas into influence, and influence into measurable results.
                  </p>
                </div>
              </motion.div>
            </section>
          </div>
        </div>

        {/* Panel 5: Core Values - Horizontal Scroll */}
        <div className="section" data-horizontal-scroll="true">
          <div className="section-inner">
            <div className="relative w-full overflow-hidden">
              {/* Header */}
              <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
                <motion.h3
                  className="text-[#DC7026] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  OUR CORE VALUES <div className="h-[1px] w-32 bg-[#DC7026]/30"></div>
                </motion.h3>
              </div>

              {/* Horizontal Scroll Container */}
              <div className="relative h-[600px] md:h-[700px] overflow-hidden">
                <div ref={valuesScrollRef} id="values-scroll" className="flex h-full w-full">
                  {/* Value 1: Live Authentically */}
                  <div className="min-w-full h-full flex items-center justify-center px-6 md:px-8">
                    <div className="max-w-7xl mx-auto w-full">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-3 flex items-center justify-center">
                          <span className="text-[120px] md:text-[180px] font-bold text-[#DC7026]/20 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                            01
                          </span>
                        </div>
                        <div className="lg:col-span-9 space-y-6">
                          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                            LIVE AUTHENTICALLY
                          </h2>
                          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-3xl">
                            We believe real influence starts with truth.
                          </p>
                          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                            Every message we build is grounded in clarity, purpose, and credibility.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Value 2: Influence with Intent */}
                  <div className="min-w-full h-full flex items-center justify-center px-6 md:px-8">
                    <div className="max-w-7xl mx-auto w-full">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-3 flex items-center justify-center">
                          <span className="text-[120px] md:text-[180px] font-bold text-[#DC7026]/20 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                            02
                          </span>
                        </div>
                        <div className="lg:col-span-9 space-y-6">
                          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                            INFLUENCE WITH INTENT
                          </h2>
                          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-3xl">
                            Influence isn't about noise—it's about direction.
                          </p>
                          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                            We shape conversations that inspire action, loyalty, and belief.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Value 3: Win with Meaning */}
                  <div className="min-w-full h-full flex items-center justify-center px-6 md:px-8">
                    <div className="max-w-7xl mx-auto w-full">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-3 flex items-center justify-center">
                          <span className="text-[120px] md:text-[180px] font-bold text-[#DC7026]/20 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                            03
                          </span>
                        </div>
                        <div className="lg:col-span-9 space-y-6">
                          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                            WIN WITH MEANING
                          </h2>
                          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-3xl">
                            Winning is not just being seen—it's about earning trust and building confidence through consistent actions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 6: Partner Carousel */}
        <div className="section">
          <div className="section-inner">

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
          </div>
        </div>
      </GSAPPanelScroll>
    </main>
  )
}
