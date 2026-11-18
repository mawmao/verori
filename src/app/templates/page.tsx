import { Metadata } from "next"
import Link from "next/link"
import { LandingHeader } from "@/app/_components/landing-header"
import { SiteFooter } from "@/components/site-footer"
import { FinalCTASection } from "@/app/_components/section-final-cta"
import { ChevronRightIcon } from "@/components/icon/chevron-right"

export const metadata: Metadata = {
  title: "Free Client Approval Email Templates",
  description: "Copy-paste email templates for freelancers to get client sign-offs faster, prevent scope creep, and document deliverable approval.",
  alternates: { canonical: "https://verori.app/templates" }
}

const templates = [
  {
    title: "Client Approval Email",
    description: "The exact script to send when delivering final work to get a clear, binding sign-off without endless revisions.",
    href: "/templates/client-approval-email",
    tag: "Most Popular"
  },
  {
    title: "Project Sign-off Form",
    description: "A structured format for clients to formally accept a project phase, protecting you from scope creep.",
    href: "/templates/project-sign-off-form",
    tag: "New"
  },
  {
    title: "Deliverable Acceptance Letter",
    description: "A formal, professional letter template to accompany high-value deliverables and ensure timestamped agreement.",
    href: "/templates/deliverable-acceptance-letter",
    tag: "Formal"
  }
]

export default function TemplatesPage() {
  return (
    <div className="texture-overlay flex min-h-screen flex-col bg-zinc-50 antialiased dark:bg-zinc-950">
      <LandingHeader />

      <main className="flex w-full flex-1 flex-col">
        {/* Header: Matches the ContentLayout header exactly */}
        <section className="w-full border-b border-dashed border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950/50">
          <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dashed border-emerald-200 bg-emerald-50/50 px-3 py-1 dark:border-emerald-800 dark:bg-emerald-900/20">
              <span className="text-[10px] font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                Free Resources
              </span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tighter text-zinc-950 sm:text-4xl dark:text-zinc-50">
              Client Approval Templates
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
              Stop guessing what to say. Use these proven, copy-paste templates to get clear sign-offs, prevent scope creep, and protect your freelance business.
            </p>
          </div>
        </section>

        {/* Grid: Ultra-minimal hover states (no glows, just subtle border/bg shifts) */}
        <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Link
                key={template.href}
                href={template.href}
                className="group flex flex-col p-6 rounded-xl border border-dashed border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50/50 transition-all dark:border-zinc-800 dark:bg-zinc-950/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/50"
              >
                <div className="mb-4">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {template.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  {template.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 flex-1">
                  {template.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-950 dark:text-zinc-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  View Template
                  <ChevronRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA: Constrained to max-w-4xl to perfectly mirror the header width */}
        <div className="mx-auto w-full max-w-4xl">
          <FinalCTASection
            badge="Stop chasing. Start shipping."
            headline="Skip the templates. Get immutable proof."
            subtext="Emails can be lost or misinterpreted. Verori gives you a secure link and a timestamped, undeniable record of client approval."
          />
        </div>
      </main>

      <SiteFooter
        links={[
          { label: "Pricing", href: "/pricing" },
          { label: "Contact", href: "/contact" },
          { label: "Terms", href: "/terms" },
          { label: "Privacy", href: "/privacy" },
          { label: "GitHub", href: "https://github.com/mawmao/verori" },
        ]}
      />
    </div>
  )
}
