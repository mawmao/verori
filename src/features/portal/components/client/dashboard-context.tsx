"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface DashboardContext {
  optimisticId: string | null
  setOptimisticId: (id: string | null) => void
}

const dashboardContext = createContext<DashboardContext | null>(null)

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [optimisticId, setOptimisticId] = useState<string | null>(null)

  return (
    <dashboardContext.Provider value={{ optimisticId, setOptimisticId }}>
      {children}
    </dashboardContext.Provider>
  )
}

export function useDashboard() {
  const context = useContext(dashboardContext)
  if (!context) throw new Error("useDashboard must be used within DashboardProvider")
  return context
}
