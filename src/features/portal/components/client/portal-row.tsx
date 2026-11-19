"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { StatusBadge } from "@/features/portal/components/status-badge"
import type { Portal } from "@/features/portal/portal.types"
import { ChevronRightIcon } from "@/components/icon/chevron-right"
import { useDashboard } from "./dashboard-context"
import { timeAgo } from "@/lib/date"

export function PortalRow({ portal }: { portal: Portal }) {
  const { setOptimisticId } = useDashboard()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const params = new URLSearchParams(searchParams.toString())
  params.set("portal", portal.share_token)
  const href = `${pathname}?${params.toString()}`

  return (
    <li>
      <Link
        href={href}
        scroll={false}
        onClick={() => setOptimisticId(portal.share_token)}
        className="w-full text-left flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-zinc-50/90 dark:hover:bg-zinc-900/40 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-zinc-400"
      >
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50 truncate group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
            {portal.title}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
            {portal.context_note || "No context note attached"}
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <StatusBadge status={portal.status} noBorder />

          <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline" aria-hidden="true">
            ·
          </span>

          <span className="text-xs font-mono tabular-nums text-zinc-400 dark:text-zinc-500 w-14 text-right hidden sm:inline-block">
            {timeAgo(portal.last_activity_at)}
          </span>

          <ChevronRightIcon className="size-4 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all" />
        </div>
      </Link>
    </li>
  )
}
