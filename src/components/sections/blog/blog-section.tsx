'use client'

import { BookOpen} from 'lucide-react'

import { MainHeader } from '@/components/shared/main-header'
import { BlogList } from './blog-list';


const header = {
  title: "Technical Writing & Thought Leadership",
  description:
    "Deep architectural analyses, performance benchmark breakdowns, and lessons learned building high-scale web platforms.",
  subtitle: "ARTICLES & RESEARCH",
  highligh: "Engineering Articles & Research",
  icon: BookOpen,
};

export function BlogSection() {


  return (
    <div className="space-y-12 pb-16 pt-24 sm:pt-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <MainHeader header={header}/>
        <BlogList/>
      </div>
  )
}
