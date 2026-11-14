"use client"

import { PortalList } from "@/features/portal/components/portal-list"
import { PortalStats } from "@/features/portal/components/portal-stats"
import { Portal, Status } from "@/features/portal/portal.types"
import { useRouter, useSearchParams } from "next/navigation"


interface Props {
  initialPortals: Portal[],
  initialStatus: Status,
}

export function DashboardClient({ initialPortals, initialStatus }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeStatus = searchParams.get("status") as Status | null

  const visiblePortals = activeStatus
    ? initialPortals.filter(p => p.status === activeStatus)
    : initialPortals

  return (
    <div className="lg:col-span-3 flex flex-col min-h-0 shrink-0">
      <PortalStats portals={initialPortals} activeStatus={activeStatus} />
      <PortalList portals={visiblePortals} />
    </div>
  )
}
