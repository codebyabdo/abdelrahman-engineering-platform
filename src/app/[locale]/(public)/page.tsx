import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import Home from "@/components/sections/home/home";

import {
  createMetadata,
  type Locale,
} from "@/lib/seo/metadata";

import {
  createJsonLdScript,
  createSiteGraph,
} from "@/lib/seo/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: Locale;
  }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "metadata",
  });

  return createMetadata({
    locale,

    path: "",

    title: t("title.default"),

    description: t("description"),

    image: "/og-image.png",

    imageAlt: t("og.imageAlt"),

    type: "profile",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{
    locale: Locale;
  }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "metadata",
  });

  const siteGraph = createSiteGraph({
    locale,

    path: "",

    title: t("title.default"),

    description: t("description"),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLdScript(
          siteGraph,
        )}
      />

      <Home />
    </>
  );
}