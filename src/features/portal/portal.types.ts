
export type Status = "sent" | "viewed" | "changes_requested" | "approved"

export interface Portal {
  id: string
  client_name: string
  title: string
  status: Status
  created_at: string
}
