"use client"

import { useState } from "react"
import { Button } from "@/components/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/dialog"
import { approvePortal, requestChanges } from "../../actions/client"

export function ApprovalActions({ token, portalId }: { token: string, portalId: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [reason, setReason] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleApprove = async () => {
    setIsLoading(true)
    await approvePortal(token, portalId)
    setIsLoading(false)
  }

  const handleRequestChanges = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!reason.trim()) return
    setIsLoading(true)
    await requestChanges(token, portalId, reason)
    setIsLoading(false)
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Button onClick={handleApprove} isLoading={isLoading} className="flex-1 py-3! text-sm font-semibold">
        Approve Deliverable
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger as={Button} variant="outline" className="flex-1 py-3! text-sm font-semibold">
          Request Changes
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <form onSubmit={handleRequestChanges} className="p-6">
            <h2 className="text-lg font-semibold mb-2">Request Changes</h2>
            <p className="text-sm text-zinc-500 mb-4">
              Briefly explain what needs to be updated before you can approve this work.
            </p>

            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="e.g., Please update the Q3 numbers on page 4..."
              className="w-full h-32 p-3 text-sm verori-border rounded-lg bg-transparent mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              required
            />

            <div className="flex justify-end gap-3">
              <Button type="button" variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={!reason.trim()} isLoading={isLoading}>
                Send Feedback
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
