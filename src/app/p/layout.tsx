import React from "react";

export default function ClientPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh overflow-hidden flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors texture-overlay">
      {children}
    </div>
  )
}
