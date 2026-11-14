"use client"

import { useState } from "react"
import { Button } from "@/components/button"
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/dialog"
import { deletePortal } from "../../actions/delete-portal"
import { DeleteIcon } from "@/components/icon/delete"
import { TriangleWarningIcon } from "@/components/icon/triangle-warning"

export function DeletePortalButton({ portalId }: { portalId: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await deletePortal(portalId)
    } catch (error) {
      console.error(error)
      setIsDeleting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        as={Button}
        variant="outline"
        className="w-auto shrink-0 border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 hover:border-red-300 dark:hover:border-red-900 transition-colors"
      >
        <DeleteIcon className="size-3.5" />
        Delete
      </DialogTrigger>

      <DialogContent className="max-w-md p-0" zIndex={60}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center size-10 rounded-full bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 shrink-0">
              <TriangleWarningIcon className="size-5"/>
            </div>
            <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
              Delete Portal?
            </h2>
          </div>

          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
            This will permanently delete the portal, the uploaded file, and all activity logs. This action cannot be undone.
          </p>

          <div className="flex justify-end gap-3 pt-4 border-t border-dashed border-zinc-300 dark:border-zinc-700">
            <DialogClose as={Button} variant="outline" disabled={isDeleting} className="w-auto">
              Cancel
            </DialogClose>
            <Button
              onClick={handleDelete}
              isLoading={isDeleting}
              className="w-auto bg-red-600 hover:bg-red-700 text-white border-0 shadow-sm"
            >
              Delete Permanently
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
