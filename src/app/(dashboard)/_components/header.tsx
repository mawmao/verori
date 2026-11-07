import { verifySession } from "@/lib/dal"
import { VeroriIcon } from "@/components/icon/verori"
import Link from "next/link"
import { connection } from "next/server"
import { UserMenu } from "@/components/user-menu"

export async function DashboardLayoutHeader() {
  await connection()
  const { user } = await verifySession()

  return (
    <header className="sticky top-0 z-30 w-full verori-border bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-sm transition-colors">

      <div className="flex h-16 max-w-6xl mx-auto items-center justify-between px-6 sm:px-8">

        <Link href="/dashboard" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <VeroriIcon className="size-6 text-zinc-950 dark:text-zinc-50" />
          <span className="text-lg font-semibold tracking-tighter uppercase text-zinc-950 dark:text-zinc-50">
            Verori
          </span>
        </Link>

        <UserMenu email={user.email || ""} />

      </div>
    </header>
  )
}

export function HeaderSkeleton() {
  return (
    <header className="sticky top-0 z-30 w-full verori-border bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="flex h-16 max-w-5xl mx-auto items-center justify-between px-6 sm:px-8 animate-pulse">

        <div className="flex items-center gap-2">
          <div className="size-6 bg-zinc-200 dark:bg-zinc-800 rounded-sm" />
          <div className="h-5 w-20 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
        </div>

        <div className="flex items-center gap-6">
          <div className="h-4 w-32 bg-zinc-200 dark:bg-zinc-800 rounded-md hidden sm:block" />
          <div className="h-4 w-12 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
        </div>

      </div>
    </header>
  )
}
