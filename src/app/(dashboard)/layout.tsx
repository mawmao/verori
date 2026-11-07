import { DashboardLayoutFooter } from "./_components/footer";
import { DashboardLayoutHeader, HeaderSkeleton } from "./_components/header";
import { Suspense } from "react";

export default function DashboardGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh overflow-hidden flex flex-col">
      <Suspense fallback={<HeaderSkeleton />}>
        <DashboardLayoutHeader />
      </Suspense>
      <main className="flex-1 flex flex-col min-h-0">
        {children}
      </main>
      <DashboardLayoutFooter />
    </div>
  )
}
