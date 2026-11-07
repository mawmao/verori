import { Suspense } from "react"
import { CreatePortalDialog } from "@/features/portal/components/create-portal-dialog"
import { getPortalMetadata, Status } from "@/features/portal"
import { PortalStats } from "../../../features/portal/components/portal-stats"
import { PortalList } from "../../../features/portal/components/portal-list"
import { DashboardSidebar } from "./_components/sidebar"
import { PortalActivitySection } from "./_components/detail/activity-section"
import { PortalFileSection } from "./_components/detail/file-section"
import { PortalHeader } from "./_components/detail/header"
import { RouteModal } from "@/components/route-modal"
import { Metadata } from "next"

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
    <div className="flex-1 flex flex-col min-h-0 w-full max-w-6xl mx-auto px-6 py-10 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 p-6 sm:p-8 verori-border rounded-xl">
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 flex-1 min-h-0">
        <div className="lg:col-span-3 flex flex-col gap-6 min-h-0">
          <Suspense fallback={<PortalStats.Skeleton />}>
            <PortalStats searchParams={searchParams} />
          </Suspense>
          <Suspense fallback={<PortalList.Skeleton />}>
            <PortalList searchParams={searchParams} />
          </Suspense>
        </div>
        <DashboardSidebar />
      </div>

      <Suspense fallback={null}>
        <RouteModal param="portal">
          <Suspense fallback={<PortalDetailSkeleton />} >
            <PortalDetailData searchParams={searchParams} />
          </Suspense>
        </RouteModal>
      </Suspense>
    </div>
  )
}

async function PortalDetailData({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { portal: portalId } = await searchParams
  if (!portalId) return null

  return (
    <>
      <PortalHeader id={portalId} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <PortalFileSection id={portalId} />
        <PortalActivitySection id={portalId} />
      </div>
    </>
  )
}

function PortalDetailSkeleton() {
  return (
    <div className="pt-12 space-y-6">
      <PortalHeader.Skeleton />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <PortalFileSection.Skeleton />
        <PortalActivitySection.Skeleton />
      </div>
    </div>
  )
}
