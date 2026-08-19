import type { Metadata } from "next";

import ArchitectureSection from "@/components/sections/architecture/architecture-section";

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
    path: "/architecture",

    title: isArabic
      ? "هندسة الواجهات الأمامية | عبد الرحمن عادل"
      : "Frontend Architecture | Abd El-Rahman Adel",

    description: isArabic
      ? "استكشف منهجية عبد الرحمن عادل في بناء تطبيقات React وNext.js القابلة للتوسع، وتنظيم المشاريع، والمكونات القابلة لإعادة الاستخدام، وإدارة حالة الخادم، وتكامل REST APIs، وتحسين الأداء."
      : "Explore Abd El-Rahman Adel's approach to scalable React and Next.js applications, feature-based architecture, reusable components, server-state management, REST API integration, authentication, and web performance.",
  });
}

export default function ArchitecturePage() {
  return <ArchitectureSection />;
}