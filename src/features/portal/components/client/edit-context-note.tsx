"use client"

import { useState } from "react"
import { Button } from "@/components/button"
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/dialog"
import { updateContextNote } from "../../actions/update-context-note"
import { EditIcon } from "@/components/icon/edit"

export function EditContextNote({ portalId, initialNote }: { portalId: string, initialNote: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [note, setNote] = useState(initialNote)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await updateContextNote(portalId, note)
      setIsOpen(false)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        as={Button}
        variant="ghost"
        className="w-auto p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
        title="Edit context note"
      >
        <EditIcon />
      </DialogTrigger>

      <DialogContent className="max-w-md p-0" zIndex={60}>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50 mb-4">
            Edit Context Note
          </h2>

          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add a note for your client..."
            className="w-full h-32 p-3 text-sm border border-zinc-300 dark:border-zinc-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-zinc-500/50 focus:border-zinc-500 resize-none transition-all"
            autoFocus
          />

          <div className="flex justify-end gap-3 mt-6">
            <DialogClose as={Button} variant="outline" disabled={isSaving}>
              Cancel
            </DialogClose>
            <Button onClick={handleSave} isLoading={isSaving}>
              Save Note
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
