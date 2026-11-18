import { Metadata } from "next"
import { ContentLayout } from "@/components/content-layout"

export const metadata: Metadata = {
  title: "Project Sign-off Form Template (Free)",
  description: "Free project sign-off form template for freelancers. Formally accept project phases, prevent scope creep, and protect your business.",
  alternates: { canonical: "https://verori.app/templates/project-sign-off-form" }
}

export default function Page() {
  return (
    <ContentLayout
      category="Free Template"
      title="The 'Scope-Proof' Project Sign-off Form"
      description="Stop relying on vague email replies. Use this structured sign-off form to formally close project phases and protect yourself from scope creep."
    >
      <h2>The Problem with Informal Sign-offs</h2>
      <p>When a project has multiple phases, a simple "looks good" in an email is not enough. Three weeks later, the client might say, <em>"I thought this phase included the mobile responsive design."</em></p>
      <p>Without a formal sign-off, you are forced to do free work to keep the relationship intact. A structured sign-off form draws a hard line in the sand.</p>

      <h2>The Copy-Paste Sign-off Form</h2>
      <p>Copy this text into a Google Doc, Notion page, or your project management tool. Have the client fill it out or reply with explicit confirmation.</p>

      <div className="my-8 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/50">
        <p className="font-mono text-xs text-zinc-400 mb-2 uppercase tracking-widest">Document Title</p>
        <p className="font-medium text-zinc-950 dark:text-zinc-50 mb-4">Phase [X] Sign-off & Acceptance Form</p>

        <p className="font-mono text-xs text-zinc-400 mb-2 uppercase tracking-widest">Form Body</p>
        <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line space-y-4">
          <p><strong>Project Name:</strong> [Project Name]</p>
          <p><strong>Phase Being Signed Off:</strong> [e.g., Phase 1: Wireframes & Strategy]</p>
          <p><strong>Date:</strong> [Current Date]</p>

          <div className="my-4 h-px bg-zinc-200 dark:bg-zinc-800" />

          <p><strong>Deliverables Included in this Phase:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>[Deliverable 1, e.g., Homepage Wireframe]</li>
            <li>[Deliverable 2, e.g., Brand Strategy Document]</li>
          </ul>

          <p><strong>Out of Scope for this Phase (Future Work):</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>[e.g., Mobile responsive coding]</li>
            <li>[e.g., Copywriting for blog posts]</li>
          </ul>

          <div className="my-4 h-px bg-zinc-200 dark:bg-zinc-800" />

          <p><strong>Client Declaration:</strong></p>
          <p>By replying "Approved" to this document, I confirm that the deliverables listed above meet the agreed-upon requirements for this phase. I understand that any new requests or changes to these approved items will be considered out of scope and may incur additional fees or timeline adjustments.</p>

          <p className="mt-4"><strong>Client Name:</strong> [Client Name]</p>
          <p><strong>Signature / Reply:</strong> "Approved"</p>
          <p><strong>Date:</strong> [Date of Approval]</p>
        </div>
      </div>

      <h2>Why This Form Protects You</h2>
      <ul>
        <li><strong>Explicit Scope Boundaries:</strong> Listing what is <em>not</em> included is just as important as listing what is.</li>
        <li><strong>Formal Declaration:</strong> The "Client Declaration" section shifts the dynamic from a casual chat to a binding business agreement.</li>
        <li><strong>Clear Paper Trail:</strong> Having the client explicitly type "Approved" alongside their name creates undeniable proof of agreement.</li>
      </ul>

      <h2>The Better Alternative: Verori</h2>
      <p>While this form is better than nothing, it still relies on the client manually copying, pasting, and replying. It is easy for them to ignore, and hard for you to track.</p>
      <p>Verori automates this entirely. You upload the phase deliverables, add the scope details in the <strong>Context Note</strong>, and send a secure link. When the client clicks <strong>"Approved"</strong>, Verori generates a permanent, timestamped record of their acceptance. No forms to manage, no chasing required.</p>
    </ContentLayout>
  )
}
