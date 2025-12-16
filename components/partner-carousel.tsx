"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
    { name: "SGV", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894172/wbmi61vsyleigtreys5l.png" },
    { name: "Maersk", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894172/ixhxavsglhiwcqr1vaep.png" },
    { name: "eRase", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894171/banbetzrr8svfs4jszer.jpg" },
    { name: "SBP Partylist", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894165/pog6cm1ydqe58hi50fee.png" },
    { name: "CP Fresh Shop", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894164/pw76vzsdwt0ixrt5ppj5.png" },
    { name: "V.Ships", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894164/twmybmhfi2bd57dglc8r.png" },
    { name: "Lungsod ng Quezon City", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894164/zmvws5ltjod0ouzobkon.png" },
    { name: "MaraLabs", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894164/j1qdiu0ccivkcff2uko4.jpg" },
    { name: "2018 Banaue", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894164/tbfciatpu9myf1dkegle.jpg" },
    { name: "Special Forces Regiment (Airborne)", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894164/hwdx2wj1jgb9w1skk2fh.png" },
    { name: "Lungsod ng San Jose Del Monte", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894163/alrkplzgfdtfy7vvus8k.png" },
    { name: "PNP Aviation", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894163/yxevx8tndmenxiqktks7.jpg" },
    { name: "Universal Harvest", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894163/uepti8bfjygjwx4l9x61.jpg" },
    { name: "Bayan ng Limay", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894163/yhq5tuitc3hlogfk9flr.png" },
    { name: "CWS", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894162/xxvu3d9uwsagz746dq54.png" },
    { name: "Piata", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894162/ytfpni70jvxdtvibmriu.png" },
    { name: "Bayan ng Cabarangan", image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1765894162/gcyklm99p7egtbxpd1hq.png" },
]

// Split partners into 2 rows
const row1 = partners.slice(0, 9)
const row2 = partners.slice(9)

export default function PartnerCarousel() {
    return (
        <div className="w-full flex flex-col gap-16 overflow-hidden py-12">
            {/* Row 1: Left to Right */}
            <div className="flex w-full">
                <motion.div
                    className="flex flex-shrink-0 gap-16 min-w-full"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                >
                    {[...row1, ...row1, ...row1].map((partner, i) => (
                        <div key={`${partner.name}-${i}`} className="relative h-24 w-40 flex-shrink-0 flex items-center justify-center">
                            <Image
                                src={partner.image || "/placeholder.svg"}
                                alt={partner.name}
                                fill
                                className="object-contain"
                                sizes="160px"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Row 2: Right to Left */}
            <div className="flex w-full">
                <motion.div
                    className="flex flex-shrink-0 gap-16 min-w-full"
                    initial={{ x: "-50%" }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: 35,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                >
                    {[...row2, ...row2, ...row2].map((partner, i) => (
                        <div key={`${partner.name}-${i}`} className="relative h-24 w-40 flex-shrink-0 flex items-center justify-center">
                            <Image
                                src={partner.image || "/placeholder.svg"}
                                alt={partner.name}
                                fill
                                className="object-contain"
                                sizes="160px"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
