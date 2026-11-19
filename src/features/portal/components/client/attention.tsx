import { timeAgo } from "@/lib/date";
import { Portal } from "../../portal.types";

export function AttentionRow({ portal, onClick }: { portal: Portal; onClick: () => void }) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="w-full text-left flex items-center justify-between gap-3 px-3 py-2 rounded-lg border border-blue-200/70 bg-blue-50/40 hover:bg-blue-50 dark:border-blue-900/40 dark:bg-blue-950/20 dark:hover:bg-blue-950/35 transition-colors"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="size-1.5 rounded-full bg-blue-500 shrink-0" />
          <div className="min-w-0">
            <p className="text-xs font-medium text-zinc-950 dark:text-zinc-50 truncate">{portal.client_name}</p>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">{portal.title}</p>
          </div>
        </div>
        <span className="text-[11px] font-mono tabular-nums text-blue-700 dark:text-blue-400 shrink-0">{timeAgo(portal.last_activity_at)}</span>
      </button>
    </li>
  )
}
