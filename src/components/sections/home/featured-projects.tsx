"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  FadeUp,
  HoverCard,
  StaggerChildren,
  StaggerItem,
} from "../../animations/motion";

import { featuredProjects } from "@/lib/constants/featured-projects-data";

export function FeaturedProjects() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <FadeUp className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <p className="text-primary text-sm font-medium uppercase tracking-[0.2em]">
              Featured Projects
            </p>

            <h2 className="font-heading text-3xl font-semibold text-balance sm:text-4xl lg:text-5xl">
              Real Systems.
              <br />
              Real Architecture.
            </h2>

            <p className="text-muted-foreground max-w-2xl leading-relaxed text-pretty">
              Selected projects focused on scalable frontend systems, dashboard
              architecture, authentication workflows, and product-oriented
              engineering.
            </p>
          </div>

          <Button asChild variant="outline" className="group shrink-0">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </FadeUp>

        {/* Projects */}
        <StaggerChildren className="grid gap-8">
          {featuredProjects.map((project, index) => (
            <StaggerItem key={project.slug}>
              <HoverCard>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <article className="grid gap-8 rounded-2xl border border-border/50 bg-card/40 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card lg:grid-cols-2 lg:p-8">
                    {/* Preview */}
                    <div
                      className={`relative aspect-video overflow-hidden rounded-xl border border-border/40 bg-secondary ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="font-heading text-6xl font-bold text-primary/10">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      {/* Optional overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex flex-col justify-center space-y-6 ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      {/* Title */}
                      <div className="space-y-4">
                        <h3 className="font-heading text-2xl font-semibold transition-colors group-hover:text-primary lg:text-3xl">
                          {project.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="border border-border/50 bg-secondary/40 px-3 py-1"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="flex gap-8 border-t border-border/50 pt-5">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="space-y-1">
                            <p className="font-heading text-xl font-semibold text-foreground">
                              {value}
                            </p>

                            <p className="text-muted-foreground text-sm capitalize">
                              {key}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 font-medium text-primary">
                        View Case Study
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
