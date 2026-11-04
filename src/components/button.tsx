import { Spinner } from "@/components/spinner"

type ButtonVariant = "primary" | "outline" | "ghost"

type ButtonOwnProps = {
  variant?: ButtonVariant
  isLoading?: boolean
}

type ButtonProps<C extends React.ElementType = "button"> = ButtonOwnProps & { as?: C } & Omit<React.ComponentPropsWithoutRef<C>, keyof ButtonOwnProps | "as">

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 w-full py-2 px-4 mt-2 text-center rounded-sm text-xs font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50 transition-colors cursor-pointer flex items-center justify-center gap-2",
  outline:
    "cursor-pointer w-full flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 py-2.5 rounded-sm text-xs font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-zinc-50 disabled:opacity-50 transition-colors",
  ghost:
    "cursor-pointer text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 mt-2 text-center w-full transition-colors",
}

export function Button<C extends React.ElementType = "button">({
  as,
  variant = "primary",
  isLoading,
  disabled,
  className,
  children,
  ...props
}: ButtonProps<C>) {
  const Component = (as ?? "button") as React.ElementType
  const isButton = Component === "button"
  const isDisabled = disabled || isLoading

  return (
    <Component
      {...(isButton
        ? { disabled: isDisabled }
        : { "aria-disabled": isDisabled })}
      className={`${variantClasses[variant]}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {isLoading && variant === "primary" && <Spinner />}
      {children}
    </Component>
  )
}

export type { ButtonProps, ButtonVariant }
