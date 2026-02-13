"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5 selection:bg-[#DC7026]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24">

          {/* Left Column - CTA & Brand */}
          <div className="md:col-span-2 flex flex-col">
            <a href="/" aria-label="Go to Home" className="inline-block mb-6 group">
              <Image
                src="https://res.cloudinary.com/dbviya1rj/image/upload/v1770978180/klgt4e6hrzpcmsdtmu5o.png"
                alt="iStrat Comms Logo"
                width={140}
                height={56}
                className="h-11 w-auto opacity-100 mix-blend-screen group-hover:scale-105 transition-transform"
              />
            </a>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[0.75]" style={{ fontFamily: 'var(--font-display)' }}>
              LET'S WORK <br /> TOGETHER
            </h2>

            <div className="mt-auto">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">
                © 2011 — 2025 ISTRAT COMMS INC. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>

          {/* Right Columns - Details */}
          <div className="flex flex-col gap-12 md:gap-20">
            <div>
              <p className="text-white text-base md:text-lg leading-relaxed font-bold uppercase" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>
                161 Kamias Road, <br />
                Sikatuna Village, <br />
                Quezon City, PH 1101
              </p>
            </div>

            <div className="flex gap-6 mt-auto">
              {[
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#DC7026] hover:border-[#DC7026] transition-all"
                  whileHover={{ y: -4 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12 md:gap-20">
            <div>
              <a href="mailto:info@istratmc.com" className="block text-white text-base md:text-lg hover:text-[#DC7026] transition-colors font-bold underline underline-offset-8 decoration-white/10 hover:decoration-[#DC7026] uppercase" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>
                info@istratmc.com
              </a>
              <a href="tel:+63271194130" className="block text-white text-base md:text-lg mt-4 hover:text-[#DC7026] transition-colors font-bold uppercase" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>
                (02) 7119 4130
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
