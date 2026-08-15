import type { Metadata } from "next";

import { BlogSection } from "@/components/sections/blog/blog-section";

import {
  createMetadata,
  type Locale,
} from "@/lib/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: Locale;
  }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isArabic = locale === "ar";

  return createMetadata({
    locale,

    path: "/blog",

    title: isArabic
      ? "المدونة | هندسة الواجهات وتطوير الويب"
      : "Blog | Frontend Engineering & Architecture",

    description: isArabic
      ? "مقالات تقنية حول React وNext.js وTypeScript وهندسة الواجهات الأمامية وتطبيقات SaaS وتحسين الأداء وتكامل APIs وممارسات تطوير البرمجيات."
      : "Technical articles and engineering insights about React, Next.js, TypeScript, frontend architecture, SaaS applications, API integration, performance optimization, and real-world frontend development.",
  });
}

export default function BlogPage() {
  return <BlogSection />;
}