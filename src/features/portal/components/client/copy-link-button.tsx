"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { ActionBadge } from "@/components/action-badge"
import { LinksIcon } from "@/components/icon/links"
import { CheckIcon } from "@/components/icon/check"

export function CopyLinkButton({ token }: { token: string }) {
  const [copied, setCopied] = useState(false)
  const [url, setUrl] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(`${window.location.origin}/p/${token}`)
    }
  }, [token])

  const handleCopy = () => {
    if (!url) return
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative flex w-full sm:w-[280px] items-center">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500 pointer-events-none">
        <LinksIcon className="size-4" />
      </div>

      <Input
        type="text"
        readOnly
        value={url || `/p/${token}`}
        onClick={(e) => e.currentTarget.select()}
        className="w-full pl-9 pr-12 border-dashed border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 truncate cursor-text select-text "
        aria-label="Client approval link"
      />

      <div className="absolute right-1.5 top-1/2 -translate-y-1/2">
        {copied ? (
          <ActionBadge variant="success" size="sm" className="pointer-events-none">
            <CheckIcon className="size-3 mr-1" />
            Copied
          </ActionBadge>
        ) : (
          <Button
            variant="ghost"
            onClick={handleCopy}
            aria-label="Copy link"
            className="h-7 px-2.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-800 transition-all"
          >
            Copy
          </Button>
        )}
      </div>
    </div>
  )
}
