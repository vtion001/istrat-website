"use client"

import Image from "next/image"
import type { TeamMember } from "@/data"
import { getTeamMemberAvatar } from "@/data"

interface OrgChartCardProps {
    member: TeamMember
}

export function OrgChartCard({ member }: OrgChartCardProps) {
    return (
        <div className="group flex flex-col h-full w-full max-w-[280px] mx-auto bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 hover:border-[#DC7026]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#DC7026]/20">
            {/* Profile Photo */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-black">
                <img
                    src={member.image || getTeamMemberAvatar(member.name)}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex-grow p-6 flex flex-col">
                <h4 className="text-white text-lg sm:text-xl font-semibold tracking-tight mb-2 uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                    {member.name}
                </h4>
                <p className="text-gray-500 text-[11px] sm:text-xs font-light tracking-wide mb-3 sm:mb-4">
                    {member.role}
                </p>
                <div className="h-[1px] w-10 sm:w-12 bg-white/10 mb-3 sm:mb-4"></div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                </p>
            </div>

            {/* Accent Border Bottom */}
            <div className="h-1 bg-gradient-to-r from-[#DC7026] to-[#3C4699] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    )
}

interface OrgChartProps {
    team: TeamMember[]
}

export default function OrganizationalChart({ team }: OrgChartProps) {
    // Filter members by level
    const level1 = team.filter(m => m.level === 1)
    const level2 = team.filter(m => m.level === 2)
    const level3 = team.filter(m => m.level === 3)

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            {/* Organizational Chart Hierarchy */}
            <div className="flex flex-col items-center space-y-16 sm:space-y-20 md:space-y-24">

                {/* Level 1: CEO/Top Leadership */}
                {level1.length > 0 && (
                    <div className="relative w-full">
                        <div className="flex justify-center gap-6">
                            {level1.map((member, idx) => (
                                <OrgChartCard key={idx} member={member} />
                            ))}
                        </div>

                    </div>
                )}

                {/* Level 2: C-Suite / Senior Leadership */}
                {level2.length > 0 && (
                    <div className="relative w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-items-center">
                            {level2.map((member, idx) => (
                                <div key={idx} className="relative w-full">
                                    <OrgChartCard member={member} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Level 3: Department Heads / Managers */}
                {level3.length > 0 && (
                    <div className="relative w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-items-center">
                            {level3.map((member, idx) => (
                                <div key={idx} className="relative w-full">
                                    <OrgChartCard member={member} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
