"use client"

import { useState } from "react"
import { ActivityEvent, Portal, Status } from "@/features/portal/portal.types"
import { PortalList } from "@/features/portal/components/portal-list"
import { ActivitySidebar } from "./activity-sidebar"
import { PortalStats } from "@/features/portal/components/portal-stats"
import { useDashboardRouting } from "@/features/portal/hooks/useDashboardRouting"

interface Props {
  portals: Portal[]
  status: Status | null
  events: any[]
}

export function DashboardView({ portals, status, events }: Props) {
  const { handleSelectStatus, handleOpenPortal } = useDashboardRouting()

  const [isExpanded, setIsExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"priority" | "recent">("recent")

  const handleResetFilters = () => {
    setSearchQuery("")
    handleSelectStatus(null)
  }

  return (
    <div className="flex flex-col gap-4 flex-1 min-h-0">
      <div className="shrink-0">
        <PortalStats
          portals={portals}
          activeStatus={status}
          onSelectStatus={handleSelectStatus}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-5 flex-1 min-h-0 lg:min-h-[540px]">
        <div className="flex-1 min-w-0 min-h-[380px] lg:h-full">
          <PortalList
            portals={portals}
            activeStatus={status}
            searchQuery={searchQuery}
            sortBy={sortBy}
            onResetFilters={handleResetFilters}
          />
        </div>

        <ActivitySidebar
          events={events}
          portals={portals}
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded(!isExpanded)}
          onSelectPortalByToken={handleOpenPortal}
          onFilterAttention={() => handleSelectStatus("changes_requested")}
        />
      </div>
    </div>
  )
}
