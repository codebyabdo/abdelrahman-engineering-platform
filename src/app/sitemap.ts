import type { MetadataRoute } from "next";

import { PROJECTS } from "@/lib/constants/featured-projects-data";
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
  const staticPages: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    STATIC_ROUTES.map((path) => {
      const url =
        path === ""
          ? `${SITE_URL}/${locale}`
          : `${SITE_URL}/${locale}${path}`;

      return {
        url,
        lastModified: new Date(),
        changeFrequency:
          path === "/blog" || path === "/projects"
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

  const projectPages: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    PROJECTS.map((project) => ({
      url: `${SITE_URL}/${locale}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: project.featured ? 0.8 : 0.6,
    })),
  );

  return [...staticPages, ...projectPages];
}