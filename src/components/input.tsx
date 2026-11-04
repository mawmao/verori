
export const Input = ({ id, className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <input
        id={id}
        className={`w-full text-xs px-4 py-2.5 border border-zinc-200 dark:border-zinc-800 rounded-sm text-zinc-950 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-700 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-700 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-700 transition-all ${className || ""}`}
        {...props}
      />
    </div>
  )
}
