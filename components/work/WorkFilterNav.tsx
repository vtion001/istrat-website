/**
 * Work Filter Navigation Component
 * Category filter buttons for portfolio
 */

"use client"

import { workCategories, categoryKeys } from "@/data"

interface WorkFilterNavProps {
    activeFilter: string
    onFilterChange: (filter: string) => void
}

export default function WorkFilterNav({ activeFilter, onFilterChange }: WorkFilterNavProps) {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categoryKeys.map((key) => {
                const category = workCategories[key]
                const isActive = activeFilter === key

                return (
                    <button
                        key={key}
                        onClick={() => onFilterChange(key)}
                        className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${isActive
                                ? "bg-[#DC7026] text-white shadow-[0_0_30px_rgba(220,112,38,0.4)]"
                                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        {category.label}
                    </button>
                )
            })}
        </div>
    )
}
