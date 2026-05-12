"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Users, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/motion";
import { Project } from "@/lib/constants/projects-data";
import { useState } from "react";
import Image from "next/image";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-24 lg:py-32 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Link */}
        <FadeUp className="mb-12">
          <Button asChild variant="ghost" size="sm" className="group">
            <Link href="/projects">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </Button>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <StaggerChildren className="space-y-8">
            <StaggerItem>
              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  variant="outline"
                  className="border-primary/30 text-primary"
                >
                  {project.category}
                </Badge>
                {project.featured && (
                  <Badge className="bg-primary/90 text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-balance">
                {project.title}
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </StaggerItem>

            {/* Meta */}
            <StaggerItem>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm">{project.teamRole}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">
                    {project.teamSize} Team Members
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{project.duration}</span>
                </div>
              </div>
            </StaggerItem>

            {/* Tags */}
            <StaggerItem>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-secondary/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </StaggerItem>
          </StaggerChildren>

          {/* Project Image */}
          <FadeUp
            delay={0.2}
            className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-secondary"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl font-heading font-bold text-primary/20">
                {!imgError && project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={700}
                      className="w-full h-full object-contain rounded-lg"
                      onError={() => setImgError(true)}
                    />
                ) : (
                  <div className="text-5xl font-heading font-bold text-primary/20">
                    {project.title?.charAt(0)}
                  </div>
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
