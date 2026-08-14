'use client'

import { CAREER_TIMELINE } from '@/lib/constants/experiences-data'
import { CheckCircle2 } from 'lucide-react'



export function ExperienceTimeline() {
  return (
     <section className="space-y-8">
        <div className="border-b border-white/10 pb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500 block">
            PROGRESSION
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white uppercase">
            Career Timeline & Key Milestones
          </h2>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
          {CAREER_TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-7.75 sm:-left-9.75 top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-blue-500 group-hover:bg-blue-500 transition-colors" />

              <div className="p-6 rounded-2xl bg-[#080808] border border-white/10 space-y-3 shadow-xl hover:border-blue-500/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white">{item.role}</h3>
                  <span className="font-mono text-[10px] uppercase font-bold text-blue-400 bg-blue-600/10 border border-blue-500/30 px-3 py-1 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>

                <div className="text-xs font-mono text-white/40 flex items-center gap-2">
                  <span className="text-white font-semibold">{item.company}</span> • <span>{item.location}</span>
                </div>

                <ul className="space-y-1.5 text-xs text-white/70 pt-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {item.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded bg-white/3 text-[10px] font-mono uppercase tracking-wider text-white/50 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}
