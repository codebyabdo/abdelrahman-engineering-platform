'use client'

import { FadeUp, StaggerChildren, StaggerItem, motion } from '@/components/animations/motion'

const systemDesignTopics = [
  {
    title: 'Component Design',
    items: [
      'Compound components for flexibility',
      'Controlled and uncontrolled patterns',
      'Polymorphic components with TypeScript',
      'Accessibility as a first-class concern',
    ],
  },
  {
    title: 'State Management',
    items: [
      'Server state vs client state separation',
      'Context for truly global state only',
      'Local state with hooks composition',
      'Optimistic updates for responsiveness',
    ],
  },
  {
    title: 'Type Safety',
    items: [
      'Strict TypeScript configuration',
      'Generic components and utilities',
      'Zod for runtime validation',
      'API contracts with type generation',
    ],
  },
  {
    title: 'Error Handling',
    items: [
      'Error boundaries for graceful failures',
      'Centralized error reporting',
      'User-friendly error messages',
      'Retry mechanisms for transient failures',
    ],
  },
]

export function SystemDesignSection() {
  return (
    <section className="py-24 lg:py-32 border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl mb-16 space-y-4">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">Patterns</p>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl">
            Frontend System Design
          </h2>
          <p className="text-muted-foreground">
            Design patterns and practices for building robust, scalable frontend applications.
          </p>
        </FadeUp>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {systemDesignTopics.map((topic, index) => (
            <StaggerItem key={index}>
              <div className="space-y-4">
                <h3 className="font-heading font-medium text-sm text-primary uppercase tracking-wider pb-2 border-b border-border/50">
                  {topic.title}
                </h3>
                <ul className="space-y-3">
                  {topic.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-3 group cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
