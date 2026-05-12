import { BlogList } from '@/components/sections/blog/blog-list'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Alex Chen',
  description: 'Technical articles about frontend engineering, React architecture, and team leadership.',
}

export default function BlogPage() {
  return (
    <>
        <BlogList />
    </>
  )
}
