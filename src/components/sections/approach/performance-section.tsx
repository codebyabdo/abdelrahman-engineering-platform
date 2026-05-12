'use client'

import { FadeUp, StaggerChildren, StaggerItem, motion } from '@/components/animations/motion'

const performanceMetrics = [
  { metric: 'LCP', target: '<2.5s', description: 'Largest Contentful Paint' },
  { metric: 'FID', target: '<100ms', description: 'First Input Delay' },
  { metric: 'CLS', target: '<0.1', description: 'Cumulative Layout Shift' },
  { metric: 'TTI', target: '<3.8s', description: 'Time to Interactive' },
]

const performanceTechniques = [
  'Code splitting with dynamic imports',
  'Image optimization with next/image',
  'Font subsetting and display optimization',
  'Critical CSS extraction',
  'Resource prefetching for likely navigation',
  'Lazy loading below-the-fold content',
  'Memoization of expensive computations',
  'Virtual scrolling for large lists',
]

export function PerformanceSection() {
  return (
    <section className="py-24 lg:py-32 border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl mb-16 space-y-4">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">Speed</p>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl">
            Performance Optimization
          </h2>
          <p className="text-muted-foreground">
            Performance is a feature. Every millisecond matters for user experience 
            and business metrics.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Core Web Vitals */}
          <FadeUp delay={0.1}>
            <div className="space-y-6">
              <h3 className="font-heading font-medium text-lg">Core Web Vitals Targets</h3>
              <div className="grid grid-cols-2 gap-4">
                {performanceMetrics.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl border border-border/50 bg-background"
                  >
                    <p className="font-heading font-semibold text-2xl text-primary mb-1">
                      {item.target}
                    </p>
                    <p className="font-heading font-medium text-sm">{item.metric}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Techniques */}
          <StaggerChildren className="space-y-6">
            <StaggerItem>
              <h3 className="font-heading font-medium text-lg">Optimization Techniques</h3>
            </StaggerItem>
            <div className="grid sm:grid-cols-2 gap-3">
              {performanceTechniques.map((technique, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">{technique}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
