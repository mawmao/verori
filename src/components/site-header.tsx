
import { BrandLogo } from "./brand-logo"
import { cn } from "@/components/util/cn"

interface Props extends React.ComponentProps<"header"> { }

export function SiteHeader({ className, children }: Props) {
  return (
    <header className={cn("sticky top-0 z-30 w-full verori-border border-t-0 border-r-0 border-l-0 bg-zinc-50/25 dark:bg-zinc-950/80 backdrop-blur-md transition-colors", className)}>
      <div className="flex h-16 max-w-6xl mx-auto items-center justify-between px-6 sm:px-8">
        <BrandLogo href="/"/>
        {children}
      </div>
    </header>
  )
}
