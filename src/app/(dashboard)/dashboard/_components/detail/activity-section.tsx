import { getPortalEvents, getPortalMetadata } from "@/features/portal"
import { ActivityLog } from "@/features/portal/components/activity-log"

export const PortalActivitySection = Object.assign(
  async function PortalActivitySection({ id }: { id: string }) {
    const portal = await getPortalMetadata(id)
    const events = await getPortalEvents(id)

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-3">
            Context Note
          </h2>
          <div className="p-4 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-950/50">
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap">
              {portal?.context_note || "No context note provided."}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-3">
            Activity Ledger
          </h2>
          <ActivityLog events={events} />
        </div>
      </div>
    )
  },
  {
    Skeleton: () => {
      return (
        <div className="space-y-6 animate-pulse">
          <div>
            <div className="h-5 w-28 bg-skeleton rounded-md mb-3" />
            <div className="h-24 w-full bg-skeleton border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl" />
          </div>
          <div>
            <div className="h-5 w-28 bg-skeleton rounded-md mb-3" />
            <div className="h-48 w-full bg-skeleton border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl" />
          </div>
        </div>
      )
    }
  }
)
