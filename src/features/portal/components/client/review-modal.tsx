"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/dialog"
import { Button } from "@/components/button"
import { CloseIcon } from "@/components/icon/close"
import { FileTypeIcon } from "@/components/icon/file-type"
import { ExternalLinkIcon } from "@/components/icon/external-link"
import { CheckCircleIcon } from "@/components/icon/check-circle"
import { EditIcon } from "@/components/icon/edit"
import { approvePortal, requestChanges } from "../../actions/client"
import { DownloadIcon } from "@/components/icon/download"

interface Props {
  file: any
  signedUrl: string
  token: string
  portalId: string
}

export function ReviewDeliverable({ file, signedUrl, token, portalId }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [showReason, setShowReason] = useState(false)
  const [reason, setReason] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const isPdf = file.mime_type === "application/pdf"
  const isImage = file.mime_type.startsWith("image/")
  const isPreviewable = isPdf || isImage

  const formattedSize = file.size ? (file.size / 1024 / 1024).toFixed(2) + " MB" : "Unknown size"

  const handleApprove = async () => {
    setIsLoading(true)
    await approvePortal(token, portalId)
    setIsLoading(false)
    setIsOpen(false)
  }

  const handleRequestChanges = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!reason.trim()) return
    setIsLoading(true)
    await requestChanges(token, portalId, reason)
    setIsLoading(false)
    setIsOpen(false)
  }

  const ActionFooter = () => (
    <div className="p-4 sm:p-5 border-t border-dashed border-zinc-300 dark:border-zinc-700 shrink-0">
      {showReason ? (
        <form onSubmit={handleRequestChanges} className="flex flex-col gap-4 w-full">
          <div className="space-y-2">
            <label htmlFor="reason" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              What needs to be changed?
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="e.g., Please update the Q3 numbers on page 4..."
              className="w-full h-24 p-3 text-sm border border-zinc-300 dark:border-zinc-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-zinc-500/50 focus:border-zinc-500 resize-none transition-all"
              autoFocus
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button type="button" variant="ghost" onClick={() => setShowReason(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!reason.trim()} isLoading={isLoading} className="px-6!">
              Send Feedback
            </Button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button
            onClick={handleApprove}
            isLoading={isLoading}
            className="flex-1 py-3 text-sm font-semibold items-center"
          >
            <CheckCircleIcon className="size-4" />
            Approve Deliverable
          </Button>
          <Button
            variant="outline"
            onClick={() => setShowReason(true)}
            className="flex-1 py-3 text-sm font-semibold hover:bg-amber-50 hover:text-amber-700 hover:border-amber-300 dark:hover:bg-amber-950/30 dark:hover:text-amber-400 dark:hover:border-amber-900 transition-colors"
          >
            <EditIcon className="size-4" />
            Request Changes
          </Button>
        </div>
      )}
    </div>
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger as="button" className="cursor-pointer w-full group flex items-center justify-between p-4 verori-border rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all text-left">
        <div className="flex items-center gap-4 min-w-0">
          <FileTypeIcon mimeType={file.mime_type} />
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium text-zinc-950 dark:text-zinc-50 truncate">
              {file.name}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {isPreviewable ? "Click to review and approve" : "Click to download and approve"}
            </span>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-400 shrink-0 ml-4 bg-teal-50 dark:bg-teal-900/30 px-3 py-1.5 rounded-md group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50 transition-colors">
          {isPreviewable ? "Review" : "Download"}
          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </DialogTrigger>

      {isPreviewable ? (
        <DialogContent className="max-w-5xl w-full h-[90vh] p-0 overflow-hidden">
          <div className="flex flex-col h-full">

            <div className="flex items-center justify-between p-4 border-b border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <FileTypeIcon mimeType={file.mime_type} />
                <span className="text-sm font-medium text-zinc-950 dark:text-zinc-50 truncate">
                  {file.name}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={signedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in new tab"
                  className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors px-3 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <ExternalLinkIcon className="size-3.5" />
                  <span className="hidden sm:inline">Open in new tab</span>
                </a>
                <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 mx-1 hidden sm:block" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Close"
                >
                  <CloseIcon className="size-5 text-zinc-600 dark:text-zinc-400" />
                </button>
              </div>
            </div>

            <div className="flex-1 min-h-0 bg-zinc-100 dark:bg-zinc-900/30 relative flex items-center justify-center">
              {isPdf && (
                <iframe src={signedUrl} className="w-full h-full absolute inset-0" title={file.name} />
              )}
              {isImage && (
                <div className="absolute inset-0 p-4 flex items-center justify-center">
                  <img
                    src={signedUrl}
                    alt={file.name}
                    className="max-w-full max-h-full object-contain shadow-md bg-white"
                  />
                </div>
              )}
            </div>

            <ActionFooter />
          </div>
        </DialogContent>
      ) : (
        <DialogContent className="max-w-md w-full p-0 overflow-hidden">
          <div className="flex flex-col">

            <div className="flex items-center justify-between p-4 border-b border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 shrink-0">
              <span className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                Review Deliverable
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Close"
              >
                <CloseIcon className="size-5 text-zinc-600 dark:text-zinc-400" />
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col items-center text-center">
              <div className="mb-4 scale-125">
                <FileTypeIcon mimeType={file.mime_type} />
              </div>

              <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50 break-all px-4">
                {file.name}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {formattedSize}
              </p>

              <div className="mt-4 mb-6 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <span className="relative flex size-1.5">
                  <span className="relative inline-flex rounded-full size-1.5 bg-zinc-400"></span>
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Preview not available
                </span>
              </div>

              <a
                href={signedUrl}
                download
                className="flex items-center justify-center gap-1.5 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 px-6 py-2.5 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <DownloadIcon />
                Download to Review
              </a>
            </div>

            <ActionFooter />
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
