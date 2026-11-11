import { BrandLogo } from '@/components/brand-logo'
import { LoginForm } from '@/features/auth/components/client/login-form'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Login"
}

export default function Login() {
  return (
    <main className="h-screen flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <div className="flex flex-col gap-6 items-start text-left w-full max-w-[400px] px-6">

        <div className="space-y-2 w-full">
          <BrandLogo iconSize='size-8' textSize='text-4xl' />
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Welcome back. Sign in or create an account to manage your approvals.
          </p>
        </div>

        <LoginForm />

        <p className="text-xs text-zinc-500 dark:text-zinc-400 w-full text-center mt-4 leading-relaxed">
          By continuing, you agree to VERORI's <br />
          <Link
            href="/terms"
            className="underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-2 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
          >
            Terms of Service
          </Link>
          {", "}
          <Link
            href="/privacy"
            className="underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-2 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
          >
            Privacy Policy
          </Link>
          {", and "}
          <Link
            href="/cookies"
            className="underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-2 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
          >
            Cookie Policy
          </Link>.
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 w-full text-center mt-2 border-dashed border-t border-t-zinc-300 dark:border-t-zinc-700 pt-4">
          Having trouble logging in?{" "}
          <Link href="/contact" className="text-zinc-900 dark:text-zinc-100 underline underline-offset-2 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
            Contact Support
          </Link>
        </p>
      </div>
    </main>
  )
}
