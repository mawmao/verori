import Link from "next/link";

const routes = [
  { name: "Login", path: "/login", description: "Magic link authentication" },
  { name: "Dashboard", path: "/dashboard", description: "Consultant approval list" },
  { name: "Client View", path: "/p/demo-token-123", description: "Public client approval page" },
  { name: "Portal Detail", path: "/portal/123", description: "Consultant activity log view" },
];

export default function Root() {
  return (
    <main className="h-screen flex flex-col flex-1 items-center justify-center">
      <div className="flex flex-col gap-4 items-start text-left">
        <h1 className="max-w-xs text-5xl font-semibold leading-10 tracking-tight text-zinc-50">
          Verori
        </h1>
        <p className="max-w-[45ch] text-lg leading-8 text-zinc-400">
          A client-approval portal that tracks every deliverable through timestamped records of when it was sent, viewed, approved, or left unanswered.
        </p>

        <div className="w-full mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
            Scaffolded Routes
          </h2>

          <div className="flex flex-col gap-2 w-full">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="group flex flex-col p-4 bg-zinc-900 border border-zinc-800 rounded-sm hover:border-zinc-600 transition-colors"
              >
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-zinc-50">
                  {route.name}
                </span>
                <span className="text-xs text-zinc-500 group-hover:text-zinc-400 mt-1">
                  {route.path} — {route.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
