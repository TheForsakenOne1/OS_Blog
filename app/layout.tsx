import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OS Interview Prep - Master Operating Systems',
  description: 'Comprehensive guides covering everything from processes and threads to memory management and file systems. Learn the concepts that matter for your next technical interview.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
