import { LandingHeader } from "@/app/_components/landing-header"
import { PricingSection } from "@/app/_components/section-pricing"
import { SiteFooter } from "@/components/site-footer"
import { CheckIcon } from "@/components/icon/check"
import { FinalCTASection } from "../_components/section-final-cta"

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

export default function PricingPage() {
  return (
    <div className="texture-overlay flex min-h-screen flex-col bg-zinc-50 antialiased dark:bg-zinc-950">
      <LandingHeader />

      <main className="flex w-full flex-1 flex-col">
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

      <SiteFooter
        links={[
          { label: "Terms", href: "/terms" },
          { label: "Privacy", href: "/privacy" },
          { label: "GitHub", href: "https://github.com/mawmao/verori" },
        ]}
      />
    </div>
  )
}
