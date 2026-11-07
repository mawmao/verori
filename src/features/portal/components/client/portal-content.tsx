import { after } from "next/server"
import { getPortalByToken, trackPortalView } from "@/features/portal/dal"
import { FilePreview } from "@/features/portal/components/file-preview"
import { notFound } from "next/navigation"
import { ApprovalActions } from "@/features/portal/components/client/approval-actions"
import { verifySession } from "@/lib/dal"

interface Props {
  params: Promise<{ token: string }>
}

export async function PortalContent({ params }: Props) {
  const { token } = await params

  const portal = await getPortalByToken(token)
  if (!portal) {
    notFound()
  }

  const { user } = await verifySession()

  const isConsultant = user?.id === portal.user_id

  if (portal.status === "sent" && !isConsultant) {
    after(async () => await trackPortalView(portal.id))
  }

  const isApproved = portal.status === "approved"
  const isChangesRequested = portal.status === "changes_requested"
  const lastEvent = portal.activity_event[portal.activity_event.length - 1]

  return (
    <div className="h-full flex flex-col gap-6">

      <div className="text-center space-y-3 shrink-0">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {portal.title}
        </h1>
        <p className="text-sm text-zinc-500">
          Prepared for <span className="font-medium text-zinc-900 dark:text-zinc-100">{portal.client_name}</span>
        </p>
      </div>

      {isConsultant && (
        <div className="p-3 text-center text-xs font-medium text-amber-600 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/50 rounded-lg shrink-0">
          You are viewing this as the consultant. Activity will not be tracked.
        </div>
      )}

      {portal.context_note && (
        <div className="p-5 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl shrink-0">
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed text-center italic">
            "{portal.context_note}"
          </p>
        </div>
      )}

      <div className="flex-1 min-h-0">
        <FilePreview file={portal.file?.[0]} signedUrl={portal.signedUrl} />
      </div>

      <div className="pt-6 border-t border-dashed border-zinc-300 dark:border-zinc-700 shrink-0">
        {isApproved ? (
          <div className="text-center p-6 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-900/50 rounded-xl">
            <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-300 mb-1">Approved</h3>
            <p className="text-sm text-teal-600 dark:text-teal-400">
              You approved this deliverable on {new Date(lastEvent.created_at).toLocaleDateString()}.
            </p>
          </div>
        ) : isChangesRequested ? (
          <div className="text-center p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/50 rounded-xl">
            <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-1">Changes Requested</h3>
            <p className="text-sm text-amber-600 dark:text-amber-400 mb-4">
              You requested changes on {new Date(lastEvent.created_at).toLocaleDateString()}.
            </p>
            <div className="text-sm text-amber-800 dark:text-amber-200 bg-amber-100/50 dark:bg-amber-950/50 p-4 rounded-lg inline-block text-left">
              "{lastEvent.metadata?.reason}"
            </div>
          </div>
        ) : (
          <ApprovalActions token={token} portalId={portal.id} />
        )}
      </div>
    </div>
  )
}

export function PortalSkeleton() {
  return (
    <div className="h-full flex flex-col gap-6 animate-pulse">
      <div className="text-center space-y-3 flex flex-col items-center shrink-0">
        <div className="h-9 w-3/4 sm:w-1/2 bg-skeleton rounded-md" />
        <div className="h-4 w-48 bg-skeleton rounded-md" />
      </div>

      <div className="p-5 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 flex flex-col items-center gap-2 shrink-0">
        <div className="h-3 w-full bg-skeleton rounded-md" />
        <div className="h-3 w-4/5 bg-skeleton rounded-md" />
      </div>

      <div className="border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl overflow-hidden bg-white dark:bg-zinc-950 flex flex-col flex-1 min-h-0">
        <div className="flex items-center justify-between px-4 py-3 border-b border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 shrink-0">
          <div className="h-3 w-32 bg-skeleton rounded-md" />
          <div className="size-4 bg-skeleton rounded-sm" />
        </div>
        <div className="flex-1 min-h-0 w-full bg-skeleton" />
      </div>

      <div className="pt-6 border-t border-dashed border-zinc-300 dark:border-zinc-700 shrink-0">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="h-[46px] flex-1 bg-skeleton rounded-md" />
          <div className="h-[46px] flex-1 bg-skeleton rounded-md" />
        </div>
      </div>
    </div>
  )
}
