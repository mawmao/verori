"use server"

import { createAdminClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function approvePortal(token: string, portalId: string) {
  const supabase = createAdminClient()

  const { error } = await supabase
    .from("portal")
    .update({ status: "approved" })
    .eq("id", portalId)

  if (error) throw new Error("Failed to approve portal")

  await supabase.from("activity_event").insert({
    portal_id: portalId,
    type: "approved",
    actor: "client",
  })

  revalidatePath(`/p/${token}`)
  revalidatePath("/dashboard")
}


export async function requestChanges(token: string, portalId: string, reason: string) {
  const supabase = createAdminClient()

  const { error } = await supabase
    .from("portal")
    .update({ status: "changes_requested" })
    .eq("id", portalId)

  if (error) throw new Error("Failed to request changes")

  await supabase.from("activity_event").insert({
    portal_id: portalId,
    type: "changes_requested",
    actor: "client",
    metadata: { reason },
  })

  revalidatePath(`/p/${token}`)
  revalidatePath("/dashboard")
}
