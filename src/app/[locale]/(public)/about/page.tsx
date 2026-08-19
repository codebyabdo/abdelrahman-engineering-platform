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
      ? "تعرف على عبد الرحمن عادل، مهندس واجهات أمامية متخصص في React وNext.js وTypeScript، مع خبرة عملية في بناء منصات SaaS وأنظمة الأعمال ولوحات التحكم وتطبيقات الويب القابلة للتوسع."
      : "Learn more about Abd El-Rahman Adel, a Front-End Engineer specializing in React, Next.js, and TypeScript, with hands-on experience building SaaS platforms, business systems, dashboards, and scalable web applications.",

    type: "profile",

    imageAlt: isArabic
      ? "عبد الرحمن عادل — مهندس واجهات أمامية"
      : "Abd El-Rahman Adel — Front-End Engineer",
  });
}

export default function AboutPage() {
  return <AboutSection />;
}