"use client"

import { useState } from "react"
import { Button } from "@/components/button"
import { CheckIcon } from "@/components/icon/check"
import { EditIcon } from "@/components/icon/edit"
import { approvePortal, requestChanges } from "../../actions/client"

interface Props {
  token: string
  portalId: string
  isConsultant: boolean
}

type ActionStep = "idle" | "confirm_approve" | "request_changes"

export function PortalActions({ token, portalId, isConsultant }: Props) {
  const [step, setStep] = useState<ActionStep>("idle")
  const [reason, setReason] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleConfirmApprove = async () => {
    setError(null)
    setIsLoading(true)
    try {
      await approvePortal(token, portalId)
    } catch {
      setError("Could not record approval. Please try again.")
      setIsLoading(false)
    }
  }

  const handleRequestChanges = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!reason.trim()) return
    setError(null)
    setIsLoading(true)
    try {
      await requestChanges(token, portalId, reason.trim())
    } catch {
      setError("Could not submit feedback. Please try again.")
      setIsLoading(false)
    }
  }

  if (isConsultant) {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-center sm:text-left">
        <div>
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Ready for client sign-off
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Your client will see <span className="font-medium text-zinc-700 dark:text-zinc-300">Approve</span> and <span className="font-medium text-zinc-700 dark:text-zinc-300">Request Changes</span> here.
          </p>
        </div>
        <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500 shrink-0">
          No login required
        </span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2.5 w-full">
      {error && (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
          {error}
        </p>
      )}

      {step === "confirm_approve" ? (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-dashed border-emerald-300 bg-emerald-50/60 px-4 py-3 dark:border-emerald-800/70 dark:bg-emerald-950/20">
          <div>
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Confirm sign-off?
            </p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Records a permanent timestamped approval for this deliverable.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              type="button"
              variant="outline"
              disabled={isLoading}
              onClick={() => {
                setError(null)
                setStep("idle")
              }}
              className="w-auto px-3.5 py-2 text-xs"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleConfirmApprove}
              isLoading={isLoading}
              className="w-auto px-4 py-2 text-xs bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-zinc-950"
            >
              <CheckIcon className="size-3.5" />
              Confirm Approval
            </Button>
          </div>
        </div>
      ) : step === "request_changes" ? (
        <form onSubmit={handleRequestChanges} className="flex flex-col gap-2.5 w-full">
          <div className="flex items-center justify-between">
            <label htmlFor="reason" className="font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              What needs to be changed?
            </label>
            <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
              Sent directly to your consultant
            </span>
          </div>

          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Briefly describe the edits or adjustments needed..."
            rows={2}
            disabled={isLoading}
            className="w-full p-3 text-sm border border-zinc-300 dark:border-zinc-700 rounded-xl bg-zinc-50/70 dark:bg-zinc-900/50 text-zinc-950 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950/10 dark:focus:ring-zinc-50/10 focus:border-zinc-400 dark:focus:border-zinc-600 resize-none transition-all placeholder:text-zinc-400"
            autoFocus
          />

          <div className="flex items-center justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              disabled={isLoading}
              onClick={() => {
                setError(null)
                setStep("idle")
              }}
              className="w-auto px-3.5 py-2 text-xs"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!reason.trim()}
              isLoading={isLoading}
              className="w-auto px-4 py-2 text-xs"
            >
              Submit Change Request
            </Button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row gap-2.5 w-full">
            <Button
              type="button"
              onClick={() => setStep("confirm_approve")}
              className="flex-1 py-2.5 text-sm font-medium shadow-sm"
            >
              <CheckIcon className="size-4" />
              Approve Deliverable
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep("request_changes")}
              className="flex-1 py-2.5 text-sm font-medium"
            >
              <EditIcon className="size-4" />
              Request Changes
            </Button>
          </div>
          <p className="text-center text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            No account needed · Your response is timestamped automatically
          </p>
        </div>
      )}
    </div>
  )
}
