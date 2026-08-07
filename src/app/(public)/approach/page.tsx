import { Metadata } from 'next'

import { ApproachHero } from '@/components/sections/approach/approach-hero'
import { ArchitectureSection } from '@/components/sections/approach/architecture-section'
import { DataFetchingSection } from '@/components/sections/approach/data-fetching-section'
import { PerformanceSection } from '@/components/sections/approach/performance-section'
import { SystemDesignSection } from '@/components/sections/approach/system-design-section'
import { TeamWorkflowSection } from '@/components/sections/approach/team-workflow-section'

export const metadata: Metadata = {
  title: 'Engineering Approach | Frontend Systems Design',
  description:
    'How I design scalable SaaS frontend architectures, optimize performance, structure large React/Next.js codebases, and collaborate on production-grade systems.',
}

export default function ApproachPage() {
  return (
    <>
      <main className="pt-16">
        <ApproachHero />
        <ArchitectureSection />
        <SystemDesignSection />
        <DataFetchingSection />
        <PerformanceSection />
        <TeamWorkflowSection />
      </main>
    </>
  )
}
