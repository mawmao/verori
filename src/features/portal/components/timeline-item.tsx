import { ReactNode } from "react"
import { cn } from "@/components/util"

export type TimelineTone = "neutral" | "viewed" | "changes_requested" | "approved"

const TONE_DOT_CLASSES: Record<TimelineTone, string> = {
  neutral: "bg-zinc-400 ring-zinc-100 dark:ring-zinc-800",
  viewed: "bg-amber-500 ring-amber-100 dark:ring-amber-900/30",
  changes_requested: "bg-blue-500 ring-blue-100 dark:ring-blue-900/30",
  approved: "bg-teal-500 ring-teal-100 dark:ring-teal-900/30",
}

interface Props {
  title: string
  timestamp: string
  tone?: TimelineTone
  isLast?: boolean
  children?: ReactNode
}

export function TimelineItem({
  title,
  timestamp,
  tone = "neutral",
  isLast,
  children,
}: Props) {
  return (
    <li className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="flex h-4 items-center justify-center shrink-0">
          <span
            className={cn(
              "size-2 rounded-full ring-4 shrink-0",
              TONE_DOT_CLASSES[tone]
            )}
          />
        </div>
        {!isLast && (
          <span className="w-px flex-1 bg-zinc-100 dark:bg-zinc-800 my-1" />
        )}
      </div>

      <div className={cn("flex-1 min-w-0", !isLast && "pb-4")}>
        <div className="flex items-center justify-between gap-4 min-h-4">
          <p className="text-xs leading-4 font-medium text-zinc-950 dark:text-zinc-50 capitalize">
            {title}
          </p>
          <time className="text-[11px] leading-4 font-mono tabular-nums text-zinc-400 dark:text-zinc-500 whitespace-nowrap shrink-0">
            {timestamp}
          </time>
        </div>
        {children && <div className="mt-1.5">{children}</div>}
      </div>
    </li>
  )
}
