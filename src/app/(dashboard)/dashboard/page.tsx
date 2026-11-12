import { Suspense } from "react"
import { CreatePortalDialog } from "@/features/portal/components/create-portal-dialog"
import { getPortalEvents, getPortalFile, getPortalMetadata, Status } from "@/features/portal"
import { PortalStats } from "../../../features/portal/components/portal-stats"
import { PortalList } from "../../../features/portal/components/portal-list"
import { DashboardSidebar } from "./_components/sidebar"
import { PortalHeader } from "./_components/detail/header"
import { RouteModal } from "@/components/route-modal"
import { Metadata } from "next"
import { DashboardProvider } from "@/features/portal/components/client/dashboard-context"
import { ActivityLog } from "@/features/portal/components/activity-log"
import { FileEntry } from "@/components/file-entry"

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { portal: portalId } = await searchParams

  if (portalId) {
    const portal = await getPortalMetadata(portalId)
    if (portal) {
      return { title: `${portal.title} (Preview)` }
    }
  }

  return {
    title: "Approvals",
    robots: {
      index: false,
      follow: false,
    }
  }
}

interface SearchParams {
  status?: Status
  portal?: string
}

interface Props {
  searchParams: Promise<SearchParams>
}

export default function DashboardList({ searchParams }: Props) {
  return (
    <DashboardProvider>
      <div className="flex-1 flex flex-col min-h-0 w-full max-w-6xl mx-auto p-4 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 p-6 verori-border rounded-xl shrink-0">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Approvals
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Manage your client deliverables and track their status.
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <CreatePortalDialog isIcon />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 flex-1 min-h-0">
          <div className="lg:col-span-3 flex flex-col min-h-0 shrink-0">
            <Suspense fallback={<PortalStats.Skeleton />}>
              <PortalStats searchParams={searchParams} />
            </Suspense>
            <Suspense fallback={<PortalList.Skeleton />}>
              <PortalList searchParams={searchParams} />
            </Suspense>
          </div>
          <div className="lg:col-span-1 min-h-0 overflow-y-auto hidden lg:block">
            <DashboardSidebar />
          </div>
        </div>

        <Suspense fallback={null}>
          <RouteModal param="portal" fallback={<PortalDetailSkeleton />} >
            <Suspense fallback={<PortalDetailSkeleton />} >
              <PortalDetailData searchParams={searchParams} />
            </Suspense>
          </RouteModal>
        </Suspense>
      </div>
    </DashboardProvider>
  )
}

async function PortalDetailData({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { portal: shareToken } = await searchParams

  if (!shareToken) return <PortalDetailSkeleton />

  const portal = await getPortalMetadata(shareToken)
  if (!portal) return null

  const events = await getPortalEvents(portal.id)
  const fileData = await getPortalFile(portal.id)

  return (
    <div className="space-y-8">
      <PortalHeader portal={portal} />

      <div className="flex flex-col gap-8">

        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Context Note
          </h2>
          <div className="p-5 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-950/50">
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap italic">
              "{portal.context_note || "No context note provided."}"
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <FileEntry file={fileData} signedUrl={fileData?.signedUrl} />
          <ActivityLog events={events} />
        </div>
      </div>
    </div>
  )
}

function PortalDetailSkeleton() {
  return (
    <div className="pt-12 space-y-8">
      <PortalHeader.Skeleton />

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
