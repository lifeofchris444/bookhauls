import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bookhauls.com"),
  title: "Barnes & Noble Discounts They Don't Advertise",
  description:
    "Discover how readers are unlocking hidden discount codes on books, journals, games, music, and more.",
  applicationName: "BookHauls",
  keywords: [
    "Barnes & Noble discounts",
    "Barnes & Noble coupon codes",
    "Barnes & Noble promo code",
    "book discounts",
    "cheap books online",
    "Nook e-reader deals",
    "bookish gifts",
    "BookTok reads",
  ],
  authors: [{ name: "BookHauls", url: "https://www.bookhauls.com" }],
  creator: "BookHauls",
  publisher: "BookHauls",
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.bookhauls.com",
    title: "Barnes & Noble Discounts They Don't Advertise",
    description:
      "Discover how readers are unlocking hidden discount codes on books, journals, games, music, and more.",
    siteName: "BookHauls",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barnes & Noble discounts for books, journals, games, and music",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barnes & Noble Discounts They Don't Advertise",
    description:
      "Discover how readers are unlocking hidden discount codes on books, journals, games, music, and more.",
    images: ["/og-image.png"],
  },
  other: {
    "apple-mobile-web-app-title": "BookHauls",
  },
}

export const viewport: Viewport = {
  themeColor: "#1E5E3E",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
