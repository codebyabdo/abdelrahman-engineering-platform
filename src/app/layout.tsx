import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Inter } from 'next/font/google'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const viewport: Viewport = {
  themeColor: '#0B0F14',
  colorScheme: 'dark',
}


export const metadata: Metadata = {
  title: 'Abd El-Rhman Adel | Frontend Engineer (React & Next.js)',
  
  description:
    'Frontend Engineer with 2.5+ years of experience building scalable SaaS applications, role-based systems, and production-grade React/Next.js architectures. Specialized in performance optimization, dashboards, and enterprise-level frontend systems.',

  keywords: [
    'Frontend Engineer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'SaaS Applications',
    'Frontend Architecture',
    'Dashboard Systems',
    'Web Performance Optimization',
  ],

  authors: [{ name: 'Abd El-Rhman Adel' }],

  openGraph: {
    title: 'Abd El-Rhman Adel | Frontend Engineer',
    description:
      'Building scalable SaaS platforms, dashboards, and production-grade frontend systems using React & Next.js.',
    type: 'website',
    url: 'https://codebyabdo.vercel.app',
    siteName: 'Abd El-Rhman Adel Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abd El-Rhman Adel Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Abd El-Rhman Adel | Frontend Engineer',
    description:
      'Frontend Engineer specializing in scalable SaaS systems and modern React architectures.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: [
      {
        url: '/icon.svg.png',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${geist.variable} ${geistMono.variable} ${inter.variable}`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
