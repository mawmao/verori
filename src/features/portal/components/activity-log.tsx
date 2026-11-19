// activity-log.tsx
import { TimeIcon } from "@/components/icon/time"
import { TimelineItem, TimelineTone } from "./timeline-item"

export function ActivityLog({ events }: { events: any[] }) {
  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl bg-white/50 dark:bg-zinc-900/30 text-center">
        <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-full mb-2">
          <TimeIcon className="size-4 text-zinc-400" />
        </div>
        <p className="text-xs font-medium text-zinc-950 dark:text-zinc-50">
          No activity yet
        </p>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
          Events will appear here once the client interacts.
        </p>
      </div>
    )
  }

  return (
    <div className="p-4 verori-border rounded-xl bg-white dark:bg-zinc-900/40">
      <ul className="flex flex-col">
        {events.map((event, index) => {
          const isLast = index === events.length - 1
          const date = new Date(event.created_at)

          let tone: TimelineTone = "neutral"
          if (event.type === "viewed") tone = "viewed"
          if (event.type === "changes_requested") tone = "changes_requested"
          if (event.type === "approved") tone = "approved"

          return (
            <TimelineItem
              key={event.id}
              title={event.type.replace(/_/g, " ")}
              timestamp={date.toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })}
              tone={tone}
              isLast={isLast}
            >
              {event.metadata?.reason && (
                <p className="text-xs text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800 px-3 py-2 rounded-lg">
                  {event.metadata.reason}
                </p>
              )}
            </TimelineItem>
          )
        })}
      </ul>
    </div>
  )
}
