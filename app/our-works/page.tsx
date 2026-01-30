"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { Flip } from "gsap/Flip"
import Image from "next/image"

// Data imports
import { VIDEOS, HERO_VIDEO } from "@/data"

// Component imports
import HeroSection from "@/components/sections/hero-section"
import VideoModal from "@/components/ui/video-modal"
import GSAPPanelScroll from "@/components/gsap-panel-scroll"

gsap.registerPlugin(Flip)

// Video categories based on the VIDEOS data
const VIDEO_CATEGORIES = {
  "Social Media": ["General Eleazar", "Aksyon QC", "Matatag"],
  "Events": [
    "GAWAD PARANGAL 2022 HIGHLIGHTS",
    "Mr & Ms Quezon City Employee",
    "Pista sa QC",
    "ALAB FOR LOVE Pride PH Festival",
    "QUEZON CITY OFFICIALS INAUGURATION 2022",
    "19TH GAWAD PARANGAL",
    "18TH GAWAD PARANGAL",
    "SBP MAYOR JOY BELMONTE GRAND RALLY",
    "QC NEW YEAR'S COUNTDOWN 2022",
    "Quezon City Virtual Countdown to 2021",
  ],
  "Advocacy": [
    "Quezon City Anti-Terrorism Campaign",
    "Mayor Joy Belmonte Campaign",
    "Sen. Guillermo Eleazar Election 2022 TVC",
    "NCRPO Journal",
    "Sama-Sama at Tulong-Tulong",
    "V.Group Crew Guide Animation",
    "My heart beats for Banaue",
    "NEW GREENLAND Urban Farming in Quezon City",
  ],
}

export default function OurWorksPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<{ src: string; poster?: string; title?: string } | null>(null)

  const openVideo = (key: string) => {
    const v = VIDEOS[key] || { src: HERO_VIDEO }
    setCurrentVideo(v)
    setIsOpen(true)
  }

  const closeVideo = () => {
    setIsOpen(false)
    setCurrentVideo(null)
  }

  // GSAP Flip animation setup
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const filterButtons = container.querySelectorAll(".filter-btn") as NodeListOf<HTMLButtonElement>
    const videosContainer = container.querySelector(".videos-grid") as HTMLElement
    const items = videosContainer?.querySelectorAll(".item") as NodeListOf<HTMLElement>

    if (!filterButtons.length || !items.length) return

    const updateFilters = () => {
      const state = Flip.getState(items)
      const activeFilters = Array.from(filterButtons)
        .filter((btn) => btn.classList.contains("active"))
        .map((btn) => "." + btn.getAttribute("data-filter"))
      const matches = activeFilters.length
        ? gsap.utils.toArray(activeFilters.join(",")) as HTMLElement[]
        : ([] as HTMLElement[])

      // Update display
      items.forEach((item) => {
        item.style.display = matches.indexOf(item) === -1 ? "none" : "inline-flex"
      })

      // Animate from previous state - only within videos container
      Flip.from(state, {
        duration: 0.7,
        scale: true,
        ease: "power1.inOut",
        stagger: 0.08,
        absolute: false,
        onEnter: (elements) =>
          gsap.fromTo(
            elements,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 1 }
          ),
        onLeave: (elements) =>
          gsap.to(elements, { opacity: 0, scale: 0, duration: 1 }),
      })
    }

    // Add event listeners
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Deactivate all buttons first
        filterButtons.forEach((b) => {
          b.classList.remove("active", "border-[#DC7026]", "text-[#DC7026]", "bg-[#DC7026]/10")
          b.classList.add("border-white/20", "text-white")
        })
        // Activate only the clicked button
        btn.classList.add("active", "border-[#DC7026]", "text-[#DC7026]", "bg-[#DC7026]/10")
        btn.classList.remove("border-white/20", "text-white")
        updateFilters()
      })
    })

    // Call updateFilters on initial mount to show only advocacy videos
    updateFilters()

    return () => {
      filterButtons.forEach((btn) => {
        btn.removeEventListener("click", updateFilters)
      })
    }
  }, [])

  const allVideos = Object.entries(VIDEOS)
  const videoCategories = Object.keys(VIDEO_CATEGORIES) as (keyof typeof VIDEO_CATEGORIES)[]

  return (
    <main className="w-full overflow-x-hidden bg-black text-white">
      <GSAPPanelScroll>
        {/* Panel 1: Hero Section */}
        <div className="section">
          <div className="section-inner">
            <HeroSection
              title="Our Works"
              breadcrumb="Our / Works"
              backgroundImage="/images/services/works-hero.png"
            />
          </div>
        </div>

        {/* Panel 2: Videos with Filters */}
        <div className="section">
          <div className="section-inner">
            <section className="max-w-7xl mx-auto px-6 md:px-8 py-24" ref={containerRef}>
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3 mb-12 pointer-events-auto relative z-20">
                <button
                  className="filter-btn social px-6 py-2.5 rounded-full border border-white/20 text-sm font-semibold tracking-wide text-white hover:border-[#DC7026] hover:text-[#DC7026] transition-all duration-300"
                  data-filter="social"
                >
                  Social Media
                </button>

                <button
                  className="filter-btn events px-6 py-2.5 rounded-full border border-white/20 text-sm font-semibold tracking-wide text-white hover:border-[#DC7026] hover:text-[#DC7026] transition-all duration-300"
                  data-filter="events"
                >
                  Events
                </button>

                <button
                  className="filter-btn advocacy px-6 py-2.5 rounded-full border border-[#DC7026] text-sm font-semibold tracking-wide text-[#DC7026] bg-[#DC7026]/10 transition-all duration-300 active"
                  data-filter="advocacy"
                >
                  Advocacy
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Videos Grid */}
                <div className="videos-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-wrap">
            {allVideos.map(([key, video]) => {
              let category = "all"
              if (VIDEO_CATEGORIES["Social Media"].includes(key)) category = "social"
              else if (VIDEO_CATEGORIES["Events"].includes(key)) category = "events"
              else if (VIDEO_CATEGORIES["Advocacy"].includes(key)) category = "advocacy"

              return (
                <div
                  key={key}
                  className={`item ${category} inline-flex`}
                  onClick={() => openVideo(key)}
                >
                  <div className="group relative w-full rounded-2xl overflow-hidden bg-[#080808] border border-white/5 hover:border-[#DC7026]/30 transition-all duration-300 cursor-pointer h-[300px] flex flex-col">
                    {/* Thumbnail */}
                    <div className="relative w-full h-full overflow-hidden bg-black/50">
                      {video.poster && (
                        <Image
                          src={video.poster}
                          alt={video.title || key}
                          fill
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-2 border-white/50 group-hover:border-[#DC7026] flex items-center justify-center group-hover:bg-[#DC7026]/20 transition-all duration-300">
                          <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1 group-hover:border-l-[#DC7026]" />
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4 bg-gradient-to-t from-black/80 to-transparent flex-1 flex flex-col justify-end">
                      <h3 className="text-white font-semibold text-sm md:text-base truncate group-hover:text-[#DC7026] transition-colors">
                        {video.title || key}
                      </h3>
                      {video.desc && (
                        <p className="text-gray-400 text-xs mt-1 line-clamp-2">{video.desc}</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
              </div>
              </motion.div>

              <VideoModal isOpen={isOpen} onClose={closeVideo} video={currentVideo} />
            </section>
          </div>
        </div>
      </GSAPPanelScroll>
    </main>
  )
}
