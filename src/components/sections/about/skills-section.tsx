'use client'

import { Badge } from '@/components/ui/badge'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/animations/motion'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Vercel', 'Docker', 'AWS', 'Figma', 'Linear'],
  },
  {
    title: 'Practices',
    skills: ['Agile/Scrum', 'TDD', 'CI/CD', 'Code Review', 'Documentation'],
  },
  {
    title: 'Soft Skills',
    skills: ['Team Leadership', 'Mentoring', 'Communication', 'Problem Solving', 'Project Management'],
  },
]

export function SkillsSection() {
  return (
    <section className="py-24 lg:py-32 border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl mb-16 space-y-4">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">Expertise</p>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </FadeUp>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <StaggerItem key={index}>
              <div className="space-y-4">
                <h3 className="font-heading font-medium text-sm text-primary uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-background border border-border/50 hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
