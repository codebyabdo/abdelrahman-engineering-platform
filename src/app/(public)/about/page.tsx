import { AboutHero } from '@/components/sections/about/about-hero'
import { ExperienceTimeline } from '@/components/sections/about/experience-timeline'
import { SkillsSection } from '@/components/sections/about/skills-section'
import { ValuesSection } from '@/components/sections/about/values-section'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'About | Frontend Engineer (React & Next.js)',
  description:
    'Frontend Engineer with 2.5+ years of experience specializing in SaaS platforms, scalable frontend architectures, dashboards, and performance optimization using React and Next.js.',
}

export default function AboutPage() {
  return (
    <>
      <main className="pt-16">
        <AboutHero />
        <ExperienceTimeline />
        <SkillsSection />
        <ValuesSection />
      </main>
    </>
  )
}
