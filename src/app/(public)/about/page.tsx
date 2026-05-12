import { AboutHero } from '@/components/sections/about/about-hero'
import { ExperienceTimeline } from '@/components/sections/about/experience-timeline'
import { SkillsSection } from '@/components/sections/about/skills-section'
import { ValuesSection } from '@/components/sections/about/values-section'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'About | Alex Chen',
  description: 'Frontend Engineer & Team Lead with 5+ years of experience building scalable SaaS systems.',
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
