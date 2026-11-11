import { SiteFooter } from "@/components/site-footer";
import { verifySession } from "@/lib/dal"
import { connection } from "next/server"
import { UserMenu } from "@/components/user-menu"
import { SiteHeader } from "@/components/site-header"
import { Suspense } from "react";

export default function DashboardGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh overflow-hidden flex flex-col">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      <main className="flex-1 flex flex-col min-h-0">
        {children}
      </main>
      <SiteFooter
        links={[
          { label: "Contact", href: "/contact" },
          { label: "Terms", href: "/terms" },
          { label: "Privacy", href: "/privacy" },
          { label: "Cookies", href: "/cookies" },
        ]}
      />
    </div>
  )
}


async function Header() {
  await connection()
  const { user } = await verifySession()

  return (
    <SiteHeader>
      <UserMenu email={user.email || ""} />
    </SiteHeader>
  )
}

function HeaderSkeleton() {
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
