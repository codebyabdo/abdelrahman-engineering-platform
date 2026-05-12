'use client'

import Link from 'next/link'
import { ArrowRight, User  } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/animations/motion'

const socialLinks = [
  { icon: User, href: 'https://github.com', label: 'GitHub' },
  { icon: User, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: User, href: 'https://twitter.com', label: 'Twitter' },
]

export function AboutHero() {
  return (
    <section className="py-24 lg:py-32 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <FadeUp className="order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-secondary">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl font-heading font-bold text-primary/20">
                  AC
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Content */}
          <StaggerChildren className="order-1 lg:order-2 space-y-8">
            <StaggerItem>
              <p className="text-sm text-primary font-medium uppercase tracking-wider">About Me</p>
            </StaggerItem>

            <StaggerItem>
              <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-balance">
                Alex Chen
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-xl text-muted-foreground">
                Frontend Engineer & Team Lead
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a frontend engineer with 5+ years of experience building 
                  scalable web applications. Currently, I specialize in React ecosystems, 
                  SaaS architecture, and leading engineering teams.
                </p>
                <p>
                  My passion lies at the intersection of clean code and user experience. 
                  I believe that the best software is built when engineers deeply understand 
                  both the technical constraints and the user needs.
                </p>
                <p>
                  When I&apos;m not coding, I contribute to open-source projects, 
                  write about frontend development, and mentor aspiring developers.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="group">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                      aria-label={link.label}
                    >
                      <link.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
