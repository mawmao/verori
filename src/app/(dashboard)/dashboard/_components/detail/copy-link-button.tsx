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
    <div className="relative w-full sm:w-[320px] cursor-pointer" onClick={handleCopy} >
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500 pointer-events-none">
        <LinksIcon className="size-4" />
      </div>

      <Input
        type="text"
        readOnly
        value={url || `/p/${token}`}
        className="pl-9 pr-20 border-dashed border-zinc-400 text-zinc-400 dark:text-zinc-600 truncate select-none pointer-events-none"
        aria-label="Client approval link"
      />

      <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center">
        {copied ? (
          <ActionBadge variant="success" size="sm">
            Copied
          </ActionBadge>
        ) : (
          <Button
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation()
              handleCopy()
            }}
            aria-label="Copy link"
            className="w-auto! px-2.5! py-1! text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-all"
          >
            Copy
          </Button>
        )}
      </div>
    </div>
  )
}
