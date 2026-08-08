import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://codebyabdo.vercel.app";
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const viewport: Viewport = {
  themeColor: "#0B0F14",
  colorScheme: "dark",
};
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Abd El-Rahman Adel | Frontend Engineer",
    template: "%s | Abd El-Rahman Adel",
  },
  description:
    "Frontend Engineer specializing in React, Next.js, TypeScript, scalable SaaS applications, frontend architecture, and web performance.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "SaaS Applications",
    "Frontend Architecture",
    "Dashboard Systems",
    "Web Performance Optimization",
  ],
  authors: [{ name: "Abd El-Rahman Adel", url: SITE_URL }],
  creator: "Abd El-Rahman Adel",
  publisher: "Abd El-Rahman Adel",
  openGraph: {
    type: "website",
    siteName: "Abd El-Rahman Adel Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abd El-Rahman Adel Portfolio",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
