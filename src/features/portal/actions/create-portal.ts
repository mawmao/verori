'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createPortal(formData: FormData) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not authenticated')

  const clientName = formData.get('client_name') as string
  const title = formData.get('title') as string
  const contextNote = formData.get('context_note') as string

  const storageKey = formData.get('storage_key') as string
  const fileName = formData.get('file_name') as string
  const mimeType = formData.get('mime_type') as string
  const fileSize = parseInt(formData.get('file_size') as string, 10)

  let metadata = {}
  try {
    metadata = JSON.parse(formData.get('metadata') as string || '{}')
  } catch (e) {
    console.error("Failed to parse metadata", e)
  }

  if (!storageKey) {
    throw new Error('File upload failed or was not provided.')
  }


  const { data: portal, error: portalError } = await supabase
    .from('portal')
    .insert({
      user_id: user.id,
      client_name: clientName,
      title: title,
      context_note: contextNote,
    })
    .select()
    .single()

  if (portalError) {
    console.error(portalError)
    throw new Error('Failed to create portal')
  }

  const { error: fileError } = await supabase
    .from('file')
    .insert({
      portal_id: portal.id,
      name: fileName,
      mime_type: mimeType,
      size: fileSize,
      storage_key: storageKey,
      metadata
    })

  if (fileError) {
    console.error(fileError)
    throw new Error('Failed to save file record')
  }

  revalidatePath('/dashboard')
  redirect(`/dashboard?portal=${portal.share_token}`)
}
