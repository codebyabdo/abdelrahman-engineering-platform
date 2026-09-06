import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import "./globals.css";

import { SITE_NAME, SITE_URL } from "@/lib/seo/metadata";
import { IntroLoader } from "@/components/layout/intro-loader";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F14",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | Frontend Engineer`,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Abd El-Rahman Adel is a Frontend Engineer specializing in React.js, Next.js, TypeScript, frontend architecture, SaaS applications, dashboards, and modern web experiences.",

  applicationName: SITE_NAME,

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,

  category: "technology",

  classification: "Frontend Engineering Portfolio",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  keywords: [
    "Abd El-Rahman Adel",
    "Abdelrahman Adel",
    "Abd El Rahman Adel",
    "Abdelrahman Adel Portfolio",
    "codebyabdo",
    "code by abdo",
    "Frontend Engineer",
    "Frontend Developer",
    "React Developer",
    "React.js Developer",
    "Next.js Developer",
    "Next.js Engineer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Architecture",
    "SaaS Development",
    "React SaaS",
    "Next.js SaaS",
    "Dashboard Development",
    "Web Application Development",
  ],

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Frontend Engineer`,
    description:
      "Frontend Engineer specializing in React.js, Next.js, TypeScript, frontend architecture, SaaS applications, dashboards, and modern web experiences.",
    url: SITE_URL,

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Frontend Engineer`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Frontend Engineer`,
    description:
      "Frontend Engineer specializing in React.js, Next.js, TypeScript, frontend architecture, SaaS applications, and modern web experiences.",
    images: ["/og-image.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-9999 rounded-md bg-black px-4 py-2 text-white"
        >
          Skip to content
        </a>

        <IntroLoader />

        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}