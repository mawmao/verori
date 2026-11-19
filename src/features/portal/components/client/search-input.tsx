import { CloseIcon } from "@/components/icon/close"
import { SearchIcon } from "@/components/icon/search"
import { Input } from "@/components/input"

interface Props {
  searchQuery: string
  onSearchChange: (q: string) => void
}

export function SearchInput({ searchQuery, onSearchChange }: Props) {
  return (
    <div className="relative flex-1 sm:w-60">
      <SearchIcon className="size-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Filter client or deliverable"
        aria-label="Filter client or deliverable"
        className="w-full h-9 pl-8 pr-8 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950/10 dark:focus:ring-zinc-50/10 focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors"
      />
      {searchQuery && (
        <button
          type="button"
          onClick={() => onSearchChange('')}
          aria-label="Clear search"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  )
}
