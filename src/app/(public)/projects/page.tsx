import { ProjectsGrid } from '@/components/sections/projects/projects-grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Alex Chen',
  description: 'Explore my portfolio of frontend engineering projects, from enterprise dashboards to design systems.',
}

export default function ProjectsPage() {
  return (
    <>
        <ProjectsGrid />
    </>
  )
}
