import { FileEntry } from "@/components/file-entry"
import { CalendarIcon } from "@/components/icon/calendar"
import { UserIcon } from "@/components/icon/user"
import { StatusBadge } from "@/features/portal"
import { ActivityLog } from "@/features/portal/components/activity-log"
import { CopyLinkButton } from "@/features/portal/components/client/copy-link-button"
import { DeletePortalButton } from "@/features/portal/components/client/delete-portal-button"
import { EditContextNote } from "@/features/portal/components/client/edit-context-note"
import { getPortalEvents, getPortalFile, getPortalMetadata } from "@/features/portal/dal"
import { Portal, Status } from "@/features/portal/portal.types"

interface SearchParams {
  status?: Status
  portal?: string
}

export async function PortalDetailData({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { portal: shareToken } = await searchParams
  if (!shareToken) return <PortalDetailSkeleton />

  const portal = await getPortalMetadata(shareToken)
  if (!portal) return null

  const [events, fileData] = await Promise.all([
    getPortalEvents(portal.id),
    getPortalFile(portal.id),
  ])

  const latestFeedback = portal.status === "changes_requested"
    ? [...events].reverse().find((e) => e.type === "changes_requested" && e.metadata?.reason)
    : null

  return (
    <div className="space-y-4">
      <DetailHeader portal={portal} />

      {latestFeedback && <ChangeRequestBanner event={latestFeedback} />}

      <EditContextNote
        portalId={portal.id}
        initialNote={portal.context_note || ""}
        canEdit={portal.status === "sent"}
      />

      <FileEntry file={fileData} signedUrl={fileData?.signedUrl} />
      <ActivityLog events={events} />
    </div>
  )
}


function ChangeRequestBanner({ event }: { event: any }) {
  const date = new Date(event.created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })

  return (
    <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 dark:border-blue-900/50 dark:bg-blue-950/20 px-4 py-3.5 space-y-1">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
          Client Feedback
        </span>
        <span className="text-[11px] font-mono tabular-nums text-blue-600/80 dark:text-blue-400/80">
          {date}
        </span>
      </div>
      <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
        {event.metadata?.reason}
      </p>
    </div>
  )
}


async function DetailHeader({ portal }: { portal: Portal }) {

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {portal.title}
        </h1>
        <StatusBadge status={portal.status} />
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-5 verori-border rounded-xl">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <UserIcon className="size-4 text-zinc-400" />
            <span className="font-medium">{portal.client_name}</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-zinc-300 dark:bg-zinc-700" />
          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <CalendarIcon className="size-4 text-zinc-400" />
            <span>
              {new Date(portal.created_at).toLocaleDateString(undefined, {
                month: 'short', day: 'numeric', year: 'numeric'
              })}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 w-full lg:w-auto justify-end">
          <CopyLinkButton token={portal.share_token} />
          <DeletePortalButton portalId={portal.id} />
        </div>
      </div>
    </div>
  )
}

export function PortalDetailSkeleton() {
  return (
    <div className="pt-12 space-y-8">
      <div className="mb-8 animate-pulse">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-9 w-64 bg-skeleton rounded-md" />
          <div className="h-6 w-20 bg-skeleton rounded-full" />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-5 verori-border rounded-xl">
          <div className="flex flex-wrap items-center gap-4">
            <div className="h-7 w-32 bg-skeleton rounded-md" />
            <div className="hidden sm:block w-px h-5 bg-zinc-300 dark:bg-zinc-700" />
            <div className="h-7 w-32 bg-skeleton rounded-md" />
          </div>
          <div className="h-[42px] w-[320px] bg-skeleton rounded-md shrink-0" />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="space-y-3 animate-pulse">
          <div className="h-5 w-28 bg-skeleton rounded-md" />
          <div className="h-[86px] w-full bg-skeleton border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl" />
        </div>

        <div className="space-y-3 animate-pulse">
          <div className="h-5 w-24 bg-skeleton rounded-md" />
          <div className="flex items-center gap-4 p-4 verori-border rounded-xl">
            <div className="size-10 shrink-0 bg-skeleton rounded-lg" />
            <div className="space-y-2 flex-1">
              <div className="h-4 w-48 bg-skeleton rounded-md" />
              <div className="h-3 w-16 bg-skeleton rounded-md" />
            </div>
          </div>
        </div>

        <div className="space-y-3 animate-pulse">
          <div className="h-5 w-32 bg-skeleton rounded-md" />
          <div className="h-[120px] w-full bg-skeleton border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl" />
        </div>
      </div>
    </div>
  )
}
