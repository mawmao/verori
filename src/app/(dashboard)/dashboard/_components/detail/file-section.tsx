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
          <div className="h-4 w-24 bg-skeleton rounded-md" />
          <div className="aspect-4/3 w-full bg-skeleton border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl" />
        </div>
      )
    }
  }
)
