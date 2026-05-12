'use client'

import { MessageSquare, GitPullRequest, FileCode, Users } from 'lucide-react'
import { FadeUp, StaggerChildren, StaggerItem, HoverCard } from '@/components/animations/motion'

const workflowPrinciples = [
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Regular standups, async updates, and documentation ensure everyone stays aligned on goals and progress.',
  },
  {
    icon: GitPullRequest,
    title: 'Code Review Culture',
    description: 'Thorough but constructive code reviews that focus on knowledge sharing, not just finding bugs.',
  },
  {
    icon: FileCode,
    title: 'Documentation First',
    description: 'Architecture decisions, API changes, and complex logic are documented before implementation begins.',
  },
  {
    icon: Users,
    title: 'Mentorship Focus',
    description: 'Pairing sessions, knowledge transfers, and growth-oriented feedback help everyone level up.',
  },
]

export function TeamWorkflowSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl mb-16 space-y-4">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">Leadership</p>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl">
            Team Collaboration
          </h2>
          <p className="text-muted-foreground">
            Great software is built by great teams. My leadership approach focuses on 
            creating environments where developers can do their best work.
          </p>
        </FadeUp>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowPrinciples.map((principle, index) => (
            <StaggerItem key={index}>
              <HoverCard className="h-full">
                <article className="h-full p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 transition-colors text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    <principle.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-medium mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </article>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
