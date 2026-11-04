"use client"

import { Button } from "@/components/button"
import { Dialog, DialogTrigger, DialogContent } from "@/components/dialog"
import { useFormStatus } from "react-dom"
import { createPortal } from "@/features/portal/actions"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { DialogClose } from "@/components/dialog"
import { UploadIcon } from "@/components/icon/upload"
import { PlusIcon } from "@/components/icon/plus"

export function CreatePortalDialog({ isIcon = false }: { isIcon?: boolean }) {
  return (
    <Dialog>
      {isIcon ? (
        <DialogTrigger
          as={Button}
          variant="ghost"
          aria-label="Create New Portal"
        >
          <PlusIcon className="size-5" />
        </DialogTrigger>
      ) : (
        <DialogTrigger as={Button}>
          New Portal
        </DialogTrigger>
      )}

      <DialogContent className="sm:max-w-[500px]">
        <div className="px-6 pt-6 pb-4 border-b border-dashed border-zinc-300 dark:border-zinc-800">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Create new portal
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Upload a deliverable to generate a secure, tokenized approval link for your client.
          </p>
        </div>

        <CreatePortalForm />
      </DialogContent>
    </Dialog>
  )
}


function CreatePortalForm() {
  return (
    <form action={createPortal} className="p-6 flex flex-col gap-6">

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="client_name">Client Name</Label>
          <Input
            id="client_name"
            name="client_name"
            required
            placeholder="Acme SaaS"
            autoFocus
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Deliverable Title</Label>
          <Input
            id="title"
            name="title"
            required
            placeholder="Q3 SEO Audit"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="context_note">Context Note <span className="text-zinc-400 font-normal">(Optional)</span></Label>
          <Input
            id="context_note"
            name="context_note"
            placeholder="Please review before our call on Friday."
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="file">Upload Deliverable</Label>
          <div className="relative">
            <input
              type="file"
              id="file"
              name="file"
              required
              accept=".pdf,image/jpeg,image/png,image/webp"
              className="peer sr-only"
            />
            <label
              htmlFor="file"
              className="flex flex-col items-center justify-center w-full h-28 px-4 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg cursor-pointer bg-zinc-50 dark:bg-zinc-950/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-zinc-500"
            >
              <UploadIcon className="size-6 text-zinc-400 dark:text-zinc-500 mb-2" />
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                <span className="font-medium text-zinc-950 dark:text-zinc-50">Click to upload</span> or drag and drop
              </p>
              <p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider">
                PDF, JPG, PNG (max 1MB) {/* TODO: 1MB for now */}
              </p>
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-5 mt-2 border-t border-dashed border-zinc-300 dark:border-zinc-800">
        <DialogClose as={Button} type="button" variant="outline">
          Cancel
        </DialogClose>
        <SubmitButton />
      </div>

    </form>
  )
}


function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} isLoading={pending}>
      {pending ? "Creating..." : "Create & Generate Link"}
    </Button>
  )
}
