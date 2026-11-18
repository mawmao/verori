import { getRecentActivity } from "@/features/portal/dal"
import { RelativeTime } from "@/components/relative-time"

export async function RecentActivity() {
  const events = await getRecentActivity()

  if (!events || events.length === 0) {
    return (
      <div className="p-5 border border-zinc-200 rounded-xl bg-white h-full flex flex-col justify-center dark:border-zinc-800 dark:bg-zinc-950/50">
        <h3 className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 mb-3">
          Recent Activity
        </h3>
        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          No recent activity.
        </p>
      </div>
    )
  }

  return (
    <div className="p-5 border border-zinc-200 rounded-xl bg-white h-full flex flex-col dark:border-zinc-800 dark:bg-zinc-950/50">
      <h3 className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 mb-4 shrink-0">
        Recent Activity
      </h3>
      <ul className="flex flex-col flex-1 min-h-0 overflow-y-auto">
        {events.map((event: any, index) => (
          <li
            key={event.id}
            className={`flex gap-3 py-3 ${index !== events.length - 1 ? 'border-b border-zinc-100 dark:border-zinc-800/50' : ''}`}
          >
            <div className="flex flex-col items-center pt-1.5">
              <span className="size-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
            </div>

            <div className="flex-1 min-w-0 flex flex-col gap-0.5">
              <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50 truncate">
                {event.portal.client_name}
              </p>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 capitalize">
                  {event.type.replace(/_/g, ' ')}
                </span>
                <span className="text-zinc-300 dark:text-zinc-700">·</span>
                <RelativeTime
                  className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500"
                  date={event.created_at}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
