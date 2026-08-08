"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Gauge,
  GitBranch,
  Layers3,
  type LucideIcon,
} from "lucide-react";

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
      "I prefer reusable components and clear patterns over duplicated UI and one-off implementations.",
    focus: "Component Systems",
    icon: Blocks,
  },
  {
    title: "Think in Systems",
    description:
      "I consider architecture, data flow, API boundaries, state management, and scalability before implementation.",
    focus: "Frontend Architecture",
    icon: Layers3,
  },
  {
    title: "Performance Matters",
    description:
      "I treat loading speed, rendering behavior, responsive interactions, and efficient data fetching as part of the implementation.",
    focus: "Performance",
    icon: Gauge,
  },
  {
    title: "Collaborate Clearly",
    description:
      "I work closely with backend developers, designers, and other engineers to turn requirements into maintainable products.",
    focus: "Team Workflow",
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
            My focus is not only on making interfaces work, but on building
            frontend systems that remain understandable, reusable, and
            maintainable as products grow.
          </p>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {ENGINEERING_PRINCIPLES.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10 sm:rounded-2xl sm:p-5"
              >
                {/* Index */}
                <div className="absolute right-4 top-4 font-mono text-[8px] text-white/15 sm:right-5 sm:top-5 sm:text-[9px]">
                  0{index + 1}
                </div>

                <div className="relative space-y-3 sm:space-y-4 lg:space-y-5">
                  {/* Icon */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/45 transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 group-hover:text-blue-400 sm:h-10 sm:w-10 sm:rounded-xl">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  {/* Content */}
                  <div>
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
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}