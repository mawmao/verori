import { Metadata } from "next"
import { ContentLayout } from "@/components/content-layout"

export const metadata: Metadata = {
  title: "Client Approval Email Template (Copy & Paste)",
  description: "Free client approval email template for freelancers. Get sign-offs faster and avoid scope creep with this proven copy-paste script.",
  alternates: { canonical: "https://verori.app/templates/client-approval-email" }
}

export default function Page() {
  return (
    <ContentLayout
      category="Free Template"
      title="The 'No-Chase' Client Approval Email Template"
      description="Stop writing vague emails that get ignored. Use this exact template to get clear, timestamped sign-offs from your clients."
    >
      <h2>The Problem with Standard Approval Emails</h2>
      <p>Most freelancers send emails like this: <em>"Hey, let me know what you think!"</em></p>
      <p>This is a trap. It invites endless revisions, scope creep, and the dreaded "I never approved that" conversation three months later when it is time to invoice.</p>

      <h2>The Copy-Paste Approval Template</h2>
      <p>Copy this exact text. Fill in the brackets. Send it.</p>

      <div className="my-8 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/50">
        <p className="font-mono text-xs text-zinc-400 mb-2 uppercase tracking-widest">Subject Line</p>
        <p className="font-medium text-zinc-950 dark:text-zinc-50 mb-4">Action Required: [Project Name] Final Approval</p>

        <p className="font-mono text-xs text-zinc-400 mb-2 uppercase tracking-widest">Body</p>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
          {`Hi [Client Name],
          The final [Deliverable Name] is ready for your review.
          To keep us on schedule for the [Next Phase/Launch Date], please review the attached document and reply with "Approved" by [Date/Time].
          If you have specific changes, please list them in a single reply so we can batch the revisions.
          Looking forward to wrapping this up.
          Best,
          [Your Name]
          `}
        </p>
      </div>

      <h2>Why This Template Works</h2>
      <ul>
        <li><strong>Clear Deadline:</strong> "By [Date/Time]" creates urgency without being rude.</li>
        <li><strong>Batched Revisions:</strong> Prevents the "death by a thousand cuts" email chain.</li>
        <li><strong>Explicit Action:</strong> Asking them to reply "Approved" creates a paper trail.</li>
      </ul>

      <h2>The Better Alternative: Verori</h2>
      <p>Even with the perfect email, you are still relying on your client to reply, and you are still manually tracking their response in your inbox.</p>
      <p>Verori replaces this entire process. You upload your deliverable, add a context note, and send a secure link. You get a <strong>timestamped, immutable record</strong> of exactly when they viewed it and when they clicked "Approved." No email chasing required.</p>
    </ContentLayout>
  )
}
