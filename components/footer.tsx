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
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[0.9]" style={{ fontFamily: 'var(--font-display)' }}>
              LET'S WORK <br /> TOGETHER
            </h2>

            <div className="mt-auto">
              <a href="/" aria-label="Go to Home" className="inline-block mb-6 group">
                <Image
                  src="https://res.cloudinary.com/dbviya1rj/image/upload/v1766595309/nufdx6xpymsgxwth91zh.png"
                  alt="iStrat Comms Logo"
                  width={200}
                  height={80}
                  className="h-16 w-auto opacity-100 mix-blend-screen group-hover:scale-105 transition-transform"
                />
              </a>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">
                © 2011 — 2025 ISTRAT COMMS INC. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>

          {/* Right Columns - Details */}
          <div className="flex flex-col gap-12 md:gap-20">
            <div>
              <h4 className="text-[#DC7026] text-[10px] font-black uppercase tracking-[0.4em] mb-6">Main Office</h4>
              <p className="text-white text-base md:text-lg leading-relaxed font-medium">
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
              <h4 className="text-[#DC7026] text-[10px] font-black uppercase tracking-[0.4em] mb-6">Drop a Line</h4>
              <a href="mailto:info@istratmc.com" className="block text-white text-base md:text-lg hover:text-[#DC7026] transition-colors font-medium underline underline-offset-8 decoration-white/10 hover:decoration-[#DC7026]">
                info@istratmc.com
              </a>
              <a href="tel:+63271194130" className="block text-white text-base md:text-lg mt-4 hover:text-[#DC7026] transition-colors font-medium">
                (02) 7119 4130
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
