"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { HoverCard } from "@/components/animations/motion";
import { useDialogs } from "@/providers/dialog-provider";

import { ProjectCaseStudy } from "@/types/featured-projects-data";

interface ProjectCardProps {
  project: ProjectCaseStudy;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { openProject } = useDialogs();

  return (
    <HoverCard
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080808] transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-[#050505]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 600px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-[#080808]/20 to-transparent opacity-90" />

        {/* Category + Featured */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <Badge variant="primary">{project.category}</Badge>

          {project.featured && (
            <Badge variant="featured">
              <Sparkles className="h-3 w-3" />
              Featured
            </Badge>
          )}
        </div>

        {/* Year */}
        <div className="absolute right-4 top-4">
          <Badge variant="secondary">{project.year}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col space-y-5 p-6 sm:p-8">
        {/* Project Info */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-white/40">
            <span>{project.role}</span>

            <span className="text-white/20">•</span>

            <span className="font-bold text-blue-400">
              {project.clientOrCompany}
            </span>
          </div>

          <h3 className="text-xl font-black uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-2xl">
            {project.title}
          </h3>

          <p className="line-clamp-2 text-sm leading-relaxed text-white/60">
            {project.subtitle}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 rounded-xl border border-white/5 bg-white/3 px-3 py-3 text-center">
          {project.metrics.slice(0, 3).map((metric) => (
            <div key={metric.label} className="min-w-0 space-y-1">
              <div className="truncate text-sm font-black tracking-tight text-blue-400">
                {metric.value}
              </div>

              <div className="truncate text-[9px] uppercase tracking-wider text-white/40 sm:text-[10px]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-white/5 bg-white/3 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <button
            type="button"
            onClick={() => openProject(project.id)}
            className="group/btn flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0a0a0a] py-3 text-xs font-bold uppercase tracking-widest text-blue-400 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
          >
            <span>View Case Study</span>

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
    </HoverCard>
  );
}

function Badge({
  variant,
  children,
}: {
  variant: "primary" | "secondary" | "featured";
  children: React.ReactNode;
}) {
  const variants = {
    primary:
      "border border-white/10 bg-[#050505]/90 text-blue-400 backdrop-blur-md",

    secondary:
      "border border-white/10 bg-[#050505]/80 text-white/50 backdrop-blur-md",

    featured:
      "border border-blue-500/40 bg-blue-600/20 text-blue-300 backdrop-blur-md",
  };

  return (
    <span
      className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${variants[variant]}`}
    >
      {children}
    </span>
  );
}