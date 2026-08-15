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

      locale:
        currentLocale === "ar"
          ? "ar_EG"
          : "en_US",

      alternateLocale:
        currentLocale === "ar"
          ? ["en_US"]
          : ["ar_EG"],

      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t("og.imageAlt"),
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: t("title.default"),

      description: t("description"),

      images: ["/og-image.png"],
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
          url: "/icon-light-32x32.png",
          media:
            "(prefers-color-scheme: light)",
        },

        {
          url: "/icon-dark-32x32.png",
          media:
            "(prefers-color-scheme: dark)",
        },
      ],

      apple: "/apple-icon.png",
    },
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
    <NextIntlClientProvider
      messages={messages}
    >
      <AppShell>
        {children}
      </AppShell>
    </NextIntlClientProvider>
  );
}