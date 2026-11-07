import Link from "next/link"

export function DashboardLayoutFooter() {
  return (
    <footer className="w-full border-t border-dashed border-zinc-300 dark:border-zinc-700 mt-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between h-16 max-w-6xl mx-auto px-6 sm:px-8 text-xs text-zinc-500 dark:text-zinc-400">
        <p> © 2026 Verori </p>

        <div className="flex items-center gap-6 mt-2 sm:mt-0">
          <Link prefetch={false} href="/terms" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors" >
            Terms
          </Link>
          <Link prefetch={false} href="/privacy" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors" >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}
