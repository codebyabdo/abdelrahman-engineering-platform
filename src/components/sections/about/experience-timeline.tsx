'use client'

import { FadeUp, StaggerChildren, StaggerItem, motion } from '@/components/animations/motion'

const experiences = [
  {
    period: '2023 - Present',
    title: 'Senior Frontend Engineer & Team Lead',
    company: 'TechCorp Inc.',
    description: 'Leading a team of 8 engineers building enterprise SaaS products. Architecting frontend systems, establishing best practices, and mentoring junior developers.',
    highlights: [
      'Increased team velocity by 40% through process improvements',
      'Led migration from legacy codebase to Next.js 14',
      'Implemented design system used across 5 products',
    ],
  },
  {
    period: '2021 - 2023',
    title: 'Frontend Engineer',
    company: 'StartupXYZ',
    description: 'Built and maintained core product features for a B2B SaaS platform. Focused on performance optimization and accessibility improvements.',
    highlights: [
      'Reduced bundle size by 60% through code splitting',
      'Achieved 98+ Lighthouse scores across all pages',
      'Implemented real-time collaboration features',
    ],
  },
  {
    period: '2019 - 2021',
    title: 'Junior Frontend Developer',
    company: 'WebAgency',
    description: 'Developed responsive websites and web applications for various clients. Gained experience with React, TypeScript, and modern CSS.',
    highlights: [
      'Delivered 20+ client projects on time and budget',
      'Introduced component-based architecture',
      'Created reusable UI component library',
    ],
  },
]

export function ExperienceTimeline() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl mb-16 space-y-4">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">Career</p>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl">
            Experience
          </h2>
          <p className="text-muted-foreground">
            A journey through my professional career in frontend engineering.
          </p>
        </FadeUp>

        <StaggerChildren className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-px bg-border/50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <div className="relative flex gap-8 lg:gap-12">
                  {/* Dot */}
                  <motion.div 
                    className="absolute left-4 lg:left-8 w-3 h-3 rounded-full bg-primary -translate-x-1.5 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  />

                  {/* Content */}
                  <div className="ml-12 lg:ml-20 flex-1">
                    <div className="p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="text-sm text-primary font-medium">
                          {exp.period}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {exp.company}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-xl mb-3">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}
