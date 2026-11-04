"use client"

import { useState, useRef, useEffect } from "react"
import { LogoutButton } from "@/features/auth"

export function UserMenu({ email }: { email: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const initial = email.charAt(0).toUpperCase()

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center justify-center size-8 rounded-full bg-zinc-200 dark:bg-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:ring-2 hover:ring-zinc-300 dark:hover:ring-zinc-700 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-500"
        aria-label="User menu"
        aria-expanded={isOpen}
      >
        {initial}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md border border-dashed border-zinc-400/75 dark:border-zinc-600/75 bg-zinc-50 dark:bg-zinc-900 animate-in fade-in zoom-in-95 duration-100">
          <div className="space-y-1 px-4 py-3 border-b border-dashed border-zinc-400 dark:border-zinc-600">
            <p className="text-xs text-zinc-500 dark:text-zinc-400/75">Signed in as</p>
            <p className="text-base font-medium text-zinc-950 dark:text-zinc-50 truncate">
              {email}
            </p>
          </div>
          <div className="p-1">
            <LogoutButton className="w-full text-left px-3 py-2 text-xs text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-sm transition-colors" />
          </div>
        </div>
      )}
    </div>
  )
}
