import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Barnes & Noble Discounts They Don't Advertise",
  description: "Discover how readers are unlocking hidden discount codes on books, e-readers, gifts, and everyday reads. Complete simple steps and claim your summer discount code today.",
  generator: "v0.app",
  openGraph: {
    type: "website",
    title: "Barnes & Noble Discounts They Don't Advertise",
    description: "Unlock hidden Barnes & Noble discount codes with a simple process. Claim your summer discount code today.",
    siteName: "Barnes & Noble Discounts",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barnes & Noble Discounts They Don't Advertise",
    description: "Unlock hidden Barnes & Noble discount codes with a simple process. Claim your summer discount code today.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
