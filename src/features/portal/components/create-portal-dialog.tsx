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
import { useRef, useState } from "react"
import { CloseIcon } from "@/components/icon/close"
import { CheckCircleIcon } from "@/components/icon/check-circle"
import { cn } from "@/components/util"

const MAX_FILE_SIZE = 1 * 1024 * 1024

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
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null)

    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]

      if (selectedFile.size > MAX_FILE_SIZE) {
        setFileError("File is too large. Maximum size is 1MB.")
        setFile(null)
        if (fileInputRef.current) fileInputRef.current.value = ""
        return
      }

      setFile(selectedFile)
    }
  }

  const handleRemoveFile = () => {
    setFile(null)
    setFileError(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

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

          <input
            type="file"
            id="file"
            name="file"
            required={!file}
            onChange={handleFileChange}
            ref={fileInputRef}
            accept=".pdf,image/jpeg,image/png,image/webp"
            className="peer sr-only"
          />

          {!file ? (
            <label
              htmlFor="file"
              className={cn(
                "flex flex-col items-center justify-center w-full h-28 px-4 border border-dashed rounded-lg cursor-pointer transition-colors",
                fileError
                  ? "border-red-400 bg-red-50 dark:bg-red-950/20"
                  : "border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
              )}
            >
              <UploadIcon className="size-6 text-zinc-400 mb-2" />
              <p className="text-xs text-zinc-500">
                <span className="font-medium text-zinc-950 dark:text-zinc-50">Click to upload</span> or drag and drop
              </p>
              <p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider">
                PDF, JPG, PNG (max 1MB)
              </p>
            </label>
          ) : (
            <div className="flex items-center justify-between p-3 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg">
              <div className="flex items-center gap-3 min-w-0">
                <CheckCircleIcon className="size-5 text-teal-500 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-zinc-950 dark:text-zinc-50 truncate">
                    {file.name}
                  </p>
                  <p className="text-[10px] text-zinc-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                onClick={handleRemoveFile}
                className="w-auto! p-1.5! text-zinc-400 hover:text-red-500"
              >
                <CloseIcon className="size-4" />
              </Button>
            </div>
          )}

          {fileError && (
            <p className="text-xs text-red-500 font-medium mt-1">{fileError}</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-5 mt-2 border-t border-dashed border-zinc-300 dark:border-zinc-800">
        <DialogClose as={Button} type="button" variant="outline">
          Cancel
        </DialogClose>
        <SubmitButton disabled={!fileError} />
      </div>

    </form>
  )
}


function SubmitButton({ disabled }: { disabled?: boolean }) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending || disabled} isLoading={pending}>
      {pending ? "Creating..." : "Create & Generate Link"}
    </Button>
  )
}
