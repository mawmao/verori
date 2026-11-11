import { after } from "next/server"
import { getPortalByToken, trackPortalView } from "@/features/portal/dal"
import { notFound } from "next/navigation"
import { getOptionalUser } from "@/lib/dal"
import { CheckCircleIcon } from "@/components/icon/check-circle"
import { EditIcon } from "@/components/icon/edit"
import { ReviewDeliverable } from "./review-modal"

interface Props {
  params: Promise<{ token: string }>
}

export async function PortalContent({ params }: Props) {
  const { token } = await params

  const portal = await getPortalByToken(token)
  if (!portal) {
    notFound()
  }

  const user = await getOptionalUser()
  const isConsultant = user?.id === portal.user_id

  if (portal.status === "sent" && !isConsultant) {
    after(async () => await trackPortalView(portal.id))
  }

  const isApproved = portal.status === "approved"
  const isChangesRequested = portal.status === "changes_requested"
  const lastEvent = portal.activity_event[portal.activity_event.length - 1]

  return (
    <div className="flex flex-col gap-8 w-full">

      <div className="text-center space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {portal.title}
        </h1>
        <p className="text-sm text-zinc-500">
          Prepared for <span className="font-medium text-zinc-900 dark:text-zinc-100">{portal.client_name}</span>
        </p>
      </div>

      {isConsultant && (
        <div className="p-3 text-center text-xs font-medium text-amber-600 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/50 rounded-lg">
          You are viewing this as the consultant. Activity will not be tracked.
        </div>
      )}

      {portal.context_note && (
        <div className="p-5 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl">
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed text-center italic">
            "{portal.context_note}"
          </p>
        </div>
      )}

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-3 text-center">
          Deliverable
        </h2>

        {isApproved ? (
          <div className="flex items-center justify-center gap-4 p-4 border border-dashed border-teal-300 dark:border-teal-800 rounded-xl bg-teal-50/50 dark:bg-teal-900/10">
            <CheckCircleIcon className="size-6 text-teal-600 dark:text-teal-400" />
            <div className="text-left">
              <p className="text-sm font-medium text-teal-800 dark:text-teal-300">Approved</p>
              <p className="text-xs text-teal-600 dark:text-teal-400">
                {new Date(lastEvent.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        ) : isChangesRequested ? (
          <div className="flex flex-col gap-3 p-4 border border-dashed border-amber-300 dark:border-amber-800 rounded-xl bg-amber-50/50 dark:bg-amber-900/10">
            <div className="flex items-center justify-center gap-4">
              <EditIcon className="size-6 text-amber-600 dark:text-amber-400" />
              <div className="text-left">
                <p className="text-sm font-medium text-amber-800 dark:text-amber-300">Changes Requested</p>
                <p className="text-xs text-amber-600 dark:text-amber-400">
                  {new Date(lastEvent.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            <p className="text-sm text-amber-800 dark:text-amber-200 bg-amber-100/50 dark:bg-amber-950/50 p-3 rounded-lg text-left">
              "{lastEvent.metadata?.reason}"
            </p>
          </div>
        ) : (
          <ReviewDeliverable
            file={portal.file?.[0]}
            signedUrl={portal.signedUrl!}
            token={token}
            portalId={portal.id}
          />
        )}
      </div>
    </div>
  )
}

export function PortalSkeleton() {
  return (
    <div className="flex flex-col gap-8 w-full animate-pulse">
      <div className="text-center space-y-3 flex flex-col items-center">
        <div className="h-9 w-3/4 sm:w-1/2 bg-skeleton rounded-md" />
        <div className="h-4 w-48 bg-skeleton rounded-md" />
      </div>

      <div className="p-5 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 flex flex-col items-center gap-2">
        <div className="h-3 w-full bg-skeleton rounded-md" />
        <div className="h-3 w-4/5 bg-skeleton rounded-md" />
      </div>

      <div className="space-y-3">
        <div className="h-5 w-24 bg-skeleton rounded-md mx-auto" />
        <div className="flex items-center gap-4 p-4 verori-border rounded-xl">
          <div className="size-10 bg-skeleton rounded-lg" />
          <div className="space-y-2 flex-1">
            <div className="h-4 w-48 bg-skeleton rounded-md" />
            <div className="h-3 w-16 bg-skeleton rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
