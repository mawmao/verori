import { DashboardLayoutHeader, HeaderSkeleton } from "./_components/header";
import { Suspense } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <Suspense fallback={<HeaderSkeleton />}>
        <DashboardLayoutHeader />
      </Suspense>
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  )
}
