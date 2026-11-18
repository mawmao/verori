import { LandingHeader } from "@/app/_components/landing-header"
import { SiteFooter } from "@/components/site-footer"
import { FinalCTASection } from "@/app/_components/section-final-cta"

interface ContentLayoutProps {
  category: string
  title: string
  description: string
  children: React.ReactNode
}

const siteFooterLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "GitHub", href: "https://github.com/mawmao/verori" },
]

export function ContentLayout({ category, title, description, children }: ContentLayoutProps) {
  return (
    <div className="texture-overlay flex min-h-screen flex-col bg-zinc-50 antialiased dark:bg-zinc-950">
      <LandingHeader />

      <main className="flex w-full flex-1 flex-col">
        <section className="w-full border-b border-dashed border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950/50">
          <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dashed border-emerald-200 bg-emerald-50/50 px-3 py-1 dark:border-emerald-800 dark:bg-emerald-900/20">
              <span className="text-[10px] font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                {category}
              </span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tighter text-zinc-950 sm:text-4xl dark:text-zinc-50">
              {title}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          </div>
        </section>

        <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
          <div className="prose prose-zinc prose-headings:tracking-tight prose-headings:font-semibold prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline dark:prose-invert max-w-none">
            {children}
          </div>
        </article>

        <div className="mx-auto w-full max-w-4xl">
          <FinalCTASection
            badge="Stop chasing. Start shipping."
            headline="Get timestamped proof of delivery today."
            subtext="Skip the email templates and manual tracking. Send a secure Verori link and get an immutable record of your client's approval."
          />
        </div>
      </main>

      <SiteFooter links={siteFooterLinks} />
    </div>
  )
}
