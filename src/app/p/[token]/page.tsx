import { getPortalByToken } from "@/features/portal/dal"
import { Metadata } from "next"
import { Suspense } from "react"
import { PortalContent, PortalSkeleton } from "@/features/portal/components/client/portal-content"
import { BrandLogo } from "@/components/brand-logo"

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
    <main className="flex-1 flex flex-col items-center justify-center w-full min-h-0 overflow-y-auto p-6 sm:p-12">
      <div className="w-full max-w-xl flex flex-col gap-10 my-auto">
        <BrandLogo className="justify-center" />
        <Suspense fallback={<PortalSkeleton />}>
          <PortalContent params={params} />
        </Suspense>
      </div>
    </main>
  )
}
