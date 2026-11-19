import { Status } from "./portal.types";

export const STATUS_ORDER: Status[] = ['sent', 'viewed', 'changes_requested', 'approved']

export const STATUSES: { value: Status; label: string; dot: string; text: string; badge: string }[] = [
  {
    value: "sent",
    label: "Sent",
    dot: "bg-zinc-400",
    text: "text-zinc-600 dark:text-zinc-400",
    badge:
      "bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800",
  },
  {
    value: "viewed",
    label: "Viewed",
    dot: "bg-amber-500",
    text: "text-amber-700 dark:text-amber-400",
    badge:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/50",
  },
  {
    value: "changes_requested",
    label: "Changes requested",
    dot: "bg-blue-500",
    text: "text-blue-700 dark:text-blue-400",
    badge:
      "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/50",
  },
  {
    value: "approved",
    label: "Approved",
    dot: "bg-teal-500",
    text: "text-teal-700 dark:text-teal-400",
    badge:
      "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/20 dark:text-teal-400 dark:border-teal-900/50",
  },
];
