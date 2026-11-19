import { ChevronRightDoubleIcon } from "@/components/icon/chevron-right-double"
import { ActivityRow, ActivityDot } from "@/features/portal/components/client/activity"
import { ActivityEvent } from "@/features/portal/portal.types"

const MAX_VISIBLE_EVENTS = 5

interface RecentActivitySidebarProps {
  events: ActivityEvent[]
  onSelectPortalByToken: (token: string) => void
  onToggle: () => void
}

export function RecentActivitySidebar({ events, onSelectPortalByToken, onToggle }: RecentActivitySidebarProps) {
  const visibleEvents = events.slice(0, MAX_VISIBLE_EVENTS)
  const hiddenCount = Math.max(0, events.length - MAX_VISIBLE_EVENTS)

  return (
    <div className="shrink-0 overflow-hidden border border-zinc-200 rounded-xl bg-white dark:border-zinc-800 dark:bg-zinc-950/50">
      <div className="p-4 flex flex-col">
        <div className="mb-2 shrink-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Live Activity</h3>
              {events.length > 0 && (
                <span className="text-[11px] font-mono tabular-nums text-zinc-400 dark:text-zinc-500">
                  {visibleEvents.length}/{events.length}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={onToggle}
              className="-mr-1.5 -my-1 p-1.5 rounded-lg transition-colors text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 dark:hover:text-zinc-50 dark:hover:bg-zinc-800 shrink-0"
              aria-label="Collapse activity sidebar"
              title="Collapse"
            >
              <ToggleIcon isExpanded={true} />
            </button>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Latest client views, feedback, and sign-offs.</p>
        </div>

        {events.length === 0 ? (
          <div className="py-6 flex items-center justify-center">
            <p className="text-xs text-zinc-400 dark:text-zinc-500">No recent activity.</p>
          </div>
        ) : (
          <>
            <ul className="flex flex-col overflow-hidden pl-3 pr-2 -mr-2">
              {visibleEvents.map((event, index) => (
                <ActivityRow
                  key={event.id}
                  event={event}
                  isLast={index === visibleEvents.length - 1}
                  onClick={() => onSelectPortalByToken(event.portal.share_token)}
                />
              ))}
            </ul>
            {hiddenCount > 0 && (
              <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400 dark:text-zinc-500">
                <span>+{hiddenCount} earlier {hiddenCount === 1 ? 'event' : 'events'}</span>
                <span className="font-mono tabular-nums text-[10px]">Latest {MAX_VISIBLE_EVENTS}</span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

interface RecentActivityRailProps {
  events: ActivityEvent[]
  onSelectPortalByToken: (token: string) => void
  onToggle: () => void
}

export function RecentActivityRail({ events, onSelectPortalByToken, onToggle }: RecentActivityRailProps) {
  const visibleEvents = events.slice(0, MAX_VISIBLE_EVENTS)
  const hiddenCount = Math.max(0, events.length - MAX_VISIBLE_EVENTS)

  return (
    <div className="shrink-0 overflow-hidden border border-zinc-200 rounded-xl bg-white dark:border-zinc-800 dark:bg-zinc-950/50">
      <div className="flex flex-col items-center py-3">
        <button
          type="button"
          onClick={onToggle}
          className="shrink-0 p-1.5 rounded-lg transition-colors text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 dark:hover:text-zinc-50 dark:hover:bg-zinc-800"
          aria-label="Expand activity sidebar"
          title="Expand"
        >
          <ToggleIcon isExpanded={false} />
        </button>
        <div className="w-5 h-px bg-zinc-100 dark:bg-zinc-800 my-3 shrink-0" />

        {events.length === 0 ? (
          <div className="py-4 flex items-center justify-center">
            <div className="size-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 w-full overflow-hidden py-1">
            {visibleEvents.map((event, index) => (
              <ActivityDot
                key={event.id}
                event={event}
                isLast={index === visibleEvents.length - 1}
                onClick={() => onSelectPortalByToken(event.portal.share_token)}
              />
            ))}
            {hiddenCount > 0 && (
              <span className="mt-1 text-[10px] font-mono tabular-nums text-zinc-400 dark:text-zinc-500" title={`${hiddenCount} earlier events`}>
                +{hiddenCount}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}


function ToggleIcon({ isExpanded }: { isExpanded: boolean }) {
  return isExpanded ? <ChevronRightDoubleIcon /> : <ChevronRightDoubleIcon className="rotate-180" />
}
