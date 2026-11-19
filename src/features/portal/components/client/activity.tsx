import { timeAgo } from "@/lib/date";
import { ActivityEvent } from "../../portal.types";
import { cn } from "@/components/util";

export function getEventVisuals(type: string) {
  switch (type) {
    case 'viewed':
      return { label: 'Viewed', dotClass: 'bg-amber-500 ring-amber-100 dark:ring-amber-900/30' }
    case 'changes_requested':
      return { label: 'Changes requested', dotClass: 'bg-blue-500 ring-blue-100 dark:ring-blue-900/30' }
    case 'approved':
      return { label: 'Approved', dotClass: 'bg-teal-500 ring-teal-100 dark:ring-teal-900/30' }
    case 'sent':
    case 'created':
    default:
      return { label: type.replace(/_/g, ' '), dotClass: 'bg-zinc-400 ring-zinc-100 dark:ring-zinc-800' }
  }
}

export function ActivityRow({ event, isLast, onClick }: { event: ActivityEvent; isLast: boolean; onClick: () => void }) {
  const visuals = getEventVisuals(event.type)
  return (
    <li className="relative shrink-0">
      <button
        type="button"
        onClick={onClick}
        className="w-full text-left flex gap-3 py-2 group rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors -ml-3 -mr-2 px-3"
      >
        <div className="flex flex-col items-center shrink-0 pt-1.5">
          <div className={cn('relative z-10 size-2 shrink-0 rounded-full ring-4 transition-transform group-hover:scale-110', visuals.dotClass)} />
          {!isLast && <div className="w-px flex-1 bg-zinc-100 dark:bg-zinc-800 mt-1.5" />}
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-0.5">
          <div className="flex items-baseline justify-between gap-2">
            <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50 truncate">{event.portal.client_name}</p>
            <span className="text-[11px] font-mono tabular-nums text-zinc-400 dark:text-zinc-500 shrink-0">{timeAgo(event.created_at)}</span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate capitalize">{visuals.label} · {event.portal.title}</p>
        </div>
      </button>
    </li>
  )
}

export function ActivityDot({ event, isLast, onClick }: { event: ActivityEvent; isLast: boolean; onClick: () => void }) {
  const visuals = getEventVisuals(event.type)
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex items-center justify-center shrink-0"
      title={`${event.portal.client_name} · ${visuals.label}`}
    >
      {!isLast && <div className="absolute top-2 bottom-[-12px] w-px bg-zinc-100 dark:bg-zinc-800 -z-10" />}
      <div className={cn('relative size-2 rounded-full ring-4 transition-transform duration-150 cursor-pointer group-hover:scale-125', visuals.dotClass)} />
    </button>
  )
}
