import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "./_components/section-hero"
import { DifferenceSection } from "./_components/section-difference"
import { PricingSection } from "./_components/section-pricing"
import { HowItWorksSection } from "./_components/section-how-it-works"
import { FinalCTASection } from "./_components/section-final-cta"
import { LandingHeader } from "./_components/landing-header"
import { Metadata } from "next"

const siteFooterLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
  { label: "Refund", href: "/refund" },
  { label: "Privacy", href: "/privacy" },
  { label: "GitHub", href: "https://github.com/mawmao/verori" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Verori",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "Timestamped proof of delivery for freelancers. A secure client approval portal that generates immutable, timestamped sign-off records.",
  url: "https://verori.app",
};

export const metadata: Metadata = {
  alternates: {
    canonical: "https://verori.app/"
  },
}


export default function LandingPage() {
  return (
    <div className="texture-overlay flex min-h-screen flex-col bg-zinc-50 antialiased dark:bg-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
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
