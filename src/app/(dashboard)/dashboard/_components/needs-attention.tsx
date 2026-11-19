import { cn } from "@/components/util"
import { Portal } from "@/features/portal"
import { AttentionRow } from "@/features/portal/components/client/attention"
import { useMemo } from "react"

const MAX_ATTENTION_ITEMS = 2

interface Props {
  portals: Portal[]
  onSelectPortalByToken: (token: string) => void
  onFilterAttention?: () => void
  onToggle: () => void
  isExpanded: boolean
  totalEventCount: number
}

export function NeedsAttention({
  portals,
  onSelectPortalByToken,
  onFilterAttention,
  onToggle,
  isExpanded,
  totalEventCount,
}: Props) {
  const attentionPortals = useMemo(() => {
    return [...portals]
      .filter((p) => p.status === 'changes_requested')
      .sort((a, b) => new Date(a.last_activity_at).getTime() - new Date(b.last_activity_at).getTime())
  }, [portals])

  const visibleAttention = attentionPortals.slice(0, MAX_ATTENTION_ITEMS)

  if (isExpanded) {
    return (
      <div className="flex-1 min-h-0 border border-zinc-200 rounded-xl bg-white dark:border-zinc-800 dark:bg-zinc-950/50 p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Needs Attention</h4>
            <span className="text-[11px] font-mono tabular-nums text-blue-700 dark:text-blue-400 font-medium">{attentionPortals.length}</span>
          </div>
          {attentionPortals.length > 0 && onFilterAttention && (
            <button
              type="button"
              onClick={onFilterAttention}
              className="text-[11px] font-medium text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Filter list
            </button>
          )}
        </div>

        {attentionPortals.length === 0 ? (
          <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">All deliverables are clear — no pending change requests.</p>
        ) : (
          <ul className="flex flex-col gap-1.5">
            {visibleAttention.map((portal) => (
              <AttentionRow
                key={portal.id}
                portal={portal}
                onClick={() => onSelectPortalByToken(portal.share_token)}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className="border border-zinc-200 rounded-xl bg-white dark:border-zinc-800 dark:bg-zinc-950/50 py-3 flex flex-col items-center gap-2 shrink-0 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
      title={`${attentionPortals.length} portals need attention · ${totalEventCount} recent events`}
    >
      <div className="flex flex-col items-center gap-1">
        <span className={cn('size-2 rounded-full', attentionPortals.length > 0 ? 'bg-blue-500' : 'bg-teal-500')} />
        <span className="text-[10px] font-mono tabular-nums font-semibold text-zinc-700 dark:text-zinc-300">{attentionPortals.length}</span>
      </div>
      <div className="w-4 h-px bg-zinc-100 dark:bg-zinc-800" />
      <span className="text-[10px] font-mono tabular-nums text-zinc-400 dark:text-zinc-500">{totalEventCount}</span>
    </button>
  )
}
