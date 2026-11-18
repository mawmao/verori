import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://verori.app"),
  title: {
    template: '%s | Verori',
    default: 'Verori | Timestamped proof of delivery for freelancers',
  },
  description: 'Get timestamped proof of delivery for freelancers. Send the link, track when clients view it, and get an immutable approval record. No client login needed.',
  keywords: ['client approval', 'freelance tools', 'client sign off', 'deliverable tracking', 'consultant software', 'timestamped proof of delivery'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    }
  },
  openGraph: {
    title: 'Verori | Timestamped proof of delivery for freelancers',
    description: 'Timestamped proof of delivery for freelancers. Send one secure link and get an immutable record of when your client viewed and approved the work.',
    url: 'https://verori.app',
    siteName: 'Verori',
    images: [{ url: '/og-image.jpeg', width: 1200, height: 630, alt: 'Verori Dashboard' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Verori | Timestamped proof of delivery for freelancers",
    description: "Proof of who approved what, and when.",
    images: ["/og-image.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 transition-colors font-sans texture-overlay">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
