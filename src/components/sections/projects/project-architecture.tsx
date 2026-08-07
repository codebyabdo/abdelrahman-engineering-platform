'use client'

import { CheckCircle2 } from 'lucide-react'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/animations/motion'
import { Project } from '@/lib/constants/projects-data'

interface ProjectArchitectureProps {
  project: Project
}

export function ProjectArchitecture({ project }: ProjectArchitectureProps) {
  return (
    <section className="py-24 lg:py-32 border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl mb-12 space-y-4">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">Technical Details</p>
          <h2 className="font-heading font-semibold text-3xl lg:text-4xl">
            Architecture Decisions
          </h2>
          <p className="text-muted-foreground">
            Key architectural choices that shaped the project&apos;s structure and scalability.
          </p>
        </FadeUp>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.architecture.map((item, index) => (
            <StaggerItem key={index}>
              <div className="flex gap-4 p-6 rounded-2xl border border-border/50 bg-background h-full">
                <div className="shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
