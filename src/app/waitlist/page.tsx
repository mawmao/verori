import { Metadata } from "next"
import { LandingHeader } from "@/app/_components/landing-header"
import { SiteFooter } from "@/components/site-footer"
import { siteFooterLinks } from "@/lib/links"
import { CheckIcon } from "@/components/icon/check"
import { WaitlistForm } from "./_components/waitlist-form"

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description: "Get early access to Verori, the timestamped proof of delivery and client sign-offs without client logins",
  alternates: { canonical: "https://verori.app/waitlist" },
}

const perks = [
  "Priority access before the public launch",
  "Founding-tier pricing locked in for life",
  "Direct input on the features that matter most to you",
]

export default function WaitlistPage() {
  return (
    <div className="texture-overlay relative isolate flex min-h-screen flex-col bg-zinc-50 antialiased dark:bg-zinc-950">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0 text-zinc-900/6 dark:text-zinc-50/5"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            backgroundPosition: "center top",
            maskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, #000 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, #000 20%, transparent 100%)",
          }}
        />
      </div>

      <LandingHeader />

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 sm:py-24">
        <div className="w-full max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dashed border-emerald-200 bg-emerald-50/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
            </span>
            Early Access
          </div>

          <h1 className="text-balance text-3xl font-semibold leading-[1.1] tracking-tighter text-zinc-950 sm:text-5xl dark:text-zinc-50">
            Get early access to Verori.
          </h1>

          <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
            We&apos;re onboarding solo consultants in small batches while billing verification wraps up. Drop your email and we&apos;ll send your invite link next.
          </p>

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xl shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-zinc-950/60">
            <WaitlistForm />

            <div className="mt-6 border-t border-dashed border-zinc-200 pt-5 dark:border-zinc-800">
              <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Waitlist perks
              </p>
              <ul className="space-y-2.5">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                    <CheckIcon className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter links={siteFooterLinks} />
    </div>
  )
}
