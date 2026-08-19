import type { Metadata, Viewport } from "next";

import {
  Geist,
  Geist_Mono,
  Inter,
} from "next/font/google";

import "./globals.css";

import {
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo/metadata";

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
  themeColor: "#0B0F14",
  colorScheme: "dark",

  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Abd El-Rahman Adel | Frontend Engineer",
    template: "%s | Abd El-Rahman Adel",
  },

  description:
    "Abd El-Rahman Adel is a Frontend Engineer specializing in React, Next.js, TypeScript, scalable SaaS applications, frontend architecture, and web performance.",

  applicationName: SITE_NAME,

  authors: [
    {
      name: "Abd El-Rahman Adel",
      url: SITE_URL,
    },
  ],

  creator: "Abd El-Rahman Adel",

  publisher: "Abd El-Rahman Adel",

  category: "technology",

  classification: "Frontend Engineering Portfolio",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
        {children}
      </body>
    </html>
  );
}