

export function DifferenceSection() {
  return (
    <section id="the-record" className="w-full border-t border-dashed border-zinc-300 dark:border-zinc-800 scroll-mt-16">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            The difference
          </p>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-950 sm:text-4xl dark:text-zinc-50">
            Three follow-ups, zero proof.
            <span className="text-zinc-300 dark:text-zinc-700"> / </span>
            <span className="text-emerald-600 dark:text-emerald-400">One link, a permanent record.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col lg:col-span-5">
            <p className="mb-3 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              The old way
            </p>
            <OldWayMock />
          </div>

          <div className="flex flex-col lg:col-span-7">
            <p className="mb-3 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              The Verori way
            </p>
            <NewWayMock />
          </div>
        </div>
      </div>
    </section>
  )
}



function OldWayMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-dashed border-zinc-300 bg-zinc-100/60 dark:border-zinc-800 dark:bg-zinc-900/30">
      <div className="flex items-center justify-between gap-3 border-b border-dashed border-zinc-300 bg-zinc-200/50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-zinc-300 text-[10px] font-bold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
            JD
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold tracking-tight text-zinc-600 dark:text-zinc-300">Re: Q3 SEO Audit</p>
            <p className="text-[10px] text-zinc-400 dark:text-zinc-500">Email thread</p>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center rounded bg-zinc-300/60 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          No read receipt
        </span>
      </div>

      <div className="flex flex-col gap-2 p-4">
        {[
          { time: "Mon 9:00 AM", text: "Hey John, just sent over the final Q3 SEO Audit. Can you sign off today?" },
          { time: "Mon 2:00 PM", text: "Just bumping this up. Did you get a chance to look at it?" },
          { time: "Tue 10:00 AM", text: "Hi John, checking in again. I need the sign-off so I can close out the month and send the invoice…" },
        ].map((m, i) => (
          <div
            key={m.time}
            className="self-end rounded-lg rounded-br-sm bg-zinc-200 px-3 py-2 text-xs leading-relaxed text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
            style={{ transform: `rotate(${(i - 1) * 0.8}deg)`, opacity: 1 - i * 0.15 }}
          >
            {m.text}
            <span className="mt-1 block text-right font-mono text-[9px] tabular-nums text-zinc-400 dark:text-zinc-600">{m.time}</span>
          </div>
        ))}

        <div className="mt-2 flex items-center gap-2 px-1">
          <span className="flex gap-1" aria-hidden>
            {[0, 150, 300].map((d) => (
              <span key={d} className="size-1 rounded-full bg-zinc-300 motion-safe:animate-bounce dark:bg-zinc-700" style={{ animationDelay: `${d}ms` }} />
            ))}
          </span>
          <span className="h-px flex-1 bg-linear-to-r from-zinc-300 to-transparent dark:from-zinc-700" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-600">No reply</span>
        </div>
      </div>
    </div>
  )
}


function NewWayMock() {
  const events = [
    { type: "created", title: "Link created", time: "Nov 18, 9:00 AM", tone: "neutral" as const },
    { type: "viewed", title: "Viewed by client", time: "Nov 18, 9:15 AM", tone: "info" as const },
    { type: "approved", title: "Approved", time: "Nov 18, 10:30 AM", tone: "success" as const },
  ]

  return (
    <div className="space-y-4 rounded-xl border border-dashed border-zinc-300 bg-white p-5 shadow-xl shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-zinc-950/50">
      <div className="space-y-2">
        <h3 className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Context Note</h3>
        <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950/50">
          <p className="text-sm italic leading-relaxed text-zinc-700 dark:text-zinc-300">
            "Final audit for sign-off. Approval unblocks the implementation phase."
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-dashed border-zinc-300 bg-white p-4 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900/50">
        <div className="flex items-center gap-4 min-w-0">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-zinc-100 text-zinc-500 dark:bg-zinc-800">
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="truncate text-sm font-medium text-zinc-950 dark:text-zinc-50">Q3-SEO-Audit.pdf</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">2.40 MB</span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
            <svg className="size-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-[10px] font-medium text-white dark:bg-zinc-50 dark:text-zinc-950">
            Preview File
            <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </span>
        </div>
      </div>

      <div className="rounded-xl border border-dashed border-zinc-300 p-4 dark:border-zinc-700">
        <ul className="flex flex-col gap-2">
          {events.map((event, index) => {
            const isLast = index === events.length - 1
            const styles = {
              neutral: { dot: "bg-zinc-300 dark:bg-zinc-600", icon: <div className="size-1.5 rounded-full bg-white dark:bg-zinc-900" /> },
              info: { dot: "bg-blue-500", icon: <div className="size-1.5 rounded-full bg-white" /> },
              success: { dot: "bg-emerald-600", icon: <svg className="size-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg> },
            }[event.tone]

            return (
              <li key={event.type} className="flex gap-2.5">
                <div className="flex flex-col items-center">
                  <span className={`flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-white dark:border-zinc-950 ${styles.dot}`}>
                    {styles.icon}
                  </span>
                  {!isLast && <span className="w-[2px] flex-1 bg-zinc-200 dark:bg-zinc-800 my-1" />}
                </div>
                <div className={`flex-1 flex flex-col justify-center ${!isLast ? "pb-4" : ""}`}>
                  <div className="flex items-center justify-between gap-4 h-4">
                    <p className="text-xs font-medium capitalize leading-none text-zinc-950 dark:text-zinc-50">
                      {event.title}
                    </p>
                    <time className="font-mono text-[10px] font-medium leading-none tracking-wide text-zinc-400 dark:text-zinc-500">
                      {event.time}
                    </time>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
