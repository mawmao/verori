import { DashboardLayoutFooter } from "./_components/footer";
import { DashboardLayoutHeader, HeaderSkeleton } from "./_components/header";
import { Suspense } from "react";

export default function DashboardGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<HeaderSkeleton />}>
        <DashboardLayoutHeader />
      </Suspense>
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <DashboardLayoutFooter />
    </>
  )
}
