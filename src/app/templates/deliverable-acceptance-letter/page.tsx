import { Metadata } from "next"
import { ContentLayout } from "@/components/content-layout"

export const metadata: Metadata = {
  title: "Deliverable Acceptance Letter Template",
  description: "Free deliverable acceptance letter template for freelancers. Formally hand over high-value work and secure binding client approval.",
  alternates: { canonical: "https://verori.app/templates/deliverable-acceptance-letter" }
}

export default function Page() {
  return (
    <ContentLayout
      category="Free Template"
      title="The Formal Deliverable Acceptance Letter"
      description="For high-value projects, a casual email isn't enough. Use this formal acceptance letter to professionally hand over work and secure binding approval."
    >
      <h2>When You Need a Formal Acceptance Letter</h2>
      <p>Not every project requires a formal letter. But if you are handing over a $5,000+ website, a comprehensive brand identity, or a critical business strategy, you need more than a Slack message.</p>
      <p>A formal acceptance letter serves two purposes: it professionally signals the completion of your work, and it creates a legally sound record that the client has received and accepted the final deliverables.</p>

      <h2>The Copy-Paste Acceptance Letter</h2>
      <p>Copy this text, fill in the bracketed information, and send it as a PDF attachment or in the body of a formal handover email.</p>

      <div className="my-8 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/50">
        <p className="font-mono text-xs text-zinc-400 mb-2 uppercase tracking-widest">Subject Line</p>
        <p className="font-medium text-zinc-950 dark:text-zinc-50 mb-4">Final Deliverable Handover & Acceptance: [Project Name]</p>

        <p className="font-mono text-xs text-zinc-400 mb-2 uppercase tracking-widest">Letter Body</p>
        <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line space-y-4">
          <p>Dear [Client Name],</p>
          <p>It has been a pleasure working with you on [Project Name]. As of today, [Date], all agreed-upon work for this project has been completed.</p>
          <p>Please find the final deliverables attached to this letter (or accessible via the secure link below):</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>[Deliverable 1: e.g., Final Brand Guidelines PDF]</li>
            <li>[Deliverable 2: e.g., Source Files ZIP]</li>
            <li>[Deliverable 3: e.g., Website Login Credentials]</li>
          </ul>

          <p><strong>Next Steps & Acceptance:</strong></p>
          <p>Please review these final materials. To formally close this project and trigger the final invoice, kindly reply to this email with the word <strong>"Accepted"</strong> by [Date, e.g., Friday, November 24th].</p>
          <p>If you have any critical, project-blocking issues, please let me know by this date. Minor tweaks outside the original scope will be handled via a separate change order.</p>
          <p>Thank you for the opportunity to collaborate. I look forward to hearing from you.</p>
          <p>Sincerely,</p>
          <p>[Your Name]<br/>[Your Title/Company]<br/>[Your Contact Information]</p>
        </div>
      </div>

      <h2>Why Formality Matters for High-Value Projects</h2>
      <ul>
        <li><strong>Professionalism:</strong> It elevates your perceived value. You are not just a freelancer; you are a professional business.</li>
        <li><strong>Clear Handover Point:</strong> It explicitly states when your responsibility ends and the client's ownership begins.</li>
        <li><strong>Invoice Trigger:</strong> It ties the client's explicit "Accepted" reply directly to your right to issue the final invoice.</li>
      </ul>

      <h2>The Better Alternative: Verori</h2>
      <p>Formal letters are great, but they still rely on the client reading a long email and remembering to reply with a specific word.</p>
      <p>Verori modernizes the handover process. You upload the final files, paste this exact acceptance text into the <strong>Context Note</strong>, and send one secure link. The client clicks a single <strong>"Accept & Approve"</strong> button, and Verori instantly generates a timestamped, immutable record of their acceptance. It is the professionalism of a formal letter, with the reliability of software.</p>
    </ContentLayout>
  )
}
