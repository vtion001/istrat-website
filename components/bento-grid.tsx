"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Communications",
    description: "Strategic messaging and brand voice development",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Creative",
    description: "Conceptual excellence and visual innovation",
    gridClass: "md:col-span-1 md:row-span-3",
  },
  {
    id: 3,
    title: "Production",
    description: "From concept to completion with technical mastery",
    gridClass: "md:col-span-3 md:row-span-1",
  },
  {
    id: 4,
    title: "Online Media",
    description: "Digital presence optimization",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    title: "Above-the-Line",
    description: "Premium traditional advertising",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    title: "Social Marketing",
    description: "Community building and engagement",
    gridClass: "md:col-span-2 md:row-span-1",
  },
]

export default function BentoGrid() {
  return (
    <section className="w-full px-4 md:px-8 py-24 bg-[#0a0a0a]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          className="text-6xl md:text-7xl font-display font-bold mb-16 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Core Pillars
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`${service.gridClass} group relative overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full p-8 border border-white/10 bg-white/5 backdrop-blur-xl rounded-none overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ccff00]/0 to-[#b700ff]/0 group-hover:from-[#ccff00]/10 group-hover:to-[#b700ff]/10 transition-all duration-500" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">{service.title}</h3>
                    <p className="text-sm md:text-base text-[#a0a0a0]">{service.description}</p>
                  </div>

                  {/* Arrow icon - appears on hover */}
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-xs tracking-widest text-[#ccff00]">EXPLORE</span>
                    <ArrowRight className="w-5 h-5 text-[#ccff00] transform group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </div>

              {/* Border glow on hover */}
              <motion.div
                className="absolute inset-0 border border-[#ccff00] rounded-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
