"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Dialog, DialogContent } from "@/components/dialog"
import { ReactNode, useEffect, useState, useRef } from "react"
import { cn } from "@/components/util"
import { CloseIcon } from "./icon/close"
import { Button } from "./button"
import { useDashboard } from "@/features/portal/components/client/dashboard-context"

interface Props {
  param: string
  children: ReactNode
  fallback: ReactNode
  className?: string
}

export function RouteModal({ param, children, fallback, className }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { optimisticId, setOptimisticId } = useDashboard()
  const queryId = searchParams.get(param)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => setIsClosing(false), [queryId, optimisticId])

  const open = (queryId !== null || optimisticId !== null) && !isClosing

  const isOptimistic = optimisticId !== null && queryId === null

  const lastContent = useRef<ReactNode>(children)
  if (open) {
    lastContent.current = children
  }

  useEffect(() => {
    if (queryId && optimisticId) {
      setOptimisticId(null)
    }
  }, [queryId, optimisticId, setOptimisticId])

  const handleOpenChange = (next: boolean) => {
    if (next) return

    setIsClosing(true)
    setOptimisticId(null)

    const params = new URLSearchParams(searchParams.toString())
    params.delete(param)
    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className={cn("relative flex flex-col max-w-5xl w-full h-[85vh] max-h-[90vh] overflow-hidden p-0 bg-zinc-50 dark:bg-zinc-950", className)} >
        <div className={cn(
          "absolute top-3 right-3 z-50 flex items-center gap-2 rounded-lg p-1",
          "bg-zinc-50/80 backdrop-blur-sm dark:bg-zinc-950/80"
        )} >
          <div className="hidden pointer-fine:flex items-center gap-1.5 pl-2 text-xs text-zinc-500 dark:text-zinc-400">
            <kbd className="rounded border border-zinc-300 bg-zinc-100 px-1.5 py-0.5 font-sans text-[10px] font-medium tracking-wide dark:border-zinc-700 dark:bg-zinc-800">
              Esc
            </kbd>
            <span className="opacity-75">to close</span>
          </div>
          <Button isIcon variant="secondary" onClick={() => handleOpenChange(false)} aria-label="Close" aria-keyshortcuts="Escape" >
            <CloseIcon className="size-5 text-zinc-600 dark:text-zinc-400" />
          </Button>
        </div>

        <div className="w-full flex-1 overflow-y-auto p-6 sm:p-8">
          {open ? (isOptimistic ? fallback : children) : lastContent.current}
        </div>
      </DialogContent>
    </Dialog>
  )
}
