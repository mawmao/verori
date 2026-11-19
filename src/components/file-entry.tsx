import { FileCard } from "@/components/file-card"

function formatFileSize(bytes?: number | null) {
  if (!bytes) return "—"
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

export function FileEntry({
  file,
  signedUrl,
}: {
  file: any
  signedUrl: string | null | undefined
}) {
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
      href={signedUrl}
      actionLabel={isPreviewable ? "Preview File" : "Download File"}
      size="sm"
      className="bg-white dark:bg-zinc-900/40"
    />
  )
}
