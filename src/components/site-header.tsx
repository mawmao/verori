
import Link from "next/link"
import { VeroriIcon } from "./icon/verori"

interface Props extends React.ComponentProps<"header"> { }

export function SiteHeader({ className, children }: Props) {
  return (
    <header className="sticky top-0 z-30 w-full verori-border bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-sm transition-colors">
      <div className="flex h-16 max-w-6xl mx-auto items-center justify-between px-6 sm:px-8">
        <Link href="/dashboard" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <VeroriIcon className="size-6 text-zinc-950 dark:text-zinc-50" />
          <span className="text-lg font-semibold tracking-tighter uppercase text-zinc-950 dark:text-zinc-50">
            Verori
          </span>
        </Link>
        {children}
      </div>
    </header>
  )
}
