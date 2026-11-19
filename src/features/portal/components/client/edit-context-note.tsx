"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/button"
import { updateContextNote } from "../../actions/update-context-note"
import { EditIcon } from "@/components/icon/edit"

interface Props {
  portalId: string
  initialNote: string
  canEdit: boolean
}

export function EditContextNote({
  portalId,
  initialNote,
  canEdit,
}: Props) {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [note, setNote] = useState(initialNote)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setNote(initialNote)
    setIsEditing(false)
  }, [portalId, initialNote])

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await updateContextNote(portalId, note.trim())
      setIsEditing(false)
      router.refresh()
    } catch (error) {
      console.error(error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <section className="space-y-2.5">
      <div className="flex items-center justify-between">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Context Note
        </h2>
        {canEdit && !isEditing && (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
          >
            <EditIcon className="size-3.5" />
            Edit
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-2.5">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add a note for your client..."
            rows={3}
            autoFocus
            className="w-full p-3.5 text-sm border border-zinc-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950/10 resize-none"
          />
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              disabled={isSaving}
              onClick={() => {
                setNote(initialNote)
                setIsEditing(false)
              }}
            >
              Cancel
            </Button>
            <Button type="button" onClick={handleSave} isLoading={isSaving}>
              Save Note
            </Button>
          </div>
        </div>
      ) : (
        <div className="p-4 verori-border rounded-lg bg-white dark:bg-zinc-900/40">
          {note ? (
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap">
              {note}
            </p>
          ) : (
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              No context note provided.
            </p>
          )}
        </div>
      )}
    </section>
  )
}
