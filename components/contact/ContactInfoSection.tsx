/**
 * Contact Info Section Component
 * Right column with image and contact information cards
 */

import Image from "next/image"

export default function ContactInfoSection() {
    return (
        <div className="flex flex-col gap-4">
            <div className="p-4 border border-white/5 bg-[#080808] rounded-[24px]">
                <p className="text-[#DC7026] text-[9px] font-bold tracking-[0.3em] uppercase mb-1">Office Headquarters</p>
                <h4 className="text-white text-2xl font-bold tracking-tight mb-2">QUEZON CITY, PH</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                    161 Kamias Road, Sikatuna Village, Quezon City, PH 1101
                </p>
            </div>

            {/* Quick Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 border border-white/5 bg-[#080808] rounded-[16px]">
                    <p className="text-[#DC7026] uppercase tracking-widest text-[10px] font-black mb-2">Phone</p>
                    <a href="tel:+63283561638" className="text-white hover:text-[#DC7026] transition-colors font-bold">(02) 7119 4130</a>
                </div>
                <div className="p-4 border border-white/5 bg-[#080808] rounded-[16px]">
                    <p className="text-[#DC7026] uppercase tracking-widest text-[10px] font-black mb-2">Email</p>
                    <a href="mailto:info@istratmc.com" className="text-white hover:text-[#DC7026] transition-colors font-bold">info@istratmc.com</a>
                </div>
            </div>
        </div>
    )
}
