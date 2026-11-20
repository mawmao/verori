"use server"

import { createClient } from "@/lib/supabase/server"
import nodemailer from "nodemailer"
import { Resend } from "resend"
import { readFile } from "fs/promises"
import { join } from "path"

const isDev = process.env.NODE_ENV === "development"
const resend = new Resend(process.env.RESEND_API_KEY ?? "")
const localTransporter = nodemailer.createTransport({ host: "127.0.0.1", port: 54325, secure: false })

export type WaitlistState = {
  status: "idle" | "success" | "already_joined" | "error"
  message?: string
  email?: string
  signupId?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function joinWaitlist(_prevState: WaitlistState, formData: FormData): Promise<WaitlistState> {
  const honeypot = String(formData.get("website") || "").trim()
  if (honeypot) {
    return { status: "success" }
  }

  const rawEmail = String(formData.get("email") || "").trim().toLowerCase()
  const source = String(formData.get("source") || "waitlist_page").trim()

  if (!rawEmail || !EMAIL_REGEX.test(rawEmail)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    }
  }

  const supabase = await createClient()

  const { data, error } = await supabase
    .rpc("join_waitlist", { p_email: rawEmail, p_source: source })
    .single<{ signup_id: string; already_joined: boolean }>()

  if (error || !data) {
    console.error("Waitlist signup error:", error)
    return {
      status: "error",
      message: "Something went wrong. Please try again in a moment.",
    }
  }

  if (!data.already_joined) {

    const templatePath = join(process.cwd(), "src", "emails", "waitlist-confirmation.html")
    let htmlTemplate = await readFile(templatePath, "utf-8")

    htmlTemplate = htmlTemplate.replace(/{{\s*email\s*}}/g, rawEmail)

    const emailPayload = {
      from: isDev ? "Verori <no-reply@mail.verori.local>" : "Verori <no-reply@mail.verori.app>",
      to: rawEmail,
      subject: "You're on the Verori waitlist",
      html: htmlTemplate,
    }

    try {
      if (isDev) {
        await localTransporter.sendMail(emailPayload)
        console.log("Dev email sent to local inbucket: http://localhost:54324")
      } else {
        await resend.emails.send(emailPayload)
      }
    } catch (emailError) {
      console.error("Failed to send waitlist email:", emailError)
    }
  }

  return {
    status: data.already_joined ? "already_joined" : "success",
    email: rawEmail,
    signupId: data.signup_id,
  }
}


export async function saveWaitlistDeliverable(signupId: string, deliverableType: string) {
  if (!signupId || !deliverableType.trim()) return

  const supabase = await createClient()
  await supabase.rpc("set_waitlist_deliverable", {
    p_signup_id: signupId,
    p_deliverable_type: deliverableType.trim(),
  })
}
