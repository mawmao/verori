import { cn } from "@/components/util";
import { Status } from "../portal.types";
import { STATUSES } from "../portal.constants";

interface Props extends React.ComponentProps<"span"> {
  status: Status | string;
  noBorder?: boolean;
}

export function StatusBadge({
  status,
  noBorder = false,
  className,
  ...props
}: Props) {
  const config = STATUSES.find((s) => s.value === status);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium whitespace-nowrap",
        noBorder
          ? config?.text ?? "text-zinc-600 dark:text-zinc-400"
          : cn(
              "px-2.5 py-1 rounded-md border",
              config?.badge ??
                "bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800"
            ),
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "size-1.5 rounded-full shrink-0",
          config?.dot ?? "bg-zinc-400"
        )}
      />
      {config?.label ?? String(status).replaceAll("_", " ")}
    </span>
  );
}
