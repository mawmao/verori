import { ReactNode } from "react"
import { cn } from "@/components/util"
import { CheckIcon } from "@/components/icon/check"
import { EditIcon } from "@/components/icon/edit"

export type TimelineTone = "neutral" | "info" | "success" | "warning"

interface Props {
  title: string
  timestamp: string
  tone?: TimelineTone
  isLast?: boolean
  children?: ReactNode
}

export function TimelineItem({ title, timestamp, tone = "neutral", isLast, children }: Props) {
  const styles = {
    neutral: {
      dot: "bg-zinc-300 dark:bg-zinc-600",
      icon: <div className="size-1.5 rounded-full bg-white dark:bg-zinc-900" />
    },
    info: {
      dot: "bg-blue-500",
      icon: <div className="size-1.5 rounded-full bg-white" />
    },
    success: {
      dot: "bg-teal-500",
      icon: <CheckIcon className="size-2.5 text-white" />
    },
    warning: {
      dot: "bg-amber-500",
      icon: <EditIcon className="size-2.5 text-white" />
    }
  }[tone]

  return (
    <li className="flex gap-2.5">
      <div className="flex flex-col items-center">
        <span className={cn("flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-white dark:border-zinc-950", styles.dot)}>
          {styles.icon}
        </span>
        {!isLast && (
          <span className="w-[2px] flex-1 bg-zinc-200 dark:bg-zinc-800 my-1" />
        )}
      </div>
      <div className={cn("flex-1 flex flex-col", !isLast && "pb-4")}>
        <div className="flex items-center justify-between gap-4 h-4">
          <p className="text-xs font-medium text-zinc-950 dark:text-zinc-50 capitalize leading-none">
            {title}
          </p>
          <time className="text-[10px] font-medium tracking-wide text-zinc-400 dark:text-zinc-500 font-mono leading-none">
            {timestamp}
          </time>
        </div>
        {children && <div className="mt-2">{children}</div>}
      </div>
    </li>
  )
}
