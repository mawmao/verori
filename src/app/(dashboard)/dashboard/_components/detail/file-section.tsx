import { FilePreview } from "@/features/portal/components/file-preview"
import { getPortalFile } from "@/features/portal"

export const PortalFileSection = Object.assign(
  async function PortalFileSection({ id }: { id: string }) {
    const fileData = await getPortalFile(id)

    return (
      <div className="lg:col-span-2 space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
          Deliverable
        </h2>
        <FilePreview file={fileData} signedUrl={fileData?.signedUrl} />
      </div>
    )
  },
  {
    Skeleton: () => {
      return (
        <div className="lg:col-span-2 space-y-4 animate-pulse">
          <div className="h-5 w-24 bg-skeleton rounded-md" />
          <div className="flex flex-col verori-border rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 shrink-0">
              <div className="h-4 w-48 bg-skeleton rounded-md" />
              <div className="size-4 bg-skeleton rounded-sm" />
            </div>
            <div className="w-full h-[500px] lg:h-[600px] bg-skeleton" />
          </div>
        </div>
      )
    }
  }
)
