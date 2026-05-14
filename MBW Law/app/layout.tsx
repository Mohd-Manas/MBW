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
  title: 'Optimas Legal Partners',
  description: 'Your trusted legal firm',
  verification: {
    google: 'gSoX0I1zy5iK38ODX1OTQw25MhRV9jdnwJ9QMewR4vw',
  },
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
