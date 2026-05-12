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

        {/* Header */}
        <FadeUp className="max-w-2xl mb-14 space-y-4">
          <p className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
            Impact
          </p>

          <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl">
            Results & Metrics
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Measurable outcomes that demonstrate the project&apos;s success.
          </p>
        </FadeUp>

        {/* Grid */}
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

          {project.results.map((result, index) => (
            <StaggerItem key={index}>
              <HoverCard className="h-full">

                <div className="
                  h-full p-6 rounded-2xl 
                  border border-border/50 
                  bg-card/40 backdrop-blur-sm
                  hover:border-primary/30 
                  transition-all duration-300
                  text-center flex flex-col items-center justify-center
                  gap-2
                ">

                  {/* Value (main focus) */}
                  <p className="
                    font-heading font-semibold 
                    text-3xl sm:text-4xl lg:text-4xl
                    text-primary leading-none
                  ">
                    {result.value}
                  </p>

                  {/* Metric */}
                  <h3 className="
                    font-medium text-sm sm:text-base
                    text-foreground
                  ">
                    {result.metric}
                  </h3>

                  {/* Description */}
                  <p className="
                    text-xs sm:text-sm text-muted-foreground
                    leading-relaxed max-w-[220px]
                  ">
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