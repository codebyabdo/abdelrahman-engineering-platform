"use client";

import {
  BriefcaseBusiness,
  Code2,
  Layers3,
  Server,
  Workflow,
} from "lucide-react";

import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
  motion,
} from "@/components/animations/motion";

const ENGINEERING_SNAPSHOT = [
  {
    value: "4+",
    label: "Years Building",
    description: "Frontend development and production web applications",
    icon: BriefcaseBusiness,
  },
  {
    value: "React",
    label: "Primary Ecosystem",
    description: "Component-driven frontend development",
    icon: Code2,
  },
  {
    value: "Next.js",
    label: "Application Framework",
    description: "Production-ready applications with modern React architecture",
    icon: Layers3,
  },
  {
    value: "TypeScript",
    label: "Primary Language",
    description: "Typed, maintainable, and scalable frontend systems",
    icon: Code2,
  },
  {
    value: "SaaS",
    label: "Product Experience",
    description: "Dashboards, business platforms, and multi-tenant products",
    icon: Server,
  },
  {
    value: "Lead",
    label: "Engineering Role",
    description: "Technical ownership, architecture, and frontend leadership",
    icon: Workflow,
  },
] as const;

export function MetricsSection() {
  return (
    <section className="relative px-4 sm:px-6">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl sm:h-64 sm:w-64"
      />

      <div className="relative mx-auto max-w-7xl space-y-6 sm:space-y-8">
        {/* Section Header */}
        <FadeUp>
          <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-end sm:justify-between sm:pb-6 md:gap-4">
            <div className="max-w-2xl">
              <div className="mb-2 flex items-center gap-2 sm:mb-3">
                <span className="h-px w-6 bg-blue-500 sm:w-8" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-[10px] sm:tracking-[0.25em]">
                  Engineering Snapshot
                </span>
              </div>

              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
                Experience, focus & technical direction.
              </h2>

              <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/45 sm:mt-3 sm:text-sm">
                A concise overview of the technologies, products, and
                engineering responsibilities behind my work.
              </p>
            </div>

            {/* Availability */}
            <div className="flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 sm:h-2 sm:w-2" />
              </span>

              <span className="text-[8px] font-medium uppercase tracking-wider text-emerald-400 sm:text-[10px]">
                Open to Opportunities
              </span>
            </div>
          </div>
        </FadeUp>

        {/* Snapshot Grid */}
        <StaggerChildren className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {ENGINEERING_SNAPSHOT.map((item, index) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.label}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10 sm:rounded-2xl sm:p-4 lg:p-5"
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -top-8 h-16 w-16 rounded-full bg-blue-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 sm:h-20 sm:w-20"
                  />

                  <div className="relative flex h-full flex-col space-y-2 sm:space-y-3 lg:space-y-4">
                    {/* Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/40 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-400 sm:h-8 sm:w-8">
                        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>

                      <span className="font-mono text-[8px] text-white/15 sm:text-[9px]">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Value */}
                    <div>
                      <div className="text-lg font-semibold tracking-tight text-white sm:text-xl lg:text-2xl">
                        {item.value}
                      </div>

                      <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-blue-400/90 sm:mt-1 sm:text-[10px] sm:tracking-[0.12em]">
                        {item.label}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[8px] leading-tight text-white/35 sm:text-[9px] sm:leading-4 lg:text-[10px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}