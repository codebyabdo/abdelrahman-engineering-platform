import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { blogPosts, getBlogPostBySlug } from '@/lib/constants/blog-data'
import { BlogContent } from '@/components/sections/blog/blog-content'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Alex Chen`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <main className="pt-16">
        <article className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            {/* Back Link */}
            <div className="mb-12">
              <Button asChild variant="ghost" size="sm" className="group">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            {/* Header */}
            <header className="mb-12 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="border-primary/30 text-primary">
                  {post.category}
                </Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
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

              <h1 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-balance">
                {post.title}
              </h1>

              <p className="text-lg text-muted-foreground text-pretty">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-secondary/50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            {/* Content */}
            <BlogContent content={post.content} />

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-border/50">
              <div className="flex justify-between items-center">
                <Button asChild variant="outline" className="group">
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                  </Link>
                </Button>
              </div>
            </footer>
          </div>
        </article>
      </main>
    </>
  )
}
