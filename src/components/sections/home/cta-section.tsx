'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeUp } from '../../animations/motion'

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-card to-card border border-border/50 p-8 sm:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
          
          <div className="relative max-w-2xl space-y-6">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-balance">
              Let&apos;s build something{' '}
              <span className="text-primary">exceptional</span> together
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Whether you need a scalable frontend architecture, team leadership, 
              or a complete product build — I&apos;m here to help turn your vision into reality.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Learn More About Me
                </Link>
              </Button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
