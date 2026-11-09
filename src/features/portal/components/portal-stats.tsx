import Link from "next/link"
import { getPortals, STATUSES, Status } from "@/features/portal"
import { cn } from "@/components/util";

interface Props {
  searchParams: Promise<{ status?: Status }>
}

export const PortalStats = Object.assign(
  async function PortalStats({ searchParams }: Props) {
    const { status: activeStatus } = await searchParams;
    const portals = await getPortals()

    if (portals.length === 0) return null;

    const counts = STATUSES.reduce((acc, s) => {
      return {
        ...acc, [s.value]: portals.filter((p) => p.status === s.value).length
      }
    }, {} as Record<Status, number>)

    const tabs = [
      { href: "/dashboard", label: "All", count: portals.length, active: !activeStatus },
      ...STATUSES.map((s) => ({
        href: `/dashboard?status=${s.value}`,
        label: s.label,
        count: counts[s.value],
        active: activeStatus === s.value,
      })),
    ]

    return (
      <nav aria-label="Filter by status" className="flex gap-2 overflow-x-auto mb-6 px-6 sm:mx-0 sm:px-0 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => (
          <Link
            key={tab.label}
            href={tab.href}
            aria-current={tab.active ? "page" : undefined}
            className={
              cn(`flex items-center shrink-0 text-sm px-3 py-1.5 rounded-lg transition-colors`,
                tab.active ?
                  "bg-zinc-100 text-zinc-950 font-medium dark:bg-zinc-800 dark:text-zinc-50" :
                  "text-zinc-500 hover:text-zinc-950 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-800/50"
              )}
          >
            {tab.label}
            <span className="ml-1.5 text-xs tabular-nums text-zinc-400 dark:text-zinc-500">{tab.count}</span>
          </Link>
        ))}
      </nav>
    )
  },
  {
    Skeleton: () => {
      return (
        <div className="flex gap-1 mb-6 pb-1 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-8 w-24 bg-skeleton rounded-lg shrink-0 animate-pulse" />
          ))}
        </div>
      )
    }
  }
)

