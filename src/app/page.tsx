import { Suspense, type ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/button"
import { CheckIcon } from "@/components/icon/check"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { DoubleCheckIcon } from "@/components/icon/double-check"
import { CopyIcon } from "@/components/icon/copy"
import { FileCard } from "@/components/file-card"
import { TimelineItem } from "@/features/portal/components/timeline-item"
import { cn } from "../components/util"
import { createClient } from "@/lib/supabase/server"
import { connection } from "next/server"


const steps = [
  {
    title: "Create a link",
    desc: "Upload your PDF and add a short note. Verori generates a secure, tokenized link.",
    mock: (
      <div className="flex flex-col gap-3">
        <FileCard name="Q3-SEO-Audit.pdf" meta="2.4 MB · Uploaded" isDone />
        <div className="rounded-lg border border-dashed border-zinc-300 bg-white p-3 text-xs leading-relaxed text-zinc-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-400">
          Final audit for sign-off. Approval unblocks the implementation phase.
        </div>
        <div className="rounded-md bg-zinc-950 px-3 py-2 text-center text-xs font-medium tracking-tight text-white dark:bg-zinc-50 dark:text-zinc-950">
          Create link
        </div>
      </div>
    ),
  },
  {
    title: "Send it anywhere",
    desc: "Paste the link into email or Slack. Your client opens it instantly. No login required.",
    mock: (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3 rounded-lg border border-dashed border-zinc-300 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-950">
          <span className="flex min-w-0 items-center gap-2">
            <CopyIcon className="size-3.5 shrink-0 text-zinc-400" />
            <span className="truncate font-mono text-xs text-zinc-600 dark:text-zinc-300">verori.app/p/7Kp2mfW4</span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 rounded bg-emerald-50 px-1.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
            <CheckIcon className="size-2.5" />
            Copied
          </span>
        </div>
        <ChatBubble
          time="9:00 AM"
          text={
            <>
              Hi John, the audit is ready:{" "}
              <span className="font-mono text-[11px] text-emerald-700 dark:text-emerald-400">verori.app/p/7Kp2mfW4</span>
            </>
          }
        />
      </div>
    ),
  },
  {
    title: "Track the result",
    desc: "See when they opened it and when they approved. Every sign-off is permanently recorded.",
    mock: (
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-3">
          <p className="truncate text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Q3 SEO Audit</p>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
            <CheckIcon className="size-2.5" />
            Approved
          </span>
        </div>
        <ul className="flex flex-col gap-1">
          <TimelineItem title="Viewed by client" timestamp="9:15 AM" tone="info" />
          <TimelineItem title="Approved" timestamp="10:30 AM" tone="success" isLast />
        </ul>
      </div>
    ),
  },
]


export default function LandingPage() {

  return (
    <div className="texture-overlay flex min-h-screen flex-col bg-zinc-50 antialiased dark:bg-zinc-950">
      <SiteHeader>
        <nav className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <Button as="a" href="#how-it-works" variant="ghost" className="w-auto">
              How It Works
            </Button>
            <Button as={Link} href="https://github.com/mawmao/verori" target="_blank" variant="ghost" className="w-auto">
              GitHub
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Suspense fallback={
              <>
                <Button as={Link} href="/login" variant="ghost" className="w-auto">
                  Login
                </Button>
                <Button as={Link} href="/login" className="w-auto px-4 py-2 text-xs">
                  Try for free
                </Button>
              </>
            }>
              <LandingAuthButtons />
            </Suspense>
          </div>
        </nav>
      </SiteHeader>

      <main className="flex w-full flex-1 flex-col">
        <div className="relative isolate w-full overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute inset-0 text-zinc-900/[0.07] dark:text-zinc-50/6"
              style={{
                backgroundImage:
                  "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                backgroundPosition: "center top",
                maskImage: "radial-gradient(ellipse 70% 85% at 50% 0%, #000 25%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 85% at 50% 0%, #000 25%, transparent 100%)",
              }}
            />
          </div>

          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center px-6 pb-18 pt-20 sm:pb-24 sm:pt-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-dashed border-emerald-200 bg-emerald-50/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              Public Beta
            </div>

            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tighter text-zinc-950 sm:text-5xl md:text-6xl dark:text-zinc-50">
              Stop <span className="line-through decoration-emerald-500 decoration-4 md:decoration-[6px] text-zinc-400 dark:text-zinc-500">chasing</span> clients for sign-offs
            </h1>
            <p className="mt-2 max-w-xl text-pretty text-base leading-relaxed tracking-tight text-zinc-500 sm:text-lg dark:text-zinc-400">
              Get a permanent, timestamped record for every deliverable so you can invoice faster
            </p>
            <Suspense fallback={
              <div className="mt-8 flex w-full flex-col items-center gap-1 sm:w-auto">
                <Button as={Link} href="/login" className="w-full sm:w-auto px-16 py-2 text-base">
                  Try Verori
                </Button>
                <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
                  Free to use. No credit card required.
                </span>
              </div>
            }>
              <HeroAuthCTA />
            </Suspense>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 pb-20 sm:pb-28">
          <div className="grid grid-cols-1 items-stretch gap-8 text-left md:grid-cols-2 md:gap-6">
            <div className="flex flex-col">
              <p className="mb-3 flex items-center gap-2 text-base font-semibold uppercase tracking-widest text-zinc-400">
                <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                The Old Way
              </p>
              <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-dashed border-zinc-300 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex items-center gap-3 border-b border-dashed border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <div className="flex size-8 items-center justify-center rounded-full bg-zinc-200 text-[10px] font-bold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                    MA
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Mel Adry</p>
                    <p className="text-[11px] text-zinc-500">Verori</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
                  <ChatBubble time="Mon 9:00 AM" text="Hey Mel, just sent over the final Q3 SEO Audit. Can you sign off today?" />
                  <ChatBubble time="Mon 2:00 PM" seen text="Just bumping this up. Did you get a chance to look at it?" />
                  <ChatBubble time="Tue 10:00 AM" seen text="Hi Mel, checking in again. I need the sign-off on this so I can close out the month and send the invoice..." />
                  <div className="mt-auto flex items-center gap-2 pt-2 font-mono text-[10px] text-zinc-400">
                    <span className="flex gap-1" aria-hidden>
                      {[0, 150, 300].map((delay) => (
                        <span
                          key={delay}
                          className="size-1 rounded-full bg-zinc-400 motion-safe:animate-bounce dark:bg-zinc-600"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </span>
                    Still no reply
                  </div>
                </div>

                <StatBar tone="muted" stats={[["3", "messages"], ["0", "proof"], ["0", "records"]]} />
              </div>
            </div>

            <div className="flex flex-col">
              <p className="mb-3 flex items-center gap-2 text-base font-semibold uppercase tracking-widest text-emerald-500 dark:text-emerald-500">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                The Verori Way
              </p>
              <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-dashed border-2 border-emerald-400/50 dark:border-emerald-700/70  bg-white dark:bg-zinc-950">
                <div className="flex items-center justify-between gap-3 border-b border-dashed border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <p className="truncate text-xs font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Q3 SEO Audit</p>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                    <CheckIcon className="size-2.5" />
                    Approved
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-4 sm:p-5">
                  <FileCard name="Q3-SEO-Audit.pdf" meta="2.4 MB · Uploaded" isDone />
                  <ul className="flex flex-col px-1">
                    <TimelineItem title="Link created" timestamp="9:00 AM" tone="neutral" />
                    <TimelineItem title="Viewed by client" timestamp="9:15 AM" tone="info" />
                    <TimelineItem title="Approved" timestamp="10:30 AM" tone="success" isLast />
                  </ul>
                  <div className="mt-auto flex items-center gap-2 px-3 py-2.5 text-xs rounded-lg border border-dashed border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-800 dark:text-emerald-300">
                    <CheckIcon className="shrink-0" />
                    Sign-off recorded permanently.
                  </div>
                </div>

                <StatBar tone="accent" stats={[["1", "link"], ["1", "record"], ["0", "chasing"]]} />
              </div>
            </div>
          </div>
        </div>

        <section id="how-it-works" className="w-full border-t border-dashed border-zinc-300 dark:border-zinc-800 scroll-mt-16">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 text-left">
            <div className="mb-12 max-w-xl">
              <h2 className="mb-2 text-3xl sm:text-4xl font-semibold tracking-tighter text-zinc-950 dark:text-zinc-50">
                <span className="font-mono text-emerald-600 dark:text-emerald-400">Three</span> steps. {" "}
                <span className="font-mono text-emerald-600 dark:text-emerald-400">Zero</span> friction.
              </h2>
              <p className="text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
                You create one link. Your client clicks it. You get a bulletproof receipt for your invoice.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="flex flex-col rounded-xl border border-dashed border-zinc-300 bg-white p-6 hover:border-zinc-400 motion-safe:transition-all motion-safe:duration-200 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-600"
                >
                  <span className="mb-5 font-mono text-[10px] font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                    Step 0{i + 1}
                  </span>
                  <h3 className="mb-1.5 text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">{step.title}</h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{step.desc}</p>
                  <MockSurface>{step.mock}</MockSurface>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full border-t border-dashed border-zinc-300 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center px-6">
            <h2 className="mb-4 text-2xl font-semibold tracking-tighter text-zinc-950 dark:text-zinc-50">
              Stop chasing. Start shipping.
            </h2>
            <p className="mb-8 text-sm text-zinc-500 dark:text-zinc-400">
              Join Verori and get a permanent, timestamped record for every deliverable.
            </p>
            <Button as={Link} href="/login" className="w-full sm:w-auto px-10 py-3 text-base">
              Try Verori for free
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter
        links={[
          { label: "Terms", href: "/terms" },
          { label: "Privacy", href: "/privacy" },
          { label: "GitHub", href: "https://github.com/mawmao/verori" },
        ]}
      />
    </div>
  )
}

export async function LandingAuthButtons() {
  await connection()
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    return (
      <Button as={Link} href="/dashboard" className="w-auto px-4 py-2 text-xs">
        Go to Dashboard
      </Button>
    )
  }

  return (
    <>
      <Button as={Link} href="/login" variant="ghost" className="w-auto">
        Login
      </Button>
      <Button as={Link} href="/login" className="w-auto ml-2.5 px-6 py-2 text-xs">
        Try for free
      </Button>
    </>
  )
}

export async function HeroAuthCTA() {
  await connection()
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    return (
      <div className="mt-8 flex w-full flex-col items-center gap-1 sm:w-auto">
        <Button as={Link} href="/dashboard" className="w-full sm:w-auto px-16 py-2 text-base">
          Go to Dashboard
        </Button>
      </div>
    )
  }

  return (
    <div className="mt-8 flex w-full flex-col items-center gap-1 sm:w-auto">
      <Button as={Link} href="/login" className="w-full sm:w-auto px-16 py-2 text-base">
        Try Verori
      </Button>
      <span className="text-[11px] text-zinc-400 dark:text-zinc-500" >
        Free to use. No credit card required.
      </span >
    </div>
  )
}


function ChatBubble({ text, time, seen }: { text: ReactNode; time: string; seen?: boolean }) {
  return (
    <div className="max-w-[85%] self-end">
      <div className="rounded-lg rounded-br-sm bg-zinc-200/70 px-3 py-2 text-xs leading-relaxed text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300">
        {text}
      </div>
      <span className="mt-1.5 flex items-center justify-end gap-1.5 font-mono text-[10px] tabular-nums text-zinc-400">
        {time}
        {seen && (
          <span className="inline-flex items-center gap-1 font-sans font-medium text-blue-500">
            <DoubleCheckIcon />
            Seen
          </span>
        )}
      </span>
    </div>
  )
}

function StatBar({ stats, tone }: { stats: [string, string][]; tone: "muted" | "accent" }) {
  return (
    <div className={cn(
      "grid grid-cols-3 divide-x-2 divide-dashed divide-zinc-200 border-t-2 border-dashed border-zinc-200 bg-white text-center dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950",
      tone === "accent" ? "border-emerald-400/50 divide-emerald-400/50 dark:border-emerald-700 dark:divide-emerald-700" : ""
    )}>
      {stats.map(([value, label]) => (
        <div key={label} className="px-2 py-3">
          <p className={`font-mono text-sm font-semibold tabular-nums tracking-tight ${tone === "accent" ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-500 dark:text-zinc-400"}`} >
            {value}
          </p>
          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{label}</p>
        </div>
      ))}
    </div>
  )
}


function MockSurface({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none flex min-h-50 select-none flex-col justify-center rounded-lg border border-dashed border-zinc-200 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      {children}
    </div>
  )
}
