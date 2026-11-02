import Link from "next/link";
import React from "react";

export default function PLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed top-4 left-4">
        <Link href="/" className="px-2 py-1 text-sm rounded-sm">
          Back
        </Link>
      </div>
      {children}
    </>
  )
}
