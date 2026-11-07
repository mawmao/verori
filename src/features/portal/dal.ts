import { verifySession } from "@/lib/dal"
import { cache } from "react"
import { Portal } from "./portal.types"
import { createClient } from "@/lib/supabase/server"
import { connection } from "next/server"

export const getPortals = cache(async () => {
  await connection()
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

export const getPortalMetadata = cache(async (id: string) => {
  await connection()
  const { user } = await verifySession()
  const supabase = await createClient()

  const { data } = await supabase
    .from("portal")
    .select("id, title, client_name, status, share_token, created_at, context_note")
    .eq("id", id)
    .eq("user_id", user.id)
    .single()

  return data
})

export const getPortalFile = cache(async (id: string) => {
  await connection()
  const supabase = await createClient()

  const { data: file } = await supabase
    .from("file")
    .select("id, name, mime_type, storage_key")
    .eq("portal_id", id)
    .single()

  if (!file) return null

  const { data: urlData } = await supabase.storage
    .from("deliverables")
    .createSignedUrl(file.storage_key, 3600)

  return { ...file, signedUrl: urlData?.signedUrl }
})

export const getPortalEvents = cache(async (id: string) => {
  await connection()
  const supabase = await createClient()

  const { data } = await supabase
    .from("activity_event")
    .select("id, type, actor, metadata, created_at")
    .eq("portal_id", id)
    .order("created_at", { ascending: true })

  return data ?? []
})
