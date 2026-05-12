'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FadeUp, StaggerChildren, StaggerItem, HoverCard } from '@/components/animations/motion'
import { cn } from '@/lib/utils'
import { blogCategories, blogPosts } from '@/lib/constants/blog-data'

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <FadeUp className="max-w-2xl mb-16 space-y-6">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">Blog</p>
          <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-balance">
            Thoughts & Articles
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Writing about frontend engineering, architecture decisions, 
            and lessons learned from building products.
          </p>
        </FadeUp>

        {/* Category Filter */}
        <FadeUp delay={0.1} className="flex flex-wrap gap-2 mb-12">
          {blogCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={cn(
                'transition-all',
                activeCategory === category 
                  ? '' 
                  : 'border-border/50 hover:border-primary/50'
              )}
            >
              {category}
            </Button>
          ))}
        </FadeUp>

        {/* Blog Posts */}
        <StaggerChildren className="space-y-6">
          {filteredPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <HoverCard>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article className="p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {post.category}
                      </Badge>
                      {post.featured && (
                        <Badge className="bg-primary/90 text-primary-foreground">Featured</Badge>
                      )}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground ml-auto">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readingTime}
                        </span>
                      </div>
                    </div>

                    <h2 className="font-heading font-semibold text-xl lg:text-2xl mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-secondary/50 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="flex items-center gap-2 text-primary font-medium text-sm">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
