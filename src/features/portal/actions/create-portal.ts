'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import sizeOf from 'image-size'

const MAX_FILE_SIZE = 1 * 1024 * 1024

export async function createPortal(formData: FormData) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not authenticated')

  const clientName = formData.get('client_name') as string
  const title = formData.get('title') as string
  const contextNote = formData.get('context_note') as string
  const file = formData.get('file') as File

  if (!file || file.size === 0) {
    throw new Error('File is required')
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error('File exceeds the 1MB limit.')
  }

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

  let metadata = {}
  if (file.type.startsWith('image/')) {
    try {
      const buffer = Buffer.from(await file.arrayBuffer())
      const dimensions = sizeOf(buffer)
      metadata = {
        width: dimensions.width,
        height: dimensions.height,
        orientation: dimensions.width && dimensions.height && dimensions.width > dimensions.height ? 'landscape' : 'portrait'
      }
    } catch (e) {
      console.error("Failed to parse image metadata", e)
    }
  }

  const { error: fileError } = await supabase
    .from('file')
    .insert({
      portal_id: portal.id,
      name: file.name,
      mime_type: file.type,
      size: file.size,
      storage_key: storageKey,
      metadata
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
  redirect(`/dashboard?portal=${portal.share_token}`)
}
