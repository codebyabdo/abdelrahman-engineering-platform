import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact/contact-section";

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

    path: "/contact",

    title: isArabic
      ? "تواصل معي | عبد الرحمن عادل"
      : "Contact | Abd El-Rahman Adel",

    description: isArabic
      ? "تواصل مع عبد الرحمن عادل بشأن فرص العمل في هندسة الواجهات الأمامية، مشاريع React وNext.js، تطبيقات SaaS، والمشاريع الحرة."
      : "Contact Abd El-Rahman Adel for frontend engineering opportunities, React and Next.js development, SaaS applications, frontend architecture, and freelance projects.",
  });
}

export default function ContactPage() {
  return <ContactSection />;
}