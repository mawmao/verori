import { Portal, Status } from "../portal.types"
import { STATUS_ORDER, STATUSES } from "../portal.constants"
import { SearchInput } from "./client/search-input"
import { Button } from "@/components/button"
import { cn } from "@/components/util"

interface PortalStatsProps {
  portals: Portal[]
  activeStatus: Status | null
  onSelectStatus: (status: Status | null) => void
  searchQuery: string
  onSearchChange: (q: string) => void
  sortBy: 'priority' | 'recent'
  onSortChange: (sort: 'priority' | 'recent') => void
}


export function PortalStats({
  portals,
  activeStatus,
  onSelectStatus,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: PortalStatsProps) {
  if (portals.length === 0) return null

  const counts = STATUS_ORDER.reduce((acc, s) => {
    acc[s] = portals.filter((p) => p.status === s).length
    return acc
  }, {} as Record<Status, number>)

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <StatusTabs
        activeStatus={activeStatus}
        onSelectStatus={onSelectStatus}
        counts={counts}
        totalCount={portals.length}
      />

      <div className="flex items-center gap-2 shrink-0">
        <SearchInput searchQuery={searchQuery} onSearchChange={onSearchChange} />
        <Button
          onClick={() => onSortChange(sortBy === 'priority' ? 'recent' : 'priority')}
          className="w-auto"
          variant="outline"
          title="Toggle sort order"
        >
          Sort: {sortBy === 'priority' ? 'Priority' : 'Newest'}
        </Button>
      </div>
    </div>
  )
}


interface StatusTabsProps {
  activeStatus: Status | null
  onSelectStatus: (status: Status | null) => void
  counts: Record<Status, number>
  totalCount: number
}

function StatusTabs({ activeStatus, onSelectStatus, counts, totalCount }: StatusTabsProps) {
  const tabs: Array<{ value: Status | null; label: string; count: number }> = [
    { value: null, label: 'All', count: totalCount },
    ...STATUSES.map((s) => ({
      value: s.value,
      label: s.label,
      count: counts[s.value],
    })),
  ]

  return (
    <nav
      aria-label="Filter by status"
      className="flex items-center gap-1 p-1 rounded-lg bg-zinc-100/80 dark:bg-zinc-900 verori-border overflow-x-auto"
    >
      {tabs.map((tab) => {
        const active = tab.value === null ? !activeStatus : activeStatus === tab.value
        return (
          <button
            key={tab.label}
            type="button"
            onClick={() => onSelectStatus(tab.value)}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'flex items-center shrink-0 whitespace-nowrap text-xs px-3 py-1.5 rounded-md transition-all font-medium',
              active
                ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-zinc-50'
                : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
            )}
          >
            {tab.label}
            <span
              className={cn(
                'ml-1.5 font-mono text-[11px] tabular-nums',
                active
                  ? 'text-zinc-500 dark:text-zinc-400'
                  : 'text-zinc-400 dark:text-zinc-500'
              )}
            >
              {tab.count}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
