import type { Metadata } from "next"
import ContactClient from "./_components/client"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact for Verori, the timestamped proof of delivery platform for freelancers.",
  alternates: { canonical: "https://verori.app/contact" },
  robots: { index: false, follow: true },
}

export default function Contact() {
  return <ContactClient />
}
