
export type Status = "sent" | "viewed" | "changes_requested" | "approved"

export interface Portal {
  id: string
  share_token: string
  client_name: string
  context_note: string
  title: string
  status: Status
  created_at: string
}
