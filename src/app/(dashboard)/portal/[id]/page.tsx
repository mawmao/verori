const features = [
  {
    title: "Document Preview",
    description: "View the uploaded deliverable directly inside the app without downloading it.",
  },
  {
    title: "Activity Ledger",
    description: "Review a timestamped log of exactly when the client viewed or responded to the link.",
  },
  {
    title: "Quick Actions",
    description: "Copy the secure share link to your clipboard or trigger a manual reminder.",
  },
  {
    title: "Change Requests",
    description: "Read the specific text explanation provided by the client when they request revisions.",
  },
];

export default async function PortalDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="h-screen flex flex-col flex-1 items-center justify-center bg-zinc-950">
      <div className="flex flex-col gap-4 items-start text-left">
        <h1 className="max-w-xs text-5xl font-semibold leading-10 tracking-tight text-zinc-50">
          Verori
          <code className="align-top font-normal text-xs bg-zinc-900 px-3 py-1 rounded-sm ml-4 text-zinc-300">
            Portal: {id}
          </code>
        </h1>
        <p className="max-w-[45ch] text-lg leading-8 text-zinc-400">
          The detailed view of a specific deliverable, including the file preview and the timestamped activity log.
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
      </div>
    </main>
  );
}
