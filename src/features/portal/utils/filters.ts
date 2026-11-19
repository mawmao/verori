import { Portal, Status } from "../portal.types"

export const getPriority = (status: Status) => {
  if (status === 'changes_requested') return 1
  if (status === 'viewed') return 2
  if (status === 'sent') return 3
  return 4
}

interface FilterAndSortOptions {
  activeStatus: Status | null
  searchQuery: string
  sortBy: "priority" | "recent"
}

export function filterAndSortPortals(
  portals: Portal[],
  options: FilterAndSortOptions
): Portal[] {
  const { activeStatus, searchQuery, sortBy } = options
  const query = searchQuery.trim().toLowerCase()

  const filtered = portals.filter((p) => {
    const matchesStatus = activeStatus ? p.status === activeStatus : true
    const matchesQuery = query
      ? p.title.toLowerCase().includes(query) ||
      p.client_name.toLowerCase().includes(query) ||
      (p.context_note || '').toLowerCase().includes(query)
      : true
    return matchesStatus && matchesQuery
  })

  return [...filtered].sort((a, b) => {
    if (sortBy === 'priority') {
      const priorityA = getPriority(a.status)
      const priorityB = getPriority(b.status)
      if (priorityA !== priorityB) return priorityA - priorityB
      return new Date(a.last_activity_at).getTime() - new Date(b.last_activity_at).getTime()
    }
    return new Date(b.last_activity_at).getTime() - new Date(a.last_activity_at).getTime()
  })
}
