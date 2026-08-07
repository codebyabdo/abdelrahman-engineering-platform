'use client'

import { FadeUp, StaggerChildren, StaggerItem, HoverCard } from '@/components/animations/motion'
import { philosophies } from '@/lib/constants/philosophies'


export function PhilosophySection() {
  return (
    <section className="py-24 lg:py-32 border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">Philosophy</p>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-balance">
            Engineering Principles
          </h2>
          <p className="text-muted-foreground text-pretty">
            The core beliefs that guide my approach to building software products.
          </p>
        </FadeUp>

        {/* Philosophy Grid */}
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((item, index) => (
            <StaggerItem key={index}>
              <HoverCard className="h-full">
                <article className="h-full p-6 rounded-2xl border border-border/50 bg-background hover:border-primary/30 transition-colors group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
