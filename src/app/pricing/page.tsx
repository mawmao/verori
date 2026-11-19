import { LandingHeader } from "@/app/_components/landing-header"
import { PricingSection } from "@/app/_components/section-pricing"
import { SiteFooter } from "@/components/site-footer"
import { CheckIcon } from "@/components/icon/check"
import { FinalCTASection } from "../_components/section-final-cta"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing & Roadmap",
  description: "Verori is free during Public Beta. See what is included now and what is coming in Future Pro for freelancers seeking timestamped proof of delivery.",
  alternates: { canonical: "https://verori.app/pricing" }
}

const faqs = [
  {
    q: "Will I lose access to my portals when Verori starts charging?",
    a: "No. Early adopters are guaranteed the most favorable founding-tier pricing or extended free access. You will receive at least 30 days' notice before any changes take effect.",
  },
  {
    q: "Is there a limit to how many clients I can send links to?",
    a: "None. During the Public Beta, all portals, file uploads, and activity logs are completely unlimited.",
  },
  {
    q: "Do my clients need to create an account to approve work?",
    a: "Never. Verori is built on the principle of zero client friction. They access deliverables via a secure, tokenized link with no login or onboarding required.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a
    }
  }))
}

const siteFooterLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
  { label: "Refund", href: "/refund" },
  { label: "Privacy", href: "/privacy" },
  { label: "GitHub", href: "https://github.com/mawmao/verori" },
]

export default function PricingPage() {
  return (
    <div className="texture-overlay flex min-h-screen flex-col bg-zinc-50 antialiased dark:bg-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />

      <LandingHeader />

      <main className="flex w-full flex-1 flex-col">
        <section className="relative w-full border-b border-dashed border-zinc-300 bg-zinc-50 py-16 sm:py-20 dark:border-zinc-800 dark:bg-zinc-950/50">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-transparent via-emerald-500/20 to-transparent dark:via-emerald-500/10" />
            <div className="absolute bottom-0 left-1/2 size-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl dark:bg-emerald-500/5" />
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center px-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dashed border-emerald-200 bg-emerald-50/50 px-3 py-1 dark:border-emerald-800 dark:bg-emerald-900/20">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                Public Beta · Free
              </span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tighter text-zinc-950 sm:text-4xl dark:text-zinc-50">
              Simple, transparent pricing.
            </h1>

            <p className="mt-3 max-w-lg text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
              Verori is currently <span className="font-medium text-zinc-950 dark:text-zinc-50">100% free</span> during our Public Beta. We are building the ultimate timestamped proof of delivery tool for freelancers, and we want you to shape it with us.
            </p>

            <span className="mt-6 flex items-center gap-2 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
              <span className="size-1 rounded-full bg-emerald-500" />
              No credit card required · No hidden limits
            </span>
          </div>
        </section>

        <PricingSection />

        <section className="w-full border-t border-dashed border-zinc-300 dark:border-zinc-800">
          <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
            <h2 className="mb-8 text-center text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Frequently asked questions
            </h2>

            <div className="flex flex-col gap-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="space-y-2">
                  <h3 className="flex items-start gap-2 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <FinalCTASection headline="Set up your first portal in under a minute." subtext="No card. No commitment. Your early access is protected." />
      </main>

      <SiteFooter links={siteFooterLinks} />
    </div>
  )
}
