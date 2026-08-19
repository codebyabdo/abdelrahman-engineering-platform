import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://codebyabdo.vercel.app";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abd El-Rahman Adel | Frontend Engineer",
    short_name: "Abd El-Rahman Adel",

    description:
      "Abd El-Rahman Adel — Frontend Engineer specializing in React, Next.js, TypeScript, scalable SaaS applications, frontend architecture, and web performance.",

    start_url: `${SITE_URL}/en`,
    scope: "/",

    display: "standalone",

    background_color: "#0B0F14",
    theme_color: "#0B0F14",

    orientation: "portrait-primary",

    lang: "en",
    dir: "ltr",

    categories: [
      "developer",
      "portfolio",
      "business",
      "productivity",
    ],

    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}