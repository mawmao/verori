"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { ActionBadge } from "@/components/action-badge"
import { LinksIcon } from "@/components/icon/links"
import { CheckIcon } from "@/components/icon/check"
import { cn } from "@/components/util"

interface CopyLinkButtonProps {
  token: string
  baseUrl?: string
  className?: string
}

export function CopyLinkButton({ token, baseUrl, className }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false)
  const [origin, setOrigin] = useState(baseUrl ?? "")

  useEffect(() => {
    if (baseUrl) {
      setOrigin(baseUrl)
    } else if (typeof window !== "undefined") {
      setOrigin(window.location.origin)
    }
  }, [baseUrl])

  const fullUrl = origin ? `${origin.replace(/\/$/, "")}/p/${token}` : `/p/${token}`
  const displayValue = baseUrl
    ? `${baseUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}/p/${token}`
    : fullUrl

  const handleCopy = () => {
    if (!fullUrl) return
    navigator.clipboard?.writeText(fullUrl).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative flex w-full items-center", className)}>
      <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500">
        <LinksIcon className="size-3.5" />
      </div>

      <Input
        type="text"
        readOnly
        value={displayValue}
        onClick={(e) => e.currentTarget.select()}
        className="w-full cursor-text select-text truncate border-dashed border-zinc-300 bg-zinc-50/70 pl-9 pr-20 font-mono text-[11px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-300"
        aria-label="Client approval link"
      />

      <div className="absolute right-1.5 top-1/2 -translate-y-1/2">
        {copied ? (
          <ActionBadge variant="success" size="sm" className="pointer-events-none">
            <CheckIcon className="size-3" />
            Copied
          </ActionBadge>
        ) : (
          <Button
            type="button"
            variant="ghost"
            onClick={handleCopy}
            aria-label="Copy link"
            className="h-7 w-auto rounded-sm px-2.5 text-[11px] font-medium text-zinc-600 transition-all hover:bg-zinc-200/70 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            Copy
          </Button>
        )}
      </div>
    </div>
  )
}
