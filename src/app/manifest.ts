import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://codebyabdo.me";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abd El-Rahman Adel | Frontend Engineer",

    short_name: "Abd El-Rahman",

    description:
      "Portfolio of Abd El-Rahman Adel, a Frontend Engineer specializing in React.js, Next.js, TypeScript, frontend architecture, SaaS applications, and modern web experiences.",

    start_url: `${SITE_URL}/en`,
    scope: `${SITE_URL}/`,

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
    ],
  };
}