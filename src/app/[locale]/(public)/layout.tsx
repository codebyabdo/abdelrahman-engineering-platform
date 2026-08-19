import type { Metadata, Viewport } from "next";

import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import {
  hasLocale,
  NextIntlClientProvider,
} from "next-intl";

import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import { AppShell } from "@/components/layout/app-shell";

import {
  SITE_URL,
  type Locale,
} from "@/lib/seo/metadata";

export const viewport: Viewport = {
  themeColor: "#0B0F14",
  colorScheme: "dark",

  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;

  const t = await getTranslations({
    locale: currentLocale,
    namespace: "metadata",
  });

  const canonical = `${SITE_URL}/${currentLocale}`;

  const englishUrl = `${SITE_URL}/en`;

  const arabicUrl = `${SITE_URL}/ar`;

  const isArabic = currentLocale === "ar";

  return {
    metadataBase: new URL(SITE_URL),

    title: {
      default: t("title.default"),
      template: t("title.template"),
    },

    description: t("description"),

    applicationName: t("siteName"),

    authors: [
      {
        name: t("author"),
        url: SITE_URL,
      },
    ],

    creator: t("author"),

    publisher: t("author"),

    category: "technology",

    classification: "Frontend Engineering Portfolio",

    referrer: "origin-when-cross-origin",

    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },

    alternates: {
      canonical,

      languages: {
        en: englishUrl,
        ar: arabicUrl,
        "x-default": englishUrl,
      },
    },

    openGraph: {
      type: "website",

      url: canonical,

      siteName: t("siteName"),

      title: t("title.default"),

      description: t("description"),

      locale: isArabic ? "ar_EG" : "en_US",

      alternateLocale: isArabic
        ? ["en_US"]
        : ["ar_EG"],

      images: [
        {
          url: "/logo.svg",
          width: 512,
          height: 512,
          alt: t("og.imageAlt"),
          type: "image/svg+xml",
        },
      ],
    },

    twitter: {
      card: "summary",

      title: t("title.default"),

      description: t("description"),

      images: ["/logo.svg"],
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    icons: {
      icon: [
        {
          url: "/icon.svg",
          type: "image/svg+xml",
        },

        {
          url: "/favicon.ico",
          sizes: "any",
        },
      ],

      apple: [
        {
          url: "/apple-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },

    manifest: "/manifest.webmanifest",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;

  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <AppShell>
        {children}
      </AppShell>
    </NextIntlClientProvider>
  );
}