import { getPortalByToken } from "@/features/portal/dal"
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
    <Suspense fallback={<PortalSkeleton />}>
      <PortalContent params={params} />
    </Suspense>
  )
}
