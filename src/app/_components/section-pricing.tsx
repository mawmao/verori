import { CheckIcon } from "@/components/icon/check";

const freeFeatures = [
  "3 approvals per month",
  "Secure, tokenized share links",
  "Timestamped view & approval logs",
  "PDF & image file previews",
  "Pre-written follow-up drafts for you to copy & paste",
]

const topUpFeatures = [
  "5 additional approvals for a one-time $5",
  "Credits never expire across months",
  "No subscription, no recurring charge",
  "Top-up available the moment you reach the limit",
  "Same core features — no downgrade",
]

const proFeatures = [
  "Unlimited approvals",
  "Branded client portals (your logo & colors)",
  "Automated email reminders sent to YOU (we never email your clients)",
  "PDF delivery record for invoicing & disputes",
  "Engagement summary export",
  "Watermarked previews until client approves",
  "Context-note templates for recurring work",
]


export function PricingSection() {
  return (
    <section className="w-full border-t border-dashed border-zinc-300 dark:border-zinc-800">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            Pricing & Roadmap
          </p>
          <h2 className="text-2xl font-semibold tracking-tighter text-zinc-950 sm:text-3xl dark:text-zinc-50">
            Free to start. Pay only when you need more.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative flex flex-col rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950/50">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Free</h3>
              <span className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                $0 / month
              </span>
            </div>

            <ul className="flex flex-1 flex-col gap-3.5">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                No credit card required. Resets on the 1st of each month.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col rounded-xl border border-emerald-300 bg-emerald-50/30 p-6 shadow-lg shadow-emerald-500/5 dark:border-emerald-800/60 dark:bg-emerald-900/10">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Pay-as-you-go</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400">
                <span className="size-1 rounded-full bg-emerald-500" />
                Available now
              </span>
            </div>

            <div className="mb-5 flex items-baseline gap-1.5">
              <span className="font-mono text-3xl font-semibold tracking-tighter tabular-nums text-zinc-950 dark:text-zinc-50">$5</span>
              <span className="font-mono text-[11px] tabular-nums text-zinc-500 dark:text-zinc-400">one-time · 5 credits</span>
            </div>

            <ul className="flex flex-1 flex-col gap-3.5">
              {topUpFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-emerald-200/70 dark:border-emerald-800/40">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Purchased inside your dashboard the moment you reach the monthly limit.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-6 flex flex-col rounded-xl verori-border bg-zinc-200/20 p-6 dark:bg-zinc-900/20">
          <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Future Pro</h3>
              <span className="font-mono text-[11px] tabular-nums text-zinc-500 dark:text-zinc-400">$9 / month · optional</span>
            </div>
            <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              Coming soon
            </span>
          </div>

          <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {proFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full border border-dashed border-zinc-400 dark:border-zinc-600" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-dashed border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900/50">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              No forced subscription. Top up only when you need more. Pro arrives later at founding-tier pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
