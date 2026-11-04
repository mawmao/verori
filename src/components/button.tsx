import { Spinner } from "@/components/spinner"

type ButtonVariant = "primary" | "outline" | "ghost"

type ButtonOwnProps = {
  variant?: ButtonVariant
  isLoading?: boolean
}

type ButtonProps<C extends React.ElementType = "button"> = ButtonOwnProps & { as?: C } & Omit<React.ComponentPropsWithoutRef<C>, keyof ButtonOwnProps | "as">

const baseClasses = "cursor-pointer w-full text-xs transition-colors"

const boxedClasses = "py-2.5 flex items-center justify-center gap-2 rounded-sm font-medium disabled:opacity-50"

const variantClasses: Record<ButtonVariant, string> = {
  primary: `${boxedClasses} bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 w-full text-center hover:bg-zinc-800 dark:hover:bg-zinc-200`,
  outline: `${boxedClasses} bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-zinc-50`,
  ghost: "text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 text-center w-full transition-colors cursor-pointer",
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
      className={`${baseClasses} ${variantClasses[variant]}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {isLoading && variant === "primary" && <Spinner />}
      {children}
    </Component>
  )
}

export type { ButtonProps, ButtonVariant }
