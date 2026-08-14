"use client";

import { PERSONAL_INFO } from "@/lib/constants/personal-data";

export function AboutHero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      <div className="md:col-span-7 space-y-6 text-white/70 text-sm leading-relaxed">
        <h2 className="text-2xl font-black uppercase tracking-tight text-white font-sans">
          How I Think As An Engineer
        </h2>
        <p>
          I treat frontend engineering as a rigorous discipline combining
          computer science fundamentals—memory management, streaming, web
          workers, tree-shaking—with luxury product design.
        </p>
        <p>
          My engineering career has centered on solving high-throughput UI
          bottlenecks. From streaming 10,000 WebSocket updates/sec in
          institutional trading terminals to building headless component design
          systems that scale across multi-brand product suites, my focus is
          delivering zero-latency user experiences.
        </p>
        <p>
          I believe that software should be performant by default, WCAG 2.1 AA
          accessible, and architected with strict TypeScript contracts so that
          engineering teams can ship features with speed and total confidence.
        </p>
      </div>

      {/* Quick Highlights Card */}
      <div className="md:col-span-5 p-6 rounded-2xl bg-[#080808] border border-white/10 space-y-4">
        <h3 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em]">
          ENGINEER AT A GLANCE
        </h3>
        <ul className="space-y-3 font-mono text-xs text-white/70">
          <li className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-white/40">Location:</span>
            <span className="text-white font-bold">
              {PERSONAL_INFO.location}
            </span>
          </li>
          <li className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-white/40">Status:</span>
            <span className="text-emerald-400 font-bold">
              {PERSONAL_INFO.availability}
            </span>
          </li>
          <li className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-white/40">Primary Focus:</span>
            <span className="text-blue-400 font-bold">
              React 19 & Next.js 15
            </span>
          </li>
          <li className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-white/40">Accessibility:</span>
            <span className="text-white/80">WCAG 2.1 AA Certified</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-white/40">Languages:</span>
            <span className="text-white/80">
              English (Fluent) • Arabic (Native)
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
