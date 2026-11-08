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
  const file = formData.get('file') as File

  if (!file || file.size === 0) throw new Error('File is required')

  const fileExt = file.name.split('.').pop()
  const uniqueFilename = `${crypto.randomUUID()}.${fileExt}`
  const storageKey = `${user.id}/${uniqueFilename}`

  const { error: uploadError } = await supabase.storage
    .from('deliverables')
    .upload(storageKey, file)

  if (uploadError) {
    console.error(uploadError)
    throw new Error('Failed to upload file')
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
      name: file.name,
      mime_type: file.type,
      size: file.size,
      storage_key: storageKey,
    })

  if (fileError) {
    console.error(fileError)
    throw new Error('Failed to save file record')
  }

  const { error: activityError } = await supabase.from('activity_event').insert({
    portal_id: portal.id,
    type: 'created',
    actor: 'consultant',
  })

  if (activityError) {
    console.error("Failed to log activity:", activityError)
  }

  revalidatePath('/dashboard')
  redirect(`/dashboard?portal=${portal.id}`)
}
