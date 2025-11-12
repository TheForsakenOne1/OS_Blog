import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'OS Interview Prep - Master Operating Systems',
  description: 'Comprehensive guides covering everything from processes and threads to memory management and file systems. Learn the concepts that matter for your next technical interview.',
  keywords: ['operating systems', 'OS interview', 'computer science', 'system design', 'processes', 'threads', 'memory management'],
  authors: [{ name: 'OS Interview Prep' }],
  openGraph: {
    title: 'OS Interview Prep - Master Operating Systems',
    description: 'Comprehensive guides for operating systems interview preparation',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OS Interview Prep',
    description: 'Master operating systems concepts for technical interviews',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#FF385C" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
