"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { useDialogs } from "@/providers/dialog-provider";
import { ProjectCaseStudy } from "@/types/featured-projects-data";

interface ProjectCardProps {
  project: ProjectCaseStudy;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { openProject } = useDialogs();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080808] transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-[#050505]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-transparent to-transparent opacity-90" />

        {/* Badges */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <Badge variant="primary">{project.category}</Badge>
          {project.featured && (
            <Badge variant="featured">
              <Sparkles className="h-3 w-3" />
              Featured
            </Badge>
          )}
        </div>

        <div className="absolute right-4 top-4">
          <Badge variant="secondary">{project.year}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col space-y-4 p-6 sm:p-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/40">
            <span>{project.role}</span>
            <span>•</span>
            <span className="font-bold text-blue-400">
              {project.clientOrCompany}
            </span>
          </div>

          <h3 className="text-xl font-bold uppercase tracking-tight text-white transition-colors group-hover:text-blue-400 sm:text-2xl">
            {project.title}
          </h3>

          <p className="line-clamp-2 text-sm leading-relaxed text-white/60">
            {project.subtitle}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-3 text-center">
          {project.metrics.slice(0, 3).map((metric) => (
            <div key={metric.label} className="space-y-0.5">
              <div className="text-sm font-bold text-blue-400">
                {metric.value}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-white/40">
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
              className="rounded border border-white/5 bg-white/5 px-2.5 py-1 text-xs uppercase tracking-wider text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => openProject(project.id)}
          className="group/btn flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0a0a0a] py-3 text-xs font-bold uppercase tracking-widest text-blue-400 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
        </button>
      </div>
    </motion.div>
  );
}

// ============================================================
// Sub-components
// ============================================================

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
