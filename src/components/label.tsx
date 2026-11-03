
export function Label({ children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className="text-xs font-medium text-zinc-600 dark:text-zinc-300" {...props}>
      {children}
    </label>
  )
}
