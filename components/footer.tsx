"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <a href="/" aria-label="Go to Home" className="inline-block">
              <img
                src="/images/istrat-comms-logo-transparent.png"
                alt="iStrat Comms Logo"
                className="h-24 w-auto opacity-100 mix-blend-screen"
              />
            </a>
          </div>
          <div className="mb-16">
            {/* Headline removed */}
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-2">
                <Mail className="w-5 h-5 text-[#DC7026]" />
                <span className="text-xs uppercase tracking-widest text-[#DC7026]">Email</span>
              </div>
              <p className="text-lg text-[#DC7026] ml-9"><a href="mailto:info@istratmc.com">info@istratmc.com</a></p>
              <p className="text-lg text-[#DC7026] ml-9"><a href="mailto:istratmkt@gmail.com">istratmkt@gmail.com</a></p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-2">
                <Phone className="w-5 h-5 text-[#DC7026]" />
                <span className="text-xs uppercase tracking-widest text-[#DC7026]">Phone</span>
              </div>
              <p className="text-lg text-[#DC7026] ml-9">(02) 7119 4130</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-2">
                <MapPin className="w-5 h-5 text-[#DC7026]" />
                <span className="text-xs uppercase tracking-widest text-[#DC7026]">Address</span>
              </div>
              <p className="text-lg text-[#DC7026] ml-9">161 Kamias Road, Sikatuna Village</p>
              <p className="text-lg text-[#DC7026] ml-9">Quezon City, Philippines 1101</p>
            </motion.div>
          </div>

          {/* Bottom Info */}
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <p className="text-sm text-[#DC7026]">© 2025 iStrat COMMS INC. All rights reserved.</p>
            <div className="flex gap-8">
              {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-sm uppercase tracking-widest text-[#DC7026] hover:text-[#E8A351] transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
