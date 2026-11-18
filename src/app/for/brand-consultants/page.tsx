import { Metadata } from "next"
import { ContentLayout } from "@/components/content-layout"

export const metadata: Metadata = {
  title: "Client Approval for Brand Consultants",
  description: "Protect your brand guidelines, mood boards, and strategy decks. Get timestamped proof of delivery and approval from your clients.",
  alternates: { canonical: "https://verori.app/for/brand-consultants" }
}

export default function Page() {
  return (
    <ContentLayout
      category="Use Case"
      title="Timestamped Proof of Delivery for Brand Consultants"
      description="You spend weeks crafting brand identities. Don't let a vague email chain undermine your work. Get immutable approval records for every deliverable."
    >
      <h2>The Unique Risk of Brand Consulting</h2>
      <p>Brand consultants face a specific, expensive problem: clients stealing concepts.</p>
      <p>You present three logo directions. The client says, "We love Direction A, but can you tweak it?" You spend three days tweaking. They ghost you. Two months later, they launch a brand that looks exactly like Direction A, but they never paid your final invoice.</p>
      <p>Without a timestamped record of what was presented and when, you have zero leverage.</p>

      <h2>How Verori Protects Your Work</h2>
      <p>Verori is built specifically for the deliverable-heavy workflow of brand consultants.</p>
      <ul>
        <li><strong>Secure Link Sharing:</strong> Send your mood boards, strategy decks, and logo presentations via a secure, tokenized link. No client login required.</li>
        <li><strong>View Tracking:</strong> Know exactly when your client opened the presentation. Did they view it at 2 AM on a Sunday? You have the proof.</li>
        <li><strong>Immutable Approval Logs:</strong> When they click "Approved," that timestamp is locked. If they try to claim "we never signed off on that font" six months later, you have the receipt.</li>
      </ul>

      <h2>Built for the Solo Brand Consultant</h2>
      <p>Enterprise tools like Dubsado or HoneyBook are bloated with CRM features you do not need. Verori does one thing perfectly: it turns your deliverables into timestamped proof of delivery for freelancers.</p>
    </ContentLayout>
  )
}
