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
      : "Blog | Frontend Engineering & Web Development",

    description: isArabic
      ? "مقالات وملاحظات تقنية حول React وNext.js وTypeScript وهندسة الواجهات الأمامية وتطبيقات SaaS ولوحات التحكم وتكامل APIs وتحسين الأداء."
      : "Technical articles and engineering notes about React, Next.js, TypeScript, frontend architecture, SaaS applications, dashboards, API integration, and frontend performance.",

    type: "website",

    imageAlt: isArabic
      ? "مدونة عبد الرحمن عادل — هندسة الواجهات الأمامية"
      : "Abd El-Rahman Adel Blog — Frontend Engineering",
  });
}

export default function BlogPage() {
  return <BlogSection />;
}