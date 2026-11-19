import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { Status } from "@/features/portal/portal.types"

export function useDashboardRouting() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleSelectStatus = useCallback((nextStatus: Status | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (nextStatus) {
      params.set("status", nextStatus)
    } else {
      params.delete("status")
    }
    const query = params.toString()
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false })
  }, [router, pathname, searchParams])

  const handleOpenPortal = useCallback((token: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("portal", token)
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }, [router, pathname, searchParams])

  return { handleSelectStatus, handleOpenPortal }
}
