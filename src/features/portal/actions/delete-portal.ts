"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function deletePortal(portalId: string) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authenticated")

  const { data: file } = await supabase
    .from("file")
    .select("storage_key")
    .eq("portal_id", portalId)
    .single()

  if (file?.storage_key) {
    await supabase.storage.from("deliverables").remove([file.storage_key])
  }

  const { error } = await supabase
    .from("portal")
    .delete()
    .eq("id", portalId)
    .eq("user_id", user.id)

  if (error) {
    console.error("Failed to delete portal:", error)
    throw new Error("Failed to delete portal")
  }

  revalidatePath("/dashboard")
  redirect("/dashboard")
}
