export function ActivityLog({ events }: { events: any[] }) {
  if (events.length === 0) {
    return (
      <div className="p-6 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl text-center">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          No activity recorded yet.
        </p>
      </div>
    )
  }

  return (
    <div className="p-4 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl">
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={event.id} className="relative pl-6">
            {index !== events.length - 1 && (
              <span className="absolute left-1.5 top-2 bottom-[-16px] w-px bg-zinc-200 dark:bg-zinc-800" />
            )}
            <span className="absolute left-0 top-1.5 size-3 rounded-full border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-950" />

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50 capitalize">
                {event.type.replace("_", " ")}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {new Date(event.created_at).toLocaleString()}
              </p>

              {event.metadata?.reason && (
                <div className="mt-2 p-3 bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/50 rounded-md">
                  <p className="text-sm text-red-800 dark:text-red-200">
                    "{event.metadata.reason}"
                  </p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
