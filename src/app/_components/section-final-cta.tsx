import Link from "next/link";
import { Button } from "@/components/button";
import { CheckIcon } from "@/components/icon/check";
interface Props {
  badge?: string
  headline?: string
  subtext?: string
}
export function FinalCTASection({
  badge = "Ready to get paid faster?",
  headline = "Stop chasing. Start shipping.",
  subtext = "Join Verori and get a permanent, timestamped record for every deliverable. No client logins. No complex setup.",
}: Props) {
  return (
    <section className="relative w-full border-t border-dashed border-zinc-300 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-950/50">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-transparent via-emerald-500/20 to-transparent dark:via-emerald-500/10" />
        <div className="absolute left-1/2 top-0 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl dark:bg-emerald-500/5" />
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center px-6">
        <div className="mb-6 inline-flex items-center justify-center rounded-full border border-dashed border-emerald-200 bg-emerald-50/50 px-3 py-1 dark:border-emerald-800 dark:bg-emerald-900/20">
          <CheckIcon className="mr-1.5 size-3 text-emerald-600 dark:text-emerald-400" />
          <span className="text-[10px] font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
            {badge}
          </span>
        </div>

        <h2 className="text-3xl font-semibold tracking-tighter text-zinc-950 sm:text-4xl dark:text-zinc-50">
          {headline}
        </h2>

        <p className="mt-3 max-w-lg text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
          {subtext}
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto">
          <Button
            as={Link}
            href="/waitlist"
            className="w-full sm:w-auto px-10 py-3 text-base shadow-lg shadow-emerald-500/10 transition-shadow hover:shadow-emerald-500/20"
          >
            Join the Waitlist
          </Button>

          <span className="flex items-center gap-2 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            <span className="size-1 rounded-full bg-emerald-500" />
            Early access rolling out soon · Free to start
          </span>
        </div>
      </div>
    </section>
  )
}
