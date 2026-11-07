import { VeroriIcon } from '@/components/icon/verori'
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
          <div className='flex gap-2 items-center'>
            <VeroriIcon className='size-8' />
            <h1 className="text-4xl font-semibold tracking-tighter uppercase text-zinc-950 dark:text-zinc-50 flex items-center gap-4">
              Verori
            </h1>
          </div>
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
          {" and "}
          <Link
            href="/privacy"
            className="underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-2 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
          >
            Privacy Policy
          </Link>.
        </p>

      </div>
    </main>
  )
}
