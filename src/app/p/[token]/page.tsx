const features = [
  {
    title: "Zero Friction",
    description: "Access the deliverable instantly via the secure token without creating an account.",
  },
  {
    title: "Clear Context",
    description: "See the file and the consultant's one-line note in a single, distraction-free view.",
  },
  {
    title: "One-Click Sign-off",
    description: "Formally approve the work with a single click to notify the consultant immediately.",
  },
  {
    title: "Request Changes",
    description: "Provide a brief text explanation of what needs to be fixed before the work is approved.",
  },
];

export default async function ClientPortal({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  return (
    <main className="h-screen flex flex-col flex-1 items-center justify-center bg-zinc-950">
      <div className="flex flex-col gap-4 items-start text-left">
        <h1 className="max-w-xs text-5xl font-semibold leading-10 tracking-tight text-zinc-50">
          Verori
          <code className="align-top font-normal text-xs bg-zinc-900 px-3 py-1 rounded-sm ml-4 text-teal-400">
            Client View
          </code>
        </h1>
        <p className="max-w-[45ch] text-lg leading-8 text-zinc-400">
          The public link a client opens to review the deliverable and provide their official sign-off.
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

        <div className="flex w-full gap-2 mt-2">
          <button className="flex-1 bg-teal-600 text-white py-2 rounded-sm text-sm font-semibold hover:bg-teal-700 transition-colors">
            Approve
          </button>
          <button className="flex-1 bg-zinc-900 border border-zinc-700 text-zinc-300 py-2 rounded-sm text-sm font-semibold hover:bg-zinc-800 transition-colors">
            Request Changes
          </button>
        </div>

        <div className="w-full text-center mt-4">
          <p className="text-xs text-zinc-600 font-mono">
            Token: {token}
          </p>
        </div>
      </div>
    </main>
  );
}
