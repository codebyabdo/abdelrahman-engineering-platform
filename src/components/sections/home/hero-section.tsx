"use client";

import { ArrowUpRight, FileText } from "lucide-react";

import { PERSONAL_INFO } from "@/lib/constants/personal-data";
import { Link } from "@/i18n/navigation";
import { useDialogs } from "@/providers/dialog-provider";
import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/motion";

const CORE_STACK = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "TanStack Query",
  "REST APIs",
];

export function HeroSection() {
  const { openResume } = useDialogs();

  return (
    <section className="relative overflow-hidden px-4 sm:px-6">
      {/* Soft Radial Backlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-75 w-75 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px] sm:h-105 sm:w-105" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl space-y-6 text-center sm:space-y-8 sm:text-left">
        {/* Status Badge */}
        <FadeUp
          duration={0.5}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/2 px-3 py-1.5 text-xs text-white/70 shadow-2xl backdrop-blur-md sm:gap-3 sm:px-4 sm:py-2"
        >
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 sm:h-2 sm:w-2" />
          </span>

          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 sm:text-[11px]">
            FRONT-END ENGINEER
          </span>

          <span className="hidden text-white/20 sm:inline">|</span>

          <span className="hidden font-mono text-[10px] uppercase tracking-wider text-white/50 sm:inline sm:text-[11px]">
            {PERSONAL_INFO.availability}
          </span>
        </FadeUp>

        {/* Main Headline */}
        <FadeUp
          delay={0.08}
          duration={0.6}
          className="space-y-3 sm:space-y-5"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-500 sm:text-xs sm:tracking-[0.3em]">
            React.js • Next.js • TypeScript
          </p>

          <h1 className="text-4xl font-black uppercase leading-[0.92] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            ABD EL-RAHMAN
            <br className="hidden sm:inline" />

            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-indigo-300 bg-clip-text text-transparent">
              ADEL
            </span>
          </h1>

          <p className="max-w-3xl pt-1 text-base font-light leading-relaxed text-white/60 sm:pt-2 sm:text-lg lg:text-xl">
            Front-End Engineer specializing in{" "}
            <span className="font-normal text-white">React.js</span>,{" "}
            <span className="font-normal text-white">Next.js</span>, and{" "}
            <span className="font-normal text-white">TypeScript</span>,
            building scalable web applications and polished digital
            experiences.
          </p>

          <p className="max-w-2xl pt-1 text-sm leading-relaxed text-white/45 sm:text-base">
            I build SaaS platforms, dashboards, business applications, and
            responsive web products with a focus on frontend architecture,
            reusable components, performance, and reliable API integration.
          </p>
        </FadeUp>

        {/* Action CTAs */}
        <FadeUp
          delay={0.16}
          duration={0.6}
          className="flex flex-wrap items-center justify-center gap-3 pt-1 sm:justify-start sm:gap-4 sm:pt-2"
        >
          {/* Projects */}
          <Link href="/projects">
            <span className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-600/50 sm:px-6 sm:py-3.5 sm:text-xs">
              <span>View Projects</span>

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-4 sm:w-4" />
            </span>
          </Link>

          {/* Resume */}
          <button
            type="button"
            onClick={openResume}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#080808] px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10 sm:px-6 sm:py-3.5 sm:text-xs"
          >
            <FileText className="h-3.5 w-3.5 text-blue-400 sm:h-4 sm:w-4" />

            <span>View Resume</span>
          </button>

          {/* Contact */}
          <Link href="/contact">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-transparent px-4 py-2.5 text-[10px] uppercase tracking-widest text-white/60 transition-all hover:bg-white/5 hover:text-white sm:px-6 sm:py-3.5 sm:text-xs">
              Get In Touch
            </span>
          </Link>
        </FadeUp>

        {/* Primary Stack */}
        <FadeUp
          delay={0.24}
          duration={0.7}
          className="space-y-2 border-t border-white/5 pt-6 sm:space-y-3 sm:pt-8"
        >
          <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/40 sm:text-[10px] sm:tracking-[0.2em]">
            Core Frontend Stack
          </p>

          <StaggerChildren
            stagger={0.06}
            className="flex flex-wrap items-center justify-center gap-1.5 sm:justify-start sm:gap-2"
          >
            {CORE_STACK.map((item) => (
              <StaggerItem key={item}>
                <span className="inline-flex rounded bg-white/3 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/70 sm:px-3 sm:py-1 sm:text-[11px]">
                  {item}
                </span>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </FadeUp>
      </div>
    </section>
  );
}