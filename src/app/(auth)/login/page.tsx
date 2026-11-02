import Link from "next/link";

const features = [
  {
    title: "Passwordless Login",
    description: "Sign in securely by entering your email to receive a one-time magic link.",
  },
  {
    title: "Instant Authentication",
    description: "Click the emailed link to bypass password creation and access your dashboard immediately.",
  },
  {
    title: "Secure Sessions",
    description: "Access is protected by expiring tokens rather than reusable passwords.",
  },
];

export default function Login() {
  return (
    <main className="h-screen flex flex-col flex-1 items-center justify-center">
      <div className="flex flex-col gap-4 items-start text-left">
        <h1 className="max-w-xs text-5xl font-semibold leading-10 tracking-tight text-zinc-50">
          Verori
          <code className="align-top font-normal text-xs bg-zinc-900 px-3 py-1 rounded-sm ml-4 text-zinc-300">
            Login
          </code>
        </h1>
        <p className="max-w-[45ch] text-lg leading-8 text-zinc-400">
          A client-approval portal that tracks every deliverable through timestamped records of when it was sent, viewed, approved, or left unanswered.
        </p>

        <div className="w-full mt-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
            Features
          </h2>

          <ul className="flex flex-col divide-y divide-zinc-800 border-y border-zinc-800">
            {features.map((feature) => (
              <li key={feature.title} className="py-4">
                <h3 className="text-sm font-semibold text-zinc-200">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-500 mt-1">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/dashboard"
          className="bg-zinc-50 w-full py-2 mt-2 text-center rounded-sm text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition-colors cursor-pointer"
        >
          Send Magic Link
        </Link>
      </div>
    </main>
  )
}
