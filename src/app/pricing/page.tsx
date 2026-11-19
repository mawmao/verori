import { LandingHeader } from "@/app/_components/landing-header"
import { PricingSection } from "@/app/_components/section-pricing"
import { SiteFooter } from "@/components/site-footer"
import { CheckIcon } from "@/components/icon/check"
import { FinalCTASection } from "../_components/section-final-cta"
import { Metadata } from "next"
import { siteFooterLinks } from "@/lib/links"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Verori uses simple pay-as-you-go pricing: 3 free approvals per month, $5 top-ups when you need more, and an optional Pro subscription coming soon. No forced subscriptions.",
  alternates: { canonical: "https://verori.app/pricing" }
}

const faqs = [
  {
    q: "How does Verori pricing work?",
    a: "**Start free with 3 approvals per month.** When you need more, buy a $5 top-up for 5 additional credits — a **one-time charge with no subscription**. An optional Pro subscription with advanced features is coming later.",
  },
  {
    q: "Do my purchased credits expire?",
    a: "**No.** Credits you buy carry across months until you use them. There is **no expiry and no recurring billing**.",
  },
  {
    q: "Is there a monthly limit on the free plan?",
    a: "Yes. The free plan includes **3 successful approvals per calendar month**. You can top up to continue immediately, or wait for the quota to reset on the 1st of the next month.",
  },
  {
    q: "Do my clients need to create an account to approve work?",
    a: "**Never.** Verori is built on the principle of zero client friction. They access deliverables via a secure, tokenized link with **no login or onboarding required**.",
  },
  {
    q: "Does Verori send emails directly to my clients?",
    a: "No. We believe you should maintain **complete control** over your client relationships. In the Free tier, we provide pre-written follow-up drafts for you to copy and paste. In the Pro tier, we send automated email reminders to **you** when a client goes silent. **Verori never emails your clients directly.**"
  }
]

const formatAnswer = (text: string) => {
  return text.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="font-medium text-zinc-700 dark:text-zinc-300">$1</strong>'
  )
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a.replace(/\*\*/g, '')
    }
  }))
}

export default function PricingPage() {
  return (
    <div className="texture-overlay flex min-h-screen flex-col bg-zinc-50 antialiased dark:bg-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

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
                Pay-as-you-go · No subscription
              </span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tighter text-zinc-950 sm:text-4xl dark:text-zinc-50">
              Simple, transparent pricing.
            </h1>

            <p className="mt-3 max-w-lg text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
              Start free with <span className="font-medium text-zinc-950 dark:text-zinc-50">3 approvals every month</span>. Need more? Top up $5 for 5 credits, one time, no subscription. We are building the ultimate timestamped proof of delivery tool for freelancers.
            </p>

            <span className="mt-6 flex items-center gap-2 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
              <span className="size-1 rounded-full bg-emerald-500" />
              No credit card required · No subscription · Pay only when you need more
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
                  <p
                    className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 pl-6"
                    dangerouslySetInnerHTML={{ __html: formatAnswer(faq.a) }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTASection
          headline="Set up your first portal in under a minute."
          subtext="No card. No subscription. 3 free approvals every month."
        />
      </main>

      <SiteFooter links={siteFooterLinks} />
    </div>
  )
}
