'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

function normalizeErrorMessage(errorMessage: string) {
  const msg = errorMessage.toLowerCase()
  if (msg.includes('invalid format') || msg.includes('one of email or phone must be set')) {
    return 'Please enter a valid email address.'
  }
  return 'An error occurred. Please try again later.'
}

type LoginMessage = { type: 'error' | 'success'; text: string } | null

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<LoginMessage>(null)

  const [step, setStep] = useState<'email' | 'code'>('email')
  const [emailToVerify, setEmailToVerify] = useState('')

  const supabase = createClient()
  const router = useRouter()

  const handleEmailLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email') as string

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${location.origin}/auth/callback` },
    })

    if (error) {
      setMessage({ type: 'error', text: normalizeErrorMessage(error.message) })
    } else {
      setEmailToVerify(email)
      setStep('code')
      setMessage({ type: 'success', text: 'Check your email for a login link or 6-digit code.' })
      form.reset()
    }

    setIsLoading(false)
  }

  const handleOtpVerify = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const token = formData.get('code') as string

    const { error } = await supabase.auth.verifyOtp({
      email: emailToVerify,
      token,
      type: 'email',
    })

    if (error) {
      setMessage({ type: 'error', text: 'Invalid or expired code. Please try again.' })
      setIsLoading(false)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  }

  const handleOAuthLogin = async (provider: 'google' | 'azure') => {
    setIsLoading(true)
    setMessage(null)

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${location.origin}/auth/callback` },
    })

    if (error) {
      setMessage({ type: 'error', text: 'Unable to connect. Please try again.' })
      setIsLoading(false)
    }
  }

  const handleBackToEmail = () => {
    setStep('email')
    setMessage(null)
  }

  return {
    isLoading,
    message,
    step,
    handleEmailLogin,
    handleOtpVerify,
    handleOAuthLogin,
    handleBackToEmail,
  }
}
