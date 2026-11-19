import { Portal, Status } from "../portal.types"
import { filterAndSortPortals } from "../utils/filters"
import { PortalRow } from "./client/portal-row"
import { CreatePortalDialog } from "./create-portal-dialog"

interface PortalListProps {
  portals: Portal[]
  activeStatus: Status | null
  searchQuery: string
  sortBy: "priority" | "recent"
  onResetFilters: () => void
  onCreateNew?: () => void
}

export function PortalList({
  portals,
  activeStatus,
  searchQuery,
  sortBy,
  onResetFilters,
  onCreateNew,
}: PortalListProps) {
  const sorted = filterAndSortPortals(portals, { activeStatus, searchQuery, sortBy })

  if (sorted.length === 0) {
    const isFiltered = Boolean(activeStatus || searchQuery.trim())
    return (
      <EmptyPortalState
        isFiltered={isFiltered}
        onResetFilters={onResetFilters}
        onCreateNew={onCreateNew}
      />
    )
  }

  const grouped = sorted.reduce((acc, portal) => {
    const client = portal.client_name || 'Uncategorized'
    if (!acc[client]) acc[client] = []
    acc[client].push(portal)
    return acc
  }, {} as Record<string, Portal[]>)

  const groups = Object.entries(grouped)

  return (
    <div className="flex flex-col h-full border border-zinc-200 rounded-xl bg-white overflow-hidden dark:border-zinc-800 dark:bg-zinc-950/50">
      <div className="flex-1 min-h-0 overflow-y-auto divide-y divide-zinc-200 dark:divide-zinc-800">
        {groups.map(([clientName, clientPortals]) => (
          <section key={clientName}>
            <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-2.5 bg-zinc-50/95 backdrop-blur-sm dark:bg-zinc-900/95 border-b border-zinc-100 dark:border-zinc-800">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {clientName}
              </h3>
              <span className="text-[11px] font-mono tabular-nums text-zinc-400 dark:text-zinc-500">
                {clientPortals.length} {clientPortals.length === 1 ? 'item' : 'items'}
              </span>
            </div>

            <ul className="divide-y divide-zinc-100 dark:divide-zinc-800/70">
              {clientPortals.map((portal) => <PortalRow key={portal.share_token} portal={portal} />)}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}

interface EmptyPortalStateProps {
  isFiltered: boolean
  onResetFilters: () => void
  onCreateNew?: () => void
}

function EmptyPortalState({ isFiltered, onResetFilters, onCreateNew }: EmptyPortalStateProps) {
  return (
    <div className="flex flex-col items-center justify-center verori-border rounded-xl py-16 px-6 text-center bg-white dark:bg-zinc-950/50 h-full">
      <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
        {isFiltered ? 'No matching deliverables' : 'No portals yet'}
      </p>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-xs">
        {isFiltered
          ? 'Try clearing your active status filter or search query.'
          : 'Create your first client portal to send a deliverable for sign-off.'}
      </p>

      {isFiltered ? (
        <button
          type="button"
          onClick={onResetFilters}
          className="mt-4 px-4 py-2 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          Reset filters
        </button>
      ) : onCreateNew ? (
        <button
          type="button"
          onClick={onCreateNew}
          className="mt-4 px-4 py-2 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          Create Portal
        </button>
      ) : (
        <div className="mt-4">
          <CreatePortalDialog />
        </div>
      )}
    </div>
  )
}
