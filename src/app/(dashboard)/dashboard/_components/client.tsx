"use client"

import { PortalList } from "@/features/portal/components/portal-list"
import { Portal, Status } from "@/features/portal/portal.types"

interface Props {
  initialPortals: Portal[]
  initialStatus: Status | null
}

export function DashboardClient({ initialPortals, initialStatus }: Props) {
  return (
    <div className="flex flex-col min-h-0 h-full">
      <div className="flex-1 min-h-0">
        <PortalList
          portals={initialPortals}
          activeStatus={initialStatus}
        />
      </div>
    </div>
  )
}
