
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
    <main className="h-screen flex flex-col flex-1 items-center justify-center">
      <div className="flex flex-col gap-4 items-start text-left">
        <h1 className="max-w-xs text-5xl font-semibold leading-10 tracking-tight text-zinc-50">
          Verori
          <code className="align-top font-normal text-xs bg-zinc-900 px-3 py-1 rounded-sm ml-4">Dashboard</code>
        </h1>
        <p className="max-w-[45ch] text-lg leading-8 text-zinc-400">
          A client-approval portal that tracks every deliverable through timestamped records of when it was sent, viewed, approved, or left unanswered.
        </p>


        <div className="w-full mt-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
            Features
          </h2>

          <ul className="flex flex-col divide-y divide-zinc-800 border-y border-zinc-800">
            {features.map((feature) => (
              <li key={feature.title} className="py-4">
                <h3 className="text-sm font-semibold text-zinc-200">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-500 mt-1">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="bg-zinc-900 w-full py-2 mt-2 text-center rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
        >
          New Portal
        </button>
      </div>
    </main>
  )
}
