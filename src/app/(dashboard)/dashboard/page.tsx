import { Button } from "@/components/button";
import { VeroriIcon } from "@/components/icon/verori";

const features = [
  {
    title: "Deliverable Tracker",
    description: "View every sent deliverable and its current status in one unified table.",
  },
  {
    title: "Visual Statuses",
    description: "Instantly identify if a client has viewed, approved, or requested changes.",
  },
  {
    title: "Quick Launch",
    description: "Generate a new secure approval link without navigating away from the dashboard.",
  },
  {
    title: "Activity Snapshot",
    description: "See a relative timestamp of the exact moment the client last interacted with the portal.",
  },
];


export default function Dashboard() {
  return (
    <main className="h-screen flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <div className="flex flex-col gap-4 items-start text-left">
        <div className='flex gap-2 items-center'>
          <VeroriIcon className='size-8' />
          <h1 className="text-4xl font-semibold tracking-tighter uppercase text-zinc-950 dark:text-zinc-50 flex items-center gap-4">
            Verori
          </h1>
        </div>
        <p className="max-w-[45ch] text-lg text-zinc-500 dark:text-zinc-400">
          A client-approval portal that tracks every deliverable through timestamped records of when it was sent, viewed, approved, or left unanswered.
        </p>


        <div className="w-full mt-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
            Features
          </h2>

          <ul className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            {features.map((feature) => (
              <li key={feature.title} className="py-4">
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-500 mt-1">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <Button >
          New Portal
        </Button>
      </div>
    </main>
  )
}
