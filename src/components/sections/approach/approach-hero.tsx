'use client'

import { FadeUp, StaggerChildren, StaggerItem } from '@/components/animations/motion'

export function ApproachHero() {
  return (
    <section className="py-24 lg:py-32 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <StaggerChildren className="max-w-3xl space-y-8">
          <StaggerItem>
            <p className="text-sm text-primary font-medium uppercase tracking-wider">Philosophy</p>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-balance">
              Engineering Approach
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Building scalable frontend systems requires more than just writing code. 
              It demands a structured approach to architecture, a deep understanding of 
              performance optimization, and the ability to lead teams towards shared goals.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Over the years, I&apos;ve developed a set of principles and patterns that guide 
              my work. These aren&apos;t rigid rules but flexible guidelines that adapt to each 
              project&apos;s unique requirements while maintaining consistency and quality.
            </p>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  )
}
