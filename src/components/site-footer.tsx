import Link from "next/link"
import { BrandLogo } from "./brand-logo"

interface SiteFooterProps extends React.ComponentProps<"footer"> {
  links: { label: string, href: string }[]
}

export function SiteFooter({ links }: SiteFooterProps) {
  return (
    <footer className="w-full border-t border-dashed border-zinc-300 bg-zinc-50 py-8 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:justify-between">

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <BrandLogo href="/" />
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
              Timestamped proof of delivery for freelancers. Stop chasing, start shipping.
            </p>
          </div>
          <div className="flex gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2">
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-950 dark:text-zinc-50">
              Product
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="/pricing" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">Pricing</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">How it Works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-950 dark:text-zinc-50">
              Resources
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li>
                <Link href="/templates" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">
                  Email Templates
                </Link>
              </li>
              <li>
                <Link href="/for/brand-consultants" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">
                  For Brand Consultants
                </Link>
              </li>
              <li>
                <Link href="/compare/verori-vs-email" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">
                  Verori vs Email
                </Link>
              </li>
              <li>
                <Link href="/guides/client-never-approved" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">
                  Freelance Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="mt-4 pt-4 mx-auto max-w-6xl px-6 border-t border-dashed border-zinc-200 dark:border-zinc-800">
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          © 2026 Verori. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
