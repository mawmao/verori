
export type Status = "sent" | "viewed" | "changes_requested" | "approved"

export interface Portal {
  id: string
  share_token: string
  client_name: string
  context_note: string
  title: string
  status: Status
  created_at: string,
  last_activity_at: string,
  file?: {
    metadata?: {
      orientation?: 'portrait' | 'landscape'
    }
  }[]
}

export interface ActivityEvent {
  id: string
  type: 'created' | 'sent' | 'viewed' | 'changes_requested' | 'approved' | string
  actor?: 'owner' | 'client'
  created_at: string
  portal: {
    id: string
    title: string
    client_name: string
    share_token: string
  }
}

