'use client'

import { Badge } from '@/components/ui/badge'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/animations/motion'
import { Project } from '@/lib/constants/projects-data'

interface ProjectTechStackProps {
  project: Project
}

export function ProjectTechStack({ project }: ProjectTechStackProps) {
  return (
    <section className="py-24 lg:py-32 border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl mb-12 space-y-4">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">Technology</p>
          <h2 className="font-heading font-semibold text-3xl lg:text-4xl">
            Tech Stack
          </h2>
          <p className="text-muted-foreground">
            The technologies and tools used to build this project.
          </p>
        </FadeUp>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {project.techStack.map((category, index) => (
            <StaggerItem key={index}>
              <div className="space-y-4">
                <h3 className="font-heading font-medium text-sm text-primary uppercase tracking-wider">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge 
                      key={item} 
                      variant="secondary" 
                      className="bg-background border border-border/50 hover:border-primary/30 transition-colors"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
