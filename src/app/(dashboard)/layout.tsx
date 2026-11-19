import { SiteFooter } from "@/components/site-footer"
import { verifySession } from "@/lib/dal"
import { connection } from "next/server"
import { UserMenu } from "@/components/user-menu"
import { BrandLogo } from "@/components/brand-logo"
import { Suspense } from "react"
import Link from "next/link"
import { cn } from "@/components/util"

export default function DashboardGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh flex flex-col bg-zinc-50 dark:bg-zinc-950">
      <Suspense fallback={<TopNavSkeleton />}>
        <TopNav />
      </Suspense>

      <main className="flex-1 min-h-0 overflow-y-auto">
        {children}
      </main>

      <footer className="shrink-0 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-3">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500">
          <span>© 2026 Verori</span>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">Feedback</Link>
            <Link href="/terms" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">Terms</Link>
            <Link href="/refund" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">Refund</Link>
            <Link href="/privacy" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

async function TopNav() {
  await connection()
  const { user } = await verifySession()

  const currentPath = "/dashboard"

  return (
    <header className="sticky top-0 z-30 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="flex h-14 max-w-[1400px] mx-auto items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <BrandLogo href="/dashboard" />

          <nav className="flex items-center gap-1">
            <Link
              href="/dashboard"
              aria-label="Dashboard"
              className={cn(
                "text-sm px-2.5 py-1.5 flex items-center justify-center rounded-md transition-colors font-medium",
                currentPath === "/dashboard"
                  ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50"
                  : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              )}
            >
              Dashboard
            </Link>

            <button
              disabled
              className="flex items-center gap-1.5 text-sm px-2.5 py-1.5 rounded-md text-zinc-400 dark:text-zinc-600 cursor-not-allowed select-none"
              title="Client management is coming in a future update"
            >
              Clients
              <span className="text-[8px] font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded-sm dark:bg-zinc-800 dark:text-zinc-400">
                Soon
              </span>
            </button>

            <button
              disabled
              className="flex items-center gap-1.5 text-sm px-2.5 py-1.5 rounded-md text-zinc-400 dark:text-zinc-600 cursor-not-allowed select-none"
              title="File library is coming in a future update"
            >
              Uploaded Files
              <span className="text-[8px] font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded-sm dark:bg-zinc-800 dark:text-zinc-400">
                Soon
              </span>
            </button>
          </nav>
        </div>

        <UserMenu email={user.email || ""} />
      </div>
    </header>
  )
}

function TopNavSkeleton() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex h-14 max-w-[1400px] mx-auto items-center justify-between px-6 animate-pulse">
        <div className="flex items-center gap-8">
          <div className="size-6 bg-zinc-200 dark:bg-zinc-800 rounded-sm" />
          <div className="h-8 w-20 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
        </div>
        <div className="h-8 w-8 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
      </div>
    </header>
  )
}
