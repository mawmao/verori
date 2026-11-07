import { CheckCircleIcon } from "@/components/icon/check-circle";
import { CreatePortalDialog } from "@/features/portal/components/create-portal-dialog";

export function DashboardEmpty() {

  const guideSteps = [
    ["Create a link", "Add your client and the deliverable."],
    ["Send it", "Your client opens it, no account needed."],
    ["Track the result", "See when it's viewed, approved, or sent back."],
  ]

  return (
    <div className="flex-1 mt-8 w-full max-w-xl mx-auto px-6 flex flex-col items-center text-center">
      <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-full mb-6">
        <CheckCircleIcon className="size-7 text-zinc-400 dark:text-zinc-500" />
      </div>

      <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Get your first approval
      </h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-sm">
        Share a deliverable with a client and see when they view it and sign off.
      </p>

      <div className="mt-8 w-full max-w-[200px]">
        <CreatePortalDialog />
      </div>


      <ol className="mt-14 w-full text-left divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
        {guideSteps.map(([title, body], i) => (
          <li key={title} className="flex items-baseline gap-4 py-4">
            <span className="text-xs font-medium tabular-nums text-zinc-400 dark:text-zinc-600 w-4">
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">{title}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
