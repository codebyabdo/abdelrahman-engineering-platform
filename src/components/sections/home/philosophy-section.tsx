"use client";

import {
  Blocks,
  Gauge,
  GitBranch,
  Layers3,
  type LucideIcon,
} from "lucide-react";

import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/motion";

interface EngineeringPrinciple {
  title: string;
  description: string;
  focus: string;
  icon: LucideIcon;
}

const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    title: "Build for Reuse",
    description:
      "I build reusable components, shared patterns, and clear interfaces so new features can be added without duplicating logic or UI.",
    focus: "Reusable Systems",
    icon: Blocks,
  },
  {
    title: "Think in Systems",
    description:
      "I look beyond individual screens and consider feature boundaries, data flow, API contracts, state management, authentication, and how the frontend fits into the wider system.",
    focus: "Frontend Architecture",
    icon: Layers3,
  },
  {
    title: "Performance by Design",
    description:
      "I consider rendering strategy, data fetching, component complexity, loading states, responsive behavior, and user experience throughout development—not only at the end.",
    focus: "Performance & UX",
    icon: Gauge,
  },
  {
    title: "Engineer as a Team",
    description:
      "I collaborate with backend developers, designers, and other engineers to define responsibilities, solve technical problems, and keep implementation aligned with product requirements.",
    focus: "Collaboration & Leadership",
    icon: GitBranch,
  },
];

export function PhilosophySection() {
  return (
    <section className="relative px-4 sm:px-6">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl sm:h-64 sm:w-64"
      />

      <div className="relative mx-auto max-w-7xl space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="mb-2 flex items-center gap-2 sm:mb-3">
            <span className="h-px w-6 bg-blue-500 sm:w-8" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-[10px] sm:tracking-[0.25em]">
              Engineering Principles
            </span>
          </div>

          <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
            How I approach frontend engineering.
          </h2>

          <p className="mt-2 text-xs leading-relaxed text-white/45 sm:mt-3 sm:text-sm">
            I focus on building frontend systems that are not only visually
            polished, but also structured, maintainable, and ready to evolve
            as the product grows.
          </p>
        </div>

        {/* Principles */}
        <StaggerChildren
          stagger={0.07}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
        >
          {ENGINEERING_PRINCIPLES.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <StaggerItem key={principle.title}>
                <article className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10 sm:rounded-2xl sm:p-5">
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />

                  {/* Index */}
                  <div className="absolute right-4 top-4 font-mono text-[8px] text-white/15 sm:right-5 sm:top-5 sm:text-[9px]">
                    0{index + 1}
                  </div>

                  <div className="relative flex h-full flex-col space-y-3 sm:space-y-4 lg:space-y-5">
                    {/* Icon */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/45 transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 group-hover:text-blue-400 sm:h-10 sm:w-10 sm:rounded-xl">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold tracking-tight text-white">
                        {principle.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-white/45 sm:mt-3 sm:text-sm sm:leading-5">
                        {principle.description}
                      </p>
                    </div>

                    {/* Focus */}
                    <div className="border-t border-white/10 pt-3 sm:pt-4">
                      <span className="text-[8px] font-medium uppercase tracking-[0.15em] text-white/25 sm:text-[9px] sm:tracking-[0.18em]">
                        Focus
                      </span>

                      <p className="mt-1 text-[9px] font-medium uppercase tracking-wider text-blue-400/80 sm:mt-1.5 sm:text-[10px]">
                        {principle.focus}
                      </p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}