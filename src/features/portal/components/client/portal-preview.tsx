"use client"

import { useEffect, useState } from "react"
import { FileTypeIcon } from "@/components/icon/file-type"
import { ActionBadge } from "@/components/action-badge"
import { Button } from "@/components/button"
import { DownloadIcon } from "@/components/icon/download"
import { ExternalLinkIcon } from "@/components/icon/external-link"
import { CloseIcon } from "@/components/icon/close"
import { SearchIcon } from "@/components/icon/search"

interface Props {
  file: any
  signedUrl: string
}

function formatSize(bytes?: number) {
  if (!bytes) return "Unknown size"
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

export function PortalPreview({ file, signedUrl }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (!isExpanded) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsExpanded(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isExpanded])

  if (!file || !signedUrl) {
    return (
      <div className="flex-1 min-h-36 flex items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-white p-6 text-center dark:border-zinc-800 dark:bg-zinc-950/50">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">Deliverable file unavailable.</p>
      </div>
    )
  }

  const isPdf = file.mime_type === "application/pdf"
  const isImage = file.mime_type?.startsWith("image/")
  const isPreviewable = isPdf || isImage
  const formattedSize = formatSize(file.size)

  if (!isPreviewable) {
    return (
      <div className="relative isolate flex-1 min-h-48 overflow-hidden rounded-2xl border border-dashed border-zinc-300/90 bg-zinc-50/50 px-6 py-7 dark:border-zinc-800 dark:bg-zinc-900/25 flex flex-col items-center justify-center text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-2xl dark:bg-emerald-400/5"
        />

        <div className="relative flex items-center justify-center">
          <span aria-hidden className="absolute size-14 rounded-full border border-dashed border-zinc-300/80 dark:border-zinc-700/80" />
          <FileTypeIcon
            mimeType={file.mime_type}
            className="relative size-7 text-zinc-700 dark:text-zinc-200"
          />
        </div>

        <h3 className="mt-8 max-w-md truncate text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {file.name}
        </h3>

        <div className="mt-1.5 flex items-center gap-2 font-mono text-[11px] tabular-nums text-zinc-500 dark:text-zinc-400">
          <span>{formattedSize}</span>
          <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">/</span>
          <span className="text-emerald-700 dark:text-emerald-400">Direct download</span>
        </div>

        <p className="mt-4 max-w-sm text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          Browser preview isn&apos;t supported for this format. Download the file to inspect it before signing off.
        </p>

        <Button
          as="a"
          href={signedUrl}
          download={file.name}
          variant="outline"
          className="mt-5 w-auto px-5 py-2 text-xs font-medium rounded-md"
        >
          <DownloadIcon className="size-3.5" />
          Download Deliverable
        </Button>
      </div>
    )
  }

  return (
    <>
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="shrink-0 flex items-center justify-between gap-3 border-b border-zinc-200/80 bg-zinc-50/70 px-3.5 py-2 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-white border border-zinc-200 text-zinc-500 dark:bg-zinc-900 dark:border-zinc-800">
              <FileTypeIcon mimeType={file.mime_type} className="size-3.5" />
            </div>
            <p className="truncate text-xs font-medium text-zinc-900 dark:text-zinc-100">
              {file.name}
            </p>
            <span className="hidden sm:inline font-mono text-[10px] tabular-nums text-zinc-400 dark:text-zinc-500 shrink-0">
              · {formattedSize}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2 py-1 text-[11px] font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
              title="Inspect full screen"
            >
              <SearchIcon className="size-3" />
              <span>Expand</span>
            </button>

            <a
              href={signedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2 py-1 text-[11px] font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
              title="Open original file in new tab"
            >
              <ExternalLinkIcon className="size-3" />
              <span className="hidden sm:inline">Open</span>
            </a>

            <a
              href={signedUrl}
              download={file.name}
              className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white p-1 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors"
              title="Download file"
              aria-label="Download file"
            >
              <DownloadIcon className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="flex-1 min-h-[160px] h-56 sm:h-64 lg:h-auto overflow-hidden bg-zinc-100/80 dark:bg-zinc-900/50 relative">
          {isPdf ? (
            <iframe
              src={`${signedUrl}#view=FitH`}
              className="w-full h-full border-0"
              title={file.name}
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="group absolute inset-0 w-full h-full flex items-center justify-center p-3 cursor-zoom-in focus:outline-none"
            >
              <img
                src={signedUrl}
                alt={file.name}
                className="max-w-full max-h-full object-contain rounded shadow-sm transition-transform duration-200 group-hover:scale-[1.01]"
              />
            </button>
          )}
        </div>
      </div>

      {isExpanded && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Full preview of ${file.name}`}
          className="fixed inset-0 z-50 flex flex-col bg-zinc-950/95 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="flex items-center justify-between gap-4 border-b border-zinc-800 px-4 py-3 sm:px-6 text-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="truncate text-xs sm:text-sm font-medium">{file.name}</span>
              <span className="font-mono text-[11px] text-zinc-500 shrink-0">{formattedSize}</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={signedUrl}
                download={file.name}
                className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-800 transition-colors"
              >
                <DownloadIcon className="size-3.5" />
                Download
              </a>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition-colors"
                aria-label="Close full preview"
              >
                <CloseIcon className="size-4" />
                <span className="hidden sm:inline">Close</span>
              </button>
            </div>
          </div>

          <div
            className="flex-1 min-h-0 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsExpanded(false)}
          >
            {isPdf ? (
              <iframe
                src={signedUrl}
                title={file.name}
                className="w-full h-full max-w-5xl rounded-lg bg-white shadow-2xl border-0"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={signedUrl}
                alt={file.name}
                className="max-w-full max-h-full object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}
