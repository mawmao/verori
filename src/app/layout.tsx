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
  title: {
    template: '%s | Verori',
    default: 'Verori | Client sign-off for solo consultants',
  },
  description: 'Verori is the minimal client-approval portal for solo consultants. Generate a secure link, track when it is viewed, and get timestamped sign-offs without forcing your clients to create an account.',
  keywords: ['client approval', 'freelance tools', 'client sign off', 'deliverable tracking', 'consultant software'],
  openGraph: {
    title: 'Verori | Client Sign-off for Solo Consultants',
    description: 'Generate a secure link. Get a timestamped record of when your client viewed and approved the work.',
    url: 'https://verori.app',
    siteName: 'Verori',
    images: [
      {
        url: 'https://verori.app/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Verori Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/icon0.svg" type="image/svg+xml" />
      <link rel="icon" href="/icon1.png" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 transition-colors font-sans texture-overlay">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
