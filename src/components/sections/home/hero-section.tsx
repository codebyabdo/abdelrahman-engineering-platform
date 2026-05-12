'use client'

import Link from 'next/link'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeUp, StaggerChildren, StaggerItem, motion } from '@/components/animations/motion'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          <StaggerChildren className="space-y-8">
            {/* Tag */}
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for new opportunities</span>
              </div>
            </StaggerItem>

            {/* Main heading */}
            <StaggerItem>
              <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight text-balance">
                I build{' '}
                <span className="text-primary">scalable frontend systems</span>
                {' '}and lead technical products
              </h1>
            </StaggerItem>

            {/* Subtitle */}
            <StaggerItem>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                Frontend Engineer & Team Lead specializing in SaaS architecture, 
                role-based systems, and modern React ecosystems. Turning complex 
                problems into elegant, maintainable solutions.
              </p>
            </StaggerItem>

            {/* CTA Buttons */}
            <StaggerItem>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="group">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>

        {/* Scroll indicator */}
        <FadeUp delay={1} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </FadeUp>
      </div>
    </section>
  )
}
