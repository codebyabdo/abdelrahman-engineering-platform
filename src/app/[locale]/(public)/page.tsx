import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import {
  createMetadata,
  type Locale,
} from "@/lib/seo/metadata";

import {
  createPersonSchema,
  createWebsiteSchema,
  createJsonLdScript,
} from "@/lib/seo/structured-data";
import Home from "@/components/sections/home/home";

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

  const personSchema = createPersonSchema({
    locale,
  });

  const websiteSchema = createWebsiteSchema({
    locale,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLdScript(
          personSchema,
        )}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLdScript(
          websiteSchema,
        )}
      />

      <main>
        <Home/>
      </main>
    </>
  );
}