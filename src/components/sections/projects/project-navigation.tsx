'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeUp } from '@/components/animations/motion'
import { projects } from '@/lib/constants/projects-data'

interface ProjectNavigationProps {
  currentSlug: string
}

export function ProjectNavigation({ currentSlug }: ProjectNavigationProps) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <section className="py-16 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="flex flex-col sm:flex-row justify-between gap-4">
          {prevProject ? (
            <Button asChild variant="outline" size="lg" className="group justify-start">
              <Link href={`/projects/${prevProject.slug}`}>
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <span className="text-xs text-muted-foreground block">Previous</span>
                  <span className="font-medium">{prevProject.title}</span>
                </div>
              </Link>
            </Button>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Button asChild variant="outline" size="lg" className="group justify-end">
              <Link href={`/projects/${nextProject.slug}`}>
                <div className="text-right">
                  <span className="text-xs text-muted-foreground block">Next</span>
                  <span className="font-medium">{nextProject.title}</span>
                </div>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          ) : (
            <div />
          )}
        </FadeUp>
      </div>
    </section>
  )
}
