import { ExternalLinkIcon } from "./icon/external-link"
import { FileTypeIcon } from "./icon/file-type"

export function FileEntry({ file, signedUrl }: { file: any, signedUrl: string | null | undefined }) {
  if (!file || !signedUrl) {
    return (
      <div className="flex items-center justify-center p-6 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl">
        <p className="text-sm text-zinc-500">File unavailable.</p>
      </div>
    )
  }

  return (
    <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 verori-border rounded-xl transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900/50 gap-4">

      <div className="flex items-center gap-4 min-w-0">
        <FileTypeIcon mimeType={file.mime_type} />
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-medium text-zinc-950 dark:text-zinc-50 truncate">
            {file.name}
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <a
          href={signedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-medium text-teal-700 bg-teal-50 hover:bg-teal-100 dark:text-teal-400 dark:bg-teal-900/30 dark:hover:bg-teal-900/50 px-4 py-2 rounded-lg transition-colors"
        >
          <ExternalLinkIcon className="size-4" />
          Preview File
        </a>
      </div>

    </div>
  )
}
