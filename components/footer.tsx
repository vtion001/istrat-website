"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d1a2b] border-t border-white/10">
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
                src="https://res.cloudinary.com/dbviya1rj/image/upload/v1764835951/yte8v4vubwe6cdvfncas.png"
                alt="ISTRAT logo"
                className="h-30 w-auto opacity-90"
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
                <Mail className="w-5 h-5 text-[#c59f43]" />
                <span className="text-xs uppercase tracking-widest text-[#c59f43]">Email</span>
              </div>
              <p className="text-lg text-[#c59f43] ml-9"><a href="mailto:info@istratmc.com">info@istratmc.com</a></p>
              <p className="text-lg text-[#c59f43] ml-9"><a href="mailto:istratmkt@gmail.com">istratmkt@gmail.com</a></p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-2">
                <Phone className="w-5 h-5 text-[#c59f43]" />
                <span className="text-xs uppercase tracking-widest text-[#c59f43]">Phone</span>
              </div>
              <p className="text-lg text-[#c59f43] ml-9">(02) 7119 4130</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-2">
                <MapPin className="w-5 h-5 text-[#c59f43]" />
                <span className="text-xs uppercase tracking-widest text-[#c59f43]">Address</span>
              </div>
              <p className="text-lg text-[#c59f43] ml-9">161 Kamias Road, Sikatuna Village</p>
              <p className="text-lg text-[#c59f43] ml-9">Quezon City, Philippines 1101</p>
            </motion.div>
          </div>

          {/* Bottom Info */}
          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <p className="text-sm text-[#c59f43]">© 2025 iStrat COMMS INC. All rights reserved.</p>
            <div className="flex gap-8">
              {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-sm uppercase tracking-widest text-[#c59f43] hover:text-[#e6c066] transition-colors"
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
