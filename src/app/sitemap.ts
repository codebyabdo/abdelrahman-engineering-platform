import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo/metadata";

const LOCALES = ["en", "ar"] as const;

const STATIC_ROUTES = [
  "",
  "/about",
  "/architecture",
  "/blog",
  "/projects",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) =>
    STATIC_ROUTES.map((path) => {
      const url =
        path === ""
          ? `${SITE_URL}/${locale}`
          : `${SITE_URL}/${locale}${path}`;

      return {
        url,

        changeFrequency:
          path === "/blog" ||
          path === "/projects"
            ? "weekly"
            : "monthly",

        priority:
          path === ""
            ? 1
            : path === "/projects"
              ? 0.9
              : path === "/contact"
                ? 0.8
                : 0.7,
      };
    }),
  );
}