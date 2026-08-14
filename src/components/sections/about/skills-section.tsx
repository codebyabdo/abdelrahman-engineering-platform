'use client'

import {  TECH_STACK_CATEGORIES } from '@/lib/constants/skill-categories-data'
import { Code2 } from 'lucide-react'


export function SkillsSection() {
  return (
    <section className="space-y-8">
        <div className="border-b border-white/10 pb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500 block">
            MASTERY MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white uppercase">
            Technical Stack Breakdown
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECH_STACK_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#080808] border border-white/10 space-y-4">
              <h3 className="text-base font-black uppercase tracking-tight text-white flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-400" /> {cat.category}
              </h3>
              <p className="text-xs text-white/50">{cat.description}</p>

              <div className="space-y-3 pt-2">
                {cat.skills.map((s, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/2 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white font-bold">{s.name}</span>
                      <span className="text-blue-400 font-bold uppercase tracking-wider">{s.level} ({s.experienceYears} yrs)</span>
                    </div>
                    <p className="text-[11px] text-white/50">{s.highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}
