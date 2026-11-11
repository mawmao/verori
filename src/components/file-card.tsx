import { ActionBadge } from "@/components/action-badge"
import { ExternalLinkIcon } from "./icon/external-link"
import { FileTypeIcon } from "./icon/file-type"
import { CheckIcon } from "./icon/check"
import { cn } from "@/components/util"

interface Props {
  name: string
  meta: string
  mimeType?: string
  href?: string
  isDone?: boolean
  size?: "sm" | "default"
  className?: string
}

export function FileCard({
  name,
  meta,
  mimeType = "application/pdf",
  href,
  isDone,
  size = "default",
  className,
}: Props) {
  const isSmall = size === "sm"
  const isInteractive = !!href

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:items-center justify-between verori-border rounded-xl transition-all gap-4",
        isSmall ? "p-3" : "p-4",
        isInteractive && "hover:bg-zinc-50 dark:hover:bg-zinc-900/50",
        className
      )}
    >
      <div className={cn("flex items-center min-w-0", isSmall ? "gap-3" : "gap-4")}>
        <div className={cn("flex shrink-0 items-center justify-center rounded-md bg-zinc-100 text-zinc-500 dark:bg-zinc-800", isSmall ? "size-8" : "size-10")} >
          <FileTypeIcon mimeType={mimeType} className={isSmall ? "size-4" : "size-5"} />
        </div>

        <div className="flex flex-col min-w-0">
          <span className={cn("truncate font-medium text-zinc-950 dark:text-zinc-50", isSmall ? "text-xs" : "text-sm")} >
            {name}
          </span>
          <span className={cn("text-zinc-500 dark:text-zinc-400", isSmall ? "text-[10px]" : "text-xs")} >
            {meta}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-end">
        {isDone && (
          <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white">
            <CheckIcon className="size-2.5" />
          </span>
        )}

        {isInteractive && (
          <ActionBadge
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            icon={<ExternalLinkIcon className="size-4" />}
          >
            Preview File
          </ActionBadge>
        )}
      </div>
    </div>
  )
}
