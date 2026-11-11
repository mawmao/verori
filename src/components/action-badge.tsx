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
        "flex items-center justify-center rounded-md font-medium transition-colors",
        size === "default" && "gap-1.5 text-xs px-3 py-1.5",
        size === "sm" && "gap-1 text-[11px] px-2 py-0.5",
        variant === "primary" && "text-teal-800 bg-teal-100/60 border border-teal-200/50 hover:bg-teal-100 dark:text-teal-300 dark:bg-teal-900/40 dark:border-teal-800 dark:hover:bg-teal-900/60 cursor-pointer",
        variant === "success" && "text-teal-800 bg-teal-100/60 border border-teal-200/50 dark:text-teal-300 dark:bg-teal-900/40 dark:border-teal-800 cursor-default",
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </Component>
  )
}
