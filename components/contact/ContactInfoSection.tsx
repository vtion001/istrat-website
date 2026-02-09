/**
 * Contact Info Section Component
 * Right column with image and contact information cards
 */

import Image from "next/image"

export default function ContactInfoSection() {
    return (
        <div className="flex flex-col gap-12">
            <div className="relative aspect-[3/4] lg:aspect-[4/6] rounded-[48px] overflow-hidden border border-white/5 shadow-2xl">
                <Image
                    src="/images/services/arnold-cinematic.svg"
                    alt="iStrat Creative Hub"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-[#DC7026] text-[9px] font-bold tracking-[0.3em] uppercase mb-2">Office Headquarters</p>
                    <h4 className="text-white text-2xl font-bold tracking-tight">QUEZON CITY, PH</h4>
                </div>
            </div>

            {/* Quick Contact Info Below Image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 border border-white/5 bg-[#080808] rounded-[32px]">
                    <p className="text-[#DC7026] uppercase tracking-widest text-[10px] font-black mb-4">Phone</p>
                    <a href="tel:+63283561638" className="text-white hover:text-[#DC7026] transition-colors font-bold">(02) 7119 4130</a>
                </div>
                <div className="p-8 border border-white/5 bg-[#080808] rounded-[32px]">
                    <p className="text-[#DC7026] uppercase tracking-widest text-[10px] font-black mb-4">Email</p>
                    <a href="mailto:info@istratmc.com" className="text-white hover:text-[#DC7026] transition-colors font-bold">info@istratmc.com</a>
                </div>
            </div>
        </div>
    )
}
