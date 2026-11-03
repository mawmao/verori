import Link from "next/link"
import { VeroriIcon } from "@/components/icon/verori"

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-20 px-6">
      <div className="max-w-2xl mx-auto flex flex-col gap-8 h-full min-h-[80vh]">

        <div className="flex flex-col gap-4 border-b border-zinc-800 pb-8">
          <Link href="/login" className="flex items-center gap-2 w-fit hover:opacity-80 transition-opacity">
            <VeroriIcon className="size-6" />
            <span className="text-xl font-semibold tracking-tighter uppercase text-zinc-950 dark:text-zinc-50">
              Verori
            </span>
          </Link>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Terms of Service
            </h1>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-12">
          <h2 className="text-xl font-medium text-zinc-800 dark:text-zinc-200">
            Coming Soon
          </h2>
          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-sm">
            Our official Terms of Service are currently being finalized. They will be available here in the future.
          </p>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-auto transition-colors">
          <Link
            href="/login"
            className="inline-flex items-center text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4"
          >
            &larr; Back to Login
          </Link>
        </div>
      </div>
    </main>
  )
}
