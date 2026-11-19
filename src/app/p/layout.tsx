import React from "react"
import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"

export default function ClientPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="texture-overlay relative isolate min-h-dvh lg:h-dvh lg:overflow-hidden flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 transition-colors antialiased">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0 text-zinc-900/5 dark:text-zinc-50/4"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            backgroundPosition: "center top",
            maskImage: "radial-gradient(ellipse 85% 55% at 50% 0%, #000 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 85% 55% at 50% 0%, #000 20%, transparent 100%)",
          }}
        />
      </div>

      <header className="shrink-0 border-b border-dashed border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-13 w-full max-w-3xl items-center justify-center px-4 sm:px-6">
          <BrandLogo href="/" className="h-5 opacity-90 hover:opacity-100 transition-opacity" />
        </div>
      </header>

      <main className="flex-1 min-h-0 flex flex-col items-center justify-start lg:justify-center px-4 py-5 sm:px-6 lg:py-4">
        <div className="w-full max-w-3xl flex flex-col lg:h-full lg:max-h-[820px] min-h-0">
          {children}
        </div>
      </main>

      <footer className="shrink-0 pb-3 pt-1 text-center">
        <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-600">
          Timestamped delivery record via{" "}
          <Link
            href="/"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 underline decoration-dashed underline-offset-4 transition-colors"
          >
            Verori
          </Link>
        </p>
      </footer>
    </div>
  )
}
