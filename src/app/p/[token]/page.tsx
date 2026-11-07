import { getPortalByToken } from "@/features/portal/dal"
import { VeroriIcon } from "@/components/icon/verori"
import { Metadata } from "next"
import { Suspense } from "react"
import { PortalContent, PortalSkeleton } from "@/features/portal/components/client/portal-content"

interface Props {
  params: Promise<{ token: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { token } = await params
  const portal = await getPortalByToken(token)

  if (!portal) {
    return { title: 'Portal Not Found' }
  }

  return {
    title: `${portal.title} - ${portal.client_name}`,
    robots: {
      index: false,
      follow: false,
    }
  }
}

export default function ClientPortal({ params }: Props) {
  return (
    <main className="flex-1 flex flex-col min-h-0 w-full max-w-3xl mx-auto px-6 pt-12 sm:pt-20">
      <div className="flex items-center justify-center gap-2 mb-12 shrink-0">
        <VeroriIcon className="size-6 text-zinc-950 dark:text-zinc-50" />
        <span className="text-lg font-semibold tracking-tighter uppercase text-zinc-950 dark:text-zinc-50">
          Verori
        </span>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto pb-12 pr-1">
        <Suspense fallback={<PortalSkeleton />}>
          <PortalContent params={params} />
        </Suspense>
      </div>
    </main>
  )
}
