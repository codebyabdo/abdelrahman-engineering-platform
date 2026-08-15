import type { Metadata } from "next";

import AboutSection from "@/components/sections/about/about-section";

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

    path: "/about",

    title: isArabic
      ? "من أنا | عبد الرحمن عادل"
      : "About | Abd El-Rahman Adel",

    description: isArabic
      ? "تعرف على عبد الرحمن عادل، مهندس واجهات أمامية متخصص في React وNext.js وTypeScript وهندسة الواجهات وبناء تطبيقات الويب القابلة للتوسع."
      : "Learn more about Abd El-Rahman Adel, a Frontend Engineer specializing in React, Next.js, TypeScript, frontend architecture, scalable web applications, and modern user experiences.",

    type: "profile",

    imageAlt: isArabic
      ? "عبد الرحمن عادل — مهندس واجهات أمامية"
      : "Abd El-Rahman Adel — Frontend Engineer",
  });
}

export default function AboutPage() {
  return <AboutSection />;
}