"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
  HoverCard,
} from "@/components/animations/motion";
import { cn } from "@/lib/utils";
import { categories, projects } from "@/lib/constants/projects-data";
import Image from "next/image";

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const [imgError, setImgError] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <FadeUp className="max-w-2xl mb-16 space-y-6">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">
            Portfolio
          </p>
          <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-balance">
            Selected Projects
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            A collection of projects showcasing my expertise in frontend
            engineering, architecture design, and team leadership.
          </p>
        </FadeUp>

        {/* Category Filter */}
        <FadeUp delay={0.1} className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "transition-all",
                activeCategory === category
                  ? ""
                  : "border-border/50 hover:border-primary/50",
              )}
            >
              {category}
            </Button>
          ))}
        </FadeUp>

        {/* Projects Grid */}
        <StaggerChildren className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <HoverCard className="h-full">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full"
                >
                  <article className="h-full flex flex-col p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300">
                    {/* Project Image Placeholder */}
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        {!imgError && project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            onError={() => setImgError(true)}
                          />
                        ) : (
                          <div className="text-5xl font-heading font-bold text-primary/20">
                            {project.title?.charAt(0)}
                          </div>
                        )}
                      </div>

                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary/90 text-primary-foreground">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          variant="outline"
                          className="border-border/50 text-muted-foreground"
                        >
                          {project.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {project.duration}
                        </span>
                      </div>

                      <h2 className="font-heading font-semibold text-xl lg:text-2xl mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>

                      <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 4).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-secondary/50 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 4 && (
                          <Badge
                            variant="secondary"
                            className="bg-secondary/50 text-xs"
                          >
                            +{project.tags.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="text-sm text-muted-foreground">
                          {project.teamRole}
                        </span>
                        <span className="flex items-center gap-2 text-primary font-medium text-sm">
                          View Details
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
