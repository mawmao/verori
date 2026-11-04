import { Suspense } from "react"
import { CreatePortalDialog } from "@/features/portal/components/create-portal-dialog"
import { Status } from "@/features/portal"
import { PortalStats, StatsSkeleton } from "./_components/portal-stats"
import { ListSkeleton, PortalList } from "./_components/portal-list"

interface Props {
  searchParams: Promise<{ status?: Status }>
}

export default function Dashboard({ searchParams }: Props) {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-10 sm:py-12">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 p-6 sm:p-8 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Approvals
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Manage your client deliverables and track their status.
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <CreatePortalDialog isIcon/>
        </div>
      </div>

      <Suspense fallback={<StatsSkeleton />}>
        <PortalStats searchParams={searchParams} />
      </Suspense>

      <Suspense fallback={<ListSkeleton />}>
        <PortalList searchParams={searchParams} />
      </Suspense>
    </main>
  )
}
