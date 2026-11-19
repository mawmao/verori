import Link from "next/link"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/button"
import { createClient } from "@/lib/supabase/server"
import { connection } from "next/server"

export function LandingHeader() {
  return (
    <SiteHeader>
      <nav className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          <Button as="a" href="/#how-it-works" variant="ghost" className="w-auto">
            How It Works
          </Button>
          <Button as={Link} href="/pricing" variant="ghost" className="w-auto">
            Pricing
          </Button>
          <Button as={Link} href="https://github.com/mawmao/verori" target="_blank" variant="ghost" className="w-auto">
            GitHub
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Suspense fallback={
            <>
              <Button as={Link} href="/login" variant="ghost" className="w-auto">
                Login
              </Button>
              <Button as={Link} href="/login" className="w-auto ml-2.5 px-6 py-2 text-xs">
                Try for free
              </Button>
            </>
          }>
            <AuthButtons />
          </Suspense>
        </div>
      </nav>
    </SiteHeader>
  )
}

async function AuthButtons() {
  await connection()
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    return (
      <Button as={Link} href="/dashboard" className="w-auto px-4 py-2 text-xs">
        Go to Dashboard
      </Button>
    )
  }

  return (
    <>
      <Button as={Link} href="/login" variant="ghost" className="w-auto">
        Login
      </Button>
      <Button as={Link} href="/login" className="w-auto ml-2.5 px-6 py-2 text-xs">
        Try for free
      </Button>
    </>
  )
}
