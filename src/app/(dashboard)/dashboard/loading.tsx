export default function DashboardLoading() {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-10 sm:py-12">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 p-6 sm:p-8 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl">
        <div className="space-y-2">
          <div className="h-8 w-32 bg-skeleton rounded-md animate-pulse" />
          <div className="h-4 w-64 bg-skeleton rounded-md animate-pulse" />
        </div>
        <div className="h-9 w-9 bg-skeleton rounded-md shrink-0 hidden sm:block animate-pulse" />
      </div>

      <div className="flex gap-1 mb-6 pb-1 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-8 w-24 bg-skeleton rounded-lg shrink-0 animate-pulse" />
        ))}
      </div>

      <ul className="flex flex-col gap-4">
        {[...Array(3)].map((_, i) => (
          <li
            key={i}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:px-6 sm:py-5 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl gap-3 sm:gap-6 animate-pulse"
          >
            <div className="space-y-2">
              <div className="h-4 w-48 bg-skeleton rounded-md" />
              <div className="h-3 w-32 bg-skeleton rounded-md" />
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 shrink-0">
              <div className="h-6 w-20 bg-skeleton rounded-full" />
              <div className="h-4 w-16 bg-skeleton rounded-md hidden sm:block" />
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
