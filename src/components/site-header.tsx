
import { BrandLogo } from "./brand-logo"
import { cn } from "@/components/util/cn"

interface Props extends React.ComponentProps<"header"> { }

export function SiteHeader({ className, children }: Props) {
  return (
    <header className={cn("sticky top-0 z-30 w-full verori-border bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-sm transition-colors", className)}>
      <div className="flex h-16 max-w-6xl mx-auto items-center justify-between px-6 sm:px-8">
        <BrandLogo />
        {children}
      </div>
    </header>
  )
}
