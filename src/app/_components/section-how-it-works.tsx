import { FileEntry } from "@/components/file-entry"
import { CheckIcon } from "@/components/icon/check"
import { CopyLinkButton } from "@/features/portal/components/client/copy-link-button"
import { TimelineItem } from "@/features/portal/components/timeline-item"

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full border-t border-dashed border-zinc-300 dark:border-zinc-800 scroll-mt-16"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-[11px] font-medium tracking-wider text-zinc-500 dark:text-zinc-400">
            How it works
          </p>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-950 sm:text-4xl dark:text-zinc-50 text-balance">
            <span className="font-mono text-emerald-600 dark:text-emerald-400">Three</span> steps.{" "}
            <span className="font-mono text-emerald-600 dark:text-emerald-400">Zero</span> friction.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            You create one link. Your client clicks it. You get a bulletproof receipt for your invoice.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-stretch md:gap-6">
          {/* Step 01 */}
          <div className="relative flex flex-col pl-11 md:pl-0">
            <span
              aria-hidden="true"
              className="absolute left-[15px] top-9 bottom-0 w-px border-l border-dashed border-zinc-300 dark:border-zinc-700 md:hidden"
            />

            <div className="absolute left-0 top-0 flex items-center gap-3 md:static md:mb-5">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white ring-4 ring-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 dark:ring-zinc-950">
                <span className="font-mono text-[10px] font-bold tabular-nums">01</span>
              </div>
              <span
                aria-hidden="true"
                className="hidden h-px flex-1 border-t border-dashed border-zinc-300 dark:border-zinc-700 md:block"
              />
            </div>

            <div className="mb-5">
              <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                Create a link
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Upload your PDF and add a short note. Verori generates a secure, tokenized link.
              </p>
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-xl border border-dashed border-zinc-300 bg-white p-4 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none">
              <FileEntry
                file={{ name: "Q3-SEO-Audit.pdf", size: 2516582, mime_type: "application/pdf" }}
                signedUrl="#how-it-works"
              />

              <div className="mt-4 border-t border-dashed border-zinc-200 pt-4 dark:border-zinc-800">
                <p className="font-mono text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                  Context note
                </p>
                <p className="mt-1.5 text-xs italic leading-relaxed text-zinc-700 dark:text-zinc-300">
                  &ldquo;Final audit for sign-off. Approval unblocks implementation.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="relative flex flex-col pl-11 md:pl-0">
            <span
              aria-hidden="true"
              className="absolute left-[15px] top-9 bottom-0 w-px border-l border-dashed border-zinc-300 dark:border-zinc-700 md:hidden"
            />

            <div className="absolute left-0 top-0 flex items-center gap-3 md:static md:mb-5">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white ring-4 ring-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 dark:ring-zinc-950">
                <span className="font-mono text-[10px] font-bold tabular-nums">02</span>
              </div>
              <span
                aria-hidden="true"
                className="hidden h-px flex-1 border-t border-dashed border-zinc-300 dark:border-zinc-700 md:block"
              />
            </div>

            <div className="mb-5">
              <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                Send it anywhere
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Paste the link into email or Slack. Your client opens it instantly. No login required.
              </p>
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-xl border border-dashed border-zinc-300 bg-white p-4 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none">
              <CopyLinkButton token="7Kp2mfW4" baseUrl="https://verori.app" className="w-full" />

              <div className="mt-4 border-t border-dashed border-zinc-200 pt-4 dark:border-zinc-800">
                <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                  <span>Email · Slack</span>
                  <span className="text-zinc-400 dark:text-zinc-500">No login required</span>
                </div>
                <div className="mt-2 rounded-lg bg-zinc-100/80 px-3 py-2.5 text-xs leading-relaxed text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
                  Hi John, audit is ready:{" "}
                  <span className="font-mono text-emerald-700 dark:text-emerald-400">
                    verori.app/p/7Kp2mfW4
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="relative flex flex-col pl-11 md:pl-0">
            <div className="absolute left-0 top-0 flex items-center gap-3 md:static md:mb-5">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white ring-4 ring-zinc-50 dark:bg-emerald-500 dark:ring-zinc-950">
                <CheckIcon className="size-4" />
              </div>
            </div>

            <div className="mb-5">
              <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                Track the result
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                See when they opened it and when they approved. Every sign-off is permanently recorded.
              </p>
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-xl border border-dashed border-emerald-300/80 bg-white p-4 shadow-sm shadow-emerald-500/[0.04] dark:border-emerald-800/60 dark:bg-zinc-950 dark:shadow-none">
              <div className="flex items-center justify-between gap-2 border-b border-dashed border-zinc-200 pb-3 dark:border-zinc-800">
                <span className="truncate font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                  Audit trail · Q3 SEO Audit
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckIcon className="size-3" />
                  Approved
                </span>
              </div>

              <ul className="flex flex-1 flex-col justify-center pt-3.5">
                <TimelineItem title="created" timestamp="Nov 19, 9:00 AM" tone="neutral" />
                <TimelineItem title="viewed" timestamp="Nov 19, 9:15 AM" tone="viewed" />
                <TimelineItem title="approved" timestamp="Nov 19, 10:30 AM" tone="approved" isLast />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
