import { FileEntry } from "@/components/file-entry"
import { TimelineItem } from "@/features/portal/components/timeline-item"


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
    { title: "created", timestamp: "Nov 18, 9:00 AM", tone: "neutral" as const },
    { title: "viewed", timestamp: "Nov 18, 9:15 AM", tone: "viewed" as const },
    { title: "approved", timestamp: "Nov 18, 10:30 AM", tone: "approved" as const },
  ]

  return (
    <div className="space-y-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-xl shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-zinc-950/50">
      <div className="space-y-2">
        <h3 className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Context Note</h3>
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/50">
          <p className="text-sm italic leading-relaxed text-zinc-700 dark:text-zinc-300">
            "Final audit for sign-off. Approval unblocks the implementation phase."
          </p>
        </div>
      </div>
      <FileEntry file={{ name: "Q3-SEO-Audit.pdf", size: 2516582, mime_type: "application/pdf" }} signedUrl="#the-record" />

      <div className="p-4 rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/40">
        <ul className="flex flex-col">
          {events.map((event, index) => (
            <TimelineItem
              key={event.title}
              title={event.title}
              timestamp={event.timestamp}
              tone={event.tone}
              isLast={index === events.length - 1}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
