import { ExternalLinkIcon } from "../../../components/icon/external-link"

export function FilePreview({ file, signedUrl }: { file: any, signedUrl: string | null | undefined }) {
  if (!file || !signedUrl) {
    return (
      <div className="aspect-4/3 flex items-center justify-center border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-900/50">
        <p className="text-sm text-zinc-500">File preview unavailable.</p>
      </div>
    )
  }

  const isPdf = file.mime_type === "application/pdf"
  const isImage = file.mime_type.startsWith("image/")

  return (
    <div className="border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl overflow-hidden bg-white dark:bg-zinc-950 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 shrink-0">
        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 truncate">
          {file.name}
        </span>
        <a
          href={signedUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Open full screen"
          className="text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-50 transition-colors shrink-0 ml-4"
        >
          <ExternalLinkIcon className="size-4" />
        </a>
      </div>

      <div className="relative w-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900/30">
        {isPdf && (
          <iframe
            src={signedUrl}
            className="w-full h-[50vh] min-h-[400px]"
            title={file.name}
          />
        )}

        {isImage && (
          <img
            src={signedUrl}
            alt={file.name}
            className="w-full h-auto object-contain max-h-[50vh] min-h-[400px]"
          />
        )}

        {!isPdf && !isImage && (
          <div className="aspect-4/3 flex items-center justify-center w-full">
            <p className="text-sm text-zinc-500">Preview not supported.</p>
          </div>
        )}
      </div>
    </div>
  )
}
