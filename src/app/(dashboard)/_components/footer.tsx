import Link from "next/link"

export function DashboardLayoutFooter() {
  return (
    <footer className="w-full border-t border-dashed border-zinc-300 dark:border-zinc-700 mt-auto shrink-0">
      <div className="flex flex-col sm:flex-row items-center justify-between py-6 sm:py-0 sm:h-16 max-w-6xl mx-auto px-6 sm:px-8 text-xs text-zinc-500 dark:text-zinc-400 gap-4 sm:gap-0">
        <p>© 2026 Verori. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link prefetch={false} href="/contact" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">
            Contact
          </Link>
          <Link prefetch={false} href="/terms" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">
            Terms
          </Link>
          <Link prefetch={false} href="/privacy" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">
            Privacy
          </Link>
          <Link prefetch={false} href="/cookies" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  )
}
