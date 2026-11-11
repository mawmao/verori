import { FileCard } from "@/components/file-card"

export function FileEntry({ file, signedUrl }: { file: any, signedUrl: string | null | undefined }) {
  if (!file || !signedUrl) {
    return (
      <div className="flex items-center justify-center p-6 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl">
        <p className="text-sm text-zinc-500">File unavailable.</p>
      </div>
    )
  }

  return (
    <FileCard
      name={file.name}
      meta={`${(file.size / 1024 / 1024).toFixed(2)} MB`}
      mimeType={file.mime_type}
      href={signedUrl}
    />
  )
}
