"use client"

import { useActionState, useState, useTransition } from "react"
import Link from "next/link"
import { joinWaitlist, saveWaitlistDeliverable, WaitlistState } from "../actions"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { CheckIcon } from "@/components/icon/check"
import { cn } from "@/components/util"

const initialState: WaitlistState = { status: "idle" }

const DELIVERABLE_OPTIONS = [
  "SEO / Marketing Audits",
  "Brand & Design Assets",
  "Strategy Decks & PDFs",
  "Copy & Content Drafts",
  "Web / Dev Milestones",
]

export function WaitlistForm() {
  const [state, formAction, isPending] = useActionState(joinWaitlist, initialState)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [customType, setCustomType] = useState("")
  const [isCustomOpen, setIsCustomOpen] = useState(false)
  const [isSaving, startTransition] = useTransition()

  const handleSelectDeliverable = (value: string) => {
    if (!state.signupId || selectedType === value) return
    setSelectedType(value)
    setIsCustomOpen(false)
    startTransition(async () => {
      await saveWaitlistDeliverable(state.signupId!, value)
    })
  }

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!state.signupId || !customType.trim()) return
    const trimmed = customType.trim()
    setSelectedType(trimmed)
    startTransition(async () => {
      await saveWaitlistDeliverable(state.signupId!, trimmed)
    })
  }

  if (state.status === "success" || state.status === "already_joined") {
    const isDuplicate = state.status === "already_joined"

    return (
      <div className="rounded-xl border border-dashed border-emerald-300 bg-emerald-50/50 p-4 sm:p-6 text-center dark:border-emerald-800/70 dark:bg-emerald-950/20">
        <div className="mx-auto mb-4 flex size-11 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm dark:bg-emerald-500 dark:text-zinc-950">
          <CheckIcon className="size-5" />
        </div>

        <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {isDuplicate ? "You're already on the list" : "You're on the waitlist"}
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
          {isDuplicate ? (
            <>
              We already have <span className="font-mono text-xs text-zinc-900 dark:text-zinc-100">{state.email}</span> reserved. Keep an eye on your inbox for your early-access invite.
            </>
          ) : (
            <>
              We&apos;ve reserved a spot for{" "}
              <span className="font-mono text-xs text-zinc-900 dark:text-zinc-100">{state.email}</span>.
              You&apos;ll get an email as soon as your account is ready.
            </>
          )}
        </p>

        {!isDuplicate && state.signupId && (
          <div className="mt-6 pt-5 border-t border-dashed border-emerald-200/80 dark:border-emerald-800/50 text-left">
            <div className="flex items-center justify-between gap-2 mb-3">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Optional · What do you send clients?
              </p>
              {selectedType && (
                <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400">
                  {isSaving ? "Saving..." : "Saved ✓"}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {DELIVERABLE_OPTIONS.map((option) => {
                const active = selectedType === option
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleSelectDeliverable(option)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                      active
                        ? "border-emerald-600 bg-emerald-600 text-white dark:border-emerald-500 dark:bg-emerald-500 dark:text-zinc-950"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700"
                    )}
                  >
                    {option}
                  </button>
                )
              })}

              <button
                type="button"
                onClick={() => setIsCustomOpen((prev) => !prev)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                  isCustomOpen || (selectedType && !DELIVERABLE_OPTIONS.includes(selectedType))
                    ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950"
                    : "border-dashed border-zinc-300 bg-transparent text-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-100"
                )}
              >
                Other...
              </button>
            </div>

            {isCustomOpen && (
              <form onSubmit={handleCustomSubmit} className="mt-3 flex gap-2">
                <Input
                  type="text"
                  value={customType}
                  onChange={(e) => setCustomType(e.target.value)}
                  placeholder="e.g. Monthly retainer reports, Figma handoffs..."
                  maxLength={100}
                  autoFocus
                  className="h-9 flex-1 rounded-sm border border-zinc-300 bg-white px-3 text-xs text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                />
                <Button type="submit" disabled={!customType.trim() || isSaving} className="h-9 w-auto px-3.5 text-xs">
                  Save
                </Button>
              </form>
            )}
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex size-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              <CheckIcon className="size-3" />
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              You're officially a <span className="text-emerald-600 dark:text-emerald-400">founding member</span>.
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <Link href="/templates" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Free templates
            </Link>
            <span className="text-zinc-300 dark:text-zinc-700">·</span>
            <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <input type="hidden" name="source" value="waitlist_page" />

      <div className="flex flex-col sm:flex-row gap-2.5">
        <Input
          type="email"
          name="email"
          required
          autoFocus
          placeholder="you@domain.com"
          aria-label="Email address"
          disabled={isPending}
          className="h-11 flex-1 rounded-sm border border-zinc-300 bg-white px-3.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:border-zinc-400"
        />

        <Button
          type="submit"
          isLoading={isPending}
          className="h-11 w-full sm:w-auto px-6 text-sm shrink-0"
        >
          Join Waitlist
        </Button>
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-xs text-red-600 dark:text-red-400">
          {state.message}
        </p>
      )}

      <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
        No spam. One email when your invite opens.
      </p>
    </form>
  )
}
