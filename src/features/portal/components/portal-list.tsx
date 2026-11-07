import Link from "next/link"
import { getPortals, Status } from "@/features/portal"
import { DashboardEmpty } from "../../../app/(dashboard)/dashboard/_components/empty"
import { PortalRow } from "./portal-row"

interface Props {
  searchParams: Promise<{ status?: Status }>
}

export const PortalList = Object.assign(
  async function PortalList({ searchParams }: Props) {
    const { status: activeStatus } = await searchParams;
    const portals = await getPortals()

    const visiblePortals = activeStatus ? portals.filter((p) => p.status === activeStatus) : portals

    if (portals.length === 0) return <DashboardEmpty />

    if (visiblePortals.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center verori-border rounded-xl py-20 text-center animate-in fade-in duration-300">
          <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">Nothing here yet</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            No approvals have this status.{" "}
            <Link href="/dashboard" className="text-zinc-600 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 font-medium underline underline-offset-4 decoration-zinc-600/30 hover:decoration-zinc-600 transition-colors">
              Show all
            </Link>
          </p>
        </div>
      )
    }

    return (
      <ul className="flex flex-col gap-4 animate-in fade-in duration-300">
        {visiblePortals.map((portal) => (
          <PortalRow key={portal.id} portal={portal} />
        ))}
      </ul>
    )
  },
  {
    Skeleton: () => {
      return (
        <ul className="flex flex-col gap-4">
          {[...Array(3)].map((_, i) => (
            <li
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:px-6 sm:py-5 verori-border rounded-xl gap-3 sm:gap-6 animate-pulse"
            >
              <div className="flex flex-col gap-2">
                <div className="h-4 w-48 bg-skeleton rounded-md" />
                <div className="h-3 w-32 bg-skeleton rounded-md" />
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="h-6 w-20 bg-skeleton rounded-full" />
                  <div className="h-4 w-16 bg-skeleton rounded-md hidden sm:block" />
                </div>
                <div className="h-4 w-4 bg-skeleton rounded-sm hidden sm:block" />
              </div>
            </li>
          ))}
        </ul>
      )
    }
  }
)
