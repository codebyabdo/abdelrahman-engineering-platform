"use client";

import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

import { PROJECTS } from "@/lib/constants/featured-projects-data";
import { ProjectCard } from "./project-card";

export function FeaturedProjects() {
  return (
    <section className="space-y-8 px-4 sm:px-6">
      {/* Header */}
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-b border-white/5 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
            Case Studies
          </span>
          <h2 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            Selected Projects
          </h2>
        </div>

        <Link href="/projects">
          <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-blue-400 transition-colors hover:text-blue-300">
            <span>View All ({PROJECTS.length})</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
        {PROJECTS.slice(0,4).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}