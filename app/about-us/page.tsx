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
        {/* Panel 1: Hero Section */}
        <div className="section">
          <div className="section-inner">
            <HeroSection
              title="About Us"
              breadcrumb="About / Us"
              backgroundImage="/images/services/banner.png"
            />
          </div>
        </div>

        {/* Panel 2: Power Statement / Hero Tagline */}
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
                    WE DON'T JUST RUN CAMPAIGNS.
                  </motion.span>
                  <motion.span
                    className="block text-[#DC7026] mt-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    We build influence.
                  </motion.span>
                  <motion.span
                    className="block text-gray-500 text-2xl md:text-3xl lg:text-4xl mt-8 font-light tracking-wider"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    FOR 32 YEARS
                  </motion.span>
                </h2>
              </motion.div>
            </section>
          </div>
        </div>

        {/* Panel 3: Experience & Story */}
        <div className="section">
          <div className="section-inner">
            <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                <div className="flex flex-col gap-12 md:gap-20">
                  <motion.div
                    className="flex items-center gap-8 md:gap-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative w-32 h-32 md:w-48 md:h-40 rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl">
                      <video
                        src={HERO_VIDEO}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="w-12 h-12 rounded-full bg-[#DC7026] flex items-center justify-center text-black backdrop-blur-sm shadow-[0_0_20px_rgba(220,112,38,0.5)] group-hover:scale-110 transition-transform">
                          <Play fill="currentColor" size={20} className="ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-baseline">
                        <h2 className="text-6xl md:text-8xl font-bold text-[#DC7026] leading-none tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>32</h2>
                        <span className="text-4xl md:text-5xl font-bold text-[#DC7026]">+</span>
                      </div>
                      <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] md:text-xs font-black mt-2">Years of Experience</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-[#DC7026] text-[10px] font-black uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
                      HOW WE WORK? WATCH THE VIDEO <div className="h-[1px] w-12 bg-[#DC7026]/40"></div>
                    </h3>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
                      iStrat is a one-stop creative marketing communications delivering advertising, PR campaigns, and data-driven strategies for brand building towards sales growth.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                      {["Behind the Lens,", "Ahead of the Curve"].map((line, i) => (
                        <motion.span
                          key={i}
                          className="block"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: i * 0.2 }}
                        >
                          {line}
                        </motion.span>
                      ))}
                    </h2>
                    <p className="text-gray-400 leading-relaxed max-w-lg text-sm md:text-base">
                      Imagine. Live. Soar. Our team focuses on results-driven work while ensuring the highest level of creative and strategic thinking.
                    </p>
                    <ul className="space-y-5">
                      {[
                        "A major industry player both local and global.",
                        "Award winning communications company.",
                        "The expert video producers in the agency.",
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="mt-1 w-5 h-5 rounded-full bg-[#DC7026]/20 flex items-center justify-center text-[#DC7026] border border-[#DC7026]/20">
                            <Check size={12} strokeWidth={4} className="lucide lucide-check" />
                          </div>
                          <span className="text-gray-200 font-bold text-sm tracking-tight">{text}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-col gap-2 w-max group cursor-pointer">
                      <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white group-hover:text-[#DC7026] transition-colors">
                        READ MORE <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="h-[1.5px] w-14 bg-white/20 group-hover:bg-[#DC7026]/60 transition-colors"></div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="relative aspect-[3/4] lg:aspect-[4/6] rounded-[48px] overflow-hidden border border-white/5 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src="/images/services/crew.png"
                    alt="Production technician"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-[#DC7026] text-[9px] font-bold tracking-[0.3em] uppercase mb-2">Cinematography</p>
                    <h4 className="text-white text-2xl font-bold tracking-tight">CRAFTING CINEMATIC NARRATIVES</h4>
                  </div>
                </motion.div>
              </div>
            </section>
          </div>
        </div>

        {/* Panel 3: Specializations */}
        <div className="section">
          <div className="section-inner">
            <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
              <motion.h2
                className="text-4xl md:text-5xl font-bold tracking-tight mb-12"
                style={{ fontFamily: 'var(--font-display)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Specializations
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {specializations.map((spec, i) => (
                  <motion.div
                    key={spec}
                    className="p-8 border border-white/5 bg-[#080808] rounded-[32px] hover:border-[#DC7026]/30 transition-all duration-500 hover:bg-white/[0.02] group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#DC7026]/10 flex items-center justify-center text-[#DC7026] mb-6 group-hover:scale-110 transition-transform">
                      <div className="w-4 h-4 border-2 border-current rounded-sm rotate-45"></div>
                    </div>
                    <p className="text-white font-bold tracking-tight text-xl leading-tight">{spec}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Panel 4: Strategic Narrative */}
        <div className="section">
          <div className="section-inner">
            <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
              <motion.div
                className="p-10 md:p-16 border border-white/5 bg-[#080808] rounded-[48px] relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC7026]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <h2 className="text-4xl md:text-6xl text-[#DC7026] mb-10 font-bold tracking-tight leading-[1.1] max-w-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                  Communication has the power to influence real change.
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                    Communications can make or break a brand, help a company grow or fail, and guide a country through peaceful social change. With every brief, we deliver communication strategies that help you put your best foot forward.
                  </p>
                  <div className="flex flex-col justify-end">
                    <p className="text-gray-400 italic text-lg mb-6">
                      &quot;Our team focuses on achieving your brand integrity and sales growth through strategic narratives.&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-[2px] w-12 bg-[#DC7026]"></div>
                      <span className="font-black uppercase tracking-[0.2em] text-[#DC7026] text-sm">Ric Lopez — Operations Head</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
        </div>

        {/* Panel 5: Leadership/Team (no animation) */}
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
                        className="w-full h-full object-cover grayscale contrast-125 brightness-110"
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
