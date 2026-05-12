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
  title: 'Alex Chen | Frontend Engineer & Team Lead',
  description: 'Mid-Level Frontend Engineer specializing in scalable SaaS systems, role-based architectures, and modern React ecosystems. Building products that scale.',
  keywords: ['Frontend Engineer', 'React', 'Next.js', 'TypeScript', 'Team Lead', 'SaaS', 'Web Development'],
  authors: [{ name: 'Alex Chen' }],
  openGraph: {
    title: 'Alex Chen | Frontend Engineer & Team Lead',
    description: 'Building scalable frontend systems and leading technical products.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Chen | Frontend Engineer & Team Lead',
    description: 'Building scalable frontend systems and leading technical products.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
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
