"use client"

import { motion } from "framer-motion"
import { Play, Download, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const pillars = [
  {
    id: 1,
    title: "Approfondissez vos connaissances sur le Private Equity",
    description: "",
    gridClass: "md:col-span-1 md:row-span-2",
    tag: "E-BOOK",
    hasIcon: true,
    buttonText: "Télécharger notre e-book",
    variant: "tall"
  },
  {
    id: 2,
    title: "+ 130 vidéos et séries phares sur le Private Equity et l'offre Altaroc",
    description: "",
    gridClass: "md:col-span-2 md:row-span-1",
    tag: "ALTAROC TV",
    bgImage: "https://res.cloudinary.com/dbviya1rj/image/upload/w_1200,h_800,c_fill,q_auto/istrat/creative-bg",
    buttonText: "Découvrir",
    variant: "wide"
  },
  {
    id: 3,
    title: "Video Preview",
    description: "",
    gridClass: "md:col-span-1 md:row-span-1",
    tag: "",
    bgImage: "https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_400,c_fill,q_auto/istrat/video-thumb",
    showPlay: true,
    variant: "video"
  },
  {
    id: 4,
    title: "+ 400 articles sur les actualités du marché et de ses acteurs de premier plan",
    description: "",
    gridClass: "md:col-span-2 md:row-span-1",
    tag: "INSIGHTS",
    bgImages: ["https://res.cloudinary.com/dbviya1rj/image/upload/w_1200,h_800,c_fill,q_auto/istrat/creative-bg", "https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_400,c_fill,q_auto/istrat/video-thumb"],
    buttonText: "Découvrir",
    variant: "stacked"
  },
  {
    id: 5,
    title: "Retrouvez tous nos événements passés en replay",
    description: "",
    gridClass: "md:col-span-1 md:row-span-1",
    tag: "ÉVÉNEMENTS",
    showPlaySmall: true,
    buttonText: "Découvrir",
    variant: "small"
  },
]

// Mapping the actual iStrat content to the new design
const iStratPillars = [
  {
    id: 1,
    title: "Communications",
    description: "Strategic messaging and brand voice development",
    gridClass: "md:col-span-1 md:row-span-2",
    tag: "E-BOOK",
    hasIcon: true,
    buttonText: "Download our guide",
    variant: "tall"
  },
  {
    id: 2,
    title: "Creative Conceptual excellence and visual innovation",
    description: "Crafting narratives that resonate and visuals that inspire across every medium.",
    gridClass: "md:col-span-2 md:row-span-1",
    tag: "ISTRAT TV",
    bgImage: "/creative-bg.png",
    buttonText: "Discover",
    variant: "wide"
  },
  {
    id: 3,
    title: "Above-the-Line",
    description: "",
    gridClass: "md:col-span-1 md:row-span-1",
    tag: "VIDEO",
    bgImage: "/video-thumb.png",
    showPlay: true,
    variant: "video"
  },
  {
    id: 4,
    title: "Digital Media & Online presence strategy optimization",
    description: "Data-driven insights to scale your digital footprint effectively.",
    gridClass: "md:col-span-2 md:row-span-1",
    tag: "INSIGHTS",
    bgImages: ["/creative-bg.png", "/video-thumb.png"],
    buttonText: "Explore More",
    variant: "stacked"
  },
  {
    id: 5,
    title: "Social Marketing & Community building",
    description: "Engagement and advocacy driven by authentic connections.",
    gridClass: "md:col-span-1 md:row-span-1",
    tag: "MARKETING",
    showPlaySmall: true,
    buttonText: "Start Now",
    variant: "small"
  },
]

export default function BentoGrid() {
  return (
    <section className="w-full px-4 md:px-8 py-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl md:text-7xl font-semibold mb-16 tracking-widest text-[#DC7026]"
          style={{ fontFamily: 'var(--font-label)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Core Pillars
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
          {iStratPillars.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${item.gridClass} group relative rounded-[32px] overflow-hidden bg-black border border-white/5 flex flex-col`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Background Images */}
              {item.bgImage && (
                <div className="absolute inset-0">
                  <Image
                    src={item.bgImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
              )}

              {/* Stacked Images Effect */}
              {item.variant === "stacked" && item.bgImages && item.bgImages.length >= 2 && (() => {
                const images = item.bgImages;
                return (
                  <div className="absolute bottom-0 right-0 w-3/5 h-4/5 pointer-events-none pr-4 pb-4">
                    <div className="relative w-full h-full">
                      <div className="absolute bottom-4 right-4 w-4/5 h-3/5 opacity-30 translate-x-4 translate-y-4 rotate-6 group-hover:rotate-12 transition-transform duration-700">
                        <Image src={images[0]} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover rounded-2xl border border-white/10 shadow-2xl" alt="" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-4/5 h-3/5 opacity-50 translate-x-0 translate-y-0 rotate-3 group-hover:rotate-6 transition-transform duration-700">
                        <Image src={images[1]} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover rounded-2xl border border-white/10 shadow-2xl" alt="" />
                      </div>
                    </div>
                  </div>
                );
              })()}

              <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    {item.hasIcon && (
                      <div className="w-10 h-10 rounded-xl bg-[#DC7026]/20 flex items-center justify-center text-[#DC7026] backdrop-blur-sm">
                        <div className="w-5 h-5 border-2 border-current rounded-sm rotate-45" />
                      </div>
                    )}
                    {item.showPlaySmall && (
                      <div className="w-12 h-12 rounded-full bg-[#DC7026] flex items-center justify-center text-[#06241f] shadow-[0_0_20px_rgba(179,240,236,0.3)]">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    )}
                    <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#DC7026]/80 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight text-white leading-[1.2]">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-gray-400 max-w-[240px] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {item.showPlay && (
                  <Link href="/connect-with-us" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-[#DC7026]/90 flex items-center justify-center text-[#06241f] backdrop-blur-md shadow-[0_0_30px_rgba(179,240,236,0.4)] group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                  </Link>
                )}

                {item.buttonText && (
                  <Link href="/connect-with-us">
                    <button className="self-start mt-8 px-6 py-2.5 rounded-full border border-white/15 text-xs font-bold text-white hover:bg-[#DC7026] hover:text-[#06241f] hover:border-[#DC7026] transition-all duration-300">
                      {item.buttonText}
                    </button>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
