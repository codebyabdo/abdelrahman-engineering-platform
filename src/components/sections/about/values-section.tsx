'use client'

import { FadeUp, StaggerChildren, StaggerItem, HoverCard } from '@/components/animations/motion'
import { values } from '@/lib/constants/values-data'

export function ValuesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl mb-16 space-y-4">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">Mindset</p>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl">
            Values & Principles
          </h2>
          <p className="text-muted-foreground">
            The core beliefs that guide my approach to work and leadership.
          </p>
        </FadeUp>

        <StaggerChildren className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <HoverCard className="h-full">
                <article className="h-full p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
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
