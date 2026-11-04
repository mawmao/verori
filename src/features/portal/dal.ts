import { verifySession } from "@/lib/dal"
import { cache } from "react"
import { Portal } from "./portal.types"
import { createClient } from "@/lib/supabase/server"

export const getPortals = cache(async () => {
  const { user } = await verifySession()

  const supabase = await createClient()

  const { data, error } = await supabase
    .from("portal")
    .select("id, client_name, title, status, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching portals:", error)
    return []
  }

  return data as Portal[]
})
