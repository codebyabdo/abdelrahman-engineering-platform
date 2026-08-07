'use client'

import { FadeUp, StaggerChildren, StaggerItem } from '@/components/animations/motion'
import { Project } from '@/lib/constants/projects-data'

interface ProjectOverviewProps {
  project: Project
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <StaggerChildren className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Problem */}
          <StaggerItem>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-primary font-medium uppercase tracking-wider">The Challenge</p>
                <h2 className="font-heading font-semibold text-2xl lg:text-3xl">Problem</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>
          </StaggerItem>

          {/* Solution */}
          <StaggerItem>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-primary font-medium uppercase tracking-wider">The Approach</p>
                <h2 className="font-heading font-semibold text-2xl lg:text-3xl">Solution</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  )
}
