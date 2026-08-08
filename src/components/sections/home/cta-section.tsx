"use client";

import { ArrowUpRight, FileText } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { useDialogs } from "@/providers/dialog-provider";

export function CTASection() {
  const { openResume } = useDialogs();

  return (
    <section className="relative overflow-hidden px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px] sm:h-72 sm:w-72" />
      </div>

      <div className="relative mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 px-4 py-10 text-center backdrop-blur-sm sm:rounded-3xl sm:px-8 sm:py-14 md:px-10 md:py-16">
        {/* Eyebrow */}
        <div className="mb-4 flex items-center justify-center gap-2 sm:mb-5 sm:gap-3">
          <span className="h-px w-6 bg-blue-500/70 sm:w-8" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-[10px] sm:tracking-[0.25em]">
            Let&apos;s Work Together
          </span>
          <span className="h-px w-6 bg-blue-500/70 sm:w-8" />
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Have a product in mind?
          <span className="block text-white/45">
            Let&apos;s build it properly.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50 sm:mt-5 sm:text-base">
          I&apos;m open to frontend engineering opportunities, freelance
          projects, and teams looking for someone who cares about clean
          interfaces, maintainable code, and solid user experiences.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-blue-600/30 sm:px-6 sm:py-3.5 sm:text-xs"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
          </Link>

          <button
            type="button"
            onClick={openResume}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white sm:px-6 sm:py-3.5 sm:text-xs"
          >
            <FileText className="h-3.5 w-3.5 text-blue-400 sm:h-4 sm:w-4" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Availability */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-[9px] font-medium uppercase tracking-widest text-white/30 sm:mt-8 sm:gap-2 sm:text-[10px]">
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 sm:h-2 sm:w-2" />
          </span>
          <span>Open to Frontend Opportunities</span>
        </div>
      </div>
    </section>
  );
}