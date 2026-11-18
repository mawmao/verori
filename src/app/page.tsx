import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "./_components/section-hero"
import { DifferenceSection } from "./_components/section-difference"
import { PricingSection } from "./_components/section-pricing"
import { HowItWorksSection } from "./_components/section-how-it-works"
import { FinalCTASection } from "./_components/section-final-cta"
import { LandingHeader } from "./_components/landing-header"

const siteFooterLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "GitHub", href: "https://github.com/mawmao/verori" },
]

export default function LandingPage() {
  return (
    <div className="texture-overlay flex min-h-screen flex-col bg-zinc-50 antialiased dark:bg-zinc-950">
      <LandingHeader />
      <main className="flex w-full flex-1 flex-col">
        <HeroSection />
        <DifferenceSection />
        <PricingSection />
        <HowItWorksSection />
        <FinalCTASection />
      </main>

      <SiteFooter links={siteFooterLinks} />
    </div>
  )
}
