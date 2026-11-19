import { Suspense } from "react"
import { CreatePortalDialog } from "@/features/portal/components/create-portal-dialog"
import { getPortalEvents, getPortalFile, getPortalMetadata, getPortals, Status } from "@/features/portal"
import { PortalHeader } from "./_components/detail/header"
import { RouteModal } from "@/components/route-modal"
import { Metadata } from "next"
import { DashboardProvider } from "@/features/portal/components/client/dashboard-context"
import { ActivityLog } from "@/features/portal/components/activity-log"
import { FileEntry } from "@/components/file-entry"
import { EditContextNote } from "@/features/portal/components/client/edit-context-note"
import { SignalBar } from "./_components/signal-bar"
import { DashboardView } from "./_components/view"
import { getRecentActivity } from "@/features/portal/dal"
import { PortalDetailData, PortalDetailSkeleton } from "./_components/detail"

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
export default async function DashboardList({ searchParams }: Props) {
  const portals = await getPortals()
  const { status } = await searchParams

  const events = await getRecentActivity()

  return (
    <DashboardProvider>
      <div className="flex flex-col h-full max-w-[1400px] mx-auto p-6 sm:p-8">

        <DashboardHeader />

        <div className="shrink-0 mb-6">
          <SignalBar portals={portals} />
        </div>

        <DashboardView portals={portals} status={status ?? null} events={events} />

        <Suspense fallback={null}>
          <RouteModal param="portal" fallback={<PortalDetailSkeleton />}>
            <Suspense fallback={<PortalDetailSkeleton />}>
              <PortalDetailData searchParams={searchParams} />
            </Suspense>
          </RouteModal>
        </Suspense>
      </div>
    </DashboardProvider>
  )
}


function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-6 shrink-0">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Client Sign-offs
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Triage deliverables and track client responses.
        </p>
      </div>
      <CreatePortalDialog />
    </div>
  )
}


