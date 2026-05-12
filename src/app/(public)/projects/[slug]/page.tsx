import { ProjectArchitecture } from '@/components/sections/projects/project-architecture'
import { ProjectHero } from '@/components/sections/projects/project-hero'
import { ProjectNavigation } from '@/components/sections/projects/project-navigation'
import { ProjectOverview } from '@/components/sections/projects/project-overview'
import { ProjectResults } from '@/components/sections/projects/project-results'
import { ProjectTechStack } from '@/components/sections/projects/project-tech-stack'
import { ProjectWorkflow } from '@/components/sections/projects/project-workflow'
import { getProjectBySlug, projects } from '@/lib/constants/projects-data'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Alex Chen`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <>
        <ProjectHero project={project} />
        <ProjectOverview project={project} />
        <ProjectArchitecture project={project} />
        <ProjectWorkflow project={project} />
        <ProjectTechStack project={project} />
        <ProjectResults project={project} />
        <ProjectNavigation currentSlug={slug} />
    </>
  )
}
