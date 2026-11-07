"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Dialog, DialogContent } from "@/components/dialog"
import { ReactNode, useRef } from "react"
import { cn } from "@/components/util"
import { CloseIcon } from "./icon/close"
import { Button } from "./button"

interface Props {
  param: string
  children: ReactNode
  className?: string
}

export function RouteModal({ param, className, children }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const open = searchParams.has(param)

  const lastChildren = useRef(children)
  if (open) lastChildren.current = children

  const handleOpenChange = (next: boolean) => {
    if (next) return
    const params = new URLSearchParams(searchParams.toString())
    params.delete(param)
    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className={cn("relative max-w-5xl w-full max-h-[90vh] overflow-hidden p-0 bg-zinc-50 dark:bg-zinc-950", className)} >
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

        <div className="w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8">
          {lastChildren.current}
        </div>
      </DialogContent>
    </Dialog>
  )
}
