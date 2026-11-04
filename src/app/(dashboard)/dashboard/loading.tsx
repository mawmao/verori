
export default function DashboardLoading() {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-10 animate-pulse">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="space-y-2">
          <div className="h-8 w-32 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
          <div className="h-4 w-48 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
        </div>
        <div className="h-10 w-full sm:w-32 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
      </div>

      <div className="flex gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-8 w-20 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
        ))}
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {[...Array(5)].map((_, i) => (
            <li key={i} className="p-5 flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-4 w-48 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
                <div className="h-4 w-32 bg-zinc-100 dark:bg-zinc-800/50 rounded-md" />
              </div>
              <div className="flex gap-4 items-center">
                <div className="h-6 w-20 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
                <div className="h-4 w-12 bg-zinc-100 dark:bg-zinc-800/50 rounded-md" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
