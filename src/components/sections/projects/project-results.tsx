'use client'

import { FadeUp, StaggerChildren, StaggerItem, HoverCard } from '@/components/animations/motion'
import { Project } from '@/lib/constants/projects-data'

interface ProjectResultsProps {
  project: Project
}

export function ProjectResults({ project }: ProjectResultsProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl mb-12 space-y-4">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">Impact</p>
          <h2 className="font-heading font-semibold text-3xl lg:text-4xl">
            Results & Metrics
          </h2>
          <p className="text-muted-foreground">
            Measurable outcomes that demonstrate the project&apos;s success.
          </p>
        </FadeUp>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.results.map((result, index) => (
            <StaggerItem key={index}>
              <HoverCard className="h-full">
                <div className="h-full p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 transition-colors text-center">
                  <p className="font-heading font-semibold text-4xl lg:text-5xl text-primary mb-2">
                    {result.value}
                  </p>
                  <h3 className="font-heading font-medium text-foreground mb-1">
                    {result.metric}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {result.description}
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
