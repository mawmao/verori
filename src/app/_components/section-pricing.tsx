import { CheckIcon } from "@/components/icon/check";

const currentFeatures = [
  "Unlimited client portals",
  "Secure, tokenized share links",
  "Timestamped view & approval logs",
  "PDF & Image file previews",
  "Manual reminder triggers",
]

const futureFeatures = [
  "Branded client portals (your logo & colors)",
  "One-click + opt-in automatic reminders",
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
            Free today. Built for tomorrow.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative flex flex-col rounded-xl border border-dashed border-emerald-300/60 bg-white p-6 shadow-xl shadow-emerald-500/3 dark:border-emerald-800/40 dark:bg-zinc-950/50 dark:shadow-emerald-500/2">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Current (Public Beta)</h3>
              <span className="rounded-full border border-dashed border-emerald-200 bg-emerald-50/80 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                Free
              </span>
            </div>

            <ul className="flex flex-1 flex-col gap-3.5">
              {currentFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-dashed border-emerald-200/60 dark:border-emerald-800/40">
              <p className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <CheckIcon className="size-3.5 text-emerald-500" />
                No credit card required. Unlimited portals.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col rounded-xl border border-dashed border-zinc-300 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/20">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Future Pro</h3>
              <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                Coming Soon
              </span>
            </div>

            <ul className="flex flex-1 flex-col gap-3.5">
              {futureFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full border border-dashed border-zinc-400 dark:border-zinc-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-dashed border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900/50">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              Early adopters are guaranteed the most favorable founding-tier pricing or extended free access available upon launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
