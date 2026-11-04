"use client"

import { createContext, useContext, useState, useMemo, useEffect, ReactNode } from "react"
import { createPortal } from "react-dom"
import { cn } from "@/components/util"
import { useModalTransition } from "./hooks/use-modal-transition"
import type { ElementType, ComponentPropsWithoutRef, MouseEvent, MouseEventHandler } from "react"


interface DialogContext {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const dialogContext = createContext<DialogContext | null>(null)

export function useDialog() {
  const context = useContext(dialogContext)
  if (!context) {
    throw new Error("Dialog components must be used within a <Dialog>")
  }
  return context
}

export function Dialog({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const value = useMemo(() => {
    return { isOpen, setIsOpen }
  }, [isOpen])
  return <dialogContext.Provider value={value}>{children}</dialogContext.Provider>
}


function createDialogButton(nextOpen: boolean) {
  type DialogButtonProps<T extends ElementType> = {
    as?: T;
    children?: ReactNode
  } & Omit<ComponentPropsWithoutRef<T>, "as">

  return function DialogButton<T extends ElementType = "button">({ as: comp, children, onClick, ...props }: DialogButtonProps<T>) {
    const { setIsOpen } = useDialog()
    const Component: ElementType = comp ?? "button"

    const handleClick = (e: MouseEvent) => {
      const handler = onClick as MouseEventHandler | undefined
      handler?.(e)
      setIsOpen(nextOpen)
    }

    return (
      <Component onClick={handleClick} {...props} >
        {children}
      </Component>
    )
  }
}

export const DialogTrigger = createDialogButton(true)
export const DialogClose = createDialogButton(false)


interface DialogContentProps {
  children: ReactNode
  className?: string
}

export function DialogContent({ children, className }: DialogContentProps) {
  const { isOpen, setIsOpen } = useDialog()
  const { mounted, visible } = useModalTransition(isOpen)

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen, setIsOpen])

  if (!mounted) return null

  return createPortal(
    <>
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/50",
          "transition-opacity duration-200 ease-out motion-reduce:transition-none",
          visible ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        role="dialog"
        aria-modal="true"
        className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div
          className={cn(
            "pointer-events-auto w-full max-w-lg overflow-hidden rounded-lg border shadow-xl",
            "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950",
            "transition-all duration-200 ease-out motion-reduce:transition-none",
            visible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-2 scale-95 opacity-0",
            className
          )}
        >
          {children}
        </div>
      </div>
    </>,
    document.body
  )
}
