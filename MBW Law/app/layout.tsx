import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Optimas Legal Partners | Strategic Legal Advisory',
  description: 'Boutique legal excellence across the UAE and international markets. Strategic Legal Advisory, Corporate Structuring, and Dispute Resolution.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/OptimasLegal-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/OptimasLegal-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
