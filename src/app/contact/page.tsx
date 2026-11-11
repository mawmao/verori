"use client"

import { useState } from "react"
import Link from "next/link"
import { VeroriIcon } from "@/components/icon/verori"
import { ArrowLeftIcon } from "@/components/icon/arrow-left"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Label } from "@/components/label"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = encodeURIComponent(`Verori Inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

    window.location.href = `mailto:privacy@verori.app?subject=${subject}&body=${body}`

    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 texture-overlay py-12 px-6">
      <div className="max-w-xl flex flex-col gap-8 ">
        <Link
          href="/login"
          className="inline-flex gap-2 items-center text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4"
        >
          <ArrowLeftIcon /> Back
        </Link>
        <div className="flex flex-col gap-6">
          <Link href="/login" className="flex items-center gap-2 w-fit hover:opacity-80 transition-opacity">
            <VeroriIcon className="size-6 text-zinc-950 dark:text-zinc-50" />
            <span className="text-xl font-semibold tracking-tighter uppercase text-zinc-950 dark:text-zinc-50">
              Verori
            </span>
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Contact Us
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Questions about the product, or need to exercise your data privacy rights?
              Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div className="verori-border rounded-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                placeholder="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="resize-none w-full min-h-[120px] p-3 text-xs border border-zinc-200 dark:border-zinc-800 rounded-sm text-zinc-950 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-700 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-700 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-700 transition-all "
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="mt-2 py-2.5! text-sm">
              {isSubmitting ? "Opening email client..." : "Send Message"}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-dashed border-zinc-200 dark:border-zinc-800 text-center">
            <p className="text-xs text-zinc-500">
              Prefer to email directly? <br />
              <a href="mailto:contact@verori.app" className="text-zincn-600 dark:text-zincn-400 hover:underline font-medium">
                contact@verori.app
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
