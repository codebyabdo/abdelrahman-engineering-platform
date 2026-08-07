import { BlogList } from '@/components/sections/blog/blog-list'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Frontend Systems & Architecture',
  description:
    'Deep technical articles on building scalable SaaS applications, frontend architecture patterns, React/Next.js performance optimization, and real-world engineering practices.',
}
export default function BlogPage() {
  return (
    <>
        <BlogList />
    </>
  )
}
