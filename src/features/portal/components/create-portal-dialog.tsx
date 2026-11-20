"use client"

import { Button } from "@/components/button"
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/dialog"
import { createPortal } from "@/features/portal/actions"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { UploadIcon } from "@/components/icon/upload"
import { PlusIcon } from "@/components/icon/plus"
import { useRef, useState } from "react"
import { CloseIcon } from "@/components/icon/close"
import { CheckCircleIcon } from "@/components/icon/check-circle"
import { cn } from "@/components/util"
import { MAX_UPLOAD_SIZE_BYTES, MAX_UPLOAD_SIZE_MB } from "../portal.constants"
import { createClient } from "@/lib/supabase/client"
import { getImageDimensions } from "@/lib/image"
import { useRouter } from "next/navigation"

export function CreatePortalDialog({ isIcon = false }: { isIcon?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleSuccess = (shareToken: string) => {
    setIsOpen(false)
    router.push(`/dashboard?portal=${shareToken}`)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {isIcon ? (
        <DialogTrigger as={Button} variant="ghost" aria-label="Create New Portal">
          <PlusIcon className="size-5" />
        </DialogTrigger>
      ) : (
        <DialogTrigger as={Button} className="gap-0 w-auto">
          <PlusIcon className="size-4 mr-2" />
          New Portal
        </DialogTrigger>
      )}

      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="px-6 pt-6 pb-5 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Create new portal
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Upload a deliverable to generate a secure, tokenized approval link.
          </p>
        </div>

        <CreatePortalForm onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  )
}

function CreatePortalForm({ onSuccess }: { onSuccess: (token: string) => void }) {
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  const [isPending, setIsPending] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null)
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      if (selectedFile.size > MAX_UPLOAD_SIZE_BYTES) {
        console.log(selectedFile.size, MAX_UPLOAD_SIZE_BYTES)
        setFileError(`File is too large. Maximum size is ${MAX_UPLOAD_SIZE_MB}MB.`)
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

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {

    e.preventDefault()
    setIsPending(true)
    setFileError(null)

    const form = e.currentTarget
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setFileError('Not authenticated')
      setIsPending(false)
      return
    }

    if (!file) {
      setFileError('File is required')
      setIsPending(false)
      return
    }

    let metadata = {}
    if (file.type.startsWith('image/')) {
      try {
        const dimensions = await getImageDimensions(file)
        metadata = {
          width: dimensions.width,
          height: dimensions.height,
          orientation: dimensions.width > dimensions.height ? 'landscape' : 'portrait'
        }
      } catch (err) {
        console.error("Failed to parse image metadata", err)
      }
    }

    const fileExt = file.name.split('.').pop()
    const uniqueFilename = `${crypto.randomUUID()}.${fileExt}`
    const storageKey = `${user.id}/${uniqueFilename}`

    const { error: uploadError } = await supabase.storage
      .from('deliverables')
      .upload(storageKey, file)

    if (uploadError) {
      console.error(uploadError)
      setFileError('Failed to upload file. Please try again.')
      setIsPending(false)
      return
    }

    const serverFormData = new FormData()
    serverFormData.append('client_name', (form.elements.namedItem('client_name') as HTMLInputElement).value)
    serverFormData.append('title', (form.elements.namedItem('title') as HTMLInputElement).value)
    serverFormData.append('context_note', (form.elements.namedItem('context_note') as HTMLInputElement).value)

    serverFormData.append('storage_key', storageKey)
    serverFormData.append('file_name', file.name)
    serverFormData.append('mime_type', file.type)
    serverFormData.append('file_size', file.size.toString())
    serverFormData.append('metadata', JSON.stringify(metadata))

    try {
      const { success, shareToken } = await createPortal(serverFormData)
      if (success) {
        onSuccess(shareToken)
      }

    } catch (err) {
      setFileError(err instanceof Error ? err.message : 'Failed to create portal')
      setIsPending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="p-6 flex flex-col gap-5">

        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="client_name">Client Name</Label>
            <Input id="client_name" name="client_name" required placeholder="Acme SaaS" autoFocus />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="title">Deliverable Title</Label>
            <Input id="title" name="title" required placeholder="Q3 SEO Audit" />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="context_note">Context Note <span className="text-zinc-400 font-normal">(Optional)</span></Label>
            <Input id="context_note" name="context_note" placeholder="Please review before our call on Friday." />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="file">Upload Deliverable</Label>
          <input
            type="file"
            id="file"
            name="file"
            required={!file}
            onChange={handleFileChange}
            ref={fileInputRef}
            className="peer sr-only"
          />

          {!file ? (
            <label
              htmlFor="file"
              className={cn(
                "flex flex-col items-center justify-center w-full h-32 px-4 border border-dashed rounded-lg cursor-pointer transition-all",
                fileError
                  ? "border-red-300 bg-red-50/50 dark:border-red-900 dark:bg-red-950/20"
                  : "border-zinc-300 bg-zinc-50 hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900/50 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/50"
              )}
            >
              <UploadIcon className="size-5 text-zinc-400 mb-2" />
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                <span className="font-medium text-zinc-950 dark:text-zinc-50">Click to upload</span> or drag and drop
              </p>
              <p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider">
                PDF, JPG, PNG (max {MAX_UPLOAD_SIZE_MB}MB)
              </p>
            </label>
          ) : (
            <div className="flex items-center justify-between p-3 border border-zinc-200 rounded-lg bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3 min-w-0">
                <CheckCircleIcon className="size-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-zinc-950 dark:text-zinc-50 truncate">
                    {file.name}
                  </p>
                  <p className="text-[10px] font-mono text-zinc-500">
                    PDF, JPG, PNG (max {MAX_UPLOAD_SIZE_MB}MB)
                  </p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                onClick={handleRemoveFile}
                className="w-auto! p-1.5! text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
              >
                <CloseIcon className="size-4" />
              </Button>
            </div>
          )}
          {fileError && <p className="text-xs text-red-500 font-medium mt-1">{fileError}</p>}
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
        <DialogClose as={Button} type="button" variant="outline">
          Cancel
        </DialogClose>
        <Button type="submit" disabled={isPending || !!fileError} isLoading={isPending}>
          {isPending ? "Creating..." : "Create & Generate Link"}
        </Button>
      </div>
    </form>
  )
}
