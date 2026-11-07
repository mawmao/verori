import { notFound } from "next/navigation"
import { getPortalMetadata, StatusBadge } from "@/features/portal"
import { CopyLinkButton } from "./copy-link-button"
import { UserIcon } from "@/components/icon/user"
import { CalendarIcon } from "@/components/icon/calendar"

export const PortalHeader = Object.assign(
  async function PortalHeader({ id }: { id: string }) {
    const portal = await getPortalMetadata(id)
    if (!portal) notFound()

    return (
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            {portal.title}
          </h1>
          <StatusBadge status={portal.status} />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-5 verori-border rounded-xl">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <UserIcon className="size-4 text-zinc-400" />
              <span className="font-medium">{portal.client_name}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-zinc-300 dark:bg-zinc-700" />
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <CalendarIcon className="size-4 text-zinc-400" />
              <span>
                {new Date(portal.created_at).toLocaleDateString(undefined, {
                  month: 'short', day: 'numeric', year: 'numeric'
                })}
              </span>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <CopyLinkButton token={portal.share_token} />
          </div>
        </div>
      </div>
    )
  },
  {
    Skeleton: () => {
      return (
        <div className="mb-8 pr-12 animate-pulse">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-64 bg-skeleton rounded-md" />
            <div className="h-6 w-20 bg-skeleton rounded-full" />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-5 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900/50">
            <div className="flex gap-4">
              <div className="h-5 w-32 bg-skeleton rounded-md" />
              <div className="h-5 w-32 bg-skeleton rounded-md" />
            </div>
            <div className="h-[42px] w-[320px] bg-skeleton rounded-md shrink-0" />
          </div>
        </div>
      )
    }
  }
)
