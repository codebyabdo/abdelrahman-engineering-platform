import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://codebyabdo.me";

export const SITE_NAME = "Abd El-Rahman Adel Portfolio";

export const SITE_AUTHOR = "Abd El-Rahman Adel";

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

function normalizePath(path: string = ""): string {
  if (!path || path === "/") {
    return "";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

export function getLocalizedUrl(
  locale: Locale,
  path: string = "",
): string {
  const normalizedPath = normalizePath(path);

  return `${SITE_URL}/${locale}${normalizedPath}`;
}

function resolveImageUrl(image: string): string {
  if (/^https?:\/\//i.test(image)) {
    return image;
  }

  const normalizedImage = image.startsWith("/")
    ? image
    : `/${image}`;

  return `${SITE_URL}${normalizedImage}`;
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

  const resolvedImage = resolveImageUrl(image);

  const resolvedImageAlt =
    imageAlt ?? `${title} — ${SITE_AUTHOR}`;

  const robots = noIndex
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
          "max-image-preview": "large" as const,
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      };

  return {
    metadataBase: new URL(SITE_URL),

    title,

    description,

    authors: [
      {
        name: SITE_AUTHOR,
        url: SITE_URL,
      },
    ],

    creator: SITE_AUTHOR,

    publisher: SITE_AUTHOR,

    alternates: {
      canonical,

      languages: {
        en: englishUrl,
        ar: arabicUrl,
        "x-default": englishUrl,
      },
    },

    robots,

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