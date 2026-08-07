'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { FadeUp } from '@/components/animations/motion'
import { projects } from '@/lib/constants/projects-data'

interface ProjectNavigationProps {
  currentSlug: string
}

export function ProjectNavigation({ currentSlug }: ProjectNavigationProps) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug)

  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : null

  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null

  return (
    <section className="py-16 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <FadeUp className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Previous */}
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="
                group flex items-center gap-4
                p-5 rounded-xl border border-border/50
                bg-card/40 hover:bg-card/70
                hover:border-primary/30
                transition-all duration-300
              "
            >
              <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:-translate-x-1 transition-transform" />

              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">
                  Previous Project
                </span>
                <span className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors">
                  {prevProject.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {/* Next */}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="
                group flex items-center justify-end gap-4
                p-5 rounded-xl border border-border/50
                bg-card/40 hover:bg-card/70
                hover:border-primary/30
                transition-all duration-300
                text-right sm:text-left sm:justify-end
              "
            >
              <div className="flex flex-col items-end sm:items-end">
                <span className="text-xs text-muted-foreground">
                  Next Project
                </span>
                <span className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors">
                  {nextProject.title}
                </span>
              </div>

              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}

        </FadeUp>
      </div>
    </section>
  )
}