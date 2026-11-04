'use client'

import { Button } from '@/components/button'
import { createClient } from '@/lib/supabase/client'

export function LogoutButton({ className, ...props }: React.ComponentProps<"button">) {
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      className={`text-sm hover:opacity-90 transition-opacity cursor-pointer ${className}`}
      {...props}
    >
      Log out
    </Button>
  )
}
