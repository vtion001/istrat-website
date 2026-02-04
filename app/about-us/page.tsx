"use client"

import { motion } from "framer-motion"
import { Check, Play, ChevronRight } from "lucide-react"
import Image from "next/image"

// Data imports
import { specializations, team, getTeamMemberAvatar, HERO_VIDEO } from "@/data"

// Component imports
import HeroSection from "@/components/sections/hero-section"
import GSAPPanelScroll from "@/components/gsap-panel-scroll"

export default function AboutUsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-black text-white selection:bg-[#DC7026]/30">
      <GSAPPanelScroll>
        {/* Panel 1: Power Statement / Hero Tagline */}
        <div className="section">
          <div className="section-inner">
            <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
              <motion.div
                className="text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95]" style={{ fontFamily: 'var(--font-display)' }}>
                  <motion.span
                    className="block text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    Meet the minds behind the work.
                  </motion.span>
                  <motion.span
                    className="block text-white mt-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Built by <span className="text-[#DC7026]">Strategists.</span> Led by <span className="text-[#DC7026]">Experience.</span>
                  </motion.span>
                </h2>
              </motion.div>
            </section>
          </div>
        </div>

        {/* Panel 2: Leadership/Team */}
        <div className="section">
          <div className="section-inner">
            <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
              <div className="mb-20">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>The Experts Behind iStrat</h2>
                <p className="text-gray-400 text-lg md:text-xl">Meet the minds behind the work.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                {team.map((member, i) => (
                  <motion.div
                    key={member.name}
                    className="group flex flex-col h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  >
                    <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden">
                      <img
                        src={member.image || getTeamMemberAvatar(member.name)}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-white text-xl md:text-2xl font-semibold tracking-tight mb-2 uppercase" style={{ fontFamily: 'var(--font-display)' }}>{member.name}</h4>
                      <p className="text-gray-500 text-xs font-light tracking-wide mb-4">{member.role}</p>
                      <div className="h-[1px] w-12 bg-white/10 mb-4"></div>
                      <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Closing Statement */}
              <motion.div
                className="mt-32 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="text-gray-500 text-sm tracking-[0.3em] font-light uppercase">32 Years of Strategic Influence</p>
              </motion.div>
            </section>
          </div>
        </div>
      </GSAPPanelScroll>
    </main>
  )
}
