'use client'

import { FolderTree, Layers, GitBranch, Package } from 'lucide-react'
import { FadeUp, StaggerChildren, StaggerItem, HoverCard } from '@/components/animations/motion'

const architecturePrinciples = [
  {
    icon: FolderTree,
    title: 'Feature-Based Structure',
    description: 'Organizing code by features rather than types creates natural boundaries, improves discoverability, and makes it easier to scale teams.',
    details: [
      'Each feature contains its own components, hooks, and utilities',
      'Shared code lives in common directories',
      'Clear ownership and reduced coupling',
    ],
  },
  {
    icon: Layers,
    title: 'Separation of Concerns',
    description: 'Clean separation between UI, business logic, and data layers ensures maintainability and testability.',
    details: [
      'UI components focused on presentation',
      'Custom hooks for reusable logic',
      'Services layer for external interactions',
    ],
  },
  {
    icon: GitBranch,
    title: 'Branching Strategy',
    description: 'A well-defined Git workflow ensures code quality and enables parallel development across team members.',
    details: [
      'Feature branches with clear naming',
      'Protected main branch with CI checks',
      'Automated deployments on merge',
    ],
  },
  {
    icon: Package,
    title: 'Modular Dependencies',
    description: 'Careful dependency management reduces bundle size and improves security posture.',
    details: [
      'Regular audit and updates',
      'Tree-shaking friendly imports',
      'Minimal peer dependencies',
    ],
  },
]

export function ArchitectureSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl mb-16 space-y-4">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">Foundation</p>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl">
            Architecture Principles
          </h2>
          <p className="text-muted-foreground">
            The structural decisions that make codebases maintainable and teams productive.
          </p>
        </FadeUp>

        <StaggerChildren className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {architecturePrinciples.map((principle, index) => (
            <StaggerItem key={index}>
              <HoverCard className="h-full">
                <article className="h-full p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <principle.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg lg:text-xl mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-16">
                    {principle.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
