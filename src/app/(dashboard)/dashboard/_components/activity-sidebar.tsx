import { cn } from "@/components/util"
import { RecentActivityRail, RecentActivitySidebar } from "./recent-activity"
import { NeedsAttention } from "./needs-attention"
import { ActivityEvent, Portal } from "@/features/portal/portal.types"

interface Props {
  events: ActivityEvent[]
  portals: Portal[]
  isExpanded: boolean
  onToggle: () => void
  onSelectPortalByToken: (token: string) => void
  onFilterAttention?: () => void
}

export function ActivitySidebar({
  events,
  portals,
  isExpanded,
  onToggle,
  onSelectPortalByToken,
  onFilterAttention,
}: Props) {
  const safeEvents = events ?? []

  return (
    <aside
      className={cn(
        'shrink-0 flex flex-col gap-3 lg:h-full transition-all duration-300 ease-in-out',
        isExpanded ? 'w-full lg:w-80 xl:w-96 opacity-100' : 'w-12 lg:w-14 opacity-90 hover:opacity-100'
      )}
    >
      {isExpanded ? (
        <RecentActivitySidebar
          events={safeEvents}
          onSelectPortalByToken={onSelectPortalByToken}
          onToggle={onToggle}
        />
      ) : (
        <RecentActivityRail
          events={safeEvents}
          onSelectPortalByToken={onSelectPortalByToken}
          onToggle={onToggle}
        />
      )}

      <NeedsAttention
        portals={portals}
        onSelectPortalByToken={onSelectPortalByToken}
        onFilterAttention={onFilterAttention}
        onToggle={onToggle}
        isExpanded={isExpanded}
        totalEventCount={safeEvents.length}
      />
    </aside>
  )
}
