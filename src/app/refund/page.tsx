import Link from "next/link"
import { ArrowLeftIcon } from "@/components/icon/arrow-left"
import { BrandLogo } from "@/components/brand-logo"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund Policy for Verori, the timestamped proof of delivery platform for freelancers.",
  alternates: { canonical: "https://verori.app/refund" },
  robots: { index: false, follow: true }
}

const termlyHtml = `
  <h2>Refund Policy</h2>
  <p><em>Last Updated: November 19, 2026</em></p>

  <p>Because Verori provides instant-access digital products (approval credit top-ups), all sales are final once credits are delivered to your account. We do not accept returns or issue refunds for change of mind, unused credits, or partial usage.</p>

  <h3>Exceptions</h3>
  <p>We will issue a full refund only in the following circumstances:</p>
  <ul>
    <li><strong>Technical Failure:</strong> You were charged but did not receive credits due to a verified system error.</li>
    <li><strong>Duplicate Charge:</strong> You were accidentally billed multiple times for the same transaction.</li>
    <li><strong>Legal Requirement:</strong> Your jurisdiction mandates a cooling-off period for digital goods. Contact us within 14 days to request this.</li>
  </ul>

  <h3>How to Request a Refund</h3>
  <p>Email <a href="mailto:support@verori.app">support@verori.app</a> with your order ID and reason. We respond within 2 business days. Approved refunds are processed to the original payment method within 5–10 business days.</p>

  <h3>Non-Refundable Items</h3>
  <p>Approval credits (digital top-ups) are non-refundable once delivered. Unused credits remain valid indefinitely and do not expire.</p>
`

const cleanTermlyHtml = termlyHtml
  .replace(/style="[^"]*"/g, '')
  .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  .replace(/<span[^>]*background: url\(data:image[^>]*><\/span>/g, '')
  .replace(/<div[^>]*>This (Privacy Policy|Cookie Policy|Terms and Conditions) was created using Termly[\s\S]*?<\/div>/gi, '')
  .replace(/<\/?bdt[^>]*>/gi, '')
  .trim()

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-20 px-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-8 h-full">
        <Link
          href="/login"
          className="inline-flex gap-2 items-center text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4"
        >
          <ArrowLeftIcon /> Back
        </Link>
        <div className="flex flex-col gap-4">
          <BrandLogo href="/" />
        </div>

        <div
          suppressHydrationWarning
          className="prose prose-xs sm:prose-sm prose-zinc dark:prose-invert max-w-none
              [&_bdt]:inline

              prose-headings:font-semibold prose-headings:tracking-tight
              prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3

              prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-a:underline-offset-4 prose-a:decoration-teal-600/30 hover:prose-a:decoration-teal-600

              prose-table:border-collapse prose-table:w-full prose-table:my-6
              prose-th:border prose-th:border-zinc-300 dark:prose-th:border-zinc-700 prose-th:p-3 prose-th:bg-zinc-50 dark:prose-th:bg-zinc-900 prose-th:text-left prose-th:font-semibold
              prose-td:border prose-td:border-zinc-300 dark:prose-td:border-zinc-700 prose-td:p-3 prose-td:align-top

              prose-ul:list-[square] prose-ul:marker:text-zinc-400 dark:prose-ul:marker:text-zinc-600
              prose-li:my-1.5 prose-li:pl-1

              prose-p:leading-relaxed prose-p:mb-4
              prose-strong:font-semibold prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100"
          dangerouslySetInnerHTML={{ __html: cleanTermlyHtml }}
        />
      </div>
    </main>
  )
}
