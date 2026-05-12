'use client'

import { FadeUp, StaggerChildren, StaggerItem, HoverCard } from '@/components/animations/motion'
import { architecturePrinciples } from '@/lib/constants/architecture-principles'


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
