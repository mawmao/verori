import { Portal, Status } from "../portal.types"

export interface PortalMetric {
  label: string
  value: number
  subtext: string
  href: string
  active: boolean
  accent?: string
}

export function getPortalMetrics(portals: Portal[], activeStatus: Status | null): PortalMetric[] {
  const sent = portals.filter((p) => p.status === "sent").length
  const viewed = portals.filter((p) => p.status === "viewed").length
  const awaiting = sent + viewed
  const changes = portals.filter((p) => p.status === "changes_requested").length
  const approved = portals.filter((p) => p.status === "approved").length
  const approvalRate = portals.length > 0 ? Math.round((approved / portals.length) * 100) : 0

  return [
    {
      label: "Total Portals",
      value: portals.length,
      subtext: `${approvalRate}% signed off`,
      href: "/dashboard",
      active: !activeStatus,
    },
    {
      label: "Awaiting Response",
      value: awaiting,
      subtext: `${sent} sent · ${viewed} viewed`,
      href: "/dashboard?status=viewed",
      active: activeStatus === "viewed",
    },
    {
      label: "Changes Requested",
      value: changes,
      subtext: changes > 0 ? "Needs follow-up" : "Queue clear",
      href: "/dashboard?status=changes_requested",
      active: activeStatus === "changes_requested",
      accent: changes > 0 ? "text-amber-600 dark:text-amber-400" : undefined,
    },
    {
      label: "Approved",
      value: approved,
      subtext: "Ready to archive",
      href: "/dashboard?status=approved",
      active: activeStatus === "approved",
      accent: "text-emerald-600 dark:text-emerald-400",
    },
  ]
}
