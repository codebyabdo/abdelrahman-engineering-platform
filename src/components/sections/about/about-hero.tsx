"use client";

import { PERSONAL_INFO } from "@/lib/constants/personal-data";

export function AboutHero() {
  return (
    <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
      <div className="space-y-6 text-sm leading-relaxed text-white/70 md:col-span-7">
        <h2 className="font-sans text-2xl font-black uppercase tracking-tight text-white">
          How I Think As An Engineer
        </h2>

        <p>
          I approach frontend engineering as a balance between solid technical
          architecture and thoughtful user experience. My focus is building
          interfaces that are scalable, maintainable, responsive, and easy for
          engineering teams to extend.
        </p>

        <p>
          My professional experience has centered around React and Next.js
          applications, SaaS platforms, enterprise dashboards, e-commerce
          systems, accounting applications, and API-driven business products.
          I enjoy turning complex business requirements into clear and
          reusable frontend experiences.
        </p>

        <p>
          I place strong emphasis on reusable components, feature-based
          organization, predictable data fetching, type-safe development,
          responsive design, API integration, authentication flows, and
          performance-conscious implementation.
        </p>

        <p>
          Beyond implementation, I have experience contributing to technical
          planning, feature estimation, code reviews, and team coordination,
          particularly while working as a Team Lead on business applications.
        </p>
      </div>

      <div className="space-y-4 rounded-2xl border border-white/10 bg-[#080808] p-6 md:col-span-5">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">
          ENGINEER AT A GLANCE
        </h3>

        <ul className="space-y-3 font-mono text-xs text-white/70">
          <li className="flex items-center justify-between gap-4 border-b border-white/5 pb-2">
            <span className="text-white/40">Location:</span>

            <span className="font-bold text-white">
              {PERSONAL_INFO.location}
            </span>
          </li>

          <li className="flex items-center justify-between gap-4 border-b border-white/5 pb-2">
            <span className="text-white/40">Status:</span>

            <span className="font-bold text-emerald-400">
              {PERSONAL_INFO.availability}
            </span>
          </li>

          <li className="flex items-center justify-between gap-4 border-b border-white/5 pb-2">
            <span className="text-white/40">Primary Focus:</span>

            <span className="font-bold text-blue-400">
              React · Next.js · TypeScript
            </span>
          </li>

          <li className="flex items-center justify-between gap-4 border-b border-white/5 pb-2">
            <span className="text-white/40">Specialization:</span>

            <span className="text-right text-white/80">
              SaaS & Business Applications
            </span>
          </li>

          <li className="flex items-center justify-between gap-4 border-b border-white/5 pb-2">
            <span className="text-white/40">Experience:</span>

            <span className="text-white/80">
              2+ Years Hands-on Experience
            </span>
          </li>

          <li className="flex items-center justify-between gap-4">
            <span className="text-white/40">Languages:</span>

            <span className="text-right text-white/80">
              Arabic (Native) · English
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}