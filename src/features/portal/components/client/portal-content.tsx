import { after } from "next/server"
import { getPortalByToken, trackPortalView } from "@/features/portal/dal"
import { notFound } from "next/navigation"
import { getOptionalUser } from "@/lib/dal"
import { CheckIcon } from "@/components/icon/check"
import { EditIcon } from "@/components/icon/edit"
import { UserIcon } from "@/components/icon/user"
import { CalendarIcon } from "@/components/icon/calendar"
import { StatusBadge } from "@/features/portal/components/status-badge"
import { PortalActions } from "./portal-actions"
import { PortalPreview } from "./portal-preview"

interface Props {
  params: Promise<{ token: string }>
}

export async function PortalContent({ params }: Props) {
  const { token } = await params
  const portal = await getPortalByToken(token)
  if (!portal) notFound()

  const user = await getOptionalUser()
  const isConsultant = user?.id === portal.user_id

  if (portal.status === "sent" && !isConsultant) {
    after(async () => await trackPortalView(portal.id))
  }

  const isApproved = portal.status === "approved"
  const isChangesRequested = portal.status === "changes_requested"
  const lastEvent = portal.activity_event?.[portal.activity_event.length - 1]
  const file = portal.file?.[0]

  const sentDate = new Date(portal.created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <div className="flex flex-col gap-3 w-full lg:h-full min-h-0">
      {isConsultant && (
        <div className="shrink-0 flex items-center justify-between gap-3 rounded-xl border border-dashed border-amber-300 bg-amber-50/80 px-3.5 py-2 text-xs text-amber-800 dark:border-amber-800/70 dark:bg-amber-950/30 dark:text-amber-300">
          <span className="font-medium">Consultant preview — views will not be logged.</span>
          <span className="font-mono text-[10px] uppercase tracking-wider opacity-75">Preview</span>
        </div>
      )}

      <div className="flex flex-col lg:flex-1 min-h-0 rounded-xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-zinc-950/60 overflow-hidden">
        <div className="shrink-0 p-5 sm:px-6 sm:py-5 border-b border-dashed border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="inline-flex items-center gap-1.5 font-medium text-zinc-700 dark:text-zinc-300">
                <UserIcon className="size-3.5 text-zinc-400" />
                {portal.client_name}
              </span>
              <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 font-mono tabular-nums text-[11px]">
                <CalendarIcon className="size-3.5 text-zinc-400" />
                Sent {sentDate}
              </span>
            </div>
          </div>

          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 text-balance">
            {portal.title}
          </h1>

          {portal.context_note && (
            <div className="mt-3 rounded-xl border border-zinc-200/80 bg-zinc-50/80 px-3.5 py-2.5 dark:border-zinc-800 dark:bg-zinc-900/50">
              <p className="text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 line-clamp-2">
                <span className="mr-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 not-italic">
                  Note:
                </span>
                {portal.context_note}
              </p>
            </div>
          )}
        </div>

        {isApproved && (
          <div className="shrink-0 border-b border-dashed border-teal-200 bg-teal-50/60 px-5 py-3.5 sm:px-6 dark:border-teal-900/60 dark:bg-teal-950/20">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white">
                  <CheckIcon className="size-3.5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-teal-900 dark:text-teal-200">
                    Deliverable Approved
                  </p>
                  <p className="text-xs text-teal-700 dark:text-teal-400">
                    Sign-off recorded{lastEvent?.created_at ? ` on ${new Date(lastEvent.created_at).toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })}` : ""}.
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-widest text-teal-700/70 dark:text-teal-400/70">
                Record Locked
              </span>
            </div>
          </div>
        )}

        {isChangesRequested && (
          <div className="shrink-0 border-b border-dashed border-blue-200 bg-blue-50/60 px-5 py-3.5 sm:px-6 dark:border-blue-900/60 dark:bg-blue-950/20 space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                <EditIcon className="size-3.5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                  Changes Requested
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-400">
                  Feedback submitted{lastEvent?.created_at ? ` on ${new Date(lastEvent.created_at).toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })}` : ""}.
                </p>
              </div>
            </div>
            {lastEvent?.metadata?.reason && (
              <div className="ml-10 rounded-lg border border-blue-200/80 bg-white/80 px-3 py-2 text-xs sm:text-sm text-zinc-800 dark:border-blue-900/50 dark:bg-zinc-900/70 dark:text-zinc-200 line-clamp-3">
                {lastEvent.metadata.reason}
              </div>
            )}
          </div>
        )}

        <div className="flex-1 min-h-0 flex flex-col p-5 sm:px-6 sm:py-4 bg-zinc-50/40 dark:bg-zinc-900/20">
          <div className="shrink-0 mb-2 flex items-center justify-between">
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Deliverable
            </h2>
          </div>

          <PortalPreview file={file} signedUrl={portal.signedUrl!} />
        </div>

        {!isApproved && !isChangesRequested && (
          <div className="shrink-0 border-t border-zinc-200 bg-white p-4 sm:px-6 dark:border-zinc-800 dark:bg-zinc-950">
            <PortalActions
              token={token}
              portalId={portal.id}
              isConsultant={isConsultant}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export function PortalSkeleton() {
  return (
    <div className="w-full lg:h-full rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 animate-pulse flex flex-col gap-4">
      <div className="space-y-2 border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-4">
        <div className="h-4 w-44 bg-zinc-200 dark:bg-zinc-800 rounded" />
        <div className="h-7 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
        <div className="h-12 w-full bg-zinc-100 dark:bg-zinc-900 rounded-xl" />
      </div>
      <div className="flex-1 min-h-48 w-full bg-zinc-100 dark:bg-zinc-900 rounded-xl" />
      <div className="flex gap-3 pt-1">
        <div className="h-10 flex-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm" />
        <div className="h-10 flex-1 bg-zinc-100 dark:bg-zinc-900 rounded-sm" />
      </div>
    </div>
  )
}
