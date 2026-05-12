'use client'

import { Database, RefreshCw, Shield, Zap } from 'lucide-react'
import { FadeUp, StaggerChildren, StaggerItem, HoverCard } from '@/components/animations/motion'

const dataStrategies = [
  {
    icon: Database,
    title: 'Server Components',
    description: 'Leverage React Server Components for data fetching to reduce client-side JavaScript and improve initial load performance.',
  },
  {
    icon: RefreshCw,
    title: 'Smart Caching',
    description: 'Implement intelligent caching strategies with stale-while-revalidate patterns for optimal freshness and speed.',
  },
  {
    icon: Zap,
    title: 'Optimistic Updates',
    description: 'Provide instant feedback by updating UI optimistically, rolling back gracefully on failures.',
  },
  {
    icon: Shield,
    title: 'Type-Safe APIs',
    description: 'Use TypeScript end-to-end with generated types from API schemas for compile-time safety.',
  },
]

export function DataFetchingSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeUp className="space-y-6">
            <p className="text-sm text-primary font-medium uppercase tracking-wider">Data Layer</p>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl">
              Data Fetching Strategy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Modern applications require sophisticated data management. My approach 
              combines React Query for client-side state, Server Components for 
              SSR/SSG scenarios, and careful consideration of caching boundaries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The goal is always to provide the best user experience while maintaining 
              code simplicity. This often means preferring declarative approaches over 
              imperative ones and letting the framework handle complexity where possible.
            </p>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 gap-4">
            {dataStrategies.map((strategy, index) => (
              <StaggerItem key={index}>
                <HoverCard className="h-full">
                  <div className="h-full p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                      <strategy.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-medium text-sm mb-2">
                      {strategy.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {strategy.description}
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
