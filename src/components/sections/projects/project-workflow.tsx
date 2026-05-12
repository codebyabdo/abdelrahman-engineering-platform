'use client'

import { FadeUp, StaggerChildren, StaggerItem, motion } from '@/components/animations/motion'
import { Project } from '@/lib/constants/projects-data'

interface ProjectWorkflowProps {
  project: Project
}

export function ProjectWorkflow({ project }: ProjectWorkflowProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl mb-12 space-y-4">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">Process</p>
          <h2 className="font-heading font-semibold text-3xl lg:text-4xl">
            Development Workflow
          </h2>
          <p className="text-muted-foreground">
            The structured approach taken to deliver this project successfully.
          </p>
        </FadeUp>

        <StaggerChildren className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border/50 lg:-translate-x-px" />

          <div className="space-y-8 lg:space-y-12">
            {project.workflow.map((step, index) => (
              <StaggerItem key={index}>
                <div className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Dot */}
                  <motion.div 
                    className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full bg-primary lg:-translate-x-1.5 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  />

                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'}`}>
                    <div className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}
