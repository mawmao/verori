import { TimeIcon } from "@/components/icon/time"
import { TimelineItem, TimelineTone } from "./timeline-item"

export function ActivityLog({ events }: { events: any[] }) {
  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 text-center">
        <div className="bg-zinc-100 dark:bg-zinc-800 p-2.5 rounded-full mb-2">
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
    <div className="p-4 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl">
      <ul className="flex flex-col gap-2">
        {events.map((event, index) => {
          const isLast = index === events.length - 1
          const date = new Date(event.created_at)

          let tone: TimelineTone = "neutral"
          if (event.type === "approved") tone = "success"
          if (event.type === "changes_requested") tone = "warning"
          if (event.type === "viewed") tone = "info"

          return (
            <TimelineItem
              key={event.id}
              title={event.type.replace(/_/g, " ")}
              timestamp={date.toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
              })}
              tone={tone}
              isLast={isLast}
            >
              {event.metadata?.reason && (
                <div className="text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900 border-l-2 border-amber-500 py-1.5 pl-2 pr-3 rounded-r-md">
                  "{event.metadata.reason}"
                </div>
              )}
            </TimelineItem>
          )
        })}
      </ul>
    </div>
  )
}
