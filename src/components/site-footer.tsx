import Link from "next/link"
import { cn } from "@/components/util"

interface SiteFooterProps extends React.ComponentProps<"footer"> {
  links: { label: string, href: string }[]
}

export function SiteFooter({ links, className }: SiteFooterProps) {
  return (
    <footer className="w-full border-t border-dashed border-zinc-300 dark:border-zinc-700 mt-auto shrink-0">
      <div className={cn(
        "max-w-6xl text-xs flex flex-col sm:flex-row items-center justify-between py-6 sm:py-0 sm:h-16 mx-auto px-6 sm:px-8 text-zinc-500 dark:text-zinc-400 gap-4 sm:gap-0",
        className
      )}>
        <p>© 2026 Verori. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              prefetch={false}
              href={link.href}
              className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
