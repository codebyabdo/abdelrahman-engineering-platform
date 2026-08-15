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
      ? "استكشف منهجية عبد الرحمن عادل في هندسة الواجهات الأمامية، وبناء أنظمة React وNext.js القابلة للتوسع، والمكونات القابلة لإعادة الاستخدام، وإدارة الحالة، وتكامل APIs والأداء."
      : "Explore Abd El-Rahman Adel's approach to frontend architecture, scalable React and Next.js applications, reusable component systems, state management, API integration, and web performance.",
  });
}

export default function ArchitecturePage() {
  return <ArchitectureSection />;
}