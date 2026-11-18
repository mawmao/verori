"use client"

import Link from "next/link"
import { StatusBadge } from "@/features/portal/components/status-badge"
import type { Portal } from "@/features/portal/portal.types"
import { RelativeTime } from "@/components/relative-time"
import { ChevronRightIcon } from "@/components/icon/chevron-right"
import { useDashboard } from "./dashboard-context"

export function PortalRow({ portal }: { portal: Portal }) {
  const { setOptimisticId } = useDashboard()

  return (
    <li className="border-b border-zinc-100 last:border-b-0 dark:border-zinc-800">
      <Link
        href={`/dashboard?portal=${portal.share_token}`}
        scroll={false}
        onClick={() => setOptimisticId(portal.share_token)}
        className="block"
      >
        <div className="group flex items-center justify-between p-5 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/50 cursor-pointer">
          <div className="flex flex-col gap-1 min-w-0 pr-4">
            <span className="font-medium text-sm text-zinc-950 dark:text-zinc-50 truncate">
              {portal.title}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
              {portal.client_name}
            </span>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <StatusBadge status={portal.status} />
            <RelativeTime
              className="w-16 text-xs font-mono text-zinc-400 dark:text-zinc-500 hidden sm:block text-right"
              date={portal.last_activity_at}
            />
            <ChevronRightIcon
              className="size-4 text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </li>
  )
}
