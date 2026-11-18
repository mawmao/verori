

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full border-t border-dashed border-zinc-300 dark:border-zinc-800 scroll-mt-16">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            How it works
          </p>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-950 sm:text-4xl dark:text-zinc-50">
            <span className="font-mono text-emerald-600 dark:text-emerald-400">Three</span> steps.{" "}
            <span className="font-mono text-emerald-600 dark:text-emerald-400">Zero</span> friction.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            You create one link. Your client clicks it. You get a bulletproof receipt for your invoice.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] top-8 bottom-0 w-px border-l border-dashed border-zinc-300 dark:border-zinc-700 md:left-0 md:right-0 md:top-6 md:h-px md:w-full md:border-l-0 md:border-t" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-4">
            {/* step 1 */}
            <div className="relative flex flex-col gap-4 pl-12 md:pl-0 md:pt-12">
              <div className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border-4 border-zinc-50 bg-zinc-950 text-white dark:border-zinc-950 dark:bg-zinc-50 dark:text-zinc-950 md:left-1/2 md:-translate-x-1/2">
                <span className="font-mono text-[10px] font-bold">01</span>
              </div>
              <div>
                <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Create a link</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  Upload your PDF and add a short note. Verori generates a secure, tokenized link.
                </p>
              </div>
              <div className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50/50 p-3 dark:border-zinc-700 dark:bg-zinc-900/30">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-zinc-200 text-zinc-500 dark:bg-zinc-800">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium text-zinc-950 dark:text-zinc-50">Q3-SEO-Audit.pdf</p>
                    <p className="text-[10px] text-zinc-500">2.4 MB · Uploaded</p>
                  </div>
                </div>
                <div className="mt-2 rounded border border-dashed border-zinc-200 bg-white p-2 text-[10px] leading-relaxed text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
                  "Final audit for sign-off. Approval unblocks implementation."
                </div>
              </div>
            </div>

            {/* step 2 */}
            <div className="relative flex flex-col gap-4 pl-12 md:pl-0 md:pt-12">
              <div className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border-4 border-zinc-50 bg-zinc-950 text-white dark:border-zinc-950 dark:bg-zinc-50 dark:text-zinc-950 md:left-1/2 md:-translate-x-1/2">
                <span className="font-mono text-[10px] font-bold">02</span>
              </div>
              <div>
                <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Send it anywhere</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  Paste the link into email or Slack. Your client opens it instantly. No login required.
                </p>
              </div>
              <div className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50/50 p-3 dark:border-zinc-700 dark:bg-zinc-900/30">
                <div className="mb-2 flex items-center justify-between gap-2 rounded border border-dashed border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950">
                  <span className="flex min-w-0 items-center gap-2">
                    <svg className="size-3.5 shrink-0 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                    <span className="truncate font-mono text-[10px] text-zinc-600 dark:text-zinc-300">verori.app/p/7Kp2mfW4</span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded bg-emerald-50 px-1.5 py-0.5 text-[9px] font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <svg className="size-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Copied
                  </span>
                </div>
                <div className="self-end rounded-lg rounded-br-sm bg-zinc-200 px-2.5 py-1.5 text-[10px] leading-relaxed text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  Hi John, audit is ready: <span className="font-mono text-emerald-700 dark:text-emerald-400">verori.app/p/7Kp2mfW4</span>
                </div>
              </div>
            </div>

            {/* step 3 */}
            <div className="relative flex flex-col gap-4 pl-12 md:pl-0 md:pt-12">
              <div className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border-4 border-zinc-50 bg-emerald-600 text-white dark:border-zinc-950 dark:bg-emerald-500 md:left-1/2 md:-translate-x-1/2">
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Track the result</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  See when they opened it and when they approved. Every sign-off is permanently recorded.
                </p>
              </div>
              <div className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50/50 p-3 dark:border-zinc-700 dark:bg-zinc-900/30">
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[10px] font-medium text-zinc-600 dark:text-zinc-400">
                      <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      Link created
                    </span>
                    <span className="font-mono text-[9px] text-zinc-400">9:00 AM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[10px] font-medium text-zinc-600 dark:text-zinc-400">
                      <span className="size-1.5 rounded-full bg-blue-500" />
                      Viewed by client
                    </span>
                    <span className="font-mono text-[9px] text-zinc-400">9:15 AM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                      Approved
                    </span>
                    <span className="font-mono text-[9px] text-emerald-600 dark:text-emerald-400">10:30 AM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
