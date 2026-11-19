import { cn } from "@/components/util"
import { FileCard } from "@/components/file-card"

function formatFileSize(bytes?: number | null) {
  if (!bytes) return "—"
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

interface FileEntryProps {
  file: any
  signedUrl: string | null | undefined
  onClick?: () => void
  className?: string
}

export function FileEntry({
  file,
  signedUrl,
  onClick,
  className,
}: FileEntryProps) {
  const isPreviewable =
    file?.mime_type === "application/pdf" ||
    file?.mime_type?.startsWith("image/")

  if (!file || !signedUrl) {
    return (
      <div className="flex items-center justify-center p-4 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/30">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">File unavailable.</p>
      </div>
    )
  }

  return (
    <FileCard
      name={file.name}
      meta={formatFileSize(file.size)}
      mimeType={file.mime_type}
      href={onClick ? undefined : signedUrl}
      actionLabel={isPreviewable ? "Preview File" : "Download File"}
      onClick={onClick}
      size="sm"
      className={cn("bg-white dark:bg-zinc-900/40", className)}
    />
  )
}
