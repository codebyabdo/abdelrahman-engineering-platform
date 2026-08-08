import type { Viewport } from "next";

import { getMessages, setRequestLocale } from "next-intl/server";

import { hasLocale, NextIntlClientProvider } from "next-intl";

import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import { AppShell } from "@/components/layout/app-shell";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://codebyabdo.vercel.app";

export const viewport: Viewport = {
  themeColor: "#0B0F14",
  colorScheme: "dark",
};

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ locale: string }>;
// }): Promise<Metadata> {
//   const { locale } = await params;

//   const t = await getTranslations({
//     locale,
//     namespace: "metadata",
//   });

//   return {
//     title: {
//       default: t("title.default"),
//       template: t("title.template"),
//     },

//     description: t("description"),

//     alternates: {
//       canonical: `${SITE_URL}/${locale}`,

//       languages: {
//         en: `${SITE_URL}/en`,
//         ar: `${SITE_URL}/ar`,
//       },
//     },

//     openGraph: {
//       type: "website",
//       url: `${SITE_URL}/${locale}`,
//       title: t("title.default"),
//       description: t("description"),
//       siteName: t("siteName"),
//       locale: locale === "ar" ? "ar_EG" : "en_US",

//       images: [
//         {
//           url: "/og-image.png",
//           width: 1200,
//           height: 630,
//           alt: "Abd El-Rahman Adel Portfolio",
//         },
//       ],
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: t("title.default"),
//       description: t("description"),
//       images: ["/og-image.png"],
//     },
//   };
// }

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <AppShell>{children}</AppShell>
    </NextIntlClientProvider>
  );
}
