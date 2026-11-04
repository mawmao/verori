"use client"

import { timeAgo } from "@/lib/date"
import React from "react"

interface Props extends React.ComponentProps<"span"> {
  date: string
}

export function RelativeTime({ date, className, ...props }: Props) {
  return (
    <span
      className={`text-xs text-zinc-400 dark:text-zinc-500 ${className}`}
      {...props}
    >
      {timeAgo(date)}
    </span>
  )
}
