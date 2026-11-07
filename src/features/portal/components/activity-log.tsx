import { CheckCircleIcon } from "@/components/icon/check-circle"
import { EditIcon } from "@/components/icon/edit"
import { TimeIcon } from "@/components/icon/time"

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

  const getEventStyle = (type: string) => {
    switch (type) {
      case "approved":
        return { color: "bg-teal-500", icon: <CheckCircleIcon className="size-2.5 text-white" /> }
      case "changes_requested":
        return { color: "bg-amber-500", icon: <EditIcon className="size-2.5 text-white" /> }
      case "viewed":
        return { color: "bg-blue-500", icon: <div className="size-1.5 rounded-full bg-white" /> }
      default:
        return { color: "bg-zinc-300 dark:bg-zinc-600", icon: <div className="size-1.5 rounded-full bg-white dark:bg-zinc-900" /> }
    }
  }

  return (
    <div className="p-4 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl">
      <ul className="flex flex-col">
        {events.map((event, index) => {
          const style = getEventStyle(event.type)
          const isLast = index === events.length - 1
          const date = new Date(event.created_at)

          return (
            <li key={event.id} className="flex gap-2.5">
              <div className="flex flex-col items-center">
                <span className={`flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-white dark:border-zinc-950 ${style.color}`}>
                  {style.icon}
                </span>
                {!isLast && (
                  <span className="w-[2px] flex-1 bg-zinc-200 dark:bg-zinc-800 my-1" />
                )}
              </div>
              <div className={`flex-1 flex flex-col ${!isLast ? "pb-4" : ""}`}>
                <div className="flex items-center justify-between gap-4 h-4">
                  <p className="text-xs font-medium text-zinc-950 dark:text-zinc-50 capitalize leading-none">
                    {event.type.replace(/_/g, " ")}
                  </p>
                  <time className="text-[10px] font-medium tracking-wide text-zinc-400 dark:text-zinc-500 font-mono leading-none">
                    {date.toLocaleString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit'
                    })}
                  </time>
                </div>
                {event.metadata?.reason && (
                  <div className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900 border-l-2 border-amber-500 py-1.5 pl-2 pr-3 rounded-r-md">
                    "{event.metadata.reason}"
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
