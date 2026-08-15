import type { Metadata } from "next";

import { ProjectsGrid } from "@/components/sections/projects/projects-grid";

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

    path: "/projects",

    title: isArabic
      ? "المشاريع | React وNext.js وهندسة SaaS"
      : "Projects | React, Next.js & SaaS Engineering",

    description: isArabic
      ? "استكشف مشاريع واجهات أمامية مبنية باستخدام React وNext.js وTypeScript، تشمل منصات SaaS، لوحات تحكم مؤسسية، مواقع متعددة اللغات، وأنظمة مدعومة بالذكاء الاصطناعي."
      : "Explore frontend projects built with React, Next.js, and TypeScript, including SaaS platforms, enterprise dashboards, multilingual websites, and AI-powered systems.",
  });
}

export default function ProjectsPage() {
  return <ProjectsGrid />;
}