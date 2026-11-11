import Link from "next/link"
import { VeroriIcon } from "@/components/icon/verori"
import { cn } from "@/components/util"

interface Props {
  href?: string
  iconSize?: string
  textSize?: string
  className?: string
}

export function BrandLogo({ href, iconSize = "size-6", textSize = "text-lg", className }: Props) {

  const content = (
    <>
      <VeroriIcon className={cn("text-zinc-950 dark:text-zinc-50", iconSize)} />
      <span className={cn("font-semibold tracking-tighter uppercase text-zinc-950 dark:text-zinc-50", textSize)}>
        Verori
      </span>
    </>
  )

  const baseClasses = cn("flex items-center gap-2", className)

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, "hover:opacity-80 transition-opacity")}>
        {content}
      </Link>
    )
  }

  return <div className={baseClasses}>{content}</div>
}
