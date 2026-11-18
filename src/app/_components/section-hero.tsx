import Link from "next/link";
import { Button } from "@/components/button";
import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server"
import { connection } from "next/server"
import { CheckIcon } from "@/components/icon/check";

export function HeroSection() {
  return (
    <section className="relative isolate w-full overflow-hidden pt-20 sm:pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 text-zinc-900/[0.07] dark:text-zinc-50/6"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            backgroundPosition: "center top",
            maskImage: "radial-gradient(ellipse 80% 60% at 20% 0%, #000 25%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 20% 0%, #000 25%, transparent 100%)",
          }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 sm:pb-28 md:flex-row md:items-center md:gap-16">
        <div className="flex w-full flex-col items-start text-left md:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-dashed border-emerald-200 bg-emerald-50/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
            </span>
            Public Beta
          </div>

          <h1 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-[1.08] tracking-tighter text-zinc-950 sm:text-5xl md:text-6xl dark:text-zinc-50">
            Stop <span className="line-through decoration-emerald-500 decoration-4 md:decoration-[6px] text-zinc-400 dark:text-zinc-500">chasing</span> clients for sign-offs.
          </h1>

          <p className="mt-4 max-w-md text-pretty text-base leading-relaxed tracking-tight text-zinc-500 sm:text-lg dark:text-zinc-400">
            Get a permanent, timestamped record for every deliverable. No client login required. Invoice faster with bulletproof proof of delivery.
          </p>

          <Suspense fallback={
            <div className="mt-8 flex w-full flex-col items-start gap-2 sm:w-auto">
              <Button as={Link} href="/login" className="w-full sm:w-auto px-8 py-2.5 text-sm">
                Try Verori
              </Button>
              <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
                Free to use. No credit card required.
              </span>
            </div>
          }>
            <AuthCTA />
          </Suspense>
        </div>

        <div className="w-full md:w-1/2">
          <Mock />
        </div>
      </div>
    </section>
  )
}


async function AuthCTA() {
  await connection()
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    return (
      <div className="mt-8 flex w-full flex-col items-start gap-2 sm:w-auto">
        <Button as={Link} href="/dashboard" className="w-full sm:w-auto px-8 py-2.5 text-sm">
          Go to Dashboard
        </Button>
      </div>
    )
  }

  return (
    <div className="mt-8 flex w-full flex-col items-start gap-2 sm:w-auto">
      <Button as={Link} href="/login" className="w-full sm:w-auto px-8 py-2.5 text-sm">
        Try Verori
      </Button>
      <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
        Free to use. No credit card required.
      </span>
    </div>
  )
}


function Mock() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-emerald-500/20 to-blue-500/20 blur-2xl dark:from-emerald-500/10 dark:to-blue-500/10" />

      <div className="relative rounded-xl border border-zinc-200 bg-white p-5 shadow-2xl shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-zinc-950/50">
        <div className="mb-5 flex items-center gap-2 border-b border-dashed border-zinc-200 pb-4 dark:border-zinc-800">
          <div className="flex gap-1.5">
            <div className="size-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="size-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="size-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="flex-1 rounded-md bg-zinc-100 px-3 py-1 text-center text-[10px] font-mono text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
            verori.app/p/7Kp2mfW4
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Q3 SEO Audit</p>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
              <CheckIcon className="size-2.5" />
              Approved
            </span>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-dashed border-zinc-300 bg-zinc-50/50 p-3 dark:border-zinc-700 dark:bg-zinc-900/30">
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-zinc-200 text-zinc-500 dark:bg-zinc-800">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="truncate text-xs font-medium text-zinc-950 dark:text-zinc-50">Q3-SEO-Audit.pdf</span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400">2.40 MB</span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded bg-zinc-950 px-2 py-1 text-[9px] font-medium text-white dark:bg-zinc-50 dark:text-zinc-950">
              Preview
              <svg className="size-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </span>
          </div>

          <div className="rounded-lg border border-dashed border-zinc-300 p-3 dark:border-zinc-700">
            <ul className="flex flex-col gap-2">
              {[
                { title: "Link created", time: "9:00 AM", dot: "bg-zinc-300 dark:bg-zinc-600", icon: <div className="size-1 rounded-full bg-white dark:bg-zinc-900" /> },
                { title: "Viewed by client", time: "9:15 AM", dot: "bg-blue-500", icon: <div className="size-1 rounded-full bg-white" /> },
                { title: "Approved", time: "10:30 AM", dot: "bg-emerald-600", icon: <CheckIcon className="size-2 text-white" /> },
              ].map((event, i, arr) => {
                const isLast = i === arr.length - 1
                return (
                  <li key={event.title} className="flex gap-2">
                    <div className="flex flex-col items-center">
                      <span className={`flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-white dark:border-zinc-950 ${event.dot}`}>
                        {event.icon}
                      </span>
                      {!isLast && <span className="w-[1.5px] flex-1 bg-zinc-200 dark:bg-zinc-800 my-0.5" />}
                    </div>
                    <div className={`flex-1 flex flex-col justify-center ${!isLast ? "pb-2" : ""}`}>
                      <div className="flex items-center justify-between gap-2 h-3.5">
                        <p className="text-[11px] font-medium capitalize leading-none text-zinc-700 dark:text-zinc-300">
                          {event.title}
                        </p>
                        <time className="font-mono text-[9px] font-medium leading-none tracking-wide text-zinc-400 dark:text-zinc-500">
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
      </div>
    </div>
  )
}
