import { ProjectsGrid } from '@/components/sections/projects/projects-grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | SaaS & Frontend Systems Engineering',
  description:
    'A collection of production-grade frontend projects including multi-tenant SaaS applications, enterprise dashboards, and scalable UI architectures built with React and Next.js.',
}

export default function ProjectsPage() {
  return (
    <>
        <ProjectsGrid />
    </>
  )
}
