import { ElementType, ComponentPropsWithoutRef, ReactNode } from "react"
import { cn } from "@/components/util"

type ActionBadgeProps<T extends ElementType = "button"> = {
  as?: T
  icon?: ReactNode
  variant?: "primary" | "success"
  size?: "sm" | "default"
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, "as" | "icon" | "variant" | "size">

export function ActionBadge<T extends ElementType = "button">({
  as,
  icon,
  variant = "primary",
  size = "default",
  children,
  className,
  ...props
}: ActionBadgeProps<T>) {
  const Component = (as ?? "button") as ElementType

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 active:scale-[0.98]",
        size === "default" && "gap-1.5 text-xs px-3 py-1.5",
        size === "sm" && "gap-1 text-[11px] px-2.5 py-1",

        variant === "primary" &&
          "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-zinc-50",
        variant === "success" &&
          "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50",

        className
      )}
      {...props}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {children}
    </Component>
  )
}
