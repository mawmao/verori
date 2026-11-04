import { cn } from "@/components/util";
import { Status } from "../portal.types";

export const STATUSES: { value: Status; label: string; dot: string; badge: string }[] = [
  {
    value: "sent",
    label: "Sent",
    dot: "bg-zinc-400",
    badge: "bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800",
  },
  {
    value: "viewed",
    label: "Viewed",
    dot: "bg-amber-500",
    badge: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/50",
  },
  {
    value: "changes_requested",
    label: "Changes requested",
    dot: "bg-blue-500",
    badge: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/50",
  },
  {
    value: "approved",
    label: "Approved",
    dot: "bg-teal-500",
    badge: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/20 dark:text-teal-400 dark:border-teal-900/50",
  },
]


interface Props extends React.ComponentProps<"span"> {
  status: Status | string
}

export function StatusBadge({ status, className, ...props }: Props) {
  const config = STATUSES.find((s) => s.value === status)

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border",
        config?.badge ?? "bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800",
        className
      )}
      {...props}
    >
      <span className={`size-1.5 rounded-full ${config?.dot ?? "bg-zinc-400"}`} />
      {config?.label ?? String(status).replaceAll("_", " ")}
    </span>
  )
}

