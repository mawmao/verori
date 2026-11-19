import Link from "next/link"
import { Portal, Status } from "@/features/portal/portal.types"
import { cn } from "@/components/util"
import { getPortalMetrics, PortalMetric } from "@/features/portal/utils/metrics"

interface Props {
  portals: Portal[]
  activeStatus?: Status | null
}

function MetricCard({ metric }: { metric: PortalMetric }) {
  return (
    <Link
      href={metric.href}
      className={cn(
        "px-5 py-4 transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/40",
        metric.active && metric.label !== "Total Portals" && "bg-zinc-50 dark:bg-zinc-900/70"
      )}
    >
      <div className="flex items-baseline justify-between gap-2">
        <span className={cn(
          "font-mono text-2xl font-semibold tabular-nums tracking-tight text-zinc-950 dark:text-zinc-50",
          metric.accent
        )}>
          {metric.value}
        </span>
        <span className="text-[11px] text-zinc-400 dark:text-zinc-500 tabular-nums whitespace-nowrap">
          {metric.subtext}
        </span>
      </div>
      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">
        {metric.label}
      </p>
    </Link>
  )
}

export function SignalBar({ portals, activeStatus }: Props) {
  const metrics = getPortalMetrics(portals, activeStatus ?? null)

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 verori-border rounded-xl bg-white dark:bg-zinc-950/60 divide-y lg:divide-y-0 lg:divide-x divide-zinc-100 dark:divide-zinc-800/80 overflow-hidden">
      {metrics.map((metric) => (
        <MetricCard key={metric.label} metric={metric} />
      ))}
    </div>
  )
}
