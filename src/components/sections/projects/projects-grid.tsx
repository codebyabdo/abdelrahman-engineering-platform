"use client";

import { useMemo, useState } from "react";
import { FolderGit2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/motion";

import { cn } from "@/lib/utils";
import { PROJECTS, categories } from "@/lib/constants/featured-projects-data";

import { ProjectCard } from "./project-card";
import { MainHeader } from "@/components/shared/main-header";
import { Filters } from "@/components/shared/filters";

const header = {
  title: "Selected Systems & Case Studies",
  description:
    "In-depth technical breakdowns of production applications built with React, Next.js, TypeScript, and high-performance frontend architectures.",
  subtitle: "Case Studies & Architecture",
  highligh: "Production Engineering Portfolio",
  icon: FolderGit2,
};

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return PROJECTS.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const matchesSearch =
        !normalizedQuery ||
        project.title.toLowerCase().includes(normalizedQuery) ||
        project.subtitle.toLowerCase().includes(normalizedQuery) ||
        project.category.toLowerCase().includes(normalizedQuery) ||
        project.role.toLowerCase().includes(normalizedQuery) ||
        project.clientOrCompany.toLowerCase().includes(normalizedQuery) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(normalizedQuery),
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const resetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <section className="px-4 pb-16 pt-24 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Header */}
        <MainHeader header={header} />

        {/* Filters */}
        <Filters 
        categories={categories}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onCategoryChange={setActiveCategory}
        onSearchChange={setSearchQuery}
        />

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <FadeUp>
            <div className="space-y-3 rounded-3xl border border-white/10 bg-[#080808] p-12 text-center">
              <p className="font-mono text-xs uppercase tracking-wider text-white/40">
                No projects found matching your search filter.
              </p>

              <Button
                type="button"
                onClick={resetFilters}
                className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400 transition-colors hover:text-blue-300"
              >
                Reset Filters
              </Button>
            </div>
          </FadeUp>
        ) : (
          <StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        )}
      </div>
    </section>
  );
}
