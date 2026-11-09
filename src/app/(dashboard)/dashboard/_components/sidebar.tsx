export function DashboardSidebar() {
  return (
    <aside className="lg:col-span-1 space-y-4 hidden lg:block">
      <div className="p-5 verori-border rounded-xl bg-zinc-50 dark:bg-zinc-900/50">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-2">
          <span className="text-teal-600 dark:text-teal-400">✦</span> Pro Tip
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Clients are 80% more likely to approve work if you provide a clear context note explaining exactly what you need them to review.
        </p>
      </div>

      <div className="p-5 verori-border rounded-xl">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
          How it works
        </h3>
        <ol className="space-y-4">
          {[
            ["Create a link", "Add your client and the deliverable."],
            ["Send it", "Your client opens it, no account needed."],
            ["Track the result", "See when it's viewed, approved, or sent back."],
          ].map(([title, body], i) => (
            <li key={title} className="flex gap-3">
              <span className="text-xs font-semibold tabular-nums text-zinc-400 dark:text-zinc-600 mt-0.5">
                0{i + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">{title}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  )
}
