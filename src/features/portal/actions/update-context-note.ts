"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function updateContextNote(portalId: string, note: string) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authenticated")

  const { data: portal } = await supabase
    .from("portal")
    .select("status")
    .eq("id", portalId)
    .eq("user_id", user.id)
    .single()

  if (!portal) throw new Error("Portal not found")
  if (portal.status !== "sent") throw new Error("Cannot edit a portal that has already been viewed.")

  const { error } = await supabase
    .from("portal")
    .update({ context_note: note })
    .eq("id", portalId)

  if (error) throw new Error("Failed to update context note")

  revalidatePath("/dashboard")
}
