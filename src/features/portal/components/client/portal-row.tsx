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
    <li>
      <Link href={`/dashboard?portal=${portal.id}`} scroll={false} onClick={() => setOptimisticId(portal.id)} className="block" >
        <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:px-6 sm:py-5 transition-all gap-3 sm:gap-4 verori-border rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
          <div className="flex flex-col gap-1 min-w-0">
            <span className="font-medium text-sm text-zinc-950 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors truncate">
              {portal.title}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
              {portal.client_name}
            </span>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 shrink-0">
            <div className="flex items-center gap-4">
              <StatusBadge status={portal.status} />
              <RelativeTime className="w-16 hidden sm:block" date={portal.created_at} />
            </div>
            <ChevronRightIcon
              className="size-4 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all hidden sm:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </li>
  )
}
