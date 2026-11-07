import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verori | Client sign-off for solo consultants",
  description: "A client-approval portal that tracks every deliverable through timestamped records of when it was sent, viewed, approved, or left unanswered.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 transition-colors font-sans
        bg-[radial-gradient(rgba(212,212,216,0.6)_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(rgba(63,63,70,0.3)_1px,transparent_1px)]
      ">
        {children}
      </body>
    </html>
  );
}
