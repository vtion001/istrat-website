"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Data imports
import { socialMedia, audioVisual, events, externalServices, serviceDescriptions, VIDEOS, HERO_VIDEO } from "@/data"

// Component imports
import HeroSection from "@/components/sections/hero-section"
import SectionHeader from "@/components/ui/section-header"
import VideoCard from "@/components/cards/video-card"
import SocialMediaCard from "@/components/cards/social-media-card"
import ServiceCard from "@/components/cards/service-card"
import VideoModal from "@/components/ui/video-modal"

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
    <main className="w-full overflow-x-hidden bg-black text-white">
      {/* 1. Cinematic Hero Section */}
      <HeroSection
        title="Our Works"
        breadcrumb="Our / Works"
        backgroundImage="/images/services/works-hero.png"
      />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24" aria-labelledby="our-works-heading">
        {/* Social Media Management */}
        <SectionHeader title="Social Media Management" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {socialMedia.map((item, index) => (
            <SocialMediaCard
              key={item.name}
              name={item.name}
              stat={item.stat}
              index={index}
            />
          ))}
        </motion.div>

        {/* Campaigns */}
        <SectionHeader title="Campaigns" animated={false} className="tracking-widest" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {audioVisual.map((name, idx) => (
            <VideoCard
              key={name}
              name={name}
              className={(idx === 0 || idx === 3 || idx === 6) ? "md:col-span-2" : "md:col-span-1"}
            />
          ))}
        </motion.div>

        {/* Event Management */}
        <SectionHeader title="Event Management" animated={false} className="tracking-widest" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {events.map((name, idx) => (
            <VideoCard
              key={name}
              name={name}
              className={(idx === 1 || idx === 4 || idx === 7) ? "md:col-span-2" : "md:col-span-1"}
            />
          ))}
        </motion.div>

        {/* Our Services */}
        <SectionHeader title="Our Services" className="mt-16" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {externalServices.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={serviceDescriptions[s.title] || "Strategic creative and management solutions tailored for results."}
              image={s.image}
            />
          ))}
        </motion.div>

        {/* Video Modal */}
        <VideoModal
          isOpen={isOpen}
          onClose={closeVideo}
          video={currentVideo}
        />
      </section>
    </main>
  )
}
