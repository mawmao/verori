import { PortalRow } from "./client/portal-row"
import { Portal, Status } from "../portal.types"

interface Props {
  portals: Portal[],
  activeStatus: Status | null
}

const getPriority = (status: Status) => {
  if (status === 'changes_requested') return 1
  if (status === 'viewed') return 2
  if (status === 'sent') return 3
  return 4
}

export const PortalList = Object.assign(
  function PortalList({ portals, activeStatus }: Props) {
    const filtered = activeStatus
      ? portals.filter(p => p.status === activeStatus)
      : portals

    const sorted = [...filtered].sort((a, b) => {
      const priorityA = getPriority(a.status)
      const priorityB = getPriority(b.status)
      if (priorityA !== priorityB) return priorityA - priorityB
      return new Date(a.last_activity_at).getTime() - new Date(b.last_activity_at).getTime()
    })

    if (sorted.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center border border-zinc-200 rounded-xl py-16 text-center bg-white dark:border-zinc-800 dark:bg-zinc-950/50">
          <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">Nothing here yet</p>
        </div>
      )
    }

    return (
      <div className="flex flex-col h-full border border-zinc-200 rounded-xl bg-white shadow-sm shadow-zinc-200/40 overflow-hidden dark:border-zinc-800 dark:bg-zinc-950/50 dark:shadow-none animate-in fade-in duration-300">
        <ul className="flex flex-col flex-1 min-h-0 overflow-y-auto">
          {sorted.map((portal) => (
            <PortalRow key={portal.id} portal={portal} />
          ))}
        </ul>
      </div>
    )
  },
  {
    Skeleton: () => (
      <div className="border border-zinc-200 rounded-xl bg-white overflow-hidden dark:border-zinc-800 dark:bg-zinc-950/50">
        <ul className="flex flex-col">
          {[...Array(4)].map((_, i) => (
            <li key={i} className="flex items-center justify-between p-5 border-b border-zinc-100 last:border-b-0 dark:border-zinc-800 animate-pulse">
              <div className="flex flex-col gap-1.5">
                <div className="h-4 w-40 bg-zinc-100 dark:bg-zinc-800 rounded-md" />
                <div className="h-3 w-24 bg-zinc-100 dark:bg-zinc-800 rounded-md" />
              </div>
              <div className="flex items-center gap-4">
                <div className="h-6 w-20 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
                <div className="h-3 w-16 bg-zinc-100 dark:bg-zinc-800 rounded-md hidden sm:block" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
)
