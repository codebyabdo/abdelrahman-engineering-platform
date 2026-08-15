import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://codebyabdo.vercel.app";

export const SITE_NAME = "Abd El-Rahman Adel Portfolio";

export const DEFAULT_OG_IMAGE = "/og-image.png";

export type Locale = "en" | "ar";

interface CreateMetadataOptions {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "profile" | "article";
  noIndex?: boolean;
}

export function getLocalizedUrl(
  locale: Locale,
  path: string = "",
): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${SITE_URL}/${locale}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function createMetadata({
  locale,
  title,
  description,
  path = "",
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  type = "website",
  noIndex = false,
}: CreateMetadataOptions): Metadata {
  const canonical = getLocalizedUrl(locale, path);

  const englishUrl = getLocalizedUrl("en", path);
  const arabicUrl = getLocalizedUrl("ar", path);

  const resolvedImage = image.startsWith("http")
    ? image
    : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;

  const resolvedImageAlt =
    imageAlt ?? `${title} — Abd El-Rahman Adel`;

  return {
    metadataBase: new URL(SITE_URL),

    title,

    description,

    authors: [
      {
        name: "Abd El-Rahman Adel",
        url: SITE_URL,
      },
    ],

    creator: "Abd El-Rahman Adel",

    publisher: "Abd El-Rahman Adel",

    alternates: {
      canonical,

      languages: {
        en: englishUrl,
        ar: arabicUrl,
        "x-default": englishUrl,
      },
    },

    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
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

    openGraph: {
      type,
      url: canonical,
      siteName: SITE_NAME,

      title,
      description,

      locale: locale === "ar" ? "ar_EG" : "en_US",

      alternateLocale:
        locale === "ar"
          ? ["en_US"]
          : ["ar_EG"],

      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: resolvedImageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,
      description,

      images: [
        {
          url: resolvedImage,
          alt: resolvedImageAlt,
        },
      ],
    },

    icons: {
      icon: [
        {
          url: "/icon.svg",
          type: "image/svg+xml",
        },
        {
          url: "/icon-light-32x32.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/icon-dark-32x32.png",
          media: "(prefers-color-scheme: dark)",
        },
      ],

      apple: "/apple-icon.png",
    },
  };
}