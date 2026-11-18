import { Portal } from "@/features/portal/portal.types"

interface Props {
  portals: Portal[]
}

export function SignalBar({ portals }: Props) {
  const awaiting = portals.filter(p => p.status === 'sent' || p.status === 'viewed').length
  const changes = portals.filter(p => p.status === 'changes_requested').length
  const approved = portals.filter(p => p.status === 'approved').length

  const metrics = [
    { label: "Awaiting response", value: awaiting },
    { label: "Changes requested", value: changes },
    { label: "Approved", value: approved },
  ]

  return (
    <div className="flex gap-8 mb-8 px-1">
      {metrics.map((m) => (
        <div key={m.label} className="flex flex-col">
          <span className="font-mono text-2xl font-semibold tabular-nums text-zinc-950 dark:text-zinc-50">
            {m.value}
          </span>
          <span className="text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mt-1">
            {m.label}
          </span>
        </div>
      ))}
    </div>
  )
}
