import { Metadata } from "next"
import { ContentLayout } from "@/components/content-layout"

export const metadata: Metadata = {
  title: "What to Do When a Client Says They Never Approved It",
  description: "Client claiming they never approved the work? Here is exactly how to handle the situation, recover your payment, and prevent it from happening again.",
  alternates: { canonical: "https://verori.app/guides/client-never-approved" }
}

export default function Page() {
  return (
    <ContentLayout
      category="Freelance Guide"
      title="What to Do When a Client Says They Never Approved It"
      description="The most stressful text a freelancer can receive. Here is how to de-escalate the situation, prove your work, and get paid."
    >
      <h2>The Panic Moment</h2>
      <p>You send the final invoice. The client replies: <em>"Wait, I never approved this final version. We need to go back to the drawing board."</em></p>
      <p>Your stomach drops. You have already spent 40 hours on this. If they are right, you are working for free. If they are wrong, you have a conflict on your hands.</p>

      <h2>Step 1: De-escalate and Audit</h2>
      <p>Do not reply with anger. Reply with data. Your goal is to move the conversation from "feelings" to "facts."</p>
      <p>Ask yourself: Do I have a record of them approving the specific version I invoiced for?</p>
      <ul>
        <li>If you used email: Search your sent folder. Hope they replied "Approved" and not just "Thanks."</li>
        <li>If you used Verori: Open your dashboard. Click the portal. Show them the timestamped log: <em>"Viewed on Oct 12 at 2:00 PM. Approved on Oct 12 at 2:05 PM."</em></li>
      </ul>

      <h2>Step 2: Present the Proof</h2>
      <p>If you have the proof, present it calmly. "I understand there might be some confusion. According to our records, the final deliverable was reviewed and approved on [Date]. I have attached the timestamped approval record for your reference."</p>
      <p>90% of the time, the client will realize they made a mistake and pay the invoice. The other 10% of the time, you have the documentation required to take the matter to small claims or a collection agency.</p>

      <h2>Step 3: Prevent It Forever</h2>
      <p>The only way to win this argument is to never have it. Stop relying on memory, vague emails, or verbal agreements.</p>
      <p>Verori was built to solve this exact nightmare. It provides <strong>timestamped proof of delivery for freelancers</strong>. When your client clicks "Approved" on a Verori link, that record is permanent, immutable, and indisputable.</p>
    </ContentLayout>
  )
}
