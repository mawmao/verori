import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

import { LogoutButton } from "@/features/auth";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <>
      <div className="fixed top-4 left-4 right-4 flex justify-between">
        <LogoutButton />
        <span className="text-sm text-zinc-500 hidden sm:inline-block">
          {user.email}
        </span>
      </div>
      {children}
    </>
  )
}
