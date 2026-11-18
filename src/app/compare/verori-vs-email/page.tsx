import { Metadata } from "next"
import { ContentLayout } from "@/components/content-layout"

export const metadata: Metadata = {
  title: "Verori vs Email: The Truth About Client Sign-offs",
  description: "Is email enough for client approval? Compare the risks of email sign-offs vs the timestamped, immutable proof of delivery provided by Verori.",
  alternates: { canonical: "https://verori.app/compare/verori-vs-email" }
}

export default function Page() {
  return (
    <ContentLayout
      category="Comparison"
      title="Verori vs Email: Why 'Reply All' is Not a Sign-off"
      description="Email is great for communication, but terrible for legal and financial proof. Here is why smart freelancers are moving to Verori."
    >
      <h2>The "Email Approval" Myth</h2>
      <p>Most freelancers treat a client email saying "Looks good!" as a binding sign-off. It is not.</p>
      <p>Emails get buried. Threads get fragmented. Clients reply from their phones with "Thumbs up" emojis. When it is time to invoice $5,000, a "Thumbs up" emoji in a buried Gmail thread is not the professional proof you want to rely on.</p>

      <h2>The Verori Difference</h2>
      <div className="my-8 overflow-hidden rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700">
        <div className="grid grid-cols-2 border-b border-dashed border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/50">
          <div className="p-4 text-sm font-semibold text-zinc-500">Email Approval</div>
          <div className="p-4 text-sm font-semibold text-emerald-600 dark:text-emerald-400">Verori</div>
        </div>
        <div className="grid grid-cols-2 border-b border-dashed border-zinc-200 dark:border-zinc-800">
          <div className="p-4 text-sm text-zinc-600 dark:text-zinc-400">Buried in inbox threads</div>
          <div className="p-4 text-sm text-zinc-950 dark:text-zinc-50">Dedicated, secure portal</div>
        </div>
        <div className="grid grid-cols-2 border-b border-dashed border-zinc-200 dark:border-zinc-800">
          <div className="p-4 text-sm text-zinc-600 dark:text-zinc-400">Vague replies ("Looks good!")</div>
          <div className="p-4 text-sm text-zinc-950 dark:text-zinc-50">Explicit "Approved" button click</div>
        </div>
        <div className="grid grid-cols-2 border-b border-dashed border-zinc-200 dark:border-zinc-800">
          <div className="p-4 text-sm text-zinc-600 dark:text-zinc-400">No proof they actually opened the file</div>
          <div className="p-4 text-sm text-zinc-950 dark:text-zinc-50">Timestamped view logs</div>
        </div>
        <div className="grid grid-cols-2">
          <div className="p-4 text-sm text-zinc-600 dark:text-zinc-400">Client must log in or download attachments</div>
          <div className="p-4 text-sm text-zinc-950 dark:text-zinc-50">Zero friction. No client login required.</div>
        </div>
      </div>

      <h2>When to Use Email vs Verori</h2>
      <p>Use email to say: <em>"Hey, the deliverable is ready, check your Verori link."</em></p>
      <p>Use Verori to say: <em>"This is the exact file you approved, at this exact time, and here is the immutable record to prove it."</em></p>
    </ContentLayout>
  )
}
