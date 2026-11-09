"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/button"
import { Input } from "@/components/input"

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
    <div className="relative w-full sm:w-[320px]">
      <Input
        type="text"
        readOnly
        value={url || `/p/${token}`}
        onClick={(e) => (e.target as HTMLInputElement).select()}
        className="pr-20 border-dashed border-zinc-400 text-zinc-400 dark:text-zinc-600 cursor-text truncate"
        aria-label="Client approval link"
      />
      <Button
        variant="ghost"
        onClick={handleCopy}
        aria-label="Copy link"
        className={`absolute right-1 top-1/2 -translate-y-1/2 w-auto! px-3! py-1! text-xs font-medium transition-all ${copied
          ? "text-teal-600 dark:text-teal-400"
          : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          }`}
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  )
}
